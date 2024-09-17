export const twitter = "@casa_realmexicanarestaurant";

export const orderUrl =
  "https://www.foodbooking.com/ordering/restaurant/menu/info?company_uid=569b76f7-a0ca-4cd4-9c64-bef849a55ca5&restaurant_uid=976a64b7-2aca-495d-8a15-c55a29818389";

export const defaultMeta = {
  title: "Casa Grande Mexican Restaurant",
  description:
    "Savor the best Mexican food in Williston, Vermont! From flavorful tacos to fresh guacamole, enjoy an unforgettable culinary experience at our renowned restaurant",
  ogImagePath: "og.webp",
};

export const socialLinks = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/p/Casa-real-Mexican-restaurant-61550264528835/",
  },
  {
    name: "DoorDash",
    href: "https://www.doordash.com/store/casa-real-colchester-27477852/",
  },
];

export const navLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Menu",
    href: "/menu",
  },
];

export const popularDishes = [
  {
    title: "Fajitas",
    href: "/menu#fajitas",
    description:
      "Grilled with bell peppers, onions, and tomatoes. Served with rice, beans, lettuce, sour cream, shredded cheese, pico de gallo, tomato, and three flour or corn tortillas",
    img: {
      src: "/src/assets/popular/fajitas.webp",
      alt: "fajitas on a sizzling plate",
    },
  },
  {
    title: "Desserts",
    href: "/menu#desserts",
    description:
      "A mix of all of our desserts! Can't decide which to order? This ones for you!",
    img: {
      src: "/src/assets/popular/sopapilla.jpeg",
      alt: "sopapilla",
    },
  },
  {
    title: "Enchiladas",
    href: "/menu#enchiladas",
    description:
      "Three chicken enchiladas topped with cheese, your choice of green or red sauce, lettuce, sour cream, tomatoes. Served with a side of Spanish rice",
    img: {
      src: "/src/assets/popular/enchiladas.webp",
      alt: "two enchiladas in a plate",
    },
  },
];

export const menu = [
  {
    label: "Appetizers",
    id: "appetizers",
    items: [
      {
        name: "Guacamole dip",
        imgSrc: "/src/assets/menu/coming_soon.webp",
        price: 575,
      },
      {
        name: "Cheese dip",
        imgSrc: "/src/assets/menu/coming_soon.webp",
        price: 575,
      },
      {
        name: "Bean dip",
        imgSrc: "/src/assets/menu/coming_soon.webp",
        price: 699,
      },
      {
        name: "Queso fundido",
        description: "Melted cheese with chorizo (Mexican sausage)",
        imgSrc: "/src/assets/menu/coming_soon.webp",
        price: 825,
      },
      {
        name: "Fiesta fries",
        description:
          "A bed of french fries with bacon and cheese sauce. Topped with your choice of protein and drizzled with sour cream and our homemade chipotle sauce",
        imgSrc: "/src/assets/menu/coming_soon.webp",
        price: {
          chicken: 1175,
          steak: 1399,
        },
      },
      {
        name: "Quesadilla casa real",
        description:
          "Steak, chicken, chorizo (Mexican sausage), or vegetarian, topped with cheese in a grilled flour tortilla. Served with lettuce, pico de gallo, and sour cream",
        imgSrc: "/src/assets/menu/coming_soon.webp",
        price: {
          chicken: 1275,
          steak: 1425,
          pastor: 1425,
          shrimp: 1525,
        },
      },
      {
        name: "Appetizer casa real",
        description:
          "Samples of taquitos, tostadas, jalapeño poppers, and cheese quesadilla on a bed of lettuce. Served with sour cream and tomatoes",
        imgSrc: "/src/assets/menu/coming_soon.webp",
        price: 1325,
      },
      {
        name: "Jalapeño poppers",
        description:
          "Six jalapeño stuffed with cheddar cheese. Served on a bed of lettuce with sour cream and tomatoes on top",
        imgSrc: "/src/assets/menu/coming_soon.webp",
        price: 875,
      },
      {
        name: "Wings",
        description:
          "Ten wings tossed in your sauce of choice: plain, BBQ, buffalo, or mango habanero. Served with celery, blue cheese or ranch dressing",
        imgSrc: "/src/assets/menu/wings.jpeg",
        price: 1499,
      },
      {
        name: "Street corn",
        description:
          "Grilled sweet corn on the cob. Topped with our homemade chipotle sauce, mayo, parmesan cheese, and tajin",
        imgSrc: "/src/assets/menu/street_corn.jpeg",
        price: 900,
      },
    ],
  },
  {
    label: "Salads",
    id: "salads",
    items: [
      {
        name: "Casa real salad",
        description:
          "Grilled chicken, steak, or shrimp, served on a bed of lettuce with tomatoes, shredded cheese, and slices of avocado",
        imgSrc: "/src/assets/menu/coming_soon.webp",
        price: {
          chicken: 1175,
          steak: 1299,
          shrimp: 1499,
        },
      },
      {
        name: "Casa real bowl",
        description:
          "Burrito bowl loaded with your choice of protein, black beans, rice, lettuce, sour cream, fresh jalapeños, pico de gallo and schredded cheese",
        imgSrc: "/src/assets/menu/coming_soon.webp",
        price: {
          chicken: 1250,
          ground_beef: 1250,
          grilled_chicken: 1450,
          steak: 1600,
          pastor: 1600,
          shrimp: 1725,
        },
      },
      {
        name: "Chipotle bowl",
        description:
          "Burrito bowl loaded with protein of your preference, with black beans, rice, lettuce, pico de gallo, and shredded cheese",
        imgSrc: "/src/assets/menu/coming_soon.webp",
        price: {
          grilled_chicken: 1450,
          steak: 1600,
          pastor: 1600,
          shrimp: 1725,
        },
      },
    ],
  },
  {
    label: "Nachos",
    id: "nachos",
    items: [
      {
        name: "Nachos supremos",
        description:
          "Toasted corn tortilla chips, covered with a delicious blend of melted cheese, beef, chicken, and beans. Covered with lettuce, tomatoes, and sour cream",
        imgSrc: "/src/assets/menu/coming_soon.webp",
        price: 1450,
      },
      {
        name: "Nachos",
        imgSrc: "/src/assets/menu/coming_soon.webp",
        price: {
          cheese: 850,
          beans: 850,
          grilled_chicken: 1275,
          shrimp: 1550,
          chicken: 975,
          ground_beef: 975,
          steak: 1225,
        },
      },
    ],
  },
  {
    label: "House Specialties",
    id: "house-specialties",
    items: [
      {
        name: "Dinner special",
        description:
          "Cannot decide? This dinner has a little of everything. One chalupa with cream salad, one chile relleno, one beef taco, one enchilada, and one ground beef burrito served with rice and beans",
        imgSrc: "/src/assets/menu/coming_soon.webp",
        price: 1925,
      },
      {
        name: "Taquitos mexicanos",
        description:
          "Four fried flautas: two shredded beef and two chicken served with lettuce, sour cream and rice",
        imgSrc: "/src/assets/menu/coming_soon.webp",
        price: 1225,
      },
      {
        name: "Taco salad",
        description:
          "A crispy flour shell tortilla filled with ground beef or chicken, beans, lettuce, tomatoes, cheese, and sour cream",
        imgSrc: "/src/assets/menu/coming_soon.webp",
        price: 1175,
      },
      {
        name: "Taco salad fajita",
        description:
          "A crispy fried flour shell tortilla served with grilled chicken or steak, onions, bell peppers, tomatoes and beans. Topped with lettuce, cheese, sliced tomatoes and sour cream",
        imgSrc: "/src/assets/menu/coming_soon.webp",
        price: {
          chicken: 1275,
          steak: 1350,
          shrimp: 1499,
        },
      },
      {
        name: "Chimichangas",
        description:
          "Two chimichangas: one chicken and one beef tips, topped with cheese sauce and mild red ranchero sauce, Served with lettuce, sour cream, beans and rice",
        imgSrc: "/src/assets/menu/coming_soon.webp",
        price: 1299,
      },
      {
        name: "Carnitas",
        description:
          "Fried pork chunks served with rice, beans, lettuce, sour cream, tomatoes, cheese and three flour tortillas",
        imgSrc: "/src/assets/menu/coming_soon.webp",
        price: 1599,
      },
      {
        name: "Nachos fajitas",
        description:
          "Nacho chips covered in a blend of melted cheese, grilled chicken or steak, bell peppers, onions, and tomatoes. Topped with lettuce, sour cream and pico de gallo",
        imgSrc: "/src/assets/menu/coming_soon.webp",
        price: {
          chicken: 1299,
          steak: 1450,
          shrimp: 1699,
        },
      },
      {
        name: "Molcajete",
        description:
          "Steak, chicken, and shrimp grilled with bell peppers, onions, tomatoes, and pineapple. Topped with Monterrey Jack cheese and special read sauce, on a sizzling hot authentic Mexican molcajete. Served with rice, beans, sour cream, lettuce, pico de gallo, and three corn or flour tortillas",
        imgSrc: "/src/assets/menu/molcajete.jpeg",
        price: 2125,
      },
      {
        name: "Lalo's special",
        description:
          "Grilled chicken breat with grilled onions, pineapple, bacon, and cheese sauce. Served with a side of rice, lettuce, sour cream, shredded cheese, tomato, and three flour tortillas",
        imgSrc: "/src/assets/menu/lalo_special.jpeg",
        price: 1650,
      },
    ],
  },
  {
    label: "Quesadillas",
    id: "quesadillas",
    items: [
      {
        name: "Quesadillas mexicanas",
        description:
          "Two flour tortillas grilled and stuffed cheese, one with shredded beef and beans, and one with chicken and refried beans served with lettuce, cheese, sour cream and tomatoes",
        imgSrc: "/src/assets/menu/coming_soon.webp",
        price: 1250,
      },
      {
        name: "Quesadillas de fajita",
        description:
          "Grilled quesadilla filled with your choice of meat, bell peppers, onions, tomatoes, and cheese, covered with cheese sauce. Served with lettuce, sour cream, tomato, refried beans, and rice",
        imgSrc: "/src/assets/menu/coming_soon.webp",
        price: {
          chicken: 1450,
          steak: 1575,
          pastor: 1575,
          shrimp: 1650,
        },
      },
      {
        name: "La gringa",
        description:
          "Grilled flour tortilla filled with cheese and al pastor meat with a small portion of cilantro, onion, lime, and our homemade spicy sauce. Served with a side of rice and beans",
        imgSrc: "/src/assets/menu/coming_soon.webp",
        price: 1625,
      },
      {
        name: "Quesadilla Popeye's",
        description:
          "Quesadilla filled with cheese, grilled chicken, grilled onions, and spinach, Covered with cheese sauce. Served with rice, beans, and cream salad",
        imgSrc: "/src/assets/menu/coming_soon.webp",
        price: 1575,
      },
      {
        name: "Quesabirrias",
        description:
          "Comprising birria-style cooked beef, folded into a flour tortilla with cheese. Served with a side of broth (consomé) for dipping, cilantro, onions, lime, and our homemade spicy sauce",
        imgSrc: "/src/assets/menu/coming_soon.webp",
        price: 1599,
      },
      {
        name: "Quesadilla la chicken tips",
        description:
          "Flour tortilla filled with cheese and grilled chicken, covered in cheese sauce. Served with a side of rice and cream salad",
        imgSrc: "/src/assets/menu/coming_soon.webp",
        price: 1325,
      },
    ],
  },
  {
    label: "Enchiladas",
    id: "enchiladas",
    items: [
      {
        name: "Enchiladas supremas",
        description:
          "A supreme combination featuring one chicken enchilada, one cheese enchilada, one bean enchilada, and one beef enchilada, Topped with mild red or green sauce, cheese, lettuce, tomato, and sour cream. Served with a side of rice",
        imgSrc: "/src/assets/menu/enchilada_suprema.jpeg",
        price: 1425,
      },
      {
        name: "Enchiladas rancheras",
        description:
          "Three cheese enchiladas topped with grilled pork, tomatoes, onions, and bell peppers. Covered with enchilada sauce. Served with lettuce and sour cream",
        imgSrc: "/src/assets/menu/coming_soon.webp",
        price: 1425,
      },
      {
        name: "Enchiladas popeye's",
        description:
          "Three enchiladas filled with grilled chicken, grilled onions, and spinach. Topped with melted cheese with green or red sauce. Served with a side of rice and creamy salad",
        imgSrc: "/src/assets/menu/coming_soon.webp",
        price: 1425,
      },
      {
        name: "Enchiladas acapulco",
        description:
          "Three shrimp enchiladas topped with mild red or green sauce, along with shredded cheese. Served with lettuce, tomatoes, sour cream, and a side of rice",
        imgSrc: "/src/assets/menu/coming_soon.webp",
        price: 1599,
      },
      {
        name: "Yolanda's",
        description:
          "Three chicken enchiladas topped with cheese, your choice of green or red sauce, lettuce, sour cream, tomatoes. Served with a side of Spanish rice",
        imgSrc: "/src/assets/menu/coming_soon.webp",
        price: 1399,
      },
    ],
  },
  {
    label: "Tacos",
    id: "tacos",
    items: [
      {
        name: "Avocado tacos",
        description:
          "Three flour or corn tortillas loaded with fresh avocado slices, topped with cilantro. Served with a side of rice, pico de gallo, and our homemade spicy sauce",
        imgSrc: "/src/assets/menu/coming_soon.webp",
        price: 1275,
      },
      {
        name: "Carne asada tacos",
        description:
          "Three soft corn tortillas filled with tender steak. Served with a side of pico de gallo and our homemade spicy sauce",
        imgSrc: "/src/assets/menu/coming_soon.webp",
        price: 1425,
      },
      {
        name: "Carnitas tacos",
        description:
          "Three soft corn tortillas filled with tender, slow-cooked shredded pork. Served with pico de gallo and spicy homemade sauce",
        imgSrc: "/src/assets/menu/coming_soon.webp",
        price: 1425,
      },
      {
        name: "Fish tacos",
        description:
          "Three soft flour tortillas filled with lightly seasoned grilled fish and onions. Served with a side of rice, pico de gallo, and a creamy chipotle sauce",
        imgSrc: "/src/assets/menu/coming_soon.webp",
        price: 1575,
      },
      {
        name: "Tacos al pastor",
        description:
          "The original Mexican fusion - guajillo and spices marinated pork, grilled with onions and pineapple. Served with a side of cilantro, onions, limes, and our homemade spicy tomatillo sauce",
        imgSrc: "/src/assets/menu/coming_soon.webp",
        price: 1475,
      },
      {
        name: "Tacos supremos",
        description:
          "Three soft or hard shell tortilla tacos, filled with shredded chicken or ground beef, lettuce, tomato, sour cream, and shredded cheese",
        imgSrc: "/src/assets/menu/coming_soon.webp",
        price: 1225,
      },
      {
        name: "Tacos de birria",
        description:
          "Three soft corn tortillas filled with birria-style cooked beef. Served with a side of broth (consomé) for dipping, cilantro, onions, lime, and homemade spicy sauce on the side",
        imgSrc: "/src/assets/menu/birria_tacos.jpeg",
        price: 1499,
      },
    ],
  },
  {
    label: "Burritos",
    id: "burritos",
    items: [
      {
        name: "Burritos mexicanos",
        description:
          "Two burritos: one chicken and beans and one beef tip and beans. Topped with a mild red sauce, shredded cheese, lettuce, tomato, and sour cream. Served with a side of rice",
        imgSrc: "/src/assets/menu/coming_soon.webp",
        price: 1325,
      },
      {
        name: "Burritos típicos",
        description:
          "Two beef tip burritos topped with our homemade cheese. Served with a side of beans and cream salad",
        imgSrc: "/src/assets/menu/coming_soon.webp",
        price: 1250,
      },
      {
        name: "Burrito chipotle",
        description:
          "Extra large flour tortilla stuffed with your choice of protein, rice, black beans, lettuce, sour cream, and pico de gallo. Topped with our homemade chipotle sauce.",
        imgSrc: "/src/assets/menu/coming_soon.webp",
        price: {
          veggies: 1525,
          chicken: 1499,
          steak: 1650,
          pastor: 1650,
          shrimp: 1750,
        },
      },
      {
        name: "Burrito california",
        description:
          "Extra large flour tortilla stuffed with your choice of protein with refried beans, rice, lettuce, pico de gallo, and sour cream. Topped with our homemade cheese sauce",
        imgSrc: "/src/assets/menu/coming_soon.webp",
        price: {
          veggies: 1525,
          chicken: 1499,
          steak: 1650,
          pastor: 1650,
          shrimp: 1750,
        },
      },
      {
        name: "Burrito casa real",
        description:
          "Extra large flour tortilla stuffed with your choice of meat, black beans, rice, lettuce, sour cream, fresh jalapeños, and pico de gallo. Covered with melted cheese, red and green sauce",
        imgSrc: "/src/assets/menu/coming_soon.webp",
        price: {
          veggies: 1525,
          chicken: 1499,
          steak: 1650,
          pastor: 1650,
          shrimp: 1750,
        },
      },
      {
        name: "Burrito popeye's",
        description:
          "Burrito stuffed with grilled chicken, grilled onions, and spinach, covered with melted cheese. Served with rice and beans on the side",
        imgSrc: "/src/assets/menu/coming_soon.webp",
        price: 1325,
      },
      {
        name: "Skillet burrito",
        description:
          "This burrito is loaded with protein of your preference, rice, beans, tomato, and lettuce. Topped with cheese, sour cream, chipotle and ranchero sauce",
        imgSrc: "/src/assets/menu/coming_soon.webp",
        price: {
          chicken: 1525,
          steak: 1725,
          pastor: 1725,
          carnitas: 1725,
        },
      },
    ],
  },
  {
    label: "Steak",
    id: "steak",
    items: [
      {
        name: "Carne asada",
        description:
          "Tender grilled steak, served with rice, beans, cream salad, and three flour or corn tortillas",
        imgSrc: "/src/assets/menu/coming_soon.webp",
        price: 1699,
      },
      {
        name: "Steak a la mexicana",
        description:
          "Ribeye steak grilled to order with bell peppers, onions, and tomatoes. Served with rice, beans, and three flour or corn tortillas",
        imgSrc: "/src/assets/menu/coming_soon.webp",
        price: 1799,
      },
      {
        name: "Steak casa real",
        description:
          "Ribeye cooked with onions and mushrooms, topped with five grilled shrimps and cheese. Served with rice, beans, lettuce, sour cream, pico de gallo, and three flour or corn tortillas",
        imgSrc: "/src/assets/menu/coming_soon.webp",
        price: 2050,
      },
      {
        name: "Steak oaxaca",
        description:
          "Ribeye steak cooked with bacon, poblano peppers, and cheese on top. Served with a side of rice, beans, lettuce, sour cream, tomato, and three flour or corn tortillas",
        imgSrc: "/src/assets/menu/coming_soon.webp",
        price: 1899,
      },
      {
        name: "Steak maya",
        description:
          "A grilled tender steak with a mix of broccoli and cauliflower on top, Served with a side of rice, beans, cream salad, and flour or corn. tortillas",
        imgSrc: "/src/assets/menu/coming_soon.webp",
        price: 1850,
      },
    ],
  },
  {
    label: "Chicken",
    id: "chicken",
    items: [
      {
        name: "El tapatío",
        description:
          "Chicken breast grilled with Mexican sausage, topped with melted cheese. Served with rice, lettuce, sour cream, and three flour or corn tortillas",
        imgSrc: "/src/assets/menu/coming_soon.webp",
        price: 1599,
      },
      {
        name: "Pollo loco",
        description:
          "Tender sliced grilled chicken breast, topped with grilled onions and jalapeño. Served with rice, beans, lettuce, sour cream, tomatoes, and three flour or corn tortillas",
        imgSrc: "/src/assets/menu/coming_soon.webp",
        price: 1499,
      },
      {
        name: "Pollo encremado",
        description:
          "Grilled chicken with mushrooms and onions, mixed with sour cream. Served with rice, tossed salad, and three tortillas on the side",
        imgSrc: "/src/assets/menu/coming_soon.webp",
        price: 1575,
      },
      {
        name: "Pollo maya",
        description:
          "Grilled chicken breast covered with a special mix of broccoli, cauliflower, and zucchini. Served with rice, lettuce, tomatoes, sour cream, and three flour or corn tortillas",
        imgSrc: "/src/assets/menu/pollo_maya.jpeg",
        price: 1599,
      },
      {
        name: "Ángel",
        description:
          "One chicken burrito, one chicken enchilada, both topped with lettuce, sour cream, shredded cheese, and tomato. Served with a side of rice",
        imgSrc: "/src/assets/menu/coming_soon.webp",
        price: 1299,
      },
    ],
  },
  {
    label: "Fajitas",
    id: "fajitas",
    items: [
      {
        name: "Fajitas",
        description:
          "All fajitas are grilled with protein of your preference, bell peppers, onions, and tomatoes. Served with a rice, beans, lettuce, sour cream, shredded cheese, pico de gallo, tomato, and three flour or corn tortillas",
        imgSrc: "/src/assets/menu/fajita.jpeg",
        price: {
          chicken: 1650,
          steak: 1750,
          mix: 1825,
          texana: 1950,
          special: 1999,
          hawaiana: 1699,
          shrimp: 1999,
          pork: 1925,
          del_mar: 2099,
          veggies: 1499,
        },
      },
    ],
  },
  {
    label: "Seafood",
    id: "seafood",
    items: [
      {
        name: "Coctel de camarón",
        description:
          "Our fabulous shrimp in a special Mexican cocktail sauce with raw onions, tomato, cilantro, lime juice, jalapeño peppers, and slices of avocado. Served with salted crackers on the side",
        imgSrc: "/src/assets/menu/coctel_camaron.jpeg",
        price: 1800,
      },
      {
        name: "Veracruz plate",
        description:
          "Grilled shrimp cooked with mushrooms, onions, tomatoes, with melted cheese on top. Served with rice, beans, and three flour or corn tortillas",
        imgSrc: "/src/assets/menu/coming_soon.webp",
        price: 1825,
      },
      {
        name: "Lago especial",
        description:
          "Grilled fish cooked with red bell peppers, onions, zucchini, broccoli, and cauliflower. Served with rice, sour cream, lettuce, tomato, and three flour or corn tortillas on the side",
        imgSrc: "/src/assets/menu/coming_soon.webp",
        price: 1850,
      },
      {
        name: "Camarón yucatán",
        description:
          "Grilled shrimp cooked with red peppers, onions, zucchini, broccoli, and cauliflower. Served with rice, sour cream, lettuce, tomato, and three flour or corn tortillas on the side",
        imgSrc: "/src/assets/menu/coming_soon.webp",
        price: 1825,
      },
      {
        name: "Rice with chicken or shrimp",
        description:
          "Grilled chicken or shrimp , served with rice, cream salad, and flour tortillas on the side",
        imgSrc: "/src/assets/menu/coming_soon.webp",
        price: {
          chicken: 1225,
          shrimp: 1725,
        },
      },
      {
        name: "Brochetas",
        description:
          "Ten jumbo shrimps, stuffed with cheese, and sliced jalapeños, wrapped in bacon. Served on a bed of mixed veggies, rice, and charro beans",
        imgSrc: "/src/assets/menu/brochetas.jpeg",
        price: 1999,
      },
      {
        name: "Al pastor brochetas",
        description:
          "Marinated grilled pork cooked with pineapple and sautéed vegetables Served with rice and three flour or corn tortillas",
        imgSrc: "/src/assets/menu/coming_soon.webp",
        price: 1899,
      },
    ],
  },
  {
    label: "Lunch Specials",
    id: "lunch-specials",
    items: [
      {
        name: "Speedy gonzales",
        description:
          "One taco, one enchilada with red or green sauce on top. Served with your choice of rice or beans",
        imgSrc: "/src/assets/menu/coming_soon.webp",
        price: 850,
      },
      {
        name: "Lunch chimichanga",
        description:
          "One flour tortilla filled with beef tips or chicken topped with cheese sauce and mild ranchero sauce. Served with lettuce, tomato, sour cream, Spanish rice, and beans",
        imgSrc: "/src/assets/menu/coming_soon.webp",
        price: {
          beef: 975,
          chicken: 975,
          shrimp: 1199,
        },
      },
      {
        name: "Huevos rancheros",
        description:
          "Three ranch style eggs (over hard) with sauce on top. Served with Spanish rice, beans, and tortillas",
        imgSrc: "/src/assets/menu/coming_soon.webp",
        price: 899,
      },
      {
        name: "Huevos con chorizo",
        description:
          "Three scrambled eggs with Mexican sausage. Served with Spanish rice, beans, and three flour tortillas",
        imgSrc: "/src/assets/menu/coming_soon.webp",
        price: 925,
      },
      {
        name: "El rancho",
        description: "One chile relleno, one taco, beans, and cream salad",
        imgSrc: "/src/assets/menu/coming_soon.webp",
        price: 1050,
      },
      {
        name: "Burrito especial",
        description: "One burrito, rice, and beans",
        imgSrc: "/src/assets/menu/coming_soon.webp",
        price: 799,
      },
      {
        name: "Burrito and enchilada",
        description: "One burrito, rice, and beans",
        imgSrc: "/src/assets/menu/coming_soon.webp",
        price: 899,
      },
      {
        name: "Burrito verde",
        description: "Pork tips with green sauce, rice, or beans",
        imgSrc: "/src/assets/menu/coming_soon.webp",
        price: 950,
      },
      {
        name: "Quesadilla especial",
        imgSrc: "/src/assets/menu/coming_soon.webp",
        price: 850,
      },
      {
        name: "El burrito alteño",
        description: "One quesadilla, Mexican rice, and beans",
        imgSrc: "/src/assets/menu/coming_soon.webp",
        price: 850,
      },
      {
        name: "Fajita lunch special",
        description:
          "Your choice of grilled chicken or steak. Served with a side of rice, beans, sour cream salad, and three flour or corn tortillas",
        imgSrc: "/src/assets/menu/coming_soon.webp",
        price: {
          chicken: 1025,
          steak: 1150,
          shrimp: 1350,
        },
      },
      {
        name: "Flautas",
        description:
          "Two flautas, one with chicken and one with beef. Served with a side of rice, beans, and our signature cream salad",
        imgSrc: "/src/assets/menu/coming_soon.webp",
        price: 925,
      },
    ],
  },
  {
    label: "Desserts",
    id: "desserts",
    items: [
      {
        name: "Combo casa real",
        description:
          "A mix of all of our desserts! Can't decide which to order? This ones for you!",
        imgSrc: "/src/assets/menu/combo_dessert.jpeg",
        price: 1299,
      },
      {
        name: "Fried ice cream",
        description:
          "A generous serving of ice cream coated in a crunchy coating, deep-fried then cradled in a cinnamon sugar dusted tortilla shell. Topped with whipped cream, drizzled with honey, chocolate sauce, caramel sauce, sprinkles, and cherry!",
        imgSrc: "/src/assets/menu/coming_soon.webp",
        price: 825,
      },
      {
        name: "Fried cheesecake",
        description:
          "creamy cheesecake, wrapped in a flour tortilla, deep-fried to a golden brown, rolled in cinnamon sugar, drizzled with chocolate sauce, caramel sauce, honey, sprinkles and cherry. Served with a side of whipped cream",
        imgSrc: "/src/assets/menu/coming_soon.webp",
        price: 799,
      },
      {
        name: "Churros",
        description:
          "The traditional Mexican light dough pastry fried to a crispy perfection. and sprinkled with a dusting of cinnamon sugar and drizzled with chocolate sauce, caramel sauce, honey, sprinkles, and cherry. Served with a side of whipped cream.",
        imgSrc: "/src/assets/menu/coming_soon.webp",
        price: 675,
      },
      {
        name: "Sopapilla",
        description:
          "Our homemade traditional flour tortilla, fried to a golden brown and drizzled with chocolate sauce, caramel sauce, honey, sprinkles, and cherry",
        imgSrc: "/src/assets/menu/sopapilla.jpeg",
        price: 599,
      },
      {
        name: "Flan",
        description:
          "A delicious traditional Mexican custard. Homemade, rich, and creamy, with a Smoot delicate sweetness. Drizzled with light chocolate and caramel sauce with sprinkles and a cherry. With a side of whipped cream",
        imgSrc: "/src/assets/menu/coming_soon.webp",
        price: 599,
      },
    ],
  },
  {
    label: "Kids Menu",
    id: "kids-menu",
    items: [
      {
        name: "Macaroni and cheese",
        imgSrc: "/src/assets/menu/coming_soon.webp",
        price: 850,
      },
      {
        name: "Chicken tenders",
        imgSrc: "/src/assets/menu/coming_soon.webp",
        price: 850,
      },
      {
        name: "Cheeseburger",
        imgSrc: "/src/assets/menu/coming_soon.webp",
        price: 850,
      },
      {
        name: "Enchilada",
        imgSrc: "/src/assets/menu/coming_soon.webp",
        price: 850,
      },
      {
        name: "Taco",
        imgSrc: "/src/assets/menu/coming_soon.webp",
        price: 850,
      },
      {
        name: "Burrito",
        imgSrc: "/src/assets/menu/coming_soon.webp",
        price: 850,
      },
    ],
  },
];
