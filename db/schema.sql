CREATE TABLE users(
id varchar(55) not null primary key,
username varchar(60),
profile_img varchar(255)
);

CREATE TABLE articles(
  id serial,
  user_id varchar(55),
  url varchar(255),
  img_url varchar(255),
  rating int,
  date_added date,
  date_published date,
  bookmarked boolean,
  title varchar(255)
)

insert into articles (user_id, url, img_url,  rating, date_published, date_added, bookmarked, title) 
VALUES ('HDA0TOHPtKImTpMNh59V9DQ62HVZMo8m', 'www.blah.org', 'fdsa', 3, '1987-01-06 11:22:06', '1987-01-06 03:19:06', true, 'My Fav Article!');
insert into articles (user_id, url, img_url,  rating, date_published, date_added, bookmarked, title) 
VALUES ('HDA0TOHPtKImTpMNh59V9DQ62HVZMo8m', 'www.blah.org', 'fdsa', 3, '1996-10-06 07:57:06', '1987-01-06 012:17:06', true, 'My second fav lol');
insert into articles (user_id, url, img_url,  rating, date_published, date_added, bookmarked, title) 
VALUES ('HDA0TOHPtKImTpMNh59V9DQ62HVZMo8m', 'www.asdf.org', 'fdsa', 3, '1976-07-26 03:19:06', '1987-07-06 05:22:06', true, 'new account who dis');
insert into articles (user_id, url, img_url,  rating, date_published, date_added, bookmarked, title) 
VALUES ('HDA0TOHPtKImTpMNh59V9DQ62HVZMo8m', 'www.blah.org', 'fdsa', 3, '1987-01-06 11:22:06', '1987-11-06 06:39:06', true, 'Trump Does Another Stupid');
insert into articles (user_id, url, img_url,  rating, date_published, date_added, bookmarked, title) 
VALUES ('HDA0TOHPtKImTpMNh59V9DQ62HVZMo8m', 'www.blah.org', 'fdsa', 3, '1994-12-06 07:57:06', '1980-03-06 08:42:06', true, 'fdfdfer2234234');
insert into articles (user_id, url, img_url,  rating, date_published, date_added, bookmarked, title) 
VALUES ('HDA0TOHPtKImTpMNh59V9DQ62HVZMo8m', 'www.asdf.org', 'fdsa', 3, '1976-04-26 07:19:06', '1989-03-12 04:01:06', true, 'not a typo');







