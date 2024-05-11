INSERT INTO table_name (column1, column2, column3, ...)
VALUES (value1, value2, value3, ...);

Example:
INSERT INTO newdata (id,Name,Phoneno,City)
VALUES (01,"sikandar",038775754,"Karachi");

DELETE FROM table_name WHERE condition

Example:
DELETE FROM newdata WHERE id=2

SELECT *FROM newdata

OR

SELECT *FROM newdata WHERE id=2

UPDATE table_name
SET column1 = value1, column2 = value2, ...
WHERE condition;

Example:
UPDATE newdata
SET fullname="ali"
WHERE id=2;