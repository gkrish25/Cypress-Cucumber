@contact-us @regression
Feature: Web Driver University - Contact us

    Background: Pre Condition
        Given When i launch Web Driver University
        When I click on Contact Us link

    Scenario: Valid Contact us form Submission
        And I enter a First Name
        And I enter a Last Name
        And I enter an Email Address
        And I enter a Message
        And I click on Submit Button
        Then I should see a successful submission message

    Scenario: Valid Contact us form Submission
        And I enter a First Name
        And I enter a Last Name
        And I enter a Message
        And I click on Submit Button
        Then I should see a unsuccessful submission message

    Scenario: Valid Contact us form Submission with regular expression
        And I enter a specific First Name "Yashwanth"
        And I enter a specific Last Name "Krishna"
        And I enter a specific Email Address "yashwanth.krishna@gmail.com"
        And I enter a specific Message "need Infor for selenium" and number 1234 within comment field
        And I click on Submit Button
        Then I should see a successful submission message

    @smoke
    Scenario Outline: Valid Contact us page
        And I type a first name <firstName> and a last name '<lastName>'
        And I type emailid '<emailId>' and content '<content>'
        And I click on Submit Button
        Then I should presented with text '<message>'

        Examples:
            | firstName | lastName | emailId                 | content      | message                      |
            | Asha      | Gokul    | asha.gokul@gmail.com    | Hello buddy? | Thank You for your Message!  |
            | Gokul     | Krishna  | gokul.krishna@gmail.com | Hello world? | Thank You for your Message!  |
            | Asha      | M        | asha.M                  | Hello buddy? | Error: Invalid email address |
