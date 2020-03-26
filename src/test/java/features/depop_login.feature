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


#  Scenario: InValid Logging in with empty fields
#    Given Navigate to Depop Login page
#    When Enter empty fields in username and password and click login
#    Then User is shown Error message


#    logging with correct username and password text fields (automation)
#    logging with correct email and password text fields (automation)
#    logging with incorrect email text details (automation)
#    logging wih incorrect username text details (automation)
#    click login button with username empty (automation)
#    click login button with password empty (automation)

#    logging with facebook with existing facebook session logged in cookie
#    logging with facebook with no facebook logged in session

#    Verify cookies for session management
#    Verify if already logged in and revisiting on another browser or tab still retains the logging in session
#    Close the browser and open to see if logging should still retain

#  Login Error message is different and account is blocked for several hours after 10 consecutive attempts of login
