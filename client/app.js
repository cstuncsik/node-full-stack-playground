import home from './components/home/home';
import github from './components/github/github';
import activities from './components/activities/activities';
import not_found from './components/not_found/not_found';

page('/', home);
page('/home', home);
page('/github', github);
page('/activities', activities);
page('*', not_found);

$(() => {
    page();
});
