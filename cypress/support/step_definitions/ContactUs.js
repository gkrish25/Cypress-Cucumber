import { Then, When} from "@badeball/cypress-cucumber-preprocessor";

import Contact_US_PO from "../pageObject/Contact_US_PO";

const conactUs = new Contact_US_PO;

When ("I enter a First Name",()=>{
    //cy.get("input[name='first_name']").type('Gokul')
    conactUs.type_Username('Gokul');
})

When ("I enter a Last Name",()=>{
    //cy.get("input[name='last_name']").type('Krishna');
    conactUs.type_lastname('krishna');
})

When ("I enter an Email Address",()=>{
    //cy.get("input[name='email']").type('gokultest@gmail.com');
    conactUs.type_email('gokultest@gmail.com');
})

When("I enter a Message",()=>{
    //cy.get("textarea[name='message']").type('Need more information on cypress Automation');
    conactUs.type_textmessage('Need more information on cypress Automation');
})

When("I click on Submit Button",()=>{
    cy.get("input[type='submit']").click();
    conactUs.clickOn_Submit_Button();
})
Then("I should see a successful submission message", ()=>{
    cy.get("h1").should('have.text','Thank You for your Message!');
})

Then("I should see a unsuccessful submission message",()=>{
    cy.get("body").contains('Error: Invalid email address');
})

When('I enter a specific First Name {string}',(firstName)=>{
    //cy.get("input[name='first_name']").type(firstName);
    conactUs.type_Username(firstName);
})

When('I enter a specific Last Name {string}',(lastName)=>{
    //cy.get("input[name='last_name']").type(lastName);
    conactUs.type_lastname(lastName);
})
When('I enter a specific Email Address {string}',(emailId)=>{
    //cy.get("input[name='email']").type(emailId);
    conactUs.type_email(emailId);
})
When('I enter a specific Message {string} and number {int} within comment field',(message,number)=>{
    cy.get("textarea[name='message']").type(message +"" + number);
})
When ("I type a first name {word} and a last name {string}",(firstName,lastName)=>{
    //cy.get("input[name='first_name']").type(firstName);
    //cy.get("input[name='last_name']").type(lastName);
    conactUs.type_Username(firstName);
    conactUs.type_lastname(lastName);
})

When ("I type emailid {string} and content {string}",(emailId,content)=>{
    //cy.get("input[name='email']").type(emailId);
    //cy.get("textarea[name='message']").type(content);
    conactUs.type_email(emailId);
    conactUs.type_textmessage(content);
})

Then ("I should presented with text {string}",(message)=>{
    //cy.xpath("//h1 | //body").contains(message);
    conactUs.comparetext(message);
})