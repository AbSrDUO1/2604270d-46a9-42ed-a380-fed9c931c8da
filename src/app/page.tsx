"use client";
import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import TextAbout from '@/components/sections/about/TextAbout';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterBase from '@/components/sections/footer/FooterBase';

const assetMap = [{"id":"hero-image","url":"https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_346q1PwyWBLFgxn5R5gWYFVRO0Y/tmp/pizzeria-restaurant-1760705620400-d6bb9ce4.jpg","alt":"pizzeria restaurant"},{"id":"about-image","url":"https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_346q1PwyWBLFgxn5R5gWYFVRO0Y/tmp/pizzeria-interior-1760705627829-a4cf9749.jpg","alt":"pizzeria interior"},{"id":"menu-item-1","url":"https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_346q1PwyWBLFgxn5R5gWYFVRO0Y/tmp/margherita-pizza-1760705631311-f7e1c85c.jpg","alt":"margherita pizza"},{"id":"menu-item-2","url":"https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_346q1PwyWBLFgxn5R5gWYFVRO0Y/tmp/pepperoni-pizza-1760705634870-dbd5394a.jpg","alt":"pepperoni pizza"},{"id":"menu-item-3","url":"https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_346q1PwyWBLFgxn5R5gWYFVRO0Y/tmp/vegetarian-pizza-1760705644299-ffd52589.jpg","alt":"vegetarian pizza"}];

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="slide-background"
      defaultTextAnimation="entrance-slide"
      borderRadius="sharp"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay 
          navItems={[
            { name: "Home", id: "home" },
            { name: "About", id: "about" },
            { name: "Menu", id: "menu" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Pizzeria"
          buttonVariant="slide-background"
        />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <HeroBillboard
            title="Welcome to Our Pizzeria"
            description="Experience the best pizza in town made with fresh ingredients and love."
            imageSrc={assetMap.find(a => a.id === 'hero-image')?.url}
            buttons={[{ text: "Explore Menu", href: "menu" }]}
          />
        </div>
      </div>
      <div id="about" data-section="about" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <TextAbout
            title="Our Story: Crafting Joy with Every Slice"
            buttons={[{ text: "Learn More", href: "about" }]}
          />
        </div>
      </div>
      <div id="menu" data-section="menu" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <FeatureCardTwo
            features={[
              { title: "Margherita", description: "Classic margherita pizza with fresh basil and mozzarella.", icon: Pizza },
              { title: "Pepperoni", description: "Spicy pepperoni with a blend of cheeses.", icon: Pizza },
              { title: "Vegetarian", description: "Loaded with seasonal veggies and cheese.", icon: Pizza }
            ]}
          />
        </div>
      </div>
      <div id="contact" data-section="contact" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <ContactCenter
            tag="Contact Us"
            title="Get In Touch With Us"
            description="Whether you have a question about orders or special requests, our team is ready to help."
          />
        </div>
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <FooterBase
            columns={[
              { title: "Menu", items: [{ label: "Home", href: "home" }, { label: "About", href: "about" }] },
              { title: "Contact", items: [{ label: "Find Us", href: "contact" }, { label: "Call Us", href: "tel:+123456789" }] }
            ]}
            copyrightText="© 2025 Pizzeria"
          />
        </div>
      </div>
    </ThemeProvider>
  );
}