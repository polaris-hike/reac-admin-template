import * as echarts from 'echarts';
import 'echarts/extension-src/bmap/bmap';
import { useEffect, useRef } from 'react';
import { barOptions, mapOption } from './chartsData';
import styles from './index.module.css';

function MyEcharts() {
  const container = useRef<HTMLDivElement>(null);

  const initEcharts = () => {
    const chartDom = container.current;
    const myChart = echarts.init(chartDom);
    myChart.setOption(barOptions);
  };

  useEffect(() => {
    initEcharts();
  }, []);

  return <div className={styles.container} ref={container}></div>;
}

export default MyEcharts;
