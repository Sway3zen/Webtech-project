const express = require('express');
const serveStatic = require('serve-static');
const path = require('path');

const app = express();
const port = 3000;

app.use(serveStatic(path.join(__dirname, 'public')));
app.use('/styles', express.static(__dirname + 'public/styles'));
app.use('/js', express.static(__dirname + 'public/js'));
app.use('/images', express.static(__dirname + 'public/images'));
app.use('/fonts', express.static(__dirname + 'public/fonts'));

app.get('', (req, res) => {
    res.sendFile(__dirname + '/public/msgform.html')
})


app.listen(port, () => console.info("Listening on port"+ {port}))