let apiURL = `https://jsonplaceholder.typicode.com/posts/`;
let url = new URL(location.href);
let id = url.searchParams.get("id");
console.log(id);

const container = document.createElement('div');
container.classList.add('container');
document.body.append(container);

fetch(apiURL + id)
    .then(value => value.json())
    .then(posts => {
        console.log(posts);

        const container_1 = document.createElement('div');
        container_1.classList.add('container_1');
        container.append(container_1);

        for (const post in posts) {
            const div = document.createElement('div');
            container_1.append(div);
            div.innerText = `${post} : ${posts [post]}`;
        }
    });

fetch(apiURL + id + '/comments')
    .then(value => value.json())
    .then(value => {

        const container_2 = document.createElement('div');
        container_2.classList.add('container_2');
        container.append(container_2);

        for (const item in value) {
            const postDiv = document.createElement('div');
            postDiv.classList.add('postDiv');
            container_2.append(postDiv);

            if (typeof value [item] !== 'object') {
                postDiv.innerText = `${item} - ${value [item]}`
            } else {
                for (const key in value [item]) {
                    const keyDiv = document.createElement('div');

                    if (typeof value [item][key] !== 'object') {
                        keyDiv.innerText = `${key} : ${value [item][key]}`;
                    }
                    postDiv.append(keyDiv)
                }
            }
        }
    })

