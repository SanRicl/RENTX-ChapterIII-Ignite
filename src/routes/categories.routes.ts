import { Router } from 'express';
import multer from 'multer';
import { ensureAuthentication } from '../middlewares/ensureAuthenticated';
import { CreateCategoryController } from '../modules/cars/useCases/createCategory/CreateCategoryController';
import { ImportCategoryController } from '../modules/cars/useCases/importCategory/ImportCategoryController';
import { ListCategoriesController } from '../modules/cars/useCases/listCategories/ListCategoriesController';

const upload = multer({
  dest: './tmp',
});

const categoriesRoutes = Router();
const importCategoryController = new ImportCategoryController();
const createCategoryController = new CreateCategoryController();
const listCategoriesController = new ListCategoriesController();

categoriesRoutes.post('/', createCategoryController.handle);

categoriesRoutes.get(
  '/',
  ensureAuthentication,
  listCategoriesController.handle,
);

categoriesRoutes.post(
  '/import',
  upload.single('file'),
  importCategoryController.handle,
);

export { categoriesRoutes };
