// creatHeader and append to header style
let creatHeader = document.createElement("header");
creatHeader.style.cssText = "display: flex; justify-content:space-between;margin:0 5px"
// create h2 and append textcontent in h2
let creatH2 = document.createElement("h2");
creatH2.textContent = "Alhussini";
creatH2.style.cssText = "color: green;"
// create div and span and appendclild span in div
let createdivheader = document.createElement("div");
createdivheader.style.cssText = "margin-top: 25px;"
createdivheader.innerHTML = "<span>Home</span> <span>About</span> <span>Service</span> <span>Contact</span>";
// append creatH2 in creatHeader
creatHeader.append(creatH2);
// append createdivheader in creatHeader
creatHeader.append(createdivheader);
// append creatHeader in body
document.body.appendChild(creatHeader);
// Create a variable to run the loop on
let prodect = 0;
let createDivmain = document.createElement("main");
createDivmain.style.cssText = "background-color:rgba(103, 106, 106, 1);width: 100%;display: flex;justify-content: space-between;flex-wrap: wrap;margin:0px;border-radius: 5px;";
document.body.appendChild(createDivmain)
// Create a loop to perform an operation more than once
while(prodect< 28){
    prodect +=1;
    let divnumber = document.createElement("div");
    divnumber.innerHTML = `${prodect}<span>prodect</span>`;
    divnumber.style.cssText = "width: 300px;max-width: 30%;height: 40px;align-items: center;text-align: center;margin:10px 5px;background-color: aqua;border-radius: 5px;";
    createDivmain.append(divnumber)
}
// Create a footer and then add it to the body page
let creatfooter = document.createElement("footer");
creatfooter.textContent = "Husseini Development 2025"
creatfooter.style.cssText = "width: 100%;background-color:rgba(13, 49, 230, 1);text-align: center;margin:5px 0px;padding:16px 0px;border-radius: 5px;";
document.body.appendChild(creatfooter)