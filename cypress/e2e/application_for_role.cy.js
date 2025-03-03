describe('application', () => {
    it('application', () =>{
        cy.fixture('cypressTest').then(data => {
            cy.log('переход на авторизацию')
            cy.visit('https://dev.profteam.su')

            cy.get('[href="/login"] > .button').click();
            cy.get('.form-input--text').type(data.login_for_rabotadatel)
            cy.get('.form-input--password').type(data.pass_for_rabotadatel)
            cy.wait(1000)
            cy.get(':nth-child(3) > .button').click()

            cy.get('.page-nav__role-block > .button').click()
            cy.get('.select-role-form > :nth-child(1)').click()
            //cy.get('.select-role-form > :nth-child(1)').click()

        })
    })

})