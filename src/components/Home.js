import React from 'react';
import styled from 'styled-components';
import Section from './Section';

function Home() {
    return (
        <div>
            <Container>
                <Section
                    title="Model 3"
                    description="Leasing starting at $349/mo"
                    bgImg="model-3.jpg"
                    leftBtn="View Inventory"
                    rghtBtn="Custom Order"
                />
                <Section
                    title="Model Y"
                    description="Schedule a Demo Drive"
                    bgImg="model-y.jpg"
                    leftBtn="View Inventory"
                    rghtBtn="Custom Order"
                />
                <Section
                    title="Model S"
                    description="Schedule a Demo Drive"
                    bgImg="model-s.jpg"
                    leftBtn="View Inventory"
                    rghtBtn="Custom Order"
                />
                <Section
                    title="Model X"
                    description="Schedule a Demo Drive"
                    bgImg="model-x.jpg"
                    leftBtn="View Inventory"
                    rghtBtn="Custom Order"
                />
                <Section
                    title="Solar Panels"
                    description="Lowest Cost Solar Panels in America"
                    bgImg="solar-panel.jpg"
                    leftBtn="Order Now"
                    rghtBtn="Learn More"
                />
                <Section
                    title="Solar Roof"
                    description="Produce Clean Energy From Your Roof"
                    bgImg="solar-roof.jpg"
                    leftBtn="Order Now"
                    rghtBtn="Learn More"
                />
                <Section
                    title="Accessories"
                    bgImg="accessories.jpg"
                    leftBtn="Shop Now"
                    rghtBtn="Add Cart"
                />
            </Container>
        </div>
    )
}

export default Home
const Container = styled.div`
  width:100vh;
`