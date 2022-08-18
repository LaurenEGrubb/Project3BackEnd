'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Photo extends Model {
    static associate(models) {
      Photo.belongsTo(models.Album, { foreignKey: 'albumId', as: 'album' })
    }
  }
  Photo.init(
    {
      name: { type: DataTypes.STRING, allowNull: true },
      description: { type: DataTypes.STRING, allowNull: true },
      photoUrl: { type: DataTypes.STRING, allowNull: false },
      albumId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'albums',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      modelName: 'Photo',
      tableName: 'photos'
    }
  )
  return Photo
}
