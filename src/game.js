import { clear } from "./clear";
import { check } from "./checkChar";
import "./styles.css";

function game(){
  clear();
 
  const container = document.getElementById('container');
  
  
  const content = document.createElement('div');
  content.classList.add('content');
  container.append(content);

  const allpeople = document.createElement('div');
  allpeople.classList.add("allpeople");
  const waldo = document.createElement('img');
  waldo.src = "../dist/images/waldo.png";
  waldo.classList.add("nav_pic");
  const wanda = document.createElement('img');
  wanda.src = "../dist/images/wanda.png";
  wanda.classList.add("nav_pic");
  const odlaw = document.createElement('img');
  odlaw.src = "../dist/images/odlaw.png";
  odlaw.classList.add("nav_pic");
  const magic = document.createElement('img');
  magic.src = "../dist/images/magic.png"; 
  magic.classList.add("nav_pic"); 
  allpeople.appendChild(waldo);
  allpeople.appendChild(wanda);
  allpeople.appendChild(odlaw);
  allpeople.appendChild(magic);
  content.appendChild(allpeople);

  const gamePictureContainer = document.createElement('div');
  gamePictureContainer.classList.add("game-picture-container");


  const gamePicture = document.createElement('img');
  gamePicture.src="../dist/images/snow.jpg";
  gamePicture.classList.add("game-picture");

  gamePictureContainer.appendChild(gamePicture);
  content.appendChild(gamePictureContainer);

  gamePicture.addEventListener("click", async(e) => {
    let rect = e.target.getBoundingClientRect();
    let x = Math.floor(e.clientX - rect.left); //x position within the element.
    let y = Math.floor(e.clientY - rect.top);  //y position within the element.
  
    await check(x, y);

    
  })


  return container; //content.appendChild(container);


}
 export { game };