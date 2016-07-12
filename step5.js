function checkUsersValid(goodUsers) {
  return function allUsersValid(submittedUsers) {
    return submittedUsers.every(sU => goodUsers.some(gU => gU.id === sU.id));
        // SOLUTION GOES HERE
  };
}

module.exports = checkUsersValid;
