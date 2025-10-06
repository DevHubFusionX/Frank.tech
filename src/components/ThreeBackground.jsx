import { Canvas, useFrame } from '@react-three/fiber'
import { useRef, useMemo } from 'react'
import * as THREE from 'three'

// Floating tech cubes with neon glow
function TechCube({ position, delay, color = "#00ff88" }) {
  const meshRef = useRef()

  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.elapsedTime
      meshRef.current.rotation.x = time * 0.4 + delay
      meshRef.current.rotation.y = time * 0.3 + delay
      meshRef.current.rotation.z = time * 0.1 + delay
      meshRef.current.position.y = position[1] + Math.sin(time * 0.8 + delay) * 0.3
      meshRef.current.position.x = position[0] + Math.sin(time * 0.5 + delay) * 0.2
      meshRef.current.rotation.z = position[2] + Math.sin(time * 0.5 + delay) * 0.4

    }
  })

  return (
    <mesh ref={meshRef} position={position}>
      <boxGeometry args={[0.3, 0.3, 0.3]} />
      <meshBasicMaterial
        color={color}
        transparent
        opacity={0.7}
        wireframe
      />
    </mesh>
  )
}

// Circuit board lines
function CircuitLine({ start, end, delay = 0 }) {
  const lineRef = useRef()

  useFrame((state) => {
    if (lineRef.current) {
      const time = state.clock.elapsedTime
      lineRef.current.material.opacity = 0.3 + Math.sin(time * 2 + delay) * 0.2
    }
  })

  const points = useMemo(() => [
    new THREE.Vector3(...start),
    new THREE.Vector3(...end)
  ], [start, end])

  return (
    <line ref={lineRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={points.length}
          array={new Float32Array(points.flatMap(p => [p.x, p.y, p.z]))}
          itemSize={3}
        />
      </bufferGeometry>
      <lineBasicMaterial color="#00ffff" transparent opacity={0.4} />
    </line>
  )
}

// Data stream particles
function DataStream({ position, direction, count = 8 }) {
  const particlesRef = useRef()

  useFrame((state) => {
    if (particlesRef.current) {
      const time = state.clock.elapsedTime
      particlesRef.current.children.forEach((particle, i) => {
        const offset = i / count
        particle.position.x = position[0] + direction[0] * ((time * 2 + offset * 10) % 10 - 5)
        particle.position.y = position[1] + direction[1] * ((time * 2 + offset * 10) % 10 - 5)
        particle.position.z = position[2] + direction[2] * ((time * 2 + offset * 10) % 10 - 5)
        particle.material.opacity = Math.sin(time * 3 + offset * 5) * 0.5 + 0.5
      })
    }
  })

  return (
    <group ref={particlesRef}>
      {Array.from({ length: count }).map((_, i) => (
        <mesh key={i} position={position}>
          <sphereGeometry args={[0.05]} />
          <meshBasicMaterial
            color="#ff0080"
            transparent
            opacity={0.6}
          />
        </mesh>
      ))}
    </group>
  )
}

// Hexagonal tech patterns
function HexPattern({ position, size = 1 }) {
  const hexRef = useRef()

  useFrame((state) => {
    if (hexRef.current) {
      const time = state.clock.elapsedTime
      hexRef.current.rotation.z = time * 0.2
      hexRef.current.material.opacity = 0.4 + Math.sin(time * 1.5) * 0.2
    }
  })

  const hexShape = useMemo(() => {
    const shape = new THREE.Shape()
    const radius = size
    const sides = 6

    for (let i = 0; i <= sides; i++) {
      const angle = (i / sides) * Math.PI * 2
      const x = Math.cos(angle) * radius
      const y = Math.sin(angle) * radius

      if (i === 0) {
        shape.moveTo(x, y)
      } else {
        shape.lineTo(x, y)
      }
    }

    return shape
  }, [size])

  return (
    <mesh ref={hexRef} position={position}>
      <extrudeGeometry args={[hexShape, { depth: 0.1, bevelEnabled: false }]} />
      <meshBasicMaterial
        color="#00ff88"
        transparent
        opacity={0.5}
        wireframe
      />
    </mesh>
  )
}

function TechyBackground() {
  // Tech cubes with different colors
  const techCubes = useMemo(() => [
    { pos: [-3, 2, -1], delay: 0, color: "#00ff88" },
    { pos: [3, -1, 1], delay: 1, color: "#0088ff" },
    { pos: [0, 3, -2], delay: 2, color: "#ff0080" },
    { pos: [-2, -2, 2], delay: 3, color: "#ffff00" },
    { pos: [2, 1, -1], delay: 4, color: "#ff8800" },
    { pos: [-1, 0, 3], delay: 5, color: "#8800ff" }
  ], [])

  // Circuit connections
  const circuits = useMemo(() => [
    { start: [-3, 2, -1], end: [0, 3, -2], delay: 0 },
    { start: [3, -1, 1], end: [2, 1, -1], delay: 1 },
    { start: [-2, -2, 2], end: [-1, 0, 3], delay: 2 },
    { start: [0, 3, -2], end: [3, -1, 1], delay: 3 },
    { start: [-3, 2, -1], end: [-2, -2, 2], delay: 4 }
  ], [])

  // Data streams
  const dataStreams = useMemo(() => [
    { pos: [-4, 0, 0], dir: [1, 0, 0] },
    { pos: [0, -3, 0], dir: [0, 1, 0] },
    { pos: [0, 0, -4], dir: [0, 0, 1] }
  ], [])

  // Hexagonal patterns
  const hexPatterns = useMemo(() => [
    { pos: [-5, 0, -3], size: 0.8 },
    { pos: [5, 0, 3], size: 1.2 },
    { pos: [0, 4, 0], size: 0.6 },
    { pos: [0, -4, 0], size: 1.0 }
  ], [])

  return (
    <group>
      {/* Tech cubes */}
      {techCubes.map((cube, i) => (
        <TechCube
          key={`cube-${i}`}
          position={cube.pos}
          delay={cube.delay}
          color={cube.color}
        />
      ))}

      {/* Circuit lines */}
      {circuits.map((circuit, i) => (
        <CircuitLine
          key={`circuit-${i}`}
          start={circuit.start}
          end={circuit.end}
          delay={circuit.delay}
        />
      ))}

      {/* Data streams */}
      {dataStreams.map((stream, i) => (
        <DataStream
          key={`stream-${i}`}
          position={stream.pos}
          direction={stream.dir}
          count={10}
        />
      ))}

      {/* Hexagonal patterns */}
      {hexPatterns.map((hex, i) => (
        <HexPattern
          key={`hex-${i}`}
          position={hex.pos}
          size={hex.size}
        />
      ))}
    </group>
  )
}

export default function ThreeBackground() {
  return (
    <div className="absolute inset-0 z-10 opacity-40 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 75 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.6} />
        <TechyBackground />
      </Canvas>
    </div>
  )
}