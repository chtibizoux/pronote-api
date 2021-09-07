const { getFileURL } = require('../data/files');
const fromHTML = require('../data/html');
const { withId, checkDuplicates } = require('../data/id');

const getInfos = require('./pronote/infos');

async function infos(session, user)
{
    const infos = await getInfos(session, user);
    if (!infos) {
        return null;
    }

    const result = [];

    for (const info of infos.infos)
    {
        result.push(withId({
            date: info.date,
            title: info.name,
            author: info.author.name,
            content: fromHTML(info.content[0].text),
            htmlContent: info.content[0].text,
            options: info.content[0].options,
            replySize: info.content[0].replySize,
            reply: info.content[0].reply,
            replyKind: info.content[0].replyKind,
            maxReplyNumber: info.content[0].maxReplyNumber,
            withMaximum: info.content[0].withMaximum,
            files: info.content[0].files.map(f => withId({ name: f.name, url: getFileURL(session, f) }, ['name']))
        }, ['date', 'title']));
    }

    checkDuplicates(result).sort((a, b) => a.date - b.date);

    return result;
}

module.exports = infos;
