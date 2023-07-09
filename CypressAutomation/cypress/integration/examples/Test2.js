// cypress - Spec

describe('My Second Test', function() {
    it('My Second Test case', function() {
        // test step
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('.search-keyword').type('ca')
        cy.get('.search-keyword')
        cy.wait(2000)

        // Parent child
        cy.get('.products').as('productLocator')
        
        cy.get('@productLocator').find('.product').each(($el, index, $list) => {
            const textVeg = $el.find('h4.product-name').text()
            if(textVeg.includes('Cashews')) {
                cy.wrap($el).find('button').click()
            }
        })

       // Completing the practise test with all necessary validations
       cy.get('.cart-icon > img').click()
       cy.contains('PROCEED TO CHECKOUT').click()
       cy.get(':nth-child(14)').click()
    })
})