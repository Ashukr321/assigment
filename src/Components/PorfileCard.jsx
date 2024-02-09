import React, { useEffect } from "react";
import "./ProfileCard.css";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import Aos from 'aos';
import  'aos/dist/aos.css'
const ProfileCard = ({ image, fName, lName,location,email ,phone}) => {
  useEffect(()=>{
    Aos.init();
  })
  return (
    <div className="max-w-sm mx-auto mb-8">
      <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" style={{width:"380px"}} data-aos="zoom-in">
        <Link to="/">
          <img className="w-full h-auto rounded-t-lg" src={image} alt="img" />
        </Link>
        <div className="p-1 md:p-4"> {/* Adjusted padding for smaller screens */}
          <Link to="/">
            <h5 className="mb-2 text-xl md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {`${fName} ${lName}`}
            </h5>
          </Link>

          <Link to="/">
          <p className="mb-2 font-bold text-sm md:text-base  text-gray-700 dark:text-gray-400">
           email:{email}
          </p>
          </Link>


          <p className="mb-2 text-sm md:text-base font-bold text-gray-700 dark:text-gray-400">
           location:{location}
          </p>
          
          <p className="mb-2 text-sm md:text-base font-bold text-gray-700 dark:text-gray-400">
           phone:{phone}
          </p>

          <Link to="/">
            <Button fullWidth color="secondary"  variant="contained" size="small">
              Read more
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
