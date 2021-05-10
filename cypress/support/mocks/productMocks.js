export const getProducts = (response) => {
  let endpoint = 'http://localhost:3000/api/products';

  cy.route({
    method: 'GET',
    url: endpoint,
    response
  }).as('getAllProducts');
};
