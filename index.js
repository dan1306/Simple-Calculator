let display = $(".display")


$(".button").click((e) => {
  let text = e.target.innerText


  switch (text) {
    case "=":
    try{
      solu = eval(display.text())
      display.text(solu)
    } catch{
      display.text("ERROR")
    }

      break;
    case "←":
      let texts = display.text()
      let news = texts.slice(0, -1)
      // console.log(texts)
      display.text(news)
      break;
    case "C":
      display.text("")
      break;
    default:
      display.append(text)
  }

  // if (text == "=") {
  //   solu = eval(display.text())
  //   display.text(solu)
  // } else if {} else {
  //   display.append(text)
  // }


  // switch (text) {
  //   case x:
  //     // code block
  //     break;
  //   case y:
  //     // code block
  //     break;
  //   default:
  //     display.text(text)
  //     // code block
  // }
})
