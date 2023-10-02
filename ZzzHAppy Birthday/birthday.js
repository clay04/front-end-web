const P12 = Math.PI * 2;
const random = (min, max) => Math.random() * (max - min) + min | 0;
const timestamp = () => new Date().getTime();

class Birthday {
    constructor() {
        this.resize();

        this.fireworks = [];
        this.counter = 0;
    }

    resize() {
        this.width = canvas.width = window.innerWidth;
        let center = this.width / 2 | 0;
        this.spawnA = center - center / 4 | 0;
        this.spawnB = center + center / 4 | 0;

        this.height = canvas.height = window.innerHeight;
        this.spawnC = this.height * 0.1;
        this.spawnD = this.height * 0.1;
    }

    onClick(evt) {
        let x = evt.clientX || (evt.touches && evt.touches[0].pageX);
        let y = evt.clientY || (evt.touches && evt.touches[0].pageY);

        let count = random(3, 5);
        for (let i = 0; i < count; i++) {
            this.fireworks.push(new Firework(random(this.spawnA, this.spawnB), this.height, x, y, random(0, 260), random(30, 110)));
        }

        this.counter = -1;
    }

    update(delta) {
        ctx.globalCompositeOperation = 'hard-light';
        ctx.fillStyle = `rgba(20, 20, 20, ${7 * delta})`;
        ctx.fillRect(0, 0, this.width, this.height);

        ctx.globalCompositeOperation = 'lighter';
        for (let i = this.fireworks.length - 1; i >= 0; i--) {
            const firework = this.fireworks[i];
            firework.update(delta);
            if (firework.dead) {
                this.fireworks.splice(i, 1); // Remove dead fireworks
            }
        }

        this.counter += delta * 3;
        if (this.counter >= 1) {
            this.fireworks.push(new Firework(random(this.spawnA, this.spawnB), this.height, random(0, this.width), this.height, random(0, 360), random(30, 110)));
            this.counter -= 1;
        }
    }
}

class Firework {
    constructor(x, y, targetX, targetY, shade, offsprings) {
        this.dead = false;
        this.offsprings = offsprings;

        this.x = x;
        this.y = y;
        this.targetX = targetX;
        this.targetY = targetY;

        this.shade = shade;
        this.history = [];
        this.explode = false;
    }

    update(delta) {
        if (this.dead) return;

        if (!this.explode) {
            let xDiff = this.targetX - this.x;
            let yDiff = this.targetY - this.y;

            this.x += xDiff * 0.2;
            this.y += yDiff * 0.2;

            if (Math.abs(xDiff) < 10 && Math.abs(yDiff) < 10) {
                this.explode = true;
                this.history = [];
                for (let i = 0; i < 100; i++) {
                    this.history.push([this.x, this.y]);
                }
            }
        } else {
            if (this.history.length > 0) {
                const [hx, hy] = this.history.pop();
                this.x = hx;
                this.y = hy;
            } else {
                this.dead = true;
            }
        }
    }
}

let canvas = document.getElementById("birthday");
let ctx = canvas.getContext('2d');

let then = timestamp();

let birthday = new Birthday();
window.onresize = () => birthday.resize();
document.onclick = evt => birthday.onClick(evt);
document.ontouchstart = evt => birthday.onClick(evt);

(function loop() {
    requestAnimationFrame(loop);

    let now = timestamp();
    let delta = now - then;

    then = now;
    birthday.update(delta / 1000);
})();
