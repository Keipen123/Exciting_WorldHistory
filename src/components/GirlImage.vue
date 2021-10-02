<template>
    <section>
        <img :src="girlImage">
        <!-- <button @click="logged">GirlImage</button> -->
    </section>
</template>

<script>
export default {
    data(){
        return{
            source: require("../assets/images/1.jpeg")
        }
    },
    computed:{
        win(){
            return this.$store.state.win
        },
        girlImage(){
            const format = ".jpeg" || ".png";
            if(format === ".jpeg"){
                return require("../assets/images/" + this.win + ".jpeg")
            } else {
                return require("../assets/images/" + this.win + ".png")
            }
        }
    },
    methods:{
        // logged(){
        //     console.log("source: "+this.src)
        //     console.log("win: "+this.win)
        // },
    }
}
</script>

<style scoped>
img{
    width: 15%;
}
</style>