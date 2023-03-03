import { motion } from 'framer-motion';
//hooks
import useMediaQuery from '@/hooks/useMediaQuery';

//type
import { SelectedPage } from '@/shared/types';

//compoents
import Button from '@/shared/Button';

//image
import HomePageText from '@/assets/HomePageText.png';
import HomePageGraphic from '@/assets/HomePageGraphic.png';
import SponsorForbes from '@/assets/SponsorForbes.png';
import SponsorFortune from '@/assets/SponsorFortune.png';
import SponsorRedBull from '@/assets/SponsorRedBull.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
    const isAboveMediaScreens = useMediaQuery('(min-width: 1060px)');

    return (
        <section id="home" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
            {/* IMAGE AND MAIN HEADER */}
            <motion.div
                onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
                className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6"
            >
                {/* MAIN HEADER */}
                <div className="z-30 mt-32 md:basis-3/5">
                    {/* HEADINGS */}
                    <motion.div
                        //Animation
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5 }}
                        variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } }}
                        className="md:-mt-20"
                    >
                        <div className="relative ">
                            <div className="md:before:blog before:absolute before:-left-20 before:-top-20 before:-z-[1] before:content-evolvetext">
                                <img alt="Homepage" src={HomePageText} />
                            </div>
                        </div>
                        <p className="mt-8 text-sm ">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum praesentium voluptate eius
                            sunt! Voluptatem voluptas, possimus ipsum sint eaque voluptatum esse omnis ab, veritatis
                            vero, consequatur debitis totam amet molestiae?
                        </p>
                    </motion.div>

                    {/* ACTIONS */}
                    <motion.div
                        //Animation
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } }}
                        className="mt-8 flex  items-center justify-start gap-10"
                    >
                        <Button setSelectedPage={setSelectedPage}>Join now</Button>
                        <AnchorLink
                            className="text-sm font-bold text-primary-500 underline  hover:text-secondary-500"
                            onClick={() => setSelectedPage(SelectedPage.ContactUs)}
                            href={`#${SelectedPage.ContactUs}`}
                        >
                            Learn more
                        </AnchorLink>
                    </motion.div>
                </div>

                {/* IMAGE */}
                <div className="flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-end">
                    <img alt="home" src={HomePageGraphic} />
                </div>
            </motion.div>

            {/* SPONSORS */}
            {isAboveMediaScreens && (
                <div className="h-[150px] bg-primary-100 py-10">
                    <div className="mx-auto w-5/6 ">
                        <div className="flex w-3/5 items-center justify-between gap-8">
                            <img alt="sponsor" src={SponsorForbes} />
                            <img alt="sponsor" src={SponsorFortune} />
                            <img alt="sponsor" src={SponsorRedBull} />
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Home;
