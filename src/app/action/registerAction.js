"use server"

import { registerService } from "../services/auth.service";

async function handleRegister(userInfo) {
    
    if (userInfo.get("password") !== userInfo.get("cPassword")) {
      const password = document.getElementById("password");
      const cPassword = document.getElementById("cPassword");
      cPassword.className = "border py-2 px-4 rounded-lg w-full border-red-800";
      password.className = "border py-2 px-4 rounded-lg w-full border-red-800";
      alert("Passwords do not match");
      return;
    }
    const newUserInfo = {
      firstname: userInfo.get("firstName"),
      lastname: userInfo.get("lastName"),
      gender: userInfo.get("gender"),
      profile_url: "string",
      email: userInfo.get("email"),
      password: userInfo.get("password"),
    };
    await registerService(newUserInfo);
  }
  export default handleRegister;