import Navbar from "../components/navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
function Contact(){
    return(

        <>

            <Navbar />
            <Hero cName="hero-mid" 
                HeroImg="https://images.unsplash.com/photo-1545082475-287a0d0de7c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=725&q=80" 
                title="Contact"
            />
            <ContactForm />
            <Footer />

        </>


    )
}

export default Contact;