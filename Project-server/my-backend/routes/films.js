var express = require('express');
var router = express.Router();

//1.Імпортували модуль
const mongoose = require("mongoose");

//2. Встановлюємо з"єднання
mongoose.connect("mongodb://localhost:27017/films-storedb", { useNewUrlParser: true, useUnifiedTopology: true });

//3. Свторюємо схему
const Schema = mongoose.Schema;
// Створення схеми моделі
const filmScheme = new Schema({
  filmId: Number,
  filmName: String,
  yearOfRelease: Number
});

//4. Створення моделі
const Film = mongoose.model("Film", filmScheme);


router.get('/', function (req, res, next) {
  //Вибірка усіх документів з бази
  Film.find({}, function (err, film) {
    // mongoose.disconnect();     
    if (err) return res.status(500).json({ success: false, err: { msg: "Fetch faild!" } })

    res.status(200).json({ success: true, data: film })

  });
});


router.post('/add-film', function (req, res) {
  //5. Створення документа
  const film = new Film({
    filmId: req.body.filmId,
    filmName: req.body.filmName,
    yearOfRelease: req.body.yearOfRelease
  });
  //6. Збереження документа
  film.save(function (err, film) {
    // mongoose.disconnect();  // від’єднання від бази даних
    if (err)
      return res.status(500).json({ success: false, err: { msg: "Saving faild!" } })
    else
      res.status(201).json({ success: true, film })

  });
})

module.exports = router;
