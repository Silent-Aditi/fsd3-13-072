import http from 'http'
import { reviews } from './data.js';   

const server = http.createServer((req,res)=>{
    const products ={
    id:1,
    Name: "Mobile",
    price: 250000,
    rating: 4.5,
    review: 123,

    };
     const item = [
  {
    "id": 1,
    "name": "Smart Water Bottle",
    "price": 799,
    "img": "smart-water-bottle.jpg",
    "desc": "A smart water bottle that reminds you to stay hydrated throughout the day."
  },
  {
    "id": 2,
    "name": "Wireless Headphones",
    "price": 1499,
    "img": "wireless-headphones.jpg",
    "desc": "Comfortable wireless headphones with clear sound and long battery life."
  },
  {
    "id": 3,
    "name": "Smart Watch",
    "price": 2499,
    "img": "smart-watch.jpg",
    "desc": "A stylish smartwatch for fitness tracking, notifications, and daily activities."
  },
  {
    "id": 4,
    "name": "Laptop Backpack",
    "price": 999,
    "img": "laptop-backpack.jpg",
    "desc": "Durable and spacious backpack designed to safely carry your laptop and accessories."
  },
  {
    "id": 5,
    "name": "Bluetooth Speaker",
    "price": 1299,
    "img": "bluetooth-speaker.jpg",
    "desc": "Portable Bluetooth speaker delivering powerful sound for indoor and outdoor use."
  },
  {
    "id": 6,
    "name": "Mechanical Keyboard",
    "price": 1899,
    "img": "mechanical-keyboard.jpg",
    "desc": "Responsive mechanical keyboard suitable for gaming, coding, and everyday typing."
  },
  {
    "id": 7,
    "name": "Wireless Mouse",
    "price": 699,
    "img": "wireless-mouse.jpg",
    "desc": "Ergonomic wireless mouse with smooth tracking and comfortable grip."
  },
  {
    "id": 8,
    "name": "LED Desk Lamp",
    "price": 599,
    "img": "led-desk-lamp.jpg",
    "desc": "Adjustable LED desk lamp providing comfortable lighting for studying and working."
  },
  {
    "id": 9,
    "name": "Power Bank",
    "price": 1099,
    "img": "power-bank.jpg",
    "desc": "High-capacity portable power bank for charging smartphones and other devices."
  },
  {
    "id": 10,
    "name": "USB-C Hub",
    "price": 899,
    "img": "usb-c-hub.jpg",
    "desc": "Multi-port USB-C hub that expands connectivity for laptops and tablets."
  }
]
if (req.url === '/api/products'){
    // res.end(JSON.stringify(products));
    res.end(JSON.stringify(item));
    
} else if(req.url === '/api/reviews'){
    res.end(JSON.stringify(item))
}


else{
    res.statusCode= 404;
    res.end();
}
});
server.listen(3000,()=>console.log('prg4 is running...'))