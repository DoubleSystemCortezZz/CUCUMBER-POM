import {
    Given,
    When,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";
  import { googleMainPage } from "@pages/GoogleMainPage";

Given('I navigate to Google', () => {
    googleMainPage.navigateMainPage()
    googleMainPage.acceptCookies()
})

When('I search for {string}', (input) => {
    googleMainPage.fillSearchField(input)
})

Then('I expect to see results for {string}', (results) => {
    googleMainPage.checkResults(results)
})