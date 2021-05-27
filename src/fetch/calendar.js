const getCalendar = require('./pronote/calendar');
async function calendar(session, user)
{
    const calendar = await getCalendar(session, user);
    if (!calendar) {
        return null;
    }

    return calendar;
}

module.exports = calendar;
