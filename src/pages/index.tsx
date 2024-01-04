import { Benefits } from "~/components/Benefits";
import { ContactForm } from "~/components/ContactForm";
import { ContactUs } from "~/components/ContactUs";
import { Discover } from "~/components/Discover";
import { Header } from "~/components/Header";
import { Hero } from "~/components/Hero";
import { HowItWorks } from "~/components/HowItWorks";
import { Solutions } from "~/components/Solutions";
import { Unique } from "~/components/Unique";
import { Vehicles } from "~/components/Vehicles";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Unique />
      <HowItWorks />
      <Benefits />
      <ContactForm />
      <ContactUs />
      <Vehicles />
      <Solutions />
      <Discover />
    </>
  );
}
