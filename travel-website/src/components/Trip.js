import TripData from "./TripData";
import "./TripStyles.css";

function Trip(){
    return(
       <div className="trip">
        <h1>Recent Trips</h1>
        <p>You can discover unique destinations using google Maps</p>
        <div className="tripcard">
            <TripData 
                image="https://images.unsplash.com/photo-1476158085676-e67f57ed9ed7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=872&q=80"
                heading="Trip in indonesia"
                text=" Indonesia to visit as a state guest to capture their country through my own interpretation of how I view their beautiful country. Obtaining this photo was not an easy feat as we had to speed boat 3 hours from land to the island"
            />

        <TripData 
                image="https://images.unsplash.com/photo-1520939817895-060bdaf4fe1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1923&q=80"
                heading="Trip in France"
                text=" officially the French Republic (French: République française [ʁepyblik fʁɑ̃sɛz]),[14] is a country located primarily in Western Europe. It also includes overseas regions and territories in the Americas and the Atlantic, Pacific and Indian Oceans"
                />

        <TripData 
                image="https://images.unsplash.com/photo-1515091943-9d5c0ad475af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80"
                heading="Trip in India"
                text="Bounded by the Indian Ocean on the south, the Arabian Sea on the southwest, and the Bay of Bengal on the southeast, it shares land borders with Pakistan to the west;[j] China, Nepal, and Bhutan to the north; and Bangladesh and Myanmar to the east. In the Indian Ocean, India is in the vicinity of Sri Lanka and the Maldives; its Andaman and Nicobar ."
            />
        </div>
       </div> 
    )
}

export default Trip;