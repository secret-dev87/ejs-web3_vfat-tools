$(function() {
  main()
});

const main = async() => {

  let tableData = {
    "title":"POLYGON Network",
    "heading":["Pool Provider","LP", "Reward Tokens", "INFO"],
    "rows": [
        ["Quickswap           ",`<a href="quick"           >Various</a>`,"QUICK        ","https://quickswap.exchange/#/quick"],
        ["Cometh              ",`<a href="cometh"          >Various</a>`,"MUST         ","https://swap.cometh.io/#/stake"],
        ["Dark                ",`<a href="dark"            >Various</a>`,"DB           ","https://www.dark.build"],
        ["Smartdex            ",`<a href="smartdex"        >Various</a>`,"NIOX         ","https://swap.smartdex.app"],
        ["Elk                 ",`<a href="elk"             >Various</a>`,"ELK          ","https://app.elk.finance"],
        ["Polywhale           ",`<a href="polywhale"       >Various</a>`,"KRILL        ","https://polywhale.finance"],
        ["Aave                ",`<a href="aave"            >Various</a>`,"MATIC        ","https://aave.com"],
        ["Polyfox             ",`<a href="polyfox"         >Various</a>`,"FOX          ","https://polyfox.finance"],
        ["Hawkdex             ",`<a href="hawk"            >Various</a>`,"HAWK         ","https://hawkdex.com"],
        ["PolyDragon          ",`<a href="polydragon"     >Various</a>`,"FIRE          ","https://polydragon.io"],
        ["Polycat             ",`<a href="polycat"        >Various</a>`,"FISH          ","https://polycat.finance"],
        ["BoughtThe.top       ",`<a href="boughtthetop"    >Various</a>`,"BTT          ","https://farm.BoughtThe.top"],
        ["PolyStarter         ",`<a href="polystarter"     >Various</a>`,"STARTER      ","https://www.polystarter.fi"],
        ["Polyvolve           ",`<a href="polyvolve"       >Various</a>`,"SPEAR        ","https://polyvolve.finance"],
        ["Polygaj             ",`<a href="polygaj"         >Various</a>`,"GAJ          ","https://polygaj.finance"],
        ["Galaxy              ",`<a href="galaxy"          >Various</a>`,"Various      ","https://galaxyfarm.routerprotocol.com"],
        ["GameSwap            ",`<a href="gameswap"        >Various</a>`,"STONK        ","https://gameswapfinance.com"],
        ["Blackswap           ",`<a href="blackswap"       >Various</a>`,"AURORA/SOLAR ","https://www.blackswap.finance"],
        ["Polycake            ",`<a href="polycake"        >Various</a>`,"PCAKE        ","https://www.polycake.finance"],
        ["Polyrangers         ",`<a href="polyrangers"     >Various</a>`,"RNG          ","https://polyrangers.finance"],
        ["Sushi               ",`<a href="sushi"           >Various</a>`,"SUSHI        ","https://app.sushi.com"],
        ["Mai                 ",`<a href="mai"             >Various</a>`,"Qi           ","https://www.mai.finance"],
        ["Polyshark           ",`<a href="polyshark"       >Various</a>`,"SHARK        ","https://www.polyshark.finance"],
        ["Polyfi              ",`<a href="polyfi"          >Various</a>`,"PolyFi       ","https://polyfi.io"],
        ["Polyape             ",`<a href="polyape"         >Various</a>`,"Ape          ","https://www.polyape.online"],
        ["Polyzap             ",`<a href="polyzap"         >Various</a>`,"PZAP         ","https://farm.polyzap.finance"],
        ["Polypanda           ",`<a href="polypanda"       >Various</a>`,"BAMBOO       ","https://polypanda.finance"],
        ["Dfyn                ",`<a href="dfyn"            >Various</a>`,"DFYN         ","https://exchange.dfyn.network"],
        ["Jurassic            ",`<a href="jurassic"        >Various</a>`,"RAPTOR       ","https://www.jurassicfarm.app"],
        ["Beefy               ",`<a href="beefy"           >Various</a>`,"Various      ","https://polygon.beefy.finance"],
        ["Monopoly            ",`<a href="monopoly"        >Various</a>`,"MONO         ","https://monopolyfinance.xyz"],
        ["Polyce              ",`<a href="polyce"          >Various</a>`,"CSI          ","https://polyce.io"],
        ["Lumberjack          ",`<a href="lumberjack"      >Various</a>`,"ACORN        ","https://lumberjack.finance"],
        ["PolyPunk            ",`<a href="polypunk"        >Various</a>`,"PPNK         ","https://polypunk.finance"],
        ["SteakHouse          ",`<a href="steakhouse"      >Various</a>`,"STEAK        ","https://steakhouse.finance"],
        ["Monke Farm          ",`<a href="monkefarm"       >Various</a>`,"MONKE        ","https://monkefarm.finance"],
        ["Polylion            ",`<a href="polylion"        >Various</a>`,"LION         ","https://polylion.exchange"],
        ["PolyBull            ",`<a href="polybull"        >Various</a>`,"BULL         ","https://polybull.finance"],
        ["Orcinus             ",`<a href="orcinus"         >Various</a>`,"ORCA         ","https://www.orcinuslabs.ca"],
        ["Polyape Finance     ",`<a href="polyape_finance" >Various</a>`,"APE          ","https://www.polyapefinance.com"],
        ["PolyWolf            ",`<a href="polywolf"        >Various</a>`,"WOLF         ","https://polywolf.finance"],
        ["Stacker Ventures    ",`<a href="stacker-vc"      >Various</a>`,"STACK        ","https://stacker.vc"],
        ["Polygoat            ",`<a href="polygoat"        >Various</a>`,"GOAT         ","https://www.polygoat.finance"],
        ["Polysnake           ",`<a href="polysnake"       >Various</a>`,"SNAKE        ","https://www.polysnake.finance"],
        ["Moonwolf            ",`<a href="moonwolf"        >Various</a>`,"MOON         ","https://www.moonwolf.io"],
        ["Iron                ",`<a href="iron"            >Various</a>`,"TITAN        ","https://polygon.iron.finance"],
        ["Alchemy Dao         ",`<a href="alchemydao"      >Various</a>`,"ALCH         ","https://polygon.alchemydao.com"],
        ["Polycrab            ",`<a href="polycrab"        >Various</a>`,"CRAB         ","https://polycrab.finance"],
        ["Polybear            ",`<a href="polybear"        >Various</a>`,"BEAR         ","https://polybear.exchange"],
        ["StonkFarm           ",`<a href="stonkfarm"       >Various</a>`,"STONKX       ","https://stonk.farm"],
        ["Polydex             ",`<a href="polydex"         >Various</a>`,"PLX          ","https://polydex.fi"],
        ["PolyMaple           ",`<a href="polymaple"       >Various</a>`,"MAPLE        ",""],
        ["Gravity Finance     ",`<a href="gravityfinance"  >Various</a>`,"GFI          ","https://gravityfinance.io"],
        ["Smellycat           ",`<a href="smellycat"       >Various</a>`,"PUSSY        ","https://www.smellycat.finance"],
        ["Polygold            ",`<a href="polygold"        >Various</a>`,"POLYGOLD     ","https://polygold.finance"],
        ["Polyswan            ",`<a href="polyswan"        >Various</a>`,"SWAN         ","https://www.polyswan.finance"],
        ["Polyion             ",`<a href="polyion"         >Various</a>`,"LION         ","https://www.polyion.net"],
        ["Eleven              ",`<a href="eleven"          >Various</a>`,"ELE          ","https://eleven.finance"],
        ["Pirate Dice         ",`<a href="piratedice"      >Various</a>`,"BOOTY        ","http://piratedice.xyz"],
        ["PolyPingu           ",`<a href="polypingu"       >Various</a>`,"PINGU        ","https://polypingu.finance"],
        ["Goldenbull          ",`<a href="goldenbull"      >Various</a>`,"GBULL        ","https://farms.goldenbull.finance"],
        ["Polyakita           ",`<a href="polyakita"       >Various</a>`,"HACHI        ","https://defi.polyakita.com"],
        ["Prism               ",`<a href="prism"           >Various</a>`,"PRISM        ","https://polygon.prismfinance.net"],
        ["Polybutterfly       ",`<a href="polybutterfly"   >Various</a>`,"POLLEN       ","https://polybutterfly.finance"],
        ["Southpark           ",`<a href="southpark"       >Various</a>`,"SOUTHPARK    ","https://southpark.finance"],
        ["PolyCash            ",`<a href="polycash"        >Various</a>`,"CASH         ","https://polycash.finance"],
        ["Dinosaur            ",`<a href="dinosaur"        >Various</a>`,"DINO         ","https://dinosaurfinance.vercel.app"],
        ["Magic               ",`<a href="magic"           >Various</a>`,"DRAX/DMAGIC  ","https://defimagic.io"],
        ["Polymouse           ",`<a href="polymouse"       >Various</a>`,"MICE         ","https://polymouse.finance"],
        ["PolyTiger           ",`<a href="polytiger"       >Various</a>`,"TIGON        ","https://www.polytiger.com"],
        ["Polydeer            ",`<a href="polydeer"        >Various</a>`,"DEER         ","https://polydeer.finance"],
        ["Avengers            ",`<a href="avengers"        >Various</a>`,"SHIELD       ","https://avengers.exchange"],
        ["PolyBunny           ",`<a href="polybunny"       >Various</a>`,"BUNNY        ","https://www.polybunny.finance"],
        ["BerserkFinance      ",`<a href="berserkfinance"  >Various</a>`,"BRSK         ","https://berserkfinance.com"],
        ["PolyMeme            ",`<a href="polymeme"        >Various</a>`,"MEME         ","vfat.tools/polygon/polymeme"],
        ["Harvester           ",`<a href="harvester"       >Various</a>`,"CROP         ","https://harvester.app"],
        ["Museum Of Crypto Art",`<a href="moca"            >Various</a>`,"MOCA         ","https://museumofcryptoart.com"],
        ["PolyPup             ",`<a href="polypup"         >Various</a>`,"PUP          ","https://polypup.finance"],
        ["Space               ",`<a href="space"           >Various</a>`,"SPACE        ","https://polygon.space-defi.com"],
        ["Glock               ",`<a href="glock"           >Various</a>`,"GLOCK        ","https://www.glockswap.com"],
        ["XDollar             ",`<a href="xdollar"         >Various</a>`,"XDO          ","https://xdollar.mcn.ventures"],
        ["PolyCarrot          ",`<a href="polycarrot"      >Various</a>`,"CARROT       ","https://www.polycarrot.finance"],
        ["8Ball               ",`<a href="8ball"           >Various</a>`,"8BALL        ","https://8ballfinance.io"],
        ["MordorSwap          ",`<a href="mordorswap"      >Various</a>`,"MORDOR       ","https://mordorswap.finance"],
        ["PolyVertex          ",`<a href="polyvertex"      >Various</a>`,"VERT         ","https://polyvertex.finance"],
        ["PolyZero            ",`<a href="polyzero"        >Various</a>`,"ZERO         ",""],
        ["PolyMax             ",`<a href="polymax"         >Various</a>`,"MAX          ","https://polymax.club"],
        ["PolySnowFarm        ",`<a href="polysnowfarm"    >Various</a>`,"SNOW         ","https://polysnow.farm"],
        ["Polyyeld            ",`<a href="polyyeld"        >Various</a>`,"YELD         ","https://polyyeld.finance"],
        ["Polysa              ",`<a href="polysa"          >Various</a>`,"DUFF         ","https://www.polysa.finance"],
        ["Wault               ",`<a href="wault"           >Various</a>`,"WEXpoly      ","https://www.polysa.finance"],
        ["PolyWoof            ",`<a href="polywoof"        >Various</a>`,"TREAT        ","https://www.polywoof.finance"]
      ]
  }

  let table = new AsciiTable().fromJSON(tableData);
  document.getElementById('log').innerHTML += table + '<br />';
  hideLoading();
}
