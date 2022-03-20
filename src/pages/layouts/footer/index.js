export default {
    methods: {
        routeToAboutUs(){
            this.$router.push({name:'About Us'})
        },
        routeToFAQ(){
            this.$router.push({name:'FAQ'})
        },
        routeToTerms(){
            this.$router.push({name:'Terms'})
        }
    },
}