describe('Stepper page tests', () => {

    beforeEach(() => {
        cy.visit('/stepper');
    });

    it('Check if the URL is correct', () => {
        cy.checkUrl('https://angular-qa-recruitment-app.netlify.app/stepper')
    })

})