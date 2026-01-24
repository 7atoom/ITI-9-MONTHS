# NOTE

Before starting. Save every query you type in a file, to be able to review your solution.

# Tasks

1. Create a new database
2. show all databases
3. Create a new collection (for all to have same name lets name it "people"). Use implicit or explicit command
4. Create a new document into people collection
5. Import data.json file into the people collection
6. Create new 3 documents using 1 query
7. Show all collections in database
8. Get all pepole in the collection
9. Get all people who lives in France, NOTE : countries start with a capital letter
10. Get count of people who lives in France and are older than 40
11. Get people Who doesn't have a salary and give them a value of 2500
12. Increase salary of people who works at "Oodoo" by 1200, hint: use $inc operator
13. Get 3 highest paid people
14. Get the oldest person living in Brazil
15. Sort people by salary from highest to lowest
16. Get Location data of only 30 people, fields: country and address
17. Get Chinese people whose age are between 16 and 35
18. Use a find query with projection that uses both inclusion and exclusion
19. Get people who has fruits of apple and kiwi. Do it twice one with $elemMatch and one with another $all , hint you can use multiple operators if you cannot do the query using just $all or $elemMatch
20. Get people who doesn't have banana or apricot in fruits.
21. Get anyone who is from China, France, Tanzania, Poland without using $or
22. Get anyone who is not from Russia and Indonesia.
23. Get People who are from Russia and 32 years old or from germany and 51 years old
24. Get all cities available, retriving the city field only and sort them in alphabetical order from A to Z.
25. Get all who lives in Auch city, displaying their first and last name and job.
26. Get the highest paid "Graphic Designer".
27. Use findOne to get person with the name Rosalia Frostdicke
28. Get people who have 4 elements in the fruits field array. so size of array is 4. hint: use ($size)
29. Grannie Glader who works at Jayo wanted to update the email to gglader@jayo.edu. Write a query to do so.
30. Update Agnola Janaud fruits array element at index 2 to be apple.
31. People in Vietnam has grown younger, Write query to update documents of people in Vietnam and make them younger by 5 years.
32. Update all documents to have a new embedded documnet (object) which contains your Laptop specification (CPU - RAM - GPU - DISK)
33. People Working in company named Zava in country named Indonesia got laid off. Update their documents to remove their company value ( set it to an empty string or null).
34. Replace the document of user with email sbucke6@mozilla.com, with any object at least containing 2 fields.
35. People working at company Skajo got reduction in salary by 10%, update their salary records. hint: $mul
36. Update the person that lives in Yauca city to Berlin
37. Murray Jannings now likes kiwi beside grape. Add to his fruits array new element which is kiwi.
38. Geraldine Spittal doesn't like papaya anymore, remove it from his fruit array. hint : use $pull
39. Delete people documents who lives in China and are older than 40 and work as Marketing Manager.
40. Get the count of all Chinese who is 40 or younger. hint: use countDocuments or count
41. Get the second highest paid person
42. Get third leaset paid person
43. Create new database and a collection
44. Rename the collection then drop it
45. Drop the newly created database

# Bonus

1. Find people that has a first name starting with Em. hint: use regex.

2. Find people who has less than 3 fruits in fruits field.

3. Insert insde of array at a specific position.

4. Write a steps of how you would do the pagination using mongodb queries. write an example query or you just give a brief general idea.

5. Increment salary of all french people by 100, except the person with email esetchfield2n@ox.ac.uk

6. Delete the youngest person from Sweden, hint: you can pass a sort to findOneAndDelete function.
