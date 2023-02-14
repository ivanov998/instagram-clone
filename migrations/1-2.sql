/*** Add user table ***/

CREATE TABLE users
(
   id SERIAL PRIMARY KEY,
   created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
   username VARCHAR(30)  NOT NULL,
   password VARCHAR(255) NOT NULL,
   UNIQUE (username)
)