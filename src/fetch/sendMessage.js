const setSendMessage = require('./pronote/sendMessage');
// eslint-disable-next-line max-len
async function sendMessage(session, user, responceMessage = {}, recipients = [], content = '', private = false, object = '', files = [])
{
    // eslint-disable-next-line max-len
    const message = await setSendMessage(session, user, responceMessage, recipients, content, private, object, files);
    if (!message) {
        return null;
    }

    return message;
}

module.exports = sendMessage;
