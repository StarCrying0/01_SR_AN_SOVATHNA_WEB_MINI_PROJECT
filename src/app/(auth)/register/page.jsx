"use client";
import Image from "next/image";
import handleRegister from "@/app/action/registerAction";
function RegisterPage() {
  return (
    <>
      <div className="w-[80%] mx-auto">
        <div className="flex items-center gap-4 mt-[180px] ml-[100px] w-full">
          <i className="bx bx-circle text-blue-500 text-2xl"></i>
          <h1 className="font-bold text-2xl text-black">My-Office</h1>
        </div>

        <div className="flex ml-[100px] mt-10 w-full">
          <form action={handleRegister} className="w-[60%]">
            <div className="flex gap-5">
              <div className="flex flex-col w-[40%] gap-2">
                <label htmlFor="">First Name: </label>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  placeholder="Enter your name"
                  className="border py-2 px-4 rounded-lg w-full focus:outline-blue-700"
                  required
                />
              </div>
              <div className="flex flex-col w-[40%] gap-2">
                <label htmlFor="">Last Name: </label>
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  placeholder="Enter your name"
                  className="border py-2 px-4 rounded-lg w-full focus:outline-blue-700"
                  required
                />
              </div>
            </div>

            <div className="flex gap-5 mt-5">
              <div className="flex flex-col w-[40%] gap-2">
                <label htmlFor="">Email: </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="info@xyz.com"
                  className="border py-2 px-4 rounded-lg w-full focus:outline-blue-700"
                  required
                />
              </div>
              <div className="flex flex-col w-[40%] gap-2">
                <label htmlFor="">Gender: </label>
                <select
                  name="gender"
                  id="gender"
                  className="border py-2 px-4 rounded-lg w-full focus:outline-blue-700"
                  required
                >
                  <option value="choice" disabled selected>
                    Choose Your Gender
                  </option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
            </div>

            <div className="flex gap-5 mt-5">
              <div className="flex flex-col w-[40%] gap-2">
                <label htmlFor="">Password: </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="***********"
                  className="border py-2 px-4 rounded-lg w-full focus:outline-blue-700"
                  required
                />
              </div>
              <div className="flex flex-col w-[40%] gap-2">
                <label htmlFor="">Confirm Password: </label>
                <input
                  type="password"
                  name="cPassword"
                  id="cPassword"
                  placeholder="***********"
                  className="border py-2 px-4 rounded-lg w-full focus:outline-blue-700"
                  required
                />
              </div>
            </div>
            <button className="bg-blue-700 text-white py-3 px-6 text-sm rounded-lg mt-10 hover:bg-black">
              Sign Up
            </button>
          </form>
          <Image
            width={100}
            height={100}
            src="/assets/icons/sign-up.svg"
            className="w-[25%]"
          ></Image>
        </div>
      </div>
    </>
  );
}

export default RegisterPage;
