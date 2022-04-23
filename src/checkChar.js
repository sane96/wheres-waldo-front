import { call } from "./call";
const checkArr = [];

const check = async (xCheck, yCheck) => {
    
    const charPosition = {
      waldo: {
        id: 1,
        xmin: 669,
        xmax: 699,
        ymin: 363,
        ymax: 393
      },
      wanda: {
        id: 2,
        xmin: 377,
        xmax: 407,
        ymin: 201,
        ymax: 231 
      },
      odlaw: {
        id: 3,
        xmin: 240,
        xmax: 270,
        ymin: 313,
        ymax: 343
      },
      whitebeard: {
        id: 4,
        xmin: 40,
        xmax: 70,
        ymin: 372,
        ymax: 402
      }
    };
    const chars = Object.keys(charPosition);

    chars.forEach((key, index) => {
    
      if(charPosition[key].xmin <= xCheck && charPosition[key].xmax >= xCheck && charPosition[key].ymin <= yCheck && charPosition[key].ymax >= yCheck) {
        console.log(charPosition[key].id);
        if(checkArr.includes(charPosition[key].id)) return;
         // let charName = await call(value.id);
        // console.log(`You found ${charName}!`);
        checkArr.push(charPosition[key].id)
        console.log(checkArr);
      } else return;
    });
    
    return;
    
  };
  
export { check };