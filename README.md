# HTML Page generator 

####react 16, webpack 4, redux

[view demo](https://guillaumeader1.github.io/site-generator/dist/)

the idea is to create HTML pages and routing based on a json config file.

One json file will represent the page routing, and load the corresponding json page.


e.g.
```
{
    "routes": [
        { "name": "Home", "path": "home", "component": "`page0`" },
        { "name": "Page 1", "path": "my-page1", "component": "`page1`" }
        ...
    ]
}
```
A json page is a Json {object} descrbing a list of components and their props


e.g.
```
{
 "header": {
        "title": "this is a header",
        "text": "Nullam et or sed nunc condimentum sem. In efficitur ligula tate urna."
    },
    "spotlight": [
        { "title": "# 1", "text": "et sagittis magmentum sem. " },
        { "title": "# 2", "text": "Nullam et oorem consequat " },
        { "title": "# 3", "text": "conseqgna sed nunc rhoncus condimentum sem." }
    ]
}
```






