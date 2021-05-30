const parse = require('../../data/types');
const navigate = require('./navigate');

const PAGE_NAME = 'ListeMessagerie';
const TAB_ID = 131;
const ACCOUNTS = ['student', 'parent'];

async function getMessagingList(session, user, readMessage = true)
{
    const list = await navigate(session, user, PAGE_NAME, TAB_ID, ACCOUNTS, {
        avecMessage: false,
        avecLu: readMessage
    });

    if (!list) {
        return null;
    }
    return {
        labelList: parse(list.listeEtiquettes),
        mailList: parse(list.listeMessagerie, ({
            estUneDiscussion, nombreMessages, objet, listePossessionsMessages, messagePourParticipants,
            nbPublic, dernierPossessionMessage, messageFenetre, estNonPossede, lu, libelleDate, profondeur
        }) => ({
            isADiscution: estUneDiscussion,
            messageNumber: nombreMessages,
            object: objet,
            ownMessages: parse(listePossessionsMessages),
            messageForParticipants: parse(messagePourParticipants),
            publicNumber: nbPublic,
            lastPossessionMessage: parse(dernierPossessionMessage),
            messageWindow: parse(messageFenetre),
            isNotPossessed: estNonPossede,
            read: lu,
            dateLabel: libelleDate,
            depth: profondeur
        })),
        superUserString: parse(list.strSuperUtilisateurs)
    };
}

module.exports = getMessagingList;
