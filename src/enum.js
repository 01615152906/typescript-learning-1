"use strict";
// enum
// set of fixed string leteral ek jaigai rakhe
// type UserRoles = "Admin" | "Editor" | "Viewer";
// const canEdit = (role: UserRoles) => {
//   if (role === "Admin" || role === "Editor") {
//     return true;
//   } else return false;
// };
// const isEditPermissable = canEdit("Admin");
// console.log(isEditPermissable);
var UserRoles;
(function (UserRoles) {
    UserRoles["Admin"] = "Admin";
    UserRoles["Editor"] = "Editor";
    UserRoles["Viewer"] = "Viewer";
})(UserRoles || (UserRoles = {}));
const canEdit = (role) => {
    if (role === UserRoles.Admin || role === UserRoles.Editor) {
        return true;
    }
    else
        return false;
};
const isEditPermissable = canEdit(UserRoles.Admin);
console.log(isEditPermissable);
