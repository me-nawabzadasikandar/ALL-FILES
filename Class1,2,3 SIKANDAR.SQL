INSERT INTO table_name (column1, column2, column3, ...)
VALUES (value1, value2, value3, ...);

Example:
INSERT INTO newdata (id,Name,Phoneno,City)
VALUES (01,"CC",0340997987,"Karachi");

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
SET fullname="SIKANDAR"
WHERE id=2;

        Class:2

CREATE DATABASE database_name

DROP DATABASE database_name

CREATE TABLE table_name (
    column1 datatype,
    column2 datatype,
    column3 datatype,
   ....
);

example:
CREATE TABLE store (
    id int(5),
    product_name varchar(30),
    price int(5),
);

DROP TABLE table_name

ALTER TABLE table_name
ADD COLUMN column_name datatype;

example:
ALTER TABLE general_store
ADD COLUMN total_price varchar(55);


ALTER TABLE table_name
DROP COLUMN column_name;
