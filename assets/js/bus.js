
  var date = new Date();
    var currentHours = date.getHours();
    var currentMins = date.getMinutes();
    var currentSecs = date.getSeconds();
    var timeMins = date.getHours()*60 + date.getMinutes();

  /*Bus departure times in minutes (e.g. 17:15 -> 17*60+15) */
  var timeSotSot = [1000, 1030, 1075];
  var timeSotChil = [458, 546, 591, 676, 736, 796, 856, 941, 1005, 1035, 1080];
  var timeRomSot = [476, 530];
  var timeRomChil = [474, 528, 600, 660, 725, 785, 871, 996, 1056];



  function getHourSotChil(hours)
  {
      for(var i = 0; i< timeSotChil.length; i++)
      {
          if(timeSotChil[i]> hours)
          {
              return timeSotChil[i];
          }
      }
  }
  function getHourSotSot(hours)
  {
      for(var i = 0; i< timeSotSot.length; i++)
      {
          if(timeSotSot[i]> hours)
          {
              return timeSotSot[i];
          }
      }
  }
  function getHourRomChil(hours)
  {
      for(var i = 0; i< timeRomChil.length; i++)
      {
          if(timeRomChil[i]> hours)
          {
              return timeRomChil[i];
          }
      }
  }
  function getHourRomSot(hours)
  {
      for(var i = 0; i< timeRomSot.length; i++)
      {
          if(timeRomSot[i]> hours)
          {
              return timeRomSot[i];
          }
      }
  }

  var timeToSotChil = getHourSotChil(timeMins);
  var timeToSotSot = getHourSotSot (timeMins);
  var timeToRomChil = getHourRomChil(timeMins);
  var timeToRomSot = getHourRomSot (timeMins);
  var leavingTimeSotChil = (timeToSotChil-timeMins);
  var leavingTimeSotSot = (timeToSotSot-timeMins);
  var leavingTimeRomChil = (timeToRomChil-timeMins);
  var leavingTimeRomSot = (timeToRomSot-timeMins);

  if (timeMins < 940 || timeMins >= 1075){
      document.getElementById("soton_soton").innerHTML = "No Bus";
  }
  else {
      document.getElementById("soton_soton").innerHTML = "in " + leavingTimeSotSot + " mins";
  }

  if (timeMins < 420 || timeMins >= 1080){
      document.getElementById("soton_chil").innerHTML = "No Bus";
  }
  else {
      document.getElementById("soton_chil").innerHTML = "in " + leavingTimeSotChil + " mins";
  }

  if (timeMins < 420 || timeMins >= 530){
      document.getElementById("rom_soton").innerHTML = "No Bus";
  }
  else {
      document.getElementById("rom_soton").innerHTML = "in " + leavingTimeRomSot + " mins";
  }

  if (timeMins < 420 || timeMins >= 1056){
      document.getElementById("rom_chil").innerHTML = "No Bus";
  }
  else {
      document.getElementById("rom_chil").innerHTML = "in " + leavingTimeRomChil + " mins";
  }