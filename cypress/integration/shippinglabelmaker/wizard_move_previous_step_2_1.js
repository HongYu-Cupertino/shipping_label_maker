describe("Test App UI", () => {
  it("move previous from step 2 to step 1 in wizard", () => {
    // launch the app, using relative path since baseURL is defined in cypress.json
    cy.visit("/");

    // enter userName and password and then click Submit button
    const userName = "hongyu";
    const pwd = "hongyupwd";
    cy.get("input[type=input]").type(userName);
    cy.get("input[type=password]").type(pwd);
    cy.get("button").click();

    // enter required sender info and then click next button
    const senderName = "John Doe";
    const senderStreet = "100 First Str";
    const senderCity = "Montgomery";
    const senderZip = "12345";

    cy.get("input[name=name]").type(senderName);
    cy.get("input[name=street]").type(senderStreet);
    cy.get("input[name=city]").type(senderCity);
    cy.get("input[name=zip]").type(senderZip);
    cy.get("button[type=submit]").click();

    // should see step 2 page with title "Enter Receiver's Address"
    // should be able to see previous button at step 2
    // click Previous Button
    cy.get("#root").contains("Enter Receiver's Address");
    cy.get("#root").contains("Previous").click();

    // should see step 1 page with title "Enter Sender's Address"
    cy.get("#root").contains("Enter Sender's Address");
  });
});
