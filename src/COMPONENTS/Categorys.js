import React, { useEffect, useState } from "react";
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

  const [refresh, setrefresh] = useState(0);

  const handleSubmit = async (e, id) => {
    e.preventDefault();
    console.log("submit clicked");
    if (!showUpdateBtn) {
      try {
        const response = await axios.post(
          "http://174.138.101.222:8080/masterCategories",
          values
        );
        alert(response.statusText);
        setrefresh((prev) => prev + 1);
        setValues({
          categories_Name_Hindi: "",
          categories_Name_English: "",
          categories_Name_Url: "",
        });
      } catch (error) {
        alert(JSON.parse(error.request.responseText).message);
      }
    } else {
      alert("Update Btn clicked");
    }
  };

  const [category, setCategory] = useState([]);
  useEffect(() => {
    fetch("http://174.138.101.222:8080/getmastercategories").then((result) => {
      result.json().then((resp) => {
        setCategory(resp.data);
        console.log("get category");
      });
    });
  }, [refresh]);

  const handleDelete = async (id) => {
    console.log(id);
    try {
      const response = await axios.delete(
        `http://174.138.101.222:8080/${id}/deleteCategories`
      );
      console.log(response);
      setrefresh((prev) => prev + 1);
    } catch (error) {
      console.log(error);
    }
  };

  const [showUpdateBtn, setShowUpdateBtn] = useState(false);

  const handleUpdate = async (id) => {
    console.log(id);
    const response = await axios.put(
      `http://174.138.101.222:8080/${id}/deleteCategories`
    );
    console.log(response);
    setrefresh((prev) => prev + 1);
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

          <div className="personalcontainer">
            <div className="row">
              <div className="text-center col-sm-12 col-md-6  height-fit-content">
                <h1 style={{ fontSize: "2rem", fontFamily: "ubuntu" }}>
                  Create Category
                </h1>
                <form onSubmit={handleSubmit} className="formbox ps-3">
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
                  {!showUpdateBtn && (
                    <button
                      className=" btn  personalbtn"
                      type="submit"
                      style={{ marginLeft: "0" }}
                    >
                      Submit
                    </button>
                  )}

                  {showUpdateBtn && (
                    <button
                      className=" btn  personalbtn"
                      type="submit"
                      style={{ marginLeft: "0" }}
                    >
                      Update
                    </button>
                  )}
                </form>
              </div>
              <div className=" col-sm-12 col-md-6 height-fit-content">
                <h1
                  style={{ fontSize: "2rem", fontFamily: "ubuntu" }}
                  className="text-center"
                >
                  Available Categories
                </h1>
                {category &&
                  category.map((item) => {
                    return (
                      <p key={item._id}>
                        {item.categories_Name_English}
                        <span>
                          <button
                            onClick={() => {
                              handleDelete(item._id);
                              console.log(item._id);
                            }}
                          >
                            Delete
                          </button>
                        </span>
                        <span>
                          <button
                            onClick={() => {
                              setShowUpdateBtn((prev) => !prev);
                              setValues({
                                categories_Name_Hindi:
                                  item.categories_Name_Hindi,
                                categories_Name_English:
                                  item.categories_Name_English,
                                categories_Name_Url: item.categories_Name_Url,
                              });
                            }}
                          >
                            Update
                          </button>
                        </span>
                      </p>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Personalinfromation;
