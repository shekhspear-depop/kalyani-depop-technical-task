$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/features/depop_login.feature");
formatter.feature({
  "name": "Depop Login",
  "description": "  As a depop customer\n  I want to verify logging in into depop website",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Valid/Invalid Logging in",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Navigate to Depop Login page",
  "keyword": "Given "
});
formatter.step({
  "name": "Enter \u003cisValid\u003e login details username_\u003cusername\u003e and password_\u003cpassword\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "User is \u003cisLoggedIn\u003e with \u003cisValid\u003e details",
  "keyword": "Then "
});
formatter.examples({
  "name": "login credentials",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "isValid",
        "username",
        "password",
        "isLoggedIn"
      ]
    },
    {
      "cells": [
        "\"emptyUser\"",
        "\"\"",
        "\"kAlyani123!\"",
        "\"userRequiredError\""
      ]
    },
    {
      "cells": [
        "\"emptyPassword\"",
        "\"kalyanibodanapu\"",
        "\"\"",
        "\"PasswordRequiredError\""
      ]
    },
    {
      "cells": [
        "\"invalid\"",
        "\"kalyani8bodanapu\"",
        "\"kni123!\"",
        "\"NotLoggedIn\""
      ]
    },
    {
      "cells": [
        "\"invalid\"",
        "\"kalyanibodanapu\"",
        "\"kni123!\"",
        "\"NotLoggedIn\""
      ]
    },
    {
      "cells": [
        "\"valid\"",
        "\"kalyanibodanapu\"",
        "\"kAlyani123!\"",
        "\"LoggedIn\""
      ]
    },
    {
      "cells": [
        "\"invalid\"",
        "\"123456\"",
        "\"kAlyani123!\"",
        "\"NotLoggedIn\""
      ]
    },
    {
      "cells": [
        "\"valid\"",
        "\"bkalyani10@yahoo.com\"",
        "\"kAlyani123!\"",
        "\"LoggedIn\""
      ]
    },
    {
      "cells": [
        "\"unknownError\"",
        "\"00000$^\"",
        "\"4534353\"",
        "\"unknownError\""
      ]
    }
  ]
});
formatter.scenario({
  "name": "Valid/Invalid Logging in",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Navigate to Depop Login page",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.Depop_Login.navigate_to_Depop_Login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter \"emptyUser\" login details username_\"\" and password_\"kAlyani123!\"",
  "keyword": "When "
});
formatter.match({
  "location": "steps.Depop_Login.enter_login_details_username__and_password_(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User is \"userRequiredError\" with \"emptyUser\" details",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.Depop_Login.user_is_with_details(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Valid/Invalid Logging in",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Navigate to Depop Login page",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.Depop_Login.navigate_to_Depop_Login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter \"emptyPassword\" login details username_\"kalyanibodanapu\" and password_\"\"",
  "keyword": "When "
});
formatter.match({
  "location": "steps.Depop_Login.enter_login_details_username__and_password_(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User is \"PasswordRequiredError\" with \"emptyPassword\" details",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.Depop_Login.user_is_with_details(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Valid/Invalid Logging in",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Navigate to Depop Login page",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.Depop_Login.navigate_to_Depop_Login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter \"invalid\" login details username_\"kalyani8bodanapu\" and password_\"kni123!\"",
  "keyword": "When "
});
formatter.match({
  "location": "steps.Depop_Login.enter_login_details_username__and_password_(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User is \"NotLoggedIn\" with \"invalid\" details",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.Depop_Login.user_is_with_details(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Valid/Invalid Logging in",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Navigate to Depop Login page",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.Depop_Login.navigate_to_Depop_Login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter \"invalid\" login details username_\"kalyanibodanapu\" and password_\"kni123!\"",
  "keyword": "When "
});
formatter.match({
  "location": "steps.Depop_Login.enter_login_details_username__and_password_(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User is \"NotLoggedIn\" with \"invalid\" details",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.Depop_Login.user_is_with_details(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Valid/Invalid Logging in",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Navigate to Depop Login page",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.Depop_Login.navigate_to_Depop_Login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter \"valid\" login details username_\"kalyanibodanapu\" and password_\"kAlyani123!\"",
  "keyword": "When "
});
formatter.match({
  "location": "steps.Depop_Login.enter_login_details_username__and_password_(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User is \"LoggedIn\" with \"valid\" details",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.Depop_Login.user_is_with_details(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Valid/Invalid Logging in",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Navigate to Depop Login page",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.Depop_Login.navigate_to_Depop_Login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter \"invalid\" login details username_\"123456\" and password_\"kAlyani123!\"",
  "keyword": "When "
});
formatter.match({
  "location": "steps.Depop_Login.enter_login_details_username__and_password_(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User is \"NotLoggedIn\" with \"invalid\" details",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.Depop_Login.user_is_with_details(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Valid/Invalid Logging in",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Navigate to Depop Login page",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.Depop_Login.navigate_to_Depop_Login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter \"valid\" login details username_\"bkalyani10@yahoo.com\" and password_\"kAlyani123!\"",
  "keyword": "When "
});
formatter.match({
  "location": "steps.Depop_Login.enter_login_details_username__and_password_(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User is \"LoggedIn\" with \"valid\" details",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.Depop_Login.user_is_with_details(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Valid/Invalid Logging in",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Navigate to Depop Login page",
  "keyword": "Given "
});
formatter.match({
  "location": "steps.Depop_Login.navigate_to_Depop_Login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter \"unknownError\" login details username_\"00000$^\" and password_\"4534353\"",
  "keyword": "When "
});
formatter.match({
  "location": "steps.Depop_Login.enter_login_details_username__and_password_(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User is \"unknownError\" with \"unknownError\" details",
  "keyword": "Then "
});
formatter.match({
  "location": "steps.Depop_Login.user_is_with_details(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});