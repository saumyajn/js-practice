function deepCloneDirect(obj) {
    return obj
}

function deepCloneSpreadOperator(obj) {
    return { ...obj };

}
function deepCloneJSON(obj) {
    return JSON.parse(JSON.stringify(obj));
}

let obj = { type: 'og', location: { zipcode: '1' } }
console.log('Original object:', obj)

let newObj = deepCloneDirect(obj);
newObj.type = 'Direct';
newObj.location.zipcode = '2';
console.log('Cloned object with direct assignment:', obj)

let newObj1 = deepCloneSpreadOperator(newObj);
newObj1.type = 'Spread';
newObj1.location.zipcode = '3';
console.log('Cloned object with spread operator:', newObj)

let newObj2 = deepCloneJSON(newObj1);
newObj2.type = 'JSON';
newObj2.location.zipcode = '4';
console.log('Cloned object with JSON methods:', newObj1)

//Since JSON methods create a new object, the original object remains unchanged.
//However, it has limitations such as not being able to clone functions, undefined, or special objects like Date and RegExp.
//Custom cloning functions can be implemented to handle these cases.

function deepCloneCustom(obj) {
    let seen = new WeakMap();
    if (obj === null || typeof obj !== 'object') return obj;
    if (seen.has(obj)) return seen.get(obj);
      if (obj instanceof Date) return new Date(obj.getTime());
  if (obj instanceof RegExp) return new RegExp(obj.source, obj.flags);
    const out = Array.isArray(obj) ? [] : {};
    seen.set(obj, out);
    for (const key of Object.keys(obj)) {
        out[key] = deepCloneCustom(obj[key]);
    }
    return out;
}   
let newObj3 = deepCloneCustom(newObj2);
newObj3.type = 'Custom';
newObj3.location.zipcode = '5';
console.log('Cloned object with custom function:', newObj2)
