const setSendMessage = require('./pronote/sendMessage');
// eslint-disable-next-line max-len
async function sendMessage(session, user, ownMessages = [], recipients = [], markAsRead = true, viewedMessagesNumber = 30, isNotPossessed = false)
{
    // eslint-disable-next-line max-len
    const message = await setSendMessage(session, user, ownMessages, recipients, markAsRead, viewedMessagesNumber, isNotPossessed);
    if (!message) {
        return null;
    }

    return message;
}

module.exports = sendMessage;
