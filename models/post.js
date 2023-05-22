const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;

const app = express();

app.use(bodyParser.json());

const mongoURL = 'mongodb+srv://Swayze:123@cluster0.jf29r1v.mongodb.net/?retryWrites=true&w=majority';

const dbName = "Cluster0";
const collectionName = "SMPA.posts";

app.post('/submit-feedback', (req, res) => {
    const { name, phone, email, message } = req.body;
  
    // Підключення до бази даних
    MongoClient.connect(mongoURL, { useUnifiedTopology: true }, (err, client) => {
      if (err) {
        console.error('Помилка підключення до бази даних:', err);
        res.status(500).send('Сталася помилка при підключенні до бази даних');
        return;
      }
  
      // Отримання колекції
      const db = client.db(dbName);
      const collection = db.collection(collectionName);
  
      // Збереження даних у колекції
      collection.insertOne({ name, phone, email, message }, (err, result) => {
        if (err) {
          console.error('Помилка збереження даних:', err);
          res.status(500).send('Сталася помилка при збереженні даних');
        } else {
          console.log('Дані успішно збережені:', result);
          res.status(200).send('Дякуємо за зворотній зв\'язок!');
        }
  
        // Закриття підключення до бази даних
        client.close();
      });
    });
  });