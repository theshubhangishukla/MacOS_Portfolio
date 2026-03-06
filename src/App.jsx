import gsap from 'gsap';
import {Draggable} from "gsap/Draggable";

import {Dock, Navbar, Welcome} from '#components';
import {Finder, ImgFile, Resume, Safari, Terminal, Text, Contact} from "#windows";

gsap.registerPlugin(Draggable);

const App = () => {
    return (
        <main>
            <Navbar />
            <Welcome />
            <Dock />

            <Terminal />
            <Safari />
            <Resume />
            <Finder />
            <Text/>
            <ImgFile/>
            <Contact />
        </main>
    );
};
export default App;