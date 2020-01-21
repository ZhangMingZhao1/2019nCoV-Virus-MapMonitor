import React, { useState, useRef } from "react";
import { useEffect } from "react";
import ECharts from "ECharts";
import BMap from "BMap";
import "./baiduMap.css";
import { baiduMapData } from "../../data/baiduMapData";

function BaiduMap() {
  const echartsDom = useRef();

  // 副作用
  useEffect(() => {
    const myChart = ECharts.init(echartsDom.current);
    var points = [].concat.apply(
      [],
      baiduMapData.map(function(track) {
        return track.map(function(seg) {
          return seg.coord.concat([1]);
        });
      })
    );
    myChart.setOption({
      animation: false,
      bmap: {
        center: [114, 30],
        zoom: 14,
        roam: true
      },
      visualMap: {
        show: false,
        top: "top",
        min: 0,
        max: 5,
        seriesIndex: 0,
        calculable: true,
        inRange: {
          color: ["blue", "blue", "green", "yellow", "red"]
        }
      },
      series: [
        {
          type: "heatmap",
          coordinateSystem: "bmap",
          data: points,
          pointSize: 5,
          blurSize: 6
        }
      ]
    });
    // 添加百度地图插件
    var bmap = myChart
      .getModel()
      .getComponent("bmap")
      .getBMap();
    bmap.addControl(new BMap.MapTypeControl());
  }, []);
  return <div className="App" ref={echartsDom} />;
}

export default BaiduMap;
