import navigation from '../../modules/navigation/navigation';
import photos from '../../modules/photos/photos';

photos.init();

export default () => {
    photos.list().then(() => navigation.showPage('home'));
};
