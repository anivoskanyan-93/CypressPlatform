import { faker } from '@faker-js/faker'
describe('API automation basics', () => {

    let token;
    let id;
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();

    it('Create Token, Create Booking, Get Booking API tests', () => {

        cy.request({
            method: 'POST',
            url: 'https://restful-booker.herokuapp.com/auth',
            headers: {
                'Content-Type': 'application/json'
            },
            body: {
                username: 'admin',
                password: 'password123',
            },
        }).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.have.property('token')

            token = response.body.token;

        }).then((response) => {
            cy.request({
                method: 'POST',
                url: 'https://restful-booker.herokuapp.com/booking',
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": 'application/json',
                    Accept: `application/json`
                },
                body: {
                    "firstname": firstName,
                    "lastname": lastName,
                    "totalprice": 111,
                    "depositpaid": true,
                    "bookingdates": {
                        "checkin": "2018-01-01",
                        "checkout": "2019-01-01"
                    },
                    "additionalneeds": "Breakfast"
                }
            }).then((response) => {
                expect(response.status).to.eq(200)
                expect(response.body.booking).to.have.property('firstname', firstName)
                expect(response.body.booking).to.have.property('lastname',lastName)

                id = response.body.bookingid;
            })

        }).then((response) => {
            cy.request({
                method: 'GET',
                url: 'https://restful-booker.herokuapp.com/booking/' + id,
                headers: {
                     Accept: `application/json`
                },
            }).then((response) => {
                expect(response.status).to.eq(200)
                expect(response.body).to.have.property('firstname', firstName)
                expect(response.body).to.have.property('lastname',lastName)
                expect(response.body.additionalneeds).to.eq('Breakfast')
            })
        })
    })
})
