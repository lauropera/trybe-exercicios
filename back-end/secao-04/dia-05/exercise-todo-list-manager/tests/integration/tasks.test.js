const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');
const app = require('../../src/app');
const connection = require('../../src/db/connection');
const { expect, use } = chai;

use(chaiHttp);

describe('Testing tasks endpoints', function () {
  const tasksMock = [
    {
      id: 1,
      nome: 'Entregar Pizza',
      descricao: 'Tarefa de Trabalho',
    },
    {
      id: 2,
      nome: 'Comer a pizza',
      descricao: 'Tarefa de lazer',
    },
  ];

  afterEach(sinon.restore);

  it('Expect to add a new task', async function () {
    sinon.stub(connection, 'execute').resolves([{ insertId: 21 }]);

    const response = await chai.request(app).post('/tasks').send(tasksMock[0]);
    expect(response.status).to.be.equal(201);
    expect(response.body).to.deep.equal({
      message: 'Tarefa adicionada com sucesso!',
    });
  });

  it('Expect to show all tasks', async function () {
    sinon.stub(connection, 'execute').resolves([tasksMock]);

    const response = await chai.request(app).get('/tasks');
    expect(response.status).to.be.equal(200);
    expect(response.body).to.deep.equal(tasksMock);
  });

  it('Expect to show the task with id 1', async function () {
    sinon.stub(connection, 'execute').resolves([[tasksMock[0]]]);

    const response = await chai.request(app).get('/tasks/1');
    expect(response.status).to.be.equal(200);
    expect(response.body).to.deep.equal(tasksMock[0]);
  });

  it('Expect to edit the task with id 1', async function () {
    sinon.stub(connection, 'execute').resolves([{ affectedRows: 1 }]);

    const response = await chai.request(app).put('/tasks/1').send({
      nome: 'Tocar piano',
      descricao: 'Tarefa de Lazer',
    });

    expect(response.status).to.be.equal(200);
    expect(response.body).to.deep.equal({
      message: 'Tarefa atualizada com sucesso!',
    });
  });

  it('Expect to delete a task with id 1', async function () {
    sinon.stub(connection, 'execute').resolves([{ affectedRows: 1 }]);

    const response = await chai.request(app).delete('/tasks/1');
    expect(response.status).to.be.equal(204);
  });
});
