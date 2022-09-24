import express from 'express';
import UserController from './controllers/UserController';
const router = express.Router();

// Create Route
router.post('/users', UserController.create);
// Read Route
router.get('/users', UserController.findAll);
// Unique User - Read Route
router.get('/users:userID', UserController.findOne);
// Update Route
router.put('/users:userID', UserController.update);
// Delete Route
router.delete('/users:userID', UserController.destroy);

export { router };