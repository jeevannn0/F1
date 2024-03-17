import ModelView from "./ModelView";
import { useRef, useState } from "react";
import { yellowImg } from "../utils";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import * as THREE from 'three';
import { Canvas } from "@react-three/fiber";
import { View } from "@react-three/drei";
import { models, sizes } from "../constants";



const Model = () => {
    const [size, setSize] = useState('small');
    const [model, setModel] = useState({
        title: 'Mercedes AMG F1 W09 EQ Power+',
        color: ['#8F8A81', '#FFE7B9', '#6F6C64'],
        img: yellowImg,
    })

    // camera control for the model view
    const cameraControlSmall = useRef();
    const cameraControlLarge = useRef();

    // model
    const small = useRef(new THREE.Group());
    const large = useRef(new THREE.Group());

    //rotation
    const [smallRotation, setSmallRotation] = useState(0);
    const [largeRotation, setLargeRotation] = useState(0);

    const tl = gsap.timeline();



    useGSAP(() => {
        gsap.to('#heading', { y: 0, opacity: 1 })
    }, []);

    return (
        <section className="common-padding">
            <div className="screen-max-width">
                <h1 id="heading" className="section-heading">
                    Take a closer look.
                </h1>

                <div className="flex flex-col items-center mt-5">
                    <div className="w-full h-[75vh] md:h-[90vh] overflow-hidden relative">
                        <ModelView
                            index={1}
                            groupRef={small}
                            gsapType="view1"
                            controlRef={cameraControlSmall}
                            setRotationState={setSmallRotation}
                            item={model}
                            size={size} />

                        

                        <Canvas
                            className="w-full h-full"
                            style={{
                                position: 'fixed',
                                top: 0,
                                bottom: 0,
                                left: 0,
                                right: 0,
                                overflow: 'hidden'
                            }}
                            eventSource={document.getElementById('root')}
                        >
                            <View.Port />
                        </Canvas>
                    </div>

                    <div className="mx-auto w-full">
                        <p className="text-sm font-light text-center mb-5">{model.title}</p>

                        
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Model