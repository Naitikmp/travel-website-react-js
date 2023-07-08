import Navbar from "../components/navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";

function About(){
    return(

        <>

            
            <Navbar />
            <Hero cName="hero-mid" 
                HeroImg="https://images.unsplash.com/photo-1505771215590-c5fa0aec29b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1886&q=80" 
                title="About"
            />
            <AboutUs />
            <Footer />
            
        </>


    )
}

export default About;