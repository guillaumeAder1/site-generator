# HTML Page generator 

react 16, webpack 4, redux
=======

the idea is to create HTML pages and routing based on a json config file.

One json file will represent the page routing, and load the corresponding json page.
e.g.
```
{
    "routes": [
        { "name": "Home", "path": "home", "component": "page0" },
        { "name": "Page 1", "path": "my-page1", "component": "page1" }
        ...
    ]
}
```
A json page is a Json {object} descrbiing a list of components and their props
e.g.
```
{
 "header": {
        "title": "this is a header",
        "text": "Nullam et or sed nunc condimentum sem. In efficitur ligula tate urna."
    },
    "spotlight": [
        { "title": "this is spotlight 1", "text": "et sagittis magna sed nunc rhoncus condimentum sem. " },
        { "title": "this is spotlight 2", "text": "Nullam et orci eu lorem consequat " },
        { "title": "this is spotlight 3", "text": "consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem." }
    ]
 }
```


[view demo](https://guillaumeader1.github.io/site-generator/dist/)



