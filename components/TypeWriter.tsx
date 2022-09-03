import styles from '../styles/TypeWriter.module.css';

type TypeWriterProps = {
  children: React.ReactNode;
};

const TypeWriter = (props: TypeWriterProps) => {
  return (
    <div className={styles.typeWriter}>
      <h1 className='text-lg font-fira text-primary animate-sub-title'>
        Hi my name is,
      </h1>
      <div className={styles.dynamic}>
        <h1 className='text-4xl font-fira font-lg capitalize text-secondary animate-title'>
          {props.children}
        </h1>
      </div>
    </div>
  );
};
export default TypeWriter;
