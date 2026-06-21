  // ===== Countdown timer (resets per visit, 15 min) =====
  var totalSeconds = 15 * 60;
  var countdownEl = document.getElementById('countdown');
  setInterval(function(){
    totalSeconds--;
    if (totalSeconds <= 0) { totalSeconds = 15 * 60; }
    var m = Math.floor(totalSeconds / 60);
    var s = totalSeconds % 60;
    countdownEl.textContent = (m < 10 ? '0' : '') + m + ':' + (s < 10 ? '0' : '') + s;
  }, 1000);

  // ===== Social proof popup: Indian female names, global Indian-diaspora cities, no repeats until full cycle =====
  var proofNames = [
    'Priya Sharma','Anjali Reddy','Neha Kapoor','Pooja Mehta','Riya Tiwari',
    'Sneha Verma','Divya Nair','Kavita Joshi','Shreya Bose','Megha Pillai',
    'Aditi Malhotra','Simran Kaur','Tanvi Rao','Ishita Agarwal','Nisha Choudhary',
    'Ananya Iyer','Vidya Menon','Radhika Singh','Komal Desai','Swati Bhatt',
    'Preeti Gupta','Yamini Rajan','Bhavna Shah','Lavanya Krishnan','Ritika Saxena'
  ];
  var proofLocations = [
    'Mumbai, India','Delhi, India','Bengaluru, India','Hyderabad, India','Chennai, India',
    'Pune, India','Kolkata, India','Ahmedabad, India','Gurugram, India','Noida, India',
    'London, UK','Manchester, UK','Dubai, UAE','Abu Dhabi, UAE',
    'New York, USA','San Francisco, USA','Chicago, USA','Houston, USA',
    'Toronto, Canada','Vancouver, Canada',
    'Sydney, Australia','Melbourne, Australia'
  ];

  function shuffle(arr){
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = a[i]; a[i] = a[j]; a[j] = tmp;
    }
    return a;
  }

  var nameQueue = shuffle(proofNames);
  var locQueue = shuffle(proofLocations);

  function nextName(){
    if (nameQueue.length === 0) nameQueue = shuffle(proofNames);
    return nameQueue.pop();
  }
  function nextLoc(){
    if (locQueue.length === 0) locQueue = shuffle(proofLocations);
    return locQueue.pop();
  }

  var proofPopup = document.getElementById('proofPopup');
  var proofName = document.getElementById('proofName');
  var proofCity = document.getElementById('proofCity');
  var proofAvatar = document.getElementById('proofAvatar');

  function showProof(){
    var name = nextName();
    var loc = nextLoc();
    var parts = name.split(' ');
    proofAvatar.textContent = (parts[0][0] + (parts[1] ? parts[1][0] : '')).toUpperCase();
    proofName.textContent = name;
    proofCity.textContent = loc;
    proofPopup.classList.add('show');
    setTimeout(function(){ proofPopup.classList.remove('show'); }, 4500);
  }
  setTimeout(showProof, 2000);
  setInterval(showProof, 10000);