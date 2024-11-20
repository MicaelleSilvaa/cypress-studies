export const SELECTORS = {
  urlBaseSenac: 'https://faculdadesenacpe.edu.br/espaco-do-aluno',

  linkEspacoDoAluno: 'a[href*="espaco-do-aluno"]',
  linkPortalAcademico: 'a.item-aluno:contains("Portal Acadêmico")',

  usuario: 'input[type=text]',
  senha: 'input[type=password]',
  botaoEntrar: '.btn.btn-flat',
  navbarItem: 'section#aviso-principal.titulo',
};

export function goToPortal() {
  cy.visit(SELECTORS.urlBaseSenac);

  cy.title().should('include', 'Senac Pernambuco');
  cy.contains(SELECTORS.linkEspacoDoAluno, 'Espaço do Aluno').should('be.visible');
  cy.contains(SELECTORS.linkPortalAcademico, 'Portal Acadêmico')
    .should('be.visible')
    .then(($link) => {
      if ($link.is(':visible')) {
        cy.wrap($link).invoke('removeAttr', 'target').click();
      }
    });
}

export function goToLogin(usuario = '', senha = '') {
  cy.get(SELECTORS.usuario).click().type(usuario);
  cy.get(SELECTORS.senha).click().type(senha);
  cy.get(SELECTORS.botaoEntrar).click();
}
