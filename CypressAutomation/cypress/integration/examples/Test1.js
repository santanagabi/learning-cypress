// cypress - Spec

describe('My First Test', function() {
    it('My First Test case', function() {
        // test step
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('.search-keyword').type('ca')
        cy.get('.search-keyword')
        cy.wait(2000)
        cy.get('.product').should('have.length', 5)
        cy.get('.product:visible').should('have.length', 4)

        // Parent child
        cy.get('.products').find('.product').should('have.length', 4)

        cy.get(':nth-child(3) > .product-action > button').click()
        cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()

        cy.get('.products').find('.product').each(($el, index, $list) => {
            const textVeg = $el.find('h4.product-name').text()
            if(textVeg.includes('Cashews')) {
                cy.wrap($el).find('button').click()
            }
        })

        // Asynchronous
        // Then () -> wait for the promise to be execute
    })
})