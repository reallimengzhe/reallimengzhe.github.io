'use client'

import { useState } from 'react'

const bands = [
  { freq: '32', defaultValue: 0 },
  { freq: '64', defaultValue: 0 },
  { freq: '125', defaultValue: 1 },
  { freq: '250', defaultValue: 2 },
  { freq: '500', defaultValue: 3 },
  { freq: '1K', defaultValue: 4 },
  { freq: '2K', defaultValue: 5 },
  { freq: '3K', defaultValue: 4 },
  { freq: '4K', defaultValue: 3 },
  { freq: '6K', defaultValue: 2 },
  { freq: '8K', defaultValue: 0 },
  { freq: '16K', defaultValue: 0 },
]

export default function Equalizer({ className }) {
  const [values, setValues] = useState(() => bands.reduce((acc, band) => ({ ...acc, [band.freq]: band.defaultValue }), {}))

  const handleChange = (freq, value) => {
    setValues(prev => ({ ...prev, [freq]: value }))
  }

  const handleReset = () => {
    setValues(bands.reduce((acc, band) => ({ ...acc, [band.freq]: band.defaultValue }), {}))
  }

  return (
    <div className={`relative p-6 overflow-hidden ${className}`}>
      <div className='flex justify-between items-center mb-4'>
        <h3 className='font-bold'>Equalizer</h3>
        <button
          onClick={handleReset}
          className='text-xs transition-colors rounded px-2 py-1 text-red-500 hover:bg-red-50 active:bg-red-100 dark:hover:bg-red-950 dark:active:bg-red-900'
        >
          Reset
        </button>
      </div>

      <div className=''>
        {new Array(8).fill('').map((_, index) => (
          <div key={index} className='h-4 border-b border-gray-100 dark:border-gray-800'></div>
        ))}
      </div>

      <div className='overflow-x-auto absolute top-16 left-6 right-6'>
        <div className='flex gap-1 m-auto w-fit'>
          {bands.map(({ freq }) => (
            <div key={freq} className='min-w-8 text-center text-xs font-mono relative'>
              <input
                type='range'
                min='-12'
                max='12'
                step='1'
                value={values[freq]}
                onChange={e => handleChange(freq, parseInt(e.target.value))}
                className='h-36 block m-auto
                appearance-none 
                [&::-webkit-slider-runnable-track]:w-1 
                [&::-webkit-slider-runnable-track]:rounded
                [&::-webkit-slider-runnable-track]:opacity-20
                [&::-webkit-slider-runnable-track]:bg-slate-400
                [&::-webkit-slider-thumb]:appearance-none
                [&::-webkit-slider-thumb]:w-3
                [&::-webkit-slider-thumb]:h-3
                [&::-webkit-slider-thumb]:rounded
                [&::-webkit-slider-thumb]:shadow
                [&::-webkit-slider-thumb]:-ml-1
                [&::-webkit-slider-thumb]:border
                [&::-webkit-slider-thumb]:border-gray-400
                [&::-webkit-slider-thumb]:bg-white 
                hover:[&::-webkit-slider-thumb]:bg-gray-50
                active:[&::-webkit-slider-thumb]:bg-gray-100
                [&::-webkit-slider-thumb]:cursor-pointer
                [&::-webkit-slider-thumb]:transition-colors
                '
                style={{ writingMode: 'sideways-lr' }}
              />
              <p className='text-slate-400 pt-2'>{values[freq]}db</p>
              <p className=''>{freq}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
