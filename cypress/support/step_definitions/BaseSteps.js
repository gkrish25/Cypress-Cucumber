import { Before, After } from "@badeball/cypress-cucumber-preprocessor";

Before(()=>{
    cy.log("Test Execution started")
})
Before({tags:"@smoke"},()=>{
    cy.log("Test Execution for smoke test")
})
After(()=>{
    cy.log("Test Execution ended")
})