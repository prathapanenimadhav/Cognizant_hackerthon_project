describe("Enter the ubay", () => {
  cy.on("uncaught:exception", () => {
    return false;
  });

  it("Launch browser and open eBay", () => {
    cy.visit("http://www.ebay.com");

    cy.viewport(
      Cypress.config("viewportWidth"),
      Cypress.config("viewportHeight"),
    );
    cy.get(".gh-search-button__advanced-link").click();
    cy.get('[data-testid="_nkw"]').type("outdoor toys");
    cy.get('[data-testid="s0-1-20-4[0]-7[1]-_in_kw"]').select(
      "Any words, any order",
    );
    cy.get('[data-testid="s0-1-20-4[0]-7[3]-_sacat"]').select("Toys & Hobbies");
    cy.get('[data-testid="s0-1-20-5[1]-[0]-LH_TitleDesc"]').check();
    cy.get('[data-testid="s0-1-20-6[4]-[0]-LH_ItemCondition"]').check();
    cy.get('[data-testid="s0-1-20-5[5]-[0]-LH_FR"]').check();
    cy.get('[data-testid="s0-1-20-5[5]-[1]-LH_RPA"]').check();
    cy.get('[data-testid="s0-1-20-6[7]-[3]-LH_PrefLoc"]').check();
    cy.get(".adv-form__actions > .btn").click();

    cy.get("a").then(($links) => {
      const results = [];
      $links.each((index, link) => {
        const href = link.href;
        const name = link.innerText.trim();

        // if (name.toLowerCase().includes('toys')) {
        // results.push({ name, href });
        // }
        results.push({ index, name, href });
      });

      // if (results.length > 0) {
      //     const worksheet = XLSX.utils.json_to_sheet(results);
      //     const workbook = XLSX.utils.book_new();
      //     XLSX.utils.book_append_sheet(workbook, worksheet, "Results");
      //     XLSX.writeFile(workbook, "ebay_toys_results.xlsx");
      // }

      if (results.length > 0) {
        // const header = "Name,Href\n";
        // const rows = results.map(r => `${r.name},${r.href}`).join("\n");
        // const csvContent = header + rows;
        const csvContent = results
          .map((r) => `${r.index + 1}  ${r.name},${r.href}`)
          .join("\n");
        cy.writeFile("cypress/downloads/ebay_toys_results2.csv", "");
        cy.writeFile("cypress/downloads/ebay_toys_results2.csv", csvContent);
      }
    });
  });
});
