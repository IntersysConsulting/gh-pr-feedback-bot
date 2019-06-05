const constants = require('./constants'),
    Octokit = require('@octokit/rest'),
    octokit = new Octokit({
        auth: constants.GITHUB_TOKEN
    }),
    ORGS = constants.ORGS,
    AUTHORS = constants.AUTHORS;


module.exports = {
    getPRs: () => {
        const q = `is:pr+is:open+user:${ORGS.replace(/\,/g, '+user:')}+author:${AUTHORS.replace(/\,/g, '+author:')}`;

        return octokit.search.issuesAndPullRequests({ q });
    }
};