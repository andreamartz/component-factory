import Image from "next/image";
import Navbar from "./components/Navbar/Navbar";
import Blog from "./components/Blog/Blog";
import UserProfile from "./components/UserProfile/UserProfile";
import Inputs from "./components/Inputs/Inputs";
import Buttons from "./components/Buttons/Buttons";
import Menu from "./components/Menu/Menu";
import BusinessCard from "./components/BusinessCard/BusinessCard";
import TodoList from "./components/TodoList/TodoList";
import { MoodBoard } from "./components/MoodBoard/MoodBoard";
import QRCodeCard from "./components/QRCodeCard/QRCodeCard";

export default function Home() {
  return (
    <>
      {/* <Navbar /> */}
      {/* <Blog /> */}
      {/* <UserProfile /> */}
      {/* <Inputs /> */}
      {/* <Buttons /> */}
      {/* <Menu /> */}
      {/* <BusinessCard /> */}
      {/* <TodoList /> */}
      {/* <MoodBoard /> */}
      <QRCodeCard image="./QRCodeCard-image-qr-code.png" title="Improve your front-end skills by building projects" description="Scan the QR code to visit Frontend Mentor and take your coding skills to the next level"/>
    </>
  );
}
