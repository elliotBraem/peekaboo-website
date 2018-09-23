import Homepage from './pages/Homepage.vue';
import Careers from './pages/Careers.vue';
import BlogPost from './pages/BlogPost.vue';

export default [{
    path: '/',
    component: Homepage,
    name: 'homepage',
}, {
    path: '/careers',
    component: Careers,
    name: 'careers',
}, {
    path: '/blog/tips-for-a-sensory-friendly-halloween',
    component: BlogPost,
    name: 'blog-post',
}];
