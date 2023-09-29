import { LinkedinIcon } from "lucide-react";
import { FooterContainer } from "../Footer/styles";

export function Footer() {
  return (
    <FooterContainer>
      <a
        href="http://www.linkedin.com/in/lucas-emanoel-figueiredo-da-silva"
        target="blank"
      >
        <LinkedinIcon width={26} />
        Linkedin
      </a>
    </FooterContainer>
  );
}
