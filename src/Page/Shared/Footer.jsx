import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-gradient-to-b p-5 py-8 rounded-t-3xl  from-amber-400">
        <div className="grid grid-cols-4 gap-10 py-5 border-b-2 border-amber-500">
            <p className="text-4xl self-center ">
                <Link to="/">
                <span className="font-serif text-5xl text-amber-500 ">JM</span>_
                <span className="font-serif text-5xl text-amber-500">R</span>esipes
                <span className="font-serif text-5xl text-amber-500">t</span>
                </Link>
            </p>
            <div className="">
                <h3 className="text-2xl font-bold mb-4">About us</h3>
                <p>Browse our extensive collection of recipes that includes thousands of recipes for cookies, cakes, breads, rolls and main dishes.</p>
            </div>
            <div className="">
                <h3 className="text-2xl font-bold mb-4">Quick Links</h3>
                <ul>
                    <li><Link className="hover:text-amber-600 block my-2">Home</Link></li>
                    <li><Link className="hover:text-amber-600 block my-2">Blogs</Link></li>
                    <li><Link className="hover:text-amber-600 block my-2">About us</Link></li>
                    <li><Link className="hover:text-amber-600 block my-2">Something</Link></li>
                </ul>
            </div>
            <div className="">
                <h3 className="text-2xl font-bold mb-4">Follow Us</h3>
                <ul>
                    <li><a className="hover:text-amber-600 my-2 block" href="#"><FaFacebook className="inline mr-2 text-blue-600 text-xl"/> Facebook</a></li>
                    <li><a className="hover:text-amber-600 my-2 block" href="#"><FaTwitter className="inline mr-2 text-blue-400 text-xl"/> Twitter</a></li>
                    <li><a className="hover:text-amber-600 my-2 block" href="#"><FaLinkedin className="inline mr-2 text-blue-600 text-xl"/> Linked in</a></li>
                    <li><a className="hover:text-amber-600 my-2 block" href="#"><FaInstagram className="inline mr-2 text-rose-600 text-xl"/> Instagram</a></li>
                </ul>
            </div>
        </div>
        <p className="text-center my-5">© 2023. JM_Resipes . All rights reserved. </p>
    </div>
  );
};

export default Footer;
