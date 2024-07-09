import Interact from "./Interact"
const Interactuar = new Interact()
//paragithubA

class Erase {

    borra(){
    cy.contains (Interactuar.texto1).parent().find('.destroy').invoke('show').click()
    }
    borra2(){
    cy.contains (Interactuar.texto2).parent().find('.destroy').invoke('show').click()
    }
    borra3(){
    cy.contains (Interactuar.texto3).parent().find('.destroy').invoke('show').click()
    }
 }
 
 export default Erase