$(function() {
  main()
})

const main = async () => {
  let tableData = {
    title: 'POLYGON Network',
    heading: ['Pool Provider', 'LP', 'Reward Tokens', 'INFO'],
    rows: [
      ['EuroBallz Finance               ', `<a href="euroballz"           >Various</a>`, 'BALLZ        ', 'https://euroballz.finance'],
      ['Kyber DMM           ', `<a href="kyber"           >Various</a>`, 'KNC          ', 'https://dmm.exchange'],
      [
        'Quickswap           ',
        `<a href="quick"           >Various</a>`,
        'QUICK        ',
        'https://quickswap.exchange/#/quick',
      ],
      [
        'Cometh              ',
        `<a href="cometh"          >Various</a>`,
        'MUST         ',
        'https://swap.cometh.io/#/stake',
      ],
      ['Dark                ', `<a href="dark"            >Various</a>`, 'DB           ', 'https://www.dark.build'],
      ['Smartdex            ', `<a href="smartdex"        >Various</a>`, 'NIOX         ', 'https://swap.smartdex.app'],
      ['Elk                 ', `<a href="elk"             >Various</a>`, 'ELK          ', 'https://app.elk.finance'],
      ['Polywhale           ', `<a href="polywhale"       >Various</a>`, 'KRILL        ', 'https://polywhale.finance'],
      ['Aave                ', `<a href="aave"            >Various</a>`, 'MATIC        ', 'https://aave.com'],
      ['BullionFinance             ', `<a href="bullionfinance"         >Various</a>`, 'GOLD          ', 'https://bullionfinance.xyz'],
      ['Polyfox             ', `<a href="polyfox"         >Various</a>`, 'FOX          ', 'https://polyfox.finance'],
      ['Hawkdex             ', `<a href="hawk"            >Various</a>`, 'HAWK         ', 'https://hawkdex.com'],
      ['PolyDragon          ', `<a href="polydragon"      >Various</a>`, 'FIRE         ', 'https://polydragon.io'],
      ['Polycat             ', `<a href="polycat"         >Various</a>`, 'FISH         ', 'https://polycat.finance'],
      ['BoughtThe.top       ', `<a href="boughtthetop"    >Various</a>`, 'BTT          ', 'https://farm.BoughtThe.top'],
      ['PolyStarter         ', `<a href="polystarter"     >Various</a>`, 'STARTER      ', 'https://www.polystarter.fi'],
      ['Polyvolve           ', `<a href="polyvolve"       >Various</a>`, 'SPEAR        ', 'https://polyvolve.finance'],
      ['Polygaj             ', `<a href="polygaj"         >Various</a>`, 'GAJ          ', 'https://polygaj.finance'],
      [
        'Galaxy              ',
        `<a href="galaxy"          >Various</a>`,
        'Various      ',
        'https://galaxyfarm.routerprotocol.com',
      ],
      [
        'GameSwap            ',
        `<a href="gameswap"        >Various</a>`,
        'STONK        ',
        'https://gameswapfinance.com',
      ],
      [
        'Blackswap           ',
        `<a href="blackswap"       >Various</a>`,
        'AURORA/SOLAR ',
        'https://www.blackswap.finance',
      ],
      [
        'Polycake            ',
        `<a href="polycake"        >Various</a>`,
        'PCAKE        ',
        'https://www.polycake.finance',
      ],
      [
        'Polyrangers         ',
        `<a href="polyrangers"     >Various</a>`,
        'RNG          ',
        'https://polyrangers.finance',
      ],
      ['Sushi               ', `<a href="sushi"           >Various</a>`, 'SUSHI        ', 'https://app.sushi.com'],
      ['Mai                 ', `<a href="mai"             >Various</a>`, 'Qi           ', 'https://www.mai.finance'],
      [
        'Polyshark           ',
        `<a href="polyshark"       >Various</a>`,
        'SHARK        ',
        'https://www.polyshark.finance',
      ],
      [
        'Polyvalent          ',
        `<a href="polyvalent"      >Various</a>`,
        'ELECTRON     ',
        'https://www.polyvalent.finance',
      ],
      ['Polyfi              ', `<a href="polyfi"          >Various</a>`, 'PolyFi       ', 'https://polyfi.io'],
      ['Polyape             ', `<a href="polyape"         >Various</a>`, 'Ape          ', 'https://www.polyape.online'],
      [
        'Polyzap             ',
        `<a href="polyzap"         >Various</a>`,
        'PZAP         ',
        'https://farm.polyzap.finance',
      ],
      ['Gemstones Finance   ', `<a href="gemstonesfinance">Various</a>`, 'GMS          ', 'https://gemstones.finance'],
      ['Polypanda           ', `<a href="polypanda"       >Various</a>`, 'BAMBOO       ', 'https://polypanda.finance'],
      [
        'Dfyn                ',
        `<a href="dfyn"            >Various</a>`,
        'DFYN         ',
        'https://exchange.dfyn.network',
      ],
      [
        'Jurassic            ',
        `<a href="jurassic"        >Various</a>`,
        'RAPTOR       ',
        'https://www.jurassicfarm.app',
      ],
      [
        'Beefy               ',
        `<a href="beefy"           >Various</a>`,
        'Various      ',
        'https://polygon.beefy.finance',
      ],
      [
        'Monopoly            ',
        `<a href="monopoly"        >Various</a>`,
        'MONO         ',
        'https://monopolyfinance.xyz',
      ],
      ['Polyce              ', `<a href="polyce"          >Various</a>`, 'CSI          ', 'https://polyce.io'],
      ['Lumberjack          ', `<a href="lumberjack"      >Various</a>`, 'ACORN        ', 'https://lumberjack.finance'],
      ['PolyPunk            ', `<a href="polypunk"        >Various</a>`, 'PPNK         ', 'https://polypunk.finance'],
      ['SteakHouse          ', `<a href="steakhouse"      >Various</a>`, 'STEAK        ', 'https://steakhouse.finance'],
      ['Monke Farm          ', `<a href="monkefarm"       >Various</a>`, 'MONKE        ', 'https://monkefarm.finance'],
      ['Polylion            ', `<a href="polylion"        >Various</a>`, 'LION         ', 'https://polylion.exchange'],
      ['PolyBull            ', `<a href="polybull"        >Various</a>`, 'BULL         ', 'https://polybull.finance'],
      ['Orcinus             ', `<a href="orcinus"         >Various</a>`, 'ORCA         ', 'https://www.orcinuslabs.ca'],
      [
        'Polyape Finance     ',
        `<a href="polyape_finance" >Various</a>`,
        'APE          ',
        'https://www.polyapefinance.com',
      ],
      ['PolyWolf            ', `<a href="polywolf"        >Various</a>`, 'WOLF         ', 'https://polywolf.finance'],
      ['Stacker Ventures    ', `<a href="stacker-vc"      >Various</a>`, 'STACK        ', 'https://stacker.vc'],
      [
        'Polygoat            ',
        `<a href="polygoat"        >Various</a>`,
        'GOAT         ',
        'https://www.polygoat.finance',
      ],
      [
        'Polysnake           ',
        `<a href="polysnake"       >Various</a>`,
        'SNAKE        ',
        'https://www.polysnake.finance',
      ],
      ['Moonwolf            ', `<a href="moonwolf"        >Various</a>`, 'MOON         ', 'https://www.moonwolf.io'],
      [
        'Iron                ',
        `<a href="iron"            >Various</a>`,
        'TITAN        ',
        'https://polygon.iron.finance',
      ],
      [
        'Alchemy Dao         ',
        `<a href="alchemydao"      >Various</a>`,
        'ALCH         ',
        'https://polygon.alchemydao.com',
      ],
      ['Polycrab            ', `<a href="polycrab"        >Various</a>`, 'CRAB         ', 'https://polycrab.finance'],
      ['Polybear            ', `<a href="polybear"        >Various</a>`, 'BEAR         ', 'https://polybear.exchange'],
      ['StonkFarm           ', `<a href="stonkfarm"       >Various</a>`, 'STONKX       ', 'https://stonk.farm'],
      ['Polydex             ', `<a href="polydex"         >Various</a>`, 'PLX          ', 'https://polydex.fi'],
      ['PolyMaple           ', `<a href="polymaple"       >Various</a>`, 'MAPLE        ', 'https://www.polymaple.com'],
      ['Gravity Finance     ', `<a href="gravityfinance"  >Various</a>`, 'GFI          ', 'https://gravityfinance.io'],
      [
        'Smellycat           ',
        `<a href="smellycat"       >Various</a>`,
        'PUSSY        ',
        'https://www.smellycat.finance',
      ],
      ['Polygold            ', `<a href="polygold"        >Various</a>`, 'POLYGOLD     ', 'https://polygold.finance'],
      [
        'Polyswan            ',
        `<a href="polyswan"        >Various</a>`,
        'SWAN         ',
        'https://www.polyswan.finance',
      ],
      ['Polyion             ', `<a href="polyion"         >Various</a>`, 'LION         ', 'https://www.polyion.net'],
      ['Eleven              ', `<a href="eleven"          >Various</a>`, 'ELE          ', 'https://eleven.finance'],
      ['Pirate Dice         ', `<a href="piratedice"      >Various</a>`, 'BOOTY        ', 'http://piratedice.xyz'],
      ['PolyPingu           ', `<a href="polypingu"       >Various</a>`, 'PINGU        ', 'https://polypingu.finance'],
      [
        'Goldenbull          ',
        `<a href="goldenbull"      >Various</a>`,
        'GBULL        ',
        'https://farms.goldenbull.finance',
      ],
      ['Polyakita           ', `<a href="polyakita"       >Various</a>`, 'HACHI        ', 'https://defi.polyakita.com'],
      [
        'Prism               ',
        `<a href="prism"           >Various</a>`,
        'PRISM        ',
        'https://polygon.prismfinance.net',
      ],
      [
        'Polybutterfly       ',
        `<a href="polybutterfly"   >Various</a>`,
        'POLLEN       ',
        'https://polybutterfly.finance',
      ],
      ['Southpark           ', `<a href="southpark"       >Various</a>`, 'SOUTHPARK    ', 'https://southpark.finance'],
      ['PolyCash            ', `<a href="polycash"        >Various</a>`, 'CASH         ', 'https://polycash.finance'],
      [
        'Dinosaur            ',
        `<a href="dinosaur"        >Various</a>`,
        'DINO         ',
        'https://dinosaurfinance.vercel.app',
      ],
      ['Magic               ', `<a href="magic"           >Various</a>`, 'DRAX/DMAGIC  ', 'https://defimagic.io'],
      ['Polymouse           ', `<a href="polymouse"       >Various</a>`, 'MICE         ', 'https://polymouse.finance'],
      ['PolyTiger           ', `<a href="polytiger"       >Various</a>`, 'TIGON        ', 'https://www.polytiger.com'],
      ['Polydeer            ', `<a href="polydeer"        >Various</a>`, 'DEER         ', 'https://polydeer.finance'],
      ['Avengers            ', `<a href="avengers"        >Various</a>`, 'SHIELD       ', 'https://avengers.exchange'],
      [
        'PolyBunny           ',
        `<a href="polybunny"       >Various</a>`,
        'BUNNY        ',
        'https://www.polybunny.finance',
      ],
      ['BerserkFinance      ', `<a href="berserkfinance"  >Various</a>`, 'BRSK         ', 'https://berserkfinance.com'],
      [
        'PolyMeme            ',
        `<a href="polymeme"        >Various</a>`,
        'MEME         ',
        'vfat.tools/polygon/polymeme',
      ],
      [
        'Museum Of Crypto Art',
        `<a href="moca"            >Various</a>`,
        'MOCA         ',
        'https://museumofcryptoart.com',
      ],
      ['PolyPup             ', `<a href="polypup"         >Various</a>`, 'PUP          ', 'https://polypup.finance'],
      [
        'Space               ',
        `<a href="space"           >Various</a>`,
        'SPACE        ',
        'https://polygon.space-defi.com',
      ],
      ['Glock               ', `<a href="glock"           >Various</a>`, 'GLOCK        ', 'https://www.glockswap.com'],
      [
        'XDollar             ',
        `<a href="xdollar"         >Various</a>`,
        'XDO          ',
        'https://xdollar.mcn.ventures',
      ],
      [
        'PolyCarrot          ',
        `<a href="polycarrot"      >Various</a>`,
        'CARROT       ',
        'https://www.polycarrot.finance',
      ],
      ['8Ball               ', `<a href="8ball"           >Various</a>`, '8BALL        ', 'https://8ballfinance.io'],
      ['MordorSwap          ', `<a href="mordorswap"      >Various</a>`, 'MORDOR       ', 'https://mordorswap.finance'],
      ['PolyVertex          ', `<a href="polyvertex"      >Various</a>`, 'VERT         ', 'https://polyvertex.finance'],
      ['PolyZero            ', `<a href="polyzero"        >Various</a>`, 'ZERO         ', ''],
      ['PolyMax             ', `<a href="polymax"         >Various</a>`, 'MAX          ', 'https://polymax.club'],
      ['PolySnowFarm        ', `<a href="polysnowfarm"    >Various</a>`, 'SNOW         ', 'https://polysnow.farm'],
      ['Polyyeld            ', `<a href="polyyeld"        >Various</a>`, 'YELD         ', 'https://polyyeld.finance'],
      ['Polysa              ', `<a href="polysa"          >Various</a>`, 'DUFF         ', 'https://www.polysa.finance'],
      [
        'Wault               ',
        `<a href="wault"           >Various</a>`,
        'WEXpoly      ',
        'https://app.wault.finance/polygon/',
      ],
      [
        'PolyHarvest         ',
        `<a href="polyharvest"     >Various</a>`,
        'WHEAT        ',
        'https://www.polyharvest.finance',
      ],
      [
        'PolyWoof            ',
        `<a href="polywoof"        >Various</a>`,
        'TREAT        ',
        'https://www.polywoof.finance',
      ],
      ['SafeDollar          ', `<a href="safedollar"      >Various</a>`, 'SDS/SDO      ', 'https://app.safedollar.fi'],
      [
        'Cosmic              ',
        `<a href="cosmic"          >Various</a>`,
        'COSMIC       ',
        'https://polygon.cosmicswap.finance',
      ],
      ['StonkYFarm          ', `<a href="stonky"          >Various</a>`, 'STONKY       ', 'https://stonky.farm'],
      ['Polycafe            ', `<a href="polycafe"        >Various</a>`, 'JAVA         ', 'https://polycafe.finance'],
      ['Slowpoke            ', `<a href="slowpoke"        >Various</a>`, 'SLOW         ', 'https://slowpoke.space'],
      [
        'PolyRocket          ',
        `<a href="polyrocket"      >Various</a>`,
        'ROCKET       ',
        'https://www.rocketfarming.finance',
      ],
      ['PolyComet           ', `<a href="polycomet"       >Various</a>`, 'COMET        ', 'https://www.polycomet.com'],
      ['KogeFarm                ', `<a href="koge"            >Various</a>`, 'Various      ', 'https://kogefarm.io'],
      [
        'Fulcrum             ',
        `<a href="fulcrum"         >Various</a>`,
        'PGOV         ',
        'https://polygon.fulcrum.trade',
      ],
      ['XBull               ', `<a href="xbull"           >Various</a>`, 'XBULL        ', 'https://xbull.finance'],
      ['Augury              ', `<a href="augury"          >Various</a>`, 'OMEN         ', 'https://augury.finance'],
      ['PolyMeme V2         ', `<a href="polymemev2"      >Various</a>`, 'MEME         ', 'https://polyme.me'],
      [
        'WorldSwap Bali      ',
        `<a href="worldswap_dps"   >Various</a>`,
        'DPS          ',
        'https://bali.worldswap.finance',
      ],
      ['PolyFunky Finance   ', `<a href="polyfunky"       >Various</a>`, 'FUNK         ', 'https://www.polyfunky.com'],
      ['Polycuban           ', `<a href="polycuban"       >Various</a>`, 'CUBAN        ', 'https://polycuban.finance'],
      ['50Cent              ', `<a href="50c"             >Various</a>`, '50C/50K      ', 'https://50cent.network'],
      ['HonestWorkFarms     ', `<a href="honestwork"      >Various</a>`, '🚜          ', 'https://www.honestwork.farm'],
      ['Adamant             ', `<a href="adamant"         >Various</a>`, 'Various      ', 'https://adamant.finance'],
      ['Polygame            ', `<a href="polygame"        >Various</a>`, 'POLYGAME     ', 'https://polygame.finance'],
      ['Carousel            ', `<a href="carousel"        >Various</a>`, 'CRS          ', 'https://carouselswap.com'],
      [
        'PolyCrystal         ',
        `<a href="polycrystal"     >Various</a>`,
        'CRYSTAL      ',
        'https://polycrystal.finance',
      ],
      [
        'Firebird            ',
        `<a href="firebird"        >Various</a>`,
        'HOPE         ',
        'https://app.firebird.finance',
      ],
      ['Polyroll            ', `<a href="polyroll"        >Various</a>`, 'ROLL         ', 'https://polyroll.org'],
      ['FarmHero            ', `<a href="farmhero"        >Various</a>`, 'HONOR        ', 'https://farmhero.io'],
      ['PolyYield           ', `<a href="polyyield"       >Various</a>`, 'YIELD        ', 'https://polyyield.finance'],
      [
        'PolyPulsar          ',
        `<a href="polypulsar"      >Various</a>`,
        'BPUL         ',
        'https://www.polypulsar.farm',
      ],
      [
        'Lego                ',
        `<a href="lego"            >Various</a>`,
        'LEGO         ',
        'https://legofarming-polygon.club',
      ],
      ['FairyFarming        ', `<a href="fairy"           >Various</a>`, 'FAIRY        ', 'https://fairyfarming.world'],
      ['Rediant             ', `<a href="rediant"         >Various</a>`, 'RDT          ', 'https://rediant.finance'],
      ['StonkZFarm          ', `<a href="stonkzfarm"      >Various</a>`, 'STONKZ       ', 'https://stonkz.farm'],
      ['NinjaSwap           ', `<a href="ninjaswap"       >Various</a>`, 'NINJA        ', 'https://ninjaswapdefi.com'],
      ['Polyquity           ', `<a href="polyquity"       >Various</a>`, 'PYQ          ', 'https://app.polyquity.org'],
      ['Tako                ', `<a href="tako"            >Various</a>`, 'TAKO         ', 'https://takodefi.com'],
      ['Harvester           ', `<a href="harvester"       >Various</a>`, '🌾          ', 'https://harvester.app'],
      [
        'Polymer             ',
        `<a href="polymer"         >Various</a>`,
        'OIL          ',
        'https://polymeryield.finance',
      ],
      ['Polybrew            ', `<a href="polybrew"        >Various</a>`, 'BREW         ', 'https://polybrew.finance'],
      [
        'PolyDiamond         ',
        `<a href="polydiamond"     >Various</a>`,
        'DMND         ',
        'https://polydiamondfinance.com',
      ],
      ['PolyCactus          ', `<a href="polycactus"      >Various</a>`, 'CACTUS       ', 'https://polycactus.com'],
      ['PolyGrass           ', `<a href="polygrass"       >Various</a>`, 'GRASS        ', 'https://polygrass.online'],
      ['Pickle              ', `<a href="pickle"          >Various</a>`, 'PICKLE       ', 'https://app.pickle.finance'],
      ['Fox                 ', `<a href="fox"             >Various</a>`, 'FOX          ', 'https://foxfarming.us'],
      ['MountainSwap        ', `<a href="mountainswap"    >Various</a>`, 'MOUNTAIN     ', '                     '],
      ['Hippolygon          ', `<a href="hippolygon"      >Various</a>`, 'HIPPO        ', 'https://hippolygon.com'],
      ['Pepe                ', `<a href="pepe"            >Various</a>`, 'PEPEFARM     ', 'https://pepefarm.finance'],
      [
        'PolyPupBone         ',
        `<a href="polypupbone"     >Various</a>`,
        'BONE         ',
        'https://bone.polypup.finance',
      ],
      [
        'PolyRhino           ',
        `<a href="polyrhino"       >Various</a>`,
        'HORN         ',
        'https://polyrhino.vercel.app',
      ],
      [
        'PolyRuby            ',
        `<a href="polyruby"        >Various</a>`,
        'RUBY         ',
        'https://www.polyruby.finance',
      ],
      ['PolyZeus            ', `<a href="polyzeus"        >Various</a>`, 'PolyZeus     ', 'https://polyzeus.finance'],
      ['PolyMax - CaveMan   ', `<a href="polymax_caveman" >Various</a>`, 'CaveMan      ', 'https://caveman.polymax.club'],
      ['PolyTreasure        ', `<a href="polytreasure"    >Various</a>`, 'TRZ          ', 'https://vfat.tools/polygon/polytreasure'],
      ['PolyRacoon          ', `<a href="polyracoon"      >Various</a>`, 'RACOON       ', 'https://polyracoon.com/'],
      ['BoneSwap            ', `<a href="boneswap"        >Various</a>`, 'BONE         ', 'https://farm.boneswap.finance'],
      ['Polyyearn           ', `<a href="polyyearn"       >Various</a>`, 'YEARN        ', 'https://polyyearn.finance'],
      ['WorldSwap Hanoi     ', `<a href="worldswap_han"   >Various</a>`, 'HAN          ', 'https://hanoi.worldswap.finance'],
      ['Astrobunny          ', `<a href="astrobunny"      >Various</a>`, 'ABUNNY       ', 'https://www.astrobunny.finance'],
      ['BisonFinance        ', `<a href="bisonfinance"    >Various</a>`, 'BISON        ', 'https://bisonfinance.online'],
      ['Bullrun             ', `<a href="bullrun"         >Various</a>`, 'BULL         ', 'https://polygon.bullrun.finance'],
      ['PolyArrow           ', `<a href="polyarrow"       >Various</a>`, 'ARROW        ', 'https://polyarrow.xyz'],
      ['PantsuSwap          ', `<a href="pantsuswap"      >Various</a>`, 'PANTSU       ', 'https://pantsuswap.com'],
      ['PolyMocha           ', `<a href="polymocha"       >Various</a>`, 'MOCHA        ', 'https://polymocha.finance'],
      ['PolyOwl             ', `<a href="polyowl"         >Various</a>`, 'OWL          ', 'https://www.polyowl.finance'],
      ['Astrofarms - Cancer ', `<a href="astrofarmscancer">Various</a>`, 'CANCER       ', 'https://cancer.astrofarms.finance'],
      ['FaunaFinance        ', `<a href="faunafinance"    >Various</a>`, 'FAUNA        ', 'https://www.fauna.finance'],
      ['Vampire             ', `<a href="vampire"         >Various</a>`, 'VAMPIRE      ', 'https://vampirefarming.club'],
      ['PolyGorilla         ', `<a href="polygorilla"     >Various</a>`, 'GORILLA      ', 'https://polygorilla.finance'],
      ['PolyGarden          ', `<a href="polygarden"      >Various</a>`, 'APPLE        ', 'https://www.polygarden.finance'],
      ["Gains Farm          ", `<a href="gains-farm"      >GFARM2/DAI</a>`,"GFARM2     ", "https://gains.farm"],
      ['DojoFarmFinance     ', `<a href="dojofarm"        >Various</a>`, 'DOJO         ', 'https://dojofarm.finance'],
      ['PolyMaple-MapleSyrup', `<a href="polymaplesyrup"  >Various</a>`, 'SYRUP        ', 'https://www.polymaple.com'],
      ['PolyTopia           ', `<a href="polytopia"       >Various</a>`, 'UTOPIA       ', 'https://polytopia.farm'],
      ['BrainSwap           ', `<a href="brainswap"       >Various</a>`, 'BRAIN        ', 'https://brainswap.finance'],
      ['BatSwap             ', `<a href="batswap"         >Various</a>`, 'BATSWAP      ', 'https://batswap.finance'],
      ['Polyfrenchie        ', `<a href="batswap"         >Various</a>`, 'POLYFRENCHIE ', 'https://polyfrenchie.com/?network=polygon'],
      ['ChickenFarms        ', `<a href="chickenfarms"    >Various</a>`, 'CHICKEN      ', 'https://chickenfarms.live'],
      ['Polycuppa           ', `<a href="polycuppa"       >Various</a>`, 'CUPPA        ', 'https://polycuppa.finance'],
      ['Polymax - Berkshire ', `<a href="polymax_berkshire">Various</a>`, 'BERKSHIRE   ', 'https://berkshire.polymax.club'],
      ['Platinum Finance    ', `<a href="platinumfinance" >Various</a>`, 'PLATIN       ', 'https://platinumfinance.app']
    ],
  }

  let table = new AsciiTable().fromJSON(tableData)
  document.getElementById('log').innerHTML += table + '<br />'
  hideLoading()
}
