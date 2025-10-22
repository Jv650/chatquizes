const users = [
    { name: "Jemmy", active: true },
    { name: "Alex", active: false },
    { name: "Sam", active: true }
  ];

  // If you want to map through the users and add a status property to each one:
  const newUserArray = users.map(user => ({
    ...user, // spread each user
    status: user.active ? 'Online' : 'offline' // is user active true then show online otherwise offline
  }));

// how to only add a new user to the arrat
  const newUserArray = [...users, { status: "Online" }];
