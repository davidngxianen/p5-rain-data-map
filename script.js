
window.onload = () => {
  
  //navigator.geolocation.getCurrentPosition(locationSuccess, locationError, locationOptions);
   
  // window.requestAnimationFrame(update);

  getRainfall(formatCurrentTime())
};

var dt = formatCurrentTime();
console.log(dt);

var chosenYear;
var chosenMonth;
var chosenDay;
var chosenHour;
var chosenMinute;


// function parseDateTime(dt) {
  
//     if (dt.length !== 25 && dt.length !== 19) {
//       console.log("unrecognizable date time string");
//       return undefined;
      
//     } else {
//       var date = dt.split("T")[0];
//       var hour = dt.split("T")[1].split("+")[0];
      
//       var y = date.split("-")[0];
//       var m = date.split("-")[1];
//       var d = date.split("-")[2];
      
//       var h = hour.split(":")[0];
//       var min = hour.split(":")[1];
//       var s = hour.split(":")[2];
      
//       return {
//         year: y,
//         month: m,
//         day: d,
//         hour: h,
//         minute: min,
//         second: s
//       };
//     } 
  // }

  
  function processData (f1,f2){
   var newdate = document.getElementById(f1).value;
   var newtime = document.getElementById(f2).value;
  //  alert (newdate + " " + newtime);
   console.log (newdate + " " + newtime);
   

    [chosenYear, chosenMonth, chosenDay] = newdate.split ("-"); 
   console.log (chosenYear);

   [chosenHour, chosenMinute] = newtime.split (":"); 
   console.log (chosenHour);

   getRainfall(formatCurrentTime());

  }

  function formatCurrentTime() {
    var timestamp = Date.now() - 900000;
    var d = new Date(timestamp);
    var year = chosenYear;
    var month = chosenMonth;
    var day = chosenDay;
    var hour =chosenHour;
    var minute = chosenMinute;
    var second = 0;

  
  
    return formatDateTime(year, month, day, hour, minute, second);
  }

  
  
  function formatDateTime(year, month, day, hour, minute, second) {
    var dt = `${year}-${twoDigits(month)}-${twoDigits(day)}T${twoDigits(hour)}:${twoDigits(minute)}:${twoDigits(second)}`;
    return dt;
  }

  function twoDigits(num) {
    if (isNaN(num)) {
      console.log("not a number!");
      return num;
    } else {
      return num.toLocaleString("en-US", {
        minimumIntegerDigits: 2,
        useGrouping: false
      });
    }
  }
  
  getRainfall();

  var S77_Value;
  
  var S109_Value;
  
  var S90_Value;
  
  var S114_Value;
  
  var S11_Value;
  
  var S50_Value;
  
  var S107_Value;
  
  var S215_Value;
  
  var S118_Value;
  
  var S120_Value;
  
  var S33_Value;
  
  var S71_Value;
  
  var S43_Value;
  
  var S66_Value;
  
  var S112_Value;
  
  var S40_Value;
  
  var S108_Value;
  
  var S113_Value;
  
  var S44_Value;
  
  var S121_Value;
  
  var S35_Value;
  
  var S94_Value;
  
  var S78_Value;
  
  var S106_Value;
  
  var S81_Value;
  
  var S201_Value;
  
  var S202_Value;
  
  var S203_Value;
  
  var S204_Value;
  
  var S205_Value;
   
  var S207_Value;
   
  var S208_Value;
   
  var S209_Value;
   
  var S210_Value;
   
  var S211_Value;
   
  var S212_Value;
   
  var S213_Value;
   
  var S214_Value;
   
  var S216_Value;
   
  var S217_Value;
   
  var S218_Value;
   
  var S219_Value;
   
  var S220_Value;
   
  var S221_Value;
   
  var S222_Value;
   
  var S223_Value;
   
  var S224_Value;
   
  var S226_Value;
   
  var S227_Value;
   
  var S228_Value;
  
  var S230_Value;
  
  var S111_Value;
  
  var S900_Value;
  
  var S84_Value;
  
  var S79_Value;
  
  var S88_Value;
  
  var S89_Value;
  
  var S115_Value;
  
  var S82_Value;
  
  var S24_Value;
  
  var S69_Value;
  
  var S08_Value;
  
  var S116_Value;
   
  var S104_Value;

  async function getRainfall(dateTimeString) {
    console.log ('update ' + dateTimeString);
    //  const response = await fetch(`https://api.data.gov.sg/v1/environment/rainfall?date_time=2021-04-05T15:00:00`);
    const response = await fetch(`https://api.data.gov.sg/v1/environment/rainfall?date_time=${dateTimeString}`);
    const data = await response.json();
    console.log(data.items[0].readings);
    // console.log(data.items[0].readings[50].value);
    var rainData = data.items[0].readings;
    console.log(data.items[0].readings.length);
    // for (var i = 0; i < data.items[0].readings.length; i++) {
    //     console.log(data.items[0].readings[i].station_id +',' + data.items[0].readings[i].value);
    // }

    S77_Value = (data.items[0].readings[0].value) * 3 + 3
    console.log(S77_Value);
    
    S109_Value = (data.items[0].readings[1].value) * 3 + 3
    console.log(S109_Value);
    
    S90_Value = (data.items[0].readings[2].value) * 3 + 3
    console.log(S90_Value);
    
    S114_Value = (data.items[0].readings[3].value) * 3 + 3
    console.log(S114_Value);
    
    S11_Value = (data.items[0].readings[4].value) * 3 + 3
    console.log(S11_Value);
    
    S50_Value = (data.items[0].readings[5].value) * 3 + 3
    console.log(S50_Value);
    
    S107_Value = (data.items[0].readings[6].value) * 3 + 3
    console.log(S107_Value);
    
    S215_Value = (data.items[0].readings[7].value) * 3 + 3
    console.log(S215_Value);
    
    S118_Value = (data.items[0].readings[8].value) * 3 + 3
    console.log(S118_Value);
    
    S120_Value = (data.items[0].readings[9].value) * 3 + 3
    console.log(S120_Value);
    
    S33_Value = (data.items[0].readings[10].value) * 3 + 3
    console.log(S33_Value);
    
    S71_Value = (data.items[0].readings[11].value) * 3 + 3
    console.log(S71_Value);
    
    S43_Value = (data.items[0].readings[12].value) * 3 + 3
    console.log(S43_Value);
    
    S66_Value = (data.items[0].readings[13].value) * 3 + 3
    console.log(S66_Value);
    
    S112_Value = (data.items[0].readings[14].value) * 3 + 3
    console.log(S112_Value);
    
    S40_Value = (data.items[0].readings[15].value) * 3 + 3
    console.log(S40_Value);
    
    S108_Value = (data.items[0].readings[16].value) * 3 + 3
    console.log(S108_Value);
    
    S113_Value = (data.items[0].readings[17].value) * 3 + 3
    console.log(S113_Value);
    
    S44_Value = (data.items[0].readings[18].value) * 3 + 3
    console.log(S44_Value);
    
    S121_Value = (data.items[0].readings[19].value) * 3 + 3
    console.log(S121_Value);
    
    S35_Value = (data.items[0].readings[20].value) * 3 + 3
    console.log(S35_Value);
    
    S94_Value = (data.items[0].readings[21].value) * 3 + 3
    console.log(S94_Value);
    
    S78_Value = (data.items[0].readings[22].value) * 3 + 3
    console.log(S78_Value);
     
    S106_Value = (data.items[0].readings[23].value) * 3 + 3
    console.log(S106_Value);
     
    S81_Value = (data.items[0].readings[24].value) * 3 + 3
    console.log(S81_Value);
     
    S201_Value = (data.items[0].readings[25].value) * 3 + 3
    console.log(S201_Value);
     
    S202_Value = (data.items[0].readings[26].value) * 3 + 3
    console.log(S202_Value);
     
    S203_Value = (data.items[0].readings[27].value) * 3 + 3
    console.log(S203_Value);
     
    S204_Value = (data.items[0].readings[28].value) * 3 + 3
    console.log(S204_Value);
     
    S205_Value = (data.items[0].readings[29].value) * 3 + 3
    console.log(S205_Value);
     
    S207_Value = (data.items[0].readings[30].value) * 3 + 3
    console.log(S207_Value);
     
    S208_Value = (data.items[0].readings[31].value) * 3 + 3
    console.log(S208_Value);
     
    S209_Value = (data.items[0].readings[32].value) * 3 + 3
    console.log(S209_Value);
     
    S210_Value = (data.items[0].readings[33].value) * 3 + 3
    console.log(S210_Value);
     
    S211_Value = (data.items[0].readings[34].value) * 3 + 3
    console.log(S211_Value);
     
    S212_Value = (data.items[0].readings[35].value) * 3 + 3
    console.log(S212_Value);
     
    S213_Value = (data.items[0].readings[36].value) * 3 + 3
    console.log(S213_Value);
      
    S214_Value = (data.items[0].readings[37].value) * 3 + 3
    console.log(S214_Value);
      
    S216_Value = (data.items[0].readings[38].value) * 3 + 3
    console.log(S216_Value);
      
    S217_Value = (data.items[0].readings[39].value) * 3 + 3
    console.log(S217_Value);
      
    S218_Value = (data.items[0].readings[40].value) * 3 + 3
    console.log(S218_Value);
      
    S219_Value = (data.items[0].readings[41].value) * 3 + 3
    console.log(S219_Value);
      
    S220_Value = (data.items[0].readings[42].value) * 3 + 3
    console.log(S220_Value);
      
    S221_Value = (data.items[0].readings[43].value) * 3 + 3
    console.log(S221_Value);
      
    S222_Value = (data.items[0].readings[44].value) * 3 + 3
    console.log(S222_Value);
      
    S223_Value = (data.items[0].readings[45].value) * 3 + 3
    console.log(S223_Value);
      
    S224_Value = (data.items[0].readings[46].value) * 3 + 3
    console.log(S224_Value);
      
    S226_Value = (data.items[0].readings[47].value) * 3 + 3
    console.log(S226_Value);
      
    S227_Value = (data.items[0].readings[48].value) * 3 + 3
    console.log(S227_Value);
      
    S228_Value = (data.items[0].readings[49].value) * 3 + 3
    console.log(S228_Value);
      
    S230_Value = (data.items[0].readings[50].value) * 3 + 3
    console.log(S230_Value);
      
    S111_Value = (data.items[0].readings[51].value) * 3 + 3
    console.log(S111_Value);
      
    S900_Value = (data.items[0].readings[52].value) * 3 + 3
    console.log(S900_Value);
        
    S84_Value = (data.items[0].readings[53].value) * 3 + 3
    console.log(S84_Value);
        
    S79_Value = (data.items[0].readings[54].value) * 3 + 3
    console.log(S79_Value);
        
    S88_Value = (data.items[0].readings[55].value) * 3 + 3
    console.log(S88_Value);
        
    S89_Value = (data.items[0].readings[56].value) * 3 + 3
    console.log(S89_Value);
        
    S115_Value = (data.items[0].readings[57].value) * 3 + 3
    console.log(S115_Value);
        
    S82_Value = (data.items[0].readings[58].value) * 3 + 3
    console.log(S82_Value);
        
    S24_Value = (data.items[0].readings[59].value) * 3 + 3
    console.log(S24_Value);
        
    S69_Value = (data.items[0].readings[60].value) * 3 + 3
    console.log(S69_Value);
        
    S08_Value = (data.items[0].readings[61].value) * 3 + 3
    console.log(S08_Value);
        
    S116_Value = (data.items[0].readings[62].value) * 3 + 3
    console.log(S116_Value);
        
    S104_Value = (data.items[0].readings[63].value) * 3 + 3
    console.log(S104_Value);

  }
