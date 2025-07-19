// Configuration Swagger pour la documentation de l'API
import swaggerJSDoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'CARAMBAR JOKES API',
      version: '1.0.0',
      description: 'Une API pour récupérer et ajouter des blagues',
    },
    servers: [
      {
        url: 'https://project-cda-api.onrender.com', 
      },
    ],
  },
  apis: ['server/src/router.ts'],
};


const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;
