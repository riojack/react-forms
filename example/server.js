let express = require('express'),
    server = express(),

    port = 3700;

server.get('/', (req, res) => {
    res.sendFile('./index.html', {root: __dirname});
});

server.get('/app.js', (req, res) => {
    res.sendFile('/dist/application.js', {root: __dirname + '/..'});
});

server.listen(port, () => console.log(`Started on port ${port}`));