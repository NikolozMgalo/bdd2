Feature: Wikipedia Test
    Search and access information page

    Background:
        Given I open Wikipedia page

    Scenario: Page information
        Given Main page is displayed
        When I input 'Bengal Tiger' in search
        And I click on submit
        And I click on tools menu
        And I click on page information button
        Then Information page for 'Bengal tiger' article is displayed
