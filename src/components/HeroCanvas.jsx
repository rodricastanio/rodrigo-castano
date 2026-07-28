import { useMemo, useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"

function Particles({ count = 120 }) {
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 16
      pos[i * 3 + 1] = (Math.random() - 0.5) * 16
      pos[i * 3 + 2] = (Math.random() - 0.5) * 8
    }
    return pos
  }, [count])

  const mesh = useRef()

  useFrame(({ clock }) => {
    if (!mesh.current) return
    mesh.current.rotation.y = clock.getElapsedTime() * 0.015
  })

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.025}
        color="#1a8cff"
        transparent
        opacity={0.5}
        sizeAttenuation
      />
    </points>
  )
}

export const HeroCanvas = () => {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 4], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <Particles />
      </Canvas>
    </div>
  )
}
