const PatientModel = (sequelize, DataTypes) => {
  const PatientTable = sequelize.define(
    'Patient',
    {
      patientId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      fullname: DataTypes.STRING,
      planId: DataTypes.INTEGER,
    },
    {
      underscored: true,
      timestamps: false,
      tableName: 'Patients',
    }
  );

  PatientTable.associate = ({ Plan }) => {
    PatientTable.belongsTo(Plan, {
      as: 'plan',
      foreignKey: 'planId',
    });
  };

  return PatientTable;
};

module.exports = PatientModel;
