function applyRules(c, r) {
    var rules = Object.keys(r).map(function (key) { return r[key]; });
    for (let i = 0; i < rules.length; i++) {
        let rule = rules[i];
        let r = rule.split(" -> ");
        
        if(r[0] === c) { return r[1] }
    }
    return c;
}

function derivation(string, rules) {
    var newstring = '';
    for (var i = 0; i < string.length; i++) {
        let c = string.charAt(i);
        newstring = newstring + applyRules(c, rules);
      }
    return newstring;
}

function run(rules, iterations, string) {
    for (let i = 0; i < iterations; i++) {
        string = derivation(string, rules)
    }
    return string;
}

function draw_string(string, drawer, angle, segment, name='image') {
    for (var i = 0; i < string.length; i++) {
        let c = string.charAt(i);
        symbol(c, drawer, segment, angle)
      }    
}

function saveImage(name='img') {
    saveCanvas(canvas, name, 'png');
} 