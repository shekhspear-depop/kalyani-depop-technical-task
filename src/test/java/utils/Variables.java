package utils;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;

public class Variables {

    private static final String DEPOP_ENV_PROPERTIES_LOCATION = "src/main/resources/depop_webdriver.properties";
    private static final String DEPOP_LOGIN_ERROR_MESSAGES_LOCATION = "src/test/resources/resource_bundler/login_error_messages.properties";

    public static String getEnvProperty(String property) throws IOException {
        return getKeyValue(DEPOP_ENV_PROPERTIES_LOCATION, property);
    }

    public static String getLoginErrorMessage(String errorFor) throws IOException {
        return getKeyValue(DEPOP_LOGIN_ERROR_MESSAGES_LOCATION, errorFor);
    }

    private static String getKeyValue(String location, String property) throws IOException {
        Properties properties = new Properties();
        FileInputStream fileInputStream = new FileInputStream(location);
        properties.load(fileInputStream);
        return properties.getProperty(property);
    }
}
