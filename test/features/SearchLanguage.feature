Feature: Wikipedia Test
    Change language and search value

    Background:
        Given I open Wikipedia page

    Scenario: Search language
        Given Main page is displayed
        When I input 'Gabriel García Márquez' in search field
        And I select 'Español' language
        And I click on search
        Then Article page for 'Gabriel García Márquez' is open

        