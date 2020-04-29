# 1. country 테이블에서 중복을 제거한 Continent를 조회하세요.
USE world;

SELECT DISTINCT Continent
FROM country;

# 2. Sakila 데이터 베이스에서 국가가 인도, 고객의 수를 출력하세요.
USE sakila;

SELECT country
FROM country
WHERE country = "India";

SELECT *
FROM customer;

SELECT *
FROM address;

SELECT *
FROM city;

SELECT *
FROM country;

# customer_id, address_id, city_id
SELECT country.country, COUNT(DISTINCT(customer.customer_id)) AS count
FROM customer
JOIN address
ON customer.address_id = address.address_id
JOIN city
ON address.city_id = city.city_id
JOIN country
ON city.country_id = country.country_id
WHERE country = "India";

# 3. 한국 도시중에 인구가 100만이 넘는 도시를 조회하여 인구순으로 내림차순하세요.
USE world;

SELECT name, Population
FROM city
WHERE CountryCode = "KOR" AND Population >= 1000000
ORDER BY Population DESC;

# 4. city 테이블에서 population이 800만 ~ 1000만 사이인 도시 데이터를 인구수순으로 내림차순하세요.

SELECT Name, CountryCode, Population
FROM city
WHERE Population BETWEEN 8000000 AND 10000000
ORDER BY Population DESC;

# 5. country 테이블에서 1940 ~ 1950년도 사이에 
# 독립한 국가들을 조회하고 독립한 년도 순으로 오름차순하세요.

SELECT Code, Name, IndepYear, Continent, Population
FROM country
WHERE IndepYear BETWEEN 1940 AND 1950
ORDER BY IndepYear ASC;

# 6. contrylanguage 테이블에서 스페인어, 한국어, 영어를 95% 이상 사용하는 국가 코드를
# Percentage로 내림차순하여 아래와 같이 조회하세요.




