"use client";
import React, { UseState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

import HomePage from "../pages/home";
import NewsPage from "../pages/news";

const Navbar = () => {
  //  const [click, setClick] = UseState(false);
  //  const handleClick = () => setClick(!click);
  // const [isOpen, setOpen] = UseState(false);
  const NavCss = {
    backgroundColor: "black",
    position: "fixed",
    width: "100%",
    top: "0",
  };
  return (
    <>
      <header style={NavCss}>
        <div className="collapse bg-dark" id="navbarHeader">
          <div className="container">
            <div className="row">
              <div className="col-sm-8 col-md-7 py-4">
                <h4 className="text-white">About</h4>
                <p className="text-muted">
                  Add some information about the album below, the author, or any
                  other background context. Make it a few sentences long so
                  folks can pick up some informative tidbits. Then, link them
                  off to some social networking sites or contact information.
                </p>
              </div>
              <div className="col-sm-4 offset-md-1 py-4">
                <h4 className="text-white">Contact</h4>
                <ul className="list-unstyled">
                  <li>
                    <a href="#" className="text-white">
                      Our Instagram
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white">
                      Our Whatapp Group
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white">
                      Retroflash
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="navbar navbar-dark bg-dark box-shadow">
          <div className="container d-flex justify-content-between">
            <a href="#" className="navbar-brand d-flex align-items-center">
              <img
                src={require("../docs/matieslogo.png")}
                alt="logo"
                width="50px"
              />
              <ul></ul>
              <strong>Maties Climbing</strong>
            </a>
            <ul className="navbar-nav mx-auto d-flex flex-row">
              <li className="nav-item active">
                <a className="nav-link" href="\home">
                  Home
                </a>
              </li>
              <ul></ul>
              <li className="nav-item">
                <a className="nav-link" href="\news">
                  News
                </a>
              </li>
              <ul></ul>
              <li className="nav-item">
                <a className="nav-link" href="\about">
                  Events
                </a>
              </li>
              <ul></ul>
              <li className="nav-item">
                <a className="nav-link" href="\gallery">
                  Gallery
                </a>
              </li>
              <ul></ul>
              <li className="nav-item">
                <a className="nav-link" href="\contact">
                  Retroflash
                </a>
              </li>
            </ul>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarHeader"
              aria-controls="navbarHeader"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
