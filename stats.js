//---------------------------------POINTS----------------------------------------
let pointsJSON = '{"pts":{"tid":1610612747,"pl":[{"pos":"F","pid":2544,"ln":"James","fn":"LeBron","val":23.3},{"pos":"F-C","pid":203076,"ln":"Davis","fn":"Anthony","val":17.4},{"pos":"G","pid":203471,"ln":"Schroder","fn":"Dennis","val":14.3},{"pos":"C","pid":203083,"ln":"Drummond","fn":"Andre","val":9.0},{"pos":"G","pid":1629659,"ln":"Horton-Tucker","fn":"Talen","val":6.5},{"pos":"F","pid":1628398,"ln":"Kuzma","fn":"Kyle","val":6.3},{"pos":"G","pid":203484,"ln":"Caldwell-Pope","fn":"Kentavious","val":6.2},{"pos":"F-C","pid":1626149,"ln":"Harrell","fn":"Montrezl","val":5.8},{"pos":"G","pid":1627936,"ln":"Caruso","fn":"Alex","val":5.8},{"pos":"G","pid":202083,"ln":"Matthews","fn":"Wesley","val":5.5},{"pos":"C","pid":201188,"ln":"Gasol","fn":"Marc","val":5.2},{"pos":"F","pid":202693,"ln":"Morris","fn":"Markieff","val":2.3},{"pos":"G","pid":203463,"ln":"McLemore","fn":"Ben","val":1.5},{"pos":"F","pid":201162,"ln":"Dudley","fn":"Jared","val":0.0},{"pos":"F","pid":1628035,"ln":"McKinnie","fn":"Alfonzo","val":0.0},{"pos":"F","pid":1628961,"ln":"Antetokounmpo","fn":"Kostas","val":0.0},{"pos":"F","pid":1629719,"ln":"Cacok","fn":"Devontae","val":0.0}],"ta":"LAL","tn":"Lakers","tc":"Los Angeles"}}';

let points = JSON.parse(pointsJSON).pts.pl;
points.sort((a, b) => (a.val < b.val));

let pointsHTML = "";
for (let i = 0; i < points.length; i++) {
  if(i > 3){
    pointsHTML+="<tr class='pointsBelowFour' style='display:none'>";
  }else{
    pointsHTML+="<tr>";
  }
  pointsHTML+="<td>"+points[i].fn+"</td>";
  pointsHTML+="<td>"+points[i].ln+"</td>";
  pointsHTML+="<td>"+points[i].pos+"</td>";
  pointsHTML+="<td>"+points[i].val.toFixed(1)+"</td>";
  pointsHTML+="</tr>";
}
document.getElementById("points-table").innerHTML += pointsHTML;

let pointsBtn = document.getElementById("points-btn");
pointsBtn.addEventListener('click', () => {
  let players = document.getElementsByClassName("pointsBelowFour");
  for (p of players) {
    if(p.style.display == "none"){
      p.style.display = "table-row";
      pointsBtn.innerHTML = "See Top 4 Players";
    }else{
      p.style.display = "none";
      pointsBtn.innerHTML = "See All Players";
    }
  }
  pointsBtn.scrollIntoView({behavior: "smooth", block: "end"});
});

//---------------------------------REBOUNDS----------------------------------------
let reboundsJSON = '{"reb":{"tid":1610612747,"pl":[{"pos":"C","pid":203083,"ln":"Drummond","fn":"Andre","val":11.0},{"pos":"F","pid":2544,"ln":"James","fn":"LeBron","val":7.2},{"pos":"F-C","pid":203076,"ln":"Davis","fn":"Anthony","val":6.6},{"pos":"C","pid":201188,"ln":"Gasol","fn":"Marc","val":3.8},{"pos":"F","pid":1628398,"ln":"Kuzma","fn":"Kyle","val":3.8},{"pos":"G","pid":1629659,"ln":"Horton-Tucker","fn":"Talen","val":3.5},{"pos":"G","pid":203471,"ln":"Schroder","fn":"Dennis","val":3.0},{"pos":"G","pid":203484,"ln":"Caldwell-Pope","fn":"Kentavious","val":2.8},{"pos":"F-C","pid":1626149,"ln":"Harrell","fn":"Montrezl","val":2.5},{"pos":"G","pid":203463,"ln":"McLemore","fn":"Ben","val":1.8},{"pos":"G","pid":202083,"ln":"Matthews","fn":"Wesley","val":1.7},{"pos":"G","pid":1627936,"ln":"Caruso","fn":"Alex","val":1.3},{"pos":"F","pid":202693,"ln":"Morris","fn":"Markieff","val":1.0},{"pos":"F","pid":1628035,"ln":"McKinnie","fn":"Alfonzo","val":0.5},{"pos":"F","pid":201162,"ln":"Dudley","fn":"Jared","val":0.0},{"pos":"F","pid":1628961,"ln":"Antetokounmpo","fn":"Kostas","val":0.0},{"pos":"F","pid":1629719,"ln":"Cacok","fn":"Devontae","val":0.0}],"ta":"LAL","tn":"Lakers","tc":"Los Angeles"}}';

let rebounds = JSON.parse(reboundsJSON).reb.pl;
rebounds.sort((a, b) => (a.val < b.val));

let reboundsHTML = "";
for (let i = 0; i < rebounds.length; i++) {
  if(i > 3){
    reboundsHTML+="<tr class='reboundsBelowFour' style='display:none'>";
  }else{
    reboundsHTML+="<tr>";
  }
  reboundsHTML+="<td>"+rebounds[i].fn+"</td>";
  reboundsHTML+="<td>"+rebounds[i].ln+"</td>";
  reboundsHTML+="<td>"+rebounds[i].pos+"</td>";
  reboundsHTML+="<td>"+rebounds[i].val.toFixed(1)+"</td>";
  reboundsHTML+="</tr>";
}
document.getElementById("rebounds-table").innerHTML += reboundsHTML;

let reboundsBtn = document.getElementById("rebounds-btn");
reboundsBtn.addEventListener('click', () => {
  let players = document.getElementsByClassName("reboundsBelowFour");
  for (p of players) {
    if(p.style.display == "none"){
      p.style.display = "table-row";
      reboundsBtn.innerHTML = "See Top 4 Players";
    }else{
      p.style.display = "none";
      reboundsBtn.innerHTML = "See All Players";
    }
  }
  reboundsBtn.scrollIntoView({behavior: "smooth", block: "end"});
});

//---------------------------------THREEPOINTERS----------------------------------------
let threepointersJSON = '{"tpp":{"tid":1610612747,"pl":[{"pos":"C","pid":201188,"ln":"Gasol","fn":"Marc","val":0.636},{"pos":"F","pid":2544,"ln":"James","fn":"LeBron","val":0.375},{"pos":"G","pid":203463,"ln":"McLemore","fn":"Ben","val":0.333},{"pos":"G","pid":203471,"ln":"Schroder","fn":"Dennis","val":0.308},{"pos":"G","pid":1627936,"ln":"Caruso","fn":"Alex","val":0.294},{"pos":"G","pid":202083,"ln":"Matthews","fn":"Wesley","val":0.280},{"pos":"F","pid":202693,"ln":"Morris","fn":"Markieff","val":0.250},{"pos":"G","pid":203484,"ln":"Caldwell-Pope","fn":"Kentavious","val":0.211},{"pos":"G","pid":1629659,"ln":"Horton-Tucker","fn":"Talen","val":0.200},{"pos":"F-C","pid":203076,"ln":"Davis","fn":"Anthony","val":0.182},{"pos":"F","pid":1628398,"ln":"Kuzma","fn":"Kyle","val":0.174},{"pos":"F","pid":201162,"ln":"Dudley","fn":"Jared","val":0.000},{"pos":"C","pid":203083,"ln":"Drummond","fn":"Andre","val":0.000},{"pos":"F-C","pid":1626149,"ln":"Harrell","fn":"Montrezl","val":0.000},{"pos":"F","pid":1628035,"ln":"McKinnie","fn":"Alfonzo","val":0.000},{"pos":"F","pid":1628961,"ln":"Antetokounmpo","fn":"Kostas","val":0.000},{"pos":"F","pid":1629719,"ln":"Cacok","fn":"Devontae","val":0.000}],"ta":"LAL","tn":"Lakers","tc":"Los Angeles"}}';

let threepointers = JSON.parse(threepointersJSON).tpp.pl;
threepointers.sort((a, b) => (a.val < b.val));

let tpHTML = "";
for (let i = 0; i < threepointers.length; i++) {
  if(i > 3){
    tpHTML+="<tr class='tpBelowFour' style='display:none'>";
  }else{
    tpHTML+="<tr>";
  }
  tpHTML+="<td>"+threepointers[i].fn+"</td>";
  tpHTML+="<td>"+threepointers[i].ln+"</td>";
  tpHTML+="<td>"+threepointers[i].pos+"</td>";
  tpHTML+="<td>"+(threepointers[i].val*100).toFixed(1)+"</td>";
  tpHTML+="</tr>";
}
document.getElementById("threepointers-table").innerHTML += tpHTML;

let tpBtn = document.getElementById("threepointers-btn");
tpBtn.addEventListener('click', () => {
  let players = document.getElementsByClassName("tpBelowFour");
  for (p of players) {
    if(p.style.display == "none"){
      p.style.display = "table-row";
      tpBtn.innerHTML = "See Top 4 Players";
    }else{
      p.style.display = "none";
      tpBtn.innerHTML = "See All Players";
    }
  }
  tpBtn.scrollIntoView({behavior: "smooth", block: "end"});
});
