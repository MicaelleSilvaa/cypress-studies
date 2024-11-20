import { SELECTORS, goToLogin, goToPortal } from '../support/utils';

describe('Site Senac', () => {
  it('The user must be able to log in', () => {
    goToPortal();
    goToLogin();

    cy.get(SELECTORS.navbarItem)
      .contains('Bem-vindo ao AcadWeb').should('be.visible');
  })
});
