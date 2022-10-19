'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) =>
    queryInterface.bulkInsert(
      'Books',
      [
        {
          title: 'Seasons',
          author: 'Lauro',
          pageQuantity: 21,
          publisher: 'pera cp',
          createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
          updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        },
        {
          title: 'Spring',
          author: 'Salazar',
          publisher: 'WhoWrites.',
          pageQuantity: 12,
          createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
          updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        },
      ],
      {}
    ),

  down: async (queryInterface) => queryInterface.bulkDelete('Books', null, {}),
};
