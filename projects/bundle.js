(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
var converter = new showdown.Converter();
converter.setOption('simpleLineBreaks', true);

// let postUris = [];
// const postRegex = /<span class="name">(.*\.md)<\/span>/g;
const dateRegex = />\s([0-9]{1,2})\s(\w+)\s([\d]{4})/g;
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'November', 'December'];


// const Http = new XMLHttpRequest();
// Http.addEventListener('load', parseBrowseRequest);
// const url = '/blog';
// Http.open("GET", url);
// Http.send();

// function parseBrowseRequest (response){
//     var listing = response.currentTarget.response;
//     const matches = [...listing.matchAll(postRegex)];
//     postUris = matches.map(match => match[1]).filter(post => post != 'template.md');

//     let blogPosts = [];
//     for (post of postUris){
//         post = '../blog/' + post;

//         const Http = new XMLHttpRequest();
        
//         Http.addEventListener('load', function(response){
//             let post = response.currentTarget.response;
//             var date = [...post.matchAll(dateRegex)][0];
//             blogPosts.push({
//                 'post': post,
//                 'year': date[3],
//                 'month': date[2],
//                 'date': date[1] 
//             })
//         });
//         Http.open("GET", post, false);
//         Http.send();
//     }

//     blogPosts.sort( (item1, item2) => {
//         return item2.year - item1.year || months.indexOf(item2.month) - months.indexOf(item1.month) || item2.date - item1.date;
//     });


//     for(post of blogPosts){
//         var article = converter.makeHtml(post.post);
//         // console.log(article);
//         document.getElementById('blog').innerHTML += '<div class="post">' + article + '</div>';
//     }
// }





const postUris = [];
for(file of ["crossReference.md","spidey.md","template.md"]){
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
    // console.log(article);
    document.getElementById('blog').innerHTML += '<div class="post">' + article + '</div>';
}


},{}]},{},[1]);
