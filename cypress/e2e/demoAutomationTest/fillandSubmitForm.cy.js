/// <reference types="cypress" />

import FillAndSubmitFormPO from "../../support/pageObjects/fillandSubmitFormPO"

const fillandsubmitformPO = new FillAndSubmitFormPO();
const assertionsSubmitForm = new AssertionsSubmitForm();

describe('automation demo', () => {
  beforeEach(() => 
    cy.visit('https://demo.automationtesting.in/Register.html')
  )
  it('should fill the form and submit', () => {
    assertionsSubmitForm.assertFormWasSubmitted().then((result) => {
      expect(result).to.be.true;
    });
  })
  
})