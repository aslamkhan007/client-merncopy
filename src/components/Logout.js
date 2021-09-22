import React from "react";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";


const Logout = () => {
    const history = useHistory();
  useEffect(() => {
    fetch("/logout", {
      method: "GET",
      headers: {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      },
    })
      .then((res) => {
        history.push("/login", {
          replace: true,
        });
        if (!res.status === 200) {
          const error = new Error(res.error);
          throw error;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return <div>logout ka page</div>;
};

export default Logout;
