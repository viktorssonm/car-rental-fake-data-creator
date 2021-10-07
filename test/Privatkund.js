const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Privatkund', {
    kund_id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Kund',
        key: 'kund_id'
      }
    },
    fornamn: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    efternamn: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    personnummer: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    korkortsnummer: {
      type: DataTypes.STRING(20),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'Privatkund',
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
        name: "id",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "kund_id" },
        ]
      },
    ]
  });
};
