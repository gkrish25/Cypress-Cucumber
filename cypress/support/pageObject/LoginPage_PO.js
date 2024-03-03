import Base_PO from "./base-PO";


class LoginPage_PO extends Base_PO{

    navigate_to_LoginPage(){
        super.navigate("Login-Portal/index.html");
    }
    type_Username(username){
        cy.get('#text').type(username);
    }
    type_password(password){
        cy.get('#password').type(password);
    }
    click_on_loginButton(){
        cy.get('#login-button').click();
    }
}
export default LoginPage_PO;