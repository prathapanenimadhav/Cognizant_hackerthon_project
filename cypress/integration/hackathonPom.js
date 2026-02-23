class JustDialPage {
  // Common actions
  visitHomePage() {
    cy.visit('https://www.justdial.com/');
    cy.wait(5000);
  }
 
  closePopup() {
    cy.get('.maybelater > .jsx-c21ded63fbf3c5d8').click();
  }
 
  // ---------------- Car Wash ----------------
  searchCarWash() {
    cy.get('#main-auto').type('Car washing services{enter}');
  }
 
  openFilters() {
    cy.get('#all_filters_btn').click();
  }
 
  applyRatingFilter() {
    cy.get('[aria-label="4.0+"]').scrollIntoView().click();
  }
 
  applyMoreFilters() {
    cy.get('.more_filter_btnbox > .bluefill_animate').click();
  }
 
  getCarWashResults() {
    return cy.get('.jsx-da112b0f0664a117.resultbox');
  }
 
  getCarWashName($el) {
    return $el.find('.resultbox_title_anchor').text().trim();
  }
 
  // ---------------- Free Listing ----------------
  openFreeListing() {
    cy.get('#header_freelisting > .headnav_item_anchor > .headnav_item_text').click();
  }
 
  enterMobileNumber(number) {
    cy.get('.businesslistfree_businesslistfree__left__EHNaD > .entermobilenumber_form__LNXMq').type(number);
  }
 
  submitMobileNumber() {
    cy.get('.businesslistfree_businesslistfree__left__EHNaD > .entermobilenumber_form__LNXMq > .primarybutton > .entermobilenumber_innertext__sRcH7').click();
  }
 
  getErrorMessage() {
    return cy.xpath('//*[@id="listyourbusiness"]/div[1]/span[2]').invoke("text");
  }
 
  // ---------------- Gym ----------------
  openFitnessCategory() {
    cy.get(':nth-child(14) > a > .home_hotkeyimg').click();
  }
 
  clickActiveFilter() {
    cy.get('#filter_ul > .active').click();
  }
 
  openGymDropdown() {
    cy.contains('button', 'Gym').click();
  }
 
  getGymDropdownOptions() {
    return cy.xpath('.//*[@id="filter_ul"]/li[4]', { timeout: 10000 });
  }
}
 
export default JustDialPage;
 
 