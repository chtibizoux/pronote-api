const setSendMessage = require('./pronote/sendMessage');
// eslint-disable-next-line max-len
async function sendMessage(session, user, ownMessages = [], markAsRead = true, viewedMessagesNumber = 30, isNotPossessed = false)
{
    // eslint-disable-next-line max-len
    const message = await setSendMessage(session, user, ownMessages, markAsRead, viewedMessagesNumber, isNotPossessed);
    if (!message) {
        return null;
    }

    return message;
}

module.exports = sendMessage;
