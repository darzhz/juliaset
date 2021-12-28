const max = 100;
let i =0;
const minVal = -1.5;
const maxVal = 1.12;
let undecided = true;
function setup(){
  createCanvas(windowWidth, windowWidth);
  background(65);
  pixelDensity(1);
  //colorMode(HSB);
  undecided = Math.random() < 0.5;
}
function draw(){
  aO = sin(i);
  bO = undecided?cos(i):0.651;
  i += 0.01;
  loadPixels();
  for(let y = 0;y < height;y++){
    for (let x= 0; x < width; x++) {
      let a = map(x,0,width,minVal,maxVal);
      let b = map(y,0, height,minVal,maxVal);
      //let aO = a;
       //bO = b;
      let n=0;
      while(n<max){
        aa = a*a - b*b;
        bb = 2*a*b;
         if(abs(aa + bb) > 4){
          break;
        }
        a = aa +aO;
        b = bb + bO;
        n++
      }
      let bright = map(n,0,max,0,1);
      bright = map(Math.sqrt(bright),0,1,0,255);
      if(n==max){
        bright = 0;
      }
      let index = (x+y*width)*4;
      pixels[index] = bright/1.25;
      pixels[index+1] = bright/0.5;
      pixels[index+2] = bright/0.75;
      pixels[index+3] = 255;
    }
  }
  updatePixels();
}