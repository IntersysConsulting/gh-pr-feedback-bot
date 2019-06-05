require('dotenv').config();

module.exports = {
    GITHUB_TOKEN: process.env.GITHUB_TOKEN,
    ORGS: process.env.ORGS_REPOS,
    AUTHORS: process.env.AUTHORS_PRS
};