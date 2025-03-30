'use client'
import { useRef, useMemo, Suspense, useEffect, useState, forwardRef } from 'react'
import { Vector3, CatmullRomCurve3, PCFSoftShadowMap, BackSide, BoxGeometry } from 'three'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { Canvas, useFrame, useThree } from '@react-three/fiber'

const themeColors = {
  server: {
    primary: '#0033cc',
    secondary: '#3366ff',
    emissive: '#66ccff',
    opacity: 0.5,
  },
  router: {
    primary: '#008899',
    secondary: '#00ddff',
    emissive: '#00ffff',
    opacity: 0.5,
  },
  firewall: {
    primary: '#334455',
    secondary: '#667788',
    emissive: '#99bbdd',
    opacity: 0.5,
  },
  switch: {
    primary: '#10b981',
    secondary: '#34d399',
    emissive: '#6ee7b7',
    opacity: 0.5,
  },
  loadBalancer: {
    primary: '#7c3aed',
    secondary: '#8b5cf6',
    emissive: '#a78bfa',
    opacity: 0.5,
  },
}

function Server({ position }) {
  return (
    <group position={position}>
      {/* 主体 */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[1.2, 2, 0.8]} />
        <meshPhongMaterial
          color={themeColors.server.primary}
          emissive={themeColors.server.emissive}
          emissiveIntensity={0.5}
          opacity={themeColors.server.opacity}
          transparent
        />
      </mesh>

      {/* 外壳 */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[1.3, 2.2, 1]} />
        <meshPhongMaterial
          color={themeColors.server.secondary}
          emissive={themeColors.server.emissive}
          emissiveIntensity={0.3}
          opacity={themeColors.server.opacity * 0.8}
          transparent
        />
      </mesh>

      {/* 底座 */}
      <mesh position={[0, -1.2, 0]}>
        <boxGeometry args={[1.2, 0.2, 0.8]} />
        <meshPhongMaterial color={themeColors.server.primary} emissive={themeColors.server.emissive} emissiveIntensity={0.8} />
      </mesh>
    </group>
  )
}

function Switch({ position }) {
  return (
    <group position={position}>
      {/* 主体 */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[3.2, 2, 0.8]} />
        <meshPhongMaterial
          color={themeColors.switch.primary}
          emissive={themeColors.switch.emissive}
          emissiveIntensity={0.5}
          opacity={themeColors.switch.opacity}
          transparent
        />
      </mesh>

      {/* 外壳 */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[3.5, 2.2, 1]} />
        <meshPhongMaterial
          color={themeColors.switch.secondary}
          emissive={themeColors.switch.emissive}
          emissiveIntensity={0.3}
          opacity={themeColors.switch.opacity * 0.8}
          transparent
        />
      </mesh>

      <mesh position={[0, -1.2, 0]}>
        <boxGeometry args={[3.2, 0.2, 0.8]} />
        <meshPhongMaterial color={themeColors.switch.primary} emissive={themeColors.switch.emissive} emissiveIntensity={0.8} />
      </mesh>
    </group>
  )
}

// 添加负载均衡器组件
function LoadBalancer({ position }) {
  return (
    <group position={position}>
      {/* 主体 */}
      <mesh position={[0, 0.6, 0]}>
        <boxGeometry args={[10.2, 3, 0.8]} />
        <meshPhongMaterial
          color={themeColors.loadBalancer.primary}
          emissive={themeColors.loadBalancer.emissive}
          emissiveIntensity={0.5}
          opacity={themeColors.loadBalancer.opacity}
          transparent
        />
      </mesh>

      {/* 外壳 */}
      <mesh position={[0, 0.6, 0]}>
        <boxGeometry args={[10.5, 3.2, 1]} />
        <meshPhongMaterial
          color={themeColors.loadBalancer.secondary}
          emissive={themeColors.loadBalancer.emissive}
          emissiveIntensity={0.3}
          opacity={themeColors.loadBalancer.opacity * 0.8}
          transparent
        />
      </mesh>

      {/* 底座 */}
      <mesh position={[0, -1.2, 0]}>
        <boxGeometry args={[10.2, 0.2, 0.8]} />
        <meshPhongMaterial color={themeColors.loadBalancer.primary} emissive={themeColors.loadBalancer.emissive} emissiveIntensity={0.8} />
      </mesh>
    </group>
  )
}

const Firewall = forwardRef(({ position, messageType }, ref) => {
  const getColors = () => {
    switch (messageType) {
      case 'error':
        return {
          primary: '#dc2626',
          secondary: '#ef4444',
          emissive: '#f87171',
        }
      case 'warning':
        return {
          primary: '#fbbf24',
          secondary: '#fcd34d',
          emissive: '#fde68a',
        }
      case 'success':
        return {
          primary: '#006644',
          secondary: '#00cc88',
          emissive: '#00ffaa',
        }
      case 'info':
        return {
          primary: '#334455',
          secondary: '#667788',
          emissive: '#99bbdd',
        }
      default:
        return themeColors.firewall
    }
  }

  const colors = getColors()
  const normalColor = colors.primary

  return (
    <group position={position}>
      {/* 主体 */}
      <mesh castShadow receiveShadow>
        <boxGeometry args={[3.4, 2, 1]} />
        <meshPhongMaterial
          color={normalColor}
          emissive={colors.emissive}
          emissiveIntensity={0.6}
          opacity={themeColors.firewall.opacity}
          transparent
        />
      </mesh>

      {/* 外壳 */}
      <mesh castShadow receiveShadow>
        <boxGeometry args={[3.6, 2.2, 1.2]} />
        <meshPhongMaterial
          color={colors.secondary}
          emissive={colors.emissive}
          emissiveIntensity={0.4}
          opacity={themeColors.firewall.opacity * 0.8}
          transparent
        />
      </mesh>

      {/* 底座 */}
      <mesh position={[0, -1.2, 0]}>
        <boxGeometry args={[3.4, 0.2, 1]} />
        <meshPhongMaterial color={themeColors.firewall.primary} emissive={themeColors.firewall.emissive} emissiveIntensity={0.8} />
      </mesh>
    </group>
  )
})

function Router({ position }) {
  return (
    <group position={position}>
      {/* 主体 */}
      <mesh>
        <boxGeometry args={[1.3, 1, 1.3]} />
        <meshPhongMaterial
          color={themeColors.router.primary}
          emissive={themeColors.router.emissive}
          emissiveIntensity={0.6}
          opacity={themeColors.router.opacity}
          transparent
        />
      </mesh>

      {/* 外壳 */}
      <mesh>
        <boxGeometry args={[1.5, 1.3, 1.5]} />
        <meshPhongMaterial
          color={themeColors.router.secondary}
          emissive={themeColors.router.emissive}
          emissiveIntensity={0.4}
          opacity={themeColors.router.opacity * 0.8}
          transparent
        />
      </mesh>

      {/* 底座 */}
      <mesh position={[0, -1.2, 0]}>
        <boxGeometry args={[1.3, 0.2, 1.3]} />
        <meshPhongMaterial color={themeColors.router.primary} emissive={themeColors.router.emissive} emissiveIntensity={0.8} />
      </mesh>
    </group>
  )
}

function External({ position }) {
  return (
    <group position={position}>
      <mesh>
        <boxGeometry args={[3, 3, 1]} />
        <meshBasicMaterial color='#FFFFFF' opacity={0.2} transparent />
      </mesh>
    </group>
  )
}

function DataFlow({ start, end }) {
  const particleRefs = useRef([0, 1, 2].map(() => useRef(null)))

  const curve = useMemo(() => {
    const startVec = new Vector3(...start)
    const endVec = new Vector3(...end)

    // 简化为直角路径
    const isVerticalFirst = Math.abs(endVec.z - startVec.z) > Math.abs(endVec.x - startVec.x)
    const points = [startVec]

    if (isVerticalFirst) {
      // 垂直优先：先垂直后水平
      points.push(new Vector3(startVec.x, startVec.y, endVec.z))
      points.push(endVec)
    } else {
      // 水平优先：先水平后垂直
      points.push(new Vector3(endVec.x, startVec.y, startVec.z))
      points.push(endVec)
    }

    return new CatmullRomCurve3(points, false, 'centripetal', 0)
  }, [start, end])

  useFrame(({ clock }) => {
    particleRefs.current.forEach((ref, index) => {
      if (ref.current) {
        const offset = index * 0.33
        const t = (clock.getElapsedTime() * 0.3 + offset) % 1
        const pos = curve.getPoint(t)
        ref.current.position.copy(pos)
      }
    })
  })

  return (
    <group>
      {/* 主线条 */}
      <mesh>
        <tubeGeometry args={[curve, 50, 0.02, 8, false]} />
        <meshBasicMaterial color='#FFFFFF' opacity='0.2' transparent />
      </mesh>

      {/* 粒子效果 */}
      {particleRefs.current.map((_, index) => {
        return (
          <mesh key={index} ref={particleRefs.current[index]}>
            <sphereGeometry args={[0.05]} />
            <meshBasicMaterial color='#4AFFFF' />
          </mesh>
        )
      })}
    </group>
  )
}

function Scene({ messageType }) {
  // 创建 ref 数组
  const firewallRefs = useRef([null, null, null])

  const nodes = [
    // 外部连接点（三个）
    { type: 'external', position: [-6, 0, -60] },
    { type: 'external', position: [0, 0, -60] },
    { type: 'external', position: [6, 0, -60] },

    // 第一层：路由器（三个）
    { type: 'router', position: [-6, 0, -12] },
    { type: 'router', position: [0, 0, -12] },
    { type: 'router', position: [6, 0, -12] },

    // 第二层：防火墙（三个）
    { type: 'firewall', position: [-6, 0, -8] },
    { type: 'firewall', position: [0, 0, -8] },
    { type: 'firewall', position: [6, 0, -8] },

    // 第三层：负载均衡器
    { type: 'loadBalancer', position: [0, 0, 0] },

    // 第四层：交换机（左右）
    { type: 'switch', position: [-3, 0, 4] },
    { type: 'switch', position: [3, 0, 4] },

    // 服务器层（四排）
    // 服务器第一排
    { type: 'server', position: [-6, 0, 9] },
    { type: 'server', position: [-2, 0, 9] },
    { type: 'server', position: [2, 0, 9] },
    { type: 'server', position: [6, 0, 9] },

    // 服务器第二排
    { type: 'server', position: [-6, 0, 11] },
    { type: 'server', position: [-2, 0, 11] },
    { type: 'server', position: [2, 0, 11] },
    { type: 'server', position: [6, 0, 11] },

    // 服务器第三排
    { type: 'server', position: [-6, 0, 13] },
    { type: 'server', position: [-2, 0, 13] },
    { type: 'server', position: [2, 0, 13] },
    { type: 'server', position: [6, 0, 13] },

    // 服务器第四排
    { type: 'server', position: [-6, 0, 15] },
    { type: 'server', position: [-2, 0, 15] },
    { type: 'server', position: [2, 0, 15] },
    { type: 'server', position: [6, 0, 15] },
  ]

  const connections = [
    // 外部到路由器（一对一连接）
    [0, 3], // 左边外部到左边路由器
    [1, 4], // 中间外部到中间路由器
    [2, 5], // 右边外部到右边路由器

    // 路由器到防火墙
    [3, 6], // 左路由器到左防火墙
    [4, 7], // 中路由器到中防火墙
    [5, 8], // 右路由器到右防火墙

    // 路由器之间的交叉连接
    [3, 7],
    [4, 6], // 左中路由器交叉连接到防火墙
    [4, 8],
    [5, 7], // 中右路由器交叉连接到防火墙

    // 防火墙到负载均衡器
    [6, 9],
    [7, 9],
    [8, 9],

    // 负载均衡器到交换机
    [9, 10],
    [9, 11],

    // 交换机到服务器
    // 交换机到第一排服务器
    [10, 12],
    [10, 13],
    [11, 14],
    [11, 15],

    // 交换机到第二排服务器
    [10, 16],
    [10, 17],
    [11, 18],
    [11, 19],

    // 交换机到第三排服务器
    [10, 20],
    [10, 21],
    [11, 22],
    [11, 23],

    // 交换机到第四排服务器
    [10, 24],
    [10, 25],
    [11, 26],
    [11, 27],

    // 交换机之间的连接
    [10, 11],
  ]

  const components = {
    external: External,
    server: Server,
    router: Router,
    firewall: Firewall,
    switch: Switch,
    loadBalancer: LoadBalancer,
  }

  const { camera } = useThree()
  const target = useMemo(() => new Vector3(0, 0, 0), [])

  useEffect(() => {
    if (camera) {
      // 设置相机初始位置
      // camera.position.set(30, 20, 30)
      camera.lookAt(target)
    }
  }, [camera, target])

  // 添加平滑的自动旋转逻辑
  // useFrame(({ clock }) => {
  //   const radius = 40
  //   const angle = clock.getElapsedTime() * 0.1 // 降低旋转速度，使旋转更平滑
  //   const targetX = Math.sin(angle) * radius
  //   const targetZ = Math.cos(angle) * radius
  //   const targetY = 20

  //   // 平滑过渡到目标位置，避免突变
  //   camera.position.x += (targetX - camera.position.x) * 0.05
  //   camera.position.z += (targetZ - camera.position.z) * 0.05
  //   camera.position.y += (targetY - camera.position.y) * 0.05

  //   camera.lookAt(target)
  // })

  return (
    <>
      {/* 服务器左侧机房 */}
      <lineSegments position={[-4, 0.6, 12]}>
        <edgesGeometry args={[new BoxGeometry(7.2, 4.2, 8.2)]} />
        <lineBasicMaterial color='#4AFFFF' opacity={0.8} transparent />
      </lineSegments>

      {/* 服务器右侧机房 */}
      <lineSegments position={[4, 0.6, 12]}>
        <edgesGeometry args={[new BoxGeometry(7.2, 4.2, 8.2)]} />
        <lineBasicMaterial color='#4AFFFF' opacity={0.8} transparent />
      </lineSegments>

      {/* 交换机机房 */}
      <lineSegments position={[0, 0.6, 2]}>
        <edgesGeometry args={[new BoxGeometry(12, 4.2, 8)]} />
        <lineBasicMaterial color='#4AFFFF' opacity={0.8} transparent />
      </lineSegments>

      {/* 防火墙机房 */}
      <lineSegments position={[0, 0.6, -10]}>
        <edgesGeometry args={[new BoxGeometry(15, 4.2, 10)]} />
        <lineBasicMaterial color='#4AFFFF' opacity={0.8} transparent />
      </lineSegments>

      <group>
        {nodes.map((node, i) => {
          const Component = components[node.type]
          // 为防火墙节点添加 ref
          if (node.type === 'firewall') {
            const firewallIndex = i - 6 // 防火墙节点的索引减去6得到0,1,2
            return (
              <Component
                key={i}
                ref={el => (firewallRefs.current[firewallIndex] = el)}
                position={node.position}
                emissiveIntensity={2.5}
                messageType={messageType}
                index={firewallIndex}
              />
            )
          }
          return <Component key={i} position={node.position} emissiveIntensity={2.5} messageType={messageType} />
        })}

        {connections.map(([startIdx, endIdx], i) => (
          <DataFlow
            key={i}
            start={nodes[startIdx].position}
            end={nodes[endIdx].position}
            messageType={messageType}
            startIdx={startIdx}
            endIdx={endIdx}
          />
        ))}
      </group>

      {/* 修改 OrbitControls，禁用缩放和自动旋转 */}
      <OrbitControls enableZoom={false} enablePan={false} enableRotate={true} target={target} />

      {/* 更新相机设置 */}
      <PerspectiveCamera makeDefault position={[30, 30, 20]} fov={24} up={[0, 1, 0]} />
    </>
  )
}

export default function NetworkTopology({ messageType = 'info', className }) {
  if (typeof window === 'undefined') return null

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div className='absolute w-full h-full opacity-40 dark:opacity-5' style={{ backgroundImage: 'linear-gradient(120deg, color(display-p3 0.831 0.87 1), color(display-p3 0.975 0.866 0.904))' }}></div>

      <Canvas
        shadows='soft'
        dpr={window.devicePixelRatio}
        gl={{
          antialias: true,
          alpha: true,
          shadowMap: { type: PCFSoftShadowMap },
        }}
      >
        <Suspense fallback={null}>
          <Scene messageType={messageType} />
        </Suspense>
      </Canvas>
    </div>
  )
}
