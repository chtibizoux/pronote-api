const getMessageList = require('./pronote/messageList');
const { checkDuplicates } = require('../data/id');
// eslint-disable-next-line max-len
async function messageList(session, user, ownMessages = [], markAsRead = true, viewedMessagesNumber = 30, isNotPossessed = false)
{
    // eslint-disable-next-line max-len
    const list = await getMessageList(session, user, ownMessages, markAsRead, viewedMessagesNumber, isNotPossessed);
    if (!list) {
        return null;
    }
    list.messageList = checkDuplicates(list.messageList);
    return list;
}

module.exports = messageList;
