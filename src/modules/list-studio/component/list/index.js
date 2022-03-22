import XHeader from '@/pages/layouts/header/_index.vue'
import ListBreadcrumb from '../list-breadcrumb/_index.vue'
import FilterStudio from '../filter-studio/_index.vue'
import StudioItem from '../studio-list/_index.vue'

export default {
    components : {
        'x-header': XHeader,
        'list-breadcrumb': ListBreadcrumb,
        'filter-studio' : FilterStudio,
        'studio-item' : StudioItem
    },
    data(){
        return{
            contents: [
                {
                    location : 'Jakarta Selatan',
                    image: 'studio-exp1.png',
                    type: 'Meeting Room',
                    price: 'Rp. 25.000',
                    schedule: 'Senin - Jumat | 07:00 - 19:00 WIB',
                },
                {
                    location : 'Jakarta Selatan',
                    image: 'studio-exp2.png',
                    type: 'Meeting Room',
                    price: 'Rp. 25.000',
                    schedule: 'Senin - Jumat | 07:00 - 19:00 WIB',
                },
                {
                    location : 'Jakarta Selatan',
                    image: 'studio-exp3.png',
                    type: 'Meeting Room',
                    price: 'Rp. 25.000',
                    schedule: 'Senin - Jumat | 07:00 - 19:00 WIB',
                }
            ]
        }
    }
}