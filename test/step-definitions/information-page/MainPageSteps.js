import { When, Given } from '@wdio/cucumber-framework';
import MainPage from '../../page-objects/MainPage.js';
import { assert } from 'chai';
import AllureReporter from '@wdio/allure-reporter';

When(/^I input '(.*)' in search$/, async (searchValue) => {
    AllureReporter.addStep(`Input ${searchValue} in search field`);
    await MainPage.searchInput(searchValue);

})

When('I click on submit', async () => {
    AllureReporter.addStep('click submit');
    await MainPage.clickSubmit();
    
})