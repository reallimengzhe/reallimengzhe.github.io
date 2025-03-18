'use client'
import { useRef, useMemo, Suspense, useEffect, useState, forwardRef, useImperativeHandle } from 'react'
import { Vector3, CatmullRomCurve3, MeshBasicMaterial, PCFSoftShadowMap, ShaderMaterial, PlaneGeometry, BackSide } from 'three'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { Canvas, useFrame, useThree } from '@react-three/fiber'

// 设置深蓝色主题色
const themeColors = {
  background: '#000520',
  primary: '#4466dd',
  secondary: '#5577ff',
  accent: '#6699ff',
  emissive: '#4488ff',
  lines: '#4466dd',
  // 渐变背景色
  gradientTop: '#00ffff',
  gradientBottom: '#0066ff',
}

function External({ position }) {
  return (
    <group position={position}>
      <mesh>
        <cylinderGeometry args={[1.3, 1.3, 0.5, 20]} />
        <meshBasicMaterial opacity={0.2} transparent />
      </mesh>
    </group>
  )
}

function Server({ position }) {
  return (
    <group position={position}>
      <mesh>
        <boxGeometry args={[1.2, 0.3, 0.6]} />
        <meshBasicMaterial color='#0ea5e9' />
      </mesh>

      <mesh>
        <boxGeometry args={[1.3, 0.4, 0.7]} />
        <meshBasicMaterial color='#0ea5e9' opacity={0.7} transparent />
      </mesh>

      <mesh position={[0, -0.3, 0]}>
        <boxGeometry args={[1, 0.1, 0.5]} />
        <meshBasicMaterial color={themeColors.primary} />
      </mesh>
    </group>
  )
}

function Router({ position }) {
  return (
    <group position={position}>
      <mesh>
        <cylinderGeometry args={[1, 1, 0.3, 20]} />
        <meshBasicMaterial color={themeColors.primary} opacity={1} transparent />
      </mesh>
      <mesh>
        <cylinderGeometry args={[1.3, 1.3, 0.5, 20]} />
        <meshBasicMaterial color='#0ea5e9' opacity={0.7} transparent />
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

function Switch({ position }) {
  return (
    <group position={position}>
      {/* 主体 */}
      <mesh>
        <boxGeometry args={[5.1, 0.3, 1.2]} />
        <meshBasicMaterial color={themeColors.primary} />
      </mesh>

      {/* 端口指示灯 */}
      {Array.from({ length: 8 }, (_, i) => (
        <group key={i} position={[-2 + i * 0.5, 0.15, 0]}>
          <mesh position={[0, 0, 0.4]}>
            <boxGeometry args={[0.2, 0.1, 0.1]} />
            <meshBasicMaterial color={i % 2 ? '#ffff00' : '#00ff00'} />
          </mesh>
          <mesh position={[0, 0, -0.4]}>
            <boxGeometry args={[0.2, 0.1, 0.1]} />
            <meshBasicMaterial color={i % 3 ? '#00ff00' : '#ffff00'} />
          </mesh>
        </group>
      ))}

      {/* 状态指示灯 */}
      <mesh position={[2.4, 0.2, 0]}>
        <cylinderGeometry args={[0.1, 0.1, 0.2, 8]} />
        <meshBasicMaterial color='#00ff00' />
      </mesh>

      {/* 透明外壳 */}
      <mesh>
        <boxGeometry args={[5.5, 0.5, 1.6]} />
        <meshBasicMaterial color='#0ea5e9' opacity={0.7} transparent />
      </mesh>

      {/* 散热孔 */}
      {Array.from({ length: 6 }, (_, i) => (
        <mesh key={i} position={[-2.2 + i * 0.8, 0, 0]}>
          <cylinderGeometry args={[0.05, 0.05, 0.31, 6]} rotation={[Math.PI / 2, 0, 0]} />
          <meshBasicMaterial color='#000000' />
        </mesh>
      ))}
    </group>
  )
}

// 添加负载均衡器组件
function LoadBalancer({ position }) {
  return (
    <group position={position}>
      {/* 主体 */}
      <mesh>
        <boxGeometry args={[7, 0.6, 1.8]} />
        <meshBasicMaterial color={themeColors.primary} />
      </mesh>

      {/* 透明外壳 */}
      <mesh>
        <boxGeometry args={[7.5, 0.8, 2.3]} />
        <meshBasicMaterial color='#0ea5e9' opacity={0.7} transparent />
      </mesh>

      {/* 中央处理单元指示灯 */}
      <mesh position={[0, 0.31, 0]}>
        <boxGeometry args={[0.8, 0.1, 0.8]} />
        <meshBasicMaterial color='#00ffff' />
      </mesh>

      {/* 状态指示灯（左侧） */}
      {[-2.5, -1.5, -0.5, 0.5, 1.5, 2.5].map((x, i) => (
        <mesh key={`left-${i}`} position={[x, 0.31, -0.8]}>
          <boxGeometry args={[0.15, 0.05, 0.15]} />
          <meshBasicMaterial color='#ffff00' />
        </mesh>
      ))}

      {/* 状态指示灯（右侧） */}
      {[-2.5, -1.5, -0.5, 0.5, 1.5, 2.5].map((x, i) => (
        <mesh key={`right-${i}`} position={[x, 0.31, 0.8]}>
          <boxGeometry args={[0.15, 0.05, 0.15]} />
          <meshBasicMaterial color='#00ff00' />
        </mesh>
      ))}

      {/* 装饰条 */}
      <mesh position={[0, 0, 1]}>
        <boxGeometry args={[6.8, 0.1, 0.1]} />
        <meshBasicMaterial color='#4488ff' />
      </mesh>
      <mesh position={[0, 0, -1]}>
        <boxGeometry args={[6.8, 0.1, 0.1]} />
        <meshBasicMaterial color='#4488ff' />
      </mesh>

      {/* 散热纹理 */}
      {[-3, -2, -1, 0, 1, 2, 3].map((x, i) => (
        <mesh key={`vent-${i}`} position={[x, 0, 0]}>
          <boxGeometry args={[0.5, 0.61, 1.81]} />
          <meshBasicMaterial color={themeColors.primary} />
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

  // 统一使用亮青色
  const lineColor = '#4AFFFF'
  const lineOpacity = 0.6

  // 当messageType变化时更新颜色
  useEffect(() => {
    lastType.current = messageType
    particleRefs.current.forEach(ref => {
      if (ref.current) {
        ref.current.material.color.setStyle(lineColor)
      }
    })
  }, [messageType, lineColor])

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
        <meshBasicMaterial color={lineColor} opacity={lineOpacity} transparent />
      </mesh>

      {/* 发光效果线条 */}
      <mesh>
        <tubeGeometry args={[curve, 50, 0.05, 8, false]} />
        <meshBasicMaterial color={lineColor} transparent opacity={lineOpacity / 2} />
      </mesh>

      {/* 粒子效果 */}
      {particleRefs.current.map((_, index) => {
        return (
          <mesh key={index} ref={particleRefs.current[index]}>
            <sphereGeometry args={[0.08]} />
            <meshBasicMaterial color={lineColor} />
          </mesh>
        )
      })}
    </group>
  )
}

// 创建渐变背景组件
function GradientBackground() {
  // 创建渐变着色器材质并添加时间变量以实现动态效果
  const uniforms = useMemo(
    () => ({
      u_time: { value: 0 },
      colorTop: { value: new Vector3(0, 1, 1) }, // 青色 #00ffff
      colorBottom: { value: new Vector3(0, 0.2, 1) }, // 更深的蓝色 #0033ff
    }),
    []
  )

  const gradientMaterial = useMemo(() => {
    return new ShaderMaterial({
      uniforms,
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float u_time;
        uniform vec3 colorTop;
        uniform vec3 colorBottom;
        varying vec2 vUv;
        
        void main() {
          // 创建更平滑的基础渐变
          float gradientFactor = pow(vUv.y, 1.2); // 使用幂函数使渐变更自然
          vec3 baseGradient = mix(colorBottom, colorTop, gradientFactor);
          
          // 添加更细腻的波浪效果
          float wave1 = sin(u_time * 0.3 + vUv.x * 5.0) * 0.03;
          float wave2 = cos(u_time * 0.2 + vUv.y * 4.0) * 0.02;
          float wave3 = sin(u_time * 0.1 + (vUv.x + vUv.y) * 6.0) * 0.015;
          
          // 组合波浪效果
          float waveEffect = wave1 + wave2 + wave3;
          
          // 调整渐变位置，添加波动感
          float adjustedY = vUv.y + waveEffect;
          vec3 waveGradient = mix(colorBottom, colorTop, clamp(adjustedY, 0.0, 1.0));
          
          // 混合基础渐变和波浪渐变
          vec3 mixedColor = mix(baseGradient, waveGradient, 0.7);
          
          // 添加光晕效果
          float glow = 0.05 * (sin(u_time * 0.2) * 0.5 + 0.5);
          vec3 glowColor = vec3(0.3, 0.7, 1.0);
          mixedColor += glow * glowColor * (1.0 - vUv.y * 0.8);
          
          // 添加微小的噪点效果增加质感
          float noise = fract(sin(dot(vUv, vec2(12.9898, 78.233) * u_time * 0.01)) * 43758.5453);
          mixedColor += noise * 0.02;
          
          gl_FragColor = vec4(mixedColor, 1.0);
        }
      `,
    })
  }, [uniforms])

  // 更新时间变量
  useFrame(({ clock }) => {
    uniforms.u_time.value = clock.getElapsedTime()
  })

  return (
    <mesh>
      <sphereGeometry args={[150, 64, 64]} />
      <shaderMaterial
        attach='material'
        side={BackSide}
        transparent={true}
        args={[
          {
            uniforms: {
              u_time: { value: 0 },
            },
            vertexShader: `
        varying vec3 vPosition;
        varying vec2 vUv;
        void main() {
          vPosition = position;
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
            fragmentShader: `
        uniform float u_time;
        varying vec3 vPosition;
        varying vec2 vUv;
        
        void main() {
          // 计算从底部到顶部的渐变，使用更宽的过渡区域
          float yGradient = smoothstep(-1.0, 1.0, vPosition.y / 120.0);
          
          // 更鲜明的青蓝色渐变
          vec3 color1 = vec3(0.0, 0.1, 0.2); // 更亮的深蓝色
          vec3 color2 = vec3(0.0, 0.5, 0.8); // 明显的亮蓝色
          vec3 baseColor = mix(color1, color2, yGradient);
          
          // 添加一些微弱的星星点缀
          vec2 pos = vUv * 30.0;
          vec2 i = floor(pos);
          float sparkle = 0.0;
          
          // 简单的随机函数
          float random = fract(sin(dot(i, vec2(12.9898, 78.233))) * 43758.5453);
          
          // 只在一些随机位置添加星星，增加亮度
          if(random > 0.985) {
            vec2 f = fract(pos);
            float d = length(f - 0.5);
            sparkle = 0.025 / (d * d) * (0.7 + 0.5 * sin(u_time * 0.5 + random * 10.0));
          }
          
          vec3 finalColor = baseColor + vec3(sparkle);
          gl_FragColor = vec4(finalColor, 1.0);
        }
      `,
          },
        ]}
      />
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

  // 添加平滑的自动旋转逻辑
  useFrame(({ clock }) => {
    const radius = 40
    const angle = clock.getElapsedTime() * 0.1 // 降低旋转速度，使旋转更平滑
    const targetX = Math.sin(angle) * radius
    const targetZ = Math.cos(angle) * radius
    const targetY = 20

    // 平滑过渡到目标位置，避免突变
    camera.position.x += (targetX - camera.position.x) * 0.05
    camera.position.z += (targetZ - camera.position.z) * 0.05
    camera.position.y += (targetY - camera.position.y) * 0.05

    camera.lookAt(target)
  })

  return (
    <>
      <GradientBackground />

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
    <div className='w-full h-full'>
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
