const app = new Vue({
    el: '#app',
    data: () => ({
        number1: 1,
        number2: 10,
    }),
    methods:{
        initialNumbers(){
            let primearray = [];
            for (let i=this.number1; i <=this.number2; i++) {
                //console.log(i)
                if(this.isPrime(i)){
                    primearray.push(i)
                }                    
            }
            return primearray
        },
        isPrime(num){
            const boundary = Math.floor(Math.sqrt(num));
            for (var i = 2; i <= boundary; i++) if (num % i === 0) return false;
            return num >= 2;
        },
    },
    computed: {
        primeNumbers(){
            return this.initialNumbers()
        }
    },
})