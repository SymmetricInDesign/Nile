require 'open-uri'
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
if !product1.photos.attached?
    product1.photos.attach(io: URI.open('https://nile-seeds.s3.us-east-2.amazonaws.com/Nile_Images/product_images/01-the_cat_chair_1.jpg'), filename: '01-the_cat_chair_1.jpg')
    product1.photos.attach(io: URI.open('https://nile-seeds.s3.us-east-2.amazonaws.com/Nile_Images/product_images/01-the_cat_chair_2.jpg'), filename: '01-the_cat_chair_2.jpg')
end
product2 = Product.find_or_create_by(category_id: cat2.id, name: "tv", details: "4k tv", price: 155.99)
if !product2.photos.attached?
    product2.photos.attach(io: URI.open('https://nile-seeds.s3.us-east-2.amazonaws.com/Nile_Images/product_images/02-tv_1.webp'), filename: '02-tv_1.webp')
    product2.photos.attach(io: URI.open('https://nile-seeds.s3.us-east-2.amazonaws.com/Nile_Images/product_images/02-tv_2.jpg'), filename: '02-tv_2.jpg')
    product2.photos.attach(io: URI.open('https://nile-seeds.s3.us-east-2.amazonaws.com/Nile_Images/product_images/02-tv_3.webp'), filename: '02-tv_3.webp')
end
product3 = Product.find_or_create_by(category_id: cat2.id, name: "computer monitor", details: "1080p", price: 98.99)
if !product3.photos.attached?
    product3.photos.attach(io: URI.open('https://nile-seeds.s3.us-east-2.amazonaws.com/Nile_Images/product_images/03-monitor_1.jpg'), filename: '03-monitor_1.jpg')
    product3.photos.attach(io: URI.open('https://nile-seeds.s3.us-east-2.amazonaws.com/Nile_Images/product_images/03-monitor_2.jpg'), filename: '03-monitor_2.jpg')
end
product4 = Product.find_or_create_by(category_id: cat2.id, name: "computer", details: "full computer", price: 433.31)
if !product4.photos.attached?
    product4.photos.attach(io: URI.open('https://nile-seeds.s3.us-east-2.amazonaws.com/Nile_Images/product_images/04-laptop_1.jpg'), filename: '04-laptop_1.jpg')
end
product5 = Product.find_or_create_by(category_id: cat1.id, name: "table", details: "also four legs", price: 56.45)
if !product5.photos.attached?
    product5.photos.attach(io: URI.open('https://nile-seeds.s3.us-east-2.amazonaws.com/Nile_Images/product_images/05-table_1.jpg'), filename: '05-table_1.jpg')
end
product6 = Product.find_or_create_by(category_id: cat1.id, name: "couch", details: '<ul>
    <li>MICROFIBER SUEDE UPHOLSTERY SOFA: Configurable feature with reversible chaise ottoman setup for stylish living room setting in small or large family living room spaces</li>
    <li>STURDY HARDWOOD FRAME: Upholstered in plush microfiber fabrics. 100% Polyester Microfiber Fabric comes with detachable cushions for easy washing & cleaning</li>
    <li>MODERN BUTTON TUFTED DESIGN: detailed accents on both cushions and ottoman/coffee table</li>
    <li>HARDWARE & MANUAL INCLUDED: easily packed together (concealed underneath sofa dust cover when shipped)</li>
    <li>ASSEMBLY REQUIRED: Comes in complete package to put together Comes in a few boxes</li>
</ul>', price: 181.99)
if !product6.photos.attached?
    product6.photos.attach(io: URI.open('https://nile-seeds.s3.us-east-2.amazonaws.com/Nile_Images/product_images/06-couch_1.jpg'), filename: '06-couch_1.jpg')
end

puts("DB SEEDED")
