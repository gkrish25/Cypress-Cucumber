@login @regression
Feature: Login to Webdriver Portal

    Scenario Outline: Validate login to Website

        #Given When i launch Web Driver University
        #When I click on Login link
        Given I navigate to Login Page
        And I type user name '<username>' and i type password '<password>'
        And I click on Login Button
        Then I should see alert '<message>'

        Examples:
            | username  | password     | message              |
            | webdriver | webdriver123 | validation succeeded |
            | webdriver | webdriver    | validation failed    |

