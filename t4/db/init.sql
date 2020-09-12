-- Create database
create database puhelinluettelo;
use puhelinluettelo;

-- Create tables
CREATE TABLE henkilot (
id int(11) NOT NULL AUTO_INCREMENT,
nimi varchar(50),
puhelin varchar(50),
PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=5 ;

-- Add temp data
INSERT INTO henkilot (id, nimi, puhelin) VALUES
(1, 'Ankka Aku', '040-2342342'),
(2, 'Hopo Hessu', '044-2342343'),
(3, 'Naamio Musta', '050-4234343'),
(4, 'Ankka Iines', '044-3434343');

