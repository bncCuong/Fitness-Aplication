//hooks
import { useState, useEffect } from 'react';

//components
import Home from './scenes/home/Home';
import Navbar from '@/scenes/navbar/Navbar';
import Benefits from './scenes/benefits/Benefits';
import OurClasses from './scenes/ourClasses/OurClasses';
import ContactUs from './scenes/contact/ContactUs';

//type
import { SelectedPage } from '@/shared/types';
import Footer from './scenes/footer/Footer';

const App = () => {
    const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);
    const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

    //CHECK IS TOP OF PAGE ?
    useEffect(() => {
        const scrollHanler = () => {
            if (window.scrollY === 0) {
                setIsTopOfPage(true);
                setSelectedPage(SelectedPage.Home);
            }
            if (window.scrollY !== 0) setIsTopOfPage(false);
        };
        window.addEventListener('scroll', scrollHanler);

        return () => window.removeEventListener('scroll', scrollHanler);
    }, []);
    return (
        <div className="app  bg-gray-20">
            <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} isTopOfPage={isTopOfPage} />
            <Home setSelectedPage={setSelectedPage} />
            <Benefits setSelectedPage={setSelectedPage} />
            <OurClasses setSelectedPage={setSelectedPage} />
            <ContactUs setSelectedPage={setSelectedPage} />
            <Footer />
        </div>
    );
};

export default App;
