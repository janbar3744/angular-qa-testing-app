describe('Homepage tests', () => {

  beforeEach(() => {
    cy.visit('/');
  });

  it('Check if the URL is correct', () => {
    cy.checkUrl('https://angular-qa-recruitment-app.netlify.app/')
  })

  it('Check if the application status is correct', () => {
    cy.get('.highlight-card > span')
      .contains('Recruitment app is running!')
      .should('be.visible');
  })

  it('Check if the "Social Media" elements open in a new tab', () => {
    cy.newTabValidation('[aria-label="Angular on YouTube"]');
    cy.newTabValidation('[aria-label="Angular on twitter"]');
  })

  it('Check if the "Resources" elements open in a new tab', () => {
    cy.newTabValidation('a[href="https://angular.io/tutorial"]');
    cy.newTabValidation('a[href="https://angular.io/cli"]');
    cy.newTabValidation('a[href="https://blog.angular.io/"]');
    cy.newTabValidation('a[href="https://angular.io/devtools/"]');
  })

  it('Check if the "Next Steps" elements display the correct values in the terminal', () => {
    cy.terminalValidation('New Component', 'ng generate component xyz');
    cy.terminalValidation('Angular Material', 'ng add @angular/material');
    cy.terminalValidation('Add PWA Support', 'ng add @angular/pwa');
    cy.terminalValidation('Add Dependency', 'ng add _____');
    cy.terminalValidation('Run and Watch Tests', 'ng test');
    cy.terminalValidation('Build for Production', 'ng build');
  })
})