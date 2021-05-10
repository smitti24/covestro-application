cy.commands = {
  loginUser: () => {

    cy.request({
      method: 'POST',
      url: '/api/login',
      form: true,
      body: {
        email: 'covestro-admin@covestro.com',
        password: 'admin'
      },
    }).then((res) => {
      cy.setCookie('user', res.body.toString())
    })


  },

  logoutUser: () => {
    cy.request({
      method: 'POST',
      url: '/api/logout'
    }).then((res) => {
      cy.setCookie('user', '')
    })
  }

}
