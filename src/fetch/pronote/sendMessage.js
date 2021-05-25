const parse = require('../../data/types');
const { toPronote } = require('../../data/objects');

const navigate = require('./navigate');

const PAGE_NAME = 'SaisieMessage';
const TAB_ID = 131;
const ACCOUNTS = ['student', 'parent'];
// eslint-disable-next-line max-len
async function setSendMessage(session, user, object = '', content = '', files = [], responceMessage = {}, private = false)
{
    const message = await navigate(session, user, PAGE_NAME, TAB_ID, ACCOUNTS, {
        bouton: {
            N: 0,
            G: private ? 1 : 3
        },
        genreDiscussion: 0,
        messagePourReponse: toPronote(responceMessage),
        objet: object,
        contenu: content,
        listeDestinataires: [],
        listeFichiers: files
    });

    if (!message) {
        return null;
    }
    return message;
    // J'ai pas tester
    // return {
    //     messageList: parse(list.listeMessages, ({
    //         messageSource, possessionMessage, estNonPossede, contenu, estHTML, libelleDate,
    //         // eslint-disable-next-line camelcase
    //         date, estUnAparte, emetteur, public_gauche, hint_gauche, nbPublic
    //     }) => ({
    //         sourceMessage: parse(messageSource),
    //         possessionMessage: parse(possessionMessage),
    //         isNotPossessed: estNonPossede,
    //         content: parse(contenu),
    //         isHTML: estHTML,
    //         dateLabel: libelleDate,
    //         date: parse(date),
    //         isanAparte: estUnAparte,
    //         transmitter: emetteur,
    //         // eslint-disable-next-line camelcase
    //         leftPublic: public_gauche,
    //         // eslint-disable-next-line camelcase
    //         leftHint: hint_gauche,
    //         publicNumber: nbPublic
    //     })),
    //     responceMessage: parse(list.messagePourReponse),
    //     buttonsList: parse(list.listeBoutons),
    //     possessionMessageNumber: list.nbPossessionsMessage
    // };
}

module.exports = setSendMessage;
