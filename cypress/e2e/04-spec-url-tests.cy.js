describe('URL tests', () => {

    it('Verify that specifying an invalid URL returns you to the homepage', () => {
        const invalidURLs = [
            'https://angular-qa-recruitment-app.netlify.app/random-url-1',
            'https://angular-qa-recruitment-app.netlify.app/random-url-2',
            'https://angular-qa-recruitment-app.netlify.app/random-url-3',
        ];

        invalidURLs.forEach((url) => {
            if (url !== 'https://angular-qa-recruitment-app.netlify.app/form' && url !== 'https://angular-qa-recruitment-app.netlify.app/stepper') {

                cy.visit(url);

                cy.url().should('include', 'https://angular-qa-recruitment-app.netlify.app/');

                cy.get('[data-name="Ellipse 8"]').should('exist');
            }
        });
    });

    it('Check that you have been redirected to the correct URL for "Stepper"', () => {
        cy.checkUrl('/stepper', '#cdk-step-label-0-0');
    });

    it('Check that you have been redirected to the correct URL for "Form"', () => {
        cy.checkUrl('/form', '#alterEgo');
    });

    it('Check that you have been redirected to the correct URL for "Welcome"', () => {
        cy.checkUrl('/', '[data-name="Ellipse 8"]');
    });
})
