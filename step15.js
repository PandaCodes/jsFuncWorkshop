   function loadUsers(userIds, load, done) {
     const users = [];  // var completed = 0
     userIds.forEach((id) => setTimeout(() => {
       load(id, (user) => {
         users.push(user);  // users[index] = user
         if (users.length === userIds.length) { // ++completed === userIds.length
           done(users);
         }
       });
     }, 0));
     return users;
   }

   module.exports = loadUsers;
