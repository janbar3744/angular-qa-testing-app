describe('First stepper page tests', () => {

    beforeEach(() => {
        cy.visit('/stepper');
        cy.contains('1').should('be.visible');
    });

    // Referring to the requirements, the application should trim the contents of text fields, so such a field will be empty
    it('Check if validation appears when a field is filled only with a space', () => {
        cy.get('#mat-input-0').type(' ');
        cy.contains('This field is required').should('be.visible');
    });

    // Referring to the requirements, there should be validation for the number of characters (I chose 65 characters for the example)
    it('Check if validation appears when a field is filled with too many characters', () => {
        cy.get('#mat-input-0').type('asdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdf');
        cy.contains('This field is required').should('be.visible');
    });

    // Referring to the requirements, there should be validation for special characters
    it('Check if validation appears when field is filled with special characters', () => {
        cy.get('#mat-input-0').type('!@#$%^&*()');
        cy.contains('This field is required').should('be.visible');
    });

    it('Check if correct validation appears when we click and un-click a field', () => {
        cy.get('#mat-input-0').focus();
        cy.get('#mat-input-0').blur();
        cy.contains('This field is required').should('be.visible');
    })

    it('Check if correct validation appears when we click "Next" with an empty field', () => {
        cy.get('div[aria-expanded="true"] button span.mat-button-wrapper').click();
        cy.contains('This field is required').should('be.visible');
    })

})