import { useQuery } from 'react-query';

export function useNYData() {
    return useQuery(
      'NYdata',
      () => {
        return fetch(`https://api.covidtracking.com/v1/states/ny/current.json`).then(res => res.json());
      },
      {
        staleTime: Infinity,
        cacheTime: Infinity,
      }
    );
  }
  
export function useCountyData() {
    return useQuery(
      'countyData',
      () => {
        let d = new Date();
        d.setDate(d.getDate() - 2)
        return fetch(`https://health.data.ny.gov/resource/xdss-u53e.json?test_date=${d.toISOString().slice(0, 10)}T00:00:00.000`).then(res => res.json());
      },
      {
        staleTime: Infinity,
        cacheTime: Infinity,
      }
    );
  }
  