import React from "react";
import EchartHotMapCmt from "../../map/staticChinaMap/staticChinaMap";
import BaiduMap from "../../map/baiduMap/baiduMap";
import logo from "../../static/img/logo.jpeg";
import "./index.css";
function Home() {
  return (
    <div className="HomeContainer">
      {/* <div className="logo">
        <img src={logo} alt="" />
      </div> */}
      <EchartHotMapCmt />
    </div>
  );
}

export default Home;
