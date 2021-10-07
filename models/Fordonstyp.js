const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Fordonstyp', {
    fordonstyp_id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    kategorinamn: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    antaldorrar: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    antalpersoner: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    lastutrymmebeskr: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    lastutrymmevolym: {
      type: DataTypes.FLOAT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Fordonstyp',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "fordonstyp_id" },
        ]
      },
      {
        name: "fordonstyp_id",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "fordonstyp_id" },
        ]
      },
    ]
  });
};
