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
  date_added timestamp,
  bookmarked boolean,
  title varchar(255)
)