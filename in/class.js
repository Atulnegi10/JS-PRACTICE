// class Rectangle{
//   constructor(length,breadth,height){
//     this.length = length;
//     this.breadth = breadth;
//     this.height = height;
//   }

//   volume(){
//     return this.length*this.breadth*this.height;
//   }

// }

// const rect = new Rectangle(2,3,4);
// const vol = rect.volume();
// console.log(vol);

class Shape{
  constructor(color){
    this.color = color;
  }

  area(){
    throw new Error('this method is to be implemented in subclasss');
  }

  paint(){
    console.log('painting with color ${this.color}');
  }

  getdiscription(){
    return 'a shape with color ${this.color}';
  }
}

class Rectangle extends Shape{
  constructor(length,breadth,color){
    super(color);
    this.length = length;
    this.breadth = breadth;
  }

  area(){
    return this.length*this.breadth;
  }

  paint(){
    console.log('painting with color ${this.color}');
  }

  getdiscription(){
    return 'a rectangle with width ${this.width}, length ${this.length} and color ${this.color}';
  }

}

class Circle extends Shape{
  constructor(radius,color){
    super(color);
    this.radius = radius;
  }

  area(){
    return Math.PI*this.radius*this.radius;
  }

  paint(){
    console.log('painting with color ${this.color}');
  }

  getdiscription(){
    return 'a circle with radius ${this.radius} and color ${this.color}';
  }
}

const cir = new Circle(2);
console.log(cir.area());

const now = new Date();
console.log(now.toISOString());

const map = new Map();
map.set('name','atul');
map.set('age','20');
console.log(map.get('name'));