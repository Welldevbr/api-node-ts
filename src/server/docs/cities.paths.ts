import z from 'zod/v4'
import { cityDocsSchema } from '../schemas/cities.docs.schema'

export const citiesPaths = {
  '/cities': {
    post: {
      description: 'Criação de uma nova cidade',
      security: [{ bearerAuth: [] }],
      tags: ['Cities'],
      requestBody: {
        content: {
          'application/json': {
            schema: cityDocsSchema
          }
        }
      },
      responses: {
        201: {
          description: 'Cidade criada'
        }
      }
    },
    get: {
      description: 'Listagem e filtro de cidades paginado',
      security: [{ bearerAuth: [] }],
      tags: ['Cities'],
      requestParams: {
        query: z.object({ search: z.string() })
      },
      parameters: [
        z.number().meta({
          param: {
            name: 'page',
            in: 'query',
            required: true
          }
        }),
        z.number().meta({
          param: {
            name: 'per_page',
            in: 'query',
            required: true
          }
        })
      ],
      responses: {
        200: {
          description: 'Lista de cidades'
        }
      }
    }
  },
  '/cities/{id}': {
    get: {
      description: 'Busca uma cidade em especifico por ID',
      security: [{ bearerAuth: [] }],
      tags: ['Cities'],
      requestParams: {
        path: z.object({ id: z.string() })
      },
      responses: {
        200: {
          description: 'Dados da cidade'
        }
      }
    },
    put: {
      description: 'Atualizaçã de uma cidade',
      security: [{ bearerAuth: [] }],
      tags: ['Cities'],
      requestParams: {
        path: z.object({ id: z.string() })
      },
      requestBody: {
        content: {
          'application/json': {
            schema: cityDocsSchema
          }
        }
      },
      responses: {
        201: {
          description: 'Cidade criada'
        }
      }
    },
    delete: {
      description: 'Deletar uma cidade',
      security: [{ bearerAuth: [] }],
      tags: ['Cities'],
      requestParams: {
        path: z.object({ id: z.string() })
      },
      responses: {
        200: {
          description: 'Cidade deletada'
        }
      }
    }
  }
}
