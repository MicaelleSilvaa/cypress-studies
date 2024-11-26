export const SELECTORS = {
  baseUrl: 'https://faculdadesenacpe.edu.br/espaco-do-aluno',
  studentLink: 'a[href*="espaco-do-aluno"]',
  academicLink: 'a.item-aluno:contains("Portal Acadêmico")',
  usernameInput: 'input[type=text]',
  passwordInput: 'input[type=password]',
  loginButton: '.btn.btn-flat',
  navbarTitle: 'section#aviso-principal.titulo',
  loginTypeSelect: '#fTipo',
  loginTypeStudent: 'aluno',
  welcomeMessage: 'Bem-vindo ao AcadWeb',
};

export function navigateToPortal() {
  cy.visit(SELECTORS.baseUrl);

  cy.title().should('include', 'Senac Pernambuco');
  cy.contains(SELECTORS.studentLink, 'Espaço do Aluno').should('be.visible');
  cy.contains(SELECTORS.academicLink, 'Portal Acadêmico')
    .should('be.visible')
    .then(($link) => {
      if ($link.is(':visible')) {
        cy.wrap($link).invoke('removeAttr', 'target').click();
      }
    });
}

export function selectLoginType(type = SELECTORS.loginTypeStudent) {
  cy.get(SELECTORS.loginTypeSelect).then(($select) => {
    if ($select.val() !== type) {
      cy.get(SELECTORS.loginTypeSelect).select(type);
    }
  });

  cy.get(SELECTORS.loginTypeSelect).should('have.value', type);
}

export function goToLogin(username = '', password = '') {
  cy.get(SELECTORS.usernameInput).click().type(username);
  cy.get(SELECTORS.passwordInput).click().type(password);
  cy.get(SELECTORS.loginButton).click();
}
