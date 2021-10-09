import { ReactNode } from 'react';

type IHeroOneButtonProps = {
  title: ReactNode;
  description: string;
  subDescription: string;
  button: ReactNode;
};

const HeroOneButton = (props: IHeroOneButtonProps) => (
  <header className="text-center">
    <h1 className="text-5xl text-gray-900 font-bold whitespace-pre-line leading-hero">
      {props.title}
    </h1>
    <div className="text-2xl mt-4 mb-2">{props.description}</div>
    <div className="text-2xl mb-16 text-primary-500 font-bold">
      {props.subDescription}
    </div>

    {props.button}
  </header>
);

export { HeroOneButton };
