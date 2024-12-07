import React, { useEffect, useState } from "react";
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
import SurfaceAnalyzerPage from "./components/industries/SurfaceAnalyzerPage";
import Auth from "../src/pages/Auth";
import AllServicesPage from "./components/services/AllServicesPage";
import AllIndustriesPage from "./components/industries/AllIndustriesPage";
import AllWhygreenaiPage from "./components/why-choose/AllWhygreenaiPage";
import AllEducationPage from "./components/education/AllEducationPage";
import { login } from "./services/api";

function App() {
  const [user, setUser] = useState<{ name: string } | null>(null);

  useEffect(() => {
    // Example usage of the login service
    const authenticateUser = async () => {
      try {
        const userData = await login("user@example.com", "password123");
        console.log("User data:", userData);
      } catch (error) {
        console.error("Error logging in:", error);
      }
    };

    authenticateUser();
  }, []);

  return (
    <Router>
      <div className="min-h-screen">
        <Header user={user} setUser={setUser} />
        <main className="space-y-0">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <Services />
                  <IndustryList />
                  <Vision />
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
            <Route
              path="/Surface-Analyzer"
              element={<SurfaceAnalyzerPage />}
            />
            <Route path="/carbon-footprint" element={<CarbonFootprintPage />} />
            <Route path="/signin" element={<Auth setUser={setUser} />} />
            <Route path="/signup" element={<Auth setUser={setUser} />} />
            <Route path="/services" element={<AllServicesPage />} />
            <Route path="/industries" element={<AllIndustriesPage />} />
            <Route path="/why-greenai" element={<AllWhygreenaiPage />} />
            <Route path="/education" element={<AllEducationPage />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
