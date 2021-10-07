const Sequelize = require("sequelize");
const faker = require("faker");
const { Op } = require("sequelize");

// INSERT LOGIN INFO FOR DATABASE BELOW
const sequelize = new Sequelize("#", "#", "#", {
    host: "localhost",
    dialect: "mysql",
    logging: false,
});

var initModels = require("./models/init-models");
var models = initModels(sequelize);

faker.setLocale("sv");

const createNewRental = async (carId) => {
    // Hitta förra hyreshändelsen

    const forraHyresHandelsen = await models.Uthyrningshandelse.findAll({
        where: {
            regnr: carId.regnr,
        },
        include: [
            {
                model: models.Uthyrningsperod,
                as: "uthyrningsperiod",
            },
        ],
        order: [["uthyrningsperiod", "slut_datum", "desc"]],
        limit: 1,
    });

    let forraHyresHandelsenSlutDatum;
    let forraHyrsHandelsenSlutMatarställning;
    let forraHyresstationenId;

    if (forraHyresHandelsen[0] === undefined) {
        // Skapar ett första datum baserat på bilens årsmodell.
        let firstDate = new Date();
        firstDate.setFullYear(carId.arsmodell, 02, 01);
        forraHyresHandelsenSlutDatum = firstDate;
        forraHyrsHandelsenSlutMatarställning = 102;
        forraHyresstationenId = 1;
    } else {
        forraHyresHandelsenSlutDatum =
            forraHyresHandelsen[0].uthyrningsperiod.dataValues.slut_datum;
        forraHyrsHandelsenSlutMatarställning =
            forraHyresHandelsen[0].matarstallning_slut;
        forraHyresstationenId =
            forraHyresHandelsen[0].uthyrningsperiod.dataValues
                .lamna_uthyrningsstation_id;
    }

    const nyKontaktUppgift = await models.Kontaktuppgift.create({
        postadress: faker.address.streetAddress(),
        postnummer: faker.address.zipCode(),
        postort: faker.address.cityName(),
        postland: "sverige",
        email: faker.internet.email(),
    });

    let nyKund;

    if (getRandomNumberInRange(0, 1) === 1) {
        const antalKunder = await models.Kund.count();
        nyKund = await models.Kund.findOne({
            where: {
                kund_id: getRandomNumberInRange(1, antalKunder),
            },
        });
    } else {
        nyKund = await models.Kund.create({
            kontaktuppgift_id: nyKontaktUppgift.kontaktuppgift_id,
        });
        const nyPrivatKund = await models.Privatkund.create({
            fornamn: faker.name.firstName(),
            efternamn: faker.name.lastName(),
            personnummer: "880516-1234",
            korkortsnummer: "3232131",
            kund_id: nyKund.kund_id,
        });
    }

    // Skapa privatkund

    // Skapa nytt kundkontrakt

    const numberOfStaff = await models.Personal.count();

    const nyttKundkontrakt = await models.Kundkontrakt.create({
        kund_id: nyKund.kund_id,
        personal_id: getRandomNumberInRange(1, numberOfStaff),
    });

    // Skapa Uthyrningsperiod

    // Bokat datum
    let bokatDatum = new Date(forraHyresHandelsenSlutDatum);
    bokatDatum.setDate(
        forraHyresHandelsenSlutDatum.getDate() - getRandomNumberInRange(1, 60)
    );

    // Hyra startar
    let hyraStartDatum = new Date(forraHyresHandelsenSlutDatum);
    hyraStartDatum.setDate(
        forraHyresHandelsenSlutDatum.getDate() + getRandomNumberInRange(1, 28)
    );

    // Hyra slut
    let hyraSlutDatum = new Date(hyraStartDatum);
    hyraSlutDatum.setDate(
        hyraStartDatum.getDate() + getRandomNumberInRange(1, 14)
    );

    // Antal uthyrningsstationer
    const antalUthyrningsstationer = await models.Uthyrningsstation.count();

    // Skapa ny uthyrningsperiod
    const nyUthyrningsperiod = await models.Uthyrningsperod.create({
        hamta_uthyrningsstation_id: forraHyresstationenId,
        lamna_uthyrningsstation_id: getRandomNumberInRange(
            1,
            antalUthyrningsstationer
        ),
        bokat_datum: bokatDatum,
        start_datum: hyraStartDatum,
        slut_datum: hyraSlutDatum,
    });

    // Välj ett uthyrningspris
    const antalUthyrningspris = await models.Uthyrningspris.count();
    const allUthyrningsPris = await models.Uthyrningspris.findAll();

    const uthyrningsPris = await models.Uthyrningspris.findOne({
        where: {
            uthyrningspris_id: getRandomNumberInRange(1, antalUthyrningspris),
        },
    });

    // Skapa hyreshändelse

    // Sätt status för utlämning aterlamnad i förhållande till datum
    let utlamnad = nyUthyrningsperiod.start_datum < new Date();
    let aterlamnad = nyUthyrningsperiod.slut_datum < new Date();

    const nyHyreshandlese = await models.Uthyrningshandelse.create({
        regnr: carId.regnr,
        kundkontrakt_id: nyttKundkontrakt.kundkontrakt_id,
        uthyrningsperiod_id: nyUthyrningsperiod.uthyrningsperiod_id,
        uthyrningspris_id: uthyrningsPris.uthyrningspris_id,
        matarstallning_start: forraHyrsHandelsenSlutMatarställning,
        matarstallning_slut:
            forraHyrsHandelsenSlutMatarställning +
            getRandomNumberInRange(10, 300),
        utlamnad,
        aterlamnad,
        avbokad: false,
    });

    // Skapa en fordonskontroll
    if (nyUthyrningsperiod.slut_datum < new Date()) {
        const nyFordonskontroll = await models.Fordonskontroll.create({
            regnr: carId.regnr,
            personal_id: getRandomNumberInRange(1, numberOfStaff),
            matarstallning: nyHyreshandlese.matarstallning_slut,
            datum: nyUthyrningsperiod.slut_datum,
        });
    }

    return nyUthyrningsperiod.slut_datum;
};

const getRandomNumberInRange = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const number = Math.floor(Math.random() * (max - min + 1)) + min;
    return number;
};

// STOP DATE
let stopDate = new Date();
stopDate.setMonth(stopDate.getMonth() + 6);
console.log(stopDate);

const generateData = async () => {
    const cars = await models.Fordon.findAll();

    let checkDate = new Date();

    for (const c of cars) {
        do {
            checkDate = await createNewRental(c.dataValues);
        } while (checkDate < stopDate);
    }
};

generateData();
