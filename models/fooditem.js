'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class FoodItem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      FoodItem.belongsToMany(models.Cart, {
        through: 'CartItem',
        foreignKey: 'food_item_id'
      })

      this.belongsTo(models.Restaurant, {
        as: 'Restaurant',
        foreignKey: 'restaurant_id'
      })
    }
  }
  FoodItem.init({
    foodName: DataTypes.STRING,
    foodPrice: DataTypes.STRING,
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'FoodItem',
  });
  return FoodItem;
};