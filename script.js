class Character{
    constructor(image,name,energy,id){
        this.name=name;
        this.energy=energy;
        this.id=id;
        this.image=image;
    }
    display = function(opponentsEnergy){
        document.getElementById("img" + this.id).innerHTML=`<img class = "character" src="${this.image}"alt="">`;

        if (opponentsEnergy <= 0) {
            document.getElementById(this.id).innerHTML=`Name: ${this.name} <br> Energy: 0`;
        } else {
            document.getElementById(this.id).innerHTML=`Name: ${this.name} <br> Energy: ${this.energy}`;
        }
    }

    attack = function(opponent,item){
        var newEnergy = opponent.energy - item.imagic;
        opponent.energy = newEnergy;
        console.log(opponent.energy);

        opponent.display(opponent.energy);

        document.getElementById('console').innerHTML=
            `<p>${this.name} is attacking ${opponent.name} with a </p> <img src="${item.img}">`;

        if(opponent.energy <= 0){
            resetGame(this);
        } 

    }
}

//display GAME OVER MESSAGE
//display Yoshi is attacking toad with an item (image) ...

const c1 = new Character("img/yoshi.jpeg","Yoshi",100,"c1");
const c2 = new Character("img/toad.jpeg","Toad",100,"c2");

c1.display();
c2.display();


class Item{
    constructor(iname,imagic,img){
        this.iname=iname;
        this.imagic=imagic;
        this.img=img;
    }
}

const item1 = new Item('redshell',20,'img/shell red.jpeg');
const item2 = new Item('greenshell',10,'img/shell-green.jpeg');
const item3 = new Item('bluespike', 8,'img/shell-blue spike.jpeg');

var items = [item1,item2,item3];

function select(){
    let selection = Math.floor(Math.random()*3);
    return items[selection];
}

function resetGame(character) {
    console.log(character.name + " Won");
    document.getElementById('console').innerHTML += `<p> Game Over - ${character.name} You Won! </p>`;
    c1.energy = 100;
    c2.energy = 100;

    alert(character.name + " Won");
}



