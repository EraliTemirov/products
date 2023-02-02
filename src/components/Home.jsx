import React, { useState } from "react";

const Home = () => {
  const [theme, setTheme] = useState("light");

  function handleChange() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <div className={theme}>
      <button onClick={handleChange} className="toggle-btn">
        Toogle
      </button>
      <div>
        <h2 className="kirish-h2">Saytga hush kelibsiz </h2>
      </div>
    </div>
  );
};

export default Home;
