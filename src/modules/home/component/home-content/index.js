import MultiCarousel from '../multi-carousel/_index.vue'
import CarouselMany from '@/components/multi-carousel/_index.vue'
import SingleCarousel from '@/components/single-carousel/_index.vue'

export default {
    components : {
        'multi-carousel' : MultiCarousel,
        'many-carousel' : CarouselMany,
        'single-carousel' : SingleCarousel
    },
    data() {
        return {
            partners : [
                {image:'linkedin.png'},
                {image:'digg.png'},
                {image:'medium.png'},
                {image:'yelp.png'},
                {image:'ladspa.png'},
            ]
        }
    },
}
