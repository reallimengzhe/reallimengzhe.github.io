'use client'
import { useState, useEffect, useRef, Suspense } from 'react'
import { InformationCircleIcon, ExclamationTriangleIcon, XCircleIcon, CheckCircleIcon } from '@heroicons/react/24/outline'
import dynamic from 'next/dynamic'

const NetworkTopology = dynamic(() => import('./network-topology'), {
  ssr: false,
})

const messages = [
  { type: 'error', title: 'DDoS 攻击', content: '检测到针对核心服务器的 DDoS 攻击，已启动清洗防护。' },
  { type: 'warning', title: 'SQL 注入', content: '发现可疑 SQL 注入尝试，IP: 192.168.1.45，已拦截。' },
  { type: 'info', title: '系统更新', content: '安全补丁更新完成，已修复最新披露的 0day 漏洞。' },
  { type: 'success', title: '防火墙', content: '成功阻止来自海外的暴力破解攻击，封禁相关 IP。' },
  { type: 'error', title: '异常访问', content: '数据库服务器出现异常连接请求，已切断相关会话。' },
  { type: 'warning', title: '漏洞扫描', content: '检测到外部扫描器探测，已加强网络检测级别。' },
  { type: 'info', title: '安全审计', content: '完成月度安全审计，发现并修复3个中危漏洞。' },
  { type: 'success', title: 'WAF 部署', content: 'Web 应用防火墙规则更新完成，防护能力提升。' },
]

const colors = {
  info: 'bg-slate-600',
  warning: 'bg-amber-500',
  error: 'bg-red-500',
  success: 'bg-emerald-500',
}

const icons = {
  info: InformationCircleIcon,
  warning: ExclamationTriangleIcon,
  error: XCircleIcon,
  success: CheckCircleIcon,
}

export default function LiveFeed() {
  const [feed, setFeed] = useState([])
  const [latestType, setLatestType] = useState('info') // 添加最新消息类型状态

  useEffect(() => {
    // 初始添加一条消息
    setFeed([
      {
        id: Date.now(),
        time: new Date().toLocaleTimeString('zh-CN', { hour12: false }),
        ...messages[Math.floor(Math.random() * messages.length)],
      },
    ])

    // 定时添加新消息
    const interval = setInterval(() => {
      setFeed(prev => {
        const newMessage = {
          id: Date.now(),
          time: new Date().toLocaleTimeString('zh-CN', { hour12: false }),
          ...messages[Math.floor(Math.random() * messages.length)],
        }
        setLatestType(newMessage.type) // 更新最新消息类型
        const newFeed = [newMessage, ...prev].slice(0, 8) // 保持最多 8 条消息
        return newFeed
      })
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <div className='border-b flex'>
        <div className='w-0 md:w-16 bg'></div>
        <div className='w-4/5 flex-1 border-x px-6 md:px-12'>
          <div className='pt-24 bg border-x p-2 font-mono text-sm text-slate-300'>font-bold text-2xl md:text-3xl border-x p-2</div>
        </div>
        <div className='w-0 md:w-16 bg'></div>
      </div>

      <div className='border-b flex'>
        <div className='w-0 md:w-16 bg'></div>
        <div className='w-4/5 flex-1 border-x px-6 md:px-12'>
          <h2 className='font-bold text-2xl md:text-3xl border-x p-2 bg'>我拥有丰富的消息即时推送经验。轻松实现流畅的实时推送，使命必达。</h2>
        </div>
        <div className='w-0 md:w-16 bg'></div>
      </div>

      <div className='border-b flex'>
        <div className='w-0 md:w-16 bg'></div>
        <div className='w-4/5 flex-1 border-x px-6 md:px-12'>
          <div className='p-2 bg-slate-100 dark:bg-slate-900 border-x'>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-2'>
              <div className='lg:h-128 aspect-video lg:aspect-auto bg rounded-2xl overflow-hidden lg:col-span-2 bg-black'>
                <NetworkTopology messageType={latestType} />
              </div>
              <div className='h-128 overflow-hidden space-y-2'>
                {feed.map((msg, index) => {
                  const Icon = icons[msg.type]
                  return (
                    <div
                      key={msg.id}
                      className={`bg flex gap-3 border rounded-2xl p-3 transition-all duration-500 relative ${
                        index === 0 ? 'animate-fade-in' : 'animate-slide-down'
                      }`}
                    >
                      <div className={`shrink-0 w-7 h-7 ${colors[msg.type]} rounded-lg flex items-center justify-center`}>
                        <Icon className='w-5 h-5 text-white' />
                      </div>
                      <div className='flex-1 min-w-0 text-sm'>
                        <div className='flex items-center gap-2'>
                          <span className='font-medium'>{msg.title}</span>
                          <span className='ml-auto text-xs text-slate-400 font-mono'>{msg.time}</span>
                        </div>
                        <p className='text-sm text-slate-400 mt-0.5 truncate'>{msg.content}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
        <div className='w-0 md:w-16 bg'></div>
      </div>
    </>
  )
}
