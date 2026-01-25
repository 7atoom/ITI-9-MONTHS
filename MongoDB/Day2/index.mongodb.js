use('test')


db.students.insertMany([
    { _id: 1, first_name: "John", last_name: "Doe", age: 20, department: "Computer Science", gpa: 3.2, tuition: 15000, courses: [101, 102, 103] },
    { _id: 2, first_name: "Alice", last_name: "Smith", age: 22, department: "Engineering", gpa: 3.8, tuition: 18000, courses: [104, 105] },
    { _id: 3, first_name: "Michael", last_name: "Brown", age: 19, department: "Mathematics", gpa: 2.9, tuition: 14000, courses: [106, 107, 108] },
    { _id: 4, first_name: "Emma", last_name: "Johnson", age: 24, department: "Engineering", gpa: 3.6, tuition: 17000, courses: [104, 109] },
    { _id: 5, first_name: "David", last_name: "Wilson", age: 21, department: "Computer Science", gpa: 2.5, tuition: 16000, courses: [101, 103] }
])


db.courses.insertMany([
    { _id: 101, name: "Data Structures", credits: 3 },
    { _id: 102, name: "Algorithms", credits: 4 },
    { _id: 103, name: "Database Systems", credits: 3 },
    { _id: 104, name: "Physics", credits: 3 },
    { _id: 105, name: "Electronics", credits: 3 },
    { _id: 106, name: "Calculus", credits: 4 },
    { _id: 107, name: "Linear Algebra", credits: 3 },
    { _id: 108, name: "Probability", credits: 3 },
    { _id: 109, name: "Thermodynamics", credits: 3 }
])



db.students.aggregate([
    { $match: { age: { $gte: 20 } } },
    {
        $project: {
            age: 1, department: 1,
            full_name: { $concat: ["$first_name", " ", "$last_name"] }
        }
    },

])

db.students.distinct("department")


db.students.aggregate([
    { $group: { _id: "$department", count: { $sum: 1 }, avg_gpa: { $avg: "$gpa" }, avf_age: { $avg: "$age" }, minGpa: { $min: "$gpa" }, maxGpa: { $max: "$gpa" } } },
])


db.students.aggregate([
    {
        $project: {
            age: 1, department: 1,
            full_name: { $concat: ["$first_name", " ", "$last_name"] }
        }
    },
    {
        $out: "processed_students"
    }
])



// $arrayElemAt , $concatArray , $reverseArray


db.students.aggregate([

    {
        $project: {
            courses: 1,
            secondCourse: { $arrayElemAt: ["$courses", 1] },
            reversedCourses: { $reverseArray: "$courses" },
            allCourses: { $concatArrays: ["$courses", ["110", "111"], ["112", "113"]] }
        }
    }


])


//$unwind

db.students.aggregate([

    { $unwind: "$courses" },

])



db.students.aggregate([
    {
        $lookup: {
            from: "courses",
            localField: "courses",
            foreignField: "_id",
            as: "course_details"
        }
    }
])