import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section title="Quality Services With Best Price" description="">
    <VerticalFeatureRow
      title="Services"
      description="BMIS Smart Home is passionate about reclaiming lost freedom of our customers and giving them back a secure energy efficient convenient life. Drawing from our rich experience in Home Automation, BMIS Smart Home offers the following services to residential, hospitality and health care institutions"
      image="/assets/images/feature.svg"
      imageAlt="First feature alt text"
    />
    <VerticalFeatureRow
      title="Consulting"
      description="Based upon the needs, specifications and budgets for the client, our consultation team suggests the best products available in the market and the possible components needed to fulfil the clients home automation desires"
      image="/assets/images/feature2.svg"
      imageAlt="Second feature alt text"
      reverse
    />
    <VerticalFeatureRow
      title="Design"
      description="Upon the needs of the client we design detailed equipment layout plans and wiring diagrams"
      image="/assets/images/feature3.svg"
      imageAlt="Third feature alt text"
    />
    <VerticalFeatureRow
      title="Execution"
      description="Once the designs are approved by the client we send our experienced engineers to do the installations at the client’s property"
      image="/assets/images/feature2.svg"
      imageAlt="Second feature alt text"
      reverse
    />
  </Section>
);

export { VerticalFeatures };
