/*** Adds email column to the users table and inserts an admin account ***/

ALTER TABLE users
ADD email varchar(125) NOT NULL UNIQUE;

INSERT INTO users (username, password, email) VALUES ('admin','admin','admin@test.com')