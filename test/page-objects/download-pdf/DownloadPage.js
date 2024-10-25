import { Label, Button } from '../../../framework/elements/index.js';
import BasePage from '../../../framework/page/BasePage.js';
import { PreciseTextLocator } from '../../../framework/utils/locatorHelper.js';

class DownloadPage extends BasePage {
    constructor() {
        super(new Label('//*[@id="content"]', 'Download Page'), 'Download Page')

        this.downloadFileName = (text) => new Label(PreciseTextLocator(text), 'Download File Name')

        this.downloadButton = new Button('//*[@type="submit"]', 'Download Button');
    }

    async checkFileName(fileName) {
        return this.downloadFileName(fileName).state().isDisplayed()
    }

    async downloadFile() {
        await this.downloadButton.click()
    }
}

export default new DownloadPage();