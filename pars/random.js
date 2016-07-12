<!-- hide script from old browsers
var howMany =2;  // max number of items listed below
var page = new Array(howMany+1);

page[0]="0001.html";
page[1]="0002.html";	
page[2]="0003.html";

function rndnumber(){
var randscript = -1;
while (randscript < 0 || randscript > howMany || isNaN(randscript)){
randscript = parseInt(Math.random()*(howMany+1));
}
return randscript;
}
quo = rndnumber();
quox = page[quo];
window.location=(quox);
// end hiding script from old browsers -->
