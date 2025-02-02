import Script from 'next/script';

const VantaBackground = () => {

return (
    <div>
        <div id="homepage-background" className={"h-[300px]"}></div>
        <Script
            src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js"
            strategy="beforeInteractive"
        />
        <Script
            src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.cells.min.js"
            strategy="beforeInteractive"
        />
        <Script id="script">
            {`VANTA.CELLS({
                el: "#homepage-background",
                THREE: THREE, // Injectez THREE explicitement
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 200.0,
                minWidth: 200.0,
                scale: 1.0,
                color1: 0x11101,
                color2: 0xa4d13,
                speed: 0.5,
    });`}
        </Script>
    </div>
)

}

// const VantaBackground = () => {
//     const vantaRef = useRef(null);
//     const vantaInstance = useRef(null);
//
//     useEffect(() => {
//         if (window.VANTA && window.VANTA.CELLS) {
//             vantaInstance.current = window.VANTA.CELLS({
//                 el: vantaRef.current,
//                 THREE: THREE, // Injectez THREE explicitement
//                 mouseControls: true,
//                 touchControls: true,
//                 gyroControls: false,
//                 minHeight: 200.0,
//                 minWidth: 200.0,
//                 scale: 1.0,
//                 color1: 0x11101,
//                 color2: 0xa4d13,
//                 speed: 0.5,
//             });
//         }
//
//         return () => {
//             if (vantaInstance.current) {
//                 vantaInstance.current.destroy(); // Nettoyez l'effet pour éviter les fuites mémoire
//             }
//         };
//     }, []);
//
//     return (
//         <>
//             {/* Chargez le script Vanta depuis le CDN */}
//             <Script
//                 src="https://cdnjs.cloudflare.com/ajax/libs/vanta/0.5.24/vanta.cells.min.js"
//                 strategy="beforeInteractive"
//             />
//
//             {/* Conteneur pour l'effet */}
//             <div
//                 ref={vantaRef}
//                 style={{ width: "100%", height: "100vh", position: "relative" }}
//             />
//         </>
//     );
// };
//
export default VantaBackground;
