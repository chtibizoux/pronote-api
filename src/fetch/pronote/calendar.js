const parse = require('../../data/types');

const navigate = require('./navigate');

const PAGE_NAME = 'PageAgenda';
const TAB_ID = 9;
const ACCOUNTS = ['student', 'parent'];
async function getCalendar(session, user)
{
    const calendar = await navigate(session, user, PAGE_NAME, TAB_ID, ACCOUNTS, {
        AvecListeClasses: true
    });

    if (!calendar) {
        return null;
    }
    const result = [];
    for (const event of calendar.ListeEvenements) {
        result.push({
            from: parse(event.DateDebut),
            to: parse(event.DateFin),
            comment: event.Commentaire,
            isClassCouncil: event.estConseilClasse,
            color: event.CouleurCellule,
            dateLabel: event.estPeriodique
        });
    }
    return result;
    // JSP ce que c'est DomaineDePresence et listeJourDansMois
}

module.exports = getCalendar;
