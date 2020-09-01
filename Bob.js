class Bob {
    constructor(x, y) {
        var options = {
            isStatic: false,
            restitution: 1,
            friction: 0.2,
            density: 1
        }
        this.x = x;
        this.y = y;
        this.r = 40
        this.body = Bodies.circle(this.x, this.y, this.r / 2, options)
        World.add(world, this.body);

    }
    display() {
        var bobPos = this.body.position;
        push();
        translate(bobPos.x, bobPos.y);
        ellipseMode(CENTER)
        fill(255, 0, 255);
        ellipse(0, 0, this.r, this.r);
        pop();
    }

}