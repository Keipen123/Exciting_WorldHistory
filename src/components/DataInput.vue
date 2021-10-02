<template>
    <div class="question">
            <button @click="buttonValue" :value="rnd.o1" id="o1">{{rnd.o1}}</button>
            <button @click="buttonValue" :value="rnd.o2" id="o2">{{rnd.o2}}</button>
            <button @click="buttonValue" :value="rnd.o3" id="o3">{{rnd.o3}}</button>
            <button @click="buttonValue" :value="rnd.o4" id="o4">{{rnd.o4}}</button>
    </div>
    <div>
        <h2>選んだ回答： {{selectedAnswer}}</h2>
    </div>
    <div>
        <button @click="submitAnswer">提出</button>
    </div>
</template>

<script>
export default {
    data(){
        return{
            q1:{
                o1:'テオドリック大王',
                o2:'オドアケル',
                o3:'テオドシウス',
                o4:'アッティラ王',
            },
            q2:{
                o1:'ロロ',
                o2:'アルフレッド大王',
                o3:'リューリク',
                o4:'クロービス',
            },
            q3:{
                o1:'カール＝マルテル',
                o2:'ムアーウィア',
                o3:'ピピン',
                o4:'ハールーン＝アッラシード',
            },
            q4:{
                o1:'ゲルマン人への布教に偶像が必要だった',
                o2:'ビザンツ皇帝はフランク王と結びつきを強めた',
                o3:'東西の教会は対立と分裂を強めた',
                o4:'ローマ教会は聖像禁止令に反発した',
            },
            q5:{
                o1:'ナントの王令',
                o2:'カールの戴冠',
                o3:'カノッサの屈辱',
                o4:'ミラノ勅令',
            },
            q6:{
                o1:'ヴェルダン条約',
                o2:'メルセン条約',
                o3:'ピレネー条約',
                o4:'ウェストファリア条約',
            },
            q7:{
                o1:'ランゴバルド王国',
                o2:'プロイセン公国',
                o3:'神聖ローマ帝国',
                o4:'両シチリア王国',
            },
            q8:{
                o1:'ノヴゴロド王国',
                o2:'ヴァンダル王国',
                o3:'両シチリア王国',
                o4:'ノルマンディー公国',
            },
            q9:{
                o1:'ハンガリー王国',
                o2:'キエフ公国',
                o3:'モスクワ大公国',
                o4:'ポーランド王国',
            },
            q10:{
                o1:'荘園内では商業と貨幣経済が発達した',
                o2:'蕭衍領主には、役員の立ち入りを拒む権利があった',
                o3:'蕭衍領主は、そこで働く農民を支配した',
                o4:'主君と家臣は、封建的主従関係を結んだ',
            },
            selectedAnswer: '',
            buttonId:'',
            finalAnswers:[]
        }
    },
    computed:{
        round(){
            return this.$store.state.round
        },
        rnd(){
            return eval(`this.q${this.round}`)
        }
    },
    methods:{
        buttonValue(event){
            let buttonValue = event.target.value;
            let buttonId = event.target.id;
            return this.selectedAnswer = buttonValue, this.buttonId = buttonId;
        },
        submitAnswer(){
            if(
                this.round === 1 && this.buttonId === 'o2' ||
                this.round === 2 && this.buttonId === 'o4' ||
                this.round === 3 && this.buttonId === 'o1' ||
                this.round === 4 && this.buttonId === 'o2' ||
                this.round === 5 && this.buttonId === 'o2' ||
                this.round === 6 && this.buttonId === 'o2' ||
                this.round === 7 && this.buttonId === 'o2' ||
                this.round === 8 && this.buttonId === 'o2' ||
                this.round === 9 && this.buttonId === 'o2' ||
                this.round === 10 && this.buttonId === 'o4'
            ){
                this.finalAnswers.push(true);
                console.log("round, buttonId, final answers: " + this.round + ' / ' + this.buttonId + ' / ' + this.finalAnswers)
                return this.$store.commit('wonYay'), this.$store.commit('nextStage'), this.selectedAnswer = '';
            } else{
                console.log("round, buttonId, final answers: " + this.round + ' / ' + this.buttonId + ' / ' + this.finalAnswers)
                return 
            }
        }
    }
}
</script>


<style scoped>
button{
    margin:10px;
}

.question{
    display: flex;
    flex-direction: column;
}
</style>
