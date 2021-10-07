const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Uthyrningsstation', {
    uthyrningsstation_id: {
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
    oppettider_text: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Uthyrningsstation',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "uthyrningsstation_id" },
        ]
      },
      {
        name: "uthyrningsstation_id",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "uthyrningsstation_id" },
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
