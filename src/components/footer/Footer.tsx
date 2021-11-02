import { FC } from "react";
import FooterBottom from "./FooterBottom";
import FooterDisclaimer from "./FooterDisclaimer";
import FooterLinks from "./FooterLinks";

interface FooterProps {}

const Footer: FC<FooterProps> = () => (
  <div
    className="mt-auto bg-[#eaeaea] flex flex-col w-full
      sm:pl-24 mx-auto"
  >
    <FooterDisclaimer />
    <FooterLinks />
    <FooterBottom />
  </div>
);

export default Footer;
