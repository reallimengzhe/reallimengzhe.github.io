'use client'

import DynamicLineChart from './examples/dynamic-line-chart'
import RealtimeNetworkTraffic from './examples/realtime-network-traffic'
import StaticBarChart from './examples/static-bar-chart'
import DynamicBarChart from './examples/dynamic-bar-chart'
import Globe from './examples/globe'
import MusicPlayer from './examples/music-player'
import ShoppingPage from './examples/shopping-page'
import DraggableTable from './examples/draggable-table'
import ChatBox from './examples/chat-box'
import DynamicNumber from './examples/dynamic-number'
import LiveFeed from './examples/live-feed'
import Equalizer from './examples/equalizer'
import dynamic from 'next/dynamic'
// import NetworkTopology from './examples/network-topology'

const NetworkTopology = dynamic(() => import('./examples/network-topology'), {
  ssr: false,
})

export default function DataVisualization() {
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
          <h2 className='font-bold text-2xl md:text-3xl border-x p-2 bg'>各种组件，各种功能，各种平台，轻松实现。</h2>
        </div>
        <div className='w-0 md:w-16 bg'></div>
      </div>

      <div className='border-b flex'>
        <div className='w-0 md:w-16 bg'></div>
        <div className='w-4/5 flex-1 border-x px-6 md:px-12'>
          <div className='p-2 bg-slate-100 dark:bg-slate-900 border-x space-y-2'>
            <div className='grid gap-2 grid-cols-1 grid-rows-[repeat(79,48px)] lg:grid-cols-3 lg:grid-rows-[repeat(31,48px)] xl:grid-cols-12 xl:grid-rows-[repeat(27,48px)]'>
              <RealtimeNetworkTraffic className='row-span-4 lg:col-span-2 xl:col-span-4 bg rounded-xl border p-6' />
              <DynamicLineChart className='row-span-4 xl:row-span-3 lg:col-span-1 xl:col-span-3 bg rounded-xl border p-6' color='#ef4444' gradient='rgba(239, 68, 68, 0.1)' />
              <StaticBarChart className='row-span-6 lg:col-span-2 xl:col-span-5 bg rounded-xl border p-6' />

              <ShoppingPage className='row-span-12 lg:col-span-1 xl:col-span-3 bg rounded-xl border p-2' />
              <MusicPlayer className='row-span-10 xl:row-span-4 xl:col-span-4 bg rounded-xl border' />
              <Globe className='row-span-6 xl:row-span-10 xl:col-span-5 bg rounded-xl border' />

              <LiveFeed className='row-span-8 xl:row-span-8 xl:col-span-4 bg rounded-xl border' />
              <ChatBox className='row-span-10 xl:row-span-12 xl:col-span-3 bg rounded-xl border' />
              <DraggableTable className='row-span-6 xl:col-span-4 bg rounded-xl border p-6' />

              <DynamicNumber className='row-span-2 xl:col-span-5 bg rounded-xl border' />
              <NetworkTopology className='row-span-6 lg:row-span-5 xl:row-span-9 xl:col-span-5 rounded-xl border' />
              <Equalizer className='row-span-5 lg:col-span-2 xl:col-span-4 bg rounded-xl border' />

              {/* <DynamicBarChart key='4' className='row-span-6 xl:col-span-8 bg rounded-xl border p-6' /> */}
            </div>
          </div>
        </div>
        <div className='w-0 md:w-16 bg'></div>
      </div>
    </>
  )
}
