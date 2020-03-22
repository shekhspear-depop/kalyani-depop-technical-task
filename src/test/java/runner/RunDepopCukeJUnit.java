package runner;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        plugin = {"json:target/cucumber.json",
                "pretty",
                "html:target/cucumber.html",
        },
        features = "src/test/java/features",
        glue = { "steps" },
        stepNotifications = true,
        monochrome = true
)
public class RunDepopCukeJUnit {
}
