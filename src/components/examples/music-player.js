import { BackwardIcon, ForwardIcon, PauseIcon, PlayIcon } from '@heroicons/react/24/solid'
import { useEffect, useRef, useState } from 'react'

export default function MusicPlayer({ className }) {
  const [current, setCurrent] = useState('0:00')
  const [rest, setRest] = useState('0:00')
  const progressContainerRef = useRef(null) // 添加进度条容器引用

  function convertSeconds(s) {
    const seconds = Math.round(s)
    const minutes = String(Math.floor(seconds / 60))
    const remainingSeconds = String(seconds % 60).padStart(2, '0')

    return `${minutes}:${remainingSeconds}`
  }

  useEffect(() => {
    const audio = document.getElementById('music-player')
    const progressBar = document.getElementById('music-progress')

    setRest(convertSeconds(audio.duration))

    function updateProgress() {
      const progress = (audio.currentTime / audio.duration) * 100
      progressBar.style.width = `${progress}%`

      setRest(convertSeconds(audio.duration - audio.currentTime))
      setCurrent(convertSeconds(audio.currentTime))
    }

    // 添加进度条点击事件处理
    function handleProgressClick(e) {
      const bounds = progressContainerRef.current.getBoundingClientRect()
      const percent = (e.clientX - bounds.left) / bounds.width
      const newTime = percent * audio.duration
      audio.currentTime = newTime
    }

    progressContainerRef.current.addEventListener('click', handleProgressClick)
    audio.addEventListener('timeupdate', updateProgress)

    return () => {
      progressContainerRef.current?.removeEventListener('click', handleProgressClick)
      audio.removeEventListener('timeupdate', updateProgress)
    }
  }, [])

  const [isPlaying, setIsPlaying] = useState(false)

  function onPlay() {
    const audio = document.getElementById('music-player')

    isPlaying ? audio.pause() : audio.play()
    setIsPlaying(!isPlaying)
  }

  return (
    <div className={`flex flex-col xl:flex-row gap-4 relative overflow-hidden p-4 ${className}`}>
      <div
        className='absolute inset-0 bg-no-repeat bg-center opacity-20'
        style={{
          backgroundImage: `url(/music-cover.webp)`,
          backgroundPosition: 'center',
          filter: 'blur(20px) brightness(0.8)',
          transform: 'scale(1.2)',
        }}
      />

      <div className='flex items-center justify-center h-[calc(100%-176px)] xl:h-auto relative'>
        <img src='/music-cover.webp' className='max-w-full max-h-full rounded-lg shadow-lg aspect-square' />
      </div>

      <div className='flex-1 relative flex flex-col justify-center px-2 md:px-0 truncate min-w-[150px]'>
        <h3 className='truncate'>Always Remember Us This Way</h3>
        <p className='text-sm text-gray-400 pt-0.5 truncate'>Lady Gaga - A Star Is Born</p>

        <div className='pt-4'>
          <div ref={progressContainerRef} className='w-full h-1.5 bg-gray-300 dark:bg-gray-500 rounded overflow-hidden cursor-pointer'>
            <div className='bg-gray-500 dark:bg-gray-300 h-full w-0' id='music-progress'></div>
          </div>

          <div className='flex justify-between text-[10px] text-gray-500 font-mono pt-2'>
            <span>{current}</span>
            <span>-{rest}</span>
          </div>
        </div>

        <div className='flex items-center justify-center gap-1 pt-4 opacity-80'>
          <button className='rounded-full w-11 h-11 relative hover:bg-white active:bg-gray-100 dark:hover:bg-gray-700 cursor-not-allowed'>
            <BackwardIcon className='absolute top-0 right-0.5 bottom-0 left-0 m-auto w-7 h-7' />
          </button>

          <div className='w-13 h-13' onClick={onPlay}>
            <button className='rounded-full w-13 h-13 relative hover:bg-white active:bg-gray-50 dark:hover:bg-gray-700 active:transform-[scale(0.8)] transition-all'>
              <PlayIcon className={`transition-all absolute top-0 right-0 bottom-0 left-1 m-auto ${isPlaying ? 'w-0 h-0' : 'w-9 h-9'}`} />
              <PauseIcon className={`transition-all absolute top-0 right-0 bottom-0 left-0 m-auto ${isPlaying ? 'w-9 h-9' : 'w-0 h-0'}`} />
            </button>
          </div>

          <button className='rounded-full w-11 h-11 relative hover:bg-white active:bg-gray-50 dark:hover:bg-gray-700 cursor-not-allowed'>
            <ForwardIcon className='absolute top-0 right-0 bottom-0 left-0.5 m-auto w-7 h-7' />
          </button>
        </div>

        <audio id='music-player' preload='metadata' loop>
          <source src='Always Remember Us This Way.mp3' type='audio/mp3' />
        </audio>
      </div>
    </div>
  )
}
