package steps;

import base.DepopDriver;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import pages.actions.Depop_Login_Page_Actions;

import java.io.IOException;

import static base.Resources.getLoginResource;
import static org.junit.Assert.*;
import static utils.Variables.getEnvProperty;
import static utils.Variables.getLoginErrorMessage;

public class Depop_Login {

    Depop_Login_Page_Actions depop_login_page_actions = new Depop_Login_Page_Actions();

    @Given("Navigate to Depop Login page")
    public void navigate_to_Depop_Login_page() throws IOException {
        DepopDriver.getPage(getEnvProperty("HOST") + getLoginResource());
    }

    @When("Enter {string} login details username_{string} and password_{string}")
    public void enter_login_details_username__and_password_(String isValid, String username, String password) {

        assertTrue(depop_login_page_actions.amIOnLoginPage());

        depop_login_page_actions.enterUsername(username);
        depop_login_page_actions.enterPassword(password);
        depop_login_page_actions.clickLoginButton();
    }

    @Then("User is {string} with {string} details")
    public void user_is_with_details(String isLoggedIn, String isValid) throws IOException {
        switch (isValid) {
            case "emptyUser":
                assertTrue(depop_login_page_actions.isUserRequiredError());
                assertEquals(getLoginErrorMessage("LOGIN_USER_REQUIRED_ERROR_MESSAGE"), depop_login_page_actions.getUserLoginErrorMessage());
                break;

            case "emptyPassword":
                assertTrue(depop_login_page_actions.isPasswordRequiredError());
                assertEquals(getLoginErrorMessage("LOGIN_PASSWORD_REQUIRED_ERROR_MESSAGE"), depop_login_page_actions.getPasswordLoginErrorMessage());
                break;

            case "invalid":
                assertTrue(depop_login_page_actions.isInvalidError());
                assertEquals(getLoginErrorMessage("LOGIN_ERROR_MESSAGE"), depop_login_page_actions.getLoginErrorMessage());
                break;

            case "valid":
                assertEquals(isLoggedIn, depop_login_page_actions.isUserLoggedIn());
                break;

            case "unknownError":
                assertTrue(depop_login_page_actions.isInvalidError());
                assertEquals(getLoginErrorMessage("LOGIN_UNKNOWN_ERROR"), depop_login_page_actions.getLoginErrorMessage());
                break;

            default:
                assertFalse("Feature file entered is not in assertable condition.. please check feature file for valid input", false);
                break;
        }
    }
}
