const navigate = require('./navigate');

const PAGE_NAME = 'PageInfosPerso';
const TAB_ID = 49;
const ACCOUNTS = ['student', 'parent'];
// eslint-disable-next-line max-len
async function getPersonalInformations(session, user)
{
    const infos = await navigate(session, user, PAGE_NAME, TAB_ID, ACCOUNTS, {});

    if (!infos) {
        return null;
    }
    return {
        address: [
            infos.Informations.adresse1,
            infos.Informations.adresse2,
            infos.Informations.adresse3,
            infos.Informations.adresse4
        ],
        postalCode: infos.Informations.codePostal,
        city: infos.Informations.ville,
        province: infos.Informations.province,
        country: infos.Informations.pays,
        mail: infos.Informations.eMail,
        phoneNumber: infos.Informations.telephonePortable,
        callSign: infos.Informations.indicatifTel,
        INEnumber: infos.Informations.numeroINE
    };
}

module.exports = getPersonalInformations;
