package steps;

import base.DepopDriver;
import io.cucumber.java.After;
import io.cucumber.java.Scenario;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;

import java.util.Date;

public class AfterActions {
    @After
    public static void tearDown(Scenario scenario) {

        //capture a screenshot when a step fails
        WebDriver driver = DepopDriver.getWebDriver();
        System.out.println("Is scenario failed? => " + scenario.isFailed());
        if(scenario.isFailed()) {
            byte[] screenshotBytes = ((TakesScreenshot) driver).getScreenshotAs(
                    OutputType.BYTES
            );
            String screenshotName = "screenshot_" + new Date();
            scenario.embed(screenshotBytes, "image/png", screenshotName);
        }
        DepopDriver.tearDown();
    }
}
