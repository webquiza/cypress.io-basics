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

  it('selects the VIP ticket type', () => {
    cy.get('#vip').check()
  })

  it('select Social Media checkbox', () => {
    cy.get('#social-media').check()
  })

  it('checks Friend, and Publication, then unchecks Friend ', () => {
    cy.get('#friend').check()
    cy.get('#publication').check()
    cy.get('#friend').uncheck()
  })
})