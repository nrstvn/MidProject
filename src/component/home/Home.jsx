import React, { useEffect, useState } from "react";
import "./home.css";
import { getDatabase, onValue, ref } from "firebase/database";

const Home = () => {
  const [Title, setTitle] = useState("");
  const [Skill, setSkill] = useState("");
  const [Image, setImage] = useState("");

  useEffect(() => {
    const db = getDatabase();
    const homeRef = ref(db, "home/");
    onValue(homeRef, (snapshot) => {
      const data = snapshot.val();
      setTitle(data.Title);
      setSkill(data.Skill);
      setImage(data.Image);
    });
  }, [];)
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6">
          <div className="jumbotron d-flex align-items-center px-5">
            <div>
              <h1 className="display-1">About me</h1>

              <hr className="my-1" />
              <p>
                I am determined to learn new things/work to pursue a good
                career in my self-development. I am a good person, disciplined,
                polite and respectful to everyone. I can work professionally
              </p>
              <h1 className="display-1">Skills</h1>
              <hr className="my-1" />
              <p>
              Microsoft Office (Word,
              Excel, Power Point)
              Figma
              Trello
              Dev C++ (*.cpp & *.c)
              Unity
              Blender 3D
              Photoshop
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="jumbotron d-flex align-items-center px-5">
            <div className="ml-3">
              <div
                style={{
                  height: "450px",
                  overflow: "hidden",
                  border: "3px solid #ddd",
                  borderRadius: "10px", //
                }}
              >
                <img
                  src="public/img/norris.jpg"
                  alt="Your Image"
                  className="img-fluid"
                  style={{ height: "100%", objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
