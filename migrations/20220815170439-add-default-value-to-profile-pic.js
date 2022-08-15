'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.changeColumn('users', 'profilePicture', {
      type: Sequelize.STRING,
      defaultValue:
        'https://i1.wp.com/wilcity.com/wp-content/uploads/2020/06/115-1150152_default-profile-picture-avatar-png-green.jpg?fit=820%2C860&ssl=1'
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.changeColumn('users', 'profilePicture', {
      type: Sequelize.STRING,
      allowNull: false
    });
  }
};
