class CCPOM {  
    homepage() {
      cy.visit('https://todomvc.com/examples/react/dist/#/')
    
    }

    clickmasintro(texto1) {
      cy.get('.new-todo').click().type(texto1 + "{enter}")
    
    }

    borra(texto1){
      cy.contains (texto1).parent().find('.destroy').invoke('show').click()
    }

    dobleclick() {
      cy.get(':nth-child(3) > .view > [data-testid="todo-item-label"] ').dblclick()
    
    }
    
    sobrescribir(texto1) {
      cy.get('.view > .input-container > [data-testid="text-input"]').type('{selectall}{backspace}' +  texto1 + '{enter}')
    
    }
    
    pulsarall(){
    cy.get('[data-testid="toggle-all"]').click();
    
    }
    
    pulsaractive(){
    cy.get(':nth-child(2) > a').click();      
    
    }
    
    SiDeberiaContener(numero1){
      cy.get(':nth-child(' + numero1 + ') > .view > [data-testid="todo-item-label"] ').should('exist');
    }

    NoDeberiaContener(numero1){
      cy.get(':nth-child(' + numero1 + ') > .view > [data-testid="todo-item-label"] ').should('not.exist');
    }

    DeberiaLLamarse(numero1, texto1){
      cy.get(':nth-child(' + numero1 + ') > .view > [data-testid="todo-item-label"] ').contains(texto1);
    }
  }
  
  export const pruebasCPOM = new CCPOM();
  