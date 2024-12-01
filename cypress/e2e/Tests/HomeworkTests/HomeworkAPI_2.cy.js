import { faker } from '@faker-js/faker'
describe('API automation practice', () => {

    let token;
    let id;
    const firstName = faker.person.firstName();
    token = "d64007ba97bb2f70598f60636d791658a531b769abd07a450b28759497d320d7"

    it('Go REST: Create, Get, Patch, and Delete requests', () => {

        cy.request({
            method: 'POST',
            url: 'https://gorest.co.in/public/v2/users',
            headers: {
                Authorization: `Bearer ${token}`,
                Accept: `application/json`
            },
            body: {
                "name": "Test",
                "gender": "male",
                "email": "newtest@mailinator.com",
                "status": "active"
            },
        }).then((response) => {
            expect(response.body).to.have.property('id')
            expect(response.body).to.have.property('name', "Test")
            expect(response.body).to.have.property('gender', "male")
            expect(response.body).to.have.property('status', 'active')
            expect(response.body).to.have.property('email', "newtest@mailinator.com")

            id = response.body.id;
        }).then((response) => {
            cy.request({
                method: 'GET',
                url: 'https://gorest.co.in/public/v2/users/' + id,
                headers: {
                    Authorization: `Bearer ${token}`,
                    Accept: `application/json`
                },
            }).then((response) => {
                expect(response.body).to.have.property('id')
                expect(response.body).to.have.property('name', "Test")
                expect(response.body).to.have.property('gender', "male")
                expect(response.body).to.have.property('email', "newtest@mailinator.com")
                expect(response.body).to.have.property('status', 'active')
            }).then((response) => {
                cy.request({
                    method: 'PATCH',
                    url: 'https://gorest.co.in/public/v2/users/' + id,
                    headers: {
                        Authorization: `Bearer ${token}`,
                        Accept: `application/json`
                    },
                    body: {
                        "name": firstName,
                        "email": "updatedtest@mailinator.com",
                        }
                }).then((response) => {
                    expect(response.body).to.have.property('id')
                    expect(response.body).to.have.property('name', firstName)
                    expect(response.body).to.have.property('email', "updatedtest@mailinator.com")
                    expect(response.body).to.have.property('gender', "male")
                    expect(response.body).to.have.property('status', 'active')
                })
            }).then((response) => {
                cy.request({
                    method: 'DELETE',
                    url: 'https://gorest.co.in/public/v2/users/' + id,
                    headers: {
                        Authorization: `Bearer ${token}`,
                        Accept: `application/json`
                    },
                }).then((response) => {
                    expect(response.status).to.eq(204)
                }).then((response) => {
                    cy.request({
                        method: 'GET',
                        url: 'https://gorest.co.in/public/v2/users/' + id,
                        headers: {
                            Authorization: `Bearer ${token}`,
                            Accept: `application/json`
                        },
                        failOnStatusCode: false,
                    }).then((response) => {
                         expect(response.body.message).to.eq("Resource not found")
                       })
                })
            })
        })
    })
})
