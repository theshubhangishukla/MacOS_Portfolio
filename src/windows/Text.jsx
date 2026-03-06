import WindowWrapper from "#hoc/WindowWrapper.jsx";
import {WindowControls} from "#components/index.js";
import useWindowStore from "#store/window.js";

const TxtFile = () => {
    const { windows } = useWindowStore();
    const data = windows.txtfile?.data;

    if (!data) return null;

    const { name, image, subtitle, description } = data;

    return (
        <>
            <div id="window-header">
                <WindowControls target="txtfile"/>
                <h2>{name}</h2>
            </div>
            <div className="p-8 max-w-lg">
                {subtitle && (
                    <h3 className="text-lg font-semibold mb-4">{subtitle}</h3>
                )}
                {image && (
                    <img
                        src={image}
                        alt={name}
                        className="w-full rounded-lg mb-6 object-cover"
                    />
                )}
                {description?.map((paragraph, i) => (
                    <p key={i} className="text-sm text-gray-600 mb-3 leading-relaxed">
                        {paragraph}
                    </p>
                ))}
            </div>
        </>
    );
};

const TxtFileWindow = WindowWrapper(TxtFile, "txtfile");
export default TxtFileWindow;