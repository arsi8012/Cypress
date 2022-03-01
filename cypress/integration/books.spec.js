beforeEach(() => {
  cy.login("test@test.com", "test");
});

it("Should add new book", () => {
  cy.addBook("Dunno", "Dunno in the sunny city", "Nosov");
  cy.contains("Dunno").should("be.visible");
});

it("Should add book favorite lists", () => {
  cy.addBook("Облако в штанах", "Тринадцатый апостол", "Маяковский");
  cy.contains("Delete from favorite").click();
  cy.contains("Add to favorite").click();
  cy.contains("Delete from favorite").should("be.visible");
});

it("Should delete book favorite lists", () => {
  cy.addBook("Жизнь Арсеньева", "Повествование ведётся от лица Алексея Арсеньева", "Бунин");
  cy.contains("Delete from favorite").click();
  cy.contains("Add to favorite").should("be.visible");
});