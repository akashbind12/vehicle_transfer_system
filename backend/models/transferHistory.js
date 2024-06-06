module.exports = (sequelize, DataTypes) => {
  const TransferHistory = sequelize.define("TransferHistory", {
      id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
      },
      vehicle_number: {
          type: DataTypes.STRING,
          allowNull: false,
      },
      from_driver_id: {
          type: DataTypes.INTEGER,
      },
      to_driver_id: {
          type: DataTypes.INTEGER,
      },
      transfer_date: {
          type: DataTypes.DATE,
          defaultValue: DataTypes.NOW,
      },
  });

  TransferHistory.associate = (models) => {
      TransferHistory.belongsTo(models.Driver, {
          foreignKey: 'from_driver_id',
          as: 'from_driver',
      });
      TransferHistory.belongsTo(models.Driver, {
          foreignKey: 'to_driver_id',
          as: 'to_driver',
      });
      TransferHistory.belongsTo(models.Vehicle, {
          foreignKey: 'vehicle_number',
          as: 'vehicle',
      });
  };

  return TransferHistory;
};
