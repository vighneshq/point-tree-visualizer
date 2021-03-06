let tree;

function setup()
{
    createCanvas(1300, 1300);
    tree = new QuadTree(new Bound2D(width/2, height/2, width/2, height/2), 0);
    drawTree();
}

function drawTree()
{
    clear();
    background(0);
    tree.show();
}

function draw()
{
    if(mouseIsPressed)
    {
        tree.insert(new Point2D(mouseX, mouseY));
        drawTree();
    }
}

function loadPoints()
{
    loadStrings("input.txt", (input) =>
    {
        for(let line of input)
        {
            inputPoint = line.split("\t");
            x = parseFloat(inputPoint[0]);
            y = parseFloat(inputPoint[1]);
            tree.insert(new Point2D(x*width/2+width/2, y*height/2+height/2));
        }
        drawTree();
    });
}

const load = document.querySelector("#load");
load.addEventListener("click", loadPoints);

const zeroBalance = document.querySelector("#zeroBalance");
zeroBalance.addEventListener("click", () => {
    let repeat = false;
    do
    {
        repeat = tree.zeroBalance();
    }
    while(repeat);
    drawTree();
});

const oneBalance = document.querySelector("#oneBalance");
oneBalance.addEventListener("click", () => {
    let repeat = false;
    do
    {
        repeat = tree.oneBalance();
    }
    while(repeat);
    drawTree();
});

const clean = document.querySelector("#clean");
clean.addEventListener("click", () => {
    tree = new QuadTree(new Bound2D(width/2, height/2, width/2, height/2), 0);
    drawTree();
});
