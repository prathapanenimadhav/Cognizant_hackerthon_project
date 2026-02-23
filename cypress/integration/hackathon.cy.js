import JustDialPage from "./hackathonPom";
 
Cypress.on('uncaught:exception', (err, runnable) => {
     return false; 
    });

describe('Project', () => {
    
  var jdPage = new JustDialPage();
 
  it('car wash',{tags: ['carwash']}, () => {
    cy.visitHomePage();
    jdPage.closePopup();
    jdPage.searchCarWash();
    jdPage.openFilters();
    jdPage.applyRatingFilter();
    jdPage.applyMoreFilters();
    cy.screenshot('carwash_filters_applied');
 
    jdPage.getCarWashResults().each(($el, index) => {
      if (index < 5) {
        const name = jdPage.getCarWashName($el);
        if (name) {
          cy.log(`Car Wash ${index + 1}: ${name}`);
          console.log(`Car Wash ${index + 1}: ${name}`);
        }
      }
    });
  });
 
  it('free listing', () => {
    cy.visitHomePage();
    jdPage.closePopup();
    jdPage.openFreeListing();
    jdPage.enterMobileNumber('1234');
    jdPage.submitMobileNumber();
 
    jdPage.getErrorMessage().then((text) => {
      cy.log(text);
    });
  });
 
  it('gym', () => {
    cy.visitHomePage();
    jdPage.closePopup();
    jdPage.openFitnessCategory();
    jdPage.clickActiveFilter();
    jdPage.openGymDropdown();
 
    jdPage.getGymDropdownOptions().each(($el) => {
      const text = $el.text().trim();
      cy.log('Dropdown option: ' + text);
      console.log('Dropdown option:', text);
    });
  });
});
 
 