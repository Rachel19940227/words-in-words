CREATE DATABASE IF NOT EXISTS dictionary;

GRANT ALL PRIVILEGES ON dictionary.* TO 'appuser'@'localhost';
FLUSH PRIVILEGES;

USE dictionary;

CREATE TABLE IF NOT EXISTS dictionary_words (
    wordsID INT AUTO_INCREMENT PRIMARY KEY,
    word VARCHAR(50) NOT NULL,
    pos VARCHAR(50) NOT NULL,
    definition VARCHAR(500) NOT NULL
);


LOAD DATA INFILE 'D:/xampp/htdocs/words-in-words/database/word.csv' 
INTO TABLE dictionary_words
FIELDS TERMINATED BY ',' 
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 LINES; -- Skip the header row if present


LOAD DATA INFILE 'C:/ProgramData/MySQL/MySQL Server 8.0/Uploads' 
INTO TABLE dictionary_words
FIELDS TERMINATED BY ',' 
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 LINES; -- Skip the header row if present