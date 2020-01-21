const router = require("koa-router")();
const getData = require("../engine/util");
router.get("/spider/dxy", async (ctx, next) => {
  let data = null;
  try {
    data = await getData();
  } catch (error) {
    console.log(error);
  }
  ctx.body = data;
});

module.exports = router;
