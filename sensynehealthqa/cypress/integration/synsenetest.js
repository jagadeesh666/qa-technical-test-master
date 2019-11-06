/// <reference types="Cypress" />

context('synsenetest', () => {
    beforeEach(() => {
      cy.visit('http://localhost:5000/v1/ui/#/')
    })
  
    it('sensene health ui should have title', () => {
      // verity title
      cy.get('.info_title')
        .should('have.class','info_title')
        .should('contain','Sensyne test API')

      //verify the title description
      cy.get('.info_description > p')
        .should('contain','API to allow backend testing')

      //verify default link
      cy.get('#resource_default > :nth-child(1)')
        .should('have.class','heading')

      cy.get('h2 > .toggleEndpointList')
        .should('contain','default')
      //click on default
        .click()
      // retrieves data on click
      cy.get('#default_endpoint_list')
        .should('have.class','endpoints')

      //verify show/hide
      cy.get('#endpointListTogger_default')
        .should('contain','Show/Hide')
        .click()

      //.should('contain','display: none')
      cy.get('#default_endpoint_list')
        .should('have','display: none')
      
      // verify list operations
      cy.get('.collapseResource')
        .should('contain','List Operations')
        .click()

      // verify Expand Operations
      cy.get('.expandResource')
        .should('contain','Expand Operations')
        .should('not.have.id','default_qa_app_controller_create_product_content')
        .click()
      cy.get('#default_qa_app_controller_create_product_content > .response-class > h4 > :nth-child(1)')
        .should('contain','Response Class')

    })
})