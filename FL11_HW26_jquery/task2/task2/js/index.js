const $list = $(".list");
const $input = $("#add-input");
const $add = $("#add-submit");

const todos = [
    {
        text: "Buy milk",
        done: false
    },
    {
        text: "Play with dog",
        done: true
    }
];

$.fn.todo = function () {
    refresh();

    $add.click(e => {
        e.preventDefault();
        let text = $input.val();

        if (text === '') return;

        todos.push({text, done: false});
        refresh();
    });
};

function refresh() {
    $list.empty();
    todos.forEach(i => {
        $list.append(
            "<li class='item'>" +
            "<span class='item-text " + (i.done ? "done" : "") + "'>" + i.text + "</span>" +
            "<button class='item-remove'>Remove</button>" +
            "</li>"
        );
    });

    $('.item-remove').click(function (e) {
        e.preventDefault();

        let index = $('li').index(this.parentElement);
        todos.splice(index, 1);

        refresh();
    });

    $('.item-text').click(function (e) {
        e.preventDefault();

        let index = $('li').index(this.parentElement);
        todos[index].done = !todos[index].done;

        refresh();
    });
}

$(this).todo();
