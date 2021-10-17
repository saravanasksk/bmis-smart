import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="https://store.shoopy.in/bmis-smart-home">
            <a>Store</a>
          </Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {'WE MAKE YOUR HOME\n'}
            <span className="text-primary-500">SAFE, SMART &amp; MODERN</span>
          </>
        }
        description="Control all of your home appliances from your smartphone"
        subDescription="From Anytime. Anywhere"
        button={
          <Link href="https://store.shoopy.in/bmis-smart-home">
            <a>
              <Button xl>EXPLORE ALL PRODUCTS</Button>
            </a>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
