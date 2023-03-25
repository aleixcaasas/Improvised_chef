#Author: your.email@your.domain.com
#Keywords Summary:
#Feature: List of scenarios.
#Scenario: Business rule through list of steps with arguments.
#Given: Some precondition step
#when: Some key actions
#Then: to observe outcomes or validation
#And, But: To enumerate more Given, When, Then steps
#Scenario Outline: List of steps for data-driven as an Examples and <placeholder>
#Examples: Container for s table
#Background: List of steps run before each of the scenarios
#""" (Doc Strings)
#| (Data Tables)
#@ (Tags/Labels):To group Scenarios
#<> (placeholder)
#""
## (Comments)
#Sample feature Definition Template
Feature: Links
  Scenario: Get Links
    Given the user is in the recipes page
    When the user identify elements with href
    Then user successfully get data

  Scenario: Get Data
    Given the user is in the scraper
    When the user get data
    Then user successfully get data