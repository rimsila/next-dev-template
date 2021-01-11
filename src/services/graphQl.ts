import { nextRequest } from '@/utils/request';

export const graphApi = {
  // * ------ test query ------

  getGraphData: async () =>
    await nextRequest('POST', {
      query: `
        query getCharacters {
          characters {
            info {
              count
            }
            results {
              id
              name
              image
              status
              gender

            }
          }
        }
        `,
    }),
};
