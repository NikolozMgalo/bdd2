import { Label, Button } from '../../../framework/elements/index.js';
import BasePage from '../../../framework/page/BasePage.js';
import { PreciseTextLocator } from '../../../framework/utils/locatorHelper.js';

class InformationSearchPage extends BasePage {
    constructor() {
        super(new Label('//*[@id="left-navigation"]', 'Search Page'), 'Search Page')

        //I left this locator because test was not working on others for some reason
        this.toolsButton = new Button('//*[@id="vector-page-tools-dropdown"]', 'Tool Button');

        this.pageInfoButton = new Button(PreciseTextLocator('Page information', 'Page Information Button'), 'Page Information Button')
    }

    async clickOnToolsButton() {
        await this.toolsButton.click();
    }

    async clickOnPageInfoButton() {
        await this.pageInfoButton.click();
    }
}

export default new InformationSearchPage();