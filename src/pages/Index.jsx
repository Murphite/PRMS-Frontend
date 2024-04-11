import HeroSection from "../components/HeroSection";
import JoinUsSection from "../components/JoinUsSection";
import KeyFeatures from "../components/KeyFeatures";
import SubscribeForm from "../components/SubscribeForm";
import WhyUsSection from "../components/WhyUsSection";
import NavBar from "../components/GuestNavbar.jsx";
import Footer from "../components/Footer";

const Index = () => {
    return (
        <div>
            <NavBar />
            <HeroSection />
            <KeyFeatures />
            <WhyUsSection />
            <JoinUsSection />
            <SubscribeForm />
            <Footer />
        </div>
    );
};

export default Index;
