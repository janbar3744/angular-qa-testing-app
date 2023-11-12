describe('Homepage tests', () => {

  beforeEach(() => {
    cy.visit('https://angular-qa-recruitment-app.netlify.app/');
    const invalidUrl = 'https://angular-qa-recruitment-app.netlify.app/wrong-url';
    cy.visit(invalidUrl, { failOnStatusCode: false });
    cy.url().should('eq', 'https://angular-qa-recruitment-app.netlify.app/');
  });

  it('Check if app is running', () => {
    cy.get('.highlight-card > span')
      .contains('Recruitment app is running!')
      .should('be.visible');
  })

  it('Check if social media elements are visible', () => {
    cy.get('[aria-label="Angular on twitter"]')
      .should('be.visible');
    cy.get('[aria-label="Angular on YouTube"]')
      .should('be.visible');
  })

  it.only('Check if Resources elements are visible', () => {
    cy.get('.card-container:nth-child(1)')
      .should('have.length.greaterThan', 0)
      .each(($card) => {
        const href = $card.attr('href');

        if (href === 'https://angular.io/tutorial' || href === 'https://angular.io/cli' || href === 'https://blog.angular.io/' || href === 'https://angular.io/devtools/') {
          cy.wrap($card).should('be.visible');
        }

      })
  })

  it('debuge', () => {
    cy.get('.card-container(1)')
      .should('be.visible');
  })
})