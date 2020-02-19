USE sql_crm;

--  create table email_type (
--  id int not null AUTO_INCREMENT primary key,
--  e_type varchar(40) UNIQUE
--  );

--  create table countries (
--  id int not null AUTO_INCREMENT primary key,
--  country varchar(40) UNIQUE
--  );

--  create table owners (
--  id int not null AUTO_INCREMENT primary key,
--  o_name varchar(40) UNIQUE
--  );


 create table clients (
 id int not null AUTO_INCREMENT primary key,
 c_name varchar(40),
 sname varchar(40),
 email varchar(40),
 firstContact datetime not null,
 sale_status boolean,
 email_type int,
 owner int,
 country int,
foreign key (email_type) references email_type(id),
 foreign key (owner) references owners(id),
 foreign key (country) references countries(id) 
 );


















