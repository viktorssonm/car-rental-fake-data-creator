const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Uthyrningshandelse', {
    uthyrningshandelse_id: {
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
    kundkontrakt_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      references: {
        model: 'Kundkontrakt',
        key: 'kundkontrakt_id'
      }
    },
    uthyrningsperiod_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      references: {
        model: 'Uthyrningsperod',
        key: 'uthyrningsperiod_id'
      }
    },
    uthyrningspris_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      references: {
        model: 'Uthyrningspris',
        key: 'uthyrningspris_id'
      }
    },
    matarstallning_start: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    matarstallning_slut: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    utlamnad: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    aterlamnad: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    avbokad: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0
    },
    ovriginfo_fritext: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Uthyrningshandelse',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "uthyrningshandelse_id" },
        ]
      },
      {
        name: "uthyrningshandelse_id",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "uthyrningshandelse_id" },
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
        name: "kundkontrakt_id",
        using: "BTREE",
        fields: [
          { name: "kundkontrakt_id" },
        ]
      },
      {
        name: "uthyrningsperiod_id",
        using: "BTREE",
        fields: [
          { name: "uthyrningsperiod_id" },
        ]
      },
      {
        name: "uthyrningspris_id",
        using: "BTREE",
        fields: [
          { name: "uthyrningspris_id" },
        ]
      },
    ]
  });
};
