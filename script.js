async function fetchData() {
    const res=await fetch ("https://api.coronavirus.data.gov.uk/v1/data");
    const record=await res.json();
	
	//var newd = new Intl.DateTimeFormat('am', {calendar: 'ethiopic', day: 'numeric', month: 'long',weekday: 'long',year : 'numeric', hour: 'numeric', minute : 'numeric', second: 'numeric'}).format(Date.now());
// var n = new Intl.DateTimeFormat('am',{calendar: 'ethiopic', hour : '2-digit',minute : '2-digit', second : '2-digit'}).format(Date.now()); /
//var newd = new Intl.DateTimeFormat('ethioaa', {calendar: 'ethiopic', day: 'numeric', month: 'long',weekday: 'long',year : 'numeric'}).format(Date.now());

	var neww = new Intl.DateTimeFormat('am', {calendar: 'ethiopic', weekday: 'long'}).format(Date.now());
	var newd = new Intl.DateTimeFormat('am', {calendar: 'ethiopic', day: 'numeric', month: 'long',year : 'numeric'}).format(Date.now());
	var newt = new Intl.DateTimeFormat('am', {calendar: 'ethiopic', hour: 'numeric', minute : 'numeric', second: 'numeric'}).format(Date.now());


	document.getElementById("weekday").innerHTML=neww;
  //  document.getElementById("date").innerHTML=record.data[0].date;
    document.getElementById("date").innerHTML=newd;
    document.getElementById("time").innerHTML=newt;
   // document.getElementById("deathNew").innerHTML=record.data[0].deathNew;
}
fetchData();