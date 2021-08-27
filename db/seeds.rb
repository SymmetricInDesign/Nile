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
cat5 = Category.find_or_create_by(name: "Clothing and Shoes", details: "Find your next fashion statememt.")

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

product7 = Product.find_or_create_by(
    category_id: cat4.id, 
    name: "Hamilton Beach 49976 FlexBrew Trio 2-Way Single Serve Coffee Maker & Full 12c Pot, Compatible with K-Cup Pods or Grounds, Combo, Black", 
    details: 
            '<ul>
                <li>3-WAYS TO BREW: Brew up to 12 cups with ground coffee on the carafe side or use dual purpose single serving to brew a pod or ground coffee on the other. The included pod holder and single-serve grounds basket easily handle both options</li>
                <li>SINGLE-CUP COFFEE MAKER: Brew a cup with a K-Cup, pod, another pod brand, or ground coffee. The included pod holder and single-serve grounds basket easily handle both options and the cup rest removes so you can brew into a tall travel mug</li>
                <li>BREW A FULL POT OF COFFEE: This programmable coffee maker has Easy-Touch programming for wake-up ready coffee. After brewing, coffee stays warm for 2 hours and the power automatically shuts off. Auto Pause & Pour lets you pour a cup as coffee brews</li>
                <li>CUSTOMIZE YOUR BREW STRENGTH: Control how strong you want your coffee with Select-a-Brew: regular and bold brewing options</li>
                <li>2 SEPARATE EASY-FILL WATER RESERVOIRS: Each brewing side on this Hamilton Beach coffee maker has its own water reservoir that’s easy to fill and features a water window, so you always know exactly how much water to add</li>
            </ul>', 
    price: 99.99
)
if !product7.photos.attached?
    product7.photos.attach(io: URI.open('https://nile-seeds.s3.us-east-2.amazonaws.com/Nile_Images/product_images/07-coffee_1.jpg'), filename: '07-coffee_1.jpg')
end
product8 = Product.find_or_create_by(
    category_id: cat4.id, 
    name: "Toshiba EC042A5C-BS Countertop Microwave Oven with Convection, Smart Sensor, Sound On/Off Function and LCD Display, 1.5 Cu Ft, Black Stainless Steel", 
    details: 
            '<ul>
                <li>Exterior dimensions: 21.73" w x 21.38" d x 12.83" h; Cavity: 15.5" w x 15.35" d x 10.2" h</li>
                <li>Combines microwave and convection cooking in one appliance, with auto bake, defrosting and auto roast menus</li>
                <li>Pre-programmed sensor menu for optimum result of popular foods like frozen pizza, vegetables and more</li>
                <li>Sound on/off option: If you wish to mute the buzzer of the microwave, press and hold the button "8" on the keypad for 3-5 seconds. The buzzer is automatically switched off after a long beep.</li>
                <li>One touch popcorn button and warm-hold function, equipped with power-saving eco mode, and child safety lock.</li>
            </ul>', 
    price: 139.99
)
if !product8.photos.attached?
    product8.photos.attach(io: URI.open('https://nile-seeds.s3.us-east-2.amazonaws.com/Nile_Images/product_images/08-microwave_1.jpg'), filename: '08-microwave_1.jpg')
end

product9 = Product.find_or_create_by(
    category_id: cat4.id, 
    name: "Honeywell Kaz HT-904 Tabletop Air-Circulator Fan White", 
    details: 
            '<ul>
                <li>SMALL FAN FOR TABLE OR FLOOR: The Honeywell Turbo Force Air Circulator Fan has 3 speeds & a 90 degree pivoting head. This quiet fan is compact enough for on a table or wall mount & powerful enough to help provide comfortable cooling in small-medium rooms.</li>
                <li>FEEL THE POWER: Honeywell\'s TurboForce line of fans have an aerodynamic turbo design to maximize air movement, offering the power for intense cooling or energy-saving air circulation. The ease of a small fan with power you can feel from 27 feet away!</li>
                <li>INCREASE YOUR COMFORT: Using fans for air circulation in your home can help increase your comfort, and help reduce energy costs as well. Honeywell carries a range of tower fans, floor fans, and oscillating fans -- find one for every room in the house.</li>
                <li>HONEYWELL FANS: The right fan helps cool you off & improves airflow in your room or home. Give your air conditioner & wallet a break by using fans to help reduce your energy consumption & costs. Honeywell carries a variety of fans to meet your home needs.</li>
                <li>HONEYWELL QUALITY: Help improve air circulation & energy savings in your home, bedroom or office with Honeywell fans. Compare to tower fans, oscillating fans, desk fans & similar fans Dyson, Lasko, Blizzard, Turbo, Holmes, Vornado, and Pelonis.</li>
                <li>Wattage: 110 W</li>
                <li>Wattage: 110</li>
            </ul>', 
    price: 16.99
)
if !product9.photos.attached?
    product9.photos.attach(io: URI.open('https://nile-seeds.s3.us-east-2.amazonaws.com/Nile_Images/product_images/09-fan_1.jpg'), filename: '09-fan_1.jpg')
end

product10 = Product.find_or_create_by(
    category_id: cat4.id, 
    name: "Magic Bullet Blender, Small, Silver, 11 Piece Set", 
    details: 
            '<ul>
                <li>11 piece blender set: Includes blender, additional blender cups, blades, recipe book & more</li>
                <li>The magic bullet chops, mixes, blends, whips, grinds and more. Cups are made out of high-impact plastic</li>
                <li>Effortlessly create your favorite meals and snacks like smoothies, omelets, sauces and dips. 250 watts high-torque power base</li>
                <li>Included recipe book gets you started making quick, easy, and delicious dishes from appetizers to desserts. Add 1/2 cup water for smooth blend for vegetables</li>
            </ul>', 
    price: 35.99
)
if !product10.photos.attached?
    product10.photos.attach(io: URI.open('https://nile-seeds.s3.us-east-2.amazonaws.com/Nile_Images/product_images/10-blender_1.jpg'), filename: '10-blender_1.jpg')
end



product11 = Product.find_or_create_by(
    category_id: cat4.id, 
    name: "Danby Designer 2.6 Cubic Feet Compact Refrigerator (DAR026A1BDD-3), Black", 
    details: 
            '<ul>
                <li>2.6 cu. ft. (73 L) capacity compact all refrigerator</li>
                <li>Energy Star compliant. Environmentally friendly R600a refrigerant. Automatic defrost.</li>
                <li>2 full width and 1 - 1/2 width adjustable wire shelves. Tall bottle storage - great for large soda bottles. CanStor beverage dispensing system.</li>
                <li>Mechanical thermostat. Scratch resistant worktop.</li>
                <li>Integrated door handle. Reversible door hinge.</li>
            </ul>', 
    price: 203.99
)
if !product11.photos.attached?
    product11.photos.attach(io: URI.open('https://nile-seeds.s3.us-east-2.amazonaws.com/Nile_Images/product_images/11-fridge_1.jpg'), filename: '11-fridge_1.jpg')
end

product12 = Product.find_or_create_by(
    category_id: cat3.id, 
    name: "NOCO Boost Plus GB40 1000 Amp 12-Volt UltraSafe Lithium Jump Starter Box, Car Battery Booster Pack", 
    details: 
            '<ul>
                <li>Start Dead Batteries - Safely jump start a dead battery in seconds with this compact, yet powerful, 1000-amp portable lithium car battery jump starter pack - up to 20 jump starts on a single charge - and rated for gasoline engines up to 6 liters and diesel engines up to 3 liters.</li>
                <li>UltraSafe - Safe and easy to use car battery jump starter pack without the worry of incorrect connections or sparks. Safely connect to any 12-volt automotive car battery with our mistake-proof design featuring spark-proof technology and reverse polarity protection.</li>
                <li>Multi-Function - It\'s a car jump starter, portable power bank, and LED flashlight. Recharge smartphones, tablets, and other USB devices. It\'s easily rechargeable from any powered USB port in 3 hours at 2.1-amps. Plus, an integrated 100-lumen LED flashlight with seven light modes, including emergency strobe and SOS.</li>
                <li>Advanced Design - Our most advanced portable car battery jump starter ever. Featuring high-discharge lithium technology for safe operation in any climate. A rugged and water-resistant enclosure rated at IP65. A rubberized over-molded casing to prevent scratching or marring of surfaces. And an ultra-compact and lightweight design weighing just 2.4 pounds.</li>
                <li>In The Box - GB40 UltraSafe Portable Lithium Car Battery Jump Starter Pack, Heavy-Duty Battery Clamps, 12-Volt Car Charger, Micro USB Charging Cable, Microfiber Storage Bag, User Guide, 1-Year Warranty, and Designed in the USA.</li>
            </ul>', 
    price: 82.99
)
if !product12.photos.attached?
    product12.photos.attach(io: URI.open('https://nile-seeds.s3.us-east-2.amazonaws.com/Nile_Images/product_images/12-jumpstarter_1.jpg'), filename: '12-jumpstarter_1.jpg')
end

product13 = Product.find_or_create_by(
    category_id: cat3.id, 
    name: "NEIKO 02236A Slide Hammer | 17 Pc Automotive Bearing Hub Puller Kit | Axle Seal Pulling", 
    details: 
            '<ul>
                <li>[APPLICATION]: Easily remove mechanical, press-fit parts (bearings, bushings, gears, pulleys, etc.) from a shaft; Remove shafts from inside a hole without striking the object itself.</li>
                <li>[QUALITY]: 5-pound steel slide hammer constructed of chrome vanadium steel for smooth operation, improved durability, corrosion resistance.</li>
                <li>[VERSATILE]: Full hammer kit, ideal for use on a wide variety of pulling applications, including pulling dents; Fits many sizes of bearings, gears and shafts.</li>
                <li>[PERFECT FOR MECHANICS]: Includes an external 3-jaw puller, internal 3-jaw puller, external 2-jaw puller, internal 2-jaw puller.</li>
                <li>[INCLUDES]: 5-lb hammer, shank, T-bar assembly, grip wrench adapter, dent puller, pulling (cone) adapter, seal hook in a Hard plastic blow-molded carrying case.</li>
            </ul>', 
    price: 59.99
)
if !product13.photos.attached?
    product13.photos.attach(io: URI.open('https://nile-seeds.s3.us-east-2.amazonaws.com/Nile_Images/product_images/13-slidehammer_1.jpg'), filename: '13-slidehammer_1.jpg')
end

product14 = Product.find_or_create_by(
    category_id: cat3.id, 
    name: "Valleycomfy Steering Wheel Cover with Microfiber Leather for Car Truck SUV 15 inch (Black)", 
    details: 
            '<ul>
                <li>Suitable for middle-size steering wheels with diameter 14 1/2 inch to 15 inch(37cm to 39cm)</li>
                <li>Top Quality: Heavy duty genuine leather steering cover, high quality and soft touch</li>
                <li>Increased Safety: A better grip on the steering wheel gives you more control on the road.</li>
                <li>Upgrade your vehicle instantly with this stunning looking, luxury leather steering wheel wrap with sports detailing and put some style in your ride!</li>
                <li>Inside a 100% odour free and skidproof lining ensures a constant reliable grip.</li>
            </ul>', 
    price: 15.99
)
if !product14.photos.attached?
    product14.photos.attach(io: URI.open('https://nile-seeds.s3.us-east-2.amazonaws.com/Nile_Images/product_images/14-wheelcover_1.jpg'), filename: '14-wheelcover_1.jpg')
end

product15 = Product.find_or_create_by(
    category_id: cat5.id, 
    name: "COOFANDY Men's Casual Dress Shirt Button Down Shirts Long-Sleeve Denim Work Shirt", 
    details: 
            '<ul>
                <li>Button closure</li>
                <li>Hand Wash Only</li>
                <li>HIGH QUALITY -- Cotton Blend, Long sleeve denim shirt for men, perfect for casual, business, make you look great and handsome</li>
                <li>TRENDY DESIGN -- Turn down collar, inner contrast design shirts/ solid color shirts / long sleeve button dress shirt for fashion men</li>
                <li>FASHION DENIM -- Lattice collar and cuffs decoration.3 Types of men\'s button-up shirts for your optional choose.Please carefully choose your size according to our size chart ( Not the Amazon Size Chart )</li>
                <li>COZY FEELING -- Spread Collar Button down shirts made of soft and lightweight cotton fabric, give you good and comfortable wearing experience. ONLY Type 01 with fake chest pocket,the other shirts with real chest pockets</li>
                <li>MANY OCCASIONS -- Fashion style button up shirt, regular fit, comfortable to wear, suitable for all seasons and many occasions, such casual, work, or party. A must-have shirt in men\'s wardrobe.</li>
            </ul>', 
    price: 25.99
)
if !product15.photos.attached?
    product15.photos.attach(io: URI.open('https://nile-seeds.s3.us-east-2.amazonaws.com/Nile_Images/product_images/15-shirt.jpg'), filename: '15-shirt.jpg')
end

product16 = Product.find_or_create_by(
    category_id: cat5.id, 
    name: "YATHON Women's Vintage Floral Flared A-Line Swing Casual Party Dress with Pockets", 
    details: 
            '<ul>
                <li>COMFORTABLE GREAT QUALITY MATERIAL : 65%Cotton, 35%Polyester. Women\'s dresses is made from lightweight and skin-touch,good quality stretchy fabric which skirt don\'t wrinkle with a nice drape to it. </li>
                <li>Zipper closure</li>
                <li>FUNCTIONAL POCKETS AND FASHIONABLE KEYHOLE CUTOUT: This is women\'s vintage swing casual party cocktail dresses. Both sides have nice hidden pockets are great for carry your phone or useful items. Vintage pleated 1950s hepburn style, sexy keyhole cutout add some pizzazz and give the dress personality, also very flattering on the body.</li>
                <li>HUGS YOUR CURVES FITS PERFECTLY : Women\'s keyhole swing a-line party casual dresses very cute well cut and hugs your curves perfectly. Elegant women\'s wear to work dresses skirts flowing very pretty and accentuates your figure.This women\'s fit and flare summer dresses have a elegant feminine look!</li>
                <li>VINTAGE AND CLASSY DRESSES UP : This is vintage a line work party wedding guest dresses. Retro women\'s round neck sexy front v a-line dress cut perfect match with a hats, heels/wedges/flip flops, nice earrings necklace, jewelry, make you more feminine.</li>
                <li>FIT LIKE A GLOVE : The women\'s party cocktail swing business dresses very flattering fit — true to size. Length is knee-length. It is the perfect length to wear out and works well for curvy girls. Good chest coverage and it doesn\'t show too much cleavage. Invisible zipper closure on the back to protect your skin better.</li>
                <li>FOR ANY OCCASIONS : Classy women\'s retro cocktail fit and flare dresses that could be dressed up or down depending on the occasion. Such as wear business office work, casual, partys, church, beach wedding, wedding guest, prom, cocktail, holiday, honeymoon, cruise, birthdays, dinner, summer evenings, homecoming, choir performance, play, daily life, going out, gifts for mom, mother\'s day gift, mother\'s day dress or special occasions.</li>
            </ul>', 
    price: 25.99
)
if !product16.photos.attached?
    product16.photos.attach(io: URI.open('https://nile-seeds.s3.us-east-2.amazonaws.com/Nile_Images/product_images/16-dress.jpg'), filename: '16-dress.jpg')
end



# cart_item1 = CartItem.find_or_create_by(user_id: demo_user.id, product_id: product6.id, quantity: 7)
# cart_item2 = CartItem.find_or_create_by(user_id: demo_user.id, product_id: product5.id, quantity: 5)

puts("DB SEEDED")

