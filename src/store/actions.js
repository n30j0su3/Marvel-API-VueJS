const Baseurl = 'https://gateway.marvel.com/';
const api_key = '28d33384e05f225dcabe515bec59b988';
const hash = '30a7a1715af9f15f52ce9c23c49c9da3';
//https://gateway.marvel.com:443/v1/public/characters?apikey=28d33384e05f225dcabe515bec59b988

export const actions = {
    async getMarvelAPIContent({ commit }, APIEndPoint ) {
        try {
          const res = await fetch(`${Baseurl}${APIEndPoint}?apikey=${api_key}&hash=${hash}&ts=1`);
          const response = await res.json();
          //console.log(response);
          await commit('setContentData', response);
        }
        catch (e) {
          console.log(e);
        }
    },
    async getMarvelAPIContentScroll({ commit }, APIEndPoint ) {
        try {
          const res = await fetch(`${Baseurl}${APIEndPoint}&apikey=${api_key}&hash=${hash}&ts=1`);
          const response = await res.json();
          await commit('setNextPageData', response);
        }
        catch (e) {
          console.log(e);
        }
    },
    async getMarvelAPIContentSearch({ commit }, APIEndPoint ) {
        try {
          const res = await fetch(`${Baseurl}${APIEndPoint}&apikey=${api_key}&hash=${hash}&ts=1`);
          const response = await res.json();
          //console.log(response);
          await commit('setSearchChr', response);
        }
        catch (e) {
          console.log(e);
        }
    },
}