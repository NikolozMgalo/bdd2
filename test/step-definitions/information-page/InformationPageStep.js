import { Then } from '@wdio/cucumber-framework';
import { assert } from 'chai';
import InformationPage from '../../page-objects/page-information/InformationPage.js';
import AllureReporter from '@wdio/allure-reporter';
import Browser from '../../../framework/browser/Browser.js';

Then(/^Information page for '(.*)' article is displayed$/, async (text) => {
    AllureReporter.addStep(`Displaying information about ${text}`);
    AllureReporter.addAttachment(`${text} screenshot`, await Browser.addScreenshot())
    assert.isTrue(await InformationPage.isPageOpened(), 'Information page is not open');

})
