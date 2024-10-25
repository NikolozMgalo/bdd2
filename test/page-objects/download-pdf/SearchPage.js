import { Label, Button } from '../../../framework/elements/index.js';
import BasePage from '../../../framework/page/BasePage.js';
import { PreciseTextLocator } from '../../../framework/utils/locatorHelper.js';

class SearchPage extends BasePage {
    constructor() {
        super(new Label('//*[@id="left-navigation"]', 'After Search Page'), 'After Search Page')

        //I left this locator because test was not working on others for some reason
        this.toolsButton = new Button('//*[@id="vector-page-tools-dropdown"]', 'Tool Button')

        this.downloadAsPDFButton = new Button(PreciseTextLocator('Download as PDF'), 'Download as PDF Button')
    }

    async clickOnToolsButton() {
        await this.toolsButton.click();
    }

    async clickDownloadAsPDFButton() {
        await this.downloadAsPDFButton.click();
    }


}

export default new SearchPage();