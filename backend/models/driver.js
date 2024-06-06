module.exports = (sequelize, DataTypes) => {
  const Driver = sequelize.define("Driver", {
      id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
      },
      name: {
          type: DataTypes.STRING,
          allowNull: false,
      },
      phone_number: {
          type: DataTypes.STRING,
          allowNull: false,
      },
      profile_photo: {
          type: DataTypes.STRING,
      },
  });

  Driver.associate = (models) => {
      Driver.hasMany(models.TransferHistory, {
          foreignKey: 'from_driver_id',
          as: 'transfers_from',
      });
      Driver.hasMany(models.TransferHistory, {
          foreignKey: 'to_driver_id',
          as: 'transfers_to',
      });
  };

  return Driver;
};
