import AboutContent from '../component/contents/_index.vue'

export default {
    components : {
        'about-content' : AboutContent
    },
    methods: {
        scrollToTop() {
            window.scrollTo(0,0);
       },
    },
    mounted() {
        this.scrollToTop()
    },
}