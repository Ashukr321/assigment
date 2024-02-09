// src/App.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PorfileCard from './PorfileCard';
import Loading from './Loading';

const Card = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://randomuser.me/api/?page=1&results=15&seed=abc'
        );
        setUser(response.data.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex  flex-wrap gap-6 p-10 justify-center items-center h-screen">
      {/* If user is null (data is still loading), show the Loading component */}
      {!user ? (
        <Loading />
      ) : (
        // Data is loaded, map through user array and render PorfileCard component
        user.map((userData, index) => (
          <PorfileCard
            key={index}
            image={userData.picture.large}
            fName={userData.name.first}
            lName={userData.name.last}
            location={userData.location.street.name}
            email={userData.email}
            phone={userData.phone}
          />
        ))
      )}
    </div>
  );
};

export default Card;
