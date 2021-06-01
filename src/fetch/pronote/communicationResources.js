const parse = require('../../data/types');
const navigate = require('./navigate');

const PAGE_NAME = 'ListeRessourcesPourCommunication';
const TAB_ID = 7;
const ACCOUNTS = ['student', 'parent'];

async function getCommunicationResources(session, user)
{
    const resources = await navigate(session, user, PAGE_NAME, TAB_ID, ACCOUNTS, {
        onglet: {
            N: 0,
            G: 3
        },
        filtreElement: {
            N: 0,
            G: 1
        }
    });

    if (!resources) {
        return null;
    }

    return parse(resources.listeRessourcesPourCommunication, ({ listeRessources, estPrincipal, avecDiscussion }) => ({
        isPrincipal: estPrincipal,
        withDiscussion: avecDiscussion,
        RessourceList: parse(listeRessources)
    }));
}

module.exports = getCommunicationResources;
