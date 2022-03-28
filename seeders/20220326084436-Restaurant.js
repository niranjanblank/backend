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
   await queryInterface.bulkInsert('restaurants',[
     {
       name:'Krispy Krunchy Fried Chicken',
       address: 'Baneshwor, Kathmandu',
       rating: 4,
       details: 'It is a good restro',
       phoneNumber: '123456789',
       image: 'http://localhost:5000/restaurants/1.png'
     },
     {
      name:'Bota Momo',
      address: 'Tripureshwor, Kathmandu',
      rating: 4,
      details: 'Best momo here',
      phoneNumber: '456789',
      image: 'http://localhost:5000/restaurants/2.png'
    },
    {
      name:'Dalle',
      address: 'Koteshwor, Kathmandu',
      rating: 4,
      details: 'It is a good restro',
      phoneNumber: '123456123',
      image: 'http://localhost:5000/restaurants/3.png'
    },
    {
      name:'A Cafe',
      address: 'Lazimpat, Kathmandu',
      rating: 3,
      details: 'Normal Restro',
      phoneNumber: '987654321',
      image: 'http://localhost:5000/restaurants/4.png'
    },
    {
      name:'Tip Top',
      address: 'New Road, Kathmandu',
      rating: 3,
      details: 'Best Food',
      phoneNumber: '987654321',
      image: 'http://localhost:5000/restaurants/5.png'
    },
    {
      name:'Angan Sweets',
      address: 'Lainchaur, Kathmandu',
      rating: 4,
      details: 'Good service',
      phoneNumber: '987654321',
      image: 'http://localhost:5000/restaurants/6.png'
    },
    {
      name:'The Address Lounge',
      address: 'BagBazar, Kathmandu',
      rating: 3,
      details: 'Good surrounding',
      phoneNumber: '987654321',
      image: 'http://localhost:5000/restaurants/7.png'
    },
    {
      name:'Starbucks',
      address: 'Sundhara, Kathmandu',
      rating: 3,
      details: 'Best Coffee',
      phoneNumber: '987654321',
      image: 'http://localhost:5000/restaurants/8.png'
    }
   ], {})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('restaurants', null, {});
  }
};
