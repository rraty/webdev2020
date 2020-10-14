-- Create database
create database athletelist;
use athletelist;

-- Create tables
CREATE TABLE athletes (
id int(11) NOT NULL AUTO_INCREMENT,
firstNames varchar(150),
nickName varchar(50),
lastName varchar(50),
yearOfBirth YEAR,
weight DECIMAL,
linkToImage longtext,
species json null,
achievements json null,
PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=5 ;

-- Add temp data
INSERT INTO athletes (id, firstNames, nickName, lastName, yearOfBirth, weight, linkToImage,species, achievements) VALUES
(1, 'Aku Risto', 'Aku', 'Ankka', '2008', 60.5, 'https://akuankka.fi/images/aku.png', '["Jalkapallo","Pesäpallo","Jääkiekko"]', '[{ "year": 2015, "name": "Testi", "additionalInformation": "Lorem ipsum"}]'),
(2, 'Hopo Mikko', 'Hopo', 'Hessu', '2018', 20.5, 'https://akuankka.fi/images/hessu.png', '["Sulkapallo","Tennis","Golf"]', '[{ "year": 2020, "name": "MM-Kisat 2020", "additionalInformation": "Lorem ipsum"}]');


select species from athletes
