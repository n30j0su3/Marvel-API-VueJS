<template>
    <div>
        <v-container class="grey lighten-5">
            <v-row no-gutters>
            <v-col
                cols="12"
                sm="8"
            >
                <v-card
                class="pa-2"
                outlined
                tile
                >
                <h1>Hi! This is the point 1 of Enviame code challenge</h1>
                <h2>Im N30j0su3 - Please enter the Range to validate the prime numbers</h2>
                  <v-text-field
                  v-model.number="number1"
                  label="Number 1">Number 1
                  </v-text-field>
                  <v-text-field
                  v-model.number="number2"
                  label="Number 2">Number 2
                  </v-text-field>
                  <p>The Prime numbers are: <span>{{ primesNumbers }}</span></p>
                </v-card>
            </v-col>
        </v-row>
        </v-container>
    </div>
</template>

<script>
    export default {
        data: () => ({
            number1: 1,
            number2: 10,
        }),
        methods:{
            initialNumbers(){
                let primearray = [];
                //let i = number1;
                for (let i=this.number1; i <=this.number2; i++) {
                    if(this.checkIfisPrime(i)){
                        primearray.push(i)
                    }                    
                }
                return primearray
            },
            checkIfisPrime(number){
                const boundary = Math.floor(Math.sqrt(number));
                for (var i = 2; i <= boundary; i++) if (number % i === 0) return false;
                return number >= 2;
            }            
        },
        computed: {
            primesNumbers(){
                return this.initialNumbers()                
            }            
        }
    }
</script>

<style lang="scss" scoped>

</style>