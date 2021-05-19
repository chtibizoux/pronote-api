const navigate = require('./navigate');

const NAME = 'SaisieTAFFaitEleve';
const TAB_ID = 7;
const ACCOUNTS = ['student'];

async function getHomeworksDone(session, user, id, done)
{
    const isDone = await navigate(session, user, NAME, TAB_ID, ACCOUNTS, {
        listeTAF: [
            {
                N: id,
                G: 0,
                E: 2,
                TAFFait: done
            }
        ]
    });

    if (!isDone) {
        return false;
    }
    return true;
}

module.exports = getHomeworksDone;
