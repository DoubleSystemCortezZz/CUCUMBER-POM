Feature: Searching in Google

Scenario: Searching for an element
    Given I navigate to Google
    When I search for "dogs"
    Then I expect to see results for "dogs"
