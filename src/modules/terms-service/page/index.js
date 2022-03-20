import TermContent from '../component/terms-content/_index.vue'

export default {
    components : {
        'term-content' : TermContent
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