describe("demo of api",()=>{
    it('lets test with 1st test case',()=>{
        cy.request('GET','https://restful-booker.herokuapp.com/booking/10').then((response)=>{
            cy.log(JSON.stringify(response.body))
            cy.expect(response.status).to.equal(200)
            cy.expect(response.body.firstname).to.equal('Jim')
            cy.expect(response.body.firstname).not.to.be.equal('  Jim')
            cy.expect(response.body.firstname).to.equal('  Jim')
        })
    })

    it.only('create a new booking or post the data',()=>{
        const url ='https://restful-booker.herokuapp.com/booking'
        const body = {
                    "firstname":"Madhav",
                    "lastname":"chowdary",
                    "totolprice":111,
                    "depositpaid":true,
                    
                   }
        cy.request('POST',url,body).then((response)=>{
            cy.log(JSON.stringify(response))
        })
    })
})