import navigation from '../../modules/navigation/navigation';
import todos from '../../modules/todos/todos';

todos.init();

export default () => {
    todos.get().then(() => navigation.showPage('activities'));
};
