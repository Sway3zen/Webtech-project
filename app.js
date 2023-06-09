const express = require('express');
const serveStatic = require('serve-static');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');

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
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
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

const authlogin = "Swayze";
const authpassword = "nazar";

/*app.get('/admin.html', (req, res) => {
  const { authorized } = req.query;

  if (authorized === 'true') {
    res.sendFile(path.join(__dirname, 'public', 'admin.html'));
  } else {
    res.redirect('/loginform.html');
  }
});

app.get('/submit-login', function (req, res) {
  const { userlogin, userpassword } = req.query;

  if (userlogin === authlogin && userpassword === authpassword) {
    console.log(userlogin);
    console.log(userpassword);
    res.redirect('/admin.html?authorized=true');
  } else {
    res.send("I can't find this user.");
  }
});*/

// app.get('/submit-login', function (req, res) {
//   const { userlogin, userpassword } = req.query;

//   if (userlogin === authlogin && userpassword === authpassword) {

//     fs.readFile(path.join(__dirname, 'public', 'admin.html'), 'utf8', function (err, data) {
//       if (err) {
//         console.error('Failed to read admin.html:', err);
//         res.sendStatus(500);
//       } else {
//         res.send(data);
//       }
//     });
//   } else {
//     res.send("I can't find this user.");
//   }
// });

// app.get('/submit-login', function (req, res) {
//   const { userlogin, userpassword } = req.query;

//   if (userlogin === authlogin && userpassword === authpassword) {
//     res.redirect('/feedbacks');
//   } else {
//     res.send("I can't find this user.");
//   }
// });


// app.get('/feedbacks', function (req, res) {
//   Feedback.find({})
//     .then(feedbacks => {
//       res.render('feedbacks', { feedbacks: feedbacks });
//     })
//     .catch(error => {
//       console.error('Failed to fetch feedbacks:', error);
//       res.sendStatus(500);
//     });
// });

let isAuthenticated = false;

app.get('/submit-login', function (req, res) {
  const { userlogin, userpassword } = req.query;

  if (userlogin === authlogin && userpassword === authpassword) {
    isAuthenticated = true; 
    res.redirect('/feedbacks'); 
  } else {
    res.send("I can't find this user.");
  }
});

app.get('/feedbacks', function (req, res) {
  if (isAuthenticated) {
    Feedback.find({})
      .then(feedbacks => {
        res.render('feedbacks', { feedbacks: feedbacks });
      })
      .catch(error => {
        console.error('Failed to fetch feedbacks:', error);
        res.sendStatus(500);
      });
  } else {
    res.redirect('/loginform.html');
  }
});

app.use(express.static(path.join(__dirname, 'public')));
app.use('/styles', express.static(path.join(__dirname, 'public', 'styles')));
app.use('/js', express.static(path.join(__dirname, 'public', 'js')));
app.use('/images', express.static(path.join(__dirname, 'public', 'images')));
app.use('/fonts', express.static(path.join(__dirname, 'public', 'fonts')));

app.get('', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => console.info(`Listening on port ${port}`));
