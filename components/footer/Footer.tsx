"use client";
import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaGithub,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { IoMdPhonePortrait } from "react-icons/io";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#F4F4F5] text-gray-700 py-8 rounded-t-xl">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start">
          {/* Brand Name */}
          <div className="mb-6 md:mb-0">
            <h1 className="text-3xl font-bold text-gray-900">
              <span className="text-blue-500">Trend</span>Fusion
            </h1>
          </div>

          {/* Links */}
          <div className="flex flex-col md:flex-row md:space-x-12 mb-6 md:mb-0">
            <div className="mb-6 md:mb-0">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Quick Links
              </h2>
              <ul>
                <li>
                  <a href="/" className="hover:text-blue-500">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/about" className="hover:text-blue-500">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/shop" className="hover:text-blue-500">
                    Shop
                  </a>
                </li>
                <li>
                  <a href="/contact" className="hover:text-blue-500">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="/faq" className="hover:text-blue-500">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            <div className="mb-6 md:mb-0">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Customer Service
              </h2>
              <ul>
                <li>
                  <a href="/returns" className="hover:text-blue-500">
                    Returns
                  </a>
                </li>
                <li>
                  <a href="/shipping" className="hover:text-blue-500">
                    Shipping
                  </a>
                </li>
                <li>
                  <a href="/privacy" className="hover:text-blue-500">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/terms" className="hover:text-blue-500">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact & Social Media */}
          <div className="flex flex-col md:flex-row items-start md:items-end">
            <div className="flex flex-col mb-6 md:mb-0">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Contact Us
              </h2>
              <div className="flex items-center mb-4">
                <HiMail className="text-blue-500 mr-2" size={24} />
                <a
                  href="mailto:pratikyadav3949@gmail.com"
                  className="hover:text-blue-500"
                >
                  pratikyadav3949@gmail.com
                </a>
              </div>
              <div className="flex items-center mb-4">
                <IoMdPhonePortrait className="text-blue-500 mr-2" size={24} />
                <a href="tel:+918830760701" className="hover:text-blue-500">
                  +91 (883) 076-0701
                </a>
              </div>
              <div className="flex space-x-4 mt-4 md:mt-0">
                <a
                  href="https://www.facebook.com/profile.php?id=100049314312943"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook
                    className="text-blue-600 rounded-full p-2 bg-white hover:bg-gray-200"
                    size={34}
                  />
                </a>
                <a
                  href="https://www.instagram.com/prat_ik389/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram
                    className="text-pink-500 rounded-full p-2 bg-white hover:bg-gray-200"
                    size={34}
                  />
                </a>
                <a
                  href="https://github.com/Pycreater"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub
                    className="text-gray-900 rounded-full p-2 bg-white hover:bg-gray-200"
                    size={34}
                  />
                </a>
                <a
                  href="https://x.com/Pratik3949"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter
                    className="text-blue-400 rounded-full p-2 bg-white hover:bg-gray-200"
                    size={34}
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/pratikyadav3949/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin
                    className="text-blue-400 rounded-full p-2 bg-white hover:bg-gray-200"
                    size={34}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-300 mt-8 pt-4 text-center text-sm text-gray-600">
          <p>
            &copy; {new Date().getFullYear()}{" "}
            <span className="text-blue-500 font-semibold">Trend</span>Fusion.
            All rights reserved.
          </p>
          <p className="mt-2">
            Designed and developed by{" "}
            <span className="text-blue-500 font-semibold">Pratik Yadav</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
