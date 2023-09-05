import { useEffect, useState } from "react";
import './index.css'

export const ProfileInfo = () => {
  const [profileData, setProfileData] = useState([]);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userInfo"));
    setProfileData([...profileData, ...userData]);
  }, []);

  console.log("profileData", profileData);
  return (
    <div>
      <h1>Profile info</h1>
      {!!profileData.length > 0 &&
        profileData.map(
          ({ id, name, username, email, address, phone, website, company }) => (
            <div key={id} className="profile_info_card">
              <span>Name: {name}</span>
              <span>Username: {username}</span>
              <span>Email: {email}</span>
              <span>
                Address:
                {`${address.street}, ${address.suite}, ${address.city},${address.zipcode}`}
              </span>
              <span>
                Geo: lat {address.geo.lat}, lng {address.geo.lng}
              </span>
              <span>Phone: {phone}</span>
              <span>Website {website}</span>
              <span>Company: {company.name}</span>
              <span>Catchphrase: {company.catchPhrase}</span>
              <span>bs: {company.bs}</span>
            </div>
          )
        )}
      
    </div>
  );
};
