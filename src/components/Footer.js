import React from "react";
import small_logo from "../images/small_logo.png"

const Footer = () => {
  return (
    <footer className="bg-white text-black">
      <section className="max-w-screen-lg mx-auto p-6 flex flex-wrap justify-between">
        <div>
          <img src={small_logo} alt="small Lemon Logo" className="w-32" />
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-4">Document Navigation</h3>
          <ul className="space-y-2">
            <li><a href="#home" className="hover:text-teal-400">Home</a></li>
            <li><a href="#about" className="hover:text-teal-400">About</a></li>
            <li><a href="#menu" className="hover:text-teal-400">Menu</a></li>
            <li><a href="#reservation" className="hover:text-teal-400">Reservations</a></li>
            <li><a href="#order" className="hover:text-teal-400">Order Online</a></li>
            <li><a href="#login" className="hover:text-teal-400">Login</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-4">Contact</h3>
          <ul className="space-y-2">
            <li>Address</li>
            <li>Phone Number</li>
            <li>Email</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-4">Social Media Links</h3>
          <ul className="space-y-2">
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Twitter</li>
          </ul>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
