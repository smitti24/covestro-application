const routes = ['home', 'button.html'];

describe('Component screenshot', () => {
  routes.forEach((route) => {
    const testName = `Home componentshould match previous screenshot`;

    it(testName, () => {
      cy.visit('/home');

      cy.get('.squares-container').each((element, index) => {
        const name = `square-${index + 1}`;

        cy.wrap(element).matchImageSnapshot(name);
      });
    });
  });
});
