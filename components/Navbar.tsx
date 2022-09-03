import {
  FaCloudDownloadAlt,
  FaBriefcase,
  FaCode,
  FaUser,
} from 'react-icons/fa';
import { BiMenuAltRight } from 'react-icons/bi';
import { BsInfoCircle } from 'react-icons/bs';

import Image from 'next/image';

import type { RootState } from '../redux/store';
import { useSelector, useDispatch } from 'react-redux';
import { setOpenNavBar } from '../redux/features/globalSlice';

const Navbar = () => {
  const { openNavBar } = useSelector((state: RootState) => state.global);
  const dispatch = useDispatch();

  const showMenu = () => {
    dispatch(setOpenNavBar(true));
  };
  const closeMenu = () => {
    dispatch(setOpenNavBar(false));
  };
  return (
    <nav
      className={`animate-nav flex justify-between items-start z-30 ${
        openNavBar ? 'filter-none' : ''
      } `}
    >
      <div className={`logo p-6 ${openNavBar ? 'blur-sm' : 'filter-none'}`}>
        <Image
          className='rounded-full'
          src={require('../public/profile.jpg')}
          width='48'
          height='48'
          alt='profile'
        />
      </div>

      {/* Menu icon */}
      {!openNavBar && (
        <div onClick={showMenu} className='icon cursor-pointer p-5'>
          <BiMenuAltRight className='h-9 w-9 text-primary' />
        </div>
      )}
      {/* Sidebar */}
      <div
        className={`sidebar w-2/3
          ${openNavBar ? 'translate-x-0 ' : 'translate-x-full'}`}
      >
        {/* close icon */}
        <div onClick={closeMenu} className='self-end p-5 cursor-pointer'>
          <span className='text-2xl text-primary'>&#10005;</span>
        </div>
        {/* Menu list */}
        <ul className='menu w-full text-lg space-y-6'>
          <li className='hover-bordered'>
            <a>
              <BsInfoCircle className='w-7 h-7' />
              <span>About</span>
            </a>
          </li>
          <li className='hover-bordered '>
            <a>
              <FaBriefcase className='w-7 h-7' />
              <span>Experience</span>
            </a>
          </li>
          <li className='hover-bordered '>
            <a>
              <FaCode className='w-7 h-7' />
              <span>Work</span>
            </a>
          </li>
          <li className='hover-bordered '>
            <a>
              <FaUser className='w-7 h-7' />
              <span>Contact</span>
            </a>
          </li>
        </ul>
        {/* Resume */}
        <div className='btn btn-primary font-bold flex gap-1 justify-center items-center mx-5'>
          <FaCloudDownloadAlt className='w-6 h-6' />
          <span>Resume</span>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
