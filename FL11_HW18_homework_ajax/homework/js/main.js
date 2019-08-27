class User{
    constructor(id, name, email){
        this.id = id;
        this.name = name;
        this.email = email;
        this.avatar = null;
        this.posts = [];
        this.comments = [];

        // Creating DOM element
        let template = document.getElementById('template'),
            list = document.getElementById('users-list');
        this.element = template.cloneNode(true);
        this.element.getElementsByClassName('users-list-item-name')[0].textContent = name;
        this.element.getElementsByClassName('users-list-item-id')[0].textContent = id;
        this.element.classList.remove('none');
        this.element.id = '';
        this.loadCat();
        list.appendChild(this.element);

        // Adding onclick functions
        this.element.getElementsByClassName('edit-button')[0].onclick =  () => {
            this.element.getElementsByClassName('users-list-item-name')[0].classList.add('none');
            this.element.getElementsByClassName('edit-button')[0].classList.add('none');
            this.element.getElementsByClassName('delete-button')[0].classList.add('none');
            this.element.getElementsByClassName('users-list-item-change')[0].classList.remove('none');
            this.element.getElementsByClassName('save-button')[0].classList.remove('none');
        };
        
        this.element.getElementsByClassName('delete-button')[0].onclick =  () => {
            this.delete();
            this.element.remove();
        };
        
        this.element.getElementsByClassName('save-button')[0].onclick = () => {
            let input = this.element.getElementsByClassName('users-list-item-change')[0];
            if(input.value !== '') {
                this.saveChange(input.value);
                this.element.getElementsByClassName('users-list-item-name')[0].textContent = input.value;
                input.value = '';
                console.log('here');
            }

            this.element.getElementsByClassName('users-list-item-name')[0].classList.remove('none');
            this.element.getElementsByClassName('edit-button')[0].classList.remove('none');
            this.element.getElementsByClassName('delete-button')[0].classList.remove('none');
            this.element.getElementsByClassName('users-list-item-change')[0].classList.add('none');
            this.element.getElementsByClassName('save-button')[0].classList.add('none');
        };

        this.element.getElementsByClassName('users-list-item-name')[0].onclick = () => {
            let postsEl = this.element.getElementsByClassName('users-list-item-posts')[0];
            if(postsEl.classList.contains('none')){
                this.loadPosts();
                postsEl.classList.remove('none');
            } else {
                while(postsEl.childElementCount !== 1){
                    postsEl.children[1].remove();
                    this.posts.length = 0;
                }
                postsEl.classList.add('none');
            }
        };

    }

    delete(){
        let xhr = new XMLHttpRequest(), self = this;
        xhr.onloadend = function () {
            document.getElementById('spinner').classList.add('none');
        };
        xhr.open('DELETE', 'https://jsonplaceholder.typicode.com/users/' + this.id, true);
        document.getElementById('spinner').classList.remove('none');
        xhr.send();
    }

    saveChange(name){
        let xhr = new XMLHttpRequest(), self = this, res = false;
        xhr.onloadend = function () {
            document.getElementById('spinner').classList.add('none');
        };
        xhr.open('PUT', 'https://jsonplaceholder.typicode.com/users/' + this.id, true);
        xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
        document.getElementById('spinner').classList.remove('none');
        xhr.send(JSON.stringify({
            name,
            id: self.id
        }));
    }

    loadPosts(){
        let xhr = new XMLHttpRequest();
        let self = this, data, template = self.element.getElementsByClassName('users-list-item-posts-item')[0];
        xhr.onloadend = function () {
            document.getElementById('spinner').classList.add('none');
            if (this.status === 200) {
                try {
                    data = JSON.parse(xhr.response);
                }
                catch (e) {
                    console.error(e);
                }

                for (let i = 0; i < data.length; i++) { // getting users' posts
                    self.posts.push({
                        title: data[i].title,
                        body: data[i].body,
                        postId: data[i].id
                    });
                }

                // adding posts to DOM
                for (let i = 0; i < self.posts.length; i++) {
                    let postEl = template.cloneNode(true),
                        comments = postEl.getElementsByClassName('users-list-item-posts-comments')[0];

                    postEl.getElementsByClassName('users-list-item-posts-title')[0].textContent =
                        self.posts[i].title;
                    postEl.getElementsByClassName('users-list-item-posts-body')[0].textContent =
                        self.posts[i].body;

                    // adding onclick to load comments
                    postEl.getElementsByClassName('comments-button')[0].onclick = () => {
                        if(comments.classList.contains('none')) {
                            self.loadComment(self.posts[i].postId, comments);
                            comments.classList.remove('none');
                        } else {
                            let childCount = comments.childElementCount;
                            while (comments.childElementCount !== 1) {
                                comments.children[1].remove();
                            }
                            comments.classList.add('none');
                        }
                    };

                    postEl.classList.remove('none');
                    template.parentElement.appendChild(postEl);
                }
            }
        };
        xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts?userId=' + self.id, true);
        document.getElementById('spinner').classList.remove('none');
        xhr.send();
    }

    loadComment(postId, postEl){
        let xhr = new XMLHttpRequest(), self = this,
            template = this.element.getElementsByClassName('users-list-item-posts-comments-item')[0];
        xhr.onloadend = function () {
            document.getElementById('spinner').classList.add('none');
            if (this.status === 200) {
                let data;
                try {
                    data = JSON.parse(xhr.response);
                }
                catch (e) {
                    console.error(e);
                }
                for (let i = 0; i < data.length; i++) {
                    let comment = template.cloneNode(true);
                    comment.getElementsByClassName('users-list-item-posts-comments-email')[0].textContent =
                        data[i].email;
                    comment.getElementsByClassName('users-list-item-posts-comments-body')[0].textContent =
                        data[i].body;
                    comment.classList.remove('none');
                    postEl.appendChild(comment);
                }
            }
        };
        xhr.open('GET', 'https://jsonplaceholder.typicode.com/comments?postId=' + postId, true);
        document.getElementById('spinner').classList.remove('none');
        xhr.send();
    }

    loadCat(){
        let xhr = new XMLHttpRequest();
        let self = this;
        xhr.onloadend = function () {
            document.getElementById('spinner').classList.add('none');
            if (this.status === 200) {
                let data;
                try {
                    data = JSON.parse(xhr.response);
                }
                catch (e) {
                    console.error(e);
                }
                self.element.getElementsByClassName('user-avatar')[0].src = data[0].url;
                self.avatar = data[0].url;
            }
        };
        xhr.ontimeout = () => {
            document.getElementById('spinner').classList.add('none');
        };
        xhr.timeout = 10000;
        xhr.open('GET', 'https://api.thecatapi.com/v1/images/search?size=full', true);
        document.getElementById('spinner').classList.remove('none');
        xhr.send();
    }
}

class Loader{
    constructor(){
        this.users = [];
    }

    load(method ,url, async){
        let xhr = new XMLHttpRequest();
        let self = this;
        xhr.onloadend = function () {
            document.getElementById('spinner').classList.add('none');
            if (this.status === 200) {
                let data;
                try {
                    data = JSON.parse(xhr.response);
                }
                catch (e) {
                    console.error(e);
                }
                for (let i = 0; i < data.length; i++) {
                    self.users.push(new User(data[i].id, data[i].name, data[i].email));
                }
            }
        };
        xhr.ontimeout = () => {
            document.getElementById('spinner').classList.add('none');
        };
        xhr.timeout = 10000;
        xhr.open(method, url, async);
        document.getElementById('spinner').classList.remove('none');
        xhr.send();
    }
}

let loader = new Loader();
loader.load('GET', 'https://jsonplaceholder.typicode.com/users', true);