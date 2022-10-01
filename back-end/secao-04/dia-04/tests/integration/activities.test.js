const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../src/app');

chai.use(chaiHttp);
const { expect } = chai;

const activityMock = {
  name: 'Trekking',
  price: 0,
  description: {
    rating: 5,
    difficulty: 'Fácil',
    createdAt: '10/08/2022',
  },
};

describe('Using POST method on /activities', function () {
  it('Expect to add a new activity', async function () {
    const response = await chai
      .request(app)
      .post('/activities')
      .send(activityMock);

    expect(response.status).to.be.equal(201);
    expect(response.body).to.deep.equal({
      message: 'Atividade cadastrada com sucesso!',
    });
  });

  it('Expect to not add a new activity when the name is empty', async function () {
    const mockWithoutName = { ...activityMock };
    delete mockWithoutName.name;

    const response = await chai
      .request(app)
      .post('/activities')
      .send(mockWithoutName);

    expect(response.status).to.be.equal(400);
    expect(response.body).to.deep.equal({
      message: 'O campo name é obrigatório',
    });
  });

  it('Expect to not add a new activity when the name is invalid', async function () {
    const response = await chai
      .request(app)
      .post('/activities')
      .send({ ...activityMock, name: 'Tr' });

    expect(response.status).to.be.equal(400);
    expect(response.body).to.deep.equal({
      message: 'O campo name deve ter pelo menos 4 caracteres',
    });
  });

  it('Expect to not add a new activity when the price is empty', async function () {
    const mockWithoutPrice = { ...activityMock };
    delete mockWithoutPrice.price;

    const response = await chai
      .request(app)
      .post('/activities')
      .send(mockWithoutPrice);

    expect(response.status).to.be.equal(400);
    expect(response.body).to.deep.equal({
      message: 'O campo price é obrigatório',
    });
  });

  it('Expect to not add a new activity when the price is invalid', async function () {
    const response = await chai
      .request(app)
      .post('/activities')
      .send({ ...activityMock, price: '-1' });

    expect(response.status).to.be.equal(400);
    expect(response.body).to.deep.equal({
      message: 'O campo price deve ser um número maior ou igual a zero',
    });
  });

  it('Expect to not add a new activity when the description is empty', async function () {
    const mockWithoutDesc = { ...activityMock };
    delete mockWithoutDesc.description;

    const response = await chai
      .request(app)
      .post('/activities')
      .send(mockWithoutDesc);

    expect(response.status).to.be.equal(400);
    expect(response.body).to.deep.equal({
      message: 'O campo description é obrigatório',
    });
  });

  it('Expect to not add a new activity when the createdAt is empty', async function () {
    const mockWithoutCreatedAt = {
      ...activityMock,
      description: { ...activityMock.description },
    };
    delete mockWithoutCreatedAt.description.createdAt;

    const response = await chai
      .request(app)
      .post('/activities')
      .send(mockWithoutCreatedAt);

    expect(response.status).to.be.equal(400);
    expect(response.body).to.deep.equal({
      message: 'O campo createdAt é obrigatório',
    });
  });

  it('Expect to not add a new activity when the createdAt is invalid', async function () {
    const response = await chai
      .request(app)
      .post('/activities')
      .send({
        ...activityMock,
        description: {
          ...activityMock.description,
          createdAt: '2022-21-02',
        },
      });

    expect(response.status).to.be.equal(400);
    expect(response.body).to.deep.equal({
      message: "O campo createdAt deve ter o formato 'dd/mm/aaaa'",
    });
  });

  it('Expect to not add a new activity when the rating is empty', async function () {
    const mockWithoutRating = {
      ...activityMock,
      description: { ...activityMock.description },
    };
    delete mockWithoutRating.description.rating;

    const response = await chai
      .request(app)
      .post('/activities')
      .send(mockWithoutRating);

    expect(response.status).to.be.equal(400);
    expect(response.body).to.deep.equal({
      message: 'O campo rating é obrigatório',
    });
  });

  it('Expect to not add a new activity when the rating is invalid', async function () {
    const response = await chai
      .request(app)
      .post('/activities')
      .send({
        ...activityMock,
        description: {
          ...activityMock.description,
          rating: '7',
        },
      });

    expect(response.status).to.be.equal(400);
    expect(response.body).to.deep.equal({
      message: 'O campo rating deve ser um número inteiro entre 1 e 5',
    });
  });

  it('Expect to not add a new activity when the difficulty is empty', async function () {
    const mockWithoutDifficulty = {
      ...activityMock,
      description: { ...activityMock.description },
    };
    delete mockWithoutDifficulty.description.difficulty;

    const response = await chai
      .request(app)
      .post('/activities')
      .send(mockWithoutDifficulty);

    expect(response.status).to.be.equal(400);
    expect(response.body).to.deep.equal({
      message: 'O campo difficulty é obrigatório',
    });
  });

  it('Expect to not add a new activity when the difficulty is invalid', async function () {
    const response = await chai
      .request(app)
      .post('/activities')
      .send({
        ...activityMock,
        description: {
          ...activityMock.description,
          difficulty: 'Muito fácil',
        },
      });

    expect(response.status).to.be.equal(400);
    expect(response.body).to.deep.equal({
      message: "O campo difficulty deve ser 'Fácil', 'Médio' ou 'Difícil'",
    });
  });
});
