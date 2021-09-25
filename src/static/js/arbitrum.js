$(function() {
  main()
});

const main = async() => {

  let tableData = {
    "title":"Arbitrum Network",
    "heading":["Pool Provider","MCN", "LP", "Reward Tokens", "INFO"],
    "rows": [
      ["GMX                 ",""                                                                                               , `<a href="/arbitrum/gmx"         >Various</a>`,"ETH,Escrowed GMX   ","https://gmx.financial"],
      ["Sushi               ",""                                                                                               , `<a href="/arbitrum/sushi"       >Various</a>`,"SUSHI              ","https://app.sushi.com"],
      ["DODO                ",""                                                                                               , `<a href="/arbitrum/dodo"        >Various</a>`,"DODO               ","https://app.dodoex.io"],
      ["NYAN                ",""                                                                                               , `<a href="/arbitrum/nyan"        >Various</a>`,"NYAN               ","https://arbinyan.xyz"],
      ["TheHoneyPot         ",""                                                                                               , `<a href="/arbitrum/honeypot"    >Various</a>`,"HONEY              ","https://thehoneypot.finance"],
      ["ArbiFarm            ",""                                                                                               , `<a href="/arbitrum/arbifarm"    >Various</a>`,"AFARM              ","https://www.arbifarm.fi"],
      ["Marvin              ",""                                                                                               , `<a href="/arbitrum/marvin"      >Various</a>`,"MARVIN             ","https://marvinfarms.info"],
      ["Arballz             ",""                                                                                               , `<a href="/arbitrum/arballz"     >Various</a>`,"ARB                ","https://arballz.finance"],
      ["ArbiKiwi            ",""                                                                                               , `<a href="/arbitrum/arbikiwi"    >Various</a>`,"AKIWI              ","http://arbikiwi.finance"],
      ["Badger              ",""                                                                                               , `<a href="/arbitrum/badger"      >Various</a>`,"BADGER             ","https://app.badger.finance"],
      ["FrostArbi           ",""                                                                                               , `<a href="/arbitrum/frost"       >Various</a>`,"FROST              ","https://frostarbi.com"],
      ["MagicLand           ",`<a href="https://twitter.com/MCNVentures/status/1438263314149163018?s=20" target="_blank" class="mcn-reviewed">REVIEW</a>`, `<a href="/arbitrum/magicland"   >Various</a>`,"MAGIC              ","https://magicland.fi"],
      ["TIF                 ",""                                                                                               , `<a href="/arbitrum/tif"         >Various</a>`,"TIF                ","https://tif.finance"],
      ["FrostArbi Iceberg   ",""                                                                                               , `<a href="/arbitrum/iceberg"     >Various</a>`,"FFARM              ","https://iceberg.frostarbi.com"],
      ["Panda Farms         ",""                                                                                               , `<a href="/arbitrum/panda"       >Various</a>`,"PANDA              ","http://pandafarms.live"],
      ["Impermax Finance    ",""                                                                                               , `<a href="/arbitrum/impermax"    >Various</a>`,"IMX                ","https://arbitrum.impermax.finance"],
      ["Xdollar             ",""                                                                                               , `<a href="/arbitrum/xdollar"     >Various</a>`,"XDO                ","https://xdollar-arb.mcn.ventures" ],
      ["ArbiDolphin         ",""                                                                                               , `<a href="/arbitrum/arbidolphin" >Various</a>`,"ARBIDOLPHIN        ","https://arb.dolphinswap.finance"],
      ["WhalesFinance       ",""                                                                                               , `<a href="/arbitrum/whalesfinance">Various</a>`,"WHALES            ","https://app.whalesfinance.io/"],
      ["Parrotdefi          ",`<a href="https://twitter.com/MCNVentures/status/1440498902688358402?s=20" target="_blank" class="mcn-reviewed">REVIEW</a>`, `<a href="/arbitrum/parrotdefi"  >Various</a>`,"PPEGG              ","https://parrotdefi.com"],
      ["Arbis               ",""                                                                                               , `<a href="/arbitrum/arbis"       >Various</a>`,"Various            ","https://arbis.finance"],
      ["DragonArbi          ",""                                                                                               , `<a href="/arbitrum/dragonarbi"  >Various</a>`,"DRAGON             ","https://dragonarbi.com"],
      ["Hundred             ",""                                                                                               , `<a href="/arbitrum/hundred"     >Various</a>`,"HND                ","https://hundred.finance"]
     ]
  }

  let table = new AsciiTable().fromJSON(tableData);
  document.getElementById('log').innerHTML += table + '<br />';
  hideLoading();

}
