import navigation from '../../modules/navigation/navigation';
import ghSearch from '../../modules/gh-search/gh-search';

ghSearch.init('.gh-search');

export default () => {
    navigation.showPage('github');
};
