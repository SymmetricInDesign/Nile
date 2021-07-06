# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

product1 = Product.find_or_create_by(category_id: 1, name: "chair", details: "four legs", price: 36.52)
product2 = Product.find_or_create_by(category_id: 2, name: "tv", details: "4k tv", price: 36.52)
product3 = Product.find_or_create_by(category_id: 2, name: "computer monitor", details: "1080p", price: 36.52)
product4 = Product.find_or_create_by(category_id: 2, name: "computer", details: "full computer", price: 36.52)
product5 = Product.find_or_create_by(category_id: 1, name: "table", details: "also four legs", price: 36.52)
product6 = Product.find_or_create_by(category_id: 1, name: "couch", details: "two cushions and four legs", price: 36.52)

puts("DB SEEDED SUCCESSFULLY")