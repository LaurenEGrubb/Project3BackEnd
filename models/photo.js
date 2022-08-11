'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Photo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Photo.belongsTo(models.Album, {foreignKey: "albumId", as: "album"})
    }
  }
  Photo.init({
    name: {type: DataTypes.STRING, allowNull: true},
    description: {type: DataTypes.STRING, allowNull: true},
    photo_url: {type: DataTypes.STRING, allowNull: false},
    albumId: {
      type: DataTypes.INTEGER, 
      onDelete: "CASCADE",
      references: {
        model: "users",
        key: "id"
      }
    }
  }, {
    sequelize,
    modelName: 'Photo',
    tableName: 'photos'
  });
  return Photo;
};