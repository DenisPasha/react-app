import React from "react";
import Navbar from "./Navbar";
import "./App.css";
import Chipbar from "./Chipbar";
import OrgazineButton from "./OrgazineButton";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Chipbar />
      <OrgazineButton />
    </div>
  );
}
