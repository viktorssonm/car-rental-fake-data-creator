const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Skada', {
    skada_id: {
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
    skadeinformation: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    bild_url: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Skada',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "skada_id" },
        ]
      },
      {
        name: "skada_id",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "skada_id" },
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
