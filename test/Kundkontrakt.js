const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Kundkontrakt', {
    kundkontrakt_id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    kund_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      references: {
        model: 'Kund',
        key: 'kund_id'
      }
    },
    personal_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: true,
      references: {
        model: 'Personal',
        key: 'personal_id'
      }
    },
    ovriginfo_fritext: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Kundkontrakt',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "kundkontrakt_id" },
        ]
      },
      {
        name: "kundkontrakt_id",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "kundkontrakt_id" },
        ]
      },
      {
        name: "kund_id",
        using: "BTREE",
        fields: [
          { name: "kund_id" },
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
