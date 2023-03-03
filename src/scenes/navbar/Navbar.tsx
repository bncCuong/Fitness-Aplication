import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import logo from '@/assets/Logo.png';

//feature
import Link from './Link';

//types
import { SelectedPage } from '@/shared/types';

type Props = {
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ selectedPage, setSelectedPage }: Props) => {
    const flexBetween = 'flex items-center justify-between';
    return (
        <nav>
            <div className={`${flexBetween} fixed top-0 z-30 w-full py-6`}>
                <div className={`${flexBetween} mx-auto w-5/6 `}>
                    <div className={`${flexBetween} w-full gap-16`}>
                        {/* LEFT BAR */}
                        <img alt="logo" src={logo} />

                        {/* RIGHT BAR */}
                        <div className={`${flexBetween} w-full `}>
                            <div className={`${flexBetween} gap-6 text-sm`}>
                                <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                                <Link page="Benefits" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                                <Link
                                    page="Ous classes"
                                    selectedPage={selectedPage}
                                    setSelectedPage={setSelectedPage}
                                />
                                <Link page="Contact us" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                            </div>
                            <div className={`${flexBetween}gap-6`}>
                                <p>Sign In</p>
                                <button>Become a member</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
