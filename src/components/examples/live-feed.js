'use client'
import { useState, useEffect, useRef, Suspense } from 'react'
import { InformationCircleIcon, ExclamationTriangleIcon, XCircleIcon, CheckCircleIcon } from '@heroicons/react/24/outline'

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
  warning: 'bg-yellow-500',
  error: 'bg-red-500',
  success: 'bg-green-500',
}

const icons = {
  info: InformationCircleIcon,
  warning: ExclamationTriangleIcon,
  error: XCircleIcon,
  success: CheckCircleIcon,
}

export default function LiveFeed({ className }) {
  const [feed, setFeed] = useState([])

  const currentRef = useRef(null)

  useEffect(() => {
    // 初始添加一条消息
    setFeed([
      {
        id: 1,
        time: new Date().toLocaleTimeString('zh-CN', { hour12: false }),
        ...messages[1],
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
        const newFeed = [newMessage, ...prev].slice(0, 8) // 保持最多 8 条消息
        return newFeed
      })

      const list = Array.from(currentRef.current.querySelectorAll('li'))

      setTimeout(() => {
        list.forEach(li => {
          li.classList.remove('animate-scale-in-center', 'animate-slide-down')
        })
      }, 1000)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const list = Array.from(currentRef.current.querySelectorAll('li'))

    list.forEach((li, index) => {
      li.classList.add(index === 0 ? 'animate-scale-in-center' : 'animate-slide-down')
    })
  }, [feed])

  return (
    <ul className={`space-y-3 p-4 overflow-hidden ${className}`} ref={currentRef}>
      {feed.map((msg, index) => {
        const Icon = icons[msg.type]
        return (
          <li key={msg.id} className={`bg flex gap-3 border rounded-lg p-3 relative`}>
            <div className={`shrink-0 w-7 h-7 ${colors[msg.type]} rounded-lg flex items-center justify-center`}>
              <Icon className='w-5 h-5 text-white' />
            </div>
            <div className='flex-1 min-w-0 text-sm'>
              <div className='flex items-center gap-2'>
                <span className='font-medium'>{msg.title}</span>
                <span className='ml-auto text-xs text-slate-400 font-mono'>{msg.time}</span>
              </div>
              <p className='text-sm text-slate-400 mt-1 truncate'>{msg.content}</p>
            </div>
          </li>
        )
      })}
    </ul>
  )
}
