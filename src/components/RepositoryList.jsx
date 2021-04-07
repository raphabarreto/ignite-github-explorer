import { RepositoryItem } from './RepositoryItem';

const repository = {
  name: 'unform',
  description: 'Forms in React',
  link: 'https://reactjs.org/',
};

export function RepositoryList() {
  return (
    <div>
      <section className="repository-list">
        <h1>Lista de repositórios</h1>

        <ul>
          <RepositoryItem repository={repository} />
        </ul>
      </section>
    </div>
  );
}
