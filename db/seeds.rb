require 'open-uri'
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Product.destroy_all
# Category.destroy_all
# CartItem.destroy_all

demo_user = User.find_by_credentials('DemoMan', 'demopassword')

if !demo_user
    demo_user = User.new(username: 'DemoMan', email: 'demo@nile.com', password: 'demopassword')
    demo_user.save
end

cat1 = Category.find_or_create_by(name: "Furniture", details: "For all your household furnishing needs.")
cat2 = Category.find_or_create_by(name: "Electronics", details: "Stay Connected. Make your life easier.")
cat3 = Category.find_or_create_by(name: "Automotive Parts & Accessories", details: "Maintain the thing that gets you from point A to point B.")
cat4 = Category.find_or_create_by(name: "Appliances", details: "Your friendly everyday machines.")
cat5 = Category.find_or_create_by(name: "Tools", details: "Tools and home improvement supplies.")
cat6 = Category.find_or_create_by(name: "Clothing and Shoes", details: "Find your next fashion statememt.")

product1 = Product.find_or_create_by(
    category_id: cat1.id, 
    name: "Modern Mid-Century Side Chair with Natural Wood Legs for Kitchen, Living Dining Room, White", 
    details: "<ul>
                <li>Design: Ergonomic design of perfect height & curved seat supports user’s back well in sitting and leads to an easy conversations</li>
                <li>STURDY CONSTRUCTION: Well-made and built to last. Black supports ensure stability. Makes a beautiful and elegant addition to any room.</li>
                <li>Modern Style: Modern design, simple but stylish. Perfect for any situation, ex. living room, dining room, office room, waiting room and party.</li>
                <li>Ideal for home and office use - living rooms, dining rooms, bedrooms, lobby, reception, waiting rooms and banquets.</li>
              </ul>", 
    price: 36.52
)

if !product1.photos.attached?
    product1.photos.attach(io: URI.open('https://nile-seeds.s3.us-east-2.amazonaws.com/Nile_Images/product_images/01-the_cat_chair_1.jpg'), filename: '01-the_cat_chair_1.jpg')
    product1.photos.attach(io: URI.open('https://nile-seeds.s3.us-east-2.amazonaws.com/Nile_Images/product_images/01-the_cat_chair_2.jpg'), filename: '01-the_cat_chair_2.jpg')
end

product2 = Product.find_or_create_by(
    category_id: cat2.id, 
    name:    "40-inch 1080p Smart LED Roku TV", 
    details: "<ul>
                <li>Easy Voice Control: Works with Amazon Alexa or Google Assistant to help you find movie titles, launch or change channels, even switch inputs, using just your voice. Also available through the Roku mobile app</li>
                <li>Smart Functionality offers access to over 5,000 streaming channels featuring more than 500,000 movies and TV episodes via Roku TV</li>
                <li>1080p Full HD Resolution excellent detail, color, and contrast</li>
                <li>Direct lit LED produces great picture quality with 60Hz refresh Rate for fast moving action scenes with virtually no Motion blur</li>
                <li>Inputs: 3 HDMI, 1 USB, RF, Composite, Headphone Jack, optical audio out</li>
              </ul>", 
    price: 155.99
)

if !product2.photos.attached?
    product2.photos.attach(io: URI.open('https://nile-seeds.s3.us-east-2.amazonaws.com/Nile_Images/product_images/02-tv_1.webp'), filename: '02-tv_1.webp')
    product2.photos.attach(io: URI.open('https://nile-seeds.s3.us-east-2.amazonaws.com/Nile_Images/product_images/02-tv_2.jpg'), filename: '02-tv_2.jpg')
    product2.photos.attach(io: URI.open('https://nile-seeds.s3.us-east-2.amazonaws.com/Nile_Images/product_images/02-tv_3.webp'), filename: '02-tv_3.webp')
end

product3 = Product.find_or_create_by(
    category_id: cat2.id, 
    name: "27\" FHD Flat Monitor with Super-Slim Design", 
    details: "<ul>
                   <li>OUTSTANDING VISUALS – This FHD display with IPS technology gives you brilliant visuals and unforgettable quality; with a maximum resolution of 1920 x 1080 at 75 Hz, you’ll experience the image accuracy and wide-viewing spectrums of premium tablets and mobile devices</li>
                   <li>MORE SCREEN, LESS SPACE – Enjoy more desk space than you thought possible with an attractive and ultra-slim design</li>
                   <li>PANORAMIC VIEWING – Vibrant detail from practically any position with consistent color and image clarity maintained across an ultra-wide 178° horizontal and vertical viewing angles</li>
                   <li>MICRO-EDGE DISPLAY – With virtually no bezel encircling the display on three sides, an ultra-wide viewing experience provides for seamless multi-monitor setups</li>
                   <li>EASY CONNECTIVITY – Get the picture quality you’ve been looking for without the additional dongles; easily connect to your PC, gaming console, and peripherals for big-screen entertainment with a broad range of ports, including HDMI, DisplayPort, and VGA ports</li>
                   <li>BUILT-IN SPEAKERS – Experience incredible sound and more immersive entertainment with two built-in 2W speakers</li>
                   <li>LOW BLUE LIGHT – Put less strain on your eyes as a Low Blue Light mode shifts colors to a warmer spectrum and makes whites more natural</li>
                   <li>HEIGHT ADJUSTMENT – Easily adjust your display to the most comfortable position with 100mm range of travel</li>
                   <li>TILTABLE SCREEN – Adjust the screen to your personal preference with a 5° forward or 23° backward tilt</li>
                   <li>WARRANTY AND SUSTAINABILITY – Rest easy and work confidently with an environmentally conscious and energy-efficient monitor, backed by HP standard 1-year limited warranty</li>
              </ul>", 
    price: 98.99
)

if !product3.photos.attached?
    product3.photos.attach(io: URI.open('https://nile-seeds.s3.us-east-2.amazonaws.com/Nile_Images/product_images/03-monitor_1.jpg'), filename: '03-monitor_1.jpg')
    product3.photos.attach(io: URI.open('https://nile-seeds.s3.us-east-2.amazonaws.com/Nile_Images/product_images/03-monitor_2.jpg'), filename: '03-monitor_2.jpg')
end

product4 = Product.find_or_create_by(
    category_id: cat2.id, 
    name: "Laptop PC 11.6\" Intel N4000 Quad Core 4GB DDR4 SDRAM 32GB eMMC", 
    details: "<ul>
                  <li>4GB DDR4 SDRAM 32GB eMMC</li>
                  <li>SLIM, EXPRESSIVE DESIGN: With its smooth diamond white, with dove silver finish, vertical brushed pattern, and pop of color, the HP Stream perfectly fits your personality.</li>
                  <li>LIBERATING BATTERY: go at least 13 hours without worrying about recharging.</li>
                  <li>SLIM & PORTABLE: Ultralight at 2.37lbs so you can take it anywhere.</li>
                  <li>MORE FEATURES, MORE VALUE: With an Intel Celeron processor, work all day or binge-watch your favorite shows - all while staying under budget.</li>
              </ul>", 
    price: 433.31
)
if !product4.photos.attached?
    product4.photos.attach(io: URI.open('https://nile-seeds.s3.us-east-2.amazonaws.com/Nile_Images/product_images/04-laptop_1.jpg'), filename: '04-laptop_1.jpg')
end
product5 = Product.find_or_create_by(
    category_id: cat1.id, 
    name: "Folding Desk No Assembly Required, 40\" Writing Computer Desk", 
    details: "<ul>
                 <li>SIMPLEST INSTALLATION - 8 seconds to complete !</li>
                 <li>FOLDING AND PORTABLE :When not in use can be folded in the corner, save space; Also convenient to carry when going out for a picnic.</li>
                 <li>APPLICABLE ROOM AND FUNCTION :Suitable for study, bedroom, living room, kitchen, children's room, office.Can be a computer desk, learning tables, game tables, picnic tables,secretarial desk.</li>
                 <li>MATERIAL:MDF -Waterproof and No deformation, durable and solid, brown texture Desktop design is simple yet stylish.</li>
                 <li>SIZE:100*50*72CM (L*W*H : 39.4 * 19.7 * 28.3 Inches)</li>
             </ul>", 
  price: 56.45
)

if !product5.photos.attached?
    product5.photos.attach(io: URI.open('https://nile-seeds.s3.us-east-2.amazonaws.com/Nile_Images/product_images/05-table_1.jpg'), filename: '05-table_1.jpg')
end

product6 = Product.find_or_create_by(
    category_id: cat1.id, 
    name: "Convertible Sectional Sofa for Small Space L-Shaped Couch with Modern Linen Fabric", 
    details: 
            '<ul>
                <li>MICROFIBER SUEDE UPHOLSTERY SOFA: Configurable feature with reversible chaise ottoman setup for stylish living room setting in small or large family living room spaces</li>
                <li>STURDY HARDWOOD FRAME: Upholstered in plush microfiber fabrics. 100% Polyester Microfiber Fabric comes with detachable cushions for easy washing & cleaning</li>
                <li>MODERN BUTTON TUFTED DESIGN: detailed accents on both cushions and ottoman/coffee table</li>
                <li>HARDWARE & MANUAL INCLUDED: easily packed together (concealed underneath sofa dust cover when shipped)</li>
                <li>ASSEMBLY REQUIRED: Comes in complete package to put together Comes in a few boxes</li>
            </ul>', 
    price: 181.99
)

if !product6.photos.attached?
    product6.photos.attach(io: URI.open('https://nile-seeds.s3.us-east-2.amazonaws.com/Nile_Images/product_images/06-couch_1.jpg'), filename: '06-couch_1.jpg')
end

cart_item1 = CartItem.find_or_create_by(user_id: demo_user.id, product_id: product6.id, quantity: 7)
cart_item2 = CartItem.find_or_create_by(user_id: demo_user.id, product_id: product5.id, quantity: 5)

puts("DB SEEDED")
