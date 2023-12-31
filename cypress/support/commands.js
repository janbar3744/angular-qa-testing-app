// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('terminalValidation', (nextStepInput, nextStepOutput) => {
  cy.get('.card-container')
    .should('contain', nextStepInput)
    .contains(nextStepInput)
    .click();

  cy.get('.terminal')
    .should('have.text', nextStepOutput);
});

Cypress.Commands.add('newTabValidation', (newTabElement) => {
  cy.get(newTabElement)
    .should('be.visible')
    .should('have.attr', 'target', '_blank')
    .click();
});

Cypress.Commands.add('checkUrl', (targetTestUrl, targetTestElement) => {

  cy.visit(targetTestUrl);
  cy.get(targetTestElement).should('exist');

});

Cypress.Commands.add('checkCorrectValue', (targetElement, targetValue) => {

  cy.get(targetElement).should('exist');
  cy.get(targetElement).should('have.value', targetValue);

});
