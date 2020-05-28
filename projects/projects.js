var converter = new showdown.Converter();
converter.setOption('simpleLineBreaks', true);

let postUris = [];
const postRegex = /<span class="name">(.*\.md)<\/span>/g;


const Http = new XMLHttpRequest();
Http.addEventListener('load', parseBrowseRequest);
const url = '../blog';
Http.open("GET", url);
Http.send();

function parseBrowseRequest (response){
    var listing = response.currentTarget.response;
    const matches = [...listing.matchAll(postRegex)];
    postUris = matches.map(match => match[1]).filter(post => post != 'template.md');

    let blogPosts = [];
    for (post of postUris){
        post = '../blog/' + post;

        const Http = new XMLHttpRequest();
        
        Http.addEventListener('load', function(response){
            blogPosts.push(response.currentTarget.response);
        });
        Http.open("GET", post, false);
        Http.send();
    }

    for(post of blogPosts){
        var article = converter.makeHtml(post);
        console.log(article);
        document.getElementById('blog').innerHTML += article;
    }
}









