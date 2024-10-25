import Browser from '../../../framework/browser/Browser.js'
import { When, Then } from '@wdio/cucumber-framework'
import { assert } from 'chai';
import DownloadPage from '../../page-objects/download-pdf/DownloadPage.js'
import { downloadDir } from '../../../framework/configs/main.wdio.conf.js';
import * as path from 'path'
import AllureReporter from '@wdio/allure-reporter';

When(/^I check file name is '(.*)'$/, async (fileName) => {
    AllureReporter.addStep(`Checking name of the file is ${fileName}`);
    assert.isTrue(await DownloadPage.checkFileName(fileName), `Filename on page is not ${fileName}`);

})

When('I download PDF article from download page', async () => {
    AllureReporter.addStep('Downloading PDF');
    await DownloadPage.downloadFile();

})

Then(/^I should see '(.*)' in downloads folder$/, async (fileName) => {
    const downloadFilePath = path.join(downloadDir, fileName);

    AllureReporter.addStep(`Checking ${fileName} exists in local directory`)
    assert.isTrue(await Browser.File.isFileExist(downloadFilePath), 'File was not downloaded');    
})