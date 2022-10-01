const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../src/app');

chai.use(chaiHttp);
const { expect } = chai;

const signUpMock = {
  firstName: 'Alice',
  email: 'alice@email.com',
  password: 'amongus',
  phone: '912345678',
};

describe.only('Using POST method on /signup', function () {
  it('Expect to register a new user', async function () {
    const response = await chai.request(app).post('/signup').send(signUpMock);

    expect(response.status).to.be.equal(200);
    expect(response.body).to.have.property('token');
  });

  it('Expect to not add a new user when the firstName is empty', async function () {
    const mockWithoutFirstName = { ...signUpMock };
    delete mockWithoutFirstName.firstName;

    const response = await chai
      .request(app)
      .post('/signup')
      .send(mockWithoutFirstName);

    expect(response.status).to.be.equal(401);
    expect(response.body).to.deep.equal({ message: 'Campos ausentes!' });
  });

  it('Expect to not add a new user when the email is empty', async function () {
    const mockWithoutEmail = { ...signUpMock };
    delete mockWithoutEmail.email;

    const response = await chai
      .request(app)
      .post('/signup')
      .send(mockWithoutEmail);

    expect(response.status).to.be.equal(401);
    expect(response.body).to.deep.equal({ message: 'Campos ausentes!' });
  });

  it('Expect to not add a new user when the password is empty', async function () {
    const mockWithoutPassword = { ...signUpMock };
    delete mockWithoutPassword.password;

    const response = await chai
      .request(app)
      .post('/signup')
      .send(mockWithoutPassword);

    expect(response.status).to.be.equal(401);
    expect(response.body).to.deep.equal({ message: 'Campos ausentes!' });
  });

  it('Expect to not add a new user when the phone is empty', async function () {
    const mockWithoutPhone = { ...signUpMock };
    delete mockWithoutPhone.phone;

    const response = await chai
      .request(app)
      .post('/signup')
      .send(mockWithoutPhone);

    expect(response.status).to.be.equal(401);
    expect(response.body).to.deep.equal({ message: 'Campos ausentes!' });
  });
});
