Cypress.Commands.add("login", (email, password) => {
  cy.contains("Log in").click();
  cy.get("#mail").type(email);
  cy.get("#pass").type(password);
  cy.contains("Submit").click();
});

Cypress.Commands.add("addBook", (title, description, author) => {
  cy.contains("Books").click();
  cy.contains("Add new").click();
  cy.get("#title").type(title);
  cy.get("#description").type(description);
  cy.get("#authors").type(author);
  cy.get("#favorite").click();
  cy.contains("Submit").click();
  cy.contains(author).should("be.visible");
});