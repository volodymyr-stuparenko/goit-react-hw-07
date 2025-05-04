import css from './Loader.module.css';
import BeatLoader from 'react-spinners/BeatLoader';

const override = {
  display: 'block',
  margin: '0 auto',
  borderColor: 'red',
};

export function Loader() {
  return (
    <div className={css.loader}>
      <p>Loading...</p>
      <BeatLoader
        color="rgb(0, 119, 246)"
        loading={true}
        cssOverride={override}
        size={25}
        aria-label="Loading..."
      />
    </div>
  );
}
