import Base_PO from "./base-PO";


class Contact_US_PO extends Base_PO{

    elements = {
        comment_textfield : ()=> cy.get("textarea[name='message']"),
        submit_button : ()=> cy.get("input[type='submit']"),
        submission_Header_text : () => cy.xpath("//h1 | //body")
    }

    navigateTo_ContactUs_Page(){
        super.navigate("Contact-Us/contactus.html")
    }

    type_Username(username){
        cy.get("input[name='first_name']").type(username);
    }
    type_lastname(lastname){
        cy.get("input[name='last_name']").type(lastname);
    }
    type_email(email){
        cy.get("input[name='email']").type(email);
    }
    type_textmessage(message){
        //cy.get("textarea[name='message']").type(message);
        this.elements.comment_textfield().type(message);
    }
    clickOn_Submit_Button(){
        //cy.get("input[type='submit']").click();
        this.elements.submit_button().click();
    }
    comparetext(message){
        cy.xpath("//h1 | //body").contains(message);
        this.elements.submission_Header_text().invoke('text').should('include',message);
    }
}
export default Contact_US_PO