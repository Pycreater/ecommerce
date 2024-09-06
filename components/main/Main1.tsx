"use client";
import React from "react";
import { Card, Carousel } from "../ui/apple-cards-carousel";

const cardData = [
  {
    src: "/assets/iphone.jpg",
    title: "Latest Smartphone",
    category: "Electronics",
    content: <p>Discover the latest smartphones with advanced features.</p>,
  },
  {
    src: "/assets/fashion2.jpg",
    title: "Trendy Fashion",
    category: "Fashion",
    content: <p>Explore the latest trends in fashion and style.</p>,
  },
  {
    src: "/assets/home-applience.jpg",
    title: "Home Appliances",
    category: "Home Appliances",
    content: <p>Upgrade your home with top-notch appliances.</p>,
  },
  {
    src: "/assets/sports.jpg",
    title: "Sports Gear",
    category: "Sports",
    content: <p>Find the best gear for your favorite sports.</p>,
  },
  {
    src: "/assets/books.jpg",
    title: "Bestselling Books",
    category: "Books",
    content: <p>Explore a wide range of bestselling books.</p>,
  },
  {
    src: "/assets/toys1.jpg",
    title: "Kids' Toys",
    category: "Toys",
    content: <p>Find fun and educational toys for kids of all ages.</p>,
  },
  {
    src: "/assets/jw.jpg",
    title: "Elegant Jewelry",
    category: "Jewelry",
    content: <p>Discover a collection of exquisite jewelry pieces.</p>,
  },
  {
    src: "/assets/grocery.jpg",
    title: "Grocery Essentials",
    category: "Groceries",
    content: <p>Get your daily grocery needs delivered to your door.</p>,
  },
  {
    src: "/assets/beauty.jpg",
    title: "Beauty Products",
    category: "Beauty",
    content: <p>Enhance your beauty with top-rated beauty products.</p>,
  },
  {
    src: "/assets/auto.jpg",
    title: "Automotive Accessories",
    category: "Automotive",
    content: <p>Find accessories to upgrade your vehicle.</p>,
  },
];

export { cardData };

const Main1 = () => {
  return (
    <div className="p-6 ">
      <h1 className="text-5xl font-bold text-center mb-8 text-white font-mono">
        Our Features
      </h1>
      <Carousel
        items={cardData.map((card, index) => (
          <Card card={card} index={index} key={index} />
        ))}
      />
    </div>
  );
};

export default Main1;
