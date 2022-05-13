import Header from "../components/Header/Header";
import Footer from "../components/Footer/FooterBar/Footer";
import Contact from "../components/Footer/ContactBar/ContactBar"
import Banner from "../components/Banner/Banner";
import Category from "../components/Category/Main/Category";
import Main from "../components/Main/Main";
const Home = () => {
  return (
    <div>
      <Header />
      <Category/>
      <Main/>
      <Banner />
      <Contact />
      <Footer />
    </div>
  );
};
export default Home;
