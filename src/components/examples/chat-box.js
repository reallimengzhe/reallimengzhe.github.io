'use client'

import { useState, useRef, useEffect } from 'react'
import { ArrowUpIcon, BellAlertIcon, BellIcon, BellSlashIcon } from '@heroicons/react/24/outline'

export default function ChatBox({ className }) {
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      id: Date.now() + 1,
      type: 'txt',
      text: 'Hi, how can I help you today?',
    },
    {
      sender: 'user',
      id: Date.now() + 2,
      type: 'txt',
      text: 'Hey, I am facing some tricky problems in my life.',
    },
    {
      sender: 'bot',
      id: Date.now() + 3,
      type: 'txt',
      text: 'What seems to be the problem?',
    },
    {
      sender: 'bot',
      id: Date.now() + 4,
      type: 'txt',
      text: "If you don't know how to proceed to the next step, please ask me, I will only answer you YES or NO.",
    },
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
  }

  useEffect(() => {
    messages.length > 4 && scrollToBottom()
  }, [messages, isLoading])

  const handleSubmit = async e => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    // Add user message
    const userMessage = {
      sender: 'user',
      id: Date.now(),
      type: 'txt',
      text: input,
    }
    setMessages(prev => [...prev, userMessage])
    setInput('')

    setTimeout(async () => {
      setIsLoading(true)

      try {
        // Get response from API
        const response = await fetch('https://yesno.wtf/api')
        const data = await response.json()

        // Add bot message
        const txtMessage = {
          sender: 'bot',
          id: Date.now() + 1,
          type: 'txt',
          text: data.answer.toUpperCase(),
        }

        const imgMessage = {
          sender: 'bot',
          id: Date.now() + 2,
          type: 'img',
          image: data.image,
        }

        // Delay the bot response for a more natural feel
        setTimeout(() => {
          setMessages(prev => [...prev, txtMessage, imgMessage])
          setIsLoading(false)
        }, 500)
      } catch (error) {
        console.error('Error fetching response:', error)
        setIsLoading(false)
      }
    }, 500)
  }

  return (
    <div className={`flex flex-col ${className}`}>
      <div className='flex gap-3 pb-4 items-center p-6 border-b'>
        <img src='/logo.svg' className='w-10 h-10 rounded-full' />
        <div>
          <h3 className='text-sm truncate'>YES OR NO</h3>
          <p className='text-sm text-slate-400 truncate'>Ask me anything!</p>
        </div>

        <div className='border rounded-full p-2 ml-auto'>
          <BellSlashIcon className='w-4 h-4' />
        </div>
      </div>

      <div className='flex-1 overflow-auto space-y-3 px-6 py-2'>
        {messages.map(message => (
          <div
            key={message.id}
            className={`flex ${message.sender === 'user' ? 'justify-end animate-fade-in-bottom' : 'justify-start animate-fade-in'} 
                 opacity-0`}
            style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
          >
            <div
              className={`max-w-[80%] ${
                message.sender === 'user' ? 'bg-green-600 text-white rounded-tr-sm' : 'bg-slate-100 dark:bg-slate-800 rounded-tl-sm'
              } 
                rounded-xl overflow-hidden`}
            >
              {message.type === 'txt' ? (
                <p className='text-sm px-3 py-2'>{message.text}</p>
              ) : (
                <img src={message.image} alt='Response GIF' className='w-full h-32 object-cover' />
              )}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className='flex justify-start animate-fade-in'>
            <div className='bg-slate-200 dark:bg-slate-800 rounded-2xl px-4 py-4'>
              <div className='flex gap-1'>
                <div className='w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce' />
                <div className='w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce' style={{ animationDelay: '0.2s' }} />
                <div className='w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce' style={{ animationDelay: '0.4s' }} />
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className='px-5 pt-2 pb-6'>
        <form onSubmit={handleSubmit} className='rounded-full border flex gap-2 p-1'>
          <input
            type='text'
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder='Type your message...'
            className='flex-1 bg-transparent px-4 py-2 focus:outline-none rounded-full h-8 text-sm'
          />
          <button
            type='submit'
            disabled={isLoading}
            className='rounded-full bg-green-600 hover:bg-green-700 active:bg-green-800 text-white min-w-8 h-8 flex items-center justify-center transition-colors'
          >
            <ArrowUpIcon className='w-4 h-4' />
          </button>
        </form>
      </div>
    </div>
  )
}
