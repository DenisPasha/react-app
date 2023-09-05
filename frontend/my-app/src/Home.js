import React from "react";
import "./App.css";
import Chipbar from "./Chipbar";
import OrgazineButton from "./OrgazineButton";
import SocialMedia from "./SocialMedia";

export default function Home() {
  return (
    <div>
      <Chipbar />
      <OrgazineButton />
      <SocialMedia/>
    </div>
  );
}
