// Controlador que gerencia as requisições HTTP
import MovieModel from '../models/movies-model.js';

class MovieController {
    getAllMovies = async (req, res) => {
        try {
            const movies = await MovieModel.getAllMovies();
            res.json(movies);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao buscar filmes' });
        }
    }

    getMovieById = async (req, res) => {
        try {
            const movie = await MovieModel.getMovieById(req.params.id);
            if (!movie) {
                return res.status(404).json({ error: 'Filme não encontrado' });
            }
            res.json(movie);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao buscar filme' });
        }
    }

    createMovie = async (req, res) => {
        try {
            const newMovie = await MovieModel.createMovie(req.body);
            res.status(201).json(newMovie);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao criar filme' });
        }
    }

    updateMovie = async (req, res) => {
        try {
            const updatedMovie = await MovieModel.updateMovie(req.params.id, req.body);
            if (!updatedMovie) {
                return res.status(404).json({ error: 'Filme não encontrado' });
            }
            res.json(updatedMovie);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao atualizar filme' });
        }
    }

    deleteMovie = async (req, res) => {
        try {
            await MovieModel.deleteMovie(req.params.id);
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ error: 'Erro ao deletar filme' });
        }
    }
}

export default new MovieController();