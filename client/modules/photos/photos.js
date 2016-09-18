import Rx from 'rxjs-es6/Rx';

const viewModel = {
    photos: ko.observableArray(),
    desc: ko.observable(true),
    toggleOrderDir: function () {
        this.desc(!this.desc());
    }
};

viewModel.orderDir = ko.pureComputed(() => viewModel.desc() ? 'desc' : 'asc');

const list = () => $.ajax({
    url: '/api/photos'
}).then(data => {
    data.forEach(obj => {
        obj.hidden = ko.observable(false);
        obj.displayDate = moment(obj.created).format('ll');
    });
    viewModel.photos.removeAll();
    viewModel.photos.push.apply(viewModel.photos, data);
});

const convertDateToTs = date => moment(date).valueOf();
const dateSort = dir => (a, b) => (convertDateToTs(a.created) - convertDateToTs(b.created)) * (dir === 'asc' ? 1 : -1);

const init = () => {
    ko.applyBindings(viewModel, document.querySelector('.module-photos'));

    Rx.Observable.fromEvent(document.querySelector('#search'), 'keyup')
        .map(e => e.target.value)
        .filter(s => s.length > 2 || !s)
        .distinctUntilChanged()
        .subscribe(
            str => ko.utils.arrayForEach(viewModel.photos(), photo => photo.hidden(photo.title.indexOf(str) < 0)),
            err => console.log(err)
        );

    Rx.Observable.fromEvent(document.querySelector('#order'), 'click')
        .map(e => e.target.className)
        .subscribe(
            orderDir => viewModel.photos.sort(dateSort(orderDir)),
            err => console.log(err)
        );
};

export default {init, list};
