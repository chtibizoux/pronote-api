const getHomeworksDone = require('./pronote/homeworksDone');

async function homeworksDone(session, user, id, done)
{

    const homeworks = await getHomeworksDone(session, user, id, done);
    if (!homeworks) {
        return null;
    }

    return homeworks;
}

module.exports = homeworksDone;
