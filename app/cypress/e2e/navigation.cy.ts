import AboutPage from '@src/app/toast'

describe('Navigation', () => {
    it('should navigate to the about page', () => {
        // Start from the index page
        cy.visit('/')

        // Find a link with an href attribute containing "about" and click it
        cy.get('a[href*="playground"]').click()

        // The new url should include "/playground"
        cy.url().should('include', '/playground')

        // The new page should contain an h1 with "Sales"
        // You must find the rendered component of the @tremor/react component to test
        cy.get('p').contains('Sales')
    })
})
