const PatientSurgeryModel = (sequelize, DataTypes) => {
  const PatientSurgeryTable = sequelize.define(
    'PatientSurgery',
    {},
    {
      underscored: true,
      timestamps: false,
      tableName: 'Patient_surgeries',
    }
  );

  PatientSurgeryTable.associate = ({ Patient, Surgery }) => {
    Surgery.belongsToMany(Patient, {
      as: 'patients',
      through: PatientSurgeryTable,
      foreignKey: 'surgeryId',
      otherKey: 'patientId',
    });
    Patient.belongsToMany(Surgery, {
      as: 'surgeries',
      through: PatientSurgeryTable,
      foreignKey: 'patientId',
      otherKey: 'surgeryId',
    });
  };

  return PatientSurgeryTable;
};

module.exports = PatientSurgeryModel;
