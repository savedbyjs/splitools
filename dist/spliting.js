/* eslint-disable no-restricted-globals */
/* eslint-disable max-len */
/*
TOOL: SPLIT -Z-
DESCRIPTION: MAGIC SPLIT
WEBSITE: https://compayz.com/
MISSION: Take Over the World!

.
.
.

─[CREATED BY]───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
─██████████████──██████████████──██████──────────██████──██████████████──██████████████──████████──████████──────────────────██████████████████─────────────────
─██░░░░░░░░░░██──██░░░░░░░░░░██──██░░██████████████░░██──██░░░░░░░░░░██──██░░░░░░░░░░██──██░░░░██──██░░░░██──────────────────██░░░░░░░░░░░░░░██─────────────────
─██░░██████████──██░░██████░░██──██░░░░░░░░░░░░░░░░░░██──██░░██████░░██──██░░██████░░██──████░░██──██░░████──────────────────████████████░░░░██─────────────────
─██░░██──────────██░░██──██░░██──██░░██████░░██████░░██──██░░██──██░░██──██░░██──██░░██────██░░░░██░░░░██────────────────────────────████░░████─────────────────
─██░░██──────────██░░██──██░░██──██░░██──██░░██──██░░██──██░░██████░░██──██░░██████░░██────████░░░░░░████────────────██████████████████░░██████████████████─────
─██░░██──────────██░░██──██░░██──██░░██──██░░██──██░░██──██░░░░░░░░░░██──██░░░░░░░░░░██──────████░░████────────────██████████████████░░██████████████████───────
─██░░██──────────██░░██──██░░██──██░░██──██████──██░░██──██░░██████████──██░░██████░░██────────██░░██────────────██████████████████░░██████████████████─────────
─██░░██──────────██░░██──██░░██──██░░██──────────██░░██──██░░██──────────██░░██──██░░██────────██░░██────────────────────────████░░████─────────────────────────
─██░░██████████──██░░██████░░██──██░░██──────────██░░██──██░░██──────────██░░██──██░░██────────██░░██────────────────────────██░░░░████████████─────────────────
─██░░░░░░░░░░██──██░░░░░░░░░░██──██░░██──────────██░░██──██░░██──────────██░░██──██░░██────────██░░██────────────────────────██░░░░░░░░░░░░░░██─────────────────
─██████████████──██████████████──██████──────────██████──██████──────────██████──██████────────██████────────────────────────██████████████████─────────────────
────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
*/

// Funcão de erro página de loading
function showError(error) {
  document.getElementById('loading').style.display = 'none';
  document.getElementById('error').style.display = 'block';
  document.getElementById('errorMessage').innerHTML = error;
}

// Qs utilizadas na requisição
let target = new URLSearchParams(window.location.search).get('target'); // REDIRECT REQUIRED
let product = new URLSearchParams(window.location.search).get('product'); // PRODUCT REQUIRED
let seller = new URLSearchParams(window.location.search).get('seller'); // SELLER

// Tratamento das strings (LOWER CASE)
if (target) { target = target.toLowerCase().trim(); }
if (product) { product = product.toLowerCase().trim(); }
if (seller) { seller = seller.toLowerCase().trim(); }

// Objeto completo da URL de requisição
const hostUrl = new URL(window.location);

let url = false;

// Erro - Produto não definido
if (!product) { showError('NOPRD'); }

// TEMPORARIO REMOVER
// if (product === 'betzordtyltyscore') { product = 'betzord'; }
if (product === 'bloginformativo') { product = 'betzord'; }
if (product === '55555') { product = 'betzord'; }
if (product === 'escolaeducacional') { product = 'betzord'; }
if (product === 'meuchamyto') { product = 'betzord'; }

// Variaçoes de URL dos produtos
const products = {
  betzord: {
    salespage: 'https://betzord.com/presell/',
    salespageb: 'https://betzord.com/presell-b/',
    salespagec: 'https://betzord.com/presell-c/',
    salespaged: 'https://betzord.com/presell-d/',
    faceads: 'https://betzord.com/pv-face/',
    faceadsb: 'https://betzord.com/pv-face-b/',
    faceadsc: 'https://betzord.com/pv-face-c/',
    faceadsd: 'https://betzord.com/pv-face-d/',
    checkout: 'https://pay.hotmart.com/S67803507J?checkoutMode=10&offDiscount=SPLITPAGE',
  },
  betzordtyltyscore: {
    salespage: 'https://betzord.com/presell/',
    faceads: 'https://betzord.com/pv-face/',
    checkout: 'https://pay.hotmart.com/O69794051G?checkoutMode=10&off=14rwbngv',
  },
  tyltyscore: {
    salespage: 'https://pay.hotmart.com/R66588137A?checkoutMode=10',
    faceads: 'https://pay.hotmart.com/R66588137A?checkoutMode=10',
    checkout: 'https://pay.hotmart.com/R66588137A?checkoutMode=10',
  },
  tyltyscored1: {
    salespage: 'https://pay.hotmart.com/R66588137A?checkoutMode=10',
    faceads: 'https://pay.hotmart.com/R66588137A?checkoutMode=10',
    checkout: 'https://pay.hotmart.com/R66588137A?checkoutMode=10',
  },
  foguetinho: {
    salespage: 'https://foguetinho.com/presell/',
    salespageb: 'https://foguetinho.com/presell-b/',
    salespagec: 'https://foguetinho.com/presell-c/',
    salespaged: 'https://foguetinho.com/presell-d/',
    faceads: 'https://foguetinho.com/presell/',
    checkout: 'https://app.monetizze.com.br/checkout/CRF121452',
  },
  copiloto: {
    salespage: 'https://app.monetizze.com.br/checkout/KWX233173',
    faceads: 'https://app.monetizze.com.br/checkout/KWX233173',
    checkout: 'https://app.monetizze.com.br/checkout/KWX233173',
  },
  copilotod1: {
    salespage: 'https://app.monetizze.com.br/checkout/KWX233173',
    faceads: 'https://app.monetizze.com.br/checkout/KWX233173',
    checkout: 'https://app.monetizze.com.br/checkout/KWX233173',
  },
  vivendodevideos: {
    salespage: 'https://metodovivendodevideos.com/',
    checkout: 'https://pay.hotmart.com/Q72645674O?checkoutMode=10',
  },
};

// Vendedores para o customCheckout
const sellers = [
  {
    name: 'ABNER PINHEIRO',
    seller: 'ABNERPINHEIRO',
    betzord: 'https://pay.hotmart.com/F66259086P?checkoutMode=10&bid=1644249664838&offDiscount=ABNERPINHEIRO',
    foguetinho: '',
  },
  {
    name: 'ALEF TORREZ',
    seller: 'ALEFTORREZ',
    betzord: 'https://pay.hotmart.com/F66259086P?checkoutMode=10&bid=1644249664838&offDiscount=ALEFTORREZ',
    foguetinho: '',
  },
  {
    name: 'ALESSONLIMAA',
    seller: 'ALESSONLIMAA',
    betzord: 'https://pay.hotmart.com/F66259086P?checkoutMode=10&bid=1644249664838&offDiscount=ALESSONLIMAA',
    foguetinho: '',
  },
  {
    name: 'ALISSONJORDANN',
    seller: 'ALISSONJORDANN',
    betzord: 'https://pay.hotmart.com/B66515443S?checkoutMode=10&bid=1644450672515&offDiscount=ALISSONJORDANN',
    foguetinho: 'https://app.monetizze.com.br/checkout/CSL121461',
  },
  {
    name: 'ALLEXANDERLOPES',
    seller: 'ALLEXANDERLOPES',
    betzord: 'https://pay.hotmart.com/F66259086P?checkoutMode=10&bid=1644249664838&offDiscount=ALLEXANDERLOPES',
    foguetinho: '',
  },
  {
    name: 'AMANDAFERREIRA',
    seller: 'AMANDAFERREIRA',
    betzord: 'https://pay.hotmart.com/F66507737N?checkoutMode=10&bid=1644444571177&offDiscount=AMANDAFERREIRA',
    foguetinho: '',
  },
  {
    name: 'AMANDASSOUZAOFICIAL',
    seller: 'AMANDASSOUZAOFICIAL',
    betzord: 'https://pay.hotmart.com/F66259086P?checkoutMode=10&bid=1644249664838&offDiscount=AMANDASSOUZAOFICIAL',
    foguetinho: '',
  },
  {
    name: 'AMANDAVAS',
    seller: 'AMANDAVAS',
    betzord: 'https://pay.hotmart.com/F66259086P?checkoutMode=10&bid=1644249664838&offDiscount=AMANDAVAS',
    foguetinho: 'https://app.monetizze.com.br/checkout/CGN121568',
  },
  {
    name: 'ANDREDARCK',
    seller: 'ANDREDARCK',
    betzord: 'https://pay.hotmart.com/F66259086P?checkoutMode=10&bid=1644249664838&offDiscount=ANDREDARCK',
    foguetinho: '',
  },
  {
    name: 'ANDREDARCK',
    seller: 'ANDREDARCK',
    betzord: 'https://pay.hotmart.com/F66507737N?checkoutMode=10&bid=1644444571177&offDiscount=ANDREDARCK',
    foguetinho: '',
  },
  {
    name: 'ANGELCRHIS',
    seller: 'ANGELCRHIS',
    betzord: 'https://pay.hotmart.com/F66259086P?checkoutMode=10&bid=1644249664838&offDiscount=ANGELCRHIS',
    foguetinho: '',
  },
  {
    name: 'ARTTHURFREITAS',
    seller: 'ARTTHURFREITAS',
    betzord: 'https://pay.hotmart.com/F66259086P?checkoutMode=10&bid=1644249664838&offDiscount=ARTTHURFREITAS',
    foguetinho: 'https://app.monetizze.com.br/checkout/CMD121572',
  },
  {
    name: 'AYARLASOUZA',
    seller: 'AYARLASOUZA',
    betzord: 'https://pay.hotmart.com/F66259086P?checkoutMode=10&bid=1644249664838&offDiscount=AYARLASOUZA',
    foguetinho: '',
  },
  {
    name: 'BEICO',
    seller: 'BEICO',
    betzord: 'https://pay.hotmart.com/F66259086P?checkoutMode=10&bid=1644249664838&offDiscount=BEICO',
    foguetinho: 'https://app.monetizze.com.br/checkout/CRQ121513',
  },
  {
    name: 'BIANCABEZERRA',
    seller: 'BIANCABEZERRA',
    betzord: 'https://pay.hotmart.com/F66259086P?checkoutMode=10&bid=1644249664838&offDiscount=BIANCABEZERRA',
    foguetinho: 'https://app.monetizze.com.br/checkout/CTM121464',
  },
  {
    name: 'BIANKANICOLI',
    seller: 'BIANKANICOLI',
    betzord: 'https://pay.hotmart.com/B66515443S?checkoutMode=10&bid=1644450672515&offDiscount=BIANKANICOLI',
    foguetinho: '',
  },
  {
    name: 'BIELCARDOZOO',
    seller: 'BIELCARDOZOO',
    betzord: 'https://pay.hotmart.com/F66507737N?checkoutMode=10&bid=1644444571177&offDiscount=BIELCARDOZOO',
    foguetinho: '',
  },
  {
    name: 'BRUNOBUBUOF',
    seller: 'BRUNOBUBUOF',
    betzord: 'https://pay.hotmart.com/F66259086P?checkoutMode=10&bid=1644249664838&offDiscount=BRUNOBUBUOF',
    foguetinho: '',
  },
  {
    name: 'BRUNODIFERENTE',
    seller: 'BRUNODIFERENTE',
    betzord: 'https://pay.hotmart.com/F66507737N?checkoutMode=10&bid=1644444571177&offDiscount=BRUNODIFERENTE',
    foguetinho: '',
  },
  {
    name: 'BRUNOVINICIUSCONCEITO',
    seller: 'BRUNOVINICIUSCONCEITO',
    betzord: 'https://pay.hotmart.com/F66259086P?checkoutMode=10&bid=1644249664838&offDiscount=BRUNOVINICIUSCONCEITO',
    foguetinho: '',
  },
  {
    name: 'BRUNOCONCEITO',
    seller: 'BRUNOCONCEITO',
    betzord: '',
    foguetinho: 'https://app.monetizze.com.br/checkout/CLZ123725',
  },
  {
    name: 'CACESA',
    seller: 'CACESA',
    betzord: 'https://pay.hotmart.com/F66259086P?checkoutMode=10&bid=1644249664838&offDiscount=CACESA',
    foguetinho: 'https://app.monetizze.com.br/checkout/CYD121468',
  },
  {
    name: 'CAMILAISABELLE',
    seller: 'CAMILAISABELLE',
    betzord: 'https://pay.hotmart.com/F66259086P?checkoutMode=10&bid=1644249664838&offDiscount=CAMILAISABELLE',
    foguetinho: 'https://app.monetizze.com.br/checkout/CAW121491',
  },
  {
    name: 'CARDOTEOFICIAL',
    seller: 'CARDOTEOFICIAL',
    betzord: 'https://pay.hotmart.com/F66259086P?checkoutMode=10&bid=1644249664838&offDiscount=CARDOTEOFICIAL',
    foguetinho: 'https://app.monetizze.com.br/checkout/CEX121518',
  },
  {
    name: 'CAROLINAPAIVA',
    seller: 'CAROLINAPAIVA',
    betzord: 'https://pay.hotmart.com/F66507737N?checkoutMode=10&bid=1644444571177&offDiscount=CAROLINAPAIVA',
    foguetinho: '',
  },
  {
    name: 'CAROLRACER',
    seller: 'CAROLRACER',
    betzord: 'https://pay.hotmart.com/F66259086P?checkoutMode=10&bid=1644249664838&offDiscount=CAROLRACER',
    foguetinho: 'https://app.monetizze.com.br/checkout/CPB121469',
  },
  {
    name: 'CICEROJOSE',
    seller: 'CICEROJOSE',
    betzord: 'https://pay.hotmart.com/F66259086P?checkoutMode=10&bid=1644249664838&offDiscount=CICEROJOSE',
    foguetinho: 'https://app.monetizze.com.br/checkout/CCL121470',
  },
  {
    name: 'CREMOSINHO',
    seller: 'CREMOSINHO',
    betzord: 'https://pay.hotmart.com/N66517827C?checkoutMode=10&bid=1644521740977&offDiscount=CREMOSINHO',
    foguetinho: 'https://app.monetizze.com.br/checkout/CSG122032',
  },
  {
    name: 'CRISMONTEIRO',
    seller: 'CRISMONTEIRO',
    betzord: 'https://pay.hotmart.com/F66259086P?checkoutMode=10&bid=1644249664838&offDiscount=CRISMONTEIRO',
    foguetinho: 'https://app.monetizze.com.br/checkout/CFE121471',
  },
  {
    name: 'DADAFAVATTO',
    seller: 'DADAFAVATTO',
    betzord: 'https://pay.hotmart.com/F66259086P?checkoutMode=10&bid=1644249664838&offDiscount=DADAFAVATTO',
    foguetinho: 'https://app.monetizze.com.br/checkout/CUD124159',
  },
  {
    name: 'DANGSOFICIAL',
    seller: 'DANGSOFICIAL',
    betzord: 'https://pay.hotmart.com/F66259086P?checkoutMode=10&bid=1644249664838&offDiscount=DANGSOFICIAL',
    foguetinho: 'https://app.monetizze.com.br/checkout/CXE121762',
  },
  {
    name: 'DANIELEBEZERRA',
    seller: 'DANIELEBEZERRA',
    betzord: 'https://pay.hotmart.com/F66259086P?checkoutMode=10&bid=1644249664838&offDiscount=DANIELEBEZERRA',
    foguetinho: '',
  },
  {
    name: 'DANIELZINHOGRAU',
    seller: 'DANIELZINHOGRAU',
    betzord: 'https://pay.hotmart.com/F66259086P?checkoutMode=10&bid=1644249664838&offDiscount=DANIELZINHOGRAU',
    foguetinho: 'https://app.monetizze.com.br/checkout/CJF121849',
  },
  {
    name: 'DANIELZINHOGRAU',
    seller: 'DANIELZINHOGRAU',
    betzord: 'https://pay.hotmart.com/F66259086P?checkoutMode=10&bid=1644249664838&offDiscount=DANIELZINHOGRAU',
    foguetinho: '',
  },
  {
    name: 'DANIELZINHOGRAU',
    seller: 'DANIELZINHOGRAU',
    betzord: 'https://pay.hotmart.com/F66507737N?checkoutMode=10&bid=1644444571177&offDiscount=DANIELZINHOGRAU',
    foguetinho: '',
  },
  {
    name: 'DANLELLIS',
    seller: 'DANLELLIS',
    betzord: 'https://pay.hotmart.com/F66259086P?checkoutMode=10&bid=1644249664838&offDiscount=DANLELLIS',
    foguetinho: '',
  },
  {
    name: 'DAVIMATEUSOFI',
    seller: 'DAVIMATEUSOFI',
    betzord: 'https://pay.hotmart.com/F66259086P?checkoutMode=10&bid=1644249664838&offDiscount=DAVIMATEUSOFI',
    foguetinho: '',
  },
  {
    name: 'DEBORAPAIIXAO',
    seller: 'DEBORAPAIIXAO',
    betzord: 'https://pay.hotmart.com/F66259086P?checkoutMode=10&bid=1644249664838&offDiscount=DEBORAPAIIXAO',
    foguetinho: '',
  },
  {
    name: 'DEIVINHOSOUZA',
    seller: 'DEIVINHOSOUZA',
    betzord: 'https://pay.hotmart.com/F66259086P?checkoutMode=10&bid=1644249664838&offDiscount=DEIVINHOSOUZA',
    foguetinho: '',
  },
  {
    name: 'DJLARISSACERQUEIRA',
    seller: 'DJLARISSACERQUEIRA',
    betzord: 'https://pay.hotmart.com/F66259086P?checkoutMode=10&bid=1644249664838&offDiscount=DJLARISSACERQUEIRA',
    foguetinho: '',
  },
  {
    name: 'DRADAYANNEBEZERRA',
    seller: 'DRADAYANNEBEZERRA',
    betzord: 'https://pay.hotmart.com/F66259086P?checkoutMode=10&bid=1644249664838&offDiscount=DRADAYANNEBEZERRA',
    foguetinho: '',
  },
  {
    name: 'DRADEOLANEBEZERRA',
    seller: 'DRADEOLANEBEZERRA',
    betzord: 'https://pay.hotmart.com/F66259086P?checkoutMode=10&bid=1644249664838&offDiscount=DRADEOLANEBEZERRA',
    foguetinho: '',
  },
  {
    name: 'DRFELIPEARAUJO',
    seller: 'DRFELIPEARAUJO',
    betzord: 'https://pay.hotmart.com/F66259086P?checkoutMode=10&bid=1644249664838&offDiscount=DRFELIPEARAUJO',
    foguetinho: '',
  },
  {
    name: 'DYNHOALVES',
    seller: 'DYNHOALVES',
    betzord: 'https://pay.hotmart.com/F66259086P?checkoutMode=10&bid=1644249664838&offDiscount=DYNHOALVES',
    foguetinho: 'https://app.monetizze.com.br/checkout/CVM122331',
  },
  {
    name: 'EDINHOMAMAE',
    seller: 'EDINHOMAMAE',
    betzord: 'https://pay.hotmart.com/F66259086P?checkoutMode=10&bid=1644249664838&offDiscount=EDINHOMAMAE',
    foguetinho: 'https://app.monetizze.com.br/checkout/CCW121474',
  },
  {
    name: 'EDIQUEIXINHO',
    seller: 'EDIQUEIXINHO',
    betzord: 'https://pay.hotmart.com/F66259086P?checkoutMode=10&bid=1644249664838&offDiscount=EDIQUEIXINHO',
    foguetinho: 'https://app.monetizze.com.br/checkout/CSE121473',
  },
  {
    name: 'EDUARDOVELOSOOF',
    seller: 'EDUARDOVELOSOOF',
    betzord: 'https://pay.hotmart.com/F66259086P?checkoutMode=10&bid=1644249664838&offDiscount=EDUARDOVELOSOOF',
    foguetinho: 'https://app.monetizze.com.br/checkout/CPE121477',
  },
  {
    name: 'EIPRIH',
    seller: 'EIPRIH',
    betzord: 'https://pay.hotmart.com/B66515443S?checkoutMode=10&bid=1644450672515&offDiscount=EIPRIH',
    foguetinho: 'https://app.monetizze.com.br/checkout/CEX121479',
  },
  {
    name: 'ELIABE',
    seller: 'ELIABE',
    betzord: 'https://pay.hotmart.com/F66259086P?checkoutMode=10&bid=1644249664838&offDiscount=ELIABE',
    foguetinho: '',
  },
  {
    name: 'EUDISBOCUDA',
    seller: 'EUDISBOCUDA',
    betzord: 'https://pay.hotmart.com/B66515443S?checkoutMode=10&bid=1644450672515&offDiscount=EUDISBOCUDA',
    foguetinho: '',
  },
  {
    name: 'EULEANDROBARROSM',
    seller: 'EULEANDROBARROSM',
    betzord: 'https://pay.hotmart.com/F66259086P?checkoutMode=10&bid=1644249664838&offDiscount=EULEANDROBARROSM',
    foguetinho: '',
  },
  {
    name: 'EUORLANDINHO',
    seller: 'EUORLANDINHO',
    betzord: 'https://pay.hotmart.com/F66259086P?checkoutMode=10&bid=1644249664838&offDiscount=EUORLANDINHO',
    foguetinho: 'https://app.monetizze.com.br/checkout/CYX121492',
  },
  {
    name: 'EURADIJAPEREIRA',
    seller: 'EURADIJAPEREIRA',
    betzord: 'https://pay.hotmart.com/F66259086P?checkoutMode=10&bid=1644249664838&offDiscount=EURADIJAPEREIRA',
    foguetinho: '',
  },
  {
    name: 'EUTHIAGOSILVAAA',
    seller: 'EUTHIAGOSILVAAA',
    betzord: 'https://pay.hotmart.com/F66259086P?checkoutMode=10&bid=1644249664838&offDiscount=EUTHIAGOSILVAAA',
    foguetinho: 'https://app.monetizze.com.br/checkout/CBZ121515',
  },
  {
    name: 'FABIOBRAZ',
    seller: 'FABIOBRAZ',
    betzord: 'https://pay.hotmart.com/F66259086P?checkoutMode=10&bid=1644249664838&offDiscount=FABIOBRAZ',
    foguetinho: '',
  },
  {
    name: 'FALETAA',
    seller: 'FALETAA',
    betzord: 'https://pay.hotmart.com/F66259086P?checkoutMode=10&bid=1644249664838&offDiscount=FALETAA',
    foguetinho: '',
  },
  {
    name: 'FAZERUPGRADE',
    seller: 'FAZERUPGRADE',
    betzord: 'https://pay.hotmart.com/F66259086P?checkoutMode=10&bid=1644872020999&offDiscount=FAZERUPGRADE',
    foguetinho: '',
  },
  {
    name: 'FELIPEMAIA',
    seller: 'FELIPEMAIA',
    betzord: 'https://pay.hotmart.com/F66259086P?checkoutMode=10&bid=1644249664838&offDiscount=FELIPEMAIA',
    foguetinho: 'https://app.monetizze.com.br/checkout/CFQ122381',
  },
  {
    name: 'FUICLEAR',
    seller: 'FUICLEAR',
    betzord: 'https://pay.hotmart.com/F66259086P?checkoutMode=10&bid=1644249664838&offDiscount=FUICLEAR',
    foguetinho: '',
  },
  {
    name: 'GABILY',
    seller: 'GABILY',
    betzord: 'https://pay.hotmart.com/F66259086P?checkoutMode=10&bid=1644249664838&offDiscount=GABILY',
    foguetinho: '',
  },
  {
    name: 'GABIMARTINS',
    seller: 'GABIMARTINS',
    betzord: 'https://pay.hotmart.com/N66517827C?checkoutMode=10&bid=1644521740977&offDiscount=GABIMARTINS',
    foguetinho: '',
  },
  {
    name: 'GERSONALBUQUERQUE',
    seller: 'GERSONALBUQUERQUE',
    betzord: 'https://pay.hotmart.com/F66259086P?checkoutMode=10&bid=1644249664838&offDiscount=GERSONALBUQUERQUE',
    foguetinho: '',
  },
  {
    name: 'EDUARDO BAPTISTA',
    seller: 'GOLDORAYO',
    betzord: 'https://pay.hotmart.com/F66259086P?checkoutMode=10&bid=1644249664838&offDiscount=GOLDORAYO',
    foguetinho: 'https://app.monetizze.com.br/checkout/CRA123539',
  },
  {
    name: 'GRACIELLYWILIANE',
    seller: 'GRACIELLYWILIANE',
    betzord: 'https://pay.hotmart.com/F66507737N?checkoutMode=10&bid=1644444571177&offDiscount=GRACIELLYWILIANE',
    foguetinho: 'https://app.monetizze.com.br/checkout/CUW121481',
  },
  {
    name: 'GUILHERMEPINHEIRO',
    seller: 'GUILHERMEPINHEIRO',
    betzord: 'https://pay.hotmart.com/F66259086P?checkoutMode=10&bid=1644249664838&offDiscount=GUILHERMEPINHEIRO',
    foguetinho: '',
  },
  {
    name: 'INSTAGRAMDIRECT',
    seller: 'INSTAGRAMDIRECT',
    betzord: 'https://pay.hotmart.com/F66259086P?checkoutMode=10&bid=1644872020999&offDiscount=INSTAGRAMDIRECT',
    foguetinho: '',
  },
  {
    name: 'ISAUOFICIAL',
    seller: 'ISAUOFICIAL',
    betzord: 'https://pay.hotmart.com/F66507737N?checkoutMode=10&bid=1644444571177&offDiscount=ISAUOFICIAL',
    foguetinho: 'https://app.monetizze.com.br/checkout/CKB122160',
  },
  {
    name: 'ITALOMATEUS',
    seller: 'ITALOMATEUS',
    betzord: 'https://pay.hotmart.com/F66259086P?checkoutMode=10&bid=1644249664838&offDiscount=ITALOMATEUS',
    foguetinho: 'https://app.monetizze.com.br/checkout/CER121482',
  },
  {
    name: 'JACQUESVANIER',
    seller: 'JACQUESVANIER',
    betzord: 'https://pay.hotmart.com/F66259086P?checkoutMode=10&bid=1644249664838&offDiscount=JACQUESVANIER',
    foguetinho: '',
  },
  {
    name: 'JAINECASSU',
    seller: 'JAINECASSU',
    betzord: 'https://pay.hotmart.com/F66259086P?checkoutMode=10&bid=1644249664838&offDiscount=JAINECASSU',
    foguetinho: 'https://app.monetizze.com.br/checkout/CJQ121519',
  },
  {
    name: 'JANAHORRARYA',
    seller: 'JANAHORRARYA',
    betzord: 'https://pay.hotmart.com/B66515443S?checkoutMode=10&bid=1644450672515&offDiscount=JANAHORRARYA',
    foguetinho: '',
  },
  {
    name: 'JEFFERSONMACHADO',
    seller: 'JEFFERSONMACHADO',
    betzord: 'https://pay.hotmart.com/F66507737N?checkoutMode=10&bid=1644444571177&offDiscount=JEFFERSONMACHADO',
    foguetinho: 'https://app.monetizze.com.br/checkout/CFD121516',
  },
  {
    name: 'JENNIFERLETYCIA',
    seller: 'JENNIFERLETYCIA',
    betzord: 'https://pay.hotmart.com/F66259086P?checkoutMode=10&bid=1644249664838&offDiscount=JENNIFERLETYCIA',
    foguetinho: 'https://app.monetizze.com.br/checkout/CHN121570',
  },
  {
    name: 'JESPOLIANO',
    seller: 'JESPOLIANO',
    betzord: 'https://pay.hotmart.com/F66259086P?checkoutMode=10&bid=1644249664838&offDiscount=JESPOLIANO',
    foguetinho: '',
  },
  {
    name: 'JHON',
    seller: 'JHON',
    betzord: 'https://pay.hotmart.com/F66259086P?checkoutMode=10&bid=1644249664838&offDiscount=JHON',
    foguetinho: '',
  },
  {
    name: 'JONATHANRODRIGUES',
    seller: 'JONATHANRODRIGUES',
    betzord: 'https://pay.hotmart.com/F66259086P?checkoutMode=10&bid=1644249664838&offDiscount=JONATHANRODRIGUES',
    foguetinho: 'https://app.monetizze.com.br/checkout/CWT122340',
  },
  {
    name: 'JUHBRASIL',
    seller: 'JUHBRASIL',
    betzord: 'https://pay.hotmart.com/F66259086P?checkoutMode=10&bid=1644249664838&offDiscount=JUHBRASIL',
    foguetinho: '',
  },
  {
    name: 'JUKANALHA',
    seller: 'JUKANALHA',
    betzord: 'https://pay.hotmart.com/F66259086P?checkoutMode=10&bid=1644249664838&offDiscount=JUKANALHA',
    foguetinho: '',
  },
  {
    name: 'JULIANAPRISCILAOFC',
    seller: 'JULIANAPRISCILAOFC',
    betzord: 'https://pay.hotmart.com/B66515443S?checkoutMode=10&bid=1644450672515&offDiscount=JULIANAPRISCILAOFC',
    foguetinho: 'https://app.monetizze.com.br/checkout/CYQ121483',
  },
  {
    name: 'JULIASOUZAJ',
    seller: 'JULIASOUZAJ',
    betzord: 'https://pay.hotmart.com/F66259086P?checkoutMode=10&bid=1644249664838&offDiscount=JULIASOUZAJ',
    foguetinho: '',
  },
  {
    name: 'KELFERRETI',
    seller: 'KELFERRETI',
    betzord: 'https://pay.hotmart.com/F66259086P?checkoutMode=10&bid=1644249664838&offDiscount=KELFERRETI',
    foguetinho: '',
  },
  {
    name: 'KELLYARAUJO',
    seller: 'KELLYARAUJO',
    betzord: 'https://pay.hotmart.com/F66259086P?checkoutMode=10&bid=1644249664838&offDiscount=KELLYARAUJO',
    foguetinho: 'https://app.monetizze.com.br/checkout/CZU121798',
  },
  {
    name: 'KELVINSABINOU',
    seller: 'KELVINSABINOU',
    betzord: 'https://pay.hotmart.com/F66259086P?checkoutMode=10&bid=1644249664838&offDiscount=KELVINSABINOU',
    foguetinho: 'https://app.monetizze.com.br/checkout/CFS121487',
  },
  {
    name: 'KENNEDYMENDES',
    seller: 'KENNEDYMENDES',
    betzord: 'https://pay.hotmart.com/F66259086P?checkoutMode=10&bid=1644249664838&offDiscount=KENNEDYMENDES',
    foguetinho: 'https://app.monetizze.com.br/checkout/CQH122589',
  },
  {
    name: 'LAISOLIVEIRA',
    seller: 'LAISOLIVEIRA',
    betzord: 'https://pay.hotmart.com/F66259086P?checkoutMode=10&bid=1644249664838&offDiscount=LAISOLIVEIRA',
    foguetinho: '',
  },
  {
    name: 'LARASILVA',
    seller: 'LARASILVA',
    betzord: 'https://pay.hotmart.com/F66507737N?checkoutMode=10&bid=1644444571177&offDiscount=LARASILVA',
    foguetinho: '',
  },
  {
    name: 'LARISALVADOR',
    seller: 'LARISALVADOR',
    betzord: 'https://pay.hotmart.com/F66259086P?checkoutMode=10&bid=1644249664838&offDiscount=LARISALVADOR',
    foguetinho: '',
  },
  {
    name: 'LARISSAFOXOFIC',
    seller: 'LARISSAFOXOFIC',
    betzord: 'https://pay.hotmart.com/F66507737N?checkoutMode=10&bid=1644444571177&offDiscount=LARISSAFOXOFIC',
    foguetinho: '',
  },
  {
    name: 'LARISSASALVADOROFC',
    seller: 'LARISSASALVADOROFC',
    betzord: 'https://pay.hotmart.com/F66507737N?checkoutMode=10&bid=1644444571177&offDiscount=LARISSASALVADOROFC',
    foguetinho: 'https://app.monetizze.com.br/checkout/CWV122816',
  },
  {
    name: 'LAUANETAUANE',
    seller: 'LAUANETAUANE',
    betzord: 'https://pay.hotmart.com/F66259086P?checkoutMode=10&bid=1644249664838&offDiscount=LAUANETAUANE',
    foguetinho: 'https://app.monetizze.com.br/checkout/CPL121517',
  },
  {
    name: 'LAURINHAFEER',
    seller: 'LAURINHAFEER',
    betzord: 'https://pay.hotmart.com/F66259086P?checkoutMode=10&bid=1644249664838&offDiscount=LAURINHAFEER',
    foguetinho: 'https://app.monetizze.com.br/checkout/CNM121488',
  },
  {
    name: 'LENYLSONDANIEL',
    seller: 'LENYLSONDANIEL',
    betzord: 'https://pay.hotmart.com/F66259086P?checkoutMode=10&bid=1644249664838&offDiscount=LENYLSONDANIEL',
    foguetinho: '',
  },
  {
    name: 'LEOMARQUESS',
    seller: 'LEOMARQUESS',
    betzord: 'https://pay.hotmart.com/F66259086P?checkoutMode=10&bid=1644249664838&offDiscount=LEOMARQUESS',
    foguetinho: '',
  },
  {
    name: 'LETICIASILVA',
    seller: 'LETICIASILVA',
    betzord: 'https://pay.hotmart.com/F66259086P?checkoutMode=10&bid=1644249664838&offDiscount=LETICIASILVA',
    foguetinho: '',
  },
  {
    name: 'LETICIASILVA',
    seller: 'LETICIASILVA',
    betzord: 'https://pay.hotmart.com/F66507737N?checkoutMode=10&bid=1644444571177&offDiscount=LETICIASILVA',
    foguetinho: '',
  },
  {
    name: 'LEVELUP007 (Samuel dos Santos Lima)',
    seller: 'LEVELUP007',
    betzord: 'https://pay.hotmart.com/F66259086P?checkoutMode=10&bid=1644249664838&offDiscount=LEVELUP007',
    foguetinho: '',
  },
  {
    name: 'LEYLAARRAIS',
    seller: 'LEYLAARRAIS',
    betzord: 'https://pay.hotmart.com/B66515443S?checkoutMode=10&bid=1644450672515&offDiscount=LEYLAARRAIS',
    foguetinho: '',
  },
  {
    name: 'LIGIALAIANY',
    seller: 'LIGIALAIANY',
    betzord: 'https://pay.hotmart.com/F66259086P?checkoutMode=10&bid=1644249664838&offDiscount=LIGIALAIANY',
    foguetinho: 'https://app.monetizze.com.br/checkout/CKD121489',
  },
  {
    name: 'LOMA',
    seller: 'LOMA',
    betzord: 'https://pay.hotmart.com/F66507737N?checkoutMode=10&bid=1644444571177&offDiscount=LOMA',
    foguetinho: '',
  },
  {
    name: 'LUANEOFICIAL',
    seller: 'LUANEOFICIAL',
    betzord: 'https://pay.hotmart.com/F66259086P?checkoutMode=10&bid=1644249664838&offDiscount=LUANEOFICIAL',
    foguetinho: '',
  },
  {
    name: 'LUCASTYLTY',
    seller: 'LUCASTYLTY',
    betzord: 'https://pay.hotmart.com/F66259086P?checkoutMode=10&bid=1644872020999&offDiscount=LUCASTYLTY',
    foguetinho: '',
  },
  {
    name: 'LUCASVRAU',
    seller: 'LUCASVRAU',
    betzord: 'https://pay.hotmart.com/F66507737N?checkoutMode=10&bid=1644444571177&offDiscount=LUCASVRAU',
    foguetinho: 'https://app.monetizze.com.br/checkout/CJJ121816',
  },
  {
    name: 'LUISFELIPE',
    seller: 'LUISFELIPE',
    betzord: 'https://pay.hotmart.com/F66259086P?checkoutMode=10&bid=1644249664838&offDiscount=LUISFELIPE',
    foguetinho: '',
  },
  {
    name: 'LUIZMIRANDADILHO',
    seller: 'LUIZMIRANDADILHO',
    betzord: 'https://pay.hotmart.com/F66507737N?checkoutMode=10&bid=1644444571177&offDiscount=LUIZMIRANDADILHO',
    foguetinho: '',
  },
  {
    name: 'MALUZINHAALB',
    seller: 'MALUZINHAALB',
    betzord: 'https://pay.hotmart.com/F66507737N?checkoutMode=10&bid=1644444571177&offDiscount=MALUZINHAALB',
    foguetinho: '',
  },
  {
    name: 'MARIAEUGENIAFIT',
    seller: 'MARIAEUGENIAFIT',
    betzord: 'https://pay.hotmart.com/F66259086P?checkoutMode=10&bid=1644249664838&offDiscount=MARIAEUGENIAFIT',
    foguetinho: 'https://app.monetizze.com.br/checkout/CQJ121938',
  },
  {
    name: 'MARTINKLAYVER',
    seller: 'MARTINKLAYVER',
    betzord: 'https://pay.hotmart.com/B66515443S?checkoutMode=10&bid=1644450672515&offDiscount=MARTINKLAYVER',
    foguetinho: '',
  },
  {
    name: 'MARTINKLAYVER',
    seller: 'MARTINKLAYVER',
    betzord: 'https://pay.hotmart.com/F66259086P?checkoutMode=10&bid=1644249664838&offDiscount=MARTINKLAYVER',
    foguetinho: '',
  },
  {
    name: 'MATHEUSMELOORIGINAL',
    seller: 'MATHEUSCLAUS',
    betzord: 'https://pay.hotmart.com/F66259086P?checkoutMode=10&bid=1644249664838&offDiscount=MATHEUSCLAUS',
    foguetinho: '',
  },
  {
    name: 'MATHEUSYURLEY',
    seller: 'MATHEUSYURLEY',
    betzord: 'https://pay.hotmart.com/F66259086P?checkoutMode=10&bid=1644249664838&offDiscount=MATHEUSYURLEY',
    foguetinho: '',
  },
  {
    name: 'MAXSUELZINHO',
    seller: 'MAXSUELZINHO',
    betzord: 'https://pay.hotmart.com/F66259086P?checkoutMode=10&bid=1644249664838&offDiscount=MAXSUELZINHO',
    foguetinho: '',
  },
  {
    name: 'MCBMOOO',
    seller: 'MCBMOOO',
    betzord: 'https://pay.hotmart.com/F66259086P?checkoutMode=10&bid=1644249664838&offDiscount=MCBMOOO',
    foguetinho: '',
  },
  {
    name: 'MCGUI',
    seller: 'MCGUI',
    betzord: 'https://pay.hotmart.com/F66507737N?checkoutMode=10&bid=1644444571177&offDiscount=MCGUI',
    foguetinho: '',
  },
  {
    name: 'MELQUIAZEVEDO',
    seller: 'MELQUIAZEVEDO',
    betzord: 'https://pay.hotmart.com/F66259086P?checkoutMode=10&bid=1644249664838&offDiscount=MELQUIAZEVEDO',
    foguetinho: 'https://app.monetizze.com.br/checkout/CMK121490',
  },
  {
    name: 'MENEZESGI',
    seller: 'MENEZESGI',
    betzord: 'https://pay.hotmart.com/F66259086P?checkoutMode=10&bid=1644249664838&offDiscount=MENEZESGI',
    foguetinho: '',
  },
  {
    name: 'MENINODOIMBUOFICIAL',
    seller: 'MENINODOIMBUOFICIAL',
    betzord: 'https://pay.hotmart.com/F66259086P?checkoutMode=10&bid=1644249664838&offDiscount=MENINODOIMBUOFICIAL',
    foguetinho: 'https://app.monetizze.com.br/checkout/CQD121944',
  },
  {
    name: 'MISAEL',
    seller: 'MISAEL',
    betzord: 'https://pay.hotmart.com/F66259086P?checkoutMode=10&bid=1644249664838&offDiscount=MISAEL',
    foguetinho: '',
  },
  {
    name: 'MOISAJR',
    seller: 'MOISAJR',
    betzord: 'https://pay.hotmart.com/F66259086P?checkoutMode=10&bid=1644249664838&offDiscount=MOISAJR',
    foguetinho: 'https://app.monetizze.com.br/checkout/CLL121463',
  },
  {
    name: 'MURIELWYLKER',
    seller: 'MURIELWYLKER',
    betzord: 'https://pay.hotmart.com/F66259086P?checkoutMode=10&bid=1644249664838&offDiscount=MURIELWYLKER',
    foguetinho: '',
  },
  {
    name: 'NEYLIMA',
    seller: 'NEYLIMA',
    betzord: 'https://pay.hotmart.com/F66259086P?checkoutMode=10&bid=1644249664838&offDiscount=NEYLIMA',
    foguetinho: '',
  },
  {
    name: 'OFERNANDOSARDINHA',
    seller: 'OFERNANDOSARDINHA',
    betzord: 'https://pay.hotmart.com/F66259086P?checkoutMode=10&bid=1644249664838&offDiscount=OFERNANDOSARDINHA',
    foguetinho: 'https://app.monetizze.com.br/checkout/CFX121480',
  },
  {
    name: 'OFICIALTHIAGOBARROS',
    seller: 'OFICIALTHIAGOBARROS',
    betzord: 'https://pay.hotmart.com/F66507737N?checkoutMode=10&bid=1644444571177&offDiscount=OFICIALTHIAGOBARROS',
    foguetinho: '',
  },
  {
    name: 'OGUSTAVOTUBARAO',
    seller: 'OGUSTAVOTUBARAO',
    betzord: 'https://pay.hotmart.com/B66515443S?checkoutMode=10&bid=1644450672515&offDiscount=OGUSTAVOTUBARAO',
    foguetinho: '',
  },
  {
    name: 'ONILSONNETO',
    seller: 'ONILSONNETO',
    betzord: 'https://pay.hotmart.com/F66259086P?checkoutMode=10&bid=1644249664838&offDiscount=ONILSONNETO',
    foguetinho: '',
  },
  {
    name: 'OPAIDOORGANICO',
    seller: 'OPAIDOORGANICO',
    betzord: 'https://pay.hotmart.com/F66259086P?checkoutMode=10&bid=1644249664838&offDiscount=OPAIDOORGANICO',
    foguetinho: 'https://app.monetizze.com.br/checkout/CBJ121514',
  },
  {
    name: 'OTARIANO',
    seller: 'OTARIANO',
    betzord: 'https://pay.hotmart.com/F66259086P?checkoutMode=10&bid=1644249664838&offDiscount=OTARIANO',
    foguetinho: '',
  },
  {
    name: 'PAHTTY',
    seller: 'PAHTTY',
    betzord: 'https://pay.hotmart.com/F66259086P?checkoutMode=10&bid=1644249664838&offDiscount=PAHTTY',
    foguetinho: '',
  },
  {
    name: 'PAOLLAATAIDE',
    seller: 'PAOLLAATAIDE',
    betzord: 'https://pay.hotmart.com/F66259086P?checkoutMode=10&bid=1644249664838&offDiscount=PAOLLAATAIDE',
    foguetinho: '',
  },
  {
    name: 'PATRICKJIMENEZ',
    seller: 'PATRICKJIMENEZ',
    betzord: 'https://pay.hotmart.com/F66259086P?checkoutMode=10&bid=1644249664838&offDiscount=PATRICKJIMENEZ',
    foguetinho: '',
  },
  {
    name: 'PAULINAATTAIDE',
    seller: 'PAULINAATTAIDE',
    betzord: 'https://pay.hotmart.com/F66259086P?checkoutMode=10&bid=1644249664838&offDiscount=PAULINAATTAIDE',
    foguetinho: '',
  },
  {
    name: 'PAULORICARDOOFF',
    seller: 'PAULORICARDOOFF',
    betzord: 'https://pay.hotmart.com/B66515443S?checkoutMode=10&bid=1644450672515&offDiscount=PAULORICARDOOFF',
    foguetinho: '',
  },
  {
    name: 'PRAZERGABI',
    seller: 'PRAZERGABI',
    betzord: 'https://pay.hotmart.com/F66259086P?checkoutMode=10&bid=1644249664838&offDiscount=PRAZERGABI',
    foguetinho: '',
  },
  {
    name: 'PRISCILAGAMA',
    seller: 'PRISCILAGAMA',
    betzord: 'https://pay.hotmart.com/F66259086P?checkoutMode=10&bid=1644249664838&offDiscount=PRISCILAGAMA',
    foguetinho: 'https://app.monetizze.com.br/checkout/CJZ121936',
  },
  {
    name: 'RAFAMENY (RAFAEL MENDES)',
    seller: 'RAFAMENY',
    betzord: 'https://pay.hotmart.com/F66507737N?checkoutMode=10&bid=1644444571177&offDiscount=RAFAMENY',
    foguetinho: 'https://app.monetizze.com.br/checkout/CYG121494',
  },
  {
    name: 'RAFFAELASOUZA',
    seller: 'RAFFAELASOUZA',
    betzord: 'https://pay.hotmart.com/F66259086P?checkoutMode=10&bid=1644249664838&offDiscount=RAFFAELASOUZA',
    foguetinho: '',
  },
  {
    name: 'RAISSAOLIVEIRA',
    seller: 'RAISSAOLIVEIRA',
    betzord: 'https://pay.hotmart.com/F66507737N?checkoutMode=10&bid=1644444571177&offDiscount=RAISSAOLIVEIRA',
    foguetinho: 'https://app.monetizze.com.br/checkout/CJW121496',
  },
  {
    name: 'RONINHO',
    seller: 'RONINHO',
    betzord: 'https://pay.hotmart.com/F66507737N?checkoutMode=10&bid=1644444571177&offDiscount=RONINHO',
    foguetinho: '',
  },
  {
    name: 'SALVADORDARIMA',
    seller: 'SALVADORDARIMA',
    betzord: 'https://pay.hotmart.com/F66259086P?checkoutMode=10&bid=1644249664838&offDiscount=SALVADORDARIMA',
    foguetinho: 'https://app.monetizze.com.br/checkout/CSJ122799',
  },
  {
    name: 'SOLANGEBEZERRA',
    seller: 'SOLANGEBEZERRA',
    betzord: 'https://pay.hotmart.com/F66259086P?checkoutMode=10&bid=1644249664838&offDiscount=SOLANGEBEZERRA',
    foguetinho: '',
  },
  {
    name: 'SUPORTE',
    seller: 'SUPORTE',
    betzord: 'https://pay.hotmart.com/F66259086P?checkoutMode=10&bid=1644872020999&offDiscount=SUPORTE',
    foguetinho: '',
  },
  {
    name: 'TALITAANDRADE',
    seller: 'TALITAANDRADE',
    betzord: 'https://pay.hotmart.com/F66259086P?checkoutMode=10&bid=1644249664838&offDiscount=TALITAANDRADE',
    foguetinho: '',
  },
  {
    name: 'TAYNARACABRAL',
    seller: 'TAYNARACABRAL',
    betzord: 'https://pay.hotmart.com/F66507737N?checkoutMode=10&bid=1644444571177&offDiscount=TAYNARACABRAL',
    foguetinho: '',
  },
  {
    name: 'TEAGUBRUNO',
    seller: 'TEAGUBRUNO',
    betzord: 'https://pay.hotmart.com/F66259086P?checkoutMode=10&bid=1644249664838&offDiscount=TEAGUBRUNO',
    foguetinho: 'https://app.monetizze.com.br/checkout/CHN121573',
  },
  {
    name: 'THAYRODRIGUES',
    seller: 'THAYRODRIGUES',
    betzord: 'https://pay.hotmart.com/F66259086P?checkoutMode=10&bid=1644249664838&offDiscount=THAYRODRIGUES',
    foguetinho: '',
  },
  {
    name: 'TYLTY',
    seller: 'TYLTY',
    betzord: 'https://pay.hotmart.com/F66259086P?checkoutMode=10&bid=1644872020999&offDiscount=TYLTY',
    foguetinho: '',
  },
  {
    name: 'UPGRADEBETZORD',
    seller: 'UPGRADEBETZORD',
    betzord: 'https://pay.hotmart.com/F66259086P?checkoutMode=10&bid=1644872020999&offDiscount=UPGRADEBETZORD',
    foguetinho: '',
  },
  {
    name: 'VALDONIER BRYAN',
    seller: 'VALDONIER',
    betzord: 'https://pay.hotmart.com/F66259086P?checkoutMode=10&bid=1644249664838&offDiscount=VALDONIER',
    foguetinho: 'https://app.monetizze.com.br/checkout/CNE121466',
  },
  {
    name: 'VAVACUNHA',
    seller: 'VAVACUNHA',
    betzord: 'https://pay.hotmart.com/F66259086P?checkoutMode=10&bid=1644249664838&offDiscount=VAVACUNHA',
    foguetinho: '',
  },
  {
    name: 'VERINHAJR',
    seller: 'VERINHAJR',
    betzord: 'https://pay.hotmart.com/F66259086P?checkoutMode=10&bid=1644249664838&offDiscount=VERINHAJR',
    foguetinho: '',
  },
  {
    name: 'VIIHTUBE',
    seller: 'VIIHTUBE',
    betzord: 'https://pay.hotmart.com/N66517827C?checkoutMode=10&bid=1644521740977&offDiscount=VIIHTUBE',
    foguetinho: '',
  },
  {
    name: 'VINICIUSBARROS12',
    seller: 'VINICIUSBARROS12',
    betzord: 'https://pay.hotmart.com/F66259086P?checkoutMode=10&bid=1644249664838&offDiscount=VINICIUSBARROS12',
    foguetinho: 'https://app.monetizze.com.br/checkout/CCH121567',
  },
  {
    name: 'WAGUINHO (Wagner Victor Dos Santos Silva)',
    seller: 'WAGUINHO',
    betzord: 'https://pay.hotmart.com/F66259086P?checkoutMode=10&bid=1644249664838&offDiscount=WAGUINHO',
    foguetinho: 'https://app.monetizze.com.br/checkout/CNH121495',
  },
  {
    name: 'WELLENROCHAOFICIAL',
    seller: 'WELLENROCHAOFICIAL',
    betzord: 'https://pay.hotmart.com/B66515443S?checkoutMode=10&bid=1644450672515&offDiscount=WELLENROCHAOFICIAL',
    foguetinho: '',
  },
  {
    name: 'WESSKLEY',
    seller: 'WESSKLEY',
    betzord: 'https://pay.hotmart.com/F66259086P?checkoutMode=10&bid=1644249664838&offDiscount=WESSKLEY',
    foguetinho: 'https://app.monetizze.com.br/checkout/CCL121520',
  },
  {
    name: 'SAULO OLIVEIRA',
    seller: 'SAULOOLIVEIRA',
    betzord: '',
    foguetinho: 'https://app.monetizze.com.br/checkout/CVF121497',
  },
  {
    name: 'PEDRO HENRIQUE',
    seller: 'PEDROHENRIQUE',
    betzord: '',
    foguetinho: 'https://app.monetizze.com.br/checkout/CXN121478',
  },
  {
    name: 'MARCELO MORENO',
    seller: 'MARCELOMORENO',
    betzord: '',
    foguetinho: 'https://app.monetizze.com.br/checkout/CHQ121484',
  },
  {
    name: 'RAIANNE MARIA',
    seller: 'RAIANNEMARIA',
    betzord: '',
    foguetinho: 'https://app.monetizze.com.br/checkout/CEL121527',
  },
  {
    name: 'LAYLA DUTRA',
    seller: 'LAYLADUTRA',
    betzord: '',
    foguetinho: 'https://app.monetizze.com.br/checkout/CBU121525',
  },
  {
    name: 'BOB ESTRELA',
    seller: 'BOBESTRELA',
    betzord: 'https://pay.hotmart.com/next/F66259086P?checkoutMode=10&bid=1644249664838&offDiscount=BOBESTRELA',
    foguetinho: '',
  },
  {
    name: 'LUCA NETA',
    seller: 'LUCANETA10',
    betzord: 'https://pay.hotmart.com/next/F66259086P?checkoutMode=10&bid=1644249664838&offDiscount=LUCANETA10',
    foguetinho: '',
  },
  {
    name: 'LEO MOURA',
    seller: 'LEOMOURA23',
    betzord: 'https://pay.hotmart.com/next/F66259086P?checkoutMode=10&bid=1644249664838&offDiscount=LEOMOURA23',
    foguetinho: '',
  },
  {
    name: 'SUZANNA FREITAS',
    seller: 'SUZANNAFREITAS',
    betzord: 'https://pay.hotmart.com/F66259086P?checkoutMode=10&bid=1644249664838&offDiscount=SUZANNAFREITAS',
    foguetinho: '',
  },
  {
    name: 'MENGAO O MELHOR',
    seller: 'MENGAOOMELHOR',
    betzord: 'https://pay.hotmart.com/F66259086P?checkoutMode=10&bid=1644249664838&offDiscount=MENGAOOMELHOR',
    foguetinho: '',
  },
  {
    name: 'CLEVER',
    seller: 'CLEVERNEUMANN',
    betzord: 'https://pay.hotmart.com/F66259086P?checkoutMode=10&bid=1644249664838&offDiscount=CLEVERNEUMANN',
    foguetinho: '',
  },
  {
    name: 'PAULINHO PR9',
    seller: 'PAULINHOPR9',
    betzord: 'https://pay.hotmart.com/F66259086P?checkoutMode=10&bid=1644249664838&offDiscount=PAULINHOPR9',
    foguetinho: '',
  },
  {
    name: 'MARIA CLARA',
    seller: 'MARIACLARAAOFICIAL',
    betzord: 'https://pay.hotmart.com/F66259086P?checkoutMode=10&bid=1644249664838&offDiscount=MARIACLARAAOFICIAL',
    foguetinho: '',
  },
  {
    name: 'MATHEUS SAMPAIO',
    seller: 'MATHEUSSAMPAIO',
    betzord: 'https://pay.hotmart.com/F66259086P?checkoutMode=10&bid=1644249664838&offDiscount=MATHEUSSAMPAIO',
    foguetinho: '',
  },
  {
    name: 'VANESSA CARVALHO',
    seller: 'VANESSCARVALHO',
    betzord: 'https://pay.hotmart.com/F66259086P?checkoutMode=10&bid=1644249664838&offDiscount=VANESSCARVALHO',
    foguetinho: '',
  },
  {
    name: 'NIVALDO',
    seller: 'NIVALDO',
    betzord: 'https://pay.hotmart.com/F66259086P?checkoutMode=10&bid=1644249664838&offDiscount=NIVALDO',
    foguetinho: '',
  },
  {
    name: 'SAULO OLIVEIRA',
    seller: 'SAULOOLIVEIRAOFC2',
    betzord: 'https://pay.hotmart.com/B66515443S?checkoutMode=10&bid=1647127847392&offDiscount=SAULOOLIVEIRAOFC2',
    foguetinho: '',
  },
  {
    name: 'LUCAS MATOS - PRIMOVIRGEM',
    seller: 'PRIMOVIRGEM',
    betzord: 'https://pay.hotmart.com/F66259086P?checkoutMode=10&bid=1644249664838&offDiscount=PRIMOVIRGEM',
    foguetinho: '',
  },
  {
    name: 'MATHEUS MELO',
    seller: 'MATHUESMELOORIGINAL',
    betzord: 'https://pay.hotmart.com/F66259086P?checkoutMode=10&bid=1645464752395&offDiscount=MATHUESMELOORIGINAL',
    foguetinho: '',
  },
  {
    name: 'PAPARAZZO RUBRO NEGRO',
    seller: 'PAPARAZZORUBRONEGRO',
    betzord: 'https://pay.hotmart.com/F66259086P?checkoutMode=10&bid=1645046508171&offDiscount=PAPARAZZORUBRONEGRO',
    foguetinho: '',
  },
  {
    name: 'EDSON MASCARENHAS',
    seller: 'EDSONMASCARENHAS',
    betzord: 'https://pay.hotmart.com/F66259086P?checkoutMode=0&bid=1644249664838&offDiscount=EDSONMASCARENHAS',
    foguetinho: '',
  },
  {
    name: 'José Ronaldo Leonel Da Silva',
    seller: 'MENINODOIMBUOFICIAL',
    betzord: 'https://pay.hotmart.com/F66259086P?checkoutMode=10&bid=1644249664838&offDiscount=MENINODOIMBUOFICIAL',
    foguetinho: '',
  },
  {
    name: 'Daniel Henriique de Souza do Santos',
    seller: 'DANGSOFICIAL',
    betzord: 'https://pay.hotmart.com/F66259086P?checkoutMode=10&bid=1644249664838&offDiscount=DANGSOFICIAL',
    foguetinho: '',
  },
  {
    name: 'Djheniffer Oliveira Ferreira',
    seller: 'DJHENIFFER',
    betzord: 'https://pay.hotmart.com/F66507737N?checkoutMode=10&bid=1644444571177&offDiscount=DJHENIFFER',
    foguetinho: '',
  },
  {
    name: 'THUANY LIMA',
    seller: 'THUANYMA',
    betzord: 'https://pay.hotmart.com/next/F66259086P?checkoutMode=10&bid=1644249664838&offDiscount=THUANYMA',
    foguetinho: 'https://app.monetizze.com.br/checkout/CWM121753',
  },
  {
    name: 'ALEXANDER LOPES',
    seller: 'ALLEXANDERLOPES',
    betzord: 'https://pay.hotmart.com/F66259086P?checkoutMode=10&bid=1644249664838&offDiscount=ALLEXANDERLOPES',
    foguetinho: 'https://app.monetizze.com.br/checkout/CRE121754',
  },
  {
    name: 'ALLAN DENTINHO',
    seller: 'ALLAN_DENTINHO',
    betzord: '',
    foguetinho: 'https://app.monetizze.com.br/checkout/CJW121755',
  },
  {
    name: 'Gabriel Cardozo',
    seller: 'BIELCARDOZ0',
    betzord: '',
    foguetinho: 'https://app.monetizze.com.br/checkout/CTX121786',
  },
  {
    name: 'Shelda Paulino',
    seller: 'SHELDAPAULINOM',
    betzord: '',
    foguetinho: 'https://app.monetizze.com.br/checkout/CUN121787',
  },
  {
    name: 'Yngrid Karollyne Ferro Lima',
    seller: 'GUIGUIMAKEUP',
    betzord: '',
    foguetinho: 'https://app.monetizze.com.br/checkout/CXG121788',
  },
  {
    name: 'Hugo Marcelo Novaes figueirôa',
    seller: 'HUGONOVAESF',
    betzord: '',
    foguetinho: 'https://app.monetizze.com.br/checkout/CGC121789',
  },
  {
    name: 'Amandinha Souza',
    seller: 'AMANDASOUZA',
    betzord: '',
    foguetinho: 'https://app.monetizze.com.br/checkout/CTG121785',
  },
  {
    name: 'MATHEUS BECKER SCHEYER',
    seller: 'QUELANCEEXTRA',
    betzord: 'https://pay.hotmart.com/F66259086P?checkoutMode=10&bid=1644249664838&offDiscount=QUELANCEEXTRA',
    foguetinho: '',
  },
  {
    name: 'KEL FERRETI',
    seller: 'KELFERRETI',
    betzord: '',
    foguetinho: 'https://app.monetizze.com.br/checkout/CYN121810',
  },
  {
    name: 'JOAO PEDRO LISBOA',
    seller: 'JOAOPEDROLISBOA',
    betzord: 'https://pay.hotmart.com/N66517827C?checkoutMode=10&bid=1649792684118&offDiscount=JOAOPEDROLISBOA',
    foguetinho: 'https://app.monetizze.com.br/checkout/CRF121809',
  },
  {
    name: 'MATEUS FELIPE (LATREL)',
    seller: 'LATRELOFC',
    betzord: '',
    foguetinho: 'https://app.monetizze.com.br/checkout/CYD121811',
  },
  {
    name: 'WILLAMS DOS SANTOS',
    seller: 'WILLAMS',
    betzord: '',
    foguetinho: 'https://app.monetizze.com.br/checkout/CTL121857',
  },
  {
    name: 'JULIANA SEIXAS',
    seller: 'FELIPEARAUJOLLIMA',
    betzord: '',
    foguetinho: 'https://app.monetizze.com.br/checkout/CRD121858',
  },
  {
    name: 'TULIO  FERREIRA',
    seller: 'EUTULION',
    betzord: '',
    foguetinho: 'https://app.monetizze.com.br/checkout/CEF121859',
  },
  {
    name: 'MARCELLA BRAGANCA',
    seller: 'MMARCELLABRAGANCA',
    betzord: '',
    foguetinho: 'https://app.monetizze.com.br/checkout/CVW121931',
  },
  {
    name: 'PAULO HENRIQUE',
    seller: 'RIFASDOGURIZINHO',
    betzord: '',
    foguetinho: 'https://app.monetizze.com.br/checkout/CYL121933',
  },
  {
    name: 'CARLÃO SOLTO',
    seller: 'CARLAOSOLTO031',
    betzord: '',
    foguetinho: 'https://app.monetizze.com.br/checkout/CHY121934',
  },
  {
    name: 'PATRICIA VIANA',
    seller: 'ROBEERTAV',
    betzord: '',
    foguetinho: 'https://app.monetizze.com.br/checkout/CEC121935',
  },
  {
    name: 'PEDRO ATHOS',
    seller: 'PASTRANAVLOGS',
    betzord: '',
    foguetinho: 'https://app.monetizze.com.br/checkout/CZX121937',
  },
  {
    name: 'TAYANE BARROS',
    seller: 'TAYANEBARROOS',
    betzord: '',
    foguetinho: 'https://app.monetizze.com.br/checkout/CSY121963',
  },
  {
    name: 'GABRIEL 3G',
    seller: 'GABRIELSOBREIRAA3G',
    betzord: '',
    foguetinho: 'https://app.monetizze.com.br/checkout/CLB121970',
  },
  {
    name: 'NETO GUEDES',
    seller: 'NETOGUEDES',
    betzord: '',
    foguetinho: 'https://app.monetizze.com.br/checkout/CXG121979',
  },
  {
    name: 'PEDRO MARINHO',
    seller: 'PEDROMARINHONETO',
    betzord: 'https://pay.hotmart.com/F66259086P?checkoutMode=10&bid=1644249664838&offDiscount=PEDROMARINHONETO',
    foguetinho: '',
  },
  {
    name: 'ROBSON RICARDO MATIAS',
    seller: 'CARTORROBINHO',
    betzord: 'https://pay.hotmart.com/F66259086P?checkoutMode=10&bid=1644249664838&offDiscount=CARTORROBINHO',
    foguetinho: '',
  },
  {
    name: 'GABRIEL  VICTHOR DE MOURA',
    seller: 'GABRIELLMOOURA',
    betzord: '',
    foguetinho: 'https://app.monetizze.com.br/checkout/CEU122029',
  },
  {
    name: 'JAIRO MARQUES',
    seller: 'FOFOCASALVADOR',
    betzord: '',
    foguetinho: 'https://app.monetizze.com.br/checkout/CWR122030',
  },
  {
    name: 'DANIEL MIRANDA',
    seller: 'DANIELMIRANDAMOTORS',
    betzord: '',
    foguetinho: 'https://app.monetizze.com.br/checkout/CNY122031',
  },
  {
    name: 'GIORGIO BARONE',
    seller: 'BARONE',
    betzord: 'https://pay.hotmart.com/F66259086P?checkoutMode=10&bid=1644249664838&offDiscount=BARONE',
    foguetinho: '',
  },
  {
    name: 'UELLINGTON BOTOF',
    seller: 'BOTOF',
    betzord: '',
    foguetinho: 'https://app.monetizze.com.br/checkout/CVL122102',
  },
  {
    name: 'LARISSA OLIVEIRA',
    seller: 'LARIOLIVEIRAAOFICIAL',
    betzord: '',
    foguetinho: 'https://app.monetizze.com.br/checkout/CRL122111',
  },
  {
    name: 'KAYQUE SILVER',
    seller: 'KAYQUESILVER',
    betzord: '',
    foguetinho: 'https://app.monetizze.com.br/checkout/CAG122112',
  },
  {
    name: 'DANYELLE RORIZ',
    seller: 'DANYRORIZZRESERVA',
    betzord: '',
    foguetinho: 'https://app.monetizze.com.br/checkout/CHK122122',
  },
  {
    name: 'MARCOS DOS ANJOS',
    seller: 'MARCODOSANJOS',
    betzord: '',
    foguetinho: 'https://app.monetizze.com.br/checkout/CMH122123',
  },
  {
    name: 'EMANUEL DE SOUZA',
    seller: 'EUMANELOFICIAL',
    betzord: '',
    foguetinho: 'https://app.monetizze.com.br/checkout/CCY122124',
  },
  {
    name: 'MARINA FERRARI',
    seller: 'MARINAFERRARIG',
    betzord: '',
    foguetinho: 'https://app.monetizze.com.br/checkout/CPZ122157',
  },
  {
    name: 'CAROLINNE OLIVEIRA',
    seller: 'CAROLINNEOFICIAL',
    betzord: '',
    foguetinho: 'https://app.monetizze.com.br/checkout/CTL122158',
  },
  {
    name: 'TULIO',
    seller: 'FERRTULIO',
    betzord: '',
    foguetinho: 'https://app.monetizze.com.br/checkout/CPY122248',
  },
  {
    name: 'LARISSA CARIM',
    seller: 'LARICARIM',
    betzord: '',
    foguetinho: 'https://app.monetizze.com.br/checkout/CAN122294',
  },
  {
    name: 'JEFFERSON SIMÕES BARBOSA',
    seller: 'JEFFBARBOSAOFC',
    betzord: 'https://pay.hotmart.com/F66259086P?checkoutMode=10&bid=1644249664838&offDiscount=JEFFBARBOSAOFC',
    foguetinho: '',
  },
  {
    name: 'JHONATAS DE CASTRO CERVAN',
    seller: 'MLKJHOOW',
    betzord: 'https://pay.hotmart.com/F66259086P?checkoutMode=10&bid=1644249664838&offDiscount=MLKJHOOW',
    foguetinho: '',
  },
  {
    name: 'ANTONIO CARLOS',
    seller: 'MCBRUNINHODAPRAIA',
    betzord: '',
    foguetinho: 'https://app.monetizze.com.br/checkout/CSG122379',
  },
  {
    name: 'WELITON GOMES',
    seller: 'NENEMDAGATAPRETA',
    betzord: '',
    foguetinho: 'https://app.monetizze.com.br/checkout/CPK122519',
  },
  {
    name: 'MARLEI ALVES',
    seller: 'MARLEIALVESS',
    betzord: '',
    foguetinho: 'https://app.monetizze.com.br/checkout/CUV122520',
  },
  {
    name: 'EDILSON LIMA',
    seller: 'EDILSONLIMA',
    betzord: '',
    foguetinho: 'https://app.monetizze.com.br/checkout/CUL122530',
  },
  {
    name: 'LUMENA ALELUIA',
    seller: 'LUMENAALELUIA',
    betzord: 'https://pay.hotmart.com/F66259086P?checkoutMode=10&bid=1644249664838&offDiscount=LUMENAALELUIA',
    foguetinho: '',
  },
  {
    name: 'ROGER RODRIGUES',
    seller: 'ROGINHODUOURO',
    betzord: '',
    foguetinho: 'https://app.monetizze.com.br/checkout/CKR122652',
  },
  {
    name: 'LEANDRO MEDEIROS',
    seller: 'LMEDEIROS82',
    betzord: '',
    foguetinho: 'https://app.monetizze.com.br/checkout/CCK122714',
  },
  {
    name: 'LUCAS FERNANDO',
    seller: 'LUCASFERNANDO',
    betzord: '',
    foguetinho: 'https://app.monetizze.com.br/checkout/CQE122715',
  },
  {
    name: 'HUGO DA SILVA MENEZES',
    seller: 'HUGOMENEZEZOF',
    betzord: '',
    foguetinho: 'https://app.monetizze.com.br/checkout/CNF122718',
  },
  {
    name: 'KEDMA FONSECA DE OLIVEIRA',
    seller: 'KEDMAHHH',
    betzord: '',
    foguetinho: 'https://app.monetizze.com.br/checkout/CNG122815',
  },
  {
    name: 'JOÃO PAULO PEREIRA MOTA',
    seller: 'JOAONUGASS',
    betzord: '',
    foguetinho: 'https://app.monetizze.com.br/checkout/CJR122968',
  },
  {
    name: 'EDUARDO LUIZ SANTOS JUNIOR',
    seller: 'EDUJRSANTOS',
    betzord: '',
    foguetinho: 'https://app.monetizze.com.br/checkout/CST123002',
  },
  {
    name: 'LUIZ GUSTAVO FORNELI (JADE CASAES)',
    seller: 'JADECASAESOFICIAL',
    betzord: '',
    foguetinho: 'https://app.monetizze.com.br/checkout/CHS123010',
  },
  {
    name: 'LUIZ GUSTAVO FORNELI (BIANCA CASSINO)',
    seller: 'KSSIANU',
    betzord: '',
    foguetinho: 'https://app.monetizze.com.br/checkout/CZC123011',
  },
  {
    name: 'CAROLINA CONDESSA',
    seller: 'CAROLINACONDESSA',
    betzord: '',
    foguetinho: 'https://app.monetizze.com.br/checkout/CWY123047',
  },
  {
    name: 'TIAGO BRANCO DE OLIVEIRA',
    seller: 'OTIAGOBRANCO',
    betzord: '',
    foguetinho: 'https://app.monetizze.com.br/checkout/CUY123049',
  },
  {
    name: 'LUCAS FELIPE GOMES DE SOUZA',
    seller: 'FELIPESOUZAAOFICIAL',
    betzord: '',
    foguetinho: 'https://app.monetizze.com.br/checkout/CZP123076',
  },
  {
    name: 'RODRIGO FILIPE MARTINS',
    seller: 'DIGAOSHOW',
    betzord: '',
    foguetinho: 'https://app.monetizze.com.br/checkout/CSU123077',
  },
  {
    name: 'LUIZ GUSTAVO FORNELI (GUSTAVO GIGANTE)',
    seller: 'GIGANTEOFICIAL1',
    betzord: '',
    foguetinho: 'https://app.monetizze.com.br/checkout/CZN123083',
  },
  {
    name: 'JONATAS DOS SANTOS COIMBRA',
    seller: 'JONATASFERRARI',
    betzord: '',
    foguetinho: 'https://app.monetizze.com.br/checkout/CDN123127',
  },
  {
    name: 'EVERTON ISACK TEODORO TEIXEIRA',
    seller: 'DJEVERTONMARTINS',
    betzord: '',
    foguetinho: 'https://app.monetizze.com.br/checkout/CAZ123128',
  },
  {
    name: 'ROBERTA LOREN RODRIGUES REZENDE',
    seller: 'EUROBERTALOREN',
    betzord: '',
    foguetinho: 'https://app.monetizze.com.br/checkout/CPN123169',
  },
  {
    name: 'BRUNA LADY PRATA NETO',
    seller: 'BRUNALADY',
    betzord: '',
    foguetinho: 'https://app.monetizze.com.br/checkout/CDV123178',
  },
  {
    name: 'HEITOR DE OLIVEIRA PEDROSA MARTINS',
    seller: 'HEITORMARTINIZI',
    betzord: '',
    foguetinho: 'https://app.monetizze.com.br/checkout/CHK123207',
  },
  {
    name: 'ALEXANDRE FERREIRA MORAES',
    seller: 'XANDEBRAZIL',
    betzord: '',
    foguetinho: 'https://app.monetizze.com.br/checkout/CBC123278',
  },
  {
    name: 'GABRIEL LUCAS ALVES NASCIMENTO',
    seller: 'GABRIELUCASFEIJAO',
    betzord: '',
    foguetinho: 'https://app.monetizze.com.br/checkout/CDJ123295',
  },
  {
    name: 'JOANA DARC',
    seller: 'COXALOKA',
    betzord: '',
    foguetinho: 'https://app.monetizze.com.br/checkout/CKF123296',
  },
  {
    name: 'CAILA CARIM BELCHIOR',
    seller: 'CAILACARIM',
    betzord: '',
    foguetinho: 'https://app.monetizze.com.br/checkout/CMR123352',
  },
  {
    name: 'MATHEUS DE MELO SANTOS',
    seller: 'MATHEUSMELOORIGINAL',
    betzord: '',
    foguetinho: 'https://app.monetizze.com.br/checkout/CSQ123353',
  },
  {
    name: 'BRENO LEONARDO LARGARES',
    seller: 'BLSHEIK',
    betzord: '',
    foguetinho: 'https://app.monetizze.com.br/checkout/CQS123365',
  },
  {
    name: 'RAFAEL GERMANO CEZARIO',
    seller: 'RGERMANO',
    betzord: '',
    foguetinho: 'https://app.monetizze.com.br/checkout/CPD123366',
  },
  {
    name: 'RUAN AUGUSTO NASCIMENTO DE MELO',
    seller: 'CANTORAUGUSTO',
    betzord: '',
    foguetinho: 'https://app.monetizze.com.br/checkout/CJW123367',
  },
  {
    name: 'RAYANNE DOS SANTOS OLIVEIRA',
    seller: 'RHAYFITOFICIAL',
    betzord: '',
    foguetinho: 'https://app.monetizze.com.br/checkout/CTF123368',
  },
  {
    name: 'JULIA LETICIA MARINHO',
    seller: 'JULIAMARINHO',
    betzord: '',
    foguetinho: 'https://app.monetizze.com.br/checkout/CLP123397',
  },
  {
    name: 'KEL',
    seller: 'KEL',
    betzord: '',
    foguetinho: 'https://app.monetizze.com.br/checkout/CSE123398',
  },
  {
    name: 'TOMER SAVOIA',
    seller: 'TOMERSAVOIA',
    betzord: 'https://pay.hotmart.com/F66259086P?checkoutMode=10&bid=1644249664838&offDiscount=TOMERSAVOIA',
    foguetinho: '',
  },
  {
    name: 'CARLA MARINA REIS',
    seller: 'CARLABORA',
    betzord: '',
    foguetinho: 'https://app.monetizze.com.br/checkout/CVR123540',
  },
  {
    name: 'LIANDRA BRUDER',
    seller: 'BRUDERR',
    betzord: '',
    foguetinho: 'https://app.monetizze.com.br/checkout/CMF123541',
  },
  {
    name: 'IGOR DA SILVA TORRES',
    seller: 'MCBOMBOMOFICIAL',
    betzord: '',
    foguetinho: 'https://app.monetizze.com.br/checkout/CWB123542',
  },
  {
    name: 'ALESSANDRA MELISSA RODRIGUES',
    seller: 'DJMELRODRIGUES',
    betzord: '',
    foguetinho: 'https://app.monetizze.com.br/checkout/CTF123543',
  },
  {
    name: 'LAURYEN CAMARGO AMÉRICO',
    seller: 'LAUAMERICO',
    betzord: '',
    foguetinho: 'https://app.monetizze.com.br/checkout/CDU123560',
  },
  {
    name: 'SAMUEL FREITAS',
    seller: 'SAHAINFLUENCER',
    betzord: '',
    foguetinho: 'https://app.monetizze.com.br/checkout/CBW123562',
  },
  {
    name: 'SIDNEY PEDROSO',
    seller: 'SIDNEYPEDROSO',
    betzord: '',
    foguetinho: 'https://app.monetizze.com.br/checkout/CBE123642',
  },
  {
    name: 'LEONARDO MENDES DA SILVA',
    seller: 'LEOPAVELLINI',
    betzord: '',
    foguetinho: 'https://app.monetizze.com.br/checkout/CAJ123687',
  },
  {
    name: 'BRUNO VINICIUS MONTEIRO DOS SANTOS',
    seller: 'BRUNOCONCEITO',
    betzord: '',
    foguetinho: 'https://app.monetizze.com.br/checkout/CLZ123725',
  },
  {
    name: 'MIKE DA SILVA BERNARDINO',
    seller: 'MIKEBERNARDINO',
    betzord: '',
    foguetinho: 'https://app.monetizze.com.br/checkout/CPE123768',
  },
  {
    name: 'ANDREZA BELCHIOR',
    seller: 'ANDREZABELCHIOR',
    betzord: '',
    foguetinho: 'https://app.monetizze.com.br/checkout/CSX123773',
  },
  {
    name: 'RICARDO MUNIZ',
    seller: 'RICARDOGRAU',
    betzord: '',
    foguetinho: 'https://app.monetizze.com.br/checkout/CEJ123774',
  },
  {
    name: 'LUIZ HENRIQUE MIRANDA FILHO',
    seller: 'LUIZMIRANDAFILHO',
    betzord: '',
    foguetinho: 'https://app.monetizze.com.br/checkout/CJR123857',
  },
  {
    name: 'CARLINHOS MAIA',
    seller: 'CARLINHOSMAIA',
    betzord: '',
    foguetinho: 'https://pay.hotmart.com/X70366315R?checkoutMode=10&offDiscount=CARLINHOSMAIA',
  },
  {
    name: 'LUCAS ANTONIO GALVÃO',
    seller: 'GALVAOSOMOFICIAL',
    betzord: '',
    foguetinho: 'https://app.monetizze.com.br/checkout/CSJ123871',
  },
  {
    name: 'MAYK SANTOS',
    seller: 'MAYKSANTOSDS',
    betzord: 'https://pay.hotmart.com/F66259086P?checkoutMode=10&bid=1644249664838&offDiscount=MAYKSANTOSDS',
    foguetinho: '',
  },
  {
    name: 'RAFAELA COSTA COUTO',
    seller: 'XXRAZZ',
    betzord: '',
    foguetinho: 'https://app.monetizze.com.br/checkout/CLW124109',
  },
  {
    name: 'DHULLY ZANELA',
    seller: 'DHULLYZANELA',
    betzord: 'https://pay.hotmart.com/F66259086P?checkoutMode=10&bid=1644249664838&offDiscount=DHULLYZANELA',
    foguetinho: '',
  },
  {
    name: 'VINÍCIUS OLIVEIRA DA SILVA',
    seller: 'ORIGINALVINICIUS',
    betzord: '',
    foguetinho: 'https://app.monetizze.com.br/checkout/CFD124160',
  },
  {
    name: 'JOÃO GUIMARÃES MOREIRA NETO',
    seller: 'JOAONETOMOREIRA',
    betzord: 'https://pay.hotmart.com/F66259086P?checkoutMode=10&bid=1644249664838&offDiscount=JOAONETOMOREIRA',
    foguetinho: '',
  },
  {
    name: 'MYLA DUARTE',
    seller: 'MYLADUARTE',
    betzord: '',
    foguetinho: 'https://app.monetizze.com.br/checkout/CNV124176',
  },
  {
    name: 'BERNARDO MARTINS FERREIRA',
    seller: 'BERNARDNAVOZ',
    betzord: '',
    foguetinho: 'https://app.monetizze.com.br/checkout/CSX124234',
  },
  {
    name: 'THAÍS FERNANDES HOLANDA',
    seller: 'THAISHOLANDAOFC',
    betzord: '',
    foguetinho: 'https://app.monetizze.com.br/checkout/CCZ124265',
  },
  {
    name: 'VR VEÍCULOS RECIFE',
    seller: 'VEICULOSRECIFE',
    betzord: '',
    foguetinho: 'https://app.monetizze.com.br/checkout/CMR124268',
  },
  {
    name: 'João Victor',
    seller: 1235,
    betzord: 'https://pay.hotmart.com/S67803507J?checkoutMode=10&offDiscount=1235',
    foguetinho: 'https://pay.hotmart.com/X70366315R?checkoutMode=10&offDiscount=1235',
    vivendodevideos: 'https://pay.hotmart.com/Q72645674O?checkoutMode=10&offDiscount=1235',
    tyltyscore: '',
    copiloto: '',
    tyltyscored1: '',
    copilotod1: '',
  },
  {
    name: 'Daniel H',
    seller: 1994,
    betzord: 'https://pay.hotmart.com/S67803507J?checkoutMode=10&offDiscount=1994',
    foguetinho: 'https://pay.hotmart.com/X70366315R?checkoutMode=10&offDiscount=1994',
    vivendodevideos: 'https://pay.hotmart.com/Q72645674O?checkoutMode=10&offDiscount=1994',
    tyltyscore: '',
    copiloto: '',
    tyltyscored1: '',
    copilotod1: '',
  },
  {
    name: 'Luiz Henrique',
    seller: 1605,
    betzord: 'https://pay.hotmart.com/S67803507J?checkoutMode=10&offDiscount=1605',
    foguetinho: 'https://pay.hotmart.com/X70366315R?checkoutMode=10&offDiscount=1605',
    vivendodevideos: 'https://pay.hotmart.com/Q72645674O?checkoutMode=10&offDiscount=1605',
    tyltyscore: '',
    copiloto: '',
    tyltyscored1: '',
    copilotod1: '',
  },
  {
    name: 'Bruno Sonecka',
    seller: 8621,
    betzord: 'https://pay.hotmart.com/S67803507J?checkoutMode=10&offDiscount=8621',
    foguetinho: 'https://pay.hotmart.com/X70366315R?checkoutMode=10&offDiscount=8621',
    vivendodevideos: 'https://pay.hotmart.com/Q72645674O?checkoutMode=10&offDiscount=8621',
    tyltyscore: '',
    copiloto: '',
    tyltyscored1: '',
    copilotod1: '',
  },
  {
    name: 'Thalia Cristina',
    seller: 1217,
    betzord: 'https://pay.hotmart.com/S67803507J?checkoutMode=10&offDiscount=1217',
    foguetinho: 'https://pay.hotmart.com/X70366315R?checkoutMode=10&offDiscount=1217',
    vivendodevideos: 'https://pay.hotmart.com/Q72645674O?checkoutMode=10&offDiscount=1217',
    tyltyscore: '',
    copiloto: '',
    tyltyscored1: '',
    copilotod1: '',
  },
  {
    name: 'Evandro',
    seller: 2323,
    betzord: 'https://pay.hotmart.com/S67803507J?checkoutMode=10&offDiscount=2323',
    foguetinho: 'https://pay.hotmart.com/X70366315R?checkoutMode=10&offDiscount=2323',
    vivendodevideos: 'https://pay.hotmart.com/Q72645674O?checkoutMode=10&offDiscount=2323',
    tyltyscore: '',
    copiloto: '',
    tyltyscored1: '',
    copilotod1: '',
  },
  {
    name: 'Willian Rocha',
    seller: 5486,
    betzord: 'https://pay.hotmart.com/S67803507J?checkoutMode=10&offDiscount=5486',
    foguetinho: 'https://pay.hotmart.com/X70366315R?checkoutMode=10&offDiscount=5486',
    vivendodevideos: 'https://pay.hotmart.com/Q72645674O?checkoutMode=10&offDiscount=5486',
    tyltyscore: 'https://pay.hotmart.com/G66240687B?off=dcv97zf1&checkoutMode=10&offDiscount=5486',
    copiloto: 'https://app.monetizze.com.br/checkout/CZC121957',
    tyltyscored1: 'https://pay.hotmart.com/G66240687B?off=bzokiqcx&checkoutMode=10&offDiscount=5486',
    copilotod1: 'https://app.monetizze.com.br/checkout/CRR121958',
  },
  {
    name: 'Carla Oliveira',
    seller: 1414,
    betzord: 'https://pay.hotmart.com/S67803507J?checkoutMode=10&offDiscount=1414',
    foguetinho: 'https://pay.hotmart.com/X70366315R?checkoutMode=10&offDiscount=1414',
    vivendodevideos: 'https://pay.hotmart.com/Q72645674O?checkoutMode=10&offDiscount=1414',
    tyltyscore: '',
    copiloto: '',
    tyltyscored1: '',
    copilotod1: '',
  },
];

// Validação da URL do produto SEM vendedor
let productUrl = false;
if (products && products[product] && products[product][target]) {
  productUrl = products[product][target];
} else if (products && products[product] && products[product].checkout) {
  target = 'checkout';
  productUrl = products[product][target];
}

// Default QS
const trackingQs = {
  utm_source: 'SPLITZ',
  utm_medium: 'SPLITZ',
  utm_campaign: 'SPLITZ',
  utm_content: 'SPLITZ',
  utm_seller_id: 'SPLITZ',
  utm_target: target,
  utm_x1: 'SPLITZ',
  utm_x2: 'SPLITZ',
  utm_x3: 'SPLITZ',
};

// Encontrar Vendedor com base na QS
let sellerUrl = false;
if (seller) {
  sellerUrl = sellers.find((x) => x.seller.toString().toLowerCase().trim() === seller);
  trackingQs.utm_seller_id = seller;
}

// Definir sellerUrl
if (sellerUrl && sellerUrl && sellerUrl[product]) {
  sellerUrl = sellerUrl[product];
} else {
  sellerUrl = false;
}

// Definição da URL final
if (sellerUrl && target === 'checkout') {
  url = new URL(sellerUrl); // URL = CHECKOUT DO VENDEDOR
} else if (productUrl) {
  url = new URL(productUrl); // URL = PÁGINA DE VENDAS
} else { showError('NOURL'); } // ERRO - SEM URL

if (url) {
  // Definição do customUrl
  if (sellerUrl) {
    url.searchParams.set('customCheckout', sellerUrl);
  } else if (productUrl) {
    url.searchParams.set('customCheckout', products[product].checkout);
  }

  // QS da URL definida para uso
  const mainQs = Object.fromEntries(url.searchParams);
  // QS da URL requisitada
  const hostQs = Object.fromEntries(hostUrl.searchParams);

  // QS agrupada por prioridade
  const finalQs = { ...trackingQs, ...mainQs, ...hostQs };

  // Construção da QS sck
  const sckString = `s-${finalQs.utm_source}|m-${finalQs.utm_medium}|p-${finalQs.utm_campaign}|c-${finalQs.utm_content}|u-${finalQs.utm_seller_id}|t-${finalQs.utm_target}|x1-${finalQs.utm_x1}|x2-${finalQs.utm_x2}|x3-${finalQs.utm_x3}`;
  if (!finalQs.sck) { finalQs.sck = sckString; }

  // QS Final aplicada
  url.search = new URLSearchParams(finalQs);

  // Custom Checkout
  let customCheckout = url.searchParams.get('customCheckout');
  if (customCheckout) {
    customCheckout = new URL(customCheckout);
    let customCheckoutQs = Object.fromEntries(customCheckout.searchParams);
    customCheckoutQs = { ...customCheckoutQs, ...finalQs };
    customCheckout.search = new URLSearchParams(customCheckoutQs);
    // Insere o customCheckout na URL final
    url.searchParams.set('customCheckout', customCheckout.href);
  }

  if (seller && isNaN(seller) && product === 'betzord') {
    window.location.href = 'https://betzord.com/encerradas';
  } else {
    window.location.href = url.href;
  }
}
