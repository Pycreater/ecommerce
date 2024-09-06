"use client";

import * as React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Menu, X } from "lucide-react"; // Importing icons for hamburger and close button

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
  const [search, setSearch] = React.useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false); // State to manage mobile menu

  return (
    <nav className="bg-[#F4F4F5] shadow-md fixed w-full z-50 top-0 left-0 flex rounded-b-xl">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div
          className="text-2xl font-bold text-gray-900 cursor-pointer"
          onClick={() => (window.location.href = "/")}
        >
          <span className="text-blue-500">Trend</span>Fusion
        </div>

        {/* Hamburger Button for Mobile */}
        <div className="block md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="focus:outline-none"
          >
            {mobileMenuOpen ? (
              <X className="w-8 h-8 text-gray-700" /> // Close icon
            ) : (
              <Menu className="w-8 h-8 text-gray-700" /> // Hamburger icon
            )}
          </button>
        </div>

        {/* Navigation Menu for Desktop */}
        <div className="hidden md:flex">
          <NavigationMenu>
            <NavigationMenuList className="flex space-x-8">
              {categories.map((category) => (
                <NavigationMenuItem key={category.title}>
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
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex flex-grow mx-4">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full p-2 border border-gray-300 rounded-xl text-black font-mono"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Account & Cart Links for Desktop */}
        <div className="hidden md:flex space-x-4">
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

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#F4F4F5] shadow-md fixed top-16 w-full">
          <ul className="space-y-4 p-4">
            {categories.map((category) => (
              <li key={category.title}>
                <span className="block text-gray-900 font-bold">
                  {category.title}
                </span>
                <ul className="pl-4 space-y-2">
                  {category.links.map((link) => (
                    <li key={link.href}>
                      <div
                        className="block py-2 text-gray-700 hover:text-blue-500 cursor-pointer"
                        onClick={() => {
                          setMobileMenuOpen(false); // Close menu on selection
                          window.location.href = link.href;
                        }}
                      >
                        {link.title}
                      </div>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
            <div className="py-2">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full p-2 border border-gray-300 rounded-xl text-black font-mono"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <div className="flex space-x-4">
              <div
                className="text-gray-700 hover:text-blue-500 cursor-pointer"
                onClick={() => {
                  setMobileMenuOpen(false);
                  window.location.href = "/account";
                }}
              >
                Account
              </div>
              <div
                className="text-gray-700 hover:text-blue-500 cursor-pointer"
                onClick={() => {
                  setMobileMenuOpen(false);
                  window.location.href = "/cart";
                }}
              >
                Cart
              </div>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
