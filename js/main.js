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
            commit('mtnCuentaTotal', n);
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
                <p>
                    Importe:{{currentBeer.importe[index]}}
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
            currentBeer:{
                importe:[]
            },
        }
    },
    created(){
      
    },
    computed:{
        listadoBeers(){
            let listado = store.getters.getListadoBeers;
            for(let [index, item] of listado.entries()){
                this.cinput.cant[index] = 0;
                this.currentBeer.importe[index] = 0;
            }  
            return listado;
        },

    },
    methods:{
        addOrLessBeer(cant,index,action){
            let stockActual = this.listadoBeers[index].stock;
            if(action && cant >= 0 && stockActual >= 1){
                ++this.cinput.cant[index];
                --this.listadoBeers[index].stock;
                this.setImporte(index);
            }else if(!action && cant >= 1 && stockActual >= 1){
                --this.cinput.cant[index];
                ++this.listadoBeers[index].stock;
                this.setImporte(index);
            }else {
                console.log('out')
            }
        },

        setImporte(i){
            let cloneListadoBeers = [...this.listadoBeers];
            this.currentBeer.importe[i] = this.listadoBeers[i].precio * this.cinput.cant[i];
            for (let [index,item] of cloneListadoBeers .entries()){
                cloneListadoBeers[index].cantidad =  this.cinput.cant[index];
                cloneListadoBeers[index].importe = this.listadoBeers[index].precio * this.cinput.cant[index]; 
            }
            console.log(cloneListadoBeers);
            return store.dispatch('setCuentaTotal',  cloneListadoBeers);
            
        }
        
    },
    
});

Vue.component('app-cerrar-mesa',{
    template:`
        <div class="cerrar-cuenta">
            <ul class="boleta" v-if="showCuenta">
                <li v-for="item in listarCuenta">
                   <p>Nombre: {{item.nombre}} - Precio: {{item.precio}}</p>
                   <p>Cantidad: {{item.cantidad}}</p>
                   <p>Subtotal: {{item.importe}}</p>
                   <p>{{total}}</p>
                </li>
            </ul>
            <button @click="cuenta()">Pagar</button>
        </div>
    `,
    data:()=> {
        return {
            showCuenta: false,
            total:'',
        }
    },
    computed:{
        listarCuenta(){
           return store.getters.getCuentaTotal.filter(item => item.cantidad >= 1);
        }
        
    },
    methods:{
        cuenta(){
            this.showCuenta = !this.showCuenta;
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

        })
    },


})

