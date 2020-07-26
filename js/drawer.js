class Drawer {

    constructor(w, h, start_x, start_y, COLORS, PARAMS) {
        this.w = w;
        this.h = h;
        this.pos = {x: start_x, y: start_y}
        
        this.angle = 90;
        this.stack = [];

        //colors
        this.COLOR_SEGMENT = COLORS.COLOR_SEGMENT
        this.COLOR_BACKGROUND = COLORS.COLOR_BACKGROUND
        this.COLOR_FLOWER = COLORS.COLOR_FLOWER

        //params
        this.FLOWER_RADIUS = PARAMS.FLOWER_RADIUS

        background(this.COLOR_BACKGROUND)
    }

    left(angle) {this.angle = this.angle + angle;}
    right(angle) {this.angle = this.angle - angle;}
    
    forward(distance, draw=true) {
        var a = (this.angle * PI) / 180
        var x2 = this.pos.x + (Math.cos(a)*distance)
        var y2 = this.pos.y - (Math.sin(a)*distance)

        if(draw) { 
            line(this.pos.x, this.pos.y, x2, y2)
            stroke(this.COLOR_SEGMENT)
        }
        this.pos = {x: x2, y: y2, z: this.pos.z}
    }

    flower(distance) {
        this.forward(distance)
        fill(this.COLOR_FLOWER)
        noStroke()
        circle(this.pos.x, this.pos.y, this.FLOWER_RADIUS)
        let cx = this.pos.x
        let cy = this.pos.y
        fill("#91301F")
    }

    save(name="image") {
        this.stack = [];
        this.pos = createVector(Math.floor(this.w / 2), Math.floor(this.y / 2));
    }
        
    push_state() {this.stack.push([this.angle, this.pos]);}
    
    pop_state() {
        var state = this.stack.pop();
        this.pos = state[1];
        this.angle = state[0];
    }
}

