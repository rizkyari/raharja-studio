export default {
    methods: {
        routeToHome(){
            this.$router.push({name:'Home'})
        },
        routeToStudio(){
            this.$router.push({name: 'List Studio'})
        }
    },
}