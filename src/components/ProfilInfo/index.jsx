import { useEffect, useState } from "react";
import { UserDataField, UserEditButton } from "./utils";
import "./index.css";

const initialState = {
    name: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
      geo: "",
    },
    phone: "",
    website: "",
    company: {
      name: "",
      catchPhrase: "",
      bs: "",
    },
  
}

export const ProfileInfo = () => {
  const [profileData, setProfileData] = useState({});
  const [isEditing, setIsEditing] = useState();

  const [name, setName] = useState("");
  const [street, setStreet] = useState("");
  const [suite, setSuite] = useState("");
  const [city, setCity] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [catchPhrase, setCatchPhrase] = useState("");
  const [bs, setBs] = useState("");

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userInfo"))[0];

    setProfileData(userData);
  }, []);

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const onUserUpdate = (e) => {
    e.preventDefault();
    const updatedUser = {
      name: name || profileData.name,
      address: {
        street: street || profileData.address.street,
        suite: suite || profileData.address.suite,
        city: city || profileData.address.city,
        zipcode: zipcode || profileData.address.zipcode,
        geo: profileData.address.geo,
      },
      phone: phone || profileData.phone,
      website: website || profileData.website,
      company: {
        name: companyName || profileData.company.name,
        catchPhrase: catchPhrase || profileData.company.catchPhrase,
        bs: bs || profileData.company.bs,
      },
    };
    setProfileData({ ...profileData, ...updatedUser });
    setIsEditing(!isEditing);
  
  };

  return (
    <div className="profile_info_page" >
      <h1>Profile info</h1>

      {isEditing ? (
        <form className="profile_form">
          <div className="profile_form_fields">
          <div className="profile_field_edit"> 
            <span>Name</span>
            <UserDataField value={name} setEditValue={setName}/>
          </div>
          <div className="profile_field_edit">
            <span>Street </span>
            <UserDataField value={street} setEditValue={setStreet}/>
          </div>
           <div className="profile_field_edit">
            <span>Suite </span>
            <UserDataField value={suite} setEditValue={setSuite}/>
          </div>
          <div className="profile_field_edit">
            <span>City </span>
            <UserDataField value={city} setEditValue={setCity}/>
          </div>
          <div className="profile_field_edit">
            <span>Zipcode</span>
            <UserDataField value={zipcode} setEditValue={setZipcode}/>
          </div>

          <div className="profile_field_edit">
            <span>Phone</span>
            <UserDataField value={phone} setEditValue={setPhone}/>
          </div>

          <div className="profile_field_edit">
            <span>Website</span>
            <UserDataField value={website} setEditValue={setWebsite}/>
          </div>

          <div className="profile_field_edit">
            <span>Company</span>
            <UserDataField value={companyName} setEditValue={setCompanyName}/>
          </div>

          <div className="profile_field_edit">
            <span>Catchphrase</span>
            <UserDataField value={catchPhrase} setEditValue={setCatchPhrase}/>
          </div>

          <div className="profile_field_edit">
            <span>BS</span>
            <UserDataField value={bs} setEditValue={setBs}/>
          </div>
          </div>
          <button type="submit" onClick={onUserUpdate}>
            Save
          </button>
        </form>
      ) : (
        <div className="profile_info_card">
          <div>
            <span>Username: </span>
            <span>{profileData.username}</span>
          </div>
          <div>
            <span>Email: </span>
            <span>{profileData.email}</span>
          </div>
          <div>
            <span> Name:</span>
            <span> {profileData.name}</span>
          </div>
          <div>
            <span>Street:</span>
            <span> {profileData?.address?.street}</span>
          </div>
          <div>
            <span>Suite:</span>
            <span> {profileData?.address?.suite}</span>
          </div>
          <div>
            <span>City:</span>
            <span> {profileData?.address?.city}</span>
          </div>
          <div>
            <span>Zipcode:</span>
            <span> {profileData?.address?.zipcode}</span>
          </div>

          <div>
            <span>Geo:</span>
            <span>
              {" "}
              {`lat ${profileData?.address?.geo.lat}, lng ${profileData?.address?.geo.lng}`}
            </span>
          </div>

          <div>
            <span>Phone:</span>
            <span> {profileData.phone}</span>
          </div>

          <div>
            <span>Website:</span>
            <span> {profileData.website}</span>
          </div>

          <div>
            <span>Company:</span>
            <span> {profileData?.company?.name}</span>
          </div>

          <div>
            <span>Catchphrase:</span>
            <span> {profileData?.company?.catchPhrase}</span>
          </div>
          <div>
            <span>Bs:</span>
            <span> {profileData?.company?.bs}</span>
          </div>

          <UserEditButton value="Edit" handleEdit={handleEdit} />
        </div>
      )}
    </div>
  );
};
