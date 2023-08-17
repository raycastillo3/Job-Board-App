CREATE DATABASE jobBoardTrackerDB;

CREATE TABLE jobs(
    j_id SERIAL PRIMARY KEY,
    c_name VARCHAR(35) ,
    j_title VARCHAR(35),
    j_link VARCHAR(40),
    j_source VARCHAR(35)
);

-- set extension for uuid_generate_v4()
CREATE TABLE users (
    user_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_name VARCHAR(225) NOT NULL,
    user_email VARCHAR(225) NOT NULL,
    user_password VARCHAR(225) NOT NULL
);

--adding some dummy data
INSERT INTO users (user_name, user_email, user_password) VALUES ('joe Biden', 'jbidenPresident@gmail.com', 'kthl18822');
