// Given two arrays arr1 and arr2, return a new array joinedArray. All the objects in each of the two inputs arrays will contain an id field that has an integer value. joinedArray is an array formed by merging arr1 and arr2 based on their id key. The length of joinedArray should be the length of unique values of id. The returned array should be sorted in ascending order based on the id key.

// If a given id exists in one array but not the other, the single object with that id should be included in the result array without modification.

// If two objects share an id, their properties should be merged into a single object:

// If a key only exists in one object, that single key-value pair should be included in the object.
// If a key is included in both objects, the value in the object from arr2 should override the value from arr1.


// Example 1:

// Input: 
// arr1 = [
//     {"id": 1, "x": 1},
//     {"id": 2, "x": 9}
// ], 
// arr2 = [
//     {"id": 3, "x": 5}
// ]
// Output: 
// [
//     {"id": 1, "x": 1},
//     {"id": 2, "x": 9},
//     {"id": 3, "x": 5}
// ]
// Explanation: There are no duplicate ids so arr1 is simply concatenated with arr2.
// Example 2:

// Input: 
// arr1 = [ {"id": 1, "x": 2, "y": 3}, {"id": 2, "x": 3, "y": 6}]
//    
//    
// , 
// arr2 = [{"id": 2, "x": 10, "y": 20},{"id": 3, "x": 0, "y": 0} ]
//     
//     
//
// Output: 
// [ {"id": 1, "x": 2, "y": 3}, {"id": 2, "x": 10, "y": 20},{"id": 3, "x": 0, "y": 0}]
//    
//    
//     
// 
// Explanation: The two objects with id=1 and id=3 are included in the result array without modifiction. The two objects with id=2 are merged together. The keys from arr2 override the values in arr1.
// Example 3:

// Input: 
// arr1 = [
//     {"id": 1, "b": {"b": 94},"v": [4, 3], "y": 48}
// ]
// arr2 = [
//     {"id": 1, "b": {"c": 84}, "v": [1, 3]}
// ]
// Output: [
//     {"id": 1, "b": {"c": 84}, "v": [1, 3], "y": 48}
// ]
// Explanation: The two objects with id=1 are merged together. For the keys "b" and "v" the values from arr2 are used. Since the key "y" only exists in arr1, that value is taken form arr1.

function joinArrsById(arr1, arr2) {
    const res = []
    arr1.forEach(element => {
        const same = arr2.find(el => el.id === element.id)
        if (same) {
            res.push({ ...element, ...same })
        } else {
            res.push(element)
        }
    });

    arr2.forEach(element => {
        const same = res.find(el => el.id === element.id)
        if (!same) {
            res.push(element)
        }
    })
    return res.sort((a, b) => a.id - b.id)
};

console.log(joinArrsById([{"id":1,"x":36,"d":26,"f":35},{"id":3,"c":20,"z":75}], [{"id":2,"o":48,"z":84,"y":61}]));

//[{"d":26,"f":35,"id":1,"x":36},{"id":2,"o":48,"y":61,"z":84},{"c":20,"id":3,"z":75}]


function join(arr1, arr2) {
    const idMap = new Map();
    
    // Додаємо елементи з arr1 в мапу за ключем id
    arr1.forEach(element => {
        idMap.set(element.id, element);
    });

    // Додаємо або оновлюємо елементи з arr2 в мапу за ключем id
    arr2.forEach(element => {
        idMap.set(element.id, {...idMap.get(element.id), ...element});
    });

    // Повертаємо масив значень з мапи, відсортований за id
    return Array.from(idMap.values()).sort((a, b) => a.id - b.id);
}
console.log(join([{"id":1,"x":36,"d":26,"f":35},{"id":3,"c":20,"z":75}], [{"id":2,"o":48,"z":84,"y":61}]));