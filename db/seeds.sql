

DROP DATABASE IF EXISTS employee_tracker_db;
CREATE DATABASE employee_tracker_db;
USE employee_tracker_db;


CREATE TABLE games(
    id INTEGER PRIMARY KEY AUTO_INCREMENT NOT NULL,
    game_name VARCHAR(256) NOT NULL,
    downloads INTEGER NOT NULL
);

INSERT INTO games (game_name, downloads)
VALUES
    ('roblox', 455),
    ('battlerite', 63),
    ('minecraft', 674678);


CREATE TABLE users (
    id INTEGER PRIMARY KEY AUTO_INCREMENT NOT NULL,
    name VARCHAR(256) NOT NULL,
    pass VARCHAR(256) NOT NULL,
    favorite_game_id INTEGER NOT NULL,
    CONSTRAINT favorite_game_id FOREIGN KEY (id) REFERENCES games(id)
);

INSERT INTO users (name, pass, favorite_game_id)
VALUES
    ('william', '123', 1),
    ('jake', '321', 3),
    ('martin', 'ssd34', 3);


SELECT users.*, games.game_name, games.downloads AS hits 
FROM users
INNER JOIN games ON users.favorite_game_id = games.id;

    




