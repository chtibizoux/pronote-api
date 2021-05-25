const getCalendar = require('./pronote/calendar');
// eslint-disable-next-line max-len
async function calendar(session, user, ownMessages = [], markAsRead = true, viewedMessagesNumber = 30, isNotPossessed = false)
{
    // eslint-disable-next-line max-len
    const calendar = await getCalendar(session, user, ownMessages, markAsRead, viewedMessagesNumber, isNotPossessed);
    if (!calendar) {
        return null;
    }

    return calendar;
}

module.exports = calendar;
