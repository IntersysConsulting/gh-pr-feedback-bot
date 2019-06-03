require('dotenv').config();

const Octokit = require('@octokit/rest');
const octokit = new Octokit({
    auth: process.env.GITHUB_TOKEN
});


module.exports = {
    listPRs: (orgs, authors) => {
        const q = `is:pr+is:open+user:${orgs.join('+user:')}+author:${authors.join('+author:')}`;

        return octokit.search.issuesAndPullRequests({ q });
    }
};