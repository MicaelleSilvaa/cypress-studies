  export const SELECTORS = {
    usuario: 'input[type=text]',
    senha: 'input[type=password]',
    botaoEntrar: '.btn.btn-flat',
    navbarItem: '.navbar-nav > li > a',
  };
  
  export function login(usuario, senha) {
    cy.get(SELECTORS.usuario).click().type(usuario);
    cy.get(SELECTORS.senha).click().type(senha);
    cy.get(SELECTORS.botaoEntrar).click();
  }
  