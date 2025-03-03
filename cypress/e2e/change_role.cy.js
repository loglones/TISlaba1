describe('change_role', () => {
    it('authorization', () =>{
        cy.fixture('cypressTest').then(data => {
            cy.log('переход на авторизацию')
            cy.visit('https://dev.profteam.su')

            cy.get('[href="/login"] > .button').click()
            cy.get('.form-input--text').type(data.login)
            cy.get('.form-input--password').type(data.password)
            cy.wait(1000)
            cy.get(':nth-child(3) > .button').click()

        })
    })
    it('changing', ()=>{
        cy.fixture('cypressTest').then(data => {
            cy.log('изменение роли')
            cy.visit('https://dev.profteam.su/account/main')

            cy.get('.page-nav__role-block > .button').click()
            cy.get('.page-nav__role-block > .button').click()

        })
    })
})