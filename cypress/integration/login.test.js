import '../support/commands';

describe('User Login', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200/#/')
    cy.get('.btn_login').click()
    cy.get('input[formcontrolname=email]').type('covestro-admin@covestro.com')
    cy.get('input[formcontrolname=password]').type('admin')
    cy.get('.login__btn-login')
    .should('be.visible')
    .click()

    cy.commands.loginUser()
  })

  it('should direct user to login page and display products square', () => {
    cy.getCookie('user').should('exist')
    cy.get('.account-label-name').should('contain', 'Coverstro Admin')
    cy.url().should('include', '/home')
    cy.get('#route-link__products').should('be.visible')
    cy.get('.square-2').should('be.visible')
  })
})


