
import backArrow from "../assets/icons/back-arrow.png";

import rateStarButton from "../assets/icons/rate-star-button.png";
import rubbishButton from "../assets/icons/rubbish-bin-delete-button.png";
import EmailHeaderInfo from "./EmailHeaderInfo";
import EmailHeaderDateInfo from "./EmailHeaderDateInfo";
import EmailHeaderActionIcons from "./EmailHeaderActionIcons";

function EmailHeader() {
  return (
    <header className="email-content--header">
      <div className="avatar"></div>
      <EmailHeaderInfo />
      <EmailHeaderDateInfo />
      <EmailHeaderActionIcons />
    </header>
  );
}
export default EmailHeader;