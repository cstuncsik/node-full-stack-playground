const viewModel = {
    todos: ko.observableArray()
};

const api = req => $.ajax({
    type: req ? 'post' : 'get',
    data: req || {},
    url: '/api/todos'
});

const get = () => api().then(data => {
    viewModel.todos.removeAll();
    viewModel.todos.push.apply(viewModel.todos, data);
});

const init = () => {
    ko.applyBindings(viewModel, document.querySelector('.todos-list'));

    const $todos = $('.module-todos');
    const $inp = $todos.find('[name=todo]');

    $todos.on('submit', '.todo-form', e => {
        e.preventDefault();
        const name = $inp.val();
        if (name) {
            api({name}).then(data => {
                $inp.val('');
                viewModel.todos.push(data.added);
            });
        }
    });

    $todos.on('click', '.remove', function () {
        const $btn = $(this);
        const $item = $btn.parents('.item');
        const id = $item.attr('id');
        api({id}).then(() => {
            viewModel.todos.remove(item => item._id === id);
        });
    });

    $todos.on('change', '.done', function () {
        const $check = $(this);
        const $item = $check.parents('.item');
        const id = $item.attr('id');
        const done = $check.prop('checked');
        api({id, done});
    });
};

export default {init, get};
