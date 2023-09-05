import React from "react";
import { useState } from "react";
import Login from "../../components/Login/Login";
import LoginModal from "../../components/Login/LoginModal";

export const LoginPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div>
      <h1>Please enter your login: </h1>
      {isModalOpen && (
        <LoginModal showModal={isModalOpen} setIsModalOpen={setIsModalOpen} />
      )}
      {<Login setIsModalOpen={setIsModalOpen} />}
    </div>
  );
};
