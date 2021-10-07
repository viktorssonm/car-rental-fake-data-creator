const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Telefonnummer', {
    telefonnummer_id: {
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
    },
    telefonnummer: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    primartnummer: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    beskrivning: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Telefonnummer',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "telefonnummer_id" },
        ]
      },
      {
        name: "telefonnummer_id",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "telefonnummer_id" },
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
