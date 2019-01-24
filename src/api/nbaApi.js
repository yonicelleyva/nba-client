import httpRequest from './httpRequest';
const seasonScheduleYear = "2018";

const getCurrentDate = function() {
    return new Promise((resolve, reject) => {
        httpRequest.getRequest('/10s/prod/v1/today.json')
        .then(today => {
            resolve(today.links.currentDate);
        })
        .then(err => {
            reject(err);
        })
    });
}

const getCalendar = function() {
    return new Promise((resolve, reject) => {
        httpRequest.getRequest('/prod/v1/calendar.json')
        .then(today => {
            resolve(today.calendar);
        })
        .then(err => {
            reject(err);
        })
    });
}

const getTodayScoreboard = function() {
    return new Promise((resolve, reject) => {
        getCurrentDate().then(currentDate => {
            httpRequest.getRequest('/prod/v1/' + currentDate + '/scoreboard.json')
            .then(todayScoreboard => {
                resolve(todayScoreboard);
            })
            .then(err => {
                reject(err);
            })
        })
    });
}

const getScoreboard = function(gameDate) {
    return new Promise((resolve, reject) => {
        httpRequest.getRequest('/prod/v2/' + gameDate +'/scoreboard.json')
        .then(scoreboard => {
            resolve(scoreboard);
        })
        .then(err => {
            reject(err);
        })
    });
}

const getTeams = function() {
    return new Promise((resolve, reject) => {
        httpRequest.getRequest('/prod/v2/' + seasonScheduleYear + '/teams.json')
        .then(teams => {
            resolve(teams);
        })
        .then(err => {
            reject(err);
        })
    });
}

const getPlayers = function() {
    return new Promise((resolve, reject) => {
        httpRequest.getRequest('/prod/v1/' + seasonScheduleYear + '/players.json')
        .then(players => {
            resolve(players);
        })
        .then(err => {
            reject(err);
        })
    });
}

const getAllStarRoster = function() {
    return new Promise((resolve, reject) => {
        httpRequest.getRequest('/prod/v1/allstar' + seasonScheduleYear + '/AS_roster.json')
        .then(allStarRoster => {
            resolve(allStarRoster);
        })
        .then(err => {
            reject(err);
        })
    });
}

const getCoaches = function() {
    return new Promise((resolve, reject) => {
        httpRequest.getRequest('/prod/v1/' + seasonScheduleYear + '/coaches.json')
        .then(coaches => {
            resolve(coaches);
        })
        .then(err => {
            reject(err);
        })
    });
}

const getSchedule = function() {
    return new Promise((resolve, reject) => {
        httpRequest.getRequest('/prod/v1/' + seasonScheduleYear + '/schedule.json')
        .then(schedule => {
            resolve(schedule);
        })
        .then(err => {
            reject(err);
        })
    });
}

const getConferenceStandings = function() {
    return new Promise((resolve, reject) => {
        httpRequest.getRequest('/prod/v1/current/standings_conference.json')
        .then(conferenceStandings => {
            resolve(conferenceStandings);
        })
        .then(err => {
            reject(err);
        })
    });
}

const getDivisionStandings = function() {
    return new Promise((resolve, reject) => {
        httpRequest.getRequest('/prod/v1/current/standings_division.json')
        .then(divisionStandings => {
            resolve(divisionStandings);
        })
        .then(err => {
            reject(err);
        })
    });
}

const getAllStandings = function() {
    return new Promise((resolve, reject) => {
        httpRequest.getRequest('/prod/v1/current/standings_all.json')
        .then(allStandings => {
            resolve(allStandings);
        })
        .then(err => {
            reject(err);
        })
    });
}

const getMiniStandings = function() {
    return new Promise((resolve, reject) => {
        httpRequest.getRequest('/prod/v1/current/standings_all_no_sort_keys.json')
        .then(miniStandings => {
            resolve(miniStandings);
        })
        .then(err => {
            reject(err);
        })
    });
}

const getTeamStatsRankings = function() {
    return new Promise((resolve, reject) => {
        httpRequest.getRequest('/prod/v1/' + seasonScheduleYear + '/team_stats_rankings.json')
        .then(teamStatsRankings => {
            resolve(teamStatsRankings);
        })
        .then(err => {
            reject(err);
        })
    });
}

const getLastFiveGameTeamStats = function() {
    return new Promise((resolve, reject) => {
        httpRequest.getRequest('/prod/v1/' + seasonScheduleYear + '/team_stats_last_five_games.json')
        .then(lastFiveGameTeamStats => {
            resolve(lastFiveGameTeamStats);
        })
        .then(err => {
            reject(err);
        })
    });
}

const getPreviewArticle = function(gameDate, gameId) {
    return new Promise((resolve, reject) => {
        httpRequest.getRequest('/prod/v1/' + gameDate + '/' + gameId + '_preview_article.json')
        .then(previewArticle => {
            resolve(previewArticle);
        })
        .then(err => {
            reject(err);
        })
    });
}

const getRecapArticle = function(gameDate, gameId) {
    return new Promise((resolve, reject) => {
        httpRequest.getRequest('/prod/v1/' + gameDate + '/' + gameId + '_recap_article.json')
        .then(recapArticle => {
            resolve(recapArticle);
        })
        .then(err => {
            reject(err);
        })
    });
}

const getBookPdf = function(gameDate, gameId) {
    return new Promise((resolve, reject) => {
        httpRequest.getRequest('/prod/v1/' + gameDate + '/' + gameId + '_Book.json')
        .then(bookPdf => {
            resolve(bookPdf);
        })
        .then(err => {
            reject(err);
        })
    });
}

const getBoxscore = function(gameDate, gameId) {
    return new Promise((resolve, reject) => {
        httpRequest.getRequest('/prod/v1/' + gameDate + '/' + gameId + '_boxscore.json')
        .then(boxscore => {
            resolve(boxscore);
        })
        .then(err => {
            reject(err);
        })
    });
}

const getMiniBoxscore = function(gameDate, gameId) {
    return new Promise((resolve, reject) => {
        httpRequest.getRequest('/prod/v1/' + gameDate + '/' + gameId + '_mini_boxscore.json')
        .then(miniBoxscore => {
            resolve(miniBoxscore);
        })
        .then(err => {
            reject(err);
        })
    });
}

const getPbp = function(gameDate, gameId, periodNum) {
    return new Promise((resolve, reject) => {
        httpRequest.getRequest('/prod/v1/' + gameDate + '/' + gameId + '_pbp_' + periodNum + '.json')
        .then(miniBoxscore => {
            resolve(miniBoxscore);
        })
        .then(err => {
            reject(err);
        })
    });
}

const getLeadTracker = function(gameDate, gameId, periodNum) {
    return new Promise((resolve, reject) => {
        httpRequest.getRequest('/prod/v1/' + gameDate + '/' + gameId + '_lead_tracker_' + periodNum + '.json')
        .then(leadTracker => {
            resolve(leadTracker);
        })
        .then(err => {
            reject(err);
        })
    });
}

const getPlayerGameLog = function(personId) {
    return new Promise((resolve, reject) => {
        httpRequest.getRequest('/prod/v1/' + seasonScheduleYear + '/players/' + personId + '_gamelog.json')
        .then(playerGameLog => {
            resolve(playerGameLog);
        })
        .then(err => {
            reject(err);
        })
    });
}

const getPlayerProfile = function(personId) {
    return new Promise((resolve, reject) => {
        httpRequest.getRequest('/prod/v1/' + seasonScheduleYear + '/players/' + personId + '_profile.json')
        .then(playerProfile => {
            resolve(playerProfile);
        })
        .then(err => {
            reject(err);
        })
    });
}

const getPlayerUberStats = function(personId) {
    return new Promise((resolve, reject) => {
        httpRequest.getRequest('/prod/v1/' + seasonScheduleYear + '/players/' + personId + '_uber_stats.json')
        .then(payerUberStats => {
            resolve(payerUberStats);
        })
        .then(err => {
            reject(err);
        })
    });
}

const getTeamSchedule = function(teamUrlCode) {
    return new Promise((resolve, reject) => {
        httpRequest.getRequest('/prod/v1/' + seasonScheduleYear + '/teams/' + teamUrlCode + '/schedule.json')
        .then(teamSchedule => {
            resolve(teamSchedule);
        })
        .then(err => {
            reject(err);
        })
    });
}

const getTeamsConfig = function() {
    return new Promise((resolve, reject) => {
        httpRequest.getRequest('/prod/' + seasonScheduleYear + '/teams_config.json')
        .then(payerUberStats => {
            resolve(payerUberStats);
        })
        .then(err => {
            reject(err);
        })
    });
}

const getTeamRoster = function(teamUrlCode) {
    return new Promise((resolve, reject) => {
        httpRequest.getRequest('/prod/v1/' + seasonScheduleYear + '/teams/' + teamUrlCode + '/roster.json')
        .then(teamRoster => {
            resolve(teamRoster);
        })
        .then(err => {
            reject(err);
        })
    });
}

const getTeamConfigYear = function(scheduleYear) {
    return new Promise((resolve, reject) => {
        httpRequest.getRequest('/prod/' + scheduleYear + '/teams_config.json')
        .then(teamConfigYear => {
            resolve(teamConfigYear);
        })
        .then(err => {
            reject(err);
        })
    });
}

const getTeamScheduleYear = function(scheduleYear, teamUrlCode) {
    return new Promise((resolve, reject) => {
        httpRequest.getRequest('/prod/v1/' + scheduleYear + '/teams/' + teamUrlCode + '/schedule.json')
        .then(teamScheduleYear => {
            resolve(teamScheduleYear);
        })
        .then(err => {
            reject(err);
        })
    });
}

const getTeamLeaders = function(teamUrlCode) {
    return new Promise((resolve, reject) => {
        httpRequest.getRequest('/prod/v1/' + seasonScheduleYear + '/teams/' + teamUrlCode + '/leaders.json')
        .then(teamLeaders => {
            resolve(teamLeaders);
        })
        .then(err => {
            reject(err);
        })
    });
}

const getTeamScheduleYear2 = function(scheduleYear, teamId) {
    return new Promise((resolve, reject) => {
        httpRequest.getRequest('/prod/v1/' + scheduleYear + '/teams/' + teamId + '/schedule.json')
        .then(teamScheduleYear => {
            resolve(teamScheduleYear);
        })
        .then(err => {
            reject(err);
        })
    });
}

const getTeamLeaders2 = function(teamId) {
    return new Promise((resolve, reject) => {
        httpRequest.getRequest('/prod/v1/' + seasonScheduleYear + '/teams/' + teamId + '/leaders.json')
        .then(teamLeaders => {
            resolve(teamLeaders);
        })
        .then(err => {
            reject(err);
        })
    });
}

const getPlayoffsBracket = function() {
    return new Promise((resolve, reject) => {
        httpRequest.getRequest('/prod/v1/' + seasonScheduleYear + '/playoffsBracket.json')
        .then(playoffsBracket => {
            resolve(playoffsBracket);
        })
        .then(err => {
            reject(err);
        })
    });
}

const getPlayoffSeriesLeaders = function(seriesId) {
    return new Promise((resolve, reject) => {
        httpRequest.getRequest('/prod/v1/' + seasonScheduleYear + '/playoffs_' + seriesId + '_leaders.json')
        .then(playoffSeriesLeaders => {
            resolve(playoffSeriesLeaders);
        })
        .then(err => {
            reject(err);
        })
    });
}

export default {
    getCurrentDate,
    getCalendar,
    getTodayScoreboard,
    getScoreboard,
    getTeams,
    getPlayers,
    getAllStarRoster,
    getCoaches,
    getSchedule,
    getConferenceStandings,
    getDivisionStandings,
    getAllStandings,
    getMiniStandings,
    getTeamStatsRankings,
    getLastFiveGameTeamStats,
    getPreviewArticle,
    getRecapArticle,
    getBookPdf,
    getBoxscore,
    getMiniBoxscore,
    getPbp,
    getLeadTracker,
    getPlayerGameLog,
    getPlayerProfile,
    getPlayerUberStats,
    getTeamSchedule,
    getTeamsConfig,
    getTeamRoster,
    getTeamConfigYear,
    getTeamScheduleYear,
    getTeamLeaders,
    getTeamScheduleYear2,
    getTeamLeaders2,
    getPlayoffsBracket,
    getPlayoffSeriesLeaders
}