export const prisma = {
  user: {
    findMany: async () => {
      return [{ name: 'Caio' }, { name: 'Geo' }]
    },
    findById: async (id: string) => {
      return { name: 'Caio' }
    }
  },
  product: {
    findMany: async () => {
      return [{ name: 'Curso 1' }, { name: 'Curso 2' }]
    },
  }
}