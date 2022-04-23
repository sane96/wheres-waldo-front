import { game } from './game.js'

function home(){
  const container = document.getElementById('container')

  const content = document.createElement('div');
  content.classList.add('content');
  container.append(content);

  const headline = document.createElement('h2');
  headline.innerHTML = "Let's find Wally and company";
  content.appendChild(headline);

  const homePicContainer = document.createElement('div');
  homePicContainer.classList.add('home-pic-container');
  content.append(homePicContainer);

  const homePic = document.createElement('img');
  homePic.src="../dist/images/wheres-wally.jpg";
  homePic.classList.add('home-pic');
  homePicContainer.appendChild(homePic);

  const playBtn = document.createElement("button");
  playBtn.innerHTML = "Let's Play";
  playBtn.classList.add('btn');
  content.append(playBtn)
  
  playBtn.addEventListener("click", function(){game()});

  return content;

}
 export { home };