class GoogleMainPage {
    elements = {
      cookiesBtn: () => cy.get("#L2AGLb > .QS5gu"),
      searchInput: () => cy.get(".gLFyf"),
      loginBtn: () => cy.get("#login-button"),
      searchBtn: () => cy.get('[name="btnK"]').as('btn'),
    };
    
    navigateMainPage(){
        cy.visit('/')
    }
    fillSearchField(text) {
      this.elements.searchInput().type(text).focus().blur().type('{enter}');
    }
  
    clickSearchButton() {
      cy.get('[name="btnK"]').as('btn').click( {force:true});
    }
  
    acceptCookies() {
      this.elements.cookiesBtn().click();
    }
  
    checkResults(searchKeyword){
      cy.get('tbody').each(($ele) => {
        if($ele.text().trim().includes(searchKeyword)){
          expect($ele.text().trim()).to.include(searchKeyword)  //Assertion for partial text
        }
      })
    }
  }
  
  export const googleMainPage = new GoogleMainPage();
