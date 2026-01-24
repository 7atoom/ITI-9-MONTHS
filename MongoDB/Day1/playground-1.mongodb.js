// // '$gt' => greater than
// // '$gte' => greater than or equal to
// // '$lt' => less than
// // '$lte' => less than or equal to
// // '$eq' => equal to
// // '$ne' => not equal to
// // '$in' => in => array of values
// // '$nin' => not in => array of values
// // '$and' => and
// // '$or' => or
// // '$exists' => exists
// use('test');

// // db.testData.updateOne({ first_name: 'shady' }, {
// //     $set: { last_name: 'radwan' },
// //     $push: { fruits: 'banana' },
// //     // $pull: { tags: 'old' },
// //     $mul: { age: 2 },
// //     // $inc: { price: 1 },
// //     $unset: { job: 1 },
// //     $rename: { tags: 'new_tags' },
// //     // $pop: { fruits: 1 },
// //     // $addToSet: { tags: 'new' },
// // });

// // db.testData.updateMany({ age: { $gt: 50 } }, { $addToSet: { fruits: 'kiwi' } })

// // db.testData.replaceOne({ _id: ObjectId('67d5feeea31ac948dadbf173') }, {
// //     "first_name": "shosh",
// //     "last_name": "radwan",
// //     "email": "shosh@gmail.com",
// //     "age": 20,
// //     "country": "Egypt",
// //     "address": {
// //         "city": "Mansoura",
// //         "street": "10th of Ramadan",
// //         "streetNo": "100"
// //     },
// //     "job": "Software Engineer",
// //     "salary": 10000,
// //     "company": "Google",
// //     "fruits": [
// //         "apple",
// //         "banana",
// //         "cherry"
// //     ]
// // })


// // db.testData.deleteOne({ first_name: 'shady' })

// db.testData.deleteMany({ country: "Indonesia" })
