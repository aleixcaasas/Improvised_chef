package test;

import io.cucumber.testng.AbstractTestNGCucumberTests;
import io.cucumber.testng.CucumberOptions;

@CucumberOptions(features="src/test/java/features/getlinks.feature", glue="steps")
public class RunGetLinksTest extends AbstractTestNGCucumberTests {}