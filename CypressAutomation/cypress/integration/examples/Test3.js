// cypress - Spec

describe('My Third Test', function() {
    it('My Third Test case', function() {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        // Checkbox
        cy.get('#checkBoxOption1')
            .check()
            .should('be.checked')
            .and('have.value', 'option1')

        cy.get('#checkBoxOption1')
            .uncheck()
            .should('not.be.checked')

        // Selecting all checkboxes
        cy.get('input[type="checkbox"]').check(['option2', 'option3'])
    })
})