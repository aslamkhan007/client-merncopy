import React from 'react'
import { useEffect,useState }from 'react'

const Home = () => {
    const [username, setUserName]= useState("");
    const [show,setShow]= useState(false);

    const homePage = async () => {
        try {
          const res = await fetch("/getData", {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            }
     
          });
        
          const data = await res.json();
          console.log(data);
          setUserName(data);
          setShow(true)
         
        } catch (err) {
          console.log(err);
         
        }
      };

useEffect(() => {
    homePage();
}, [])

    return (
        <>
           <p className="pt-5"> Welcome</p>
           <p>{username.name}</p>
            <h1>{show?"Happy to see you Back": "We Are The MERN Devloper"} </h1>
        </>
    )
}

export default Home
