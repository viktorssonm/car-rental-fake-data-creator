const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Foretagskund', {
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
    kontakt_fornamn: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    kontakt_efternamn: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    orgnummer: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    foretagsnamn: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'Foretagskund',
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
