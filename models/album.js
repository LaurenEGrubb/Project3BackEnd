'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Album extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Album.belongsTo(models.User, { foreignKey: 'userId', as: "user" })
      Album.hasMany(models.Photo, { foreignKey: 'albumId', as: "photo" })
    }
  }
  Album.init({
    name: {type: DataTypes.STRING, allowNull: false},
    description:{type: DataTypes.STRING, allowNull: true},
    photo_url: {type: DataTypes.STRING, allowNull: false},
    userId: {
      type: DataTypes.INTEGER, 
      onDelete: "CASCADE",
      references: {
        model: "users",
        key: "id"
      }
    }
  }, {
    sequelize,
    modelName: 'Album',
    tableName: 'albums'
  });
  return Album;
};