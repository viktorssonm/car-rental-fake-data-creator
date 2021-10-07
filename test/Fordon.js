const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Fordon', {
    regnr: {
      type: DataTypes.STRING(6),
      allowNull: false,
      primaryKey: true
    },
    fordonstyp_id: {
      type: DataTypes.BIGINT.UNSIGNED,
      allowNull: false,
      references: {
        model: 'Fordonstyp',
        key: 'fordonstyp_id'
      }
    },
    arsmodell: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    tillverkarenamn: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    modellnamn: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    drivmedel: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    forbrokning_per_km: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    sjalvrisk_kostnad: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'Fordon',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "regnr" },
        ]
      },
      {
        name: "fordonstyp_id",
        using: "BTREE",
        fields: [
          { name: "fordonstyp_id" },
        ]
      },
    ]
  });
};
