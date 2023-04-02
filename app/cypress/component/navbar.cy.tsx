import Navbar from '@src/app/navbar'
// import * as React from 'react'

describe('<AboutPage />', () => {
    it('should render and display expected content', () => {
        // Mount the React component for the About page
        cy.mount(
            <Navbar
                user={{
                    email: 'x@y.com',
                    name: 'x y',
                }}
            />
        )

        // The new page should contain an h1 with "About page"
        cy.get('span').contains('Open user menu')

        // Validate that a link with the expected URL is present
        // *Following* the link is better suited to an E2E test
        cy.get('a[href*="playground"]').should('be.visible')
    })
})
