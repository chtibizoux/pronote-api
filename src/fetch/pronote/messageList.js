const parse = require('../../data/types');
const { toPronote } = require('../../data/objects');

const navigate = require('./navigate');

const PAGE_NAME = 'ListeMessages';
const TAB_ID = 131;
const ACCOUNTS = ['student', 'parent'];
// eslint-disable-next-line max-len
async function getMessageList(session, user, ownMessages = [], markAsRead = true, viewedMessagesNumber = 30, isNotPossessed = false)
{
    ownMessages = ownMessages.map(message => toPronote(message));
    const list = await navigate(session, user, PAGE_NAME, TAB_ID, ACCOUNTS, {
        message: {
            N: 0
        },
        marquerCommeLu: markAsRead,
        nbMessagesVus: viewedMessagesNumber,
        estNonPossede: isNotPossessed,
        listePossessionsMessages: ownMessages
    });

    if (!list) {
        return null;
    }
    return {
        messageList: parse(list.listeMessages, ({
            messageSource, possessionMessage, estNonPossede, contenu, estHTML, libelleDate,
            // eslint-disable-next-line camelcase
            date, estUnAparte, emetteur, public_gauche, hint_gauche, nbPublic
        }) => ({
            sourceMessage: parse(messageSource),
            possessionMessage: parse(possessionMessage),
            isNotPossessed: estNonPossede,
            content: parse(contenu),
            isHTML: estHTML,
            dateLabel: libelleDate,
            date: parse(date),
            isanAparte: estUnAparte,
            transmitter: emetteur,
            // eslint-disable-next-line camelcase
            leftPublic: public_gauche,
            // eslint-disable-next-line camelcase
            leftHint: hint_gauche,
            publicNumber: nbPublic
        })),
        responceMessage: parse(list.messagePourReponse),
        buttonsList: parse(list.listeBoutons),
        possessionMessageNumber: list.nbPossessionsMessage
    };
}

module.exports = getMessageList;
