import React, { useState, useRef } from "react";
import { useEffect } from "react";
import ECharts from "ECharts";
import "./staticChinaMap.css";
import { Vdata } from "../../data/data";
import axios from "axios";

function EchartHotMapCmt() {
  const echartsDom = useRef();
  const createMap = async (element) => {
    const asyncData = await fetData();

    const retData = [...Vdata, ...asyncData];
    console.log("retData", retData);
    const myChart = ECharts.init(element);
    const option = {
      // backgroundColor: "#FFFFFF",
      title: {
        text: "2020年新型肺炎病毒疫情地图",
        subtext: "(刷新即可重新采集实时数据)",
        x: "center"
      },
      tooltip: {
        trigger: "item"
      },

      //左侧小导航图标
      visualMap: {
        show: true,
        x: "left",
        y: "center",
        splitList: [
          { start: 200, end: 1000 },
          { start: 50, end: 200 },
          { start: 10, end: 50 },
          { start: 5, end: 10 },
          { start: 1, end: 5 },
          { start: 0, end: 0 }
        ],
        color: [
          "#FF3030",
          "#FF7F50",
          "#FFA54F",
          "#FFC1C1",
          "#FFE4E1",
          "#FFFAFA"
        ]
      },

      //配置属性
      series: [
        {
          name: "感染人数:",
          type: "map",
          mapType: "china",
          roam: true,
          label: {
            normal: {
              show: true //省份名称
            },
            emphasis: {
              show: false
            }
          },
          data: retData //数据
        }
      ]
    };
    myChart.setOption(option, true);
  };
  const fetData = async () => {
    const data = await axios.get("http://localhost:8080/spider/dxy");
    console.log("data", data.data);
    return data.data;
  };
  // 副作用
  useEffect(() => {
    createMap(echartsDom.current);
  }, []);
  return <div className="App" ref={echartsDom} />;
}

export default EchartHotMapCmt;
