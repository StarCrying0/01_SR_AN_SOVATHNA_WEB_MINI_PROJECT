"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { signIn } from "next-auth/react";
function LoginPage() {
  const router = useRouter();
  async function handleLogin(userinfo) {
    console.log(userinfo)
    const newUserInfo = {
      email: userinfo.get("email"),
      password: userinfo.get("password"),
    };
    const res = await signIn("credentials", {
      redirect: false,
      ...newUserInfo,
    });
    if (res?.status == 200) {
      router.push("/todo-list");
    } else {
      const wrongEmail = document.getElementById("wrongEmail");
      const email = document.getElementById("email");
      email.className = "border py-2 px-4 rounded-lg w-full border-red-800";
      wrongEmail.innerHTML = "Wrong Email";
      const wrongPassword = document.getElementById("wrongPassword");
      const password = document.getElementById("password");
      password.className =
        "border py-2 pl-4 pr-10 rounded-lg w-full border-red-800";
        wrongPassword.innerHTML = "Wrong Password";
    }
  }

  function showPassword() {
    const passwordInput = document.getElementById("password");
    const eyeIcon = document.getElementById("eyeIcon");
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      eyeIcon.className =
        "bx bx-show text-xl absolute top-3 right-4 text-gray-400";
    } else {
      passwordInput.type = "password";
      eyeIcon.className =
        "bx bx-hide text-xl absolute top-3 right-4 text-gray-400";
    }
  }

  return (
    <>
      <div className="w-[80%] mx-auto">
        <div className="flex items-center gap-4 mt-[100px] ml-[100px]">
          <i className="bx bx-circle text-blue-500 text-2xl"></i>
          <h1 className="font-bold text-2xl text-black">My-Office</h1>
        </div>

        <div className="ml-[220px] w-[80%] flex gap-36">
          <div className="w-[45%] pt-10">
            <form action={handleLogin} className="flex flex-col w-full gap-5">
              <label htmlFor="" className="text-xl font-semibold">
                Login
              </label>
              <div className="relative flex items-center">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  className="border py-2 px-4 rounded-lg w-full focus:outline-blue-700"
                  required
                />
                <div className="absolute right-[-102px] text-red-800" id="wrongEmail"></div>
              </div>
              <div className="relative flex items-center">
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  className="border py-2 pl-4 pr-10 rounded-lg w-full focus:outline-blue-700"
                  required
                />
                <button onClick={showPassword} type="button">
                  <i
                    className="bx bx-hide text-xl absolute top-3 right-4 text-gray-400"
                    id="eyeIcon"
                  ></i>
                </button>
                <div className="absolute right-[-135px] text-red-800" id="wrongPassword"></div>
              </div>
              <button className="text-white bg-blue-800 p-2 rounded-lg">
                Login
              </button>
            </form>
            <div className="mt-5 flex gap-1">
              <p className="text-gray-400 text-md">Didn't have account yet?</p>
              <Link href="/register" className="text-blue-600 hover:underline">
                Register
              </Link>
            </div>
            <div className="mt-10 w-full text-gray-400">
              <p className="w-full grid grid-cols-3 text-center items-center after:border-t-2 before:h-[2px] before:bg-gray-400 before:block before:w-full after:h-[2px] after:block after:w-full after:border-gray-400">
                Continue with
              </p>
            </div>
            <div>
              <button className="border-2 w-full mt-8 p-3 rounded-lg hover:bg-blue-600 hover:text-white font-semibold text-gray-400 flex justify-center items-center gap-3">
                <Image src="/image/google.png" width={20} height={10}></Image>
                Google
              </button>
            </div>
          </div>
          <div className="w-[55%]">
            <Image src="/assets/icons/login.svg" width={350} height={100} />
          </div>
        </div>

        <div className="flex items-center gap-1 ml-[100px] text-gray-400 font-semibold">
          <i className="bx bx-copyright"></i>
          <p className="text-sm">2024 My office.All Rights Reserved.</p>
        </div>
      </div>
    </>
  );
}
export default LoginPage;
