import {useEffect, useState} from 'react'
import { useCountyData } from "hooks/useData";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "utils/HighChartBase";
import nyGeoJson from "./ny.geo.json";

let options = {
    chart: {
        type: "map",
        map: nyGeoJson,
        borderWidth: 0,
        height: 700,
        width: 700,
        backgroundColor: 'transparent'
      },

  title: {
    text: "",
  },
  colorAxis: {
    min: 0,
    max: 500,
    tickInterval: 5,
    stops: [[0, '#F1EEF6'], [0.65, '#900037'], [1, '#500007']],
},
exporting: { enabled: false },
  subtitle: {
    text:
      'COVID-19 New Cases in NY',
  },
};


const GeoMap = () => {
  const { isLoading, data } = useCountyData();
  const [mapOptions, setOptions] = useState(options)
  useEffect(()=>{
    let mapData = []
    if(!isLoading && data){
        for(let item of data){
            mapData.push([item.county, +item.new_positives ])
        }
    }
    const series = [{
        data: mapData,
        name: "New Positive Cases",
        states: {
          hover: {
            color: "#BADA55",
          },
        },
        dataLabels: {
          enabled: true,
          format: "{point.name}",
        },
    }]
    setOptions((option) => {
       return  {...option, series: series}
    })
  }, [isLoading, data, setOptions])

  return (
    <HighchartsReact
      highcharts={Highcharts}
      constructorType="mapChart"
      options={mapOptions}
    />

  );
};

export default GeoMap;
