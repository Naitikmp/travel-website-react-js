import Navbar from "../components/navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Trip from "../components/Trip";
function Service(){
    return(

        <>
            
            <Navbar />
            <Hero cName="hero-mid" 
                HeroImg="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" 
                title="Service"
            />
            <Trip />
            <Footer />                        


        </>


    )
}

export default Service;