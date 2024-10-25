import { When, Given } from '@wdio/cucumber-framework';
import MainPage from '../../page-objects/MainPage.js';
import AllureReporter from '@wdio/allure-reporter';


When(/^I input '(.*)' in search input$/, async (searchValue) => {
    AllureReporter.addStep(`Input ${searchValue} in search field`);
    await MainPage.searchInput(searchValue);

})

When('I click on submit button', async () => {
    AllureReporter.addStep('Clicking on submit button');
    await MainPage.clickSubmit();

})