import { When } from '@wdio/cucumber-framework';
import SearchPage from '../../page-objects/download-pdf/SearchPage.js';
import AllureReporter from '@wdio/allure-reporter';

When('I click tools button', async () => {
    AllureReporter.addStep('Click on tools button');
    await SearchPage.clickOnToolsButton();

})

When('I click download as PDF button', async () => {
    AllureReporter.addStep('clicking on download button');
    await SearchPage.clickDownloadAsPDFButton();
})