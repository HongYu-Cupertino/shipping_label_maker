describe("Test App UI", () => {
  it("Load the login page successfully", () => {
    // launch the app, using relative path since baseURL is defined in cypress.json
    cy.visit("/");

    cy.get("#root").contains("Please login:");
  });
});
