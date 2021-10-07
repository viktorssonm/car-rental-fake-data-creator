var DataTypes = require("sequelize").DataTypes;
var _Besiktning = require("./Besiktning");
var _Fordon = require("./Fordon");
var _Fordonskontroll = require("./Fordonskontroll");
var _Fordonstyp = require("./Fordonstyp");
var _Foretagskund = require("./Foretagskund");
var _Kontaktuppgift = require("./Kontaktuppgift");
var _Kund = require("./Kund");
var _Kundkontrakt = require("./Kundkontrakt");
var _Personal = require("./Personal");
var _Privatkund = require("./Privatkund");
var _Skada = require("./Skada");
var _Telefonnummer = require("./Telefonnummer");
var _Uthyrningshandelse = require("./Uthyrningshandelse");
var _Uthyrningsperod = require("./Uthyrningsperod");
var _Uthyrningspris = require("./Uthyrningspris");
var _Uthyrningsstation = require("./Uthyrningsstation");

function initModels(sequelize) {
  var Besiktning = _Besiktning(sequelize, DataTypes);
  var Fordon = _Fordon(sequelize, DataTypes);
  var Fordonskontroll = _Fordonskontroll(sequelize, DataTypes);
  var Fordonstyp = _Fordonstyp(sequelize, DataTypes);
  var Foretagskund = _Foretagskund(sequelize, DataTypes);
  var Kontaktuppgift = _Kontaktuppgift(sequelize, DataTypes);
  var Kund = _Kund(sequelize, DataTypes);
  var Kundkontrakt = _Kundkontrakt(sequelize, DataTypes);
  var Personal = _Personal(sequelize, DataTypes);
  var Privatkund = _Privatkund(sequelize, DataTypes);
  var Skada = _Skada(sequelize, DataTypes);
  var Telefonnummer = _Telefonnummer(sequelize, DataTypes);
  var Uthyrningshandelse = _Uthyrningshandelse(sequelize, DataTypes);
  var Uthyrningsperod = _Uthyrningsperod(sequelize, DataTypes);
  var Uthyrningspris = _Uthyrningspris(sequelize, DataTypes);
  var Uthyrningsstation = _Uthyrningsstation(sequelize, DataTypes);

  Besiktning.belongsTo(Fordon, { as: "regnr_Fordon", foreignKey: "regnr"});
  Fordon.hasMany(Besiktning, { as: "Besiktnings", foreignKey: "regnr"});
  Fordonskontroll.belongsTo(Fordon, { as: "regnr_Fordon", foreignKey: "regnr"});
  Fordon.hasMany(Fordonskontroll, { as: "Fordonskontrolls", foreignKey: "regnr"});
  Skada.belongsTo(Fordon, { as: "regnr_Fordon", foreignKey: "regnr"});
  Fordon.hasMany(Skada, { as: "Skadas", foreignKey: "regnr"});
  Uthyrningshandelse.belongsTo(Fordon, { as: "regnr_Fordon", foreignKey: "regnr"});
  Fordon.hasMany(Uthyrningshandelse, { as: "Uthyrningshandelses", foreignKey: "regnr"});
  Fordon.belongsTo(Fordonstyp, { as: "fordonstyp", foreignKey: "fordonstyp_id"});
  Fordonstyp.hasMany(Fordon, { as: "Fordons", foreignKey: "fordonstyp_id"});
  Kund.belongsTo(Kontaktuppgift, { as: "kontaktuppgift", foreignKey: "kontaktuppgift_id"});
  Kontaktuppgift.hasMany(Kund, { as: "Kunds", foreignKey: "kontaktuppgift_id"});
  Personal.belongsTo(Kontaktuppgift, { as: "kontaktuppgift", foreignKey: "kontaktuppgift_id"});
  Kontaktuppgift.hasMany(Personal, { as: "Personals", foreignKey: "kontaktuppgift_id"});
  Telefonnummer.belongsTo(Kontaktuppgift, { as: "kontaktuppgift", foreignKey: "kontaktuppgift_id"});
  Kontaktuppgift.hasMany(Telefonnummer, { as: "Telefonnummers", foreignKey: "kontaktuppgift_id"});
  Uthyrningsstation.belongsTo(Kontaktuppgift, { as: "kontaktuppgift", foreignKey: "kontaktuppgift_id"});
  Kontaktuppgift.hasMany(Uthyrningsstation, { as: "Uthyrningsstations", foreignKey: "kontaktuppgift_id"});
  Foretagskund.belongsTo(Kund, { as: "kund", foreignKey: "kund_id"});
  Kund.hasOne(Foretagskund, { as: "Foretagskund", foreignKey: "kund_id"});
  Kundkontrakt.belongsTo(Kund, { as: "kund", foreignKey: "kund_id"});
  Kund.hasMany(Kundkontrakt, { as: "Kundkontrakts", foreignKey: "kund_id"});
  Privatkund.belongsTo(Kund, { as: "kund", foreignKey: "kund_id"});
  Kund.hasOne(Privatkund, { as: "Privatkund", foreignKey: "kund_id"});
  Uthyrningshandelse.belongsTo(Kundkontrakt, { as: "kundkontrakt", foreignKey: "kundkontrakt_id"});
  Kundkontrakt.hasMany(Uthyrningshandelse, { as: "Uthyrningshandelses", foreignKey: "kundkontrakt_id"});
  Besiktning.belongsTo(Personal, { as: "personal", foreignKey: "personal_id"});
  Personal.hasMany(Besiktning, { as: "Besiktnings", foreignKey: "personal_id"});
  Fordonskontroll.belongsTo(Personal, { as: "personal", foreignKey: "personal_id"});
  Personal.hasMany(Fordonskontroll, { as: "Fordonskontrolls", foreignKey: "personal_id"});
  Kundkontrakt.belongsTo(Personal, { as: "personal", foreignKey: "personal_id"});
  Personal.hasMany(Kundkontrakt, { as: "Kundkontrakts", foreignKey: "personal_id"});
  Skada.belongsTo(Personal, { as: "personal", foreignKey: "personal_id"});
  Personal.hasMany(Skada, { as: "Skadas", foreignKey: "personal_id"});
  Uthyrningshandelse.belongsTo(Uthyrningsperod, { as: "uthyrningsperiod", foreignKey: "uthyrningsperiod_id"});
  Uthyrningsperod.hasMany(Uthyrningshandelse, { as: "Uthyrningshandelses", foreignKey: "uthyrningsperiod_id"});
  Uthyrningshandelse.belongsTo(Uthyrningspris, { as: "uthyrningspri", foreignKey: "uthyrningspris_id"});
  Uthyrningspris.hasMany(Uthyrningshandelse, { as: "Uthyrningshandelses", foreignKey: "uthyrningspris_id"});
  Uthyrningsperod.belongsTo(Uthyrningsstation, { as: "lamna_uthyrningsstation", foreignKey: "lamna_uthyrningsstation_id"});
  Uthyrningsstation.hasMany(Uthyrningsperod, { as: "Uthyrningsperods", foreignKey: "lamna_uthyrningsstation_id"});
  Uthyrningsperod.belongsTo(Uthyrningsstation, { as: "hamta_uthyrningsstation", foreignKey: "hamta_uthyrningsstation_id"});
  Uthyrningsstation.hasMany(Uthyrningsperod, { as: "hamta_uthyrningsstation_Uthyrningsperods", foreignKey: "hamta_uthyrningsstation_id"});

  return {
    Besiktning,
    Fordon,
    Fordonskontroll,
    Fordonstyp,
    Foretagskund,
    Kontaktuppgift,
    Kund,
    Kundkontrakt,
    Personal,
    Privatkund,
    Skada,
    Telefonnummer,
    Uthyrningshandelse,
    Uthyrningsperod,
    Uthyrningspris,
    Uthyrningsstation,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
