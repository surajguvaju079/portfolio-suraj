import { site } from "@/content/site";
import Container from "./ui/Container";
import ButtonLink from "./ui/ButtonLink";
export default function Contact() {
  return <section id="contact" className="section contact-section"><Container>
    <p className="eyebrow"><span className="section-number">06</span>Let’s connect</p>
    <div className="contact-grid"><h2>Your next product.<br /><span>Our next conversation.</span></h2>
      <div className="contact-copy"><p>I’m open to international remote Full-Stack, Backend, and Product Engineering opportunities, as well as selected freelance and client projects.</p>
        <ButtonLink href={`mailto:${site.email}`}>Email Suraj</ButtonLink>
        <a className="contact-email" href={`mailto:${site.email}`}>{site.email}</a>
      </div>
    </div>
  </Container></section>;
}
