import React, { useEffect, useState } from "react";
import "../CSS/Maindashboard.css";
import Navbar from "./Navbar";
import axios from "axios";
import { Autocomplete, Button, Checkbox, FormControl, InputLabel, MenuItem, TextField } from "@mui/material";

import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;
const ManageVendorAdvertisementPermission = () => {

  const page_names = ['Home_Page', 'Categories_Page', "Detailed_News_Page"]
  const page_location = ['Topbar', 'Below_Breaking_News', 'Footer']

  const [pagesName, setPagesName] = useState([]);
  const [locationName, setLocationName] = useState([]);

  const [vendorId, setVendorId] = useState('');

  const [vendorList, setVendorList] = useState();
  const getVendorList = async () => {
    try {
      const response = await axios.get(
        `http://174.138.101.222:8080/VendorList`
      );
      setVendorList(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const vendorAdPermission = async () => {
    const data = {
      page_name: [...pagesName],
      page_location: [...locationName]
    }
    console.log(data)
    try {
      const response = await axios.post(`http://174.138.101.222:8080/${vendorId}/vendorPageNameLocations`, data
      )
      console.log(response)
      setLocationName([])
      setPagesName([])
      setVendorId('')
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getVendorList();
  }, []);
  return (
    <>
      <div className="maindashboard">
        <div className="navbarbox">
          <Navbar />
        </div>
        <div className="dashbox ">
          <p className="dashboardtext">Manage Vendor Advertisement Permission</p>
          <form onSubmit={(e) => {
            e.preventDefault();
            vendorAdPermission()
          }}>
            <TextField
              select
              className="mb-3"
              label="Registered Vendors"
              fullWidth
              required
              name="Registered_Vendors"
              value={vendorId}
              onChange={(e) => {
                setVendorId(e.target.value)
              }}
            >
              {vendorList?.map((item, index) => {
                return (
                  <MenuItem key={index} value={item._id}>
                    {item.publication_name}
                  </MenuItem>
                );
              })}
            </TextField>
            <TextField
              select
              className="mb-3"
              label="Select Template"
              fullWidth
              required
              defaultValue={'Template_1'}

            >
              <MenuItem value='Template_1'>Template 1</MenuItem>
              <MenuItem value='Template_2'>Template 2</MenuItem>
              <MenuItem value='Template_3'>Template 3</MenuItem>
              <MenuItem value='Template_4'>Template 4</MenuItem>
              <MenuItem value='Template_5'>Template 5</MenuItem>
            </TextField>

            <Autocomplete
              multiple
              className="mb-3"
              options={page_names}
              getOptionLabel={(option) => option}
              value={pagesName}
              onChange={(event, newValue) => {
                setPagesName([...newValue]);
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="standard"
                  label="Select Page"
                  placeholder="Add Page"
                />
              )}
            />

            <Autocomplete
              multiple
              className="mb-3"
              options={page_location}
              getOptionLabel={(option) => option}
              value={locationName}
              onChange={(event, newValue) => {
                setLocationName([...newValue]);
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="standard"
                  label="Select Location"
                  placeholder="Add Location"
                />
              )}
            />

            <Button type="submit" variant="contained">Submit</Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ManageVendorAdvertisementPermission;
