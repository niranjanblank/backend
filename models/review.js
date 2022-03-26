'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Review.belongsTo(models.User, {
        foreignKey: 'user_id'
      })

      Review.belongsTo(models.Restaurant, {
        foreignKey: 'restaurant_id'
      })
    }
  }
  Review.init({
    user_id: DataTypes.INTEGER,
    restaurant_id: DataTypes.INTEGER,
    reviewText: DataTypes.STRING,
    reviewTime: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Review',
  });
  return Review;
};