import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage_PO from "../pageObject/LoginPage_PO";

const loginpage = new LoginPage_PO;


Given("I navigate to Login Page",()=>{
    loginpage.navigate_to_LoginPage();
})

When("I type user name {string} and i type password {string}",(username,password)=>{
    //cy.get('#text').type(username);
    //cy.get('#password').type(password);
    loginpage.type_Username(username);
    loginpage.type_password(password);
})

Then("I should see alert {string}",(message)=>{

        expect(stub).to.have.been.calledWith(message);
    
})
Then("I click on Login Button", ()=>{
    stub = cy.stub();
    cy.on('window:alert',stub);
    //cy.get('#login-button').click();
    loginpage.click_on_loginButton();
})

