import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import Base_PO from "../pageObject/base-PO";
import HomePage_PO from "../pageObject/HomePage-PO";

const basepage = new Base_PO();
const homePage = new HomePage_PO();
//const url = "https://webdriveruniversity.com/";

Given ('When i launch Web Driver University', ()=>{
    //cy.visit(url);
    //basepage.navigate("");
    homePage.navigateToHomePage();
})

When ("I click on Contact Us link",()=>{
    //cy.get("#contact-us").invoke("removeAttr","target").click();
    //cy.clicklinkandopensameTab("#contact-us");
    homePage.clickon_contactuslink();
})

When("I click on Login link",()=>{
    //cy.get("#login-portal").invoke("removeAttr","target").click();
    //cy.clicklinkandopensameTab("#login-portal");
    homePage.clickon_loginlink();
})
