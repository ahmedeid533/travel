// components/Globe.tsx

"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";

const Globe = () => {
	return (
		<Canvas>
			<ambientLight intensity={0.5} />
			<directionalLight position={[3, 2, 1]} />
			<OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
			<Sphere args={[1, 100, 200]} scale={2.5}>
				<MeshDistortMaterial
					color="#3a0ca3"
					attach="material"
					distort={0.5}
					speed={1.5}
				/>
			</Sphere>
		</Canvas>
	);
};

export default Globe;
