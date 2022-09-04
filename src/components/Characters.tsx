import { withSuspense } from '../hoc/Suspense';
import { fetchData } from '../lib/api/fetchData';
import './Characters.css';

const resources = fetchData('https://rickandmortyapi.com/api/character');

export const Characters = () => {
  const response = resources.read();

  const personagens = response.results.map(
    (personagem: { image: string; name: string; id: string }) => (
      <div className='user-card' key={personagem.id}>
        <img
          className='user-card-image'
          src={personagem.image}
          alt={personagem.name}
        />
        <h3 className='user-card-username'>{personagem.name}</h3>
      </div>
    )
  );

  return <div className='app'>{personagens}</div>;
};

export default withSuspense(Characters);
