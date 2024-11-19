import '../support/index';
import { SELECTORS, login } from '../support/utils';


describe('Site Senac', () => {
  it('The user must be able to see items and click on them', () => {
    const usuario = Cypress.env('USUARIO');
    const senha = Cypress.env('SENHA');

    cy.visit(Cypress.env('URLBASE'));
    cy.title().should('include', 'Senac Pernambuco');
    cy.contains('a', 'Espaço do Aluno').should('be.visible');
    cy.contains('a', 'Portal Acadêmico')
      .should('be.visible')
      .then(($link) => {
        if ($link.is(':visible')) {
          cy.wrap($link).invoke('removeAttr', 'target').click();
        }
      });

    login(usuario, senha);

    cy.get(SELECTORS.navbarItem).contains('Micaelle').should('be.visible');
  })
});
