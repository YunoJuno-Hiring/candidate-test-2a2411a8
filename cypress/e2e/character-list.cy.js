describe("Character List", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000");
    });

    it("filters characters by 'hobbit' category", () => {
        cy.get("select").first().select("hobbit");
        cy.contains("Frodo Baggins").should("be.visible");
    });

    it("sorts characters by name ascending", () => {
        cy.contains("Frodo Baggins").should("exist");

        cy.get("select").eq(1).select("nameAscending");

        cy.get('[data-testid="character-card"]')
            .should("have.length.gt", 0)
            .first()
            .should("contain", "Aragorn");
    });
    it("sorts 'hobbit'characters by significance ascending", () => {
        cy.get("select").first().select("hobbit");
        cy.get("select").eq(1).select("significanceAscending");
        cy.get('[data-testid="character-card"]')
            .should("have.length.gt", 0)
            .first()
            .should("contain", "Bilbo Baggins");
    });
});
