const getCommunicationResources = require('./pronote/communicationResources');

async function communicationResources(session, user, wording = 'Professeurs')
{
    const resources = await getCommunicationResources(session, user, wording);
    if (!resources) {
        return null;
    }

    return resources;
}

module.exports = communicationResources;
