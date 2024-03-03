import Base_PO from "./base-PO";

class HomePage_PO extends Base_PO
{
    navigateToHomePage(){
        super.navigate("");
    }
clickon_contactuslink(){
    cy.clicklinkandopensameTab('#contact-us');
}
clickon_loginlink(){
    cy.clicklinkandopensameTab('#login-portal');
}
}
export default HomePage_PO;