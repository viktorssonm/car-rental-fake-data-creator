const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Kund', {
    kund_id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    kontaktuppgift_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      references: {
        model: 'Kontaktuppgift',
        key: 'kontaktuppgift_id'
      }
    }
  }, {
    sequelize,
    tableName: 'Kund',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "kund_id" },
        ]
      },
      {
        name: "kund_id",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "kund_id" },
        ]
      },
      {
        name: "kontaktuppgift_id",
        using: "BTREE",
        fields: [
          { name: "kontaktuppgift_id" },
        ]
      },
    ]
  });
};
