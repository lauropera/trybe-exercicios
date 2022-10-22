const AccountModel = (sequelize, DataTypes) => {
  const AccountTable = sequelize.define(
    'Account',
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      email: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {
      tableName: 'Accounts',
      timestamps: false,
    }
  );

  AccountTable.associate = (models) => {
    AccountTable.hasOne(models.Profile, {
      as: 'profile',
      foreignKey: 'accountId',
    });
    AccountTable.hasMany(models.Comment, {
      as: 'comments',
      foreignKey: 'accountId',
    });
  };

  return AccountTable;
};

module.exports = AccountModel;
