import ModalLogin from '@/components/modal-login/_index.vue'
import ModalRegister from '@/components/modal-register/_index.vue'

export default {
    components: {
        'modal-login': ModalLogin,
        'modal-register': ModalRegister
    },
    methods: {
        routeToHome(){
            this.$router.push({name:'Home'})
        },
    },
}
