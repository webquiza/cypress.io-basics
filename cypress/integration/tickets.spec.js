/// <reference types="cypress" />

describe('Ticketbox', () => {
  it('navigate to the application under test', () => {
    cy.visit('https://ticket-box.s3.eu-central-1.amazonaws.com/index.html')
  })
})