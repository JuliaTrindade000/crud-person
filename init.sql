CREATE TABLE person (
                        id BIGINT AUTO_INCREMENT PRIMARY KEY,
                        name VARCHAR(255) NOT NULL,
                        email VARCHAR(255) NOT NULL
);

INSERT INTO person (name, email) VALUES ('John Doe', 'john.doe@example.com');
INSERT INTO person (name, email) VALUES ('Jane Doe', 'jane.doe@example.com');