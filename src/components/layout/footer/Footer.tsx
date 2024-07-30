import lightLogo from "../../../assets/images/light-logo.png";
import AboutLinks from "../../ui/footer/AboutLinks";
import Contacts from "../../ui/footer/Contacts";
import PaymentMethods from "../../ui/footer/PaymentMethods";
import SocialMediaLinks from "../../ui/footer/SocialMediaLinks";
import TermsPrivacyLinks from "../../ui/footer/TermsPrivacyLinks";

function Footer() {
  return (
    <footer>
      <div className="flex flex-row justify-center gap-28 bg-steelGray px-12 pb-6 pt-10 text-snow">
        <div className="basis-1/4">
          <img src={lightLogo} alt="logo" className="mb-4 h-28" />
          <h3 className="mb-4 text-2xl font-medium">Bulgarian Feasts</h3>
          <p className="mb-4">
            Experience the rich flavors of Bulgaria with our traditional dishes,
            crafted from authentic recipes passed down through generations.
          </p>
          <SocialMediaLinks />
        </div>
        <AboutLinks />
        <TermsPrivacyLinks />
        <div className="basis-1/4">
          <Contacts />
          <PaymentMethods />
        </div>
      </div>
      <p className="bg-nightShade py-4 text-center text-stormGray">
        &copy;2024 Bulgarian Feasts. All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;
