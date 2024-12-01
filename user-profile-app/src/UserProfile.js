import React, { useState } from 'react';

const UserProfile = () => {
    const [userProfile, setUserProfile] = useState({
        name: 'Susan Smith',
        email: 'susan.smith@gmail.com',
        address: {
            street: '123 Main Street',
            city: 'Anytown',
            country: 'USA'
        }
    });

    const updateAddress = (street, city, country) => {
        setUserProfile(prevProfile => ({
            ...prevProfile,
            address: {
                ...prevProfile.address,
                street,
                city,
                country
            }
        }));
    };

    return (
        <div>
          <h1>User Profile</h1>
          <div>
            <label>
              Street:
              <input type="text" onChange={(e) => updateAddress(e.target.value, userProfile.address.city, userProfile.address.country)} />
            </label>
          </div>
          <div>
            <label>
              City:
              <input type="text" onChange={(e) => updateAddress(userProfile.address.street, e.target.value, userProfile.address.country)} />
            </label>
          </div>
          <div>
            <label>
              Country:
              <input type="text" onChange={(e) => updateAddress(userProfile.address.street, userProfile.address.city, e.target.value)} />
            </label>
          </div>
          <button onClick={() => updateAddress(userProfile.address.street, userProfile.address.city, userProfile.address.country)}>Update Address</button>
          <h2>Current Profile</h2>
          <p>Name: {userProfile.name}</p>
          <p>Email: {userProfile.email}</p>
          <p>Address: {userProfile.address.street}, {userProfile.address.city}, {userProfile.address.country}</p>
        </div>
    );
};

export default UserProfile;