import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import TeamDetails from './section-components/team-details';
import CallToActionV1 from './section-components/call-to-action-v1';
import Footer from './global-components/footer';

const Team_Details = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Agent Details" />
        <TeamDetails />
        <CallToActionV1 />
        <Footer />
    </div>
}

export default Team_Details

