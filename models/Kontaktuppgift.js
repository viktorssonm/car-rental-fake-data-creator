const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Kontaktuppgift', {
    kontaktuppgift_id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    postadress: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    postnummer: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    postort: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    postland: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    adress_fritext_info: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Kontaktuppgift',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "kontaktuppgift_id" },
        ]
      },
      {
        name: "kontaktuppgift_id",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "kontaktuppgift_id" },
        ]
      },
    ]
  });
};
