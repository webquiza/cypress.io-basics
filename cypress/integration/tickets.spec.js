/// <reference types="cypress" />

describe('Ticketbox', () => {
  beforeEach(() => cy.visit('https://ticket-box.s3.eu-central-1.amazonaws.com/index.html'))

  it('fills out the text input fields', () => {
    const firstName = "Carlos"
    const lastName = "Urquiza"
    cy.get('#first-name').type(firstName)
    cy.get('#last-name').type(lastName)
    cy.get('#email').type('carlos@example.com')
    cy.get('#requests').type('Front row seats only')
    cy.get('#signature').type(`${firstName} ${lastName}`)
  })

  it('select two tickets', () => {
    cy.get('#ticket-quantity').select("2")
  })
})