import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/layout/Header";
import Hero from "./components/home/Hero";
import Services from "./components/services/Services";
import IndustryList from "./components/industries/IndustryList";
import SteelPage from "./components/industries/SteelPage";
import InfrastructurePage from "./components/industries/InfrastructurePage";
import AutomobilePage from "./components/industries/AutomobilePage";
import PowerPage from "./components/industries/PowerPage";
import TransportationPage from "./components/industries/TransportationPage";
import MiningPage from "./components/industries/MiningPage";
import WhyChoose from "./components/why-choose/WhyChoose";
import Education from "./components/education/Education";
import Contact from "./components/contact/Contact";
import Footer from "./components/layout/Footer";
import Vision from "./components/vision/Vision";
import GenerativeAIChatbotPage from "./components/services/GenerativeAIChatbotPage";
import IndustrialAutomationPage from "./components/services/IndustrialAutomationPage";
import EducationalInnovationsPage from "./components/services/EducationalInnovationsPage";
import CustomerExperiencePage from "./components/services/CustomerExperiencePage";
import RoboticAutomationPage from "./components/services/RoboticAutomationPage";
import CarbonFootprintPage from "./components/services/CarbonFootprintPage";
import TextilePage from "./components/industries/TextilePage";
import CementPage from "./components/industries/CementPage";
import Industry4IoTPage from "./components/education/Industry4IoTPage";
import GenAIMLPage from "./components/education/GenAIMLPage";
import Auth from "./pages/Auth";
import Chatbox from "./components/home/chatbox";
import Product from "./components/product/Product";
import ProductCCTV from "./components/product/CCTV";
import ProductHealth from "./components/product/Health";
import ProductSurface from "./components/product/Surface";

function App() {
  const [user, setUser] = useState<{ name: string } | null>(null);

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header user={user} setUser={setUser} />
        <main className="space-y-0">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero servicesRef={React.createRef<HTMLDivElement>()} />
                  <Services />
                  <IndustryList />
                  <Vision />
                  <Product />
                  <WhyChoose />
                  <Education />
                  <Contact />
                </>
              }
            />
            <Route path="/steel" element={<SteelPage />} />
            <Route path="/infrastructure" element={<InfrastructurePage />} />
            <Route path="/automobile" element={<AutomobilePage />} />
            <Route path="/power" element={<PowerPage />} />
            <Route path="/transportation" element={<TransportationPage />} />
            <Route path="/mining" element={<MiningPage />} />
            <Route path="/cement" element={<CementPage />} />
            <Route path="/product" element={<Product />} />
            <Route
              path="/generative-ai-chatbot"
              element={<GenerativeAIChatbotPage />}
            />
            <Route
              path="/industrial-automation"
              element={<IndustrialAutomationPage />}
            />
            <Route
              path="/educational-innovations"
              element={<EducationalInnovationsPage />}
            />
            <Route
              path="/customer-experience"
              element={<CustomerExperiencePage />}
            />
            <Route
              path="/robotic-automation"
              element={<RoboticAutomationPage />}
            />
            <Route path="/gen-ai-ml" element={<GenAIMLPage />} />
            <Route path="/industry-4-ai-iot" element={<Industry4IoTPage />} />
            <Route path="/textile" element={<TextilePage />} />
            <Route path="/carbon-footprint" element={<CarbonFootprintPage />} />
            <Route path="/signin" element={<Auth setUser={setUser} />} />
            <Route path="/signup" element={<Auth setUser={setUser} />} />
            <Route path="/services" element={<Services />} />
            <Route path="/industries" element={<IndustryList />} />
            <Route path="/why-greenai" element={<WhyChoose />} />
            <Route path="/education" element={<Education />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/product-cctv" element={<ProductCCTV />} />{" "}
            <Route path="/product-health" element={<ProductHealth />} />{" "}
            <Route path="/product-surface" element={<ProductSurface />} />{" "}
          </Routes>
        </main>
        <Footer />
        <Chatbox />
      </div>
    </Router>
  );
}

export default App;
