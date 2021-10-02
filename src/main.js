import { createApp } from 'vue'
import {createStore} from 'vuex'
import App from './App.vue'

const store = createStore({
state(){
    return{
        round:1,
        win:1
    }
},
mutations:{
    nextStage(state){
        state.round++
    },
    wonYay(state){
        state.win++
    }
}
})

const app = createApp(App);
app.use(store);
app.mount('#app')
