'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "First Name cannot be null"
        }
      }
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNUll: {
          msg: "Last name cannot be null"
        }
      },
    },
    email:{
    type: DataTypes.STRING,
    unique: {
      msg: "This email has already been taken"
    },
    allowNull: false,
    validate: {
        notNull: {
          msg: "Email cannot be null"
        },
        isEmail: {
          msg: "Enter a valid email"
        }
      }
    },
  
    password:{
        allowNull: false,
        validate: {
          notNull: {
            msg: "Password cannot be null"
          },
          len :{
            args: 8,
            msg: "Password needs to be at least 8 letters long"
          }
        }
      }
    }, 
  {
    sequelize,
    modelName: 'User',
  });
  return User;
};