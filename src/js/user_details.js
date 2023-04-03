const container = document.createElement('div');
container.classList.add('container');
document.body.append(container);

const container_1 = document.createElement('div');
container_1.classList.add('container_1');
container.append(container_1);

const container_2 = document.createElement('div');
container_2.classList.add('container_2');
container.append(container_2);

let apiURL = `https://jsonplaceholder.typicode.com/users/`;

let url = new URL(location.href);
let id = url.searchParams.get('id');

fetch(apiURL + id)
    .then(value => value.json())
    .then(value => {
        console.log(value);

        for (const item in value) {

            const bloc_1 = document.createElement('div');
            bloc_1.classList.add('bloc_1')
            container_1.append(bloc_1);

            if (typeof value [item] !== 'object') {
                bloc_1.innerText = `${item} : ${value [item]}.`;
            } else {

                const bloc_2 = document.createElement('div');
                bloc_2.classList.add('bloc_2');
                container_2.append(bloc_2);

                bloc_2.innerText = `${item} :`;
                for (const key in value [item]) {

                    const keyDiv = document.createElement('div');

                    if (typeof value[item] [key] !== 'object') {
                        keyDiv.innerText = `${key} : ${value[item] [key]}.`;

                        bloc_2.append(keyDiv);

                    } else {
                        keyDiv.innerText = `${key}`;

                        for (const keyElement in value [item] [key]) {
                            const keyElemDiv = document.createElement('div');

                            if (typeof typeof value [item] [key] [keyElement] !== 'object') {
                                keyElemDiv.innerText = `${keyElement} : ${value [item] [key] [keyElement]}.`;
                                bloc_2.append(keyElemDiv);
                            }
                        }
                    }
                }
            }
        }
    });

const divBtn = document.createElement('div');
divBtn.classList.add('divBtn');
container.append(divBtn);
const btn = document.createElement('button');
btn.classList.add('btn');
btn.innerText = 'post of current user';
divBtn.append(btn);

const container_3 = document.createElement('div');
container_3.classList.add('container_3');
container.append(container_3);

btn.onclick = function () {

    fetch(apiURL + id + '/posts')
        .then(value => value.json())
        .then(posts => {

            console.log(posts);

            for (const post of posts) {
                let divPost = document.createElement('div');
                divPost.classList.add('divPost');
                let div = document.createElement('div');
                div.innerText = `${post.title}`;
                divPost.append(div);

                let a = document.createElement('a');
                let btnPost = document.createElement('button');
                btnPost.classList.add('btnPost');
                btnPost.innerText = 'post-details';

                a.href = 'post-details.html?id=' + post.id;

                a.append(btnPost);
                divPost.append(a);

                container_3.append(divPost);
            }
        })
    btn.disabled = true;
}

