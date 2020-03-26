package pages.locators;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class Depop_Login_Page_Locators {

    @FindBy(how = How.CSS, using = "[data-testid=login__form]")
    public WebElement loginForm;

    @FindBy(how = How.ID, using = "username")
    public WebElement username;

    @FindBy(how = How.ID, using = "password")
    public WebElement password;

    @FindBy(how = How.CSS, using = "[data-testid=login__cta]")
    public WebElement loginButton;

    @FindBy(how = How.CSS, using = "[data-testid=login__error--username]")
    public WebElement userRequiredError;

    @FindBy(how = How.CSS, using = "[data-testid=login__error--password]")
    public WebElement passwordRequiredError;

    @FindBy(how = How.CSS, using = "[data-testid=login__error--server]")
    public WebElement loginError;

    @FindBy(how = How.CSS, using = "[href='/search/']")
    public WebElement depopSearch;
}
