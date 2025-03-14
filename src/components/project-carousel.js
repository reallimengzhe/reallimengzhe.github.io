export default function ProjectCarousel() {
  return (
    <>
      {' '}
      <div className='border-b flex'>
        <div className='w-0 md:w-16 bg'></div>
        <div className='w-4/5 flex-1 border-x px-6 md:px-12'>
          <div className='bg-slate-100 dark:bg-slate-900 border-x p-2'>
            <div className='border bg rounded-xl overflow-hidden aspect-[5/2]'>
              <div
                className='grid grid-cols-4 gap-12'
                style={{
                  transformStyle: 'preserve-3d',
                  transformOrigin: 'top left',
                  transform: 'rotateX(45deg) rotateZ(-45deg) translateX(-50%) scale(1.3)',
                }}
              >
                <div className='border-r space-y-12' style={{ animation: 'scroll 60s linear infinite alternate' }}>
                  <img src='/project/1/1.jpg' className='border-y' />
                  <img src='/project/1/2.jpg' className='border-y' />
                  <img src='/project/1/3.jpg' className='border-y' />
                  <img src='/project/1/4.jpg' className='border-y' />
                  <img src='/project/1/5.jpg' className='border-y' />
                  <img src='/project/1/6.jpg' className='border-y' />
                  <img src='/project/2/1.png' className='border-y' />
                  <img src='/project/2/2.png' className='border-y' />
                  <img src='/project/2/3.png' className='border-y' />
                  <img src='/project/2/4.png' className='border-y' />
                </div>
                <div className='border-x space-y-6' style={{ animation: 'scroll-reverse 60s linear infinite alternate' }}>
                  <img src='/project/2/5.png' className='border-y' />
                  <img src='/project/3/1.png' className='border-y' />
                  <img src='/project/3/2.png' className='border-y' />
                  <img src='/project/3/3.png' className='border-y' />
                  <img src='/project/3/4.png' className='border-y' />
                  <img src='/project/3/5.png' className='border-y' />
                  <img src='/project/4/1.png' className='border-y' />
                  <img src='/project/4/2.png' className='border-y' />
                  <img src='/project/4/3.png' className='border-y' />
                  <img src='/project/5/1.png' className='border-y' />
                </div>
                <div className='border-x space-y-6' style={{ animation: 'scroll 60s linear infinite alternate' }}>
                  <img src='/project/5/2.png' className='border-y' />
                  <img src='/project/5/3.png' className='border-y' />
                  <img src='/project/6/1.png' className='border-y' />
                  <img src='/project/6/2.png' className='border-y' />
                  <img src='/project/6/3.png' className='border-y' />
                  <img src='/project/6/4.png' className='border-y' />
                  <img src='/project/6/5.png' className='border-y' />
                  <img src='/project/6/6.png' className='border-y' />
                  <img src='/project/1/1.jpg' className='border-y' />
                  <img src='/project/1/2.jpg' className='border-y' />
                </div>
                <div className='border-x space-y-6' style={{ animation: 'scroll-reverse 60s linear infinite alternate' }}>
                  <img src='/project/1/3.jpg' className='border-y' />
                  <img src='/project/8/0.png' className='border-y' />
                  <img src='/project/8/1.png' className='border-y' />
                  <img src='/project/8/2.png' className='border-y' />
                  <img src='/project/8/3.png' className='border-y' />
                  <img src='/project/9/1.png' className='border-y' />
                  <img src='/project/9/2.png' className='border-y' />
                  <img src='/project/10/1.png' className='border-y' />
                  <img src='/project/10/2.png' className='border-y' />
                  <img src='/project/10/3.png' className='border-y' />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='w-0 md:w-16 bg'></div>
      </div>
    </>
  )
}
