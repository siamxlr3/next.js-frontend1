import React from 'react';
import Body from "@/component/Home/Body";
import ApplicationSection from "@/component/Home/ApplicationSection";
import ExploreSection from "@/component/Home/ExploreSection";
import TrialSection from "@/component/Home/TrialSection";
import PricingSection from "@/component/Home/PricingSection";
import ClientSection from "@/component/Home/ClientSection";

const HomePage = () => {
    return (
        <div>
         <Body/>
            <ApplicationSection/>
            <ExploreSection/>
            <ClientSection/>
            <PricingSection/>
            <TrialSection/>
        </div>
    );
};

export default HomePage;