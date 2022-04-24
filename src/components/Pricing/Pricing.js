import React from 'react';
import { Button } from '../../globalStyles';
import { AiOutlineDeploymentUnit } from 'react-icons/ai';
import { Gi3DStairs } from 'react-icons/gi';
import { GiVanillaFlower } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import {
  PricingSection,
  PricingWrapper,
  PricingHeading,
  PricingContainer,
  PricingCard,
  PricingCardInfo,
  PricingCardIcon,
  PricingCardPlan,
  PricingCardCost,
  PricingCardLength,
  PricingCardFeatures,
  PricingCardFeature
} from './Pricing.elements';

function Pricing() {
  return (
    <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
      <PricingSection>
        <PricingWrapper>
          <PricingHeading>JOBS IN</PricingHeading>
          <PricingContainer>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiVanillaFlower />
                </PricingCardIcon>
                <PricingCardPlan>Designing</PricingCardPlan>
                {/*<PricingCardCost>some text here</PricingCardCost>
                <PricingCardLength>some text here</PricingCardLength> */}
                <PricingCardFeatures>
                  <PricingCardFeature>Create a Design</PricingCardFeature>
                  <PricingCardFeature>that reaches</PricingCardFeature>
                  <PricingCardFeature>thousands of customers</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Apply Here</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <AiOutlineDeploymentUnit />
                </PricingCardIcon>
                <PricingCardPlan>Technology</PricingCardPlan>
                {/*<PricingCardCost>some text here</PricingCardCost>
              <PricingCardLength>some text here</PricingCardLength>*/}
                <PricingCardFeatures>
                  <PricingCardFeature>Use technology to</PricingCardFeature>
                  <PricingCardFeature>solve real world problems</PricingCardFeature>
                  <PricingCardFeature>that impacts real users</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Apply Here</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <Gi3DStairs />
                </PricingCardIcon>
                <PricingCardPlan>Management</PricingCardPlan>
                {/*<PricingCardCost>some text here</PricingCardCost>
            <PricingCardLength>some text here</PricingCardLength>*/}
                <PricingCardFeatures>
                  <PricingCardFeature>Lets manage all</PricingCardFeature>
                  <PricingCardFeature>of it </PricingCardFeature>
                  <PricingCardFeature>together</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Apply Here</Button>
              </PricingCardInfo>
            </PricingCard>
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
}
export default Pricing;
