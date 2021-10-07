const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Personal', {
    personal_id: {
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
    personnummer: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    fornamn: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    efternamn: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    anstallningsdatum: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'Personal',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "personal_id" },
        ]
      },
      {
        name: "personal_id",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "personal_id" },
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
