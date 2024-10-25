import { Given, When, Then } from '@wdio/cucumber-framework';
import MainPage from '../../page-objects/MainPage.js';
import SearchLanguagePage from '../../page-objects/search-language/SearchLanguagePage.js';
import { assert } from 'chai';
import AllureReporter from '@wdio/allure-reporter';
import Browser from '../../../framework/browser/Browser.js';


When(/^I input '(.*)' in search field$/, async (value) => {
    AllureReporter.addStep(`Input ${value} in search field`);
    await MainPage.searchInput(value);

})


When(/^I select '(.*)' language$/, async (language) => {
    AllureReporter.addStep(`Select ${language} from dropdown`);

    await MainPage.chooseLanguage(language)


   // await MainPage.selectLanguage(text)

    
    const dropDown = await $('//*[@id="searchLanguage"]')
    await dropDown.selectByVisibleText('Español');
    
})

When('I click on search', async () => {
    AllureReporter.addStep('Click search button');
    await MainPage.clickSubmit();

})

Then(/^Article page for '(.*)' is open$/, async (text) => {
    AllureReporter.addStep(`Displaying ${text} article page`);
    AllureReporter.addAttachment(`${text} article screenshot`, await Browser.addScreenshot(`${text}`))
    assert.isTrue(await SearchLanguagePage.isPageOpened(), `Article page about ${text} is not displayed`);

})