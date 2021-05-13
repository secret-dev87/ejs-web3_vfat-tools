$(function() {
  main()
});

const main = async() => {

  let tableData = {
    "title":"BSC Network",
    "heading":["Pool Provider","LP", "Reward Tokens", "INFO"],
    "rows": [
      ["Pancake             ", `<a href="pancake"       >Various</a>`,"CAKE          ","https://pancakeswap.finance"],
      ["Apeswap             ", `<a href="apeswap"       >Various</a>`,"BANANA        ","https://apeswap.finance"],
      ["Autofarm            ", `<a href="autofarm"      >Various</a>`,"AUTOFARM      ","https://autofarm.network"],
      ["Bake                ", `<a href="bake"          >Various</a>`,"BAKE          ","https://www.bakeryswap.org"],
      ["Brew                ", `<a href="brew"          >Various</a>`,"BREW          ","https://cafeswap.finance"],
      ["Donut               ", `<a href="donut"         >Various</a>`,"DONUT         ","https://donutdefi.com"],
      ["Pumpkin             ", `<a href="pumpkin"       >Various</a>`,"PUMP          ","https://pumpkindefi.org"],
      ["Ramen               ", `<a href="ramen"         >Various</a>`,"RAMENSWAP     ","https://ramenswap.finance"],
      ["Goose               ", `<a href="goose"         >Various</a>`,"GOOSE         ","https://www.goosedefi.com"],
      ["Salt                ", `<a href="salt"          >Various</a>`,"SALT          ","https://www.saltswap.finance"],
      ["Soup                ", `<a href="soup"          >Various</a>`,"SOUP/SOUPS    ","https://soups.finance"],
      ["Kebab               ", `<a href="kebab"         >Various</a>`,"KEBAB         ","https://kebabfinance.com"],
      ["Kimochi             ", `<a href="kimochi"       >Various</a>`,"KIMOCHI       ","https://kimochi.finance"],
      ["Viking              ", `<a href="viking"        >Various</a>`,"VIKING        ","https://www.vikingswap.finance"],
      ["Xoxo                ", `<a href="xoxo"          >Various</a>`,"XOXO          ","https://xoxo.finance"],
      ["Nyan                ", `<a href="nyan"          >Various</a>`,"NYAN          ","https://yieldnyan.com"],
      ["bDollar             ", `<a href="bdo/"          >Various</a>`,"BDO/sBDO/bBDO ","https://bdollar.fi"],
      ["Beluga              ", `<a href="beluga/"       >Various</a>`,"BELUGA        ","https://belugaprotocol.org"],
      ["BoltDollar          ", `<a href="btd/"          >Various</a>`,"BTD/BTS/BTB   ","https://boltdollar.finance"],
      ["Nya Cash            ", `<a href="nya/"          >Various</a>`,"NYAS/NYAC     ","https://nya.cash"],
      ["YieldScienceLabs    ", `<a href="ysl/"          >Various</a>`,"Various  ","https://yieldlab.science"],
      ["Icecream            ", `<a href="icecream"      >Various</a>`,"GLTO          ","https://icecreamswap.finance"],
      ["Mochi               ", `<a href="mochi"         >Various</a>`,"MOCHI         ","https://pool.mochiswap.io"],
      ["Oat                 ", `<a href="oat"           >Various</a>`,"OAT           ","https://oatswap.org"],
      ["ValueDefi           ", `<a href="valuedefi"     >Various</a>`,"vBSWAP        ","https://bsc.valuedefi.io/#/vfarm"],
      ["Kickstart           ", `<a href="kickstart"     >Various</a>`,"KICK          ","https://kickstart.finance"],
      ["Boba                ", `<a href="boba"          >Various</a>`,"BOBA          ","https://bobadefi.com"],
      ["MidasDollar         ", `<a href="midasdollar"   >Various</a>`,"MDS/MDO       ","https://midasdollar.fi"],
      ["Slime               ", `<a href="slime"         >Various</a>`,"SLIME         ","http://slime.finance"],
      ["Stakd               ", `<a href="stakd"         >Various</a>`,"STAKD         ","https://app.stakd.finance"],
      ["Glacier             ", `<a href="glacier"       >Various</a>`,"ICE           ","https://glacierswap.org/farms"],
      ["Alpaca              ", `<a href="alpaca"        >Various</a>`,"ALPACA        ","https://app.alpacafinance.org"],
      ["UFO Swap            ", `<a href="ufo"           >Various</a>`,"UFO           ","https://ufodefi.com"],
      ["Mythic              ", `<a href="mythic"        >Various</a>`,"MAGIC         ","https://www.mythic.finance"],
      ["Wault               ", `<a href="wault"         >Various</a>`,"WAULT         ","https://app.wault.finance"],
      ["Wantanmee           ", `<a href="wantanmee"     >Various</a>`,"MEE/MES       ","https://wantanmee.finance"],
      ["Acryptos            ", `<a href="acryptos"      >Various</a>`,"ACS           ","https://app.acryptos.com"],
      ["Sashimi             ", `<a href="sashimi"       >Various</a>`,"SASHIMI       ","https://bsc.sashimi.cool"],
      ["Beefy               ", `<a href="beefy"         >Various</a>`,"BIFI          ","https://app.beefy.finance"],
      ["Toad Swap           ", `<a href="toad"          >Various</a>`,"TOAD          ","https://toad.farm"],
      ["Nut                 ", `<a href="nut"           >Various</a>`,"NUT           ","https://www.nutdefi.finance"],
      ["Koala               ", `<a href="koala"         >Various</a>`,"LYPTUS        ","https://koaladefi.finance"],
      ["Yoda                ", `<a href="yoda"          >Various</a>`,"YODA          ","https://yodaswap.finance"],
      ["Duck                ", `<a href="duck"          >Various</a>`,"DUCK          ","https://duckswap.finance"],
      ["Taco                ", `<a href="taco"          >Various</a>`,"TACO          ","https://taco.finance"],
      ["Teddy               ", `<a href="teddy"         >Various</a>`,"TEDDY         ","https://teddy.bears.finance"],
      ["Gemz                ", `<a href="gemz"          >Various</a>`,"GEMZ          ","https://www.gemz.finance"],
      ["Pyramid             ", `<a href="pyramid"       >Various</a>`,"RA            ","https://pyramidswap.com"],
      ["Jalapenos           ", `<a href="jalapeno"      >Various</a>`,"JLP           ","https://jalapenos.finance"],
      ["Fed                 ", `<a href="fed"           >Various</a>`,"FED           ","https://fedswap.finance"],
      ["Coral               ", `<a href="coral"         >Various</a>`,"CRL           ","https://coralfarm.finance"],
      ["Duck Money          ", `<a href="duckmoney"     >Various</a>`,"DUCK          ","https://duck.money"],
      ["Iron Finance        ", `<a href="iron"          >Various</a>`,"STEEL         ","https://iron.finance"],
      ["BVaults             ", `<a href="bvaults"       >Various</a>`,"Various  ","https://bvaults.fi"],
      ["MidasGold           ", `<a href="midasgold"     >Various</a>`,"Various  ","https://midasgold.network"],
      ["Nerve               ", `<a href="nerve"         >Various</a>`,"NRV           ","https://nerve.fi"],
      ["Hyperjump *         ", `<a href="hyperjump"     >Various</a>`,"ALLOY         ","https://farm.hyperjump.fi"],
      ["Berry               ", `<a href="berry"         >Various</a>`,"BRY           ","https://berrydata.co"],
      ["Belt                ", `<a href="belt"          >Various</a>`,"BELT          ","https://beta.belt.fi"],
      ["Julswap             ", `<a href="julswap"       >Various</a>`,"Various  ","https://julswap.com"],
      ["Blueswap            ", `<a href="blueswap"      >Various</a>`,"BLUE          ","https://app.blueswap.finance"],
      ["Brickchain          ", `<a href="brickchain"    >Various</a>`,"BRICK         ","https://brickchain.finance"],
      ["Polaris             ", `<a href="polaris"       >Various</a>`,"POLAR         ","https://app.polarisdefi.io"],
      ["Fullsail            ", `<a href="fullsail"      >Various</a>`,"SAIL          ","https://fullsail.finance"],
      ["Wynaut              ", `<a href="wynaut"        >Various</a>`,"MEOWTH        ","https://wynautdefi.app"],
      ["Meme                ", `<a href="meme"          >Various</a>`,"MFRM          ","https://memefarm.io"],
      ["Tsuki               ", `<a href="tsuki"         >Various</a>`,"TSUKI         ","https://tsuki.finance"],
      ["Kingdom             ", `<a href="kingdom"       >Various</a>`,"CROWN         ","https://kingdomswap.finance"],
      ["Deflate             ", `<a href="deflate"       >Various</a>`,"BLN           ","https://deflate.finance"],
      ["Bender              ", `<a href="bender"        >Various</a>`,"BENDER        ","https://bender.finance"],
      ["Hyrule              ", `<a href="hyrule"        >Various</a>`,"RUPEE         ","https://app.hyruleswap.com"],
      ["Jiggly              ", `<a href="jiggly"        >Various</a>`,"JIGG          ","https://www.jiggly.finance"],
      ["Meerkat             ", `<a href="meerkat"       >Various</a>`,"XKAT          ","https://xkat.vercel.app"],
      ["Friction            ", `<a href="friction"      >Various</a>`,"TAO           ","https://friction.finance"],
      ["Complus             ", `<a href="complus"       >Various</a>`,"COM           ","https://bsc.complus.exchange"],
      ["Jurassicfarm        ", `<a href="jurassicfarm"  >Various</a>`,"DINO          ","https://www.jurassicfarm.app"],
      ["Swamp               ", `<a href="swamp"         >Various</a>`,"SWAMP         ","https://swamp.finance"],
      ["Swipe               ", `<a href="swipe"         >Various</a>`,"SXP           ","https://swipe.org"],
      ["ApeSafe             ", `<a href="apesafe"       >Various</a>`,"APESAFE       ","https://apesafe.finance"],
      ["Vlad                ", `<a href="vlad"          >Various</a>`,"LIFE          ","https://app.vlad.finance"],
      ["Zcore               ", `<a href="zcore"         >Various</a>`,"ZEFI          ","https://finance.zcore.network"],
      ["Blizzard            ", `<a href="blizzard"      >Various</a>`,"xBLZD         ","https://blizzard.money"],
      ["Pineapple           ", `<a href="pineapple"     >Various</a>`,"PIN           ","https://www.pineappledefi.com"],
      ["Shitz               ", `<a href="shitz"         >SHITZ/BNB LP</a>`,"WBNB/ACS      ","https://shitz.lol"],
      ["Biscuit             ", `<a href="biscuit"       >Various</a>`,"BCU           ","https://biscuitfarm.finance"],
      ["Runner              ", `<a href="runner"        >Various</a>`,"ENERGY        ","https://bscrunner.com"],
      ["Pumpy               ", `<a href="pumpy"         >Various</a>`,"PMP           ","https://pumpy.farm"],
      ["Knight              ", `<a href="knight"        >Various</a>`,"KNIGHT        ","https://www.knightsdefi.com"],
      ["Helmet              ", `<a href="helmet"        >Various</a>`,"Various       ","https://www.helmet.insure"],
      ["Pollo               ", `<a href="pofi"          >Various</a>`,"POFI          ","https://pollo.finance"],
      ["Space               ", `<a href="space"         >Various</a>`,"SPACE         ","https://farm.space"],
      ["Polis               ", `<a href="polis"         >Various</a>`,"POLIS         ","https://farms.polispay.org"],
      ["Royal               ", `<a href="royal"         >Various</a>`,"ROYA          ","https://royalswap.io"],
      ["Ducks               ", `<a href="ducks"         >Various</a>`,"DUCK          ","https://ducks.finance"],
      ["Yieldbay            ", `<a href="yieldbay"      >Various</a>`,"PALM          ","https://yieldbay.finance"],
      ["Ellipsis            ", `<a href="ellipsis"      >Various</a>`,"EPS           ","https://ellipsis.finance"],
      ["Flex Protocol       ", `<a href="flex"          >Various</a>`,"FLEX          ","https://flexprotocol.org"],
      ["Iceberg             ", `<a href="iceberg"       >Various</a>`,"TIT           ","https://icebergdefi.com"],
      ["yBear               ", `<a href="ybear"         >Various</a>`,"yBHONEY       ","http://farm.ybear.finance"],
      ["Absorber            ", `<a href="absorber"      >Various</a>`,"ABS           ","https://absorber.finance"],
      ["Poopswap            ", `<a href="poop"          >Various</a>`,"POOP          ","https://poopswap.finance"],
      ["Mooncake            ", `<a href="mooncake"      >Various</a>`,"MCAKE         ","https://mooncakeswap.finance"],
      ["Jade                ", `<a href="jade"          >Various</a>`,"JADE          ","https://jadedefi.com"],
      ["Eleven              ", `<a href="eleven"        >Various</a>`,"ELE           ","https://eleven.finance"],
      ["Yumcha              ", `<a href="yumcha"        >Various</a>`,"YUMCHA        ","https://yumcha.finance"],
      ["Comos               ", `<a href="comos"         >Various</a>`,"COMOS         ","https://app.comos.finance"],
      ["Pokemoon            ", `<a href="pokemoon"      >Various</a>`,"KBN           ","https://pokemoon.app"],
      ["Octree              ", `<a href="octree"        >Various</a>`,"OAK           ","https://octree.finance"],
      ["Cub                 ", `<a href="cub"           >Various</a>`,"CUB           ","https://cubdefi.com"],
      ["Popsicle            ", `<a href="popsicle"      >Various</a>`,"ICE           ","https://popsicle.finance"],
      ["Muscle              ", `<a href="muscle"        >Various</a>`,"MUSCLE        ","https://muscle.finance"],
      ["Carrotcake          ", `<a href="ccake"         >Various</a>`,"cCAKE         ","https://carrotcake.fi"],
      ["Alchemist           ", `<a href="alchemist"     >Various</a>`,"MIST/AURUM    ","https://www.alchemistdefi.com"],
      ["Mozart              ", `<a href="mozart"        >Various</a>`,"PIANO         ","https://mozartfinance.io"],
      ["Hawk                ", `<a href="hawk"          >Various</a>`,"HAWK          ","https://hawkbsc.net"],
      ["Tree                ", `<a href="tree"          >Various</a>`,"SEED          ","https://app.treedefi.com"],
      ["Voodoo              ", `<a href="voodoo"        >Various</a>`,"VOODOO        ","https://voodoo.supra.finance"],
      ["Biti                ", `<a href="biti"          >Various</a>`,"BITI          ","https://www.biti.city"],
      ["Panda               ", `<a href="panda"         >Various</a>`,"BBOO          ","https://pandayield.com"],
      ["Swirl               ", `<a href="swirl"         >Various</a>`,"SWIRL         ","https://swirl.cash/mining"],
      ["Squirrel            ", `<a href="squirrel"      >Various</a>`,"NUTS          ","https://squirrel.finance"],
      ["Abrakadabra         ", `<a href="abrakadabra"   >Various</a>`,"ABRA          ","https://abrakadabra.tech"],
      ["Cheesecake          ", `<a href="cheesecake"    >Various</a>`,"CCAKE         ","https://cheesecakeswap.com"],
      ["Rune                ", `<a href="rune"          >Various</a>`,"NEF           ","https://rune.farm"],
      ["Cdo                 ", `<a href="codex"         >Various</a>`,"CODEX         ","https://cdo.finance"],
      ["Printer             ", `<a href="printer"       >Various</a>`,"PTS           ","https://printershares.finance"],
      ["Snek                ", `<a href="snek"          >Various</a>`,"SNEK          ","https://snek.farm"],
      ["Uranium             ", `<a href="uranium"       >Various</a>`,"RADS          ","https://app.uranium.finance"],
      ["Bingocash           ", `<a href="bingocash"     >Various</a>`,"sBGO          ","https://bingocash.fi"],
      ["Zex                 ", `<a href="zex"           >Various</a>`,"ZEX           ","https://www.zexswap.finance"],
      ["Dragonball          ", `<a href="dragonball"    >Various</a>`,"DBALL         ","https://dragonballfinance.org"],
      ["Fulcrum             ", `<a href="fulcrum"       >Various</a>`,"BGOV          ","https://fulcrum.trade"],
      ["Diamond             ", `<a href="diamond"       >Various</a>`,"DND           ","https://app.diamondhand.fi"],
      ["Many                ", `<a href="many"          >Various</a>`,"MANY          ","https://manyswap.io"],
      ["Dumpling            ", `<a href="dumpling"      >Various</a>`,"DUMP          ","https://dumplingdefi.finance"],
      ["Djinn               ", `<a href="djinn"         >Various</a>`,"DJINNS        ","http://djinn.gold"],
      ["Marshmallow         ", `<a href="marshmallow"   >Various</a>`,"MASH/TOFY     ","https://marshmallowdefi.com"],
      ["Stabilize           ", `<a href="stabilize"     >Various</a>`,"STBB          ","https://www.stabilize.finance/bsc"],
      ["Xwin                ", `<a href="xwin"          >Various</a>`,"XWIN          ","https://xwin.finance"],
      ["SupraDollar         ", `<a href="supradollar"   >Various</a>`,"SDO           ","https://dollar.supra.finance"],
      ["Aladdin             ", `<a href="aladdin"       >Various</a>`,"WISH          ","https://aladdindefi.com"],
      ["Borshch             ", `<a href="borshch"       >Various</a>`,"BORSHCH       ","https://borshch.finance"],
      ["Pasta               ", `<a href="pasta"         >Various</a>`,"PASTA         ","https://pastafinance.com"],
      ["TripSwap            ", `<a href="trip"          >Various</a>`,"TRIP          ","https://tripswap.finance"],
      ["MilkSwap            ", `<a href="milk"          >Various</a>`,"MILK          ","https://milkswap.app"],
      ["Smokehouse          ", `<a href="smokehouse"    >Various</a>`,"SMOKE         ","https://thesmokehouse.finance"],
      ["Pizza               ", `<a href="pizza"         >Various</a>`,"PIZZA         ","https://pizzafinance.app"],
      ["Bud                 ", `<a href="bud"           >Various</a>`,"BUD           ","https://buddefi.com/"],
      ["Birthday Cake       ", `<a href="birthdaycake"  >Various</a>`,"BDAY          ","https://birthdaycake.finance"],
      ["DankSwap            ", `<a href="dankswap"      >Various</a>`,"WEED          ","https://app.dankswap.finance"],
      ["Mouse Farm          ", `<a href="mouse"         >Various</a>`,"MOUSE         ","https://mouse.farm"],
      ["LlamaSwap           ", `<a href="llamaswap"     >Various</a>`,"LAMA          ","https://llamaswap.finance"],
      ["Dr. Mario           ", `<a href="drmario"       >Various</a>`,"PILL          ","https://drmario.finance"],
      ["BorgSwap            ", `<a href="borg"          >Various</a>`,"KLING         ","https://farm.borgswap.exchange"],
      ["Soju                ", `<a href="soju"          >Various</a>`,"SOJU          ","https://sojudefi.com"],
      ["GoatSwap            ", `<a href="goat"          >Various</a>`,"GOAT          ","https://goatswap.finance"],
      ["BitBlocks           ", `<a href="bitblocks"     >Various</a>`,"BBKFI         ","https://bitblocks.finance"],
      ["Takoyaki            ", `<a href="takoyaki"      >Various</a>`,"TAKO          ","https://takoyakidefi.com"],
      ["VeganSwap           ", `<a href="vegan"         >Various</a>`,"VEGAN         ","https://veganswap.finance"],
      ["The Farming Den     ", `<a href="tft"           >Various</a>`,"TFT           ","https://thefarmingden.com"],
      ["ThunderSwap         ", `<a href="thunder"       >Various</a>`,"TNDR          ","https://thunderswap.finance"],
      ["PoseidonSwap        ", `<a href="poseidon"      >Various</a>`,"POS           ","https://poseidonswap.com"],
      ["Bourbon             ", `<a href="bourbon"       >Various</a>`,"BRRL          ","https://bourbondefi.com"],
      ["The Lab             ", `<a href="lab"           >Various</a>`,"LABO          ","https://thelab.finance"],
      ["Pepper              ", `<a href="pepper"        >Various</a>`,"PEPR          ","https://old.pepr.finance"],
      ["Pepper v2           ", `<a href="pepper_v2"     >Various</a>`,"PEPR          ","https://app.pepr.finance"],
      ["Parthenon Alpha     ", `<a href="parthenon_alpha">Various</a>`,"ALPHA        ","https://alpha.parthenon.finance"],
      ["Lokum               ", `<a href="lokum"         >Various</a>`,"LKM           ","https://lokum.finance"],
      ["Growth              ", `<a href="growth"        >Various</a>`,"WHEAT         ","https://wheat.growthdefi.com"],
      ["Neonic              ", `<a href="neonic"        >Various</a>`,"NEONIC        ","https://neonic.finance"],
      ["HyperFinance        ", `<a href="hyperfinance"  >Various</a>`,"HYFI          ","https://hyfi.pro"],
      ["Cyclone             ", `<a href="cyclone"       >Various</a>`,"CYC           ","https://cyclone.xyz/bsc"],
      ["Morse               ", `<a href="morse"         >Various</a>`,"MORSE         ","https://mors.finance"],
      ["Jazz                ", `<a href="jazz"          >Various</a>`,"JAZZ          ","https://jazzdefi.com"],
      ["Satis               ", `<a href="satis"         >Various</a>`,"SAT           ","https://satis.finance"],
      ["Defi Oasis          ", `<a href="oasis"         >Various</a>`,"OASIS         ","https://defioasis.finance"],
      ["APWars              ", `<a href="apwars"        >Various</a>`,"WGOLD         ","https://farms.apwars.farm"],
      ["Evodefi             ", `<a href="evo"           >Various</a>`,"GEN           ","https://evodefi.com"],
      ["Phyto               ", `<a href="phyto"         >Various</a>`,"PHY           ","https://www.phyto.finance"],
      ["Parthenon Beta      ", `<a href="parthenon_beta">Various</a>`,"BETA          ","https://beta.parthenon.finance"],
      ["Grand               ", `<a href="grand"         >Various</a>`,"GRAND         ","https://www.thegrandbanks.finance"],
      ["Gametoken           ", `<a href="gametoken"     >Various</a>`,"GME           ","https://app.gametoken.finance"],
      ["Gengar              ", `<a href="gengar"        >Various</a>`,"GEN           ","https://www.gengarfinance.com"],
      ["Lime                ", `<a href="lime"          >Various</a>`,"LIME          ","https://limeswap.io"],
      ["Olive               ", `<a href="olive"         >Various</a>`,"OLIVE         ","https://olive.cash"],
      ["Apo                 ", `<a href="apo"           >Various</a>`,"DSL           ","https://apoyield.com"],
      ["Shrimp              ", `<a href="shrimp"        >Various</a>`,"SHRIMP        ","https://shrimpswap.finance"],
      ["Ybearswap           ", `<a href="ybearswap"     >Various</a>`,"sBEAR         ","https://www.ybearswap.finance"],
      ["Apache              ", `<a href="apache"        >Various</a>`,"APACHE        ","https://app.apache.finance"],
      ["Void                ", `<a href="void"          >Various</a>`,"VOID          ","https://www.void.farm"],
      ["Mango               ", `<a href="mango"         >Various</a>`,"MANGO         ","http://mangofarm.finance"],
      ["Parthenon Gamma     ", `<a href="parthenon_gamma">Various</a>`,"GAMMA        ","https://gamma.parthenon.finance"],
      ["Defy                ", `<a href="defy"          >Various</a>`,"DEFY          ","https://app.defy.farm"],
      ["Bami                ", `<a href="bami"          >Various</a>`,"BAMI          ","https://app.bami.money"],
      ["Celestial           ", `<a href="celestial"     >Various</a>`,"CELES         ","https://app.celesfinance.com"],
      ["Pandaswap           ", `<a href="pandaswap"     >Various</a>`,"PNDA          ","https://farms.pandaswap.xyz"],
      ["Panther             ", `<a href="panther"       >Various</a>`,"PANTHER       ","https://pantherswap.com"],
      ["dungeonswap         ", `<a href="dungeon"       >Various</a>`,"DND           ","https://dungeonswap.app"],
      ["Parthenon Delta     ", `<a href="parthenon_delta">Various</a>`,"DELTA        ","https://delta.parthenon.finance"],
      ["Caramel             ", `<a href="caramel"       >Various</a>`,"CARAMEL       ","https://caramelswap.finance"],
      ["Plumcake            ", `<a href="plumcake"      >Various</a>`,"PLUM          ","https://plumcake.finance"],
      ["Wsbdapp             ", `<a href="wsb"           >Various</a>`,"WSB           ","https://farm.wsbdapp.com"],
      ["Feeder *            ", `<a href="feeder"        >Various</a>`,"FEED          ","https://app.feeder.finance"],
      ["Yolodraw            ", `<a href="yolodraw"      >Various</a>`,"YoloDraw      ","https://yolo-token.com"],
      ["Jaguar              ", `<a href="jaguar"        >Various</a>`,"JAGUAR        ","https://jaguarswap.com"],
      ["Zombie              ", `<a href="zombie"        >Various</a>`,"ZOMBIE        ","https://zombie-farm.com"],
      ["Degen               ", `<a href="degen"         >Various</a>`,"DGNZ          ","https://degentoken.finance"],
      ["DegenCompound       ", `<a href="degencomp"     >Various</a>`,"aDGNZ         ","https://degentoken.finance"],
      ["Parthenon Epsilon   ", `<a href="parthenon_epsilon">Various</a>`,"EPSILON       ","https://epsilon.parthenon.finance"],
      ["Snake               ", `<a href="snake"         >Various</a>`,"SNKE          ","https://snakedefi.com"],
      ["Tap                 ", `<a href="tap"           >Various</a>`,"TAPS          ","https://tapswap.finance"],
      ["Aot                 ", `<a href="aot"           >Various</a>`,"AOT           ","https://www.aotfinance.com"],
      ["Mocktail            ", `<a href="mocktail"      >Various</a>`,"MOK           ","https://www.mocktailswap.finance"],
      ["Dogen               ", `<a href="dogen"         >Various</a>`,"bDOGEN        ","https://dogen.finance"],
      ["Coinswap            ", `<a href="coinswap"      >Various</a>`,"CSS           ","https://coinswap.space"],
      ["TAO DAO             ", `<a href="taodao"        >Various</a>`,"TAO           ","https://taodao.finance"],
      ["Space Defia         ", `<a href="space_defi"    >Various</a>`,"SPCA          ","https://www.space-defia.com"],
      ["Barbecue Swap       ", `<a href="barbecue_swap" >Various</a>`,"BBQ           ","https://app.barbecueswapfinance.com"],
      ["Sukiyaki            ", `<a href="sukiyaki"      >Various</a>`,"SUKI          ","https://sukiyakiswap.finance"],
      ["PrivacySwap         ", `<a href="privacy"       >Various</a>`,"PRV           ","https://privacyswap.finance"],
      ["Sponge              ", `<a href="sponge"        >Various</a>`,"SPG/SOAK/STEAM","https://app.sponge.finance"],
      ["Blue - PlanetFinance", `<a href="blue_planetfinance">Various</a>`,"AQUA     "    ,"https://blue.planetfinance.io"],
      ["Fanatics            ", `<a href="fanatics"      >Various</a>`,"GOAL          ","https://fanaticsfinance.com"],
      ["Parthenon Zeta      ", `<a href="parthenon_zeta">Various</a>`,"ZETA          ","https://zeta.parthenon.finance"],
      ["Taiyaki             ", `<a href="taiyaki"       >Various</a>`,"TAI           ","https://taiyakiswap.finance"],
      ["Superlion           ", `<a href="superlion"     >Various</a>`,"MLION/SLION   ","https://superlion.finance"],
      ["Pulsar              ", `<a href="pulsar"        >Various</a>`,"PUL           ","https://www.pulsar.farm"],
      ["Farmwiki            ", `<a href="farmwiki"      >Various</a>`,"WIKI          ","http://farmwiki.xyz"],
      ["Vanillacake         ", `<a href="vanillacake"   >Various</a>`,"VCAKE         ","https://vanillacake.farm"],
      ["Garuda              ", `<a href="garuda"        >Various</a>`,"GARUDA        ","https://garudaswap.finance"],
      ["Donald              ", `<a href="donald"        >Various</a>`,"DONALD        ","https://app.donald.finance"],
      ["Smoothy             ", `<a href="smoothy"       >Various</a>`,"SMTY          ","https://smoothy.finance"],
      ["Naruto              ", `<a href="naruto"        >Various</a>`,"NAR           ","https://www.narutofinance.com"],
      ["Warden              ", `<a href="warden"        >Various</a>`,"WAD           ","https://www.wardenswap.finance"],
      ["Sloth               ", `<a href="sloth"         >Various</a>`,"SLOTH         ","https://slothfinance.com"],
      ["Apescape            ", `<a href="apescape"      >Various</a>`,"ROKT/BNB      ","https://apescape.eth.link"],
      ["Elixir              ", `<a href="elixir"        >Various</a>`,"ELXR          ","https://www.elixir-swap.io"],
      ["Sunflower           ", `<a href="sunflower"     >Various</a>`,"SUNFLOWER     ","https://sunflowerfarming.us"],
      ["Fishstix            ", `<a href="fishstix"      >Various</a>`,"FSTX          ","http://fishstix.finance"],
      ["Wasabix             ", `<a href="wasabix"       >Various</a>`,"WASABI        ","https://bsc.wasabix.finance"],
      ["Naruto Uzumaki      ", `<a href="naruto_uzumaki">Various</a>`,"UZUMAKI       ","https://uzumaki.narutofinance.com"],
      ["Lambo               ", `<a href="lambo"         >Various</a>`,"LAM           ","https://www.lambofinance.com"],
      ["Gator               ", `<a href="gator"         >Various</a>`,"GATOR           ","https://gatorswap.xyz"]
    ]
  }

  let table = new AsciiTable().fromJSON(tableData);
  document.getElementById('log').innerHTML += table + '<br />';
  hideLoading();
}
