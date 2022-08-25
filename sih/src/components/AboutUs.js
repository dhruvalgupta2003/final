import React from "react";
import AboutUsImages from "./AboutUsImages";
import "../styles/AboutUs.css";

function AboutUs() {
  return (
    <div className="aboutUs">
      <h2 style={{ marginTop: "100px", marginBottom: "-130px" }}>
        Livingstone House Alumini Fund
      </h2>
      <div className="ImageContainer">
        <AboutUsImages
          src="https://media.discordapp.net/attachments/891025496601661504/1009873282499092530/unknown.png"
          styles={{
            position: "absolute",
            width: "410px",
            height: "270.52px",
            left: "475px",
            top: "331px",
          }}
        />
        <AboutUsImages
          src="https://media.discordapp.net/attachments/891025496601661504/1009874263232217158/unknown.png"
          styles={{
            position: "absolute",
            width: "410px",
            height: "270.52px",
            left: "52px",
            top: "542px",
          }}
        />
        <AboutUsImages
          src="https://media.discordapp.net/attachments/891025496601661504/1009874497152749578/unknown.png"
          styles={{
            position: "absolute",
            width: "410px",
            height: "270.52px",
            left: "898px",
            top: "402px",
          }}
        />
        <AboutUsImages
          src="https://media.discordapp.net/attachments/891025496601661504/1009874958081597580/unknown.png"
          styles={{
            position: "absolute",
            width: "410px",
            height: "270.52px",
            left: "475px",
            top: "612px",
          }}
          
        />
        
      </div>
      <h2>Our Story</h2>
      <div className="ourStory">
        The Alumni of Livingstone House of Achimota School, having seen the
        need, have established this scholarship scheme, the purpose of which is
        to provide scholarship grants for tertiary education in Ghanaian public
        universities to brilliant but needy students who have completed Achimota
        Senior Secondary School (Achimota School) and were officially assigned
        to, and resident in Livingstone House during their period of stay in the
        school.
      </div>
      <h1>Our Board Of Trustees</h1>
      <div className="details">
        <AboutUsImages
          src="https://media.discordapp.net/attachments/891025496601661504/1009875901464449165/unknown.png"
          styles={{
            position: "absolute",
            width: "250px",
            height: "250px",
            left: "128px",
            top: "1535px",
          }}
        />
        <div className="Allen">
          <h3>Allen Quaye</h3>
          <p>
            Allen Quaye Allen QUAYE (OAA 1988) is a product of University of
            Ghana and Leicester University. <br /> He is a marketer by training and
            work. He sells his service and skills to Groupe Nduom. He is
            interested in staff training and development, marketing and sales.
            He has proven sales experience across banking, Telecommunication and
            FMCG. His hobbies include reading, walking and local and
            international tourism. He enjoys watching football and his favourite
            football clubs are Asante Kotoko, Arsenal, Barcelona and Bayern
            Munich.
          </p>
        </div>
        <div className="details">
          <AboutUsImages
            src="https://media.discordapp.net/attachments/891025496601661504/1009876160404013106/unknown.png"
            styles={{
              position: "absolute",
              width: "250px",
              height: "250px",
              left: "601px",
              top: "1835px",
            }}
          />
          <div className="Michael">
            <h3>Michael Jojo Acquah</h3>
            <p>
              Michael Jojo Acquah Jojo Acquah, is an alumnus of Achimota School
              (Akora 1987) and a product of the famous Livingstone House. He is
              a lawyer and a Notary Public and is the senior partner of a
              corporate legal advisory practice and a company secretarial firm. <br />
              He also has business interests in the hospitality sector. Jojo has
              a passion for targeted charity initiatives and efforts to provide
              structured support to the needy.
            </p>
          </div>
        </div>

        <div className="details">
          <AboutUsImages
            src="./Images/Rect79.png"
            styles={{
              position: "absolute",
              width: "250px",
              height: "250px",
              left: "128px",
              top: "2135px",
            }}
          />
          <div className="Mark">
            <h3>Mark Brookman-Amissah</h3>
            <p>
              Mark Brookman-Amissah Mark Brookman-Amissah (OAA 1987) is a
              Geodetic Engineer by training and is currently a lecturer in Land
              Surveying/Geomatics at the Accra Technical University. He is very
              passionate about the intellectual and moral development of
              students and spends a lot of time outside the classroom mentoring
              students on how to develop their communication and project
              management skills. <br /> His hobbies include watching soccer and
              documentaries on world history. He loves jazz and reggae music and
              also spends some of his leisure time playing the drums.
            </p>
          </div>
        </div>
        <div className="details">
          <AboutUsImages
            src="./Images/Rect75.png"
            styles={{
              position: "absolute",
              width: "250px",
              height: "250px",
              left: "601px",
              top: "2435px",
              background: "#E5E5E5;",
              borderRadius: "200px",
            }}
          />
          <div className="Eric">
            <h3>Eric Adjormi Boateng</h3>
            <p>Eric Adjormi Boateng Bio Currently unavailable</p>
          </div>
        </div>
        <div className="details">
          <AboutUsImages
            src="./Images/Rect82.png"
            styles={{
              position: "absolute",
              width: "250px",
              height: "250px",
              left: "128px",
              top: "2735px",
              background: "#E5E5E5;",
              borderRadius: "200px",
            }}
          />
          <div className="Duke">
            <h3>Duke Essiam</h3>
            <p>Duke Essiam Bio Currently unavailable</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
