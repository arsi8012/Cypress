it("Should open the main page", () => {
  cy.contains("Books list");
});

it("Should successfully login", () => {
  cy.contains("Books list");
  cy.login("test@test.com", "test");
  cy.contains("Добро пожаловать test@test.com").should("be.visible");
});

it("Should not login with empty login", () => {
  cy.login(" ", "test");
  cy.get("#mail").then(($el) => $el[0].checkValidity()).should('be.false');
});

it("Should not login with empty password", () => {
  cy.contains("Log in").click();
  cy.get("#mail").type("test@test.com");
  cy.contains("Submit").click();
  cy.get('#pass').then($el => $el[0].checkValidity()).should('be.false')
});