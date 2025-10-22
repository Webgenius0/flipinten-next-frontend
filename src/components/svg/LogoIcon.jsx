import logo from '@/components/assets/icon/logo.svg';
import Image from 'next/image';

const LogoIcon = ({ size = 150 }) => (
    <Image
        src={logo}
        alt='logo'
        width={size}
    />
);

export default LogoIcon;
