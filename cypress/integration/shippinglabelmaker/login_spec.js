describe("Test App UI", () => {
  it("login successfully", () => {
    // launch the app, using relative path since baseURL is defined in cypress.json
    cy.visit("/");

    // enter userName and password and then click Submit button
    const userName = "hongyu";
    const pwd = "hongyupwd";
    cy.get("input[type=input]").type(userName);
    cy.get("input[type=password]").type(pwd);
    cy.get("button").click();

    // user should be able to login and see main page with title "Shipping Label Maker"
    cy.get("#root").contains("Shipping Label Maker");
  });
});
