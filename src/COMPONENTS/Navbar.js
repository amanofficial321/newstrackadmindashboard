import React from "react";
import "../CSS/Navbar.css";
import { Link } from "react-router-dom";
import NewsApproval from "./News-Approval";
const Navbar = () => {
  return (
    <>
      <div className="navbarcontainer bg-dark">
        <img src="\images\newspaperwala logo (1).png" className="newslogo" />

        <Link to={"/dashboard"}>
          <p className="dashboard">MAIN DASHBOARD</p>
        </Link>

        {/* REGISTRATION DROPDOWN START  */}

        <div className="dropdown dropdowns">
          <p
            className=" dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            REGISTRATION
          </p>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <Link to="/role">
              {" "}
              <p className="dropdown-item">ROLE BASED USER</p>
            </Link>
            <Link to="/vendor">
              <p className="dropdown-item">VENDOR REGISTRATION</p>
            </Link>
          </div>
        </div>

        {/* REGISTRATION DROPDOWN END  */}

        {/* CONTENT MANAGEMENT DROPDOWN START  */}

        {/* <div className="dropdown dropdowns">
          <p
            className=" dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            CONTENT MANAGEMENT
          </p>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <Link to={"/addNewsArticle"} className="dropdown-item">
              ADD NEWS ARTICLE
            </Link>
            <a className="dropdown-item">ARTICLE LIST</a>
            <a className="dropdown-item">VEIW NEWS</a>
          </div>
        </div> */}
        {/* CONTENT MANAGEMENT DROPDOWN END  */}

        {/* POST NEWS DROPDOWN START  */}

        <div className="dropdown dropdowns">
          <p
            className=" dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            POST NEWS
          </p>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            {/* <Link to={"/viewNews"} className="dropdown-item">
              VIEW NEWS
            </Link> */}
            <Link to={"/news-approval"} className="dropdown-item">
              APPROVE NEWS
            </Link>
            <Link to={"/addNewsArticle"} className="dropdown-item">
              ADD NEWS ARTICLE
            </Link>
            {/* <a className="dropdown-item" href="#">
              SCHEDULE NEWS
            </a> */}
          </div>
        </div>

        {/* POST NEWS DROPDOWN END  */}

        {/* AD MANAGEMENT DROPDOWN START  */}

        <div className="dropdown dropdowns">
          <p
            className=" dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            AD MANAGEMENT
          </p>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a className="dropdown-item" href="#">
              CREATE AN AD
            </a>
            <a className="dropdown-item" href="#">
              AD LIST
            </a>
            <a className="dropdown-item" href="#">
              AD SETTING
            </a>
            <a className="dropdown-item" href="#">
              AD MANAGEMENT
            </a>
            <a className="dropdown-item" href="#">
              AD SETTING TOPICS
            </a>
          </div>
        </div>

        {/* AD MANAGEMENT DROPDOWN END  */}

        {/* ROLES DROPDOWN START  */}
        <div className="dropdown dropdowns">
          <p
            className=" dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            ROLES
          </p>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            {/* <a className="dropdown-item" href="#">
              ROLES MANAGEMENT
            </a> */}
            <Link to={"/RoleManagement"} className="dropdown-item">
              ROLES MANAGEMENT
            </Link>
            {/* <a className="dropdown-item" href="#">
              VENDOR REGISTRATION
            </a> */}
          </div>
        </div>

        {/* ROLES DROPDOWN END  */}

        {/* E-PAPER DROPDOWN START  */}

        <div className="dropdown dropdowns">
          <Link to={"/epaper"}>
            <p className="epaper">E-Paper</p>
          </Link>
          {/* <p
            className=" dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            E-PAPER
          </p> */}
          {/* <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" href="#">
              ROLE BASED USER
            </a>
            <a class="dropdown-item" href="#">
              VENDOR REGISTRATION
            </a>
          </div> */}
        </div>

        {/* E-PAPER DROPDOWN END  */}


        <div className="dropdown dropdowns">
          <p
            className=" dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            MASTER
          </p>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <Link to="/categorys">
              {" "}
              <p className="dropdown-item">Category</p>
            </Link>
            <Link to="/tags">
              <p className="dropdown-item">Tags</p>
            </Link>
            <Link to="/location">
              <p className="dropdown-item">Location</p>
            </Link>
          </div>
        </div>








      </div>
    </>
  );
};

export default Navbar;
