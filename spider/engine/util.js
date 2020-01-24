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
        const len = $(".areaBlock1___3V3UU .subBlock1___j0DGa").get().length;
        console.log("len", len);
        let name, num;
        for (let i = 1; i < len; i++) {
          if ($(".areaBlock1___3V3UU .subBlock1___j0DGa").get(i).children[1]) {
            name = $(".areaBlock1___3V3UU .subBlock1___j0DGa").get(i)
              .children[1].data;
          }
          num = $(".areaBlock1___3V3UU .subBlock2___E7-fW").get(i).children[0]
            .data;
          console.log("name", name);
          console.log("num", num);

          retData.push({
            name: name.trim(),
            value: parseInt(num, 10)
          });
        }
        resolve(retData);
        // console.log(retData);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

module.exports = getData;
