import Features from "../../../components/Features";
import HowItWorks from "../../../components/HowItWorks";
import SiteStatus from "../../../components/SiteStatus";
import TopEarners from "../../../components/TopEarners";
import Banner from "../Banner/Banner";
import Reviews from "./Reviews/Reviews";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <SiteStatus></SiteStatus>
            <Features></Features>
            <HowItWorks></HowItWorks>
            <TopEarners></TopEarners>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;