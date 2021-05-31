const { toPronote } = require('../../data/objects');

const navigate = require('./navigate');

const PAGE_NAME = 'SaisieMessage';
const TAB_ID = 131;
const ACCOUNTS = ['student', 'parent'];
// eslint-disable-next-line max-len
async function setSendMessage(session, user, responceMessage = {}, recipients = [], content = '', private = false, object = '', files = [])
{
    const message = await navigate(session, user, PAGE_NAME, TAB_ID, ACCOUNTS, {
        bouton: recipients === [] ? null : {
            N: 0,
            G: private ? 1 : 3
        },
        genreDiscussion: 0,
        messagePourReponse: toPronote(responceMessage),
        objet: object,
        contenu: content,
        listeDestinataires: recipients.map(a => toPronote(a)),
        listeFichiers: files
    });

    if (!message) {
        return null;
    }
    return message;
    // J'ai pas tester
}

module.exports = setSendMessage;
