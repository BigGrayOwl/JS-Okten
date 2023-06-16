let url = new URL(location.href);
let ID = url.searchParams.get('ID');
x = JSON.parse(ID);
let userInfoDiv = document.createElement('div');
userInfoDiv.classList.add('user')
let id = document.createElement('p')
id.innerText = 'Id' + ' ' + '-' + ' ' + x.id
let name = document.createElement('p')
name.innerText = 'Name' + ' ' + '-' + ' ' + x.name
let username = document.createElement('p')
username.innerText = 'Username' + ' ' + '-' + ' ' + x.username
let email = document.createElement('p')
email.innerText = 'Email' + ' ' + '-' + ' ' + x.email
let addressDiv = document.createElement('div')
addressDiv.classList.add('addressDiv')
let street = document.createElement('p')
street.innerText = 'Street' + ' ' + '-' + ' ' + x.address.street
let suite = document.createElement('p')
suite.innerText = 'Suite' + ' ' + '-' + ' ' + x.address.suite
let city = document.createElement('p')
city.innerText = 'City' + ' ' + '-' + ' ' + x.address.city
let zipcode = document.createElement('p')
zipcode.innerText = 'Zipcode' + ' ' + '-' + ' ' + x.address.zipcode
let geoDiv = document.createElement('div')
geoDiv.classList.add('geoDiv')
let lat = document.createElement('p')
lat.innerText = 'Lat' + ' ' + '-' + ' ' + x.address.geo.lat
let lng = document.createElement('p')
lng.innerText = 'Lng' + ' ' + '-' + ' ' + x.address.geo.lng
let phone = document.createElement('p')
phone.innerText = 'Phone' + ' ' + '-' + ' ' + x.phone
let website = document.createElement('p')
website.innerText = 'Website' + ' ' + '-' + ' ' + x.website
let companyDiv = document.createElement('div')
companyDiv.classList.add('companyDiv')
let companyName = document.createElement('p')
companyName.innerText = 'Company name' + ' ' + '-' + ' ' + x.company.name
let catchPhrase = document.createElement('p')
catchPhrase.innerText = 'Catchphrase' + ' ' + '-' + ' ' + x.company.catchPhrase
let bs = document.createElement('p')
bs.innerText = 'BS' + ' ' + '-' + ' ' + x.company.bs
geoDiv.append(lat, lng)
addressDiv.append(street, suite, city, zipcode, geoDiv)
companyDiv.append(companyName, catchPhrase, bs)
userInfoDiv.append(id, name, username, email, addressDiv, phone, website, companyDiv)
document.body.appendChild(userInfoDiv)
let buttonElement = document.createElement('button')
buttonElement.innerText = 'post of current user';
document.body.appendChild(buttonElement);
document.body.addEventListener("click", onceClicker,{once:true})
let allTitles = document.createElement('div')
allTitles.classList.add('allTitles')
document.body.appendChild(allTitles)
function onceClicker () {
  fetch('https://jsonplaceholder.typicode.com/posts?userId=' + x.id)
    .then(response => response.json())
    .then(posts => {
      for (const post of posts) {
        let postTitle = document.createElement('div')
        postTitle.classList.add('posts')
        let title = document.createElement('h2')
        title.innerText = post.title
        title.classList.add('title')
        let a = document.createElement('a');
        a.innerText = 'details';
        a.href = 'post-details.html?title=' + JSON.stringify(post);
        postTitle.append(title, a);
        allTitles.appendChild(postTitle)
      }
    })
}
