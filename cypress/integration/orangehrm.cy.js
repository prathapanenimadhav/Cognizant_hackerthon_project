describe('OrangeHRM', () => {
    it('Adding and deleting elements from orangeHRM', () => {
 
        // login into the website using valid credentials
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.wait(5000)
        cy.get('input[name="username"]').type('Admin')
        cy.get('input[type="password"]').type('admin123');
        cy.get('button[type="submit"]').click();
 
        // navigate to Admin coloumn from the menu on the left
        cy.get(':nth-child(1) > .oxd-main-menu-item').click()
        cy.wait(5000)
 
        // navigate to Job and then select job categories
        cy.contains('Job').click()
        cy.contains('Job Categories').click();
 
        // add Test Engineer and then save
        cy.get('.oxd-button').click();
        cy.get(':nth-child(2) > .oxd-input').type('Test Engineer');
        cy.get('.oxd-button--secondary').click();
        cy.wait(5000)
 
        // now delete the added element
        cy.get(':nth-child(3) > .oxd-table-row > [style="flex-shrink: 1;"] > .oxd-table-cell-actions > :nth-child(1)').click()
        cy.get('.oxd-button--label-danger').click()
 
        // navigate to organization and then select location
        cy.get('.oxd-topbar-body-nav > ul > :nth-child(3)').click();
        cy.get('.oxd-dropdown-menu > :nth-child(2)').click();
 
        // add a location by filling the mandatory fields and save it
        cy.get('.orangehrm-header-container > div > .oxd-button').click();
        cy.get(':nth-child(1) > .oxd-grid-2 > .oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input').type('HQ - IN');
        cy.get('div').contains("-- Select --").click()
        cy.get('div').contains("India").click()
        cy.get('.oxd-button--secondary').click()
        cy.wait(5000)
 
        // delete the added location
        cy.get(':nth-child(1) > .oxd-table-row > :nth-child(7) > .oxd-table-cell-actions > :nth-child(1)').click();
        cy.get('.oxd-button--label-danger').click()
        cy.wait(2000)
 
        // navigate to Qualifications and select Skills
        cy.get(':nth-child(4) > .oxd-topbar-body-nav-tab-item').click()
        cy.get(':nth-child(1) > .oxd-topbar-body-nav-tab-link').click()
 
        // add the skill Testing Demo and save it
        cy.get('.oxd-button').click()
        cy.get(':nth-child(2) > .oxd-input').type('Testing Demo')
        cy.get('.oxd-button--secondary').click()
        cy.wait(5000)
 
        // now delete the Testing Demo skill and make sure that it is deleted
        cy.get(':nth-child(2) > .oxd-table-row > [style="flex: 1 1 0%;"] > .oxd-table-cell-actions > :nth-child(1)').click()
        cy.get('.oxd-button--label-danger').click()
        cy.get(':nth-child(3) > .oxd-table-row > [style="flex: 1 1 0%;"] > .oxd-table-cell-actions > :nth-child(1)').should('not.exist')
 
        // logout of the application
        cy.get('.oxd-userdropdown-tab').click()
        cy.get(':nth-child(4) > .oxd-userdropdown-link').click()
 
    })
})