'use client'
import { useRef, useMemo, Suspense, useEffect, useState, forwardRef, useImperativeHandle } from 'react'
import { Vector3, CatmullRomCurve3, MeshBasicMaterial, PCFSoftShadowMap } from 'three'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { Canvas, useFrame, useThree } from '@react-three/fiber'

const particleColors = {
  info: '#4488ff',
  warning: '#ffbb33',
  error: '#ff4444',
  success: '#44ff88',
  default: '#ffffff',
}

// 设置深蓝色主题色
const themeColors = {
  background: '#000520',
  primary: '#4466dd',
  secondary: '#5577ff',
  accent: '#6699ff',
  emissive: '#4488ff',
  lines: '#4466dd',
}

function External({ position }) {
  return (
    <group position={position}>
      <mesh castShadow receiveShadow>
        <cylinderGeometry args={[1.3, 1.3, 0.5, 20]} />
        <meshStandardMaterial opacity={0.2} transparent metalness={0.7} roughness={0.2} emissiveIntensity={0.3} />
      </mesh>
    </group>
  )
}

function Server({ position, emissiveIntensity = 2.5 }) {
  return (
    <group position={position}>
      <mesh castShadow receiveShadow>
        <boxGeometry args={[1.2, 0.3, 0.6]} />
        <meshStandardMaterial color='#0ea5e9' metalness={0.5} roughness={0.2} emissive='#0ea5e9' emissiveIntensity={0.5} />
      </mesh>

      <mesh>
        <boxGeometry args={[1.3, 0.4, 0.7]} />
        <meshStandardMaterial color='#0ea5e9' opacity={0.7} transparent metalness={0.5} roughness={0.2} emissive='#0ea5e9' emissiveIntensity={0.5} />
      </mesh>

      <mesh castShadow receiveShadow position={[0, -0.3, 0]}>
        <meshStandardMaterial
          color={themeColors.primary}
          emissive={themeColors.emissive}
          emissiveIntensity={emissiveIntensity}
          metalness={0.9}
          roughness={0.1}
        />
        <boxGeometry args={[1, 0.1, 0.5]} />
      </mesh>
    </group>
  )
}

function Router({ position, emissiveIntensity = 2.5 }) {
  return (
    <group position={position}>
      <mesh castShadow receiveShadow>
        <cylinderGeometry args={[1, 1, 0.3, 20]} />
        <meshStandardMaterial
          color={themeColors.primary}
          opacity={1}
          transparent
          metalness={0.9}
          roughness={0.1}
          emissive={themeColors.emissive}
          emissiveIntensity={emissiveIntensity}
        />
      </mesh>
      <mesh castShadow receiveShadow>
        <cylinderGeometry args={[1.3, 1.3, 0.5, 20]} />
        <meshStandardMaterial
          color='#0ea5e9'
          opacity={0.7}
          transparent
          metalness={0.9}
          roughness={0.1}
          emissive={themeColors.emissive}
          emissiveIntensity={emissiveIntensity}
        />
      </mesh>
    </group>
  )
}

// 修改 Firewall 组件为 forwardRef 形式
const Firewall = forwardRef(({ position, emissiveIntensity = 2.5, messageType, index }, ref) => {
  const [isBlinking, setIsBlinking] = useState(false)

  // 暴露给父组件的方法
  useImperativeHandle(ref, () => ({
    startBlink: () => {
      setIsBlinking(true)
      // 自动关闭闪烁
      setTimeout(() => setIsBlinking(false), 1000)
    },
  }))

  const warningColor = '#ff0000'
  const warningEmissive = '#ff2200'
  const warningIntensity = 8

  return (
    <group position={position}>
      {/* 主体 */}
      <mesh rotation={[0, Math.PI / 4, 0]} castShadow receiveShadow>
        <boxGeometry args={[1.5, 0.8, 1.5]} />
        <meshStandardMaterial
          color={isBlinking ? warningColor : themeColors.primary}
          opacity={1}
          transparent
          metalness={0.9}
          roughness={0.1}
          emissive={isBlinking ? warningEmissive : themeColors.emissive}
          emissiveIntensity={isBlinking ? warningIntensity : emissiveIntensity}
        />
      </mesh>

      {/* 外壳 */}
      <mesh rotation={[0, Math.PI / 4, 0]} castShadow receiveShadow>
        <boxGeometry args={[2, 1, 2]} />
        <meshStandardMaterial
          color={isBlinking ? warningColor : '#0ea5e9'}
          opacity={isBlinking ? 0.8 : 0.7}
          transparent
          metalness={0.9}
          roughness={0.1}
          emissive={isBlinking ? warningEmissive : themeColors.emissive}
          emissiveIntensity={isBlinking ? warningIntensity * 0.8 : emissiveIntensity}
        />
      </mesh>

      {/* 中央警示灯 */}
      <mesh rotation={[0, Math.PI / 4, 0]} position={[0, 0.5, 0]}>
        <boxGeometry args={[0.3, 0.1, 0.3]} />
        <meshStandardMaterial
          color={warningColor}
          emissive={warningEmissive}
          emissiveIntensity={isBlinking ? warningIntensity * 1.5 : 3}
          metalness={1}
          roughness={0}
        />
      </mesh>

      {/* 四角装饰灯 */}
      {[
        [-0.5, 0.5],
        [0.5, 0.5],
        [-0.5, -0.5],
        [0.5, -0.5],
      ].map(([x, z], i) => (
        <mesh key={i} rotation={[0, Math.PI / 4, 0]} position={[x, 0.45, z]}>
          <boxGeometry args={[0.1, 0.05, 0.1]} />
          <meshStandardMaterial color='#00ff00' emissive='#00ff00' emissiveIntensity={2} metalness={1} roughness={0} />
        </mesh>
      ))}
    </group>
  )
})

function Switch({ position, emissiveIntensity = 2.5 }) {
  return (
    <group position={position}>
      {/* 主体 */}
      <mesh castShadow receiveShadow>
        <boxGeometry args={[5.1, 0.3, 1.2]} />
        <meshStandardMaterial
          color={themeColors.primary}
          metalness={0.9}
          roughness={0.1}
          emissive={themeColors.emissive}
          emissiveIntensity={emissiveIntensity}
        />
      </mesh>

      {/* 端口指示灯 */}
      {Array.from({ length: 8 }, (_, i) => (
        <group key={i} position={[-2 + i * 0.5, 0.15, 0]}>
          <mesh position={[0, 0, 0.4]}>
            <boxGeometry args={[0.2, 0.1, 0.1]} />
            <meshStandardMaterial
              color={i % 2 ? '#ffff00' : '#00ff00'}
              emissive={i % 2 ? '#ffff00' : '#00ff00'}
              emissiveIntensity={2}
              metalness={1}
              roughness={0}
            />
          </mesh>
          <mesh position={[0, 0, -0.4]}>
            <boxGeometry args={[0.2, 0.1, 0.1]} />
            <meshStandardMaterial
              color={i % 3 ? '#00ff00' : '#ffff00'}
              emissive={i % 3 ? '#00ff00' : '#ffff00'}
              emissiveIntensity={2}
              metalness={1}
              roughness={0}
            />
          </mesh>
        </group>
      ))}

      {/* 状态指示灯 */}
      <mesh position={[2.4, 0.2, 0]}>
        <cylinderGeometry args={[0.1, 0.1, 0.2, 8]} />
        <meshStandardMaterial color='#00ff00' emissive='#00ff00' emissiveIntensity={3} metalness={1} roughness={0} />
      </mesh>

      {/* 透明外壳 */}
      <mesh castShadow receiveShadow>
        <boxGeometry args={[5.5, 0.5, 1.6]} />
        <meshStandardMaterial
          color='#0ea5e9'
          opacity={0.7}
          transparent
          metalness={0.9}
          roughness={0.1}
          emissive={themeColors.emissive}
          emissiveIntensity={emissiveIntensity}
        />
      </mesh>

      {/* 散热孔 */}
      {Array.from({ length: 6 }, (_, i) => (
        <mesh key={i} position={[-2.2 + i * 0.8, 0, 0]}>
          <cylinderGeometry args={[0.05, 0.05, 0.31, 6]} rotation={[Math.PI / 2, 0, 0]} />
          <meshStandardMaterial color='#000000' metalness={1} roughness={0} />
        </mesh>
      ))}
    </group>
  )
}

// 添加负载均衡器组件
function LoadBalancer({ position, emissiveIntensity = 2.5 }) {
  return (
    <group position={position}>
      {/* 主体 */}
      <mesh castShadow receiveShadow>
        <boxGeometry args={[7, 0.6, 1.8]} />
        <meshStandardMaterial
          color={themeColors.primary}
          metalness={0.9}
          roughness={0.1}
          emissive={themeColors.emissive}
          emissiveIntensity={emissiveIntensity}
        />
      </mesh>

      {/* 透明外壳 */}
      <mesh castShadow receiveShadow>
        <boxGeometry args={[7.5, 0.8, 2.3]} />
        <meshStandardMaterial
          color='#0ea5e9'
          opacity={0.7}
          transparent
          metalness={0.9}
          roughness={0.1}
          emissive='#0ea5e9'
          emissiveIntensity={emissiveIntensity}
        />
      </mesh>

      {/* 中央处理单元指示灯 */}
      <mesh position={[0, 0.31, 0]}>
        <boxGeometry args={[0.8, 0.1, 0.8]} />
        <meshStandardMaterial color='#00ffff' emissive='#00ffff' emissiveIntensity={3} metalness={1} roughness={0} />
      </mesh>

      {/* 状态指示灯（左侧） */}
      {[-2.5, -1.5, -0.5, 0.5, 1.5, 2.5].map((x, i) => (
        <mesh key={`left-${i}`} position={[x, 0.31, -0.8]}>
          <boxGeometry args={[0.15, 0.05, 0.15]} />
          <meshStandardMaterial color='#ffff00' emissive='#ffff00' emissiveIntensity={3} metalness={1} roughness={0} />
        </mesh>
      ))}

      {/* 状态指示灯（右侧） */}
      {[-2.5, -1.5, -0.5, 0.5, 1.5, 2.5].map((x, i) => (
        <mesh key={`right-${i}`} position={[x, 0.31, 0.8]}>
          <boxGeometry args={[0.15, 0.05, 0.15]} />
          <meshStandardMaterial color='#00ff00' emissive='#00ff00' emissiveIntensity={3} metalness={1} roughness={0} />
        </mesh>
      ))}

      {/* 装饰条 */}
      <mesh position={[0, 0, 1]} castShadow receiveShadow>
        <boxGeometry args={[6.8, 0.1, 0.1]} />
        <meshStandardMaterial color='#4488ff' emissive='#4488ff' emissiveIntensity={2} metalness={1} roughness={0} />
      </mesh>
      <mesh position={[0, 0, -1]} castShadow receiveShadow>
        <boxGeometry args={[6.8, 0.1, 0.1]} />
        <meshStandardMaterial color='#4488ff' emissive='#4488ff' emissiveIntensity={2} metalness={1} roughness={0} />
      </mesh>

      {/* 散热纹理 */}
      {[-3, -2, -1, 0, 1, 2, 3].map((x, i) => (
        <mesh key={`vent-${i}`} position={[x, 0, 0]}>
          <boxGeometry args={[0.5, 0.61, 1.81]} />
          <meshStandardMaterial
            color={themeColors.primary}
            metalness={0.95}
            roughness={0.05}
            emissive={themeColors.emissive}
            emissiveIntensity={emissiveIntensity * 0.5}
          />
        </mesh>
      ))}
    </group>
  )
}

function DataFlow({ start, end, messageType = 'info', startIdx, endIdx }) {
  const particleRefs = useRef([0, 1, 2].map(() => useRef(null)))
  const lastType = useRef(messageType)

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

        // 修改判断逻辑：只有经过防火墙后才变为白色
        // 防火墙的索引是 6,7,8，所以 endIdx > 8 表示已经通过防火墙
        if (t < 0.1 && lastType.current !== messageType) {
          const isBeforeFirewall = endIdx <= 8
          const color = isBeforeFirewall ? particleColors[messageType] : particleColors.default
          ref.current.material.color.setStyle(color)
          ref.current.material.emissive.setStyle(color)
          lastType.current = messageType
        }
      }
    })
  })

  // 对于线条颜色，保持原有的蓝色基调
  const lineColor = themeColors.lines
  const lineOpacity = 0.4

  return (
    <group>
      {/* 主线条 */}
      <mesh>
        <tubeGeometry args={[curve, 50, 0.02, 8, false]} />
        <meshStandardMaterial color={lineColor} opacity={lineOpacity} transparent metalness={0.8} roughness={0.2} />
      </mesh>

      {/* 发光效果线条 */}
      <mesh>
        <tubeGeometry args={[curve, 50, 0.05, 8, false]} />
        <meshBasicMaterial color={themeColors.accent} transparent opacity={lineOpacity / 2} />
      </mesh>

      {/* 粒子效果 */}
      {particleRefs.current.map((_, index) => {
        const isBeforeFirewall = startIdx <= 2 // 初始粒子颜色也遵循同样的逻辑
        const initialColor = isBeforeFirewall ? particleColors[messageType] : particleColors.default
        return (
          <mesh key={index} ref={particleRefs.current[index]}>
            <sphereGeometry args={[0.08]} />
            <meshStandardMaterial color={initialColor} emissive={initialColor} emissiveIntensity={2} metalness={1} roughness={0} />
          </mesh>
        )
      })}
    </group>
  )
}

// 添加光柱效果
function LightBeam({ start, end, color = '#4488ff', width = 0.1 }) {
  const points = [new Vector3(...start), new Vector3(...end)]
  const curve = new CatmullRomCurve3(points)

  return (
    <mesh>
      <tubeGeometry args={[curve, 20, width, 8, false]} />
      <meshBasicMaterial color={color} transparent opacity={0.1} />
    </mesh>
  )
}

function Scene({ messageType }) {
  // 创建 ref 数组
  const firewallRefs = useRef([null, null, null])

  useEffect(() => {
    if (messageType === 'error') {
      // 随机选择一个防火墙闪烁
      const randomIndex = Math.floor(Math.random() * 3)
      firewallRefs.current[randomIndex]?.startBlink?.()
    }
  }, [messageType])

  const nodes = [
    // 外部连接点（三个）
    { type: 'external', position: [-6, 0, -120] },
    { type: 'external', position: [0, 0, -120] },
    { type: 'external', position: [6, 0, -120] },

    // 第一层：路由器（三个）
    { type: 'router', position: [-6, 0, -12] },
    { type: 'router', position: [0, 0, -12] },
    { type: 'router', position: [6, 0, -12] },
    { type: 'firewall', position: [-6, 0, -6] },
    { type: 'firewall', position: [0, 0, -6] },
    { type: 'firewall', position: [6, 0, -6] },

    // 第三层：负载均衡器
    { type: 'loadBalancer', position: [0, 0, 0] },

    // 第四层：交换机（左右）
    { type: 'switch', position: [-4, 0, 4] },
    { type: 'switch', position: [4, 0, 4] },

    // 服务器层（四排）
    // 服务器第一排
    { type: 'server', position: [-6, 0, 8] },
    { type: 'server', position: [-2, 0, 8] },
    { type: 'server', position: [2, 0, 8] },
    { type: 'server', position: [6, 0, 8] },

    // 服务器第二排
    { type: 'server', position: [-6, 0, 10] },
    { type: 'server', position: [-2, 0, 10] },
    { type: 'server', position: [2, 0, 10] },
    { type: 'server', position: [6, 0, 10] },

    // 服务器第三排
    { type: 'server', position: [-6, 0, 12] },
    { type: 'server', position: [-2, 0, 12] },
    { type: 'server', position: [2, 0, 12] },
    { type: 'server', position: [6, 0, 12] },

    // 服务器第四排
    { type: 'server', position: [-6, 0, 14] },
    { type: 'server', position: [-2, 0, 14] },
    { type: 'server', position: [2, 0, 14] },
    { type: 'server', position: [6, 0, 14] },
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

  // 添加自动旋转逻辑
  useFrame(({ clock }) => {
    const radius = 40
    const angle = clock.getElapsedTime() * 0.2 // 控制旋转速度
    camera.position.x = Math.sin(angle) * radius
    camera.position.z = Math.cos(angle) * radius
    camera.position.y = 20
    camera.lookAt(target)
  })

  return (
    <>
      <color attach='background' args={[themeColors.background]} />

      {/* 添加垂直光柱 */}
      {/* {[-10, -5, 5, 10].map((x, i) => (
        <LightBeam key={`beam-${i}`} start={[x, -10, 0]} end={[x, 10, 0]} color={i % 2 ? '#0066ff' : '#00ffff'} width={0.05} />
      ))} */}

      {/* 添加网格光效 */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.9, 0]}>
        <planeGeometry args={[40, 40]} />
        <meshBasicMaterial color='#001133' transparent opacity={0.1} wireframe wireframeLinewidth={1} />
      </mesh>

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
      <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} target={target} />

      {/* 更新相机设置 */}
      <PerspectiveCamera makeDefault position={[30, 20, 30]} fov={18} up={[0, 1, 0]} />
    </>
  )
}

export default function NetworkTopology({ messageType = 'info' }) {
  if (typeof window === 'undefined') return null

  return (
    <div className='w-full h-full bg-white'>
      <Canvas
        shadows='soft'
        dpr={window.devicePixelRatio}
        gl={{
          antialias: true,
          alpha: false,
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
