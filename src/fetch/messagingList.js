const getMessagingList = require('./pronote/messagingList');

async function messagingList(session, user, readMessage = true)
{
    const list = await getMessagingList(session, user, readMessage);
    if (!list) {
        return null;
    }

    return list;
}

module.exports = messagingList;
