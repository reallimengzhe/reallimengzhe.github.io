import { useState, useEffect } from 'react'
import { InformationCircleIcon, ExclamationTriangleIcon, XCircleIcon, CheckCircleIcon } from '@heroicons/react/24/outline'

const messages = [
  { type: 'info', title: '机器人状态', content: '所有机器人系统运行正常，核心温度保持稳定。' },
  { type: 'warning', title: '安全警告', content: '检测到未经授权的生物机械接入尝试，已启动防御协议。' },
  { type: 'error', title: '系统入侵', content: '主控室防火墙遭受攻击，请立即采取应对措施。' },
  { type: 'success', title: '任务完成', content: '机械臂校准完成，精确度提升至 99.9%。' },
  { type: 'info', title: '数据同步', content: '人工智能核心数据库更新完成，新增决策模型。' },
  { type: 'warning', title: '能源预警', content: '机器人能源储备不足 30%，请及时充能。' },
  { type: 'error', title: '紧急情况', content: '探测到敌对机器人部队，启动紧急防御模式。' },
  { type: 'success', title: '升级完成', content: '武器系统升级成功，火力输出提升 50%。' },
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
          <h2 className='font-bold text-2xl md:text-3xl border-x p-2 bg'>丰富的实时推送经验。消息的价值多少在于你能不能第一时间获取它。</h2>
        </div>
        <div className='w-0 md:w-16 bg'></div>
      </div>

      <div className='border-b flex'>
        <div className='w-0 md:w-16 bg'></div>
        <div className='w-4/5 flex-1 border-x px-6 md:px-12'>
          <div className='p-2 bg-slate-100 dark:bg-slate-900 border-x'>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-2'>
              <div className='lg:h-128 aspect-video lg:aspect-auto bg rounded-2xl overflow-hidden lg:col-span-2 bg-black flex items-center'>
                <video
                  className='w-full h-full object-cover'
                  src='http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4'
                  // 备选视频源:
                  // http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4
                  // http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4
                  loop
                  muted
                  playsInline
                  autoPlay
                />
              </div>
              <div className='h-128 overflow-hidden space-y-2'>
                {feed.map((msg, index) => {
                  const Icon = icons[msg.type]
                  return (
                    <div
                      key={msg.id}
                      className={`bg flex gap-3 border rounded-2xl p-3 transition-all duration-500 ${
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
