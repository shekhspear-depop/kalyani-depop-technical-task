package pages.actions;

import base.DepopDriver;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.StaleElementReferenceException;
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

    public boolean isUserRequiredError() {
        return locators.userRequiredError.isDisplayed();
    }

    public boolean isPasswordRequiredError() {
        return locators.passwordRequiredError.isDisplayed();
    }

    public boolean isInvalidError() {
        return locators.loginError.isDisplayed();
    }

    public String getUserLoginErrorMessage() {
        System.out.println(locators.userRequiredError.getText());
        return locators.userRequiredError.getText();
    }

    public String getPasswordLoginErrorMessage() {
        System.out.println(locators.passwordRequiredError.getText());
        return locators.passwordRequiredError.getText();
    }

    public String getLoginErrorMessage() {
        System.out.println(locators.loginError.getText());
        return locators.loginError.getText();
    }

    public String isUserLoggedIn() {
        boolean searchButton = false;

        try {
            searchButton = locators.depopSearch.isDisplayed();
        }
        catch (NoSuchElementException | StaleElementReferenceException e) {
            System.out.println(e);
        }

        if(searchButton) {
            return "LoggedIn";
        }
        return "NotLoggedIn";
    }

}
