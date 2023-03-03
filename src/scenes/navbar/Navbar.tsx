//hooks
import { useState } from 'react';
import useMediaQuery from '@/hooks/useMediaQuery';

import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import logo from '@/assets/Logo.png';

//feature
import Link from './Link';

//types
import { SelectedPage } from '@/shared/types';
import Button from '@/shared/Button';

type Props = {
    isTopOfPage: boolean;
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ selectedPage, setSelectedPage, isTopOfPage }: Props) => {
    const [isMenuToggle, setIsMenuToggle] = useState<boolean>(false);
    const isAboveMediaScreen = useMediaQuery('(min-width: 1060px)');
    const flexBetween = 'flex items-center justify-between';
    return (
        <nav>
            {/* PC MENU */}
            <div
                className={`${flexBetween} fixed top-0 z-50 w-full py-6 ${
                    !isTopOfPage ? 'bg-primary-100 drop-shadow' : ''
                }`}
            >
                <div className={`${flexBetween} mx-auto w-5/6 `}>
                    <div className={`${flexBetween} w-full gap-16`}>
                        {/* LEFT BAR */}
                        <img alt="logo" src={logo} />

                        {/* RIGHT BAR */}
                        {isAboveMediaScreen ? (
                            <div className={`${flexBetween} w-full `}>
                                <div className={`${flexBetween} gap-6 text-sm`}>
                                    <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                                    <Link
                                        page="Benefits"
                                        selectedPage={selectedPage}
                                        setSelectedPage={setSelectedPage}
                                    />
                                    <Link
                                        page="Our classes"
                                        selectedPage={selectedPage}
                                        setSelectedPage={setSelectedPage}
                                    />
                                    <Link
                                        page="Contact us"
                                        selectedPage={selectedPage}
                                        setSelectedPage={setSelectedPage}
                                    />
                                </div>
                                <div className={`${flexBetween} gap-6`}>
                                    <p>Sign In</p>
                                    <Button setSelectedPage={setSelectedPage}>Become a member</Button>
                                </div>
                            </div>
                        ) : (
                            <button
                                className="rounded-full bg-secondary-500 p-2"
                                onClick={() => setIsMenuToggle(!isMenuToggle)}
                            >
                                {' '}
                                <Bars3Icon className="h-6 w-6 text-white" />
                            </button>
                        )}
                    </div>
                </div>
            </div>

            {/* MOBIE MENU */}
            {!isAboveMediaScreen && isMenuToggle && (
                <div className="fixed right-0 bottom-0 z-40 h-full w-[200px] rounded-tl-3xl rounded-bl-3xl bg-primary-100 drop-shadow-lg">
                    {/* CLOSE ICON */}
                    <div className="flex justify-end p-12">
                        <button onClick={() => setIsMenuToggle(!isMenuToggle)}>
                            <XMarkIcon className="h-6 w-6 text-gray-400" />
                        </button>
                    </div>

                    {/* MOBIE NAVBAR */}
                    <div className="flex flex-col items-center gap-10  text-lg font-semibold">
                        <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                        <Link page="Benefits" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                        <Link page="Ous classes" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                        <Link page="Contact us" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
