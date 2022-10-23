const SurgeryModel = (sequelize, DataTypes) => {
  const SurgeryTable = sequelize.define(
    'Surgery',
    {
      surgeryId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      specialty: DataTypes.STRING,
      doctor: DataTypes.STRING,
    },
    {
      underscored: true,
      timestamps: false,
      tableName: 'Surgeries',
    }
  );
  return SurgeryTable;
};

module.exports = SurgeryModel;
