  // challenge 1-2 and 7
  function BMI(m, h) {
      return m / (h * h);
  }


  let markHightBMI = true;
  let m_Mark = 78;
  let h_Mark = 1.69;
  let m_John = 92;
  let h_John = 1.95;
  let BMI_Mark = BMI(m_Mark, h_Mark);
  let BMI_John = BMI(m_John, h_John);
  console.log("Mark's BMI: ", BMI_Mark);
  console.log("John's BMI: ", BMI_John);
  if (BMI_Mark > BMI_John)
      markHightBMI = true;
  else
      markHightBMI = false;
  console.log(markHightBMI);
  if (markHightBMI == true)
      console.log("Mark's BMI(", BMI_Mark, ") is higher than John's!(", BMI_John, ")");
  else
      console.log("John's BMI(", BMI_John, ") is higher than Mark's(", BMI_Mark, ")");

  class user{
    constructor(fullname,mass,height){
        this.fullname = fullname;
        this.mass = mass;
        this.height = height;
    }
}
    let user1 = new user("Mark Miller",78,1.69);
    let user2 = new user("John Smith",92,1.95);
    let BMI_Mark_7 = BMI(user1.mass,user1.height);
    let BMI_John_7 = BMI(user2.mass,user2.height);
    if (BMI_Mark_7 > BMI_John_7)
      console.log("Mark's BMI(", BMI_Mark_7, ") is higher than John's!(", BMI_John_7, ")");
    else
      console.log("John's BMI(", BMI_John_7, ") is higher than Mark's(", BMI_Mark_7, ")");


  //challenge 3
  function average(a, b, c) {
      return (a + b + c) / 3;
  }
  let AVR_Scores_Dolphins = average(96, 108, 89);
  let AVR_Scores_Koalas = average(88, 91, 110);
  console.log("Dolphins's Average Scores: ", AVR_Scores_Dolphins);
  console.log("Koalas's Average Scores: ", AVR_Scores_Koalas);

  if (AVR_Scores_Dolphins > AVR_Scores_Koalas)
      console.log("The winner is Dolphins~");
  else if (AVR_Scores_Dolphins < AVR_Scores_Koalas)
      console.log("The winner is Koalas~");
  else
      console.log("The winner are Dolphins and Koalas beacause they have the same average score");

  //challenge 4 -6
  function tip(b) {
      let tip = 0;
      if (b >= 50 && b <= 300)
          tip = b * 0.15;
      else
          tip = b * 0.2;
      return tip;
  }
  let bill = [275, 40, 430,100,125,555,44];

  console.log("The bill was", bill[0], "The tip was", tip(bill[0]), "The total value", bill[0] + tip(bill[0]));
  console.log("The bill was", bill[1], "The tip was", tip(bill[1]), "The total value", bill[1] + tip(bill[1]));
  console.log("The bill was", bill[2], "The tip was", tip(bill[2]), "The total value", bill[2] + tip(bill[2]));

  console.log("The bill was", bill[3], "The tip was", tip(bill[3]), "The total value", bill[3] + tip(bill[3]));
  let ar_tip =[tip(bill[0]),tip(bill[1]),tip(bill[2]),tip(bill[3]),tip(bill[4]),tip(bill[5]),tip(bill[6])];
  let ar_total = [bill[0]+ar_tip[0],bill[1]+ar_tip[1],bill[2]+ar_tip[2],bill[3]+ar_tip[3],bill[4]+ar_tip[4],bill[5]+ar_tip[5],bill[6]+ar_tip[6]];
  console.log(ar_tip);
  console.log(ar_total);
  //challenge 5
  function calcAverage(a,b,c){
    return (a+b+c)/3;
  }
  let calcAVR_Scores_Dolphins = calcAverage(44,23,71);
  let calcAVR_Scores_Koalas = calcAverage(65,54,49);
  let calcAVR_Scores_Dolphins2 = calcAverage(85,54,41);
  let calcAVR_Scores_Koalas2 = calcAverage(23,34,27);

  
  function checkWinner(a,b){
    if(a>=b*2)
        console.log("Dolphins thắng(",a," vs ",b,")");
    else if(b>=a*2)
        console.log("Koalas thắng(",a," vs ",b,")");
    else
        console.log("no team win(",a," vs ",b,")");
    return;
  }
  checkWinner(calcAVR_Scores_Dolphins,calcAVR_Scores_Koalas);
  checkWinner(calcAVR_Scores_Dolphins2,calcAVR_Scores_Koalas2);

 // challenge 8
 let ar_bill = [22,295,176,440,37,105,10,1100,86,52];
 let ar_tip_c8 = [];
 let ar_total_c8 = [];
 let i;
 let n = ar_bill.length;
 for(i=0;i<n;i++){
    ar_tip_c8[i] = tip(ar_bill[i]);
    ar_tip_c8.push(tip(ar_bill[i]));
    ar_total_c8.push(ar_tip_c8[i] + ar_bill[i]);
 }
 console.log(ar_tip_c8);
 console.log(ar_total_c8);

 // challenge 9
 function printForecast(a){
    let n = a.length;
    let i;
    for(i=0;i<n;i++){
        console.log(a[i],"trong ",i+1,"days...");
    }
    return;
 }
 let testF=[17,21,23];
 let testF2=[12,5,-5,0,4];
 printForecast(testF);
 printForecast(testF2);



  