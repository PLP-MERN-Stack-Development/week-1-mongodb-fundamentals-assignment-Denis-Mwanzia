// TASK 2: Basic CRUD Operations
// READ Operation
// Find in specific genre
db.books.find({ genre: 'Fantasy' }); // Books in Fantasy genre

// Books published after a year
db.books.find({ published_year: { $gt: 1920 } }); // Books published after 1920

// Books by specific author
db.books.find({ author: 'Herman Melville' }); // Books authored by Herman Melville

// UPDATE operation
// Update price of a specific book
db.books.updateOne({ title: 'Animal Farm' }, { $set: { price: 10 } }); // Update price of book by title 'Animal Farm'

// DELETE OPeration
// delete book by title
db.books.deleteOne({ title: 'The Lord of the Rings' }); // Delete book by title 'The Lord of the Rings'

// TASK 3: Advanced Queries
// 1.  Books that are both in stock and published after 2010
db.books.find({ in_stock: true, published_year: { $gt: 2010 } });

// 2. Projection (title, author, price only)
db.books.find({}, { _id: 0, title: 1, author: true, price: 1 });

// 3. Sorting  books by price (both ascending and descending)
// Ascending Order
db.books.find({}, { _id: 0, title: 1, price: 1 }).sort({ price: 1 });
// Desc Order
db.books.find({}, { _id: 0, title: 1, price: 1 }).sort({ price: -1 });

// 4. Pagination (5 books per page)
db.books.find().skip(0).limit(5);

// TASK 4: Aggregation Pipeline
// 1. Average price of books by genre
db.books.aggregate([
  {
    $group: {
      _id: '$genre',
      averagePrice: { $avg: '$price' },
    },
  },
]);

// 2. Author with the most books in the collection
db.books.aggregate([
  { $group: { _id: '$author', count: { $sum: 1 } } },
  { $sort: { count: -1 } },
  { $limit: 1 },
]);

// 3. Group books by publication decade and counts them
db.books.aggregate([
  {
    $group: {
      _id: {
        $concat: [
          {
            $toString: {
              $multiply: [{ $floor: { $divide: ['$published_year', 10] } }, 10],
            },
          },
          's',
        ],
      },
      count: { $sum: 1 },
    },
  },
]);


// TASK 5: Indexing
// 1. Create an index on the title field
db.books.createIndex({ title: 1 });

// 2. Create Compound index on author and published_year
db.books.createIndex({ author: 1, published_year: 1 });

// 3. explain() method to demonstrate query performance
db.books.find({ title: 'The Catcher in the Rye' }).explain('executionStats');