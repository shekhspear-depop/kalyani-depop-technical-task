# Depop Automation task

This is a Selenium Java cucumber JUnit framework developed for demonstrating automation skills for testing login functionality
on depop website.

# Feature file

- Feature file contains the scenarios in Gherkin format where examples drive the test data for various login functionality.
- Due to the limitation of the website's login trials available for public, I have only included 5 sets of test data in examples.
- The feature file scenario is quite self explanatory (which is the whole point of Gherkin format) of what test scenarios are being executed.

# Test Validation for login

- Valid login credentials => user logged in which verifies the Search button existence 
- invalid login credentials => user is not logged in but is thrown an error

# Test Exceptions

Some exceptions are added to handle in case valid login details fail to login due to too many login attempts

# Test Automation Report

- Cucumber's html report is produced in target folder of the project
- Go to file target/cucumber.html/index.html
- Right click on index.html and open in browser to view report

# Technologies and environment path variables to setup

Java8
Maven
set the classpath/environment variables

# Build and Run

`git clone https://github.com/kalyanibodanapu/kalyani-depop-technical-task.git`

Navigate to project folder

`mvn clean`

`mvn install`

To run test, right click on test/java/runner/RunDepopCukeJUnit and select 'Run'
or right click on test/java/features/<*.feature>

# Final PS

Gave as much information as I can and please do contact me if you need any further assistance

# Test Strategy document

Test Strategy document is included in this project repository for review for this login functionality project.