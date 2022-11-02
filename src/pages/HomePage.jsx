import AboutSection from "components/AboutSection";
import AdSection from "components/AdSection";
import Advantages from "components/Advantages";
import Newsletter from "components/Newsletter";

const HomePage = ({offers}) => {
    return (
        <>
            <AdSection offers={offers}/>
            <main>
                <Advantages />
                <AboutSection />
            </main>
            <Newsletter />
        </>
    );
}

export default HomePage;