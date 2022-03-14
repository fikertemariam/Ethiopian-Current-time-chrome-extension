async function fetchData() {
   
    const record=await res.json();

	var neww = new Intl.DateTimeFormat('am', {calendar: 'ethiopic', weekday: 'long'}).format(Date.now());
	var newd = new Intl.DateTimeFormat('am', {calendar: 'ethiopic', day: 'numeric', month: 'long',year : 'numeric'}).format(Date.now());
	var newt = new Intl.DateTimeFormat('am', {calendar: 'ethiopic', hour: 'numeric', minute : 'numeric', second: 'numeric'}).format(Date.now());


	document.getElementById("weekday").innerHTML=neww;
    document.getElementById("date").innerHTML=newd;
    document.getElementById("time").innerHTML=newt;
}
fetchData();
