import { Link, useMatch } from 'react-router-dom'
import path from 'src/constants/path'

function RegisterHeader() {
  const registerMatch = useMatch(path.register)
  const isRegister = Boolean(registerMatch)

  return (
    <header className='py-5'>
      <div className='container'>
        <nav className='flex items-end'>
          <Link to={path.home}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='fill-orange stroke-orange'
              viewBox='-11.5 -10.23174 23 20.46348'
              width='50px'
            >
              <title>React Logo</title>
              <circle cx='0' cy='0' r='2.05' fill='#61dafb' />
              <g stroke='#61dafb' strokeWidth='1' fill='none'>
                <ellipse rx='11' ry='4.2' />
                <ellipse rx='11' ry='4.2' transform='rotate(60)' />
                <ellipse rx='11' ry='4.2' transform='rotate(120)' />
              </g>
            </svg>
          </Link>
          <div className='ml-5 text-xl lg:text-2xl'>{isRegister ? 'Đăng ký' : 'Đăng nhập'}</div>
        </nav>
      </div>
    </header>
  )
}

export default RegisterHeader
