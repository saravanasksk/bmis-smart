import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="We help you manage your home easily"
      button={
        <Link href="https://store.shoopy.in/bmis-smart-home">
          <a>
            <Button>EXPLORE PRODUCTS</Button>
          </a>
        </Link>
      }
    />
  </Section>
);

export { Banner };
