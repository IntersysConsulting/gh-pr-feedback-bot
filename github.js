require('dotenv').config();

const Octokit = require('@octokit/rest'),
    octokit = new Octokit({
        auth: process.env.GITHUB_TOKEN
    });


module.exports = {
    getPRs: (orgs, authors) => {
        const q = `is:pr+is:open+user:${orgs.join('+user:')}+author:${authors.join('+author:')}`;

        return octokit.search.issuesAndPullRequests({ q });
    }
};