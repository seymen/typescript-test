var log = require('./log');
var np = { name: 'bob', x: 1, y: 2 };
// Union types ////// ////// ////// ////// ////// ////// ////// ////// ////// //////
var x = 2;
log(typeof x);
var area;
area = function (s) {
    switch (s.kind) {
        case 'square':
            return s.size * s.size;
        case 'rectangle':
            return s.width * s.height;
    }
};
var square = { kind: 'square', size: 5 };
log(area(square));
// Deconstructuring types
var f;
f = function (_a) {
    var x = _a.x, y = _a.y;
    return x + y;
};
var p = { x: 1, y: 2 };
log(f(p));
