var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/';

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("library-db");

  var bookObj = [
    { 
    name: "Midnight in the Garden of Good and Evil",
    author: "JOHN BERENDT",
    description: "Shots rang out in Savannah's grandest mansion in the misty,early morning hours of May 2, 1981.  Was it murder or self-defense?  For nearly a decade, the shooting and its aftermath reverberated throughout this hauntingly beautiful city of moss-hung oaks and shaded squares.  John Berendt's sharply observed, suspenseful, and witty narrative reads like a thoroughly engrossing novel, and yet it is a work of nonfiction.  Berendt skillfully interweaves a hugely entertaining first-person account of life in this isolated remnant of the Old South with the unpredictable twists and turns of a landmark murder case.",
    price: "4.99$",
    count:"34",
    url:"http://covers.openlibrary.org/w/id/8231883-M.jpg"
    },
    { 
    name: "Patriot Games",
    author: "TOM CLANCY",
    description: "While vacationing in London, CIA analyst Jack Ryan saves the Prince and Princess of Wales from a terrorist attack and gains the gratitude of a nation and the enmity of its most dangerous men",
    price: "9.99$",
    count:"45",
    url:"http://covers.openlibrary.org/w/id/6998728-M.jpg"
    },
    { 
    name: "A Christmas Carol",
    author: "charles Dickens",
    description: "An allegorical novella descibing the rehabilitation of bitter, miserly businessman Ebenezer Scrooge. The reader is witness to his transformation as Scrooge is shown the error of his ways by the ghost of former partner Jacob Marley and the spirits of Christmas past, present and future. The first of the Christmas books (Dickens released one a year from 1843–1847) it became an instant hit.",
    price: "5.99$",
    count:"38",
    url:"//covers.openlibrary.org/w/id/8054255-M.jpg"
    },
    { 
      name: "Frankenstein",
      author: "Mary Shelley",
      description: "Mary Shelley's timeless gothic novel presents the epic battle between man and monster at its greatest literary pitch.",
      price: "5.99$",
      count:"9",
      url:"http://covers.openlibrary.org/w/id/4636490-M.jpg"
      },
      { 
        name: "Nineteen Eighty-Four",
        author: "George Orwell",
        description: "Which One Will YOU Be IN the Year 1984? world many of us may live to see!",
        price: "4.99$",
        count:"38",
        url:"http://covers.openlibrary.org/w/id/8579152-M.jpg",
        }
  ];

  dbo.collection("books").insertMany(bookObj, function(err, res) {
    if (err) throw err;
    console.log("Number of documents inserted: " + res.insertedCount);
    db.close();
  });
});