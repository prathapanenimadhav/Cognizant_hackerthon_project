describe('Project', () => {
  it('car wash', () => {
    cy.visit('https://www.justdial.com/');
    cy.wait(5000);
    cy.get('.maybelater > .jsx-c21ded63fbf3c5d8').click();
    cy.get('#main-auto').type('Car washing services{enter}');
    cy.get('#all_filters_btn').click();
    cy.get('[aria-label="4.0+"]').scrollIntoView().click();
    cy.get('.more_filter_btnbox > .bluefill_animate').click();
 
    // Loop through each showroom card
    cy.xpath('//*[@id="mainContent"]').each(($el)=>{
        var ratingText = $el.find('resultbox_countrate').text()
        cy.log(ratingText)
    })
  });
});