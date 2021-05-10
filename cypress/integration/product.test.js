describe('Product Page', () => {

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

  it('should display list of products', () => {
    cy.get('#route-link__products').click()
    cy.url().should('include', '/products')
    cy.get('h1').should('contain', 'Products')
    cy.get('.product-card').should('have.length', 3);
  });

});
