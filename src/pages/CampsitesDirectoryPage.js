import { useState } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import CampsitesList from '../features/campsites/CampsitesList';
import { selectCampsiteById } from '../features/campsites/campsitesSlice';
import SubHeader from '../components/SubHeader';

const CampsitesDirectoryPage = () => {

    return (
        <Container>
            <SubHeader current='Directory'/>
            <CampsitesList />
        </Container>
    );
};

export default CampsitesDirectoryPage;