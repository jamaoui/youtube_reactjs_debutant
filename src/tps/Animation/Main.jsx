import HeroBanner from "./HeroBanner";
import Card from "./Card";
import Cards from "./Cards";

function Main() {
    return <>
        <HeroBanner/>
        <Cards>
            <Card
                title='Our Team'
                image='https://logos-world.net/wp-content/uploads/2021/09/One-Piece-Emblem.png'
            >
                The Straw Hat Pirates, also known as the Mugiwara Pirates, Straw Hat Crew or simply the Straw Hats, are
                a very infamous and powerful pirate crew that originated from the East Blue.
            </Card>
            <Card
                title='Roronoa Zoro'
                reverse
                image='https://i.pinimg.com/originals/29/5b/b7/295bb7d8db75936563c18765f13181ed.png'
            >
                Zoro originally used two swords instead of three. Zoro was originally planned to be part of Buggy the
                Clown’s pirate crew and would have been recruited by Luffy away from Buggy. Zoro's surname was based on
                the Japanese pronunciation of French pirate François l'Olonnais. In several Western localizations, his
                name was changed to Zolo.
            </Card>
        </Cards>
    </>
}

export default Main;