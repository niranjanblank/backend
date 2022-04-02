'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
      await queryInterface.bulkInsert('fooditems', [
        {
          foodName: 'Chowmein Chicken',
          foodPrice: '150',
          restaurant_id: 1,
          image: '1.jpg'
        },
        {
          foodName: 'Chowmein Momo',
          foodPrice: '130',
          restaurant_id: 1,
          image: '2.jpg'
        },
        {
          foodName: 'Pizza',
          foodPrice: '250',
          restaurant_id: 2,
          image: '1.jpg'
        },
        {
          foodName: 'Coffee',
          foodPrice: '130',
          restaurant_id: 2,
          image: '2.jpg'
        },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     * 
     */
     await queryInterface.bulkDelete('fooditems', null, {});
  }
};
