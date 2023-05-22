// import { MongoClient, MongoClientOptions } from 'mongodb';

// const uri: string = 'mongodb+srv://kovaloff10:tE9kHSl7KKusPjUq@smpa.kj56ax6.mongodb.net/?retryWrites=true&w=majority';
// /*const options: MongoClientOptions = {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// };*/
// const client = new MongoClient(uri);

// async function insertFeedback(name: string, phone: string, email: string, message: string) {
//   try {
//     await client.connect();
//     console.log('Підключення до бази даних успішне!');
//     const database = client.db('kovaloff10');
//     const collection = database.collection('smpa-message');
//     const doc = { name, phone, email, message };
//     const result = await collection.insertOne(doc);
//     console.log(`документ успішно доданий до колекції.`);
//   } catch (err) {
//     console.log(err.stack);
//   } finally {
//     await client.close();
//   }
// }

// const feedbackForm = document.getElementById('feedback-form');

// if (feedbackForm) {
//   feedbackForm.addEventListener('submit', (event) => {
//     event.preventDefault();
//     const nameInput = document.getElementById('name') as HTMLInputElement;
//     const phoneInput = document.getElementById('phone') as HTMLInputElement;
//     const emailInput = document.getElementById('email') as HTMLInputElement;
//     const messageInput = document.getElementById('message') as HTMLInputElement;
//     const name = nameInput.value;
//     const phone = phoneInput.value;
//     const email = emailInput.value;
//     const message = messageInput.value;
//     insertFeedback(name, phone, email, message).then((result) => {
//       alert('Дякуємо за зворотній зв\'язок!');
//       console.log(`документ успішно доданий до колекції.`);
//     }).catch((err) => {
//       alert('Сталася помилка при відправці форми!');
//       console.log(err);
//     });
//   });
// }


const mongoose = require('mongoose');

const db = 'mongodb+srv://Swayze:123@cluster0.jf29r1v.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(db).then((res)=>console.log('COnnected Mongo')).catch((error)=>console.log(error));