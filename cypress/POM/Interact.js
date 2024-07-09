class Interact {

    texto1 = "Tarea 1"
    texto2 = "Tarea 2"
    texto3 = "Tarea 3"


    clickmasintro() {
        cy.get('.new-todo').click().type(this.texto1 + "{enter}")
    }

    clickmasintro2() {
        cy.get('.new-todo').click().type(this.texto2 + "{enter}")
    }

    clickmasintro3() {
        cy.get('.new-todo').click().type(this.texto3 + "{enter}")
    }

    clickmasintro4() {
        cy.get('.new-todo').click().type(this.texto4 + "{enter}")
    }

    clickmasintro5() {
        cy.get('.new-todo').click().type(this.texto5 + "{enter}")
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