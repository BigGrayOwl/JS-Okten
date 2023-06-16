fetch('https://jsonplaceholder.typicode.com/users')
  .then(response=>response.json())
  .then(users => {
    for (const user of users){
      let userInfoDiv = document.createElement('div');
      let userID = document.createElement('h1');
      userID.innerText = user.id + '.' + ' ' + user.name;
      let a = document.createElement('a');
      a.innerText = 'details';
      a.href = 'user-details.html?ID='+JSON.stringify(user);
      userInfoDiv.append(userID, a);
      document.body.appendChild(userInfoDiv);
    }
  });
