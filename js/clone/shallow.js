
function shallow(o) {
    let obj = {};
    for (let i in o) {
        obj[i] = o[i];
    }
    return obj;
}

oldobj = {
    a: 1,
    b: ['e', 'f', 'g'],
    c: { h: { i : 2}}
}


const newobj = shallow(oldobj);
console.log(newobj.c.h, oldobj.c.h);
console.log(newobj.c.h === oldobj.c.h);

newobj.c.h = 'change'
console.log(newobj.c.h, oldobj.c.h)