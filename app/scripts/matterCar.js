(function (window) {
    function MatterCar(config) {

        var defaults = {
            canvas: {
                container: 'matter-car',
                width: 640,
                height: 400

            },
            car: {
                xx: 320,
                yy: 100,
                width: 600,
                height: 197,
                chassisSprite: false,
                wheels: {
                    wheelSize: 50,
                    wheelBase: 50,
                    wheelAOffset: -185,
                    wheelBOffset: 180,
                    wheelYOffset: 90,
                    wheelSprite: false
                }
            },
            terrain: {
                xx: 320,
                yy: 1470,
                vertices: [{ x: 0, y: 8 }, { x: 30, y: 277 }, { x: 60, y: 368 }, { x: 90, y: 468 }, { x: 120, y: 521 }, { x: 150, y: 589 }, { x: 180, y: 620 }, { x: 210, y: 685 }, { x: 240, y: 709 }, { x: 270, y: 756 }, { x: 300, y: 793 }, { x: 330, y: 816 }, { x: 360, y: 856 }, { x: 390, y: 875 }, { x: 420, y: 910 }, { x: 450, y: 922 }, { x: 480, y: 969 }, { x: 510, y: 977 }, { x: 540, y: 1015 }, { x: 570, y: 1020 }, { x: 600, y: 1036 }, { x: 630, y: 1061 }, { x: 660, y: 1080 }, { x: 690, y: 1089 }, { x: 720, y: 1104 }, { x: 750, y: 1118 }, { x: 780, y: 1135 }, { x: 810, y: 1137 }, { x: 840, y: 1150 }, { x: 870, y: 1166 }, { x: 900, y: 1162 }, { x: 930, y: 1163 }, { x: 960, y: 1186 }, { x: 990, y: 1182 }, { x: 1020, y: 1190 }, { x: 1050, y: 1192 }, { x: 1080, y: 1204 }, { x: 1110, y: 1192 }, { x: 1140, y: 1203 }, { x: 1170, y: 1209 }, { x: 1200, y: 1214 }, { x: 1230, y: 1193 }, { x: 1260, y: 1199 }, { x: 1290, y: 1196 }, { x: 1320, y: 1194 }, { x: 1350, y: 1178 }, { x: 1380, y: 1176 }, { x: 1410, y: 1175 }, { x: 1440, y: 1164 }, { x: 1470, y: 1182 }, { x: 1500, y: 1174 }, { x: 1530, y: 1148 }, { x: 1560, y: 1149 }, { x: 1590, y: 1137 }, { x: 1620, y: 1116 }, { x: 1650, y: 1125 }, { x: 1680, y: 1098 }, { x: 1710, y: 1095 }, { x: 1740, y: 1064 }, { x: 1770, y: 1059 }, { x: 1800, y: 1040 }, { x: 1830, y: 1031 }, { x: 1860, y: 994 }, { x: 1890, y: 990 }, { x: 1920, y: 953 }, { x: 1950, y: 945 }, { x: 1980, y: 921 }, { x: 2010, y: 871 }, { x: 2040, y: 862 }, { x: 2070, y: 837 }, { x: 2100, y: 795 }, { x: 2130, y: 764 }, { x: 2160, y: 707 }, { x: 2190, y: 664 }, { x: 2220, y: 630 }, { x: 2250, y: 575 }, { x: 2280, y: 520 }, { x: 2310, y: 461 }, { x: 2340, y: 360 }, { x: 2370, y: 271 }, { x: 2400, y: 3 }, { x: 2370, y: -254 }, { x: 2340, y: -387 }, { x: 2310, y: -468 }, { x: 2280, y: -524 }, { x: 2250, y: -565 }, { x: 2220, y: -620 }, { x: 2190, y: -684 }, { x: 2160, y: -717 }, { x: 2130, y: -770 }, { x: 2100, y: -780 }, { x: 2070, y: -811 }, { x: 2040, y: -857 }, { x: 2010, y: -897 }, { x: 1980, y: -896 }, { x: 1950, y: -932 }, { x: 1920, y: -970 }, { x: 1890, y: -977 }, { x: 1860, y: -1003 }, { x: 1830, y: -1016 }, { x: 1800, y: -1049 }, { x: 1770, y: -1064 }, { x: 1740, y: -1057 }, { x: 1710, y: -1080 }, { x: 1680, y: -1103 }, { x: 1650, y: -1123 }, { x: 1620, y: -1110 }, { x: 1590, y: -1142 }, { x: 1560, y: -1133 }, { x: 1530, y: -1149 }, { x: 1500, y: -1174 }, { x: 1470, y: -1183 }, { x: 1440, y: -1174 }, { x: 1410, y: -1193 }, { x: 1380, y: -1173 }, { x: 1350, y: -1193 }, { x: 1320, y: -1192 }, { x: 1290, y: -1207 }, { x: 1260, y: -1199 }, { x: 1230, y: -1212 }, { x: 1200, y: -1187 }, { x: 1170, y: -1188 }, { x: 1140, y: -1198 }, { x: 1110, y: -1186 }, { x: 1080, y: -1189 }, { x: 1050, y: -1182 }, { x: 1020, y: -1193 }, { x: 990, y: -1171 }, { x: 960, y: -1187 }, { x: 930, y: -1179 }, { x: 900, y: -1148 }, { x: 870, y: -1141 }, { x: 840, y: -1134 }, { x: 810, y: -1139 }, { x: 780, y: -1125 }, { x: 750, y: -1117 }, { x: 720, y: -1084 }, { x: 690, y: -1076 }, { x: 660, y: -1059 }, { x: 630, y: -1041 }, { x: 600, y: -1034 }, { x: 570, y: -1013 }, { x: 540, y: -1011 }, { x: 510, y: -982 }, { x: 480, y: -959 }, { x: 450, y: -923 }, { x: 420, y: -902 }, { x: 390, y: -877 }, { x: 360, y: -861 }, { x: 330, y: -825 }, { x: 300, y: -794 }, { x: 270, y: -746 }, { x: 240, y: -732 }, { x: 210, y: -691 }, { x: 180, y: -633 }, { x: 150, y: -566 }, { x: 120, y: -521 }, { x: 90, y: -463 }, { x: 60, y: -361 }, { x: 30, y: -267 }],
                fillStyle: '#070304',
                strokeStyle: '#3B2627'
            }
        }

        this.options = $.extend({}, defaults, config);
        this.animationUphill = true;
        this.animationFrameCount = true;
    }

    MatterCar.prototype = {
        build: function () {
            var self = this;

            this.engine = Matter.Engine.create({
                velocityIterations: 1
            });
             
            this.render = Matter.Render.create({
                engine : this.engine,
                element: document.getElementById(this.options.canvas.container),
                options: {
                    width: this.options.canvas.width,
                    height: this.options.canvas.height,
                    hasBounds: true
                }
            });

            this.group = Matter.Body.nextGroup(true);

            this.car = Matter.Composite.create({ label: 'Car' });
            this.body = Matter.Bodies.rectangle(this.options.car.xx, this.options.car.yy, this.options.car.width, this.options.car.height, {
                collisionFilter: {
                    group: this.group
                },
                friction: 0.01,
                chamfer: {
                    radius: 10
                },
                render: {
                    strokeStyle: '#ffffff',
                    sprite:
                        {
                            texture: this.options.car.chassisSprite
                        }
                }
            });

            var wheelA = Matter.Bodies.circle(this.options.car.xx + this.options.car.wheels.wheelAOffset, this.options.car.yy + this.options.car.wheels.wheelYOffset, this.options.car.wheels.wheelSize, {
                collisionFilter: {
                    group: this.group
                },
                friction: 0.99,
                density: 0.01,
                render: {
                    strokeStyle: '#ffffff',
                    sprite:
                        {
                            texture: this.options.car.wheels.wheelSprite
                        }
                }
            });

            var wheelB = Matter.Bodies.circle(this.options.car.xx + this.options.car.wheels.wheelBOffset, this.options.car.yy + this.options.car.wheels.wheelYOffset, this.options.car.wheels.wheelSize, {
                collisionFilter: {
                    group: this.group
                },
                friction: 0.99,
                density: 0.01,
                render: {
                    strokeStyle: '#ffffff',
                    sprite:
                        {
                            texture: this.options.car.wheels.wheelSprite
                        }
                }
            });

            var axelA = Matter.Constraint.create({
                bodyA: this.body,
                pointA: { x: this.options.car.wheels.wheelAOffset, y: this.options.car.wheels.wheelYOffset },
                bodyB: wheelA,
                stiffness: 0.2,
                render: {
                    visible: false
                }
            });

            var axelB = Matter.Constraint.create({
                bodyA: this.body,
                pointA: { x: this.options.car.wheels.wheelBOffset, y: this.options.car.wheels.wheelYOffset },
                bodyB: wheelB,
                stiffness: 0.2,
                render: {
                    visible: false
                }
            });

            Matter.Composite.addBody(this.car, this.body);
            Matter.Composite.addBody(this.car, wheelA);
            Matter.Composite.addBody(this.car, wheelB);
            Matter.Composite.addConstraint(this.car, axelA);
            Matter.Composite.addConstraint(this.car, axelB);

            this.terrain = Matter.Bodies.fromVertices(this.options.terrain.xx, this.options.terrain.yy, this.options.terrain.vertices, {
                render: {
                    lineWidth:3,
                    fillStyle: this.options.terrain.fillStyle,
                    strokeStyle: this.options.terrain.strokeStyle
                },
                density: 100,
                isStatic: true
            });

            this.carBody = this.car.bodies[0];
            this.frontWheel = this.car.bodies[1];
            this.rearWheel = this.car.bodies[2];

            //this.engine.positionIterations = 2;
            this.render.options.wireframes = false;
            this.render.options.background = 'transparent';
            Matter.World.add(this.engine.world, [this.car]);
            Matter.World.add(this.engine.world, [this.terrain], true);

            Matter.Render.run(this.render);
            Matter.Engine.update(this.engine, 16.666);

        },
        gameLoop: function () {
            var self = this;
            if (self.carBody.position.x > Math.floor(self.options.canvas.width / 2) + 2) {
                Matter.Body.setVelocity(self.carBody, { x: -1, y: self.carBody.velocity.y });
            } else if (self.carBody.position.x < Math.floor(self.options.canvas.width / 2) - 2) {
                Matter.Body.setVelocity(self.carBody, { x: 1, y: self.carBody.velocity.y });
            } else {
                Matter.Body.setVelocity(self.carBody, { x: 0, y: self.carBody.velocity.y });
            }



            if (self.animationUphill) {
                if (self.animationFrameCount <= 60) {



                } else if (self.animationFrameCount > 60 && self.animationFrameCount <= 180) {

                    Matter.Body.rotate(self.frontWheel, -0.02);
                    Matter.Body.rotate(self.rearWheel, -0.02);
                    Matter.Body.rotate(self.terrain, 0.001);

                } else if (self.animationFrameCount > 180 && self.animationFrameCount <= 300) {

                    Matter.Body.rotate(self.frontWheel, -0.04);
                    Matter.Body.rotate(self.rearWheel, -0.04);
                    Matter.Body.rotate(self.terrain, 0.002);
                } else if (self.animationFrameCount > 300 && self.animationFrameCount <= 360) {

                    Matter.Body.rotate(self.frontWheel, -0.02);
                    Matter.Body.rotate(self.rearWheel, -0.02);
                    Matter.Body.rotate(self.terrain, 0.001);
                } else {

                    self.animationFrameCount = 0;
                }
                self.animationFrameCount++;

            } else {

                Matter.Body.rotate(self.frontWheel, -0.04);
                Matter.Body.rotate(self.rearWheel, -0.04);
                Matter.Body.rotate(self.terrain, 0.002);
            }


            Matter.Engine.update(self.engine, 16.666);
            self.gameLoopRunner = requestAnimationFrame(function () {
                self.gameLoop();
            });
        },
        run: function () {
            var self = this;
            this.gameLoopRunner = requestAnimationFrame(function () {
                self.gameLoop();
            });
        },
        stop: function () {
            cancelAnimationFrame(this.gameLoopRunner);
        }
    }

    window.MatterCar = MatterCar;
}(window));