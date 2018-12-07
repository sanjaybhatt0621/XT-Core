// define(['./add.js'] , function (add)
// {
//     return function calculate(a,b)
//     {
//         return add(a,b);
//     }
// })

const result = require('./add');
exports.calculate = function calculate(a, b)
{
    return result.add(a,b);
};