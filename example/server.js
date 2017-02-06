let bodyParser = require('body-parser'),
    express = require('express'),
    server = express(),

    port = 3700;

server.use(bodyParser.json());

server.get('/', (req, res) => {
    res.sendFile('./index.html', {root: __dirname});
});

server.get('/app.js', (req, res) => {
    res.sendFile('/dist/application.js', {root: __dirname + '/..'});
});

server.post('/save-data', (req, res) => {
    console.log(req.body);
    res.status(200).send('Saved the data!');
});

server.listen(port, () => console.log(`Started on port ${port}`));