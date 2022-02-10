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
                <h1>Hi! This is the point 2 of Enviame code challenge</h1>
                </v-card>
            </v-col>
        </v-row>
        {{ showFinalJSON }}
        </v-container>
    </div>
</template>

<script>
    export default {
        data: () => ({
            values: {
                1: {
                    carrier: "CCH",
                    service: "DEX",
                },
                17: {
                    carrier: "CHP",
                    service: "express",
                }
            },
            json: {
                data: {
                    BUIN: {
                        limit: 1,
                        over_carrier_service_id: 17,
                        under_carrier_service_id: 17
                    },
                    LAJA: {
                        limit: 1,
                        over_carrier_service_id: 1,
                        under_carrier_service_id: 1
                    },
                    LEBU: {
                        limit: 1,
                        over_carrier_service_id: 1,
                        under_carrier_service_id: 1
                    },
                    LOTA: {
                        limit: 1,
                        over_carrier_service_id: 17,
                        under_carrier_service_id: 17
                    }
                }
            },
        }),
        methods:{
            JSONTransform(){
                const finalJSON = {};
                const operation = Object.keys(this.json.data);
                operation.forEach((item) => {
                    return (finalJSON[item] = {
                        limit: this.json.data[item].limit,
                        over: this.values[this.json.data[item].over_carrier_service_id],
                        under: this.values[this.json.data[item].under_carrier_service_id],
                    });
                });
                //let JSONDOM = JSON.stringify(finalJSON);
                console.log(finalJSON)
                return finalJSON;
            },
        },
        computed: {
            showFinalJSON(){
                return this.JSONTransform()                
            }            
        }
    }
</script>

<style lang="scss" scoped>

</style>