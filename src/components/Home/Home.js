import Hero from "../Hero/Hero";
import NossaEstrutura from "../NossaEstrutura/NossaEstrutura";
import NossosSoftwares from "../Softwares/NossosSoftwares";
import ThreePoints from "../ThreePoints/ThreePoints";
import FrequentlyQuestions from "../FrequentlyQuestions/Frequentlyquestions";
import ContactUs from "../ContactUs/Contact";
import ResultsSection from "../Results/Results";
function Home () {
  return (
    <main>
        <div className="Home"  data-aos="fade-up">
          <Hero />
          <ThreePoints/>
          <NossosSoftwares />
          <NossaEstrutura/>
          <ResultsSection/>
          <FrequentlyQuestions/>
          <ContactUs/>
        </div>
    </main>
  )
}

export default Home;