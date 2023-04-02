/* eslint-disable */

import '@cypress/react/support'

Cypress.on('uncaught:exception', (err, runnable) => {
    console.warn('Uncaught exception:', err)
    return false
})
