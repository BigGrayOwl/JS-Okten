let url = new URL(location.href);
let title = url.searchParams.get('title');
x = JSON.parse(title)
console.log(x)
let post = document.createElement('div');
post.classList.add('post')
let userId = document.createElement('p')
userId.innerText = 'UserId' + ' ' + '-' + ' ' + x.userId
let id = document.createElement('p')
id.innerText = 'Id' + ' ' + '-' + ' ' + x.id
let titleses = document.createElement('p')
titleses.innerText = 'Title' + ' ' + '-' + ' ' + x.title
let body = document.createElement('p')
body.innerText = 'Body' + ' ' + '-' + ' ' + x.body
post.append(userId, id, titleses, body)
document.body.appendChild(post);
let allComments = document.createElement('div')
allComments.classList.add('allComments')
document.body.appendChild(allComments)
fetch ('https://jsonplaceholder.typicode.com/comments?postId='+x.id)
  .then(response => response.json())
  .then(comments => {
    for (const comment of comments){
      let commentDetail = document.createElement('div');
      commentDetail.classList.add('commentDetail');
      commentDetail.innerText = comment.body;
      allComments.appendChild(commentDetail);
    }
  })
