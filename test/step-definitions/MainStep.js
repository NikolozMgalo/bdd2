import Browser from '../../framework/browser/Browser.js';
import { Given } from '@wdio/cucumber-framework';
import { mainConfig } from '../../framework/configs/main.wdio.conf.js';
import { assert } from 'chai';
import MainPage from '../page-objects/MainPage.js';
import AllureReporter from '@wdio/allure-reporter';


Given('I open Wikipedia page', async () => {
    AllureReporter.addStep('Opening main page');
    await Browser.openUrl(mainConfig.baseUrl);
    
});

Given('Main page is displayed', async () => {
    AllureReporter.addStep('Main page is displayed');
    assert.isTrue(await MainPage.isPageOpened(), 'Main Page not Open');

})