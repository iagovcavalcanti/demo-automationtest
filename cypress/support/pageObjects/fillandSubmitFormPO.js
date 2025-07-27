class FillAndSubmitFormPO {

    formularioDeRegistro = {

        nome: ':nth-child(1) > :nth-child(2) > .form-control',
        sobrenome: ':nth-child(1) > :nth-child(3) > .form-control',
    }
createFillandSubmitForm() {
    cy.get(this.formularioDeRegistro.nome).type('John')
    cy.get(this.formularioDeRegistro.sobrenome).type('Doe Silva')
    cy.get(this.formularioDeRegistro.endereco).type('Av. Presidente kennedy 4627, Candeias - Pernambuco')
    cy.get(this.formularioDeRegistro.email).type('iago.vcavalcanti@gmail.com')
    cy.get(this.formularioDeRegistro.telefone).type('123456789')
    cy.get(this.formularioDeRegistro.genero).check().should('be.checked')
    cy.get('#checkbox1').click();
    cy.get('#msdd').click();
    cy.get(':nth-child(1) > .ui-corner-all').should('be.visible').click();  
    cy.get('body').click(0, 0); 
    cy.get('#Skills').select('Python');
    cy.get('.select2-selection--single').click();
    cy.get('.select2-results__option').contains('Australia').click();
    cy.get('#select2-country-container').should('contain', 'Australia');
    cy.get('#yearbox').select('1992');
    cy.get(':nth-child(11) > :nth-child(3) > .form-control').select('July');
    cy.get('#daybox').select('1');
    cy.get('#firstpassword').type('qweasd');
    cy.get('#secondpassword').type('qweasd');
}

  
}

export default FillAndSubmitFormPO;

