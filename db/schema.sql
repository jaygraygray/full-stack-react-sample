CREATE TABLE users(
id varchar(55) not null primary key,
username varchar(60),
profile_img varchar(255)
);

CREATE TABLE articles(
  user_id varchar(55) not null,
  url varchar(255),
  rating int,
  date_added timestamp,
  bookmarked boolean
);