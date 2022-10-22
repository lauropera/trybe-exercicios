const ProfileModel = (sequelize, DataTypes) => {
  const ProfileTable = sequelize.define(
    'Profile',
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      phone: DataTypes.STRING,
      accountId: DataTypes.INTEGER,
    },
    {
      timestamps: false,
      tableName: 'Profiles',
      underscored: true,
    }
  );

  ProfileTable.associate = (models) => {
    ProfileTable.belongsTo(models.Account, {
      as: 'accounts',
      foreignKey: 'accountId',
    });
  };

  return ProfileTable;
};

module.exports = ProfileModel;
