import type { NextPage } from 'next';
import Bio from '../components/Bio';
import Navbar from '../components/Navbar';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

const Home: NextPage = () => {
  const { openNavBar } = useSelector((state: RootState) => state.global);

  return (
    <div className='w-full min-h-screen'>
      <Navbar />
      <main
        className={`main-animate mx-auto w-[calc(100%_-_6rem)]
        ${openNavBar ? 'blur-md' : 'filter-none'}`}
      >
        <Bio />
      </main>
    </div>
  );
};

export default Home;
