  // challenge 1-2
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

  //challenge 4
  function tip(b) {
      let tip = 0;
      if (b >= 50 && b <= 300)
          tip = b * 0.15;
      else
          tip = b * 0.2;
      return tip;
  }
  let bill = [275, 40, 430];

  console.log("The bill was", bill[0], "The tip was", tip(bill[0]), "The total value", bill[0] + tip(bill[0]));
  console.log("The bill was", bill[1], "The tip was", tip(bill[1]), "The total value", bill[1] + tip(bill[1]));
  console.log("The bill was", bill[2], "The tip was", tip(bill[2]), "The total value", bill[2] + tip(bill[2]));

  //challenge 5