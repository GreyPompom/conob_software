import ContactUs from "../ContactUs/Contact";
import BoxFrequentlyQuestions from "../Boxes/Box-FrequentlyQuestions";

function PageContact() {
    return (
        <div class="page ">
            <div class="page bg-dark">
                <ContactUs />
            </div>

            <BoxFrequentlyQuestions />
        </div>

    )
}

export default PageContact;