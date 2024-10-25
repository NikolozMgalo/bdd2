import { When } from '@wdio/cucumber-framework';
import InformationPage from '../../page-objects/page-information/InformationSearchPage.js';
import AllureReporter from '@wdio/allure-reporter';

When('I click on tools menu', async () => {
    AllureReporter.addStep('Click on tools button');
    await InformationPage.clickOnToolsButton();

})

When('I click on page information button', async () => {
    AllureReporter.addStep('click on page information');
    await InformationPage.clickOnPageInfoButton();
    
})

