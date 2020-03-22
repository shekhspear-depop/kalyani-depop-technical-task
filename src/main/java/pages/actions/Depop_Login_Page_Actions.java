package pages.actions;

import base.DepopDriver;
import org.openqa.selenium.support.PageFactory;
import pages.locators.Depop_Login_Page_Locators;

public class Depop_Login_Page_Actions {

    Depop_Login_Page_Locators locators = null;

    public Depop_Login_Page_Actions() {
        this.locators = new Depop_Login_Page_Locators();
        PageFactory.initElements(DepopDriver.getWebDriver(), locators);
    }

    public boolean amIOnLoginPage() {
        return locators.loginForm.isDisplayed();
    }

    public void enterUsername(String username) {
        locators.username.clear();
        locators.username.sendKeys(username);
    }

    public void enterPassword(String password) {
        locators.password.clear();
        locators.password.sendKeys(password);
    }

    public void clickLoginButton() {
        locators.loginButton.click();
    }

    public boolean isInvalidError() {
        return locators.loginError.isDisplayed();
    }

    public String getLoginErrorMessage() {
        System.out.println(locators.loginError.getText());
        return locators.loginError.getText();
    }

    public String isUserLoggedIn() {
        if(locators.depopSearch.isDisplayed()) {
            return "LoggedIn";
        }
        return "NotLoggedIn";
    }

}
