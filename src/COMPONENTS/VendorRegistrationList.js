import React, { useEffect, useState } from "react";
import "../CSS/News-Approval.scss";
import Navbar from "./Navbar";
import { HiOutlineArrowSmallLeft } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const NewsApproval = () => {
  const navigate = useNavigate();

  const back = () => {
    navigate(-1);
  };

  const [vendorList, setVendorList] = useState();
  const getVendorList = async () => {
    try {
      const response = await axios.get(
        `http://174.138.101.222:8080/VendorList`
      );
      console.log(response.data, "Vendor List");
      setVendorList(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getVendorList();
  }, []);

  return (
    <>
      <Navbar />
      <div className="parentContainer">
        <h1>
          <span>
            <HiOutlineArrowSmallLeft onClick={back} className="pointer" />
          </span>
          <span>Registered Vendors</span>
        </h1>
        {vendorList &&
          vendorList.map((vendor) => {
            return (
              <div key={vendor._id}>
                <img
                  src={`http://174.138.101.222:8080${vendor.logo_small}`}
                  height={"100px"}
                  style={{ border: "1px solid black" }}
                />
                <p>Publisher Name : {vendor.publisher_name}</p>
                <p>
                  Publication Name : {vendor.publication_name} ({vendor.RNI_No})
                </p>
                <p>Registered Address : {vendor.regd_address}</p>
                <p>Language of Publication : {vendor.Lang_of_Publication}</p>
                <p>Circulation : {vendor.circulation}</p>
                <p>Account managed by : {vendor.account_manager}</p>
                <p>Publisher Bio : {vendor.publisher_BIO}</p>
                <p>
                  Agreement : {vendor.Agreement_Start_Date} -{" "}
                  {vendor.Agreement_End_Date}
                </p>
                <p>Vendor Id : {vendor._id}</p>
                <hr />
              </div>
            );
          })}
      </div>
    </>
  );
};

export default NewsApproval;
