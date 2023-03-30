package steps;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.openqa.selenium.*;
import org.openqa.selenium.firefox.FirefoxDriver;
import java.io.BufferedReader;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.concurrent.TimeUnit;

public class GetLinks {
  WebDriver driver;
  WebElement link;
  int count = 1;
  int countNextPage = 0;
  FileWriter writer;

  @Given("the user is in the recipes page")
  public void theUserIsInTheRecipesPage() throws InterruptedException {
    System.setProperty("webdriver.gecko.driver", "drivers/geckodriver");
    driver = new FirefoxDriver();
    driver.manage().window().maximize();
    driver.navigate().to("https://www.bbcgoodfood.com/search?q=");
    Thread.sleep(3000);
  }

  @Given("the user is in the scraper")
  public void theUserIsInTheScraper() throws InterruptedException {
    System.setProperty("webdriver.gecko.driver", "drivers/geckodriver");
    driver = new FirefoxDriver();
    driver.manage().window().maximize();
    driver.navigate().to("http://localhost:3000/");
    Thread.sleep(3000);
  }

  @When("the user identify elements with href")
  public void theUserIdentifyElementsWithHref() {
    while(count < 5){
      try {
        Thread.sleep(3000);

        if(count == 5){
          count++;
          countNextPage++;
        }

        link = driver.findElement(By.cssSelector(".layout-md-rail__primary div:nth-child("+count+") .card .card__content .link"));
        writer = new FileWriter("../data/links.txt", true);
        System.out.println(link.getAttribute("href"));
        writer.append(link.getAttribute("href")).append("\n");
        writer.close();
        count++;
        countNextPage++;

        driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
        if (countNextPage == 30) {
          WebElement element1 = driver.findElement(By.cssSelector(".load-more-paginator__btn"));
          JavascriptExecutor executor1 = (JavascriptExecutor) driver;
          executor1.executeScript("arguments[0].click();", element1);
          countNextPage = 0;
        }

      } catch (Exception io) {
        io.printStackTrace();
      }
    }
  }

  @When("the user get data")
  public void theUserGetData() throws InterruptedException {
    Thread.sleep(5000);
    BufferedReader reader;
    try {
      reader = new BufferedReader(new FileReader("../data/links.txt"));
      String line = reader.readLine();

      while (line != null) {
        Thread.sleep(3000);
        System.out.println(line);

        driver.findElement(By.cssSelector("form div input")).sendKeys(line);

        Thread.sleep(3000);
        WebElement element = driver.findElement(By.cssSelector(".button"));
        JavascriptExecutor executor1 = (JavascriptExecutor) driver;
        executor1.executeScript("arguments[0].click();", element);
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);

        // read next line
        line = reader.readLine();
      }
      reader.close();

    }
    catch (IOException e) {
      e.printStackTrace();
    }
  }

  @Then("user successfully get data")
  public void userSucessfullyGetData() {
    driver.close();
  }
}