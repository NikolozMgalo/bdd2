import { Label, Input, Button, Dropdown } from '../../framework/elements/index.js';
import BasePage from '../../framework/page/BasePage.js';
import { PreciseTextLocator } from '../../framework/utils/locatorHelper.js';


class MainPage extends BasePage {
    constructor() {
        super(new Label(PreciseTextLocator('The Free Encyclopedia'), 'Wikipedia home page'), 'Homepage')

        this.searchInputField = new Input('//*[@id="searchInput"]', 'Search Input')

        this.submitButton = new Button('//*[@type="submit"]', 'Submit Button')

        this.languageDropDown = new Button('//*[@id="searchLanguage"]', 'Language Dropdown')

        this.languageOption = (option) => new Label(`//option[@value='es']`, 'Language selector')

        this.selectSpanish = new Label('//option[@value="es"]', 'Language selector')

    }

    async searchInput(value) {
        await this.searchInputField.typeText(value);
    }

    async clickSubmit() {
        await this.submitButton.click();
    }

    async selectLanguage(option) {
        await this.languageDropDown.selectOptionByText(option)
    }

    async chooseLanguage(language) {
        await this.languageDropDown.click()
        //await this.languageDropDown.selectOptionByText(language)
        await this.selectSpanish.click()
    }

}

export default new MainPage();