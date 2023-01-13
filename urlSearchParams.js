/** #javascript #developer #js #br */
let url = new URL('https://example.com?id=1&bar=2');
let id = url.searchParams.get("id");
console.log(id); // 1