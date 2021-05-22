const getCommunicationResources = require('./pronote/communicationResources');

async function communicationResources(session, user)
{
    const resources = await getCommunicationResources(session, user);
    if (!resources) {
        return null;
    }

    return resources;
}

module.exports = communicationResources;
