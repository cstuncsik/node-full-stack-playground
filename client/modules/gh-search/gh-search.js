import Rx from 'rxjs-es6/Rx';

const viewModel = {
    ghUsers: ko.observableArray()
};

const search = q => Rx.Observable.fromPromise($.ajax({
    url: 'https://api.github.com/search/users',
    data: {q}
}));

const init = (qs) => {
    ko.applyBindings(viewModel, document.querySelector('.gh-search-results'));

    const input$ = Rx.Observable.fromEvent(document.querySelector(qs), 'keyup');

    input$
        .map(e => e.target.value)
        .filter(s => s.length > 2)
        .debounceTime(250)
        .distinctUntilChanged()
        .switchMap(search)
        .subscribe(data => {
            viewModel.ghUsers.removeAll();
            viewModel.ghUsers.push.apply(viewModel.ghUsers, data.items)
        }, err => console.log(err));
};

export default {init}
