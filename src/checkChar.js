import { call } from "./call";

const check = async (xCheck, yCheck) => {
    const checkArr = [];
    const charPosition = {
      waldo: {
        id: 6,
        xmin: 669,
        xmax: 699,
        ymin: 363,
        ymax: 393
      },
      wanda: {
        id: 7,
        xmin: 377,
        xmax: 407,
        ymin: 201,
        ymax: 231 
      },
      odlaw: {
        id: 8,
        xmin: 240,
        xmax: 270,
        ymin: 313,
        ymax: 343
      },
      whitebeard: {
        id: 9,
        xmin: 40,
        xmax: 70,
        ymin: 372,
        ymax: 402
      }
    };
    for(let [key, value] of Object.entries(charPosition)){
      if(value.xmin <= xCheck && value.xmax >= xCheck && value.ymin <= yCheck && value.ymax >= yCheck) {
        if(checkArr.includes(value.id)) return;
        console.log('hey');
        let charName = await call(value.id);
        console.log(`You found ${charName}!`);
        checkArr.push(value.id);
        return;

      } else return;
    }

    return;
    
  };
  
export { check };