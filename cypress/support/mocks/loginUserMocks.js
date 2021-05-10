export const loginUser = (response) => {
  let endpoint = 'api/login';

  cy.route({
    method: 'POST',
    url: endpoint,
    form: true,
    body: {
      email: 'covestro-admin@covestro.com',
      password: 'admin'
    },
  }).as('loginUser');
};
