
//component
Vue.component('listado-birra',{
    props:{
        title: {
            type: String,
            default: 'Headling'
        },
    },
    template:`
        <div>
            <div class="preload" v-if="isLoading">Loading...</div>
            <section>
                <article class="content-wrap">
                <h2>Bienvenido a la {{title}}</h2>
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
                            <input type="number" v-model="cinput.cant[index]" :id="'input-'+index" />
                            <button @click="addOrLessBeer(cinput.cant[index], index, true)">más birra!</button>
                            <button @click="addOrLessBeer(cinput.cant[index], index, false)">mmmm, me bajo</button>
                        </li>
                    </ul>
                </article>
            </section>
   
        </div>
       
    `,
    data: ()=> {
        return {
          listadoBeers:[],
          isLoading: true,
          cinput: {
            cant:[]
          },
         
        }
    },

    created(){
        axios
        .get("https://raw.githubusercontent.com/pablz/logourl/master/beers.json")
        .then(response => {
           this.listadoBeers = response.data.beers;
        })
        .catch(error =>{
            console.log(error)
        })
        .finally(()=>{
            this.isLoading = false;
            this.setCant();
        })
    },

    mounted(){    
      
    },

    methods:{
        setCant(){
            for(let [index, item] of this.listadoBeers.entries()){
                this.cinput.cant[index] = 0;
            }
        },
        addOrLessBeer(cant,index,action){
            let stockActual = this.listadoBeers[index].stock;
           /* action && cant >= 0 && cant < stockActual ? 
            this.activeAddOrLess(++cant, index, --this.listadoBeers[index].stock) : 
            action == false && cant >= 1 && cant < stockActual ?
            this.activeAddOrLess(--cant, index, ++this.listadoBeers[index].stock) :
            false;*/
            if(action && cant >= 0 && stockActual >= 1){
                this.activeAddOrLess(++this.cinput.cant[index], index, --this.listadoBeers[index].stock)
                console.log(this.cinput.cant[index])
            }else if (!action && cant >= 1 && stockActual >= 1){
                this.activeAddOrLess(--this.cinput.cant[index], index, ++this.listadoBeers[index].stock)
            }else {
                console.log('addOrLessBeers');
            }
        },
        
        activeAddOrLess(c,i, s){
            console.log( )
   
            
        },

    },



});

//modelo
const app = new Vue({
    el: '#app',
    data: {
        
    },

})

