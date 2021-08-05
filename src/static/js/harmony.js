$(function() {
  main()
});

const main = async() => {

  let tableData = {
    "title":"Harmony Network",
    "heading":["Pool Provider","LP", "Reward Tokens", "INFO"],
    "rows": [
      [
        "Mochi",
        `<a href='mochi'>Various</a>`,
        "hMOCHI",
        "https://harmony.mochiswap.io"
      ],
      [
        "Viper",
        `<a href='viper'>Various</a>`,
        "VIPER",
        "https://viper.exchange"
      ],
      [
        "Viper (smartchef)",
        `<a href='viper/smartchef'>Various</a>`,
        "Various",
        "https://viper.exchange"
      ],
      [
        "Open Swap",
        `<a href='oswap'>Various</a>`,
        "oSWAP",
        "https://app.openswap.one"
      ],
      [
        "Loot",
        `<a href='loot'>Various</a>`,
        "LOOT",
        "https://lootswap.finance"
      ],
      [
        "Daikiri",
        `<a href='daikiri'>Various</a>`,
        "DAIKI",
        "https://daikiri.finance/#"
      ],
      [
        "Sushi",
        `<a href='sushi'>Various</a>`,
        "SUSHI",
        "https://app.sushi.com"
      ],
      [
        "Piggybank",
        `<a href='piggybank'>Various</a>`,
        "COINK",
        "https://piggybank.farm/#/"
      ],
      [
        "Troll",
         `<a href='troll'>Various</a>`,
          "TROLL",
          "https://lootswap.finance/guilds/troll"
      ],
      [
          "Arbiter",
           `<a href='arbiter'>Various</a>`,
            "ARB",
            "https://lootswap.finance/guilds/arb"
      ]
    ]
  }

  let table = new AsciiTable().fromJSON(tableData);
  document.getElementById('log').innerHTML += table + '<br />';
  hideLoading();
}
