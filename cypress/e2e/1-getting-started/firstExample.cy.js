/// <reference types="cypress" />

describe('automation demo', () => {
  beforeEach(() => 
    cy.visit('https://demo.automationtesting.in/Register.html')
  )
  it('should fill the form and submit', () => {
    cy.get(':nth-child(1) > :nth-child(2) > .form-control').type('John')
    cy.get(':nth-child(1) > :nth-child(3) > .form-control').type('Doe Silva')
    cy.get('.col-md-8 > .form-control').type('Av. Presidente kennedy 4627, Candeias - Pernambuco')
    cy.get('#eid > .form-control').type('iago.vcavalcanti@gmail.com')
    cy.get(':nth-child(4) > .col-md-4 > .form-control').type('123456789')
    cy.get('input[value="Male"]').check().should('be.checked')
  })
})