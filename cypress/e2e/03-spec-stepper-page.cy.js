describe('First stepper page tests', () => {

    beforeEach(() => {
        cy.visit('/stepper');
        cy.contains('1').should('be.visible');
    });

    // Referring to the requirements, the application should trim the contents of text fields, so such a field will be empty
    it('Check if validation appears when a field is filled only with a space', () => {
        cy.get('#mat-input-0').type(' ');
        cy.get('div[aria-expanded="true"] button[type="submit"]').click();
        cy.contains('This field is required').should('be.visible');
    });

    // Referring to the requirements, there should be validation for the number of characters (I chose 65 characters for the example)
    it('Check if validation appears when a field is filled with too many characters', () => {
        cy.get('#mat-input-0').type('asdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdf');
        cy.get('div[aria-expanded="true"] button[type="submit"]').click();
        cy.contains('This field is required').should('be.visible');
    });

    // Referring to the requirements, there should be validation for incorrect characters
    it('Check if validation appears when field is filled with special characters', () => {
        cy.get('#mat-input-0').type('!@#$%^&*()');
        cy.get('div[aria-expanded="true"] button[type="submit"]').click();
        cy.contains('This field is required').should('be.visible');
    });

    it('Check if correct validation appears when we click and un-click a field', () => {
        cy.get('#mat-input-0').focus();
        cy.get('#mat-input-0').blur();
        cy.contains('This field is required').should('be.visible');
    })

    // I think the message should appear every time
    it('Check if correct validation appears when we click "Next" with an empty field', () => {
        cy.get('div[aria-expanded="true"] button[type="submit"]').click();
        cy.contains('This field is required').should('be.visible');
    })

    // I wasn't sure if I should validate entering the last name/last name alone, 
    // but such forms in practice allow you to enter the first name alone if there is a single field
    it('Check if the application will move on after you enter your data', () => {
        cy.get('#mat-input-0').type('Jan Barys')
        cy.get('div[aria-expanded="true"] button[type="submit"]').click();
        cy.get('#mat-input-1').should('be.visible');
    })
})

describe('Second stepper page tests', () => {

    beforeEach(() => {
        cy.visit('/stepper');
        cy.get('#mat-input-0').type('Jan Barys')
        cy.get('div[aria-expanded="true"] button[type="submit"]').click();
        cy.get('#mat-input-1').should('be.visible');
        cy.contains('create').should('be.visible');
    });

    // Referring to the requirements, the application should trim the contents of text fields, so such a field will be empty
    it('Check if validation appears when a field is filled only with a space', () => {
        cy.get('#mat-input-1').type(' ');
        cy.get('div[aria-expanded="true"] button[type="submit"]').click();
        cy.contains('This field is required').should('be.visible');
    });

    // Referring to the requirements, there should be validation for the number of characters (I chose 65 characters for the example)
    it('Check if validation appears when a field is filled with too many characters', () => {
        cy.get('#mat-input-1').type('asdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdf');
        cy.get('div[aria-expanded="true"] button[type="submit"]').click();
        cy.contains('This field is required').should('be.visible');
    });

    // Referring to the requirements, there should be validation for incorrect characters
    it('Check if validation appears when field is filled with special characters', () => {
        cy.get('#mat-input-1').type('!@#$%^&*()');
        cy.get('div[aria-expanded="true"] button[type="submit"]').click();
        cy.contains('This field is required').should('be.visible');
    });

    it('Check if correct validation appears when we click and un-click a field', () => {
        cy.get('#mat-input-1').focus();
        cy.get('#mat-input-1').blur();
        cy.contains('This field is required').should('be.visible');
    })

    // I think the message should appear every time
    it('Check if correct validation appears when we click "Next" with an empty field', () => {
        cy.get('div[aria-expanded="true"] button[type="submit"]').click();
        cy.contains('This field is required').should('be.visible');
    })

    it('Check that the "Back" button returns to the first page with the completed data', () => {
        cy.get('div[aria-expanded="true"] button[type="button"]').click();
        cy.contains('1').should('be.visible');
        // jQuery selector
        cy.get(':contains("Jan Barys"):not(:visible)').should('exist');
    })

    it('Check if the application will move on after you enter your data', () => {
        cy.get('#mat-input-1').type('Wroclaw')
        cy.get('div[aria-expanded="true"] button[type="submit"]').click();
        cy.contains('You are now done!').should('be.visible');
    })
})

describe('Third stepper page tests', () => {

    beforeEach(() => {
        cy.visit('/stepper');
        cy.get('#mat-input-0').type('Jan Barys')
        cy.get('div[aria-expanded="true"] button[type="submit"]').click();
        cy.get('#mat-input-1').type('Wroclaw')
        cy.get('div[aria-expanded="true"] button[type="submit"]').click();
        cy.contains('You are now done!').should('be.visible');
    });

    it('Check the funtionality of the "Back" button and the correctness of the summary', () => {
        cy.get('div[aria-expanded="true"] button[type="button"]').click();
        cy.get(':contains("Wroclaw"):not(:visible)').should('exist');
        cy.get('#mat-input-1').clear().type('Krakow')
        cy.get('div[aria-expanded="true"] button[type="button"]').click();
        cy.get(':contains("Jan Barys"):not(:visible)').should('exist');
        cy.get('#mat-input-0').clear().type('Adam Malysz')
        cy.get('div[aria-expanded="true"] button[type="submit"]').click();
        cy.get('div[aria-expanded="true"] button[type="submit"]').click();
        cy.contains('Name: Adam Malysz').should('be.visible');
        cy.contains('Address: Krakow').should('be.visible');
    })

    it('Check the functionality of the "Reset" button', () => {
        cy.get('div[aria-expanded="true"] button:not([type="submit"]):not([type="button"])').click();
        cy.contains('1').should('be.visible');
        cy.get('#mat-input-0').should('have.value', '');
    });
})