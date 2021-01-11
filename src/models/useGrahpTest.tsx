import { graphApi } from '@/services/graphQl';
import { useRequest } from 'ahooks/es';

export default function useGrahpTestModel() {
  // * ------------ addCategory --------------
  const { data: graphData, loading: loadingGraph, run: runGraphData } = useRequest(
    graphApi.getGraphData,
    {
      manual: true,
    },
  );

  const onGetGraphData = () => {
    runGraphData();
  };

  return {
    characters: graphData?.data?.characters?.results.slice(0, 30),
    graphData,
    loadingGraph,
    onGetGraphData,
  };
}
