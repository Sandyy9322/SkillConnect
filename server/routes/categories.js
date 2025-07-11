import express from 'express';
import {
  getCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory
} from '../controllers/categoryController.js';

import { protect, authorize } from '../middleware/auth.js';

const router = express.Router();

router.route('/').get(getCategories);
router.route('/:id').get(getCategoryById);
router.route('/').post(protect, authorize('admin'), createCategory);
router.route('/:id')
  .put(protect, authorize('admin'), updateCategory)
  .delete(protect, authorize('admin'), deleteCategory);

export default router;