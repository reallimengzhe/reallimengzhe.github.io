import Link from 'next/link'

export default function Footer() {
  return (
    <footer className='mt-20 px-4'>
      <div className='text-slate-400 flex flex-col items-center gap-4 md:flex-row max-w-7xl m-auto border-t py-10'>
        <img src='logo.svg' className='w-7 h-7' />
        <span>© 李孟哲</span>

        <a href='tel:+8615538077068'>📞 155 3807 7068</a>

        <a href='mailto:li.mengzhe@outlook.com'>📮 li.mengzhe@outlook.com</a>

        <div className='flex items-center gap-4'>
          <Link href='https://juejin.cn/user/3984285869810887/posts' target='_blank' key='juejin'>
            掘金
          </Link>

          <Link href='https://www.jianshu.com/u/6c204631fb1c' target='_blank' key='jianshu'>
            简书
          </Link>
        </div>

        <div className='md:ml-auto flex items-center gap-4'>
          <span className=''>Build With</span>
          {/* <img src='/icon/logo.svg' className='w-7 h-7' /> */}

          <Link href='https://nextjs.org/' target='_blank' key='next' className='text-black dark:text-white'>
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' className='h-5 w-5' fill='currentColor'>
              <path d='M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z'></path>
            </svg>
          </Link>

          {/* <Link href='https://tailwindcss.com/' target='_blank' key='tailwindcss' className=''>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' className='h-5 w-5' fill='currentColor'>
        <path d='M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z'></path>
        </svg>
      </Link> */}
        </div>
      </div>
    </footer>
  )
}
