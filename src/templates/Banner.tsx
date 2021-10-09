import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="Lorem ipsum dolor sit amet consectetur adipisicing elit."
      subtitle="Start your Free Trial."
      button={
        <Link href="https://store.shoopy.in/bmis-smart-home">
          <a>
            <Button>Explore All Products</Button>
          </a>
        </Link>
      }
    />
  </Section>
);

export { Banner };
