"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const score = [];
const names = [];
function identityone(val) {
    return val;
}
function identitytwo(val) {
    return val;
}
function identitythree(val) {
    return val;
}
function identityfour(val) {
    return val;
}
identityfour({
    brand: "milton",
    type: 8
});
function getSearchproducts(products) {
    return products[3];
}
const result = getSearchproducts([10, 20, 30, 40]);
console.log(result); // 40
const getMoreSearchproducts = (products) => {
    return products[3];
};
//# sourceMappingURL=myGenerics.js.map