import { SelectedPage } from '@/shared/types';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { motion } from 'framer-motion';

type Props = {
    icon: JSX.Element;
    title: string;
    description: string;
    setSelectedPage: (value: SelectedPage) => void;
};

const childVariant = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
};

const Benefit = ({ icon, title, description, setSelectedPage }: Props) => {
    return (
        <motion.div
            variants={childVariant}
            className="mt-5 min-w-[350px]  rounded-md border-2 border-gray-100 px-5 py-16 text-center"
        >
            <div className="mb-4 flex flex-col items-center">
                <div className="boder-gray-100 flex h-10 w-10 items-center justify-center rounded-full border-2 bg-primary-100 ">
                    {icon}
                </div>
                <h1 className="my-4 font-montserrat text-lg">{title}</h1>
                <p>{description}</p>
                <AnchorLink
                    className="mt-3 text-sm font-bold text-primary-500 underline hover:text-secondary-500"
                    onClick={() => setSelectedPage(SelectedPage.ContactUs)}
                    href={`#${SelectedPage.ContactUs}`}
                >
                    Learn more
                </AnchorLink>
            </div>
        </motion.div>
    );
};

export default Benefit;
