import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import "../CSS/Personalinformation.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Navbar from "./Navbar";
import axios from "axios";

const Personalinfromation = () => {
  const initialValues = {
    categories_Name_Hindi: "",
    categories_Name_English: "",
    categories_Name_Url: "",
  };

  const [values, setValues] = useState(initialValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://174.138.101.222:8080/masterCategories",
        values
      );
      alert(response.statusText);
      setValues({
        categories_Name_Hindi: "",
        categories_Name_English: "",
        categories_Name_Url: "",
      });
    } catch (error) {
      alert(JSON.parse(error.request.responseText).message);
    }
  };

  return (
    <>
      <div className="rolebasedcontainer">
        <div className="rolebasedbox1">
          <Navbar />
        </div>
        <div className="rolebasedbox2">
          <div className="rolebasedheader">
            <p className="rolebasedheading">
              <ArrowBackIcon /> CATEGORY
            </p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="personalcontainer">
              <h1
                style={{ fontSize: "2rem", fontFamily: "ubuntu" }}
                className=" ms-3"
              >
                Create Category
              </h1>
              <div className="formbox ms-3" style={{ width: "50%" }}>
                {/* <div className="formbox1"> */}
                <TextField
                  id="standard-basic"
                  required
                  label="Category Name Hindi"
                  name="categories_Name_Hindi"
                  value={values.categories_Name_Hindi}
                  onChange={handleInputChange}
                  variant="standard"
                  className="personalinput"
                />

                <TextField
                  id="standard-basic"
                  required
                  label="Category Name English"
                  name="categories_Name_English"
                  value={values.categories_Name_English}
                  onChange={handleInputChange}
                  variant="standard"
                  className="personalinput"
                />
                <TextField
                  id="standard-basic"
                  required
                  label="Category Name URL"
                  name="categories_Name_Url"
                  value={values.categories_Name_Url}
                  onChange={handleInputChange}
                  variant="standard"
                  className="personalinput"
                />

                <button
                  className=" btn  personalbtn"
                  type="submit"
                  style={{ marginLeft: "0" }}
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Personalinfromation;
