module.exports = (sequelize, DataTypes) => {
  const Vehicle = sequelize.define("Vehicle", {
      vehicle_number: {
          type: DataTypes.STRING,
          primaryKey: true,
      },
      vehicle_type: {
          type: DataTypes.STRING,
          allowNull: false,
      },
      puc_certificate: {
          type: DataTypes.STRING,
      },
      insurance_certificate: {
          type: DataTypes.STRING,
      },
  });

  Vehicle.associate = (models) => {
      Vehicle.hasMany(models.TransferHistory, {
          foreignKey: 'vehicle_number',
          as: 'transfer_history',
      });
  };

  return Vehicle;
};
