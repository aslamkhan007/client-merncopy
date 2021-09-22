import React from "react";
import { useEffect,useState } from "react";
import { useHistory } from "react-router-dom";

const About = () => {
  const [data,setData] = useState({});
  const history = useHistory();


  const callAboutPage = async () => {
    try {
      const res = await fetch("/about", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      // const data = res;
      //data = "a";
      const data = await res.json();
      console.log(data);
      setData(data);
      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
      history.push("/login");
    }
  };

  useEffect(() => {
    callAboutPage();
  }, []);
  return (
    <>
      <div>
        <form method="GET">
          <div className="row">
            <div className="col-md-4">thapa</div>
            <div className="col-md-6">
              <h5>{data.name}</h5>
              <h6>{data.work}</h6>
              <p>
                rank:<span>1/10</span>
              </p>

              <ul className="nav nav-tabs">
                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="home-tab"
                    data-toggle="tab"
                    href="#home"
                    role="tab"
                    aria-controls="home"
                  >
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link active "
                    id="profile-tab"
                    data-toggle="tab"
                    href="#profile"
                    role="tab"
                    aria-controls="profile"
                  >
                    Timeline
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-2">
              <input
                type="submit"
                className="profile-edit-btn"
                name="btnAddMore"
                value="Edit"
              ></input>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="profile-work">
                <p> Work Link</p>
                <a
                  href="https://www.youtube.com/c/Ihatetomatoes/playlists"
                  target="_thapa"
                >
                  youtube
                </a>
                <br />
                <a
                  href="https://www.youtube.com/c/Ihatetomatoes/playlists"
                  target="_thapa"
                >
                  git
                </a>
                <br />
                <a
                  href="https://www.youtube.com/c/Ihatetomatoes/playlists"
                  target="_thapa"
                >
                  insta
                </a>
                <br />
                <a
                  href="https://www.youtube.com/c/Ihatetomatoes/playlists"
                  target="_thapa"
                >
                  softwere
                </a>
                <br />
              </div>
            </div>
            <div className="col-md-8 pl-5 about-info">
              <div className="tab-content-profile-tab" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="home"
                  role="tabpanal"
                  aria-label="home-tab"
                >
                  <div className="row">
                    <div className="col-md-6">
                      <label>User-ID</label>
                    </div>
                    <div className="col-md-6">
                      <p>{data._id}</p>
                    </div>
                  </div>
                  <div className="row" mt-3>
                    <div className="col-md-6">
                      <label>phone</label>
                    </div>
                    <div className="col-md-6">
                      <p>{data.phone}</p>
                    </div>
                  </div>
                  <div className="row" mt-3>
                    <div className="col-md-6">
                      <label>work</label>
                    </div>
                    <div className="col-md-6">
                      <p>{data.work}</p>
                    </div>
                  </div>
                  <div className="row" mt-3>
                    <div className="col-md-6">
                      <label>email</label>
                    </div>
                    <div className="col-md-6">
                      <p>{data.email}</p>
                    </div>
                  </div>
                </div>
                <div className="tab-content-profile-tab" id="myTabContent">
                  <div
                    className="tab-pane fade show active"
                    id="profile"
                    role="tabpanal"
                    aria-aria-labelledby="profile-tab"
                  >
                    <div className="row">
                      <div className="col-md-6">
                        <label>name</label>
                      </div>
                      <div className="col-md-6">
                        <p>{data.name}</p>
                      </div>
                      
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>experience</label>
                      </div>
                      <div className="col-md-6">
                        <p>{data.work}</p>
                      </div>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default About;
