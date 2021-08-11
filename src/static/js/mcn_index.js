$(function () {
  main()
});

const main = async () => {

  let tableData = {
    "title": "MCN Ventures Projects",
    "heading": ["Pool Provider", "Network", "LP", "Reward Tokens", "INFO"],
    "rows": [
      ["MCN Ventures    ", "Ethereum", `<a href="/mcn/farm"               >MCN / USDC-MCN / XDO</a>`,   "MCN    ","https://farm.mcn.ventures"],
      ["XDollar         ", "Polygon",  `<a href="../polygon/xdollar"  >Various</a>`,   "XDO    ","https://xdollar.mcn.ventures"],
    ]
  }

  let table = new AsciiTable().fromJSON(tableData);
  document.getElementById('log').innerHTML += table + '<br />';
  hideLoading();
}
