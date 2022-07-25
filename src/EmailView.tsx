import flaticonWelcomeImage from "./assets/images/flaticon-welcome-image.png";
import backArrow from "./assets/icons/back-arrow.png";
import downloadButton from "./assets/icons/download-button.png";
import rateStarButton from "./assets/icons/rate-star-button.png";
import rubbishButton from "./assets/icons/rubbish-bin-delete-button.png";
import Navbar from "./email components/Navbar";
import EmailContent from "./email components/EmailContent";
function EmailView() {
  return (
    <main className="email-view">
      <Navbar />


      <EmailContent />
    </main>
  );
}
export default EmailView;
