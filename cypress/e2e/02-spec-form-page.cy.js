describe('Form page tests', () => {

    beforeEach(() => {
        cy.visit('/form');
    });

    it('Check if the URL is correct', () => {
        cy.checkUrl('https://angular-qa-recruitment-app.netlify.app/form')
    })

})