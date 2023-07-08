import Navbar from "../components/navbar";
import Hero from "../components/Hero";
import Destination from "../components/Destination";
import Trip from "../components/Trip";
import Footer from "../components/Footer";
function Home(){
    return(

        <>

            
            <Navbar />
            <Hero cName="Hero" 
                HeroImg="https://images.unsplash.com/photo-1489595672898-26572ba975a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=812&q=80" 
                title="Your journey Your Story"
                text="Choose your favourite destination"
                url="/"
                buttonText="Travel Plan"
                btnClass="show"

            />
            <Destination />
            <Trip />
            <Footer /> 
            
        </>


    )
}

export default Home;