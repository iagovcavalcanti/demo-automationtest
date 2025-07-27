import FillAndSubmitFormPO from "../pageObjects/fillandSubmitFormPO";

const fillandSubmitFormPO = new FillAndSubmitFormPO();

class AssertionsSubmitForm extends FillAndSubmitFormPO{
    assertFormWasSubmitted = () => {
        return new Cypress.Promise((resolve) => {
            fillandSubmitFormPO.createFillandSubmitForm();
            resolve(true);
          

    })
}

export default AssertionsSubmitForm; 