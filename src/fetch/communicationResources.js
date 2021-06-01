const getCommunicationResources = require('./pronote/communicationResources');
const { checkDuplicates } = require('../data/id');

async function communicationResources(session, user, wording = 'Professeurs')
{
    const resources = await getCommunicationResources(session, user, wording);
    if (!resources) {
        return null;
    }

    return checkDuplicates(resources);
}

module.exports = communicationResources;
