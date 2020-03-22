package base;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.util.concurrent.TimeUnit;

public class DepopDriver {

    private static DepopDriver depopDriver;

    private static WebDriver webDriver;

    private static WebDriverWait webDriverWait;
    public final static int TIMEOUT = 30;
    public final static int PAGE_LOAD_TIMEOUT = 50;

    private DepopDriver() {
        System.setProperty("webdriver.chrome.driver", "src/test/resources/executables/chromedriver");

        webDriver = new ChromeDriver();
        webDriver.manage().window().maximize();
        webDriverWait = new WebDriverWait(webDriver, TIMEOUT);
        webDriver.manage().timeouts().implicitlyWait(TIMEOUT, TimeUnit.SECONDS);
        webDriver.manage().timeouts().pageLoadTimeout(PAGE_LOAD_TIMEOUT, TimeUnit.SECONDS);

        String window = webDriver.getWindowHandle();
        System.out.println("Window => " + window);
    }

    public static void getPage(String url) {
        System.out.println("Loading url => " + url);
        webDriver.get(url);
    }

    public static WebDriver getWebDriver() {
        return webDriver;
    }

    public static void setUp() {
        if(depopDriver == null) {
            depopDriver = new DepopDriver();
        }
    }

    public static void tearDown() {
        if(webDriver != null) {
            webDriver.close();
            webDriver.quit();
        }
        depopDriver = null;
    }
}
