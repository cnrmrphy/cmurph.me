var converter = new showdown.Converter();
converter.setOption('simpleLineBreaks', true);

const dateRegex = />\s([0-9]{1,2})\s(\w+)\s([\d]{4})/g;
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'November', 'December'];

var fs = require('fs');

const postUris = [];
for(file of fs.readdirSync('../blog')){
    if(file != 'template.md') postUris.push(file);
}

let blogPosts = [];
for (post of postUris){
    post = '../blog/' + post;

    const Http = new XMLHttpRequest();
    
    Http.addEventListener('load', function(response){
        let post = response.currentTarget.response;
        var date = [...post.matchAll(dateRegex)][0];
        blogPosts.push({
            'post': post,
            'year': date[3],
            'month': date[2],
            'date': date[1] 
        })
    });
    Http.open("GET", post, false);
    Http.send();
}

blogPosts.sort( (item1, item2) => {
    return item2.year - item1.year || months.indexOf(item2.month) - months.indexOf(item1.month) || item2.date - item1.date;
});


for(post of blogPosts){
    var article = converter.makeHtml(post.post);
    document.getElementById('blog').innerHTML += '<div class="post">' + article + '</div>';
}

