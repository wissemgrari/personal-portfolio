import { GitHub } from '@mui/icons-material';
import TypeWriter from './TypeWriter';

const Bio = () => {
  return (
    <div className='bio mt-16 space-y-5'>
      <TypeWriter>wissem grari.</TypeWriter>
      <h2 className='text-4xl font-lg text-grey animate-title'>
        I build things for the web.
      </h2>
      <div className='description animate-desc'>
        <p className='leading-7 text-grey mb-5'>
          I've been coding for nearly 3 years. I'm a junior web developer who
          loves building full-stack applications & learning new technologies.
          I've been doing mobile development recently as well and i'm enjoying
          that.
        </p>
      </div>
      <div className='animate-desc btn btn-outline btn-primary flex gap-2 items-center w-max'>
        <GitHub className='w-6 h-6' />
        <span className='tracking-wider'>My Github</span>
      </div>
    </div>
  );
};
export default Bio;
