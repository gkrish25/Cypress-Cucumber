
class Base_PO{
   navigate(path){
cy.fixture("config.json").then((data)=>{
    cy.visit(data.url + path);
})
}
pagetitle(){
    cy.title();
}
   }
export default Base_PO;