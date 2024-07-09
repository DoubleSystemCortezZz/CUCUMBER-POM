class Interact {

//paragithubA


    clickmasintro(texto1) {
        cy.get('.new-todo').click().type(texto1 + "{enter}")
    }

    borra(texto1){
        cy.contains (texto1).parent().find('.destroy').invoke('show').click()
        }

    dobleclick() {
        cy.get(':nth-child(3) > .view > [data-testid="todo-item-label"] ').dblclick()
    }
    sobrescribir() {
        cy.get('.view > .input-container > [data-testid="text-input"]').type('{selectall}{backspace}' +  this.texto1 + '{enter}')
    }
    pulsarall(){
        cy.get('[data-testid="toggle-all"]').click();
    }
    pulsaractive(){
    cy.get(':nth-child(2) > a').click();      
    }
 }
 

 export default Interact