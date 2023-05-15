import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { url } from "../App";

export default function Logout() {
  const navigate = useNavigate();

  const callLogoutPage = async () => {
    try {
      let res = await fetch(`${url}/logout`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const data = await res.json();
      if (data.message) {
        localStorage.clear();
        navigate("/signin");
        let timeOut = setTimeout(() => {
          toast.success(data.message);
        }, 500);
        return () => clearTimeout(timeOut);
      }
      if (data.error) {
        navigate("/");
      }
    } catch (error) {
      console.log("logout page", error);
    }
  };

  useEffect(() => {
    let timoOut = setTimeout(() => {
      callLogoutPage();
    }, 200);
    return () => clearTimeout(timoOut);
  }, []);

  return <Toaster position="top-center" reverseOrder={false} />;
}
