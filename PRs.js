const constants = require('./constants'),
    md = require('markdown-it')()
    .disable(['image','text']),
    getData = PRs => PRs.map(e => {
        return {
            labels: e.labels.map(label => label.name),
            body: e.body,
            url: e.url,
            title: e.title
        };
    }),
    verify = PRs => PRs.map(e => {
        const missingLabels = constants.LABELS.filter(label => e.labels.indexOf(label) < 0),
            missingPings = constants.PINGS.filter(ping => !e.body.includes(ping));

        if (missingLabels.length > 0 || missingPings.length > 0) {
            return {
                title: e.title,
                url: e.url,
                labels: missingLabels,
                pings: missingPings,
                body: md.parseInline(e.body)
            };
        }
    });

module.exports = {
    evaluate: PRs => {
        const PRsData = getData(PRs),
            filteredData = verify(PRsData).filter(e => e !== undefined);
        return filteredData;
    }
};