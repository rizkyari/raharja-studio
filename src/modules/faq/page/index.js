import FaqContent from '../component/faq-content/_index.vue'

export default {
    components : {
        'faq-content' : FaqContent
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