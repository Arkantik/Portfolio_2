
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(150) NOT NULL,
  `password` VARCHAR(255) NOT NULL
) ENGINE=INNODB DEFAULT CHARSET=UTF8MB4;

DROP TABLE IF EXISTS `project`;
CREATE TABLE `project` (
  `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `description` VARCHAR(255) NOT NULL,
  `img` VARCHAR(255) NOT NULL,
  `github` VARCHAR(255) DEFAULT NULL,
  `website` VARCHAR(255) DEFAULT NULL,
  `tool` VARCHAR(255) DEFAULT NULL,
) ENGINE=INNODB DEFAULT CHARSET=UTF8MB4;

DROP TABLE IF EXISTS `project_techno`;
CREATE TABLE `project_techno` (
  `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `project_id` INT DEFAULT NULL,
  CONSTRAINT fk_project_techno FOREIGN KEY (`project_id`)
    REFERENCES `project` (`id`)
    ON DELETE SET NULL,
  `techno_id` INT DEFAULT NULL,
  CONSTRAINT fk_techno_project FOREIGN KEY (`techno_id`)
    REFERENCES `techno` (`id`)
    ON DELETE SET NULL,
) ENGINE=INNODB DEFAULT CHARSET=UTF8MB4;


DROP TABLE IF EXISTS `techno`;
CREATE TABLE `project` (
  `id` INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `img` VARCHAR(255) NOT NULL,
) ENGINE=INNODB DEFAULT CHARSET=UTF8MB4;


-- _____________________________________________ POPULATE TABLES _____________________________________________
-- Create user
INSERT INTO `user` (`email`, `password`) 
VALUES
('jeremyd1.pro@gmail.com', '$argon2id$v=19$m=19893.36898592844,t=2,p=1$y/F65lSZ40xAVxes2YWvPw$4GTu0y5B2DnzDWVe93u/ai5vI5+9yU8yoB2tNKQC678'),

-- Create techno
INSERT INTO `game` (`name`, `img`) 
VALUES 
('Html', '../assets/icons/html.svg'),
('Css', '../assets/icons/css.svg'),
('JavaScript', '../assets/icons/js.svg'),
('ReactJS', '../assets/icons/react.svg'),
('Angular', '../assets/icons/angular.svg'),
('Tailwind', '../assets/icons/tailwind.svg'),
('SASS', '../assets/icons/sass.svg'),
('NodeJS', '../assets/icons/nodejs.svg'),
('Express', '../assets/icons/express.svg'),
('MySQL', '../assets/icons/mysql.svg'),
('ViteJS', '../assets/icons/vitejs.svg'),
('NextJS', '../assets/icons/vitejs.svg'),

-- Create project
INSERT INTO `project` (`name`, `description`, `img`, `github`, `website`, `tool`) 
VALUES
('WildBook', 'Responsive and mobile-first single-page site using HTML, CSS, and vanilla JS.This project was made within 2 weeks with only 2 weeks of experience in web dev.', '../assets/img/project/wildbook.png', 'https://github.com/Arkantik/WildBook', 'https://arkantik.github.io/WildBook/', '../assets/icons/tools/figma.svg'),
('Hogwarts Magic Cards', 'Flash-game type website using ReactJS, a CSS framework (Tailwind), and integrating an API. This website is a strategy turn by turn card game set in the world of Harry Potter.', '../assets/img/project/hogwarts.png', 'https://github.com/Arkantik/hogwarts-magic-cards', 'https://arkantik.github.io/hogwarts-magic-cards/', '../assets/icons/tools/figma.svg'),
('HoliFun', 'No idea where to go for your next vacation? HoliFun is made for you! Project developped during a 36h Hackathon, with the objective to build something about vacation and using an API.', '../assets/img/project/holifun.png', 'https://github.com/Arkantik/holifun', 'https://arkantik.github.io/holifun/', ''),
('Emmaüs Connect', 'This intranet application allows Emmaus Connect volunteers to log in with their credentials, register smartphones intended for sale through a form, and access the database. Project developped during a 48h Hackathon', '../assets/img/project/emmaus-connect.png', 'https://github.com/Arkantik/Emmaus-Connect', '', ''),
('Origins E-sport', 'Currently in development', '../assets/img/project/origins.png', '', '', '../assets/icons/tools/figma.svg'),

-- Create project_techno
INSERT INTO `project_techno` (`project_id`, `techno_id`) 
VALUES
(1, 1),
(1, 2),
(1, 3),
(2, 1),
(2, 2),
(2, 4),
(2, 6),
(3, 1),
(3, 2),
(3, 4),
(3, 6),
(4, 2),
(4, 4),
(4, 6),
(4, 8),
(4, 10),
(5, 4),
(5, 6),
(5, 8),
(5, 10),