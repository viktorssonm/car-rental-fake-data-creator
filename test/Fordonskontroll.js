const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Fordonskontroll', {
    fordonskontroll_id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    regnr: {
      type: DataTypes.STRING(6),
      allowNull: false,
      references: {
        model: 'Fordon',
        key: 'regnr'
      }
    },
    personal_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      references: {
        model: 'Personal',
        key: 'personal_id'
      }
    },
    matarstallning: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    datum: {
      type: DataTypes.DATE,
      allowNull: false
    },
    kontrollinfo_fritext: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Fordonskontroll',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "fordonskontroll_id" },
        ]
      },
      {
        name: "fordonskontroll_id",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "fordonskontroll_id" },
        ]
      },
      {
        name: "regnr",
        using: "BTREE",
        fields: [
          { name: "regnr" },
        ]
      },
      {
        name: "personal_id",
        using: "BTREE",
        fields: [
          { name: "personal_id" },
        ]
      },
    ]
  });
};
