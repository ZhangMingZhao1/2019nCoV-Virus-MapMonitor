# 2019nCoV-Virus-MapMonitor
2019-2020 新型肺炎病毒地图可视化监测，数据来自爬虫自动收集的网上信息，目前以丁香园的信息为主。定时2小时数据自动采集一次，手动刷新浏览器数据也会重新采集

# description
* 前后端分离
* view: react,echarts,baiduMap
* spider：爬虫+接口,目前部署了接口：http://119.23.185.187:8088/spider/dxy
数据来自爬虫，刷新自动更新采集。
* 其他文件皆为view中build的文件拖出来的，本来打算部署git page，发现只支持https，baiduMap的api是http的
* 本地开发：clone下来需要分别进入view和spider,npm install,npm start和node app
# demo
![image](https://github.com/ZhangMingZhao1/2019nCoV-Virus-MapMonitor/blob/master/demo1.png)


