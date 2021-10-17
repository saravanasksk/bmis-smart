import { AppConfig } from '../utils/AppConfig';

type ILogoProps = {
  xl?: boolean;
};

const Logo = (props: ILogoProps) => {
  const fontStyle = props.xl
    ? 'font-semibold text-3xl'
    : 'font-semibold text-xl';

  return (
    <span className={`text-gray-900 inline-flex items-center ${fontStyle}`}>
      <img
        className="mr-3"
        src="android-chrome-192x192.png"
        alt="bmis"
        width="30"
      />
      {AppConfig.site_name}
    </span>
  );
};

export { Logo };
