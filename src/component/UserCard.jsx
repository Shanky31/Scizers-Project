import React from 'react';
import { getColorHexCode } from './color'; // Import the getColorHexCode function

function UserCard({ user }) {
  const backgroundColor = getColorHexCode(user.hair_color);
  const textColor = backgroundColor === '#000000' ? 'text-white' : 'text-black';

  return (
    <div style={{ backgroundColor }} className={`user-card ${textColor} p-5 rounded-lg shadow-md`}>
      <img src={`https://picsum.photos/200/300?random=${user.name}`} alt="User" className="mb-2 p-12 border rounded-full overflow-hidden " />
      <h2 className="text-lg font-semibold">{user.name}</h2>
      <p>Hair Color: {user.hair_color}</p>
      <p>Skin Color: {user.skin_color}</p>
      <p>Gender: {user.gender}</p>
      <p>Count of Vehicles: {user.vehicles.length}</p>
    </div>
  );
}

export default UserCard;
