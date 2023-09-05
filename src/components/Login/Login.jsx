import { useContext, useState } from "react";
import s from './Login.module.css'
import { useForm, handleSubmit } from "react-hook-form";
import { Context } from "../../сontext";
import { is } from "@babel/types";

 function Login({setIsModalOpen}) {
    const {setUserInfo,setIsProfilPage} = useContext(Context)
   

    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm({
      mode: "onBlur",
    });

    const fetchUser = async(url)=>{
        try {  
        const response = await fetch(url)
        const userData = await response.json()
            if(userData && userData.length > 0){
                console.log(userData.length)
                setUserInfo(userData)
                setIsProfilPage(true)
            }else{
                setIsModalOpen(true)
            }

        return userData
        } catch (error) {
            throw new Error(error)
            
        }
        
    }
  
    function onSubmit(data) {
    const {username,email} = data
    fetchUser(`https://jsonplaceholder.typicode.com/users?`+ new URLSearchParams({
        username, 
        email
    }))

    }
    
    return (
      <div className={s.container}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            placeholder="Username"
            {...register("username",{
                message: " Такого пользователя не существует"
            })}
            style={{ borderColor: errors?.userName && "red" }}
          />
          {errors?.userName && <i>{errors?.userName?.message}</i>}
          <input
            placeholder="Email"
            {...register("email", {
              required: "Invalid email address",
            })}
            style={{ borderColor: errors?.mail && "red" }}
          />
          {errors?.mail && <i>{errors?.mail.message}</i>}

          <input type="submit"  value="войти"/>
        </form>
      </div>
    );
  }

  export default Login;