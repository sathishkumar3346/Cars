
import car_image1 from "./bmw-x5-1.avif"
import car_image1_1 from "./bmw-x5-2.avif"
import car_image1_2 from "./bmw-x5-3.avif"
import car_image1_3 from "./bmw-x5-4.avif"

import car_image2 from "./Toyota-Fortuner-1.avif"
import car_image2_1 from "./Toyota-Fortuner-2.avif"
import car_image2_2 from "./Toyota-Fortuner-3.avif"
import car_image2_3 from "./Toyota-Fortuner-4.avif"

import car_image3 from "./jeep-1.avif"
import car_image3_1 from "./jeep-2.avif"
import car_image3_2 from "./jeep-3.avif"
import car_image3_3 from "./jeep-4.avif"


import car_image4 from "./Mustang-1.avif"
import car_image4_1 from "./Mustang-2.avif"
import car_image4_2 from "./Mustang-3.avif"
import car_image4_3 from "./Mustang-4.avif"

import car_image5 from "./audi-1.avif"
import car_image5_1 from "./audi-2.avif"
import car_image5_2 from "./audi-3.avif"
import car_image5_3 from "./audi-4.avif"

import car_image6 from "./Benz-1.avif"
import car_image6_2 from "./Benz-3.avif"
import car_image6_3 from "./Benz-4.avif"
import car_image6_1 from "./Benz-2.avif"

import brand_1 from "../assets/brand_1.png"
import brand_2 from "../assets/brand-2.png"
import brand_3 from "../assets/brand-3.png"
import brand_4 from "../assets/brand-4.png"
import brand_5 from "../assets/brand-5.png"
import brand_6 from "../assets/brand-6.png"
import brand_7 from "../assets/brand-7.png"

import Audi from "./Audi.jpg"
import BMW from "./BMW.jpg"
import Mercedes from "./Mercedes.jpg"
import AstonMartin from "./AstonMartin.jpg"
import MiniCooper from "./MiniCooper.jpg"
import ToyotaFortuner from "./ToyotaFortuner.jpg"
import MahindraThar from "./MahindraThar.jpg"
import RollsRoyce from "./RollsRoyce.jpg"

import Sathish from './Sathish.jpeg'
import Rishi from './Rishi.jpg'
import Umar from './umar.jpg'
export const assets = {
    // logo,
   
}


// export const dummyUserData = {
//   "_id": "6847f7cab3d8daecdb517095",
//   "name": "GreatStack",
//   "email": "admin@example.com",
//   "role": "owner"
// //   "image": user_profile,
// }

export const dummyCarData = [
    {
        "_id": "1",
        "owner": "67fe3467ed8a8fe17d0ba6e2",
        "brand": "BMW",
        "model": "X5",
        "image": car_image1,
        "images":[car_image1,car_image1_1,car_image1_2,car_image1_3],
        "year": 2006,
        "category": "SUV",
        "seating_capacity": 4,
        "fuel_type": "Hybrid",
        "transmission": "Automatic",
        "pricePerDay": 3000,
        "price":3000000,
        "location": "New York",
        "description": "The BMW X5 is a mid-size luxury SUV produced by BMW. The X5 made its debut in 1999 as the first SUV ever produced by BMW.",
        "isAvaliable": true,
        "createdAt": "2025-04-16T07:26:56.215Z",
    },
    {
        "_id": "2",
        "owner": "67fe3467ed8a8fe17d0ba6e2",
        "brand": "Toyota",
        "model": "Fortuner",
        "image": car_image2,
         "images":[car_image2,car_image2_1,car_image2_2,car_image2_3],
        "year": 2021,
        "category": "SUV",
        "seating_capacity": 4,
        "fuel_type": "Diesel",
        "transmission": "Manual",
        "pricePerDay": 4000,
        "price":5000000,
        "location": "Chicago",
        "description": "The Toyota Corolla is a mid-size luxury sedan produced by Toyota. The Corolla made its debut in 2008 as the first sedan ever produced by Toyota.",
        "isAvaliable": true,
        "createdAt": "2025-04-16T08:33:57.993Z",
    },
    {
        "_id": "3",
        "owner": "67fe3467ed8a8fe17d0ba6e2",
        "brand": "Jeep ",
        "model": "Wrangler",
        "image": car_image3,
         "images":[car_image3,car_image3_1,car_image3_2,car_image3_3],
        "year": 2023,
        "category": "SUV",
        "seating_capacity": 4,
        "fuel_type": "Hybrid",
        "transmission": "Automatic",
        "pricePerDay": 50000,
         "price":2000000.00,
        "location": "Los Angeles",
        "description": "The Jeep Wrangler is a mid-size luxury SUV produced by Jeep. The Wrangler made its debut in 2003 as the first SUV ever produced by Jeep.",
        "isAvaliable": true,
        "createdAt": "2025-04-16T08:34:39.592Z",
    },
    {
        "_id": "4",
        "owner": "67fe3467ed8a8fe17d0ba6e2",
        "brand": "Ford",
        "model": "Mustang",
        "image": car_image4,
         "images":[car_image4,car_image4_1,car_image4_2,car_image4_3],
        "year": 2022,
        "category": "Sedan",
        "seating_capacity": 2,
        "fuel_type": "Diesel",
        "transmission": "Automatic",
        "pricePerDay": 10000,
         "price":9000000,
        "location": "Houston",
        "description": "This is a mid-size luxury sedan produced by Toyota. The Corolla made its debut in 2008 as the first sedan ever produced by Toyota.",
        "isAvaliable": true,
        "createdAt": "2025-04-17T06:15:47.318Z",
    },
     {
        "_id": "5",
        "owner": "67fe3467ed8a8fe17d0ba6e2",
        "brand": "Audi",
        "model": "A4",
        "image": car_image5,
         "images":[car_image5,car_image5_1,car_image5_2,car_image5_3],
        "year": 2006,
        "category": "Sedan",
        "seating_capacity": 4,
        "fuel_type": "Hybrid",
        "transmission": "Automatic",
        "pricePerDay": 5000,
         "price":4000000,
        "location": "New York",
        "description": "The BMW X5 is a mid-size luxury SUV produced by BMW. The X5 made its debut in 1999 as the first SUV ever produced by BMW.",
        "isAvaliable": true,
        "createdAt": "2025-04-16T07:26:56.215Z",
    },
    {
        "_id": "6",
        "owner": "67fe3467ed8a8fe17d0ba6e2",
        "brand": "Mercedes-Benz ",
        "model": "AMG SL",
        "image": car_image6,
         "images":[car_image6,car_image6_1,car_image6_2,car_image6_3],
        "year": 2021,
        "category": "Sedan",
        "seating_capacity": 4,
        "fuel_type": "Diesel",
        "transmission": "Manual",
        "pricePerDay": 20000,
         "price":6000000,
        "rating":3,
        "location": "Chicago",
        "description": "The Toyota Corolla is a mid-size luxury sedan produced by Toyota. The Corolla made its debut in 2008 as the first sedan ever produced by Toyota.",
        "isAvaliable": true,
        "createdAt": "2025-04-16T08:33:57.993Z",
    }
];
export const brandcars=[
    {"id":"001",
      "image":Audi,
      "name":"Audi"
    },
    {
        "id":"002",
        "image":BMW,
        "name":"BMW"
    },
    {
        "id":"003",
        "image":Mercedes,
        "name":"Mercedes"
    },
    {
        "id":"004",
        "image":AstonMartin,
        "name":"AstonMartin"
    },
    {
        "id":"005",
        "image":MiniCooper,
        "name":"MiniCooper"
    },
    {
        "id":"006",
        "image":ToyotaFortuner,
        "name":"ToyotaFortuner"
    },
    {
        "id":"007",
        "image":MahindraThar,
        "name":"Mahindra Thar"
    },
    {
        "id":"008",
        "image":RollsRoyce,
        "name":"RollsRoyce"
    }
]
export const brand=[
    {
        "id":"01",
        "image":brand_1
    },
    {
        "id":"02",
        "image":brand_2
    },
    {
        "id":"03",
        "image":brand_3
    },
    {
        "id":"04",
        "image":brand_4
    },
    {
        "id":"05",
        "image":brand_5
    },
    {
        "id":"06",
        "image":brand_6
    },
    {
        "id":"07",
        "image":brand_7
    }
];

export const member=[
  {
    "name": "Sathish",
    "image": Sathish
  },
  {
    "name": "Rishi",
    "image": Rishi
  },
  {
    "name": "Umar",
    "image": Umar
  }
]