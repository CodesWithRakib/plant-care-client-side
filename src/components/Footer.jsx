import React from "react";
import { Link, NavLink } from "react-router";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import logo from "/logo.jpg";

const Footer = () => {
  return (
    <div className="bg-white  dark:bg-zinc-800 text-base-content dark:text-white py-10  poppins">
      <ul className="flex gap-5 items-center  text-base text-xs sm:text-sm md:text-lg font-light justify-center px-5 ">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/all-plants">All Plants</NavLink>
        </li>
        <li>
          <NavLink to="/my-plants">My Plants</NavLink>
        </li>
        <li>
          <NavLink to="/add-plant">Add Plant</NavLink>
        </li>
      </ul>
      <div className="flex flex-col md:flex-row  justify-center items-start md:items-center md:justify-between gap-4 p-10  ">
        <div className="flex flex-col gap-2 items-start max-w-[400px]">
          <figure>
            <img src={logo} alt="" className="w-12 h-12 rounded-full" />
          </figure>
          <h3 className="pacifico text-2xl">Green Nest </h3>
          <p className="">
            Built by plant lovers, for plant lovers. Join our growing community
            and never forget a watering day again. Let’s grow together!{" "}
          </p>
        </div>

        <nav className="flex flex-col">
          <h6 className="footer-title ">Contact Us</h6>
          <a className="link link-hover">+880 123 456 789</a>
          <a className="link link-hover">info@greennest.com</a>

          <a className="link link-hover">Address: House 12, Road 1</a>
          <a className="link link-hover">Dhaka, Bangladesh</a>
        </nav>
        <nav>
          <h6 className="footer-title">Social</h6>
          <div className="grid grid-flow-col gap-4">
            <Link to="https://www.facebook.com/CodesWithRakib/" target="_blank">
              <FaFacebook className="text-3xl"></FaFacebook>
            </Link>
            <Link
              to="https://www.instagram.com/codeswithrakib/"
              target="_blank"
            >
              <FaInstagram className="text-3xl"></FaInstagram>
            </Link>
            <Link to="https://x.com/CodesWithRakib" target="_blank">
              <FaTwitter className="text-3xl"></FaTwitter>
            </Link>
          </div>
        </nav>
      </div>
      <div className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by Green
            Nest
          </p>
        </aside>
      </div>
    </div>
  );
};

export default Footer;
