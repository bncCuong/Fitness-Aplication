import BenefitsPageGraphic from '@/assets/BenefitsPageGraphic.png';
//type
import { SelectedPage, BenefitType } from '@/shared/types';

//motion
import { motion } from 'framer-motion';

//icon
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from '@heroicons/react/24/solid';

//componets
import HText from '@/shared/HText';
import Benefit from './Benefit';
import Button from '@/shared/Button';

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

const benefits: Array<BenefitType> = [
    {
        icon: <HomeModernIcon className="h-6 w-6" />,
        title: 'State of the Are Facilities',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id repudiandae placeat numquam aperiam',
    },
    {
        icon: <UserGroupIcon className="h-6 w-6" />,
        title: "100's of Diverse Classes",
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id repudiandae placeat numquam aperiam',
    },
    {
        icon: <AcademicCapIcon className="h-6 w-6" />,
        title: 'Expert end Pro Trainers',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id repudiandae placeat numquam aperiam',
    },
];

const container = {
    hiiden: {},
    visible: {
        transition: { staggerChildren: 0.2 },
    },
};

const Benefits = ({ setSelectedPage }: Props) => {
    return (
        <section id="benefits" className=" mx-auto mt-20 flex min-h-full w-5/6  pb-20">
            <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}>
                {/* HEADER */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                    className="text-center md:my-5 md:w-3/5 md:text-start"
                >
                    <HText>MORE THAN JUST GYM</HText>
                    <p className="mt-5 text-start font-montserrat text-sm">
                        We provide world class fitness equipment, trainers and classes to get you to your ultimate
                        fitness goals with ease. We provide true care into each and every member.
                    </p>
                </motion.div>

                {/* BENEFITS */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    variants={container}
                    className="mt-5 justify-center gap-8 md:flex "
                >
                    {benefits.map((benefit: BenefitType) => (
                        <Benefit
                            setSelectedPage={setSelectedPage}
                            key={benefit.title}
                            icon={benefit.icon}
                            title={benefit.title}
                            description={benefit.description}
                        />
                    ))}
                </motion.div>

                {/* GRAPHICS AND DESCRIPTION */}
                <div className="mt-16 items-center justify-between gap-20 md:mt-20 md:flex">
                    {/* GRAPHICS */}
                    <img className="mx-auto" alt="benefits" src={BenefitsPageGraphic} />

                    {/* DESCRIPTION */}
                    <div>
                        {/* TITLE */}
                        <div className="relative">
                            <div className="abstractwaves ">
                                <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.5 }}
                                    transition={{ duration: 0.5 }}
                                    variants={{
                                        hidden: { opacity: 0, x: 50 },
                                        visible: { opacity: 1, x: 0 },
                                    }}
                                >
                                    <HText>
                                        MILLIONS OF HAPPY MEMBERS GETTING<span className="text-primary-500"> FIT</span>
                                    </HText>
                                </motion.div>
                            </div>
                        </div>

                        {/* DESCRIP */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ duration: 0.5 }}
                            variants={{
                                hidden: { opacity: 0, x: 50 },
                                visible: { opacity: 1, x: 0 },
                            }}
                        >
                            <p className="my-5">
                                {' '}
                                Nascetur aenean massa auctor tincidunt. Iaculis potenti amet egestas ultrices
                                consectetur adipiscing ultricies enim. Pulvinar fames vitae vitae quis. Quis amet
                                vulputate tincidunt at in nulla nec. Consequat sed facilisis dui sit egestas ultrices
                                tellus. Ullamcorper arcu id pretium sapien proin integer nisl. Felis orci diam odio.
                            </p>
                            <p className="mb-5">
                                Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est tellus quam porttitor.
                                Mauris velit euismod elementum arcu neque facilisi. Amet semper tortor facilisis metus
                                nibh. Rhoncus sit enim mattis odio in risus nunc.
                            </p>
                        </motion.div>
                        {/* BUTTON */}
                        <div className="relative mt-16">
                            <div className="sparkles ">
                                <Button setSelectedPage={setSelectedPage}>Join Now</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Benefits;
