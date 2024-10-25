import { Label } from '../../../framework/elements/index.js';
import BasePage from '../../../framework/page/BasePage.js';
import { PreciseTextLocator } from '../../../framework/utils/locatorHelper.js';

class InformationPage extends BasePage {
    constructor() {
        super(new Label('//*[@id="bodyContent"]'), 'Information page')
    }
}

export default new InformationPage();