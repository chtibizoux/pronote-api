const getMessageList = require('./pronote/messageList');
// eslint-disable-next-line max-len
async function messageList(session, user, ownMessages = [], markAsRead = true, viewedMessagesNumber = 30, isNotPossessed = false)
{
    // eslint-disable-next-line max-len
    const list = await getMessageList(session, user, ownMessages, markAsRead, viewedMessagesNumber, isNotPossessed);
    if (!list) {
        return null;
    }

    return list;
}

module.exports = messageList;
