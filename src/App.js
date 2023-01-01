import "./index.css";
import Header from "./components/Header";
import SetupTournament from "./components/SetupTournament";
import RunTournament from "./components/RunTournament";
import { useEffect, useState } from "react";

function App() {
  return (
    <>
      <div
        style={{
          width: "60%",
          margin: "0 auto",
          height: "97vh",
          marginTop: "10px",
          padding: "15px",
          backgroundColor: "white",
          borderRadius: "10px",
        }}
      >
        <Header />
        <SetupTournament />
        {/* <RunTournament /> */}
      </div>
    </>
  );
}

export default App;
