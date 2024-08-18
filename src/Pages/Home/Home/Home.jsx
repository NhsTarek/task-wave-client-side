import Features from "../../../components/Features";
import SiteStatus from "../../../components/SiteStatus";
import Banner from "../Banner/Banner";
import Reviews from "./Reviews/Reviews";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <SiteStatus></SiteStatus>
            <Features></Features>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;