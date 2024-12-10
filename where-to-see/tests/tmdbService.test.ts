import { fetchMovies } from '../app/services/tmdbService';
import { expect } from 'chai';

describe('TMDb Service', () => {
  it('should fetch popular movies', async () => {
    const data = await fetchMovies('movie/popular');
    expect(data).to.have.property('results');
    expect(data.results).to.be.an('array');
  });
});
