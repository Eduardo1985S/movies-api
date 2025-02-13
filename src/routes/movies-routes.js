// Define as rotas da API
import express from 'express';
import MovieController from '../controllers/movies-controllers.js';

const router = express.Router();

router.get('/', MovieController.getAllMovies);
router.get('/:id', MovieController.getMovieById);
router.post('/', MovieController.createMovie);
router.put('/:id', MovieController.updateMovie);
router.delete('/:id', MovieController.deleteMovie);

export default router;