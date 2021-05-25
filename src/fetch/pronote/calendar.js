const parse = require('../../data/types');

const navigate = require('./navigate');

const PAGE_NAME = 'PageAgenda';
const TAB_ID = 9;
const ACCOUNTS = ['student', 'parent'];
// eslint-disable-next-line max-len
async function getCalendar(session, user)
{
    const calendar = await navigate(session, user, PAGE_NAME, TAB_ID, ACCOUNTS, {
        AvecListeClasses: true
    });

    if (!calendar) {
        return null;
    }
    return parse(calendar.ListeEvenements, ({
        DateDebut, DateFin, Commentaire, estConseilClasse, CouleurCellule, estPeriodique
    }) => ({
        from: parse(DateDebut),
        to: parse(DateFin),
        comment: Commentaire,
        isClassCouncil: estConseilClasse,
        color: CouleurCellule,
        dateLabel: estPeriodique
    }));
    // JSP ce que c'est DomaineDePresence et listeJourDansMois
}

module.exports = getCalendar;
