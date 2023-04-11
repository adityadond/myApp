import React, { useState } from "react";

const Section = ({ title, desc }) => {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <>
      <h3>{title}</h3>

      {isVisible ? (
        <button onClick={() => setIsVisible(false)}> Hide</button>
      ) : (
        <button onClick={() => setIsVisible(true)}> Show</button>
      )}

      {isVisible && <p>{desc}</p>}
    </>
  );
};

function Instamart() {
  return (
    <div>
      {/* <AboutInstamart/>
        <DetailsOfInstamart/>
        <TeamInstamart/>
        <Product/>
        <Carrers/> */}
      <Section
        title="AboutInstamart"
        desc={"This is about section of instamrt"}
      />
      <hr></hr>
      <Section
        title="TeamInstamart"
        desc={"This is TeamInstamart section of instamrt"}
      />
      <hr></hr>
      <Section title="Carrers" desc={"This is Carrers section of instamrt"} />
      <hr></hr>
    </div>
  );
}

export default Instamart;
