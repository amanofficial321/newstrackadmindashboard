import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import "../CSS/Personalinformation.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Navbar from "./Navbar";
import axios from "axios";

const Personalinfromation = () => {
  const initialValues = {
    tag_name: "",
  };

  const [values, setValues] = useState(initialValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };
  const [refresh, setRefresh] = useState(0);
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://174.138.101.222:8080/mastertag",
        values
      );
      alert(response.statusText);
      setRefresh((prev) => prev + 1);
      setValues({
        tag_name: "",
      });
    } catch (error) {
      alert(error.request.responseText);
    }
  };

  const [tags, setTags] = useState();
  useEffect(() => {
    fetch("http://174.138.101.222:8080/getmastertag").then((result) => {
      result.json().then((resp) => {
        setTags(resp.data);
        console.log(" tags called");
      });
    });
  }, [refresh]);

  return (
    <>
      <div className="rolebasedcontainer">
        <div className="rolebasedbox1">
          <Navbar />
        </div>
        <div className="rolebasedbox2">
          <div className="rolebasedheader">
            <p className="rolebasedheading">
              <ArrowBackIcon /> TAGS
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="personalcontainer">
              <div className="row">
                <div className="formbox col-sm-12 col-md-6 ps-3 height-fit-content">
                  <h1 style={{ fontSize: "2rem", fontFamily: "ubuntu" }}>
                    Create Tag
                  </h1>
                  <TextField
                    id="standard-basic"
                    label="Tag Name"
                    required
                    name="tag_name"
                    value={values.tag_name}
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
                <div className=" col-sm-12 col-md-6 height-fit-content">
                  <h1
                    style={{ fontSize: "2rem", fontFamily: "ubuntu" }}
                    className="text-center"
                  >
                    Available Tags
                  </h1>
                  {tags &&
                    tags.map((item) => {
                      return <p key={item._id}>{item.tag_name}</p>;
                    })}
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Personalinfromation;
