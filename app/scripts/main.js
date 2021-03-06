(function () {
    $(function () {
        var car = new MatterCar({
            canvas: {
                container: 'matter-car',
                width: 800,
                height: 540

            },
            car: {
                xx: 380,
                yy: 120,
                width: 850,
                height: 195,
                chassisSprite: "/images/Rav4_Body.png",
                wheels: {
                    wheelSize: 60,
                    wheelBase: 80,
                    wheelAOffset: -230, // left wheel
                    wheelBOffset: 222, // right wheel
                    wheelYOffset: 100,
                    wheelSprite: "/images/Rav4_Wheel.png"
                }
            },
            terrain: {
                xx: 400,
                yy: 1550,
                vertices: [
                    { x: 0, y: 8 }, { x: 30, y: 277 }, { x: 60, y: 368 }, { x: 90, y: 468 }, { x: 120, y: 521 }, { x: 150, y: 589 }, { x: 180, y: 620 }, { x: 210, y: 685 }, { x: 240, y: 709 }, { x: 270, y: 756 }, { x: 300, y: 793 }, { x: 330, y: 816 }, { x: 360, y: 856 }, { x: 390, y: 875 }, { x: 420, y: 910 }, { x: 450, y: 922 }, { x: 480, y: 969 }, { x: 510, y: 977 }, { x: 540, y: 1015 }, { x: 570, y: 1020 }, { x: 600, y: 1036 }, { x: 630, y: 1061 }, { x: 660, y: 1080 }, { x: 690, y: 1089 }, { x: 720, y: 1104 }, { x: 750, y: 1118 }, { x: 780, y: 1135 }, { x: 810, y: 1137 }, { x: 840, y: 1150 }, { x: 870, y: 1166 }, { x: 900, y: 1162 }, { x: 930, y: 1163 }, { x: 960, y: 1186 }, { x: 990, y: 1182 }, { x: 1020, y: 1190 }, { x: 1050, y: 1192 }, { x: 1080, y: 1204 }, { x: 1110, y: 1192 }, { x: 1140, y: 1203 }, { x: 1170, y: 1209 }, { x: 1200, y: 1214 }, { x: 1230, y: 1193 }, { x: 1260, y: 1199 }, { x: 1290, y: 1196 }, { x: 1320, y: 1194 }, { x: 1350, y: 1178 }, { x: 1380, y: 1176 }, { x: 1410, y: 1175 }, { x: 1440, y: 1164 }, { x: 1470, y: 1182 }, { x: 1500, y: 1174 }, { x: 1530, y: 1148 }, { x: 1560, y: 1149 }, { x: 1590, y: 1137 }, { x: 1620, y: 1116 }, { x: 1650, y: 1125 }, { x: 1680, y: 1098 }, { x: 1710, y: 1095 }, { x: 1740, y: 1064 }, { x: 1770, y: 1059 }, { x: 1800, y: 1040 }, { x: 1830, y: 1031 }, { x: 1860, y: 994 }, { x: 1890, y: 990 }, { x: 1920, y: 953 }, { x: 1950, y: 945 }, { x: 1980, y: 921 }, { x: 2010, y: 871 }, { x: 2040, y: 862 }, { x: 2070, y: 837 }, { x: 2100, y: 795 }, { x: 2130, y: 764 }, { x: 2160, y: 707 }, { x: 2190, y: 664 }, { x: 2220, y: 630 }, { x: 2250, y: 575 }, { x: 2280, y: 520 }, { x: 2310, y: 461 }, { x: 2340, y: 360 }, { x: 2370, y: 271 }, { x: 2400, y: 3 }, { x: 2370, y: -254 }, { x: 2340, y: -387 }, { x: 2310, y: -468 }, { x: 2280, y: -524 }, { x: 2250, y: -565 }, { x: 2220, y: -620 }, { x: 2190, y: -684 }, { x: 2160, y: -717 }, { x: 2130, y: -770 }, { x: 2100, y: -780 }, { x: 2070, y: -811 }, { x: 2040, y: -857 }, { x: 2010, y: -897 }, { x: 1980, y: -896 }, { x: 1950, y: -932 }, { x: 1920, y: -970 }, { x: 1890, y: -977 }, { x: 1860, y: -1003 }, { x: 1830, y: -1016 }, { x: 1800, y: -1049 }, { x: 1770, y: -1064 }, { x: 1740, y: -1057 }, { x: 1710, y: -1080 }, { x: 1680, y: -1103 }, { x: 1650, y: -1123 }, { x: 1620, y: -1110 }, { x: 1590, y: -1142 }, { x: 1560, y: -1133 }, { x: 1530, y: -1149 }, { x: 1500, y: -1174 }, { x: 1470, y: -1183 }, { x: 1440, y: -1174 }, { x: 1410, y: -1193 }, { x: 1380, y: -1173 }, { x: 1350, y: -1193 }, { x: 1320, y: -1192 }, { x: 1290, y: -1207 }, { x: 1260, y: -1199 }, { x: 1230, y: -1212 }, { x: 1200, y: -1187 }, { x: 1170, y: -1188 }, { x: 1140, y: -1198 }, { x: 1110, y: -1186 }, { x: 1080, y: -1189 }, { x: 1050, y: -1182 }, { x: 1020, y: -1193 }, { x: 990, y: -1171 }, { x: 960, y: -1187 }, { x: 930, y: -1179 }, { x: 900, y: -1148 }, { x: 870, y: -1141 }, { x: 840, y: -1134 }, { x: 810, y: -1139 }, { x: 780, y: -1125 }, { x: 750, y: -1117 }, { x: 720, y: -1084 }, { x: 690, y: -1076 }, { x: 660, y: -1059 }, { x: 630, y: -1041 }, { x: 600, y: -1034 }, { x: 570, y: -1013 }, { x: 540, y: -1011 }, { x: 510, y: -982 }, { x: 480, y: -959 }, { x: 450, y: -923 }, { x: 420, y: -902 }, { x: 390, y: -877 }, { x: 360, y: -861 }, { x: 330, y: -825 }, { x: 300, y: -794 }, { x: 270, y: -746 }, { x: 240, y: -732 }, { x: 210, y: -691 }, { x: 180, y: -633 }, { x: 150, y: -566 }, { x: 120, y: -521 }, { x: 90, y: -463 }, { x: 60, y: -361 }, { x: 30, y: -267 }
                ],
                fillStyle: '#773333',
                strokeStyle: '#99ffff'
            }

        });

        car.build();
        car.run();
    })
})();
