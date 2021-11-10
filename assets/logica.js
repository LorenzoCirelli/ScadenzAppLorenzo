glob = "f";
presenti="no";
function menu(){
let a = document.getElementById('menulat');
a.classList.toggle('nascosto');
let b = document.getElementById('pageint');
b.classList.toggle('car');
let c = document.getElementById('body');
c.classList.toggle('over');
let d = document.getElementById('base');
d.classList.toggle('anima');
}
function chiudi(){
    let a = document.getElementById('menulat');
a.classList.toggle('nascosto');
let b = document.getElementById('pageint');
b.classList.toggle('car');
let c = document.getElementById('body');
c.classList.toggle('over');
let d = document.getElementById('base');
d.classList.toggle('anima');
}
function suggerimenti(){
document.getElementById('inputs1').setAttribute('list', 'prodotti');
document.getElementById('suggeritore').innerText="Suggerimenti attivati";
 document.getElementById('suggeritore').onclick = function cliccatodue(){
    alert("suggerimenti già attivati");
 }
}
function loaderf(){
let a = document.getElementById('bglol');
a.classList.toggle('hide');
let b = document.getElementById('visi');
b.classList.toggle('non');
let c = document.getElementById('body');
c.classList.toggle('over');
//document.body.requestFullscreen();
let carica = localStorage.getItem("pos");
if (carica==null || carica<=0){
    let d = document.getElementById('elements');
d.classList.toggle('show');
}else{
}
if(presenti=="si"){
    let df = document.getElementById('avvisa');
df.classList.toggle('non');
}
}
function chiudi2(){
    let df = document.getElementById('avvisa');
df.classList.toggle('non');

}
function apri(){
let b = document.getElementById('adding');
b.classList.toggle('show');
let c = document.getElementById('body');
c.classList.toggle('over');
var newf = localStorage.getItem('pos')
if (newf==null || newf<=0){
    let d = document.getElementById('elements');
d.classList.toggle('show');
}
}
function aggiungi(){
    dati();
let b = document.getElementById('adding');
b.classList.toggle('show');
let c = document.getElementById('body');
c.classList.toggle('over');
loader();
}
function dati(){
    data_name = document.getElementById('inputs1').value;
    data_date = document.getElementById("inputs").value;
    data_name = data_name.trim();
    if (data_name == "" || data_date =="") {
    alert("Completa il campo per poter continuare");
}else{
        do{
        data = localStorage.getItem("pos");
        if (data==null){
    localStorage.setItem("pos",1)
    data = 0;
}else{
    localStorage.setItem("pos",data);
}
let nomecla = localStorage.getItem(data);
if(data_name != nomecla){
save();
}else{
    alert(
        "Il nome inserito è già esistente"
    );
    break;
}
var positt = localStorage.getItem("pos");
if(positt == data){
    glob = "no";
}
    }while(glob == "f")
    }
}
function save(){
    //call set position
    datilocalstorage();
//insert item
    let position = localStorage.getItem("pos");
    localStorage.setItem(position,data_name);
    localStorage.setItem(data_name,data_date);
    //messaggio successo
    let d = document.getElementById('conf');
    d.classList.toggle('no');
    setTimeout(nodata, 3000);
}
function datilocalstorage(){
    data++;
    localStorage.setItem("pos",data)
}
function salvanomeuser(){
    var user_name = document.getElementById('nomecla').value;
    var u =  localStorage.getItem('nomeuser');
    if(u == null || u==undefined){
    localStorage.setItem('nomeuser',user_name);
    }else{
    localStorage.removeItem('nomeuser');
    localStorage.setItem('nomeuser',user_name);
    }
}
//avvio
(function caricamento(){
//carica scadenze
loader();
//tipo saluto
orario();
//carica nome
nomino();
}())
function nomino(){
    var u =  localStorage.getItem('nomeuser');
    if(u==null || u==undefined){
        u=" Anonimo";
    }else{
    }
    document.getElementById('nomecla').value=u;

}
function orario(){
    let d = new Date();
    let ora = d.getHours();
    if(ora>=6 && ora<=22){
    var txt = "Buon giorno"
    }else{
    var txt = "buona sera"
    }
    document.getElementById('welcometxt').innerHTML=txt;
}
function loader(){
    var num= 0;
    var agp = 0;
    var posizionamento =5;
    var scade = 3;
    var nomenclaz = 0;
    var scaduti = 0;
do{
num++;
var nome = localStorage.getItem(num);
if(nome == null){
}else{
    agp++;
    var posizionamento = posizionamento+10.45;
//dati
var datagg = localStorage.getItem(nome);
var temp = datagg.split("-");
var to = temp[2] + "-" + temp[1] + "-" + temp[0];
var giorno = temp[2];
var mese = temp[1];
var anno = temp[0];
//creazione parti

var elenco = document.createElement("div");
var g=document.createElement("h2");
var dg = document.createElement("h2");
var img = document.createElement('button')
//class

img.classList.toggle('hgh_'+num);
elenco.classList.toggle('hgh_'+num);
g.classList.toggle('hgh_'+num);
img.textContent="Elimina";
img.id="el_"+num;
img.style.position="absolute";
img.style.top=30+"%";
img.style.left=60+"%";
img.style.fontFamily="monospace";
img.style.color="#c25b2b";
img.style.border="solid "+2+"px #00b3ff";
img.style.borderRadius = 30+"px";
img.style.backgroundColor="#fff";
img.onclick=function eliminazione(){
    eliminaz();
}
g.id="posi";
g.textContent=nome;
g.style.position="absolute";
g.style.top=1+"%";
g.style.left=3+"%";
g.style.fontFamily="monospace";
g.style.fontSize=100+"%";
dg.style.position="absolute";
dg.style.top=40+"%";
dg.style.left=3+"%";
dg.style.fontFamily="monospace";
dg.style.fontSize=100+"%";
dg.id="scad";
dg.textContent=to;
elenco.id="nascond";
//data ora
var oggi = new Date().toLocaleDateString();
var partizioni = oggi.split("/");
var yrs = partizioni[2];
var days = partizioni[0];
var mey = partizioni[1];
const oneDay = 24 * 60 * 60 * 1000;
const firstDate = new Date(anno, mese, giorno);
const secondDate = new Date(yrs, mey, days);
var mancanti = Math.round(Math.abs((secondDate - firstDate) / oneDay));

var posizmese = mese.indexOf(0);
if(posizmese==0){
    var mese = mese.substring(1);
}
var posizmey = mey.indexOf(0);
if(posizmey==0){
    var mey = mey.substring(1);
}
var posizgiorno = giorno.indexOf(0);
if(posizgiorno==0){
    var giorno = giorno.substring(1);
}
var posizdays = days.indexOf(0);
if(posizdays==0){
    var days = days.substring(1);
}
if (anno<=yrs){
    if(anno<yrs){
        mancanti = 0;
    }else if(mese<mey && anno==yrs){
    mancanti=0;
        }else if(giorno<=days && mese<=mey){
        mancanti=0;
    }
}else{
    //nulla
}
if(mancanti <= 6 && mancanti >-1){
    elenco.style.backgroundColor="red";
    if(yrs==anno){
        if(mese==mey && mancanti != 0){
            if((days-1)==giorno){
                mancanti=0;
            }
        }
    }
    if(mancanti <= 0){
        scaduti++;
    }
}else{
    elenco.style.backgroundColor="white";
}
elenco.style.position = "absolute";
elenco.style.width=80+"%";
elenco.style.height=10+"%";   
elenco.style.left=10+"%";
elenco.style.border="solid "+1+"px black";
elenco.style.borderRadius=30+"px";
elenco.style.top = posizionamento+"%";
elenco.style.boxShadow= 1+"px "+1+"px "+1+"px grey";
internissimo.appendChild(elenco);
elenco.appendChild(g);
elenco.appendChild(img);
elenco.appendChild(dg);
//prodotto
}
}while (agp < localStorage.getItem("pos"))
if(scaduti != 0){
//avviso scadenze
var tipologia = "prodotti scaduti";
if(scaduti==1){
    tipologia=" prodotto scaduto o che scade oggi";
}else{
    tipologia=" prodotti scaduti o che scadono oggi";
}
document.getElementById('prodscad').innerHTML="Hai "+scaduti+tipologia+"."
presenti="si";
}
}
function nodata(){
let d = document.getElementById('conf');
d.classList.toggle('no');
}
function eliminaz(){
    var iddel = event.srcElement.id;
    var nmumero = iddel.split("_");
    var attpos = localStorage.getItem('pos');
    var datal = localStorage.getItem(nmumero[1]);
    localStorage.removeItem(nmumero[1]);
    attpos--;
    localStorage.setItem('pos',attpos);
    localStorage.removeItem(datal);
    alert("Elemento eliminato");
    location.reload();
}
