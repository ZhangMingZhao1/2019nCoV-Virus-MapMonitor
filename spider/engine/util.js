const axios = require("axios");
const cheerio = require("cheerio");

const url =
  "https://3g.dxy.cn/newh5/view/pneumonia?scene=2&clicktime=1579579384&enterid=1579579384&from=timeline&isappinstalled=0";

const getData = () => {
  return new Promise((resolve, reject) => {
    const retData = [];
    axios
      .get(url)
      .then((HtmlStr) => {
        let $ = cheerio.load(HtmlStr.data);
        const len = $(".descList___3iOuI span").get().length;
        for (let i = 0; i < len; i++) {
          const itemData = $(".descList___3iOuI span").get(i).children[1].data;
          console.log(itemData);
          const namet = itemData.substr(0, 3);
          let name = namet;
          if (namet.includes("壮") || namet.includes("回")) {
            name = namet.substr(0, 2);
          }
          if (namet.includes("省") || namet.includes("市")) {
            name = namet.substr(0, 2);
          }

          const num = itemData.match(/[0-9]+/g);
          console.log("num", num);
          retData.push({
            name: name.trim(),
            value: parseInt(
              num.reduce((total, item) => {
                return parseInt(total, 10) + parseInt(item, 10);
              }),
              10
            )
          });
        }
        resolve(retData);
        console.log(retData);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

module.exports = getData;
