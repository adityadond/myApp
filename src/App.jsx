import "./App.css";
import Header from "./assets/components/Header";
import Body from "./assets/components/Body";
import Footer from "./assets/components/Footer";

const AppLayout = () => {
  return (
    /*
 #Header:
    - Logo 
    -ListItem
  #Body
    -Search bar
    -restaurnt list
    -Card: 
    -Image
    -name
    -rating
    -cuisine
 # Footer
  * */
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

export default AppLayout;
