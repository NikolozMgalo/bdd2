Feature: Wikipedia Test
    Search article and download pdf

    Background:
        Given I open Wikipedia page

    Scenario: Download PDF
        Given Main page is displayed
        When I input 'Albert Einstein' in search input
        And I click on submit button
        And I click tools button
        And I click download as PDF button
        And I check file name is 'Albert_Einstein.pdf'
        And I download PDF article from download page
        Then I should see 'Albert_Einstein.pdf' in downloads folder