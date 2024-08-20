import HeadLineCards from "../components/HeadLineCards";
import Hero from "../components/Hero";
import NavBar from "../components/HomeNavBar";
import Promotions from "../components/Promotions";

const Home = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <HeadLineCards />
      <Promotions />
    </div>
  );
};
export default Home;
