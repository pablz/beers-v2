const store = new Vuex.Store({
    state:{
        listadoBeers:[],
        cuentaTotal:[],
        loading:true,
    },
    mutations:{
        mtnListadoBeers(state,n){
            state.listadoBeers = n;
        },
        mtnCuentaTotal(state,n){
            state.cuentaTotal = n;
        }
    },
    getters:{
        getListadoBeers(state){
            return state.listadoBeers;
        },
        getCuentaTotal(state){
            return state.cuentaTotal;
        }
    },
    actions:{
        setListadoBeers: ({ commit }, n) => {
            commit('mtnListadoBeers', n)
        },
        setCuentaTotal:({commit},n) => {
            commit('mtnCuentaTotal');
        }
    }
});

//components
Vue.component('app-listado-beers',{
    template:`
        <ul>
        
            <li v-for="(item, index) in listadoBeers" :key="index" >
                <h3>
                    {{item.nombre}}
                </h3>
                <p>
                    Precio:{{item.precio}}
                </p>
                <p>
                    Quedan:{{item.stock}} en stock
                </p>
                <p>
                    Llevas:{{cinput.cant[index]}}
                </p>
                <input type="number" readonly v-model="cinput.cant[index]" :id="'input-' + index" />
                <button @click="addOrLessBeer(cinput.cant[index], index, true)">más birra!</button>
                <button @click="addOrLessBeer(cinput.cant[index], index, false)">mmmm, me bajo</button>
            </li>
        </ul>
    `,
    data:()=> {
        return {
            cinput: {
                cant:[]
            },
            lis:[]
        }
    },
    created(){
      
    },
    computed:{
        listadoBeers(){
            let listado = store.getters.getListadoBeers;
            for(let [index, item] of listado.entries()){
                this.cinput.cant[index] = 0;
            }  
            return this.list = listado;
        }
    },
    methods:{
        addOrLessBeer(cant,index,action){
            let stockActual = this.listadoBeers[index].stock;
            action && cant >= 0 && stockActual >= 1 ? 
             this.activeAddOrLess(++this.cinput.cant[index], index, --this.listadoBeers[index].stock) : 
            !action && cant >= 1 && stockActual >= 1 ?
            this.activeAddOrLess(--this.cinput.cant[index], index, ++this.listadoBeers[index].stock) :
            console.log('addOrLessBeers');
        },
        
        activeAddOrLess(c,i, s){
            console.log('ls'+this.listadoBeers)
            let nuevoArr = [...this.listadoBeers];
            console.log('dfdf'+nuevoArr)
            return store.dispatch('setCuentaTotal', nuevoArr);
        },
    },
    
});

Vue.component('app-cerrar-mesa',{
    template:`
        <div class="cerrar-cuenta">
            <ul class="boleta">
                <li v-for="item in listarCuenta">
                    item
                </li>
            </ul>
            <button>Pagar</button>
        </div>
    `,
    data:()=> {
        return {
            
        }
    },
    computed:{
        listarCuenta(){
            console.log(store.getters.getCuentaTotal)
            return store.getters.getCuentaTotal;
        }
       
    }
})


//modelo
const app = new Vue({
    el: '#app',
    data: {

    },
    created(){
        axios
        .get("https://raw.githubusercontent.com/pablz/logourl/master/beers.json")
        .then(response => {
           let beers = response.data.beers;
           return store.dispatch('setListadoBeers', beers); 
        })
        .catch(error =>{
            console.error(error)
        })
        .finally(()=>{
           
            //this.isLoading = false;
            //this.setCant();
        })
    },


})

