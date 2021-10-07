const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Uthyrningsperod', {
    uthyrningsperiod_id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    lamna_uthyrningsstation_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      references: {
        model: 'Uthyrningsstation',
        key: 'uthyrningsstation_id'
      }
    },
    hamta_uthyrningsstation_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      references: {
        model: 'Uthyrningsstation',
        key: 'uthyrningsstation_id'
      }
    },
    bokat_datum: {
      type: DataTypes.DATE,
      allowNull: false
    },
    start_datum: {
      type: DataTypes.DATE,
      allowNull: false
    },
    slut_datum: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'Uthyrningsperod',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "uthyrningsperiod_id" },
        ]
      },
      {
        name: "uthyrningsperiod_id",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "uthyrningsperiod_id" },
        ]
      },
      {
        name: "lamna_uthyrningsstation",
        using: "BTREE",
        fields: [
          { name: "lamna_uthyrningsstation_id" },
        ]
      },
      {
        name: "hamta_uthyrningsstation_id",
        using: "BTREE",
        fields: [
          { name: "hamta_uthyrningsstation_id" },
        ]
      },
    ]
  });
};
