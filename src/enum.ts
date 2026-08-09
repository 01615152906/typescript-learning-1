

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

enum UserRoles {
  Admin = "Admin",
  Editor = "Editor",
  Viewer = "Viewer",
}

const canEdit = (role: UserRoles) => {
  if (role === UserRoles.Admin || role === UserRoles.Editor) {
    return true;
  } else return false;
};

const isEditPermissable = canEdit(UserRoles.Admin);
console.log(isEditPermissable);