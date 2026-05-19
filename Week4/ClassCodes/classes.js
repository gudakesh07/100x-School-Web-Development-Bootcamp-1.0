class Rectangle{
    constructor(width,height,color){
        this.width = width;
        this.height = height;
        this.color = color;
    }

    area(){
        return this.width * this.height
    }

    perimeter(){
        return 2*(this.width * this.height)
    }

    paint(){
        console.log(`The color of the Rectangle is ${this.color}`)
    }

    static whoami(){
        return "This is an static function!!"
    }
}

const rect = new Rectangle(2,3, "red")

console.log(rect.area())
console.log(rect.perimeter())
rect.paint()


const d = new Date();

console.log(d.getDate())