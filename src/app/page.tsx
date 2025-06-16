import Clients from "@/components/Clients";
import Contact from "@/components/Contact";
import Expertise from "@/components/Expertise";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Industries from "@/components/Industries";
import Inspiration from "@/components/Inspiration";
import Integrations from "@/components/Integrations";
import Navbar from "@/components/Navbar";
import Scroll from "@/components/Scroll";
import Testimonials from "@/components/Testimonials";
import WhyChoose from "@/components/WhyChoose";

export default function Home() {
  return (
    <div className="w-screen overflow-x-hidden min-h-screen">
      <Navbar></Navbar>
      <Hero></Hero>
      <Clients></Clients>
      <Expertise></Expertise>
      <WhyChoose></WhyChoose>
      <Testimonials></Testimonials>
      <Integrations></Integrations>
      <Industries></Industries>
      <Scroll></Scroll>
      <Contact></Contact>
      {/* <Inspiration></Inspiration> */}
      <Footer></Footer>
    </div>
  );
}
