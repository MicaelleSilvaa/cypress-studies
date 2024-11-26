import { SELECTORS, navigateToPortal, selectLoginType, goToLogin } from '../support/utils';

describe('Senac site', () => {
  it('The user must be able to log in', () => {
    navigateToPortal();
    selectLoginType();
    goToLogin();

    cy.url().should('include', '/acadweb.modulo.aluno.php');
    cy.get(SELECTORS.navbarTitle)
      .contains(SELECTORS.welcomeMessage)
      .should('be.visible');
  });
});
