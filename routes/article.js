// Importa las dependencias necesarias
const express = require('express');
const router = express.Router();
const ArticleController = require('../middleware/article');
const multer = require('multer'); // Librería para la subida de imágenes.

// Configuración de dónde y cómo se guardarán las imágenes con multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Define la carpeta de destino para las imágenes subidas
    cb(null, './images/articles')
  },
  filename: function (req, file, cb) {
    // Define el nombre del archivo para las imágenes subidas
    cb(null, 'article' + '-' + Date.now() + file.originalname)
  }
})

// Middleware para usarlo en la ruta
const upload = multer({ storage: storage });

// Rutas del API

// Ruta para crear un artículo
router.post('/create-article', ArticleController.createArticle);

// Ruta para obtener una lista de artículos. Si se proporciona el parámetro 'recents', se limitará a los 2 artículos más recientes.
router.get('/articles/:recents?',ArticleController.listArticles);

// Ruta para obtener un artículo específico por id
router.get('/article/:id',ArticleController.oneArticle);

// Ruta para eliminar un artículo específico por id
router.delete('/article/:id', ArticleController.deleteArticle);

// Ruta para actualizar un artículo específico por id
router.put('/article/:id', ArticleController.updateArticle);

// Ruta para subir una imagen a un artículo específico por id
router.post('/upload-image/:id',[upload.single('file')],ArticleController.uploadImage);

// Ruta para obtener una imagen específica por nombre de archivo
router.get('/image/:file',ArticleController.image);

//Ruta para buscar articulos por titulo o contenido
router.get('/searcher/:search',ArticleController.searcher);

module.exports = router;
