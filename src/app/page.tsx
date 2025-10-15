"use client";
import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import TeamCardOne from '@/components/sections/team/TeamCardOne';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterBase from '@/components/sections/footer/FooterBase';

const assetMap = [
  { "id": "hero-bg", "url": "https://images.pexels.com/photos/34301927/pexels-photo-34301927.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Close-up of an AMD Radeon Graphics Card with RGB Lights" },
  { "id": "about-img", "url": "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "Diverse team collaborating in a meeting, showcasing teamwork and cooperation in a modern workplace." },
  { "id": "feature-img-1", "url": "https://images.pexels.com/photos/34258667/pexels-photo-34258667.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "A person in a hoodie coding on dual monitors, depicting cybersecurity and hacking themes." },
  { "id": "team-img", "url": "https://images.pexels.com/photos/3810753/pexels-photo-3810753.jpeg?auto=compress&cs=tinysrgb&h=650&w=940", "alt": "A diverse team of women brainstorming ideas in a modern office setting, fostering collaboration and creativity." }
];

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="soft"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            { name: "Home", id: "home" },
            { name: "About", id: "about" },
            { name: "Services", id: "services" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="IT Solutions"
        />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <HeroSplit
            title="Innovate with Us"
            description="Transforming technology solutions for your business success."
            imageSrc="https://images.pexels.com/photos/34301927/pexels-photo-34301927.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            buttons={[
              { text: "Get Started", href: "about" },
              { text: "Contact Us", href: "contact" }
            ]}
          />
        </div>
      </div>
      <div id="about" data-section="about" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <TextSplitAbout
            title="About Us"
            description={[
              "We are dedicated to providing advanced IT solutions.",
              "Our mission is to enhance efficiency through innovative technology."
            ]}
            buttons={[{ text: "Learn More", href: "services" }]}
          />
        </div>
      </div>
      <div id="features" data-section="features" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <FeatureCardOne
            features={[
              {
                title: "Custom Software",
                description: "We design software tailored to your needs.",
                imageSrc: "https://images.pexels.com/photos/34258667/pexels-photo-34258667.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
              },
              {
                title: "Cloud Solutions",
                description: "Secure and scalable cloud services.",
                imageSrc: "https://images.pexels.com/photos/34258667/pexels-photo-34258667.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
              }
            ]}
          />
        </div>
      </div>
      <div id="team" data-section="team" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <TeamCardOne
            members={[
              { id: "1", name: "Sophia Lee", role: "CTO", imageSrc: "https://images.pexels.com/photos/3810753/pexels-photo-3810753.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" },
              { id: "2", name: "James Kim", role: "Lead Developer", imageSrc: "https://images.pexels.com/photos/3810753/pexels-photo-3810753.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" }
            ]}
          />
        </div>
      </div>
      <div id="contact" data-section="contact" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <ContactCenter
            tag="Newsletter"
            title="Stay Connected"
            description="Sign up for our newsletter to get the latest updates."
            onSubmit={(email) => console.log(email)}
          />
        </div>
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <FooterBase
            columns={[
              {
                title: "Services",
                items: [
                  { label: "Custom Software", href: "services" },
                  { label: "Cloud Solutions", href: "services" }
                ]
              },
              {
                title: "Company",
                items: [
                  { label: "About Us", href: "about" },
                  { label: "Contact", href: "contact" }
                ]
              }
            ]}
            copyrightText="© 2025 IT Solutions"
          />
        </div>
      </div>
    </ThemeProvider>
  );
}