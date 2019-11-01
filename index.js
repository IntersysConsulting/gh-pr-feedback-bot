const express = require('express'),
    app = express(),
    port = 3000;

const github = require('./github'),
    PRs = require('./PRs');

app.get('/', async (req, res) => {
    try {
        const response = await github.getPRs(),
            results = PRs.evaluate(response.data.items);
            
        res.send(results);
    } catch (err) {
        res.status(err.status).send(err.errors);
    }
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
