describe('template spec', () => {
    it('passes', () => {
        cy.visit('http://localhost:3000/')

        // should have 8 articles initially
        cy.get('.article-container').children().should('have.length', 8)

        // click on load more
        cy.findByRole('button', {
            name: /load more/i,
        }).click()

        // should have 16 articles
        cy.get('.article-container').children().should('have.length', 16)

        // select input and type
        cy.findByRole('textbox').type('Morbi non lectus')

        // get element by class name and click to the first element
        cy.get('.article-container').children().first().click()

        // wait for the page to load
        cy.wait(1000)

        // the url should be /1
        cy.url().should('include', '/1')

        // get the heading and check if it contains the text
        cy.get('h2').should('contain.text', 'Morbi non lectus.')
    })
})
