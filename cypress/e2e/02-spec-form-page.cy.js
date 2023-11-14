describe('"Name" field tests', () => {

    beforeEach(() => {
        cy.visit('/form');
        cy.contains('You submitted the following:').should('be.not.visible');
    });

    it('Check if the value is filled with an example text', () => {
        cy.checkCorrectValue('#name', 'Dr IQ');
    });

    it('Check if validation appears when field is empty', () => {
        cy.get('#name').clear();
        cy.get('#name + .alert.alert-danger').should('have.text', ' Name is required ');
    });

    it('Check if validation appears when a field is filled only with a space', () => {
        cy.get('#name').clear();
        cy.get('#name').type(' ');
        cy.get('#name-validation-message').should('have.text', 'Name is required');
    });

    // Referring to the requirements, there should be validation for special characters
    it('Check if validation appears when field is filled with special characters', () => {
        cy.get('#name').clear();
        cy.get('#name').type('!@#$%^&*()');
        cy.get('#name-validation-message').should('have.text', 'Name is required');
    });

    // Referring to the requirements, there should be validation for the number of characters (I chose 65 characters for the example)
    it('Check if validation appears when a field is filled with too many characters', () => {
        cy.get('#name').clear();
        cy.get('#name').type('asdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdf');
        cy.get('#name-validation-message').should('have.text', 'Name is required');
    });
});

describe('"Alter Ego" field tests', () => {

    beforeEach(() => {
        cy.visit('/form');
    });

    it('Check if the value is filled with an example text', () => {
        cy.checkCorrectValue('#alterEgo', 'Chuck Overstreet');
    });

})

describe('"Hero Power" field tests', () => {

    beforeEach(() => {
        cy.visit('/form');
    });

    it('Check if the value is filled with an example text', () => {
        cy.checkCorrectValue('#power', 'Really Smart');
    });

    it('Check that the selected option from the list is correctly displayed', () => {
        cy.get('select#power').select('Super Flexible');
        cy.get('select#power option:selected').should('have.value', 'Super Flexible');

        cy.get('select#power').select('Really Smart');
        cy.get('select#power option:selected').should('have.value', 'Really Smart');

        cy.get('select#power').select('Super Hot');
        cy.get('select#power option:selected').should('have.value', 'Super Hot');

        cy.get('select#power').select('Weather Changer');
        cy.get('select#power option:selected').should('have.value', 'Weather Changer');
    })
})

describe('"New Hero" options test', () => {

    beforeEach(() => {
        cy.visit('/form');
    });

    it('Check that the all fields have been cleared', () => {
        cy.get('button[type="button"].btn.btn-default').click();
        cy.get('#name').should('have.value', '');
        cy.get('#alterEgo').should('have.value', '');
        cy.get('#power').should('have.value', null);
    });
})

describe('"Submit" options test', () => {

    beforeEach(() => {
        cy.visit('/form');
    });

    it('Check that the button is off with no "Name" value', () => {
        cy.get('#name').clear();
        cy.get('button[type="submit"].btn.btn-success').should('be.disabled');
    });

    it('Check that the button is off with no "Hero Power" value', () => {
        cy.get('button[type="button"].btn.btn-default').click();
        cy.get('#name').type('Test');
        cy.get('button[type="submit"].btn.btn-success').should('be.disabled');
    });

    it('Check the summary and edit', () => {
        cy.get('button[type="button"].btn.btn-default').click();

        cy.get('#name').type('testName');
        cy.get('#alterEgo').type('testAlterEgo');
        cy.get('select#power').select('Super Hot');;

        cy.get('button[type="submit"].btn.btn-success').click();

        cy.get('h2').should('have.text', 'You submitted the following:');

        cy.get('.row:contains("Name")').should('include.text', 'testName');
        cy.get('.row:contains("Alter Ego")').should('include.text', 'testAlterEgo');
        cy.get('.row:contains("Power")').should('include.text', 'Super Hot');

        cy.get('button[type="button"].btn.btn-primary').click();

        cy.checkCorrectValue('#name', 'testName');
        cy.checkCorrectValue('#alterEgo', 'testAlterEgo');
        cy.checkCorrectValue('#power', 'Super Hot');
    });
});