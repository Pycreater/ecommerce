"use client";

import * as React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

// Define the categories for the navigation menu
const categories = [
  {
    title: "Fashion",
    links: [
      { title: "Men", href: "/fashion/men" },
      { title: "Women", href: "/fashion/women" },
      { title: "Accessories", href: "/fashion/accessories" },
    ],
  },
  {
    title: "Electronics",
    links: [
      { title: "Phones", href: "/electronics/phones" },
      { title: "Laptops", href: "/electronics/laptops" },
      { title: "Headphones", href: "/electronics/headphones" },
    ],
  },
  {
    title: "Home & Garden",
    links: [
      { title: "Furniture", href: "/home-furniture" },
      { title: "Decor", href: "/home-decor" },
      { title: "Gardening", href: "/gardening" },
    ],
  },
  // Add more categories as needed
];

const Navbar = () => {
  return (
    <nav className="bg-[#F4F4F5] shadow-md fixed w-full z-10 top-0 left-0">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div
          className="text-2xl font-bold text-gray-900 cursor-pointer"
          onClick={() => (window.location.href = "/")}
        >
          <span className="text-blue-500">Trend</span>Fusion
        </div>

        {/* Navigation Menu */}
        <NavigationMenu>
          <NavigationMenuList className="flex space-x-8 relative">
            {categories.map((category) => (
              <NavigationMenuItem key={category.title} className="relative">
                <NavigationMenuTrigger className="text-gray-700 hover:text-blue-500">
                  {category.title}
                </NavigationMenuTrigger>
                <NavigationMenuContent className="absolute left-0 mt-2 w-48 bg-[#F4F4F5] shadow-lg ">
                  <ul className="space-y-2 p-4">
                    {category.links.map((link) => (
                      <li key={link.href}>
                        <div
                          className="block py-2 px-4 text-gray-700 hover:text-blue-500 cursor-pointer"
                          onClick={() => (window.location.href = link.href)}
                        >
                          {link.title}
                        </div>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Search Bar */}
        <div className="md:flex flex-grow mx-4">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full p-2 border border-gray-300 rounded-xl"
          />
        </div>

        {/* Account & Cart Links */}
        <div className="flex space-x-4">
          <div
            className="text-gray-700 hover:text-blue-500 cursor-pointer"
            onClick={() => (window.location.href = "/account")}
          >
            Account
          </div>
          <div
            className="text-gray-700 hover:text-blue-500 cursor-pointer"
            onClick={() => (window.location.href = "/cart")}
          >
            Cart
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
