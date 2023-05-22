const express = require('express');
const serveStatic = require('serve-static');
const bodyParser = require('body-parser');
const path = require('path');

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const db = 'mongodb+srv://Swayze:123@cluster0.jf29r1v.mongodb.net/SMPA?retryWrites=true&w=majority';

mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((res) => console.log('Connected to MongoDB'))
  .catch((error) => console.log(error));

  const feedbackSchema = new Schema({
    name: String,
    phone: String,
    email: String,
    message: String
  });

  const Feedback = mongoose.model(`Feedback's`, feedbackSchema);

const app = express();
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
const port = 3000;

let urlencodedParser = bodyParser.urlencoded({ extended: false });

app.post('/submit-feedback', urlencodedParser, function (req, res) {
    if (!req.body) return res.sendStatus(400);
  
    const { name, phone, email, message } = req.body;
  
    const feedback = new Feedback({
      name: name,
      phone: phone,
      email: email,
      message: message
    });
  
    feedback.save()
      .then(() => {
        console.log('Feedback saved successfully');
        res.send('Дякуємо за зворотній зв\'язок!');
      })
      .catch(error => {
        console.error('Failed to save feedback:', error);
        res.sendStatus(500);
      });
  });

app.use(serveStatic(path.join(__dirname, 'public')));
app.use('/styles', express.static(__dirname + 'public/styles'));
app.use('/js', express.static(__dirname + 'public/js'));
app.use('/images', express.static(__dirname + 'public/images'));
app.use('/fonts', express.static(__dirname + 'public/fonts'));

app.get('', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(port, () => console.info(`Listening on port ${port}`));
