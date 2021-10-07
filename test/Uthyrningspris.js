const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Uthyrningspris', {
    uthyrningspris_id: {
      autoIncrement: true,
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    kostnad_per_dygn: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    km_kostnad: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    antal_fria_km: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    fastpris: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    fri_text: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Uthyrningspris',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "uthyrningspris_id" },
        ]
      },
      {
        name: "uthyrningspris_id",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "uthyrningspris_id" },
        ]
      },
    ]
  });
};
