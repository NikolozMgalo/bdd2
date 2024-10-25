import { Label } from '../../../framework/elements/index.js';
import BasePage from '../../../framework/page/BasePage.js';
import { PreciseTextLocator } from '../../../framework/utils/locatorHelper.js';

class SearchLanguagePage extends BasePage {
    constructor() {
        super(new Label('//*[@id="content"]', 'Search Language page'))
    }
}

export default new SearchLanguagePage();