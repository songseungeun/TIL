use test;

create table user (
 user_id int unsigned not null auto_increment,
 name varchar(30) default null,
 primary key (user_id)
) engine=innodb default charset=utf8;

create table addr (
 addr_id int unsigned not null auto_increment,
 addr varchar(30) default null,
 user_id int default null,
 primary key (addr_id)
) engine=innodb default charset=utf8;

insert into user(name)
values ("jin"),
       ("andy"),
       ("peter");
       
select *
from user;

insert into addr(addr, user_id)
values ("seoul", 1),
("pusan", 2),
("deajeon", 4),
("deagu", 5),
("seoul", 6);

select *
from addr;

# inner join
select user.user_id, user.name, addr.addr
from user
join addr
on user.user_id = addr.user_id;

select user.user_id, user.name, addr.addr
from user, addr
where user.user_id = addr.user_id;

# world 데이터베이스
# 국가코드, 국가이름, 도시이름, 도시인구수, 국가인구수에 대한 도시인구수의 비율 출력 (key=국가코드)

use world;

SELECT city.name AS country_name, country.name AS city_name
FROM city
JOIN country
ON city.CountryCode = country.code;

SELECT city.countrycode, country.name as country_name
       , city.name as city_name
       , city.population as city_population
       , country.population as country_population
       , city.population / country.population as rate
FROM city
JOIN country
ON city.countrycode = country.code
HAVING rate >= 0.5;

# left join
USE test;
SELECT *
FROM addr;

SELECT user.user_id, user.name, addr.addr
FROM user
LEFT JOIN addr
ON user.user_id = addr.user_id;

# right join

SELECT addr.user_id, user.name, addr.addr
FROM user
RIGHT JOIN addr
ON user.user_id = addr.user_id;

# 지역(region)과 대륙(continent)별 사용하는 언어(language) 출력
# country, countrylanguage, distinct
USE world;

SELECT *
FROM country;

SELECT *
FROM countrylanguage;

SELECT distinct country.region, country.continent
       , countrylanguage.language
FROM country
JOIN countrylanguage
ON country.code = countrylanguage.countrycode;

# 테이블 세 개 조인
# 국가이름, 도시이름, 사용언어, 언어 사용율

SELECT country.name as country_name, city.name as city_name
		, countrylanguage.language, countrylanguage.Percentage
FROM country
JOIN city
ON country.code = city.countrycode
JOIN countrylanguage
ON country.code = countrylanguage.countrycode
ORDER BY country_name asc, city_name asc, Percentage desc;

# UNION : SELECT 문의 결과를 하나로 합쳐서 출력

USE test;

SELECT name
FROM user
UNION # 중복제거 UNION ALL은 중복제거 안함
SELECT addr
FROM addr;

SELECT user.user_id, user.name, addr.addr
FROM user
LEFT JOIN addr
ON user.user_id = addr.user_id
UNION
SELECT addr.user_id, user.name, addr.addr
FROM user
LEFT JOIN addr
ON user.user_id = addr.user_id;

# sub-query : select, from, where
use world;

# 전체 나라수, 전체 도시수, 전체 언어수를 출력
select
(select count(name) from country) as total_count,
(select count(name) from city) as city_count,
(select count(distinct(language)) from countrylanguage) as language_count 
from dual;

# 800만 이상이 되는 도시의 국가코드, 국가이름, 도시이름, 도시인구수 출력
SELECT country.code, country.name, city.name, city.population
FROM city
JOIN country
ON city.countrycode = country.code
HAVING city.population >= 8000000;

SELECT country.code, country.name, city.name, city.population
FROM (
	SELECT countrycode, name, population
    FROM city
    where population >= 8000000
) AS city
JOIN country
ON city.countrycode = country.code;

# sub-query : where
# 800만 이상 도시의 국가코드, 국가이름, 대통령이름을 출력
USE world;

SELECT code, name, headofstate
FROM country
WHERE code in (
SELECT countrycode
FROM city
WHERE population >= 8000000
);

SELECT name
FROM city
WHERE population >= 8000000;

# view : 쿼리를 단순하게 만들어 주는 기능을 하는 문법
# 실제로 데이터를 가지고 있지 않고 쿼리를 수행한 데이터의 주소값만 가지고 있습니다.
# 데이터의 수정 및 인덱스 설정등이 불가능

# 국가코드, 국가이름, 도시이름을 출력하는 쿼리 생성
SELECT country.code, country.name, city.name
FROM country
JOIN city
ON country.code = city.countrycode;

CREATE VIEW code_name AS 
SELECT country.code, country.name AS country_name
	, city.name AS city_name
FROM country
JOIN city
ON country.code = city.countrycode;

SELECT *
FROM code_name;

# index
USE employees;

select count(*)
from salaries;

desc salaries;

SELECT *
FROM salaries
WHERE to_date < "1986-01-01";

SHOW INDEX FROM salaries;

CREATE INDEX tdate
ON salaries (to_date);

DROP INDEX tdate
ON salaries;




