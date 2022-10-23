const PlanModel = (sequelize, DataTypes) => {
  const PlanTable = sequelize.define(
    'Plan',
    {
      planId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      coverage: DataTypes.STRING,
      price: DataTypes.DOUBLE,
    },
    {
      underscored: true,
      timestamps: false,
      tableName: 'Plans',
    }
  );

  PlanTable.associate = ({ Patient }) => {
    PlanTable.hasMany(Patient, {
      as: 'patients',
      foreignKey: 'planId',
    });
  };

  return PlanTable;
};

module.exports = PlanModel;
