// Modelo responsável por todas as operações de dados
import { promises as fs } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

class MovieModel {
    constructor() {
        this.dataPath = join(__dirname, '../data/movies.json');
    }

    async getAllMovies() {
        const data = await fs.readFile(this.dataPath, 'utf8');
        return JSON.parse(data);
    }

    async getMovieById(id) {
        const movies = await this.getAllMovies();
        return movies.find(movie => movie.id === id);
    }

    async createMovie(movieData) {
        const movies = await this.getAllMovies();
        const newMovie = {
            id: Date.now().toString(),
            ...movieData
        };
        movies.push(newMovie);
        await fs.writeFile(this.dataPath, JSON.stringify(movies, null, 2));
        return newMovie;
    }

    async updateMovie(id, movieData) {
        const movies = await this.getAllMovies();
        const index = movies.findIndex(movie => movie.id === id);
        if (index === -1) return null;

        movies[index] = { ...movies[index], ...movieData };
        await fs.writeFile(this.dataPath, JSON.stringify(movies, null, 2));
        return movies[index];
    }

    async deleteMovie(id) {
        const movies = await this.getAllMovies();
        const filteredMovies = movies.filter(movie => movie.id !== id);
        await fs.writeFile(this.dataPath, JSON.stringify(filteredMovies, null, 2));
        return true;
    }
}

export default new MovieModel();