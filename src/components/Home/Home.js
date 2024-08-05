import Hero from "../Hero/Hero";
import NossaEstrutura from "../NossaEstrutura/NossaEstrutura";
import NossosSoftwares from "../NossosSoftwares/NossosSoftwares";
import ThreePoints from "../ThreePoints/ThreePoints";

function Home () {
  return (
    <main>
        <div className="Home">
     <Hero />
     <ThreePoints/>
     <NossosSoftwares />
     <NossaEstrutura/>
        </div>
    </main>
    
  )
}

export default Home;