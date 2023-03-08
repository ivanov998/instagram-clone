-- Adding phone number, bio and avatar columns to the users table

ALTER TABLE users
ADD phone VARCHAR(25),
ADD bio VARCHAR(400),
ADD avatar VARCHAR(200);

-- Creating the posts table

CREATE TABLE posts
(
    id SERIAL PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    url VARCHAR(200) NOT NULL,
    caption VARCHAR(200),
    user_id INTEGER NOT NULL REFERENCES users(id)
);

-- Creating the followers table

CREATE TABLE followers
(
   id SERIAL PRIMARY KEY,
   created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
   leader_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
   follower_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
   UNIQUE (leader_id, follower_id)
);