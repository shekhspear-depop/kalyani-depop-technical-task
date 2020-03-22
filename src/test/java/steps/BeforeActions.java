package steps;

import base.DepopDriver;
import io.cucumber.java.Before;

public class BeforeActions {
    @Before
    public static void setup() {
        DepopDriver.setUp();
    }
}
