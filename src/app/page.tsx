import Image from "next/image";
//import styles from "./page.module.css";
import Header from "../components/Header/Header.jsx";
import Menu from "../components/Menu/Menu.jsx";
import Footer from "../components/Footer/Footer.jsx"
export default function Home() {
  return (
    <>
      <Header />
      <Menu />
        <Footer />
    </>
  );
}
