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
