/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe('Personal Page', () => {
  it('scroll to Bottom', () => {
    cy.visit('/personal')
    cy.scrollTo(0, 99999);
    cy.wait(1000);
    cy.scrollTo(0, 0);
  });

  it('click Signup Button', () => {
    cy.wait(1000);
    cy.contains('Sign up for a personal account').click()
  });
})
