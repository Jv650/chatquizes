// filtering exercise 

const users = [
    { name: 'Jemmy', active: true },
    { name: 'Victor', active: false },
    { name: 'Alex', active: true },
    { name: 'Sam', active: false }
  ];

  const newArray = [name: string, active: boolean ];
  const activeUsers = users.filter(active:true)
  const pushActiveUsers = activeUsers.push(newArray);


const activeUsers = users.filter(user => {
    if (user.active === true){
        users.push(user)
    } else {
        return
    }
})

/* correct way of solving this ^*/

// filter through the users array 
//
const activeUsers = users.filter(user => user.active === true);