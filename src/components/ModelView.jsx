import { Html, OrbitControls, PerspectiveCamera, View } from "@react-three/drei"

import * as THREE from 'three'
import Lights from "./Lights"
import Loader from "./Loader"
import Iphone from './Iphone';
import { Suspense } from "react";



const ModelView = ({index, groupRef, gsapType,
controlRef, setRotationState, size,item}) => {
  return (
    <View
      index={index}
      id={gsapType}
      className={`w-full h-full absolute `}
    >
        <ambientLight intensity={-1}/>

        <PerspectiveCamera makeDefault position={[1,1,5]}/>

        <Lights/>

        <OrbitControls 
        makeDefault
        ref={controlRef}
        enableZoom={false}
        enablePan={false}
        rotateSpeed={0.4}
        target={new THREE.Vector3(0, -2 ,0)}
        onEnd={() => setRotationState(controlRef.current.getAzimuthalAngle())}/>

        <group ref={groupRef} name={`'small'`} position={[0,-1,0]}>
        <Suspense fallback={<Loader />}>
        <Iphone 
            scale={[1.1, 1.1, 1.1] }
            item={item}
            size={size}
          />
        </Suspense>
        </group>
        

    </View>
  )
}

export default ModelView