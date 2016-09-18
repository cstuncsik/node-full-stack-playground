const viewModel = {
    navigation: ko.observableArray([
        {name: 'Home', url: '/home'},
        {name: 'Github', url: '/github'},
        {name: 'Activities', url: '/activities'},
    ])
};

const showPage = page => $('#content').find('.page')
    .addClass('hidden')
    .removeClass('visible').filter(`.page-${page}`)
    .removeClass('hidden').addClass('visible');

ko.applyBindings(viewModel, document.querySelector('header nav'));

export default {showPage};
