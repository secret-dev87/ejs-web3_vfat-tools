$(function() {
  main()
});

const main = async() => {

  let tableData = {
    "title":"OKEX Network",
    "heading":["Pool Provider","LP", "Reward Tokens", "INFO"],
    "rows": [
      ["Sakeswap",   `<a href='sakeswap'     >Various</a>`,  "SAKE",    "https://okapp.sakeswap.fi"],
      ["WePiggy",    `<a href='wepiggy'      >Various</a>`,  "WPC",     "https://okexchain.wepiggy.com/markets"],
      ["KSwap",      `<a href='kswap'        >Various</a>`,  "KST",     "https://kswap.finance"],
      ["CherrySwap", `<a href='cherryswap'   >Various</a>`,  "CHE",     "https://www.cherryswap.net"],
      ["BoneSwap",   `<a href='boneswap'     >Various</a>`,  "BONE",    "https://farm-okex.boneswap.finance"]
    ]
  }

  let table = new AsciiTable().fromJSON(tableData);
  document.getElementById('log').innerHTML += table + '<br />';
  hideLoading();
}
