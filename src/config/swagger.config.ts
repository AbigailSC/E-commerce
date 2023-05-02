const { PORT } = process.env;

export const swaggerDefinition = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Ecommerce API',
      version: '1.0.0',
      description: 'Ecommerce API'
    },
    servers: [
      {
        url: `http://127.0.0.1:${PORT ?? 3000}`
      }
    ]
  },
  apis: ['@docs/*.yaml']
};
