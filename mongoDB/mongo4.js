

db.createCollection("info1", {autoIndexId:true, capped:true, size:500, max:5 })
db.createCollection("info2", {autoIndexId:true, capped:true, size:50, max:5 })


db.articles.insert({"title":"data"})
show collections
db.articles.drop()

db.info1.insert({ "subject":"python", "level":3 })
db.info1.insert({ "subject":"web", "level":1 })
db.info1.insert({ "subject":"sql", "level":2 })

db.info1.insert( [
{ "subject":"python", "level":3 },
{ "subject":"web", "level":1 },
{ "subject":"sql", "level":2 },
{ "subject":"python", "level":3 },
{ "subject":"web", "level":1 },
{ "subject":"sql", "level":2 }, 
])

db.info2.insert( [
{ "subject":"python", "level":3 },
{ "subject":"web", "level":1 },
{ "subject":"sql", "level":2 },
{ "subject":"python", "level":3 },
{ "subject":"web", "level":1 },
])

db.info.insert( [
{ "subject":"python", "level":3 },
{ "subject":"web", "level":1 },
{ "subject":"sql", "level":2 },
{ "subject":"java", "level":3 },
{ "subject":"html", "level":1 },
{ "subject":"css", "level":2 },
])

db.info.remove( {level:2} )

# 비교연산자
# less then equal
db.info.find({"level": {$lte: 2} })

db.info.find( {"subject": {$in: ["java", "python"]}})

# 논리연산자
db.info.find({ $and: [ { "subject":"python" }, { "level": {$gte: 3} } ] })
db.info.find({ $and: [ { "subject":"python" }, { "level": {$lte: 3} } ] })

db.info.find( {$where: "this.level === 1"} )

# projection
db.info.find({},{"_id":false, "level":false})
db.info.find({},{"subject":true, "level":true})
db.info.find({},{"_id":false, "subject":true, "level":true})

# 1 오름차순 -1 내림차순
db.info.find().sort({"level": 1})
db.info.find().sort({"level": -1, "subject": 1})


db.info.find().limit(3)

db.info.find().sort({"level":-1}).skip(1).limit(2)


