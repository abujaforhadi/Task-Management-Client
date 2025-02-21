
import Audience from "./Audience/Audience";
import Banner from "./Banner/Banner";
import Navbar from "./Navbar/Navbar";


const Home = () => {
    return (
        <div className="">
            <Navbar/>
            <Banner></Banner>
           <Audience></Audience>
            
        </div>
    );
};

export default Home;