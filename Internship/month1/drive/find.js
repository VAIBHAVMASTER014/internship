var users = [
    {name :'abc'},
    // {name :'abc2'},
    // {name :'abc3'},
];

var comments = [
    {name :'abc',comment:'nothing'},
    {name :'abc2',comment:'nothing'},
    {name :'abc',comment:'nothing'},
];

function findComment( users,comments) {
    return comments.find(function(comment){
        return comment.name === users[0].name
    })
}
console.log(findComment( users,comments));
console.log('----------------------------------------------------------------');
   
// var user ;

// for(var i = 0; i < users.length; i++){
//     if (users[i].name === 'abc'){
//         user = users[i];
//     }
// }
// console.log(user)

// console.log(
//     users.find(function(user){
//         return user.name === "abc"
//     })
// );

var posts = [
    {id:1, title: 'new post'},
    {id:2, title: 'old post'},
];

var comment = {postId:1, content:'Great post'};

function postForComment(posts, comment){
    return posts.find(function(post){
        return post.id === comment.postId;
    });
}

console.log(postForComment(posts, comment));
//find can be used to find any post by its id 
//in frontend let assume if any post is click then that post's content is opened