import React, { Component } from 'react';
/*import ReactDOM from 'react-dom/client';*/
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from "react-router-dom";
import HomeV1 from './components/home-v1';
import HomeV2 from './components/home-v2';
import HomeV3 from './components/home-v3';
import HomeV4 from './components/home-v4';
import HomeV5 from './components/home-v5';
import HomeV6 from './components/home-v6';
import HomeV7 from './components/home-v7';
import HomeV8 from './components/home-v8';
import HomeV9 from './components/home-v9';
import HomeV10 from './components/home-v11';

import About from './components/about';
import Service from './components/service';
import ServiceDetails from './components/service-details';
import Portfolio from './components/portfolio';
import PortfolioV2 from './components/portfolio-v2';
import PortfolioDetails from './components/portfolio-details';
import Team from './components/team';
import TeamDetails from './components/team-details';
import Faq from './components/faq';
import ComingSoon from './components/coming-soon';
import Error from './components/404';
import Location from './components/location';

import Shop from './components/shop';
import ShopGrid from './components/shop-grid';
import ProdductDetails from './components/product-details';
import ShopLeftSidebar from './components/shop-left-sidebar';
import ShopRightSidebar from './components/shop-right-sidebar';

import BlogGrid from './components/blog-grid';
import BlogLeftSidebar from './components/blog-left-sidebar';
import BlogRightSidebar from './components/blog-right-sidebar';
import Blog from './components/blog';

import BlogDetails from './components/blog-details';
import Contact from './components/contact';
import Cart from './components/cart';
import Checkout from './components/checkout';
import MyAccount from './components/my-account';
import Login from './components/login';
import Register from './components/register';
import AddListing from './components/add-listing';
import Wishlist from './components/wishlist';
import OrderTracking from './components/order-tracking';
import History from './components/history';


export default function Quarter() {
    return (
        <div>
            <link rel="shortcut icon" href="/mydomain/assets/img/favicon.png" type="image/x-icon" />
            <link rel="stylesheet" href="/mydomain/assets/css/font-icons.css" />
            <link rel="stylesheet" href="/mydomain/assets/css/plugins.css" />
            <link rel="stylesheet" href="/mydomain/assets/css/style.css" />
            <link rel="stylesheet" href="/mydomain/assets/css/responsive.css" />
            <script src="/mydomain/assets/js/plugins.js"></script>
            <title>Quarter - Real Estate React Template</title>
            <Router>
                <Routes>
                    <Route path="/" element={<HomeV1 />} />
                    <Route path="/home-v2" element={<HomeV2 />} />
                    <Route path="/home-v3" element={<HomeV3 />} />
                    <Route path="/home-v4" element={<HomeV4 />} />
                    <Route path="/home-v5" element={<HomeV5 />} />
                    <Route path="/home-v6" element={<HomeV6 />} />
                    <Route path="/home-v7" element={<HomeV7 />} />
                    <Route path="/home-v8" element={<HomeV8 />} />
                    <Route path="/home-v9" element={<HomeV9 />} />
                    <Route path="/home-v10" element={<HomeV10 />} />

                    <Route path="/about" element={<About />} />
                    <Route path="/service" element={<Service/>} />
                    <Route path="/service-details" element={<ServiceDetails/>} />
                    <Route path="/portfolio" element={<Portfolio/>} />
                    <Route path="/portfolio-v2" element={<PortfolioV2/>} />
                    <Route path="/portfolio-details" element={<PortfolioDetails/>} />
                    <Route path="/team" element={<Team/>} />
                    <Route path="/team-details" element={<TeamDetails/>} />
                    <Route path="/faq" element={<Faq/>} />
                    <Route path="/coming-soon" element={<ComingSoon/>} />
                    <Route path="/404" element={<Error/>} />
                    <Route path="/location" element={<Location/>} />
                    <Route path="/shop" element={<Shop/>} />
                    <Route path="/shop-grid" element={<ShopGrid/>} />
                    <Route path="/shop-left-sidebar" element={<ShopLeftSidebar/>} />
                    <Route path="/shop-right-sidebar" element={<ShopRightSidebar/>} />

                    <Route path="/product-details" element={<ProdductDetails/>} />
                    {/* blog */}
                    <Route path="/blog-grid" element={<BlogGrid/>} />
                    <Route path="/blog-left-sidebar" element={<BlogLeftSidebar/>} />
                    <Route path="/blog-right-sidebar" element={<BlogRightSidebar/>} />
                    <Route path="/blog" element={<Blog/>} />


                    <Route path="/blog-details" element={<BlogDetails/>} />
                    <Route path="/contact" element={<Contact/>} />
                    <Route path="/cart" element={<Cart/>} />
                    <Route path="/checkout" element={<Checkout/>} />
                    <Route path="/my-account" element={<MyAccount/>} />
                    <Route path="/login" element={<Login/>} />
                    <Route path="/register" element={<Register/>} />
                    <Route path="/add-listing" element={<AddListing/>} />
                    <Route path="/wishlist" element={<Wishlist/>} />
                    <Route path="/order-tracking" element={<OrderTracking/>} />
                    <Route path="/history" element={<History/>} />
                </Routes>
            </Router>
        </div>
    );
}
