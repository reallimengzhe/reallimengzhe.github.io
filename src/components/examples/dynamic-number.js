'use client'

import { useEffect, useState } from 'react'
import CountUp from '../count-up'

export default function ({ className }) {
  const [metrics, setMetrics] = useState({
    totalRequests: 1000,
    activeUsers: 500,
    serverLoad: 45,
  })

  useEffect(() => {
    const updateMetrics = () => {
      setMetrics(prev => ({
        totalRequests: prev.totalRequests + Math.floor(Math.random() * 100),
        activeUsers: prev.activeUsers + Math.floor(Math.random() * 20),
        serverLoad: Math.min(90, Math.random() * 100),
      }))
    }

    const metricsInterval = setInterval(updateMetrics, 2000)
    return () => clearInterval(metricsInterval)
  }, [])

  return (
    <div className={`flex justify-evenly gap-4 items-center ${className}`}>
      <div className='text-center'>
        <div className='text-sm text-slate-400'>总请求数</div>
        <div className='text-2xl font-bold font-mono pt-1'>
          <CountUp value={metrics.totalRequests} />
        </div>
      </div>
      <div className='text-center'>
        <div className='text-sm text-slate-400'>活跃用户</div>
        <div className='text-2xl font-bold font-mono pt-1'>
          <CountUp value={metrics.activeUsers} />
        </div>
      </div>
      <div className='text-center'>
        <div className='text-sm text-slate-400'>服务器负载</div>
        <div className='text-2xl font-bold font-mono pt-1'>
          <CountUp value={Math.round(metrics.serverLoad)} />%
        </div>
      </div>
    </div>
  )
}
