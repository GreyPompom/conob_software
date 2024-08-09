import Hero from "../Hero/Hero";
import NossaEstrutura from "../NossaEstrutura/NossaEstrutura";
import NossosSoftwares from "../NossosSoftwares/NossosSoftwares";
import ThreePoints from "../ThreePoints/ThreePoints";
import FrequentlyQuestions from "../FrequentlyQuestions/Frequentlyquestions";
function Home () {
  return (
    <main>
        <div className="Home">
     <Hero />
     <ThreePoints/>
     <NossosSoftwares />
     <NossaEstrutura/>
     <FrequentlyQuestions/>
        </div>
    </main>
    
  )
}

export default Home;