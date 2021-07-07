# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Product.destroy_all
Category.destroy_all

cat1 = Category.find_or_create_by(name: "Furniture", details: "For all your household furnishing needs.")
cat2 = Category.find_or_create_by(name: "Electronics", details: "Stay Connected. Make your life easier.")
cat3 = Category.find_or_create_by(name: "Automotive Parts & Accessories", details: "Maintain the thing that gets you from point A to point B.")
cat4 = Category.find_or_create_by(name: "Appliances", details: "Your friendly everyday machines.")
cat5 = Category.find_or_create_by(name: "Tools", details: "Tools and home improvement supplies.")
cat6 = Category.find_or_create_by(name: "Clothing and Shoes", details: "Find your next fashion statememt.")

product1 = Product.find_or_create_by(category_id: cat1.id, name: "chair", details: "four legs", price: 36.52)
product2 = Product.find_or_create_by(category_id: cat2.id, name: "tv", details: "4k tv", price: 36.52)
product3 = Product.find_or_create_by(category_id: cat2.id, name: "computer monitor", details: "1080p", price: 36.52)
product4 = Product.find_or_create_by(category_id: cat2.id, name: "computer", details: "full computer", price: 36.52)
product5 = Product.find_or_create_by(category_id: cat1.id, name: "table", details: "also four legs", price: 36.52)
product6 = Product.find_or_create_by(category_id: cat1.id, name: "couch", details: "two cushions and four legs", price: 36.52)

puts("DB SEEDED")