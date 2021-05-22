const getPersonalInformations = require('./pronote/personalInformations');
// eslint-disable-next-line max-len
async function personnalInformations(session, user)
{
    // eslint-disable-next-line max-len
    const infos = await getPersonalInformations(session, user);
    if (!infos) {
        return null;
    }
    return infos;
}

module.exports = personnalInformations;
