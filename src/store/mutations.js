export const mutations = {
    setContentData(state, params){
        //console.log(params);
        state.MarvelData.listaPersonajes = {
            ...params
        }
    },
    setNextPageData(state, params){
        state.MarvelData.listaPersonajes.data.results = [
            ...state.MarvelData.listaPersonajes.data.results,
            ...params.data.results
        ]
    },
    setSearchChr(state, params){
        state.MarvelData.buscarPersonajes = {
            ...params
        }
    },
}