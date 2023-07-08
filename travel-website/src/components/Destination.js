import DestinationData from "./DestinationData";
import "./DestinationStyles.css";
const Destination = () => {
    return (
        <div className="destination">
            <h1>popular Destinations</h1>
            <p>Tours give you the opportunity to see a lot , within a time frame.</p>

            

                <DestinationData 
                    cName="first-des"
                    heading="Taal Volcano, Batangas" 
                    text="Taal ([taal]), officially the Municipality of Taal (Tagalog: Bayan ng Taal), is a 3rd class municipality in the province of Batangas, Philippines. According to the 2020 census, it has a population of 61,460 people.[3]
                        Taal is famous for its old ancestral houses, one particular ancestral house (now a museum) where Marcela Coronel Mariño de Agoncillo grew up in Taal, Batangas built in the 1770s by her grandparents, Don Andres Sauza Mariño and Doña Eugenia Diokno Mariño, (added by Slavstan Mariño). Its poblacion (central business district) is designated as a National Historical Landmark.[5] The municipality is known as the Balisong and Barong Tagalog Capital of the Philippines."
                    img1="https://images.unsplash.com/photo-1606047557233-88cc1e4d368c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80"
                    img2="https://images.unsplash.com/photo-1671772555442-cc9813ce8c76?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80"

                />

                <DestinationData 
                    cName="first-des-reverse"
                    heading="Santorini" 
                    text="Santorini (Greek: Σαντορίνη, pronounced [sandoˈrini]), officially Thira (Greek: Θήρα Greek pronunciation: [ˈθira]) and classical Greek Thera (English pronunciation /ˈθɪərə/), is an island in the southern Aegean Sea, about 200 km (120 mi) southeast from the Greek mainland. It is the largest island of a small circular archipelago, which bears the same name and is the remnant of a caldera. It forms the southernmost member of the Cyclades group of islands, with an area of approximately 73 km2 (28 sq mi) and a 2011 census population of 15,550. "
                    img1="https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=838&q=80"
                    img2="https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80"

                />
            </div>

        
    )
}

export default Destination;