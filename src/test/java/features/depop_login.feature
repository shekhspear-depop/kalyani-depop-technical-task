Feature: Depop Login
  As a depop customer
  I want to verify logging in into depop website

  Scenario Outline: Valid/Invalid Logging in
    Given Navigate to Depop Login page
    When Enter <isValid> login details username_<username> and password_<password>
    Then User is <isLoggedIn> with <isValid> details

    Examples: login credentials
      |isValid        |username                      |password       |isLoggedIn              |
      |"emptyUser"    |""                            |"kAlyani123!"  |"userRequiredError"     |
      |"emptyPassword"|"kalyanibodanapu"             |""             |"PasswordRequiredError" |
      |"invalid"      |"kalyani8bodanapu"            |"kni123!"      |"NotLoggedIn"           |
      |"invalid"      |"kalyanibodanapu"             |"kni123!"      |"NotLoggedIn"           |
      |"valid"        |"kalyanibodanapu"             |"kAlyani123!"  |"LoggedIn"              |
      |"invalid"      |"123456"                      |"kAlyani123!"  |"NotLoggedIn"           |
      |"valid"        |"bkalyani10@yahoo.com"        |"kAlyani123!"  |"LoggedIn"              |
      |"unknownError" |"00000$^"                     |"4534353"      |"unknownError"          |
