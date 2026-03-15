import WindowWrapper from "#hoc/WindowWrapper.jsx";
import {WindowControls} from "#components/index.js";
import useWindowStore from "#store/window.js";
import {photosLinks, gallery} from "#constants/index.js";

const Photos = () => {
    const { openWindow } = useWindowStore();

    return (
        <>
            <div id="window-header">
                <WindowControls target="photos"/>
                <h2>Photos</h2>
            </div>
            <div className="flex h-full">
                <div className="sidebar">
                    <h2>Photos</h2>
                    <ul>
                        {photosLinks.map(({id, icon, title}) => (
                            <li key={id}>
                                <img src={icon} alt={title}/>
                                <p>{title}</p>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="gallery">
                    <ul>
                        {gallery.map(({id, img}) => (
                            <li key={id}>
                                <img
                                    src={img}
                                    alt={`gallery-${id}`}
                                    className="cursor-pointer"
                                    onClick={() => openWindow("imgfile", {
                                        name: `photo-${id}.png`,
                                        imageUrl: img,
                                    })}
                                />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
};

const PhotosWindow = WindowWrapper(Photos, "photos");
export default PhotosWindow;