# NOTE

- Use Data from Day 1 lab

- Before starting. Save every query you type in a file, to be able to review your solution.

- Mainly use aggregation pipeline to solve this lab

# Tasks

1. Find all people who are 40 years old or work at "Aivee"

2. Get only 5 documents that have age between 25 and 38

3. Get The youngest person whose salary is higher than 20000

4. Find third oldest person who is from Russia

5. Get the count of all different countries existing in people collection.

6. Get the sum of salaries of all documents.

7. Get sum of salaries for the highest 3 paid.

8. Get avg salary for each company and sort them from highest to lowest (descending).

9. Get the full name for everyone living in germany, full name -> first_name + last_name.

10. Group people by their age and count how many documents in each group.

11. Show only email address of people who are younger than 30 years old.

12. Create a new collection (name it as you wish) similar to the current people collection but only output 4 fields: fullname, age, country and salary multiplied by 3.

13. Get all indexes on person collection

14. Use a find query searching by email, and analyze the query using explain.

15. Create a single field index that will cover the previous query and run the query again. You may use unique constraint.

16. Create a compound index including email and age

17. List indexes and hide any unnecessary indexes.

18. Delete all indexes on the collection.

# Bonus

1. Get the number of cities for every country.
