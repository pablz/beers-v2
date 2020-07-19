const store = new Vuex.Store({
    state: {
        hashTag: '/',
        lotto: null,
        lottoUrl:'images/lotto-logos/',
        lang:null,
        siteWidth:null,
        wWidth:null,
        wHeight:null,
        totalScroll:null,
        mainSectionHeight:null,
        brandLogoUrl:'images/brand-logo/',
        brandLogo:'logo.png',
        jackpot:null,
        currency:null,
        jackpotMillion:['Million','Millones','Milhões'],
        millionTxt:null,
        mainMenuState:null,
        navIconColor:null,
        pageUrl:null,
        headerHeight:null,
        pageLoaded:null,
        blend:null,



        dataMax:null,
        dataMax2:null,
        vtotalpicks:null,
        vnormalball:null,
        vextraball:null,
        landStyle:null,
        landPromo:null,
        
        lottos:
        [
            {
                1:{
                    id:'2',
                    name:'Mega Millions',
                    nameEs:'Mega Millions',
                    namePt:'Mega Millions',
                    country:'USA',
                    countryEs:'USA',
                    countryPT:'E.U.A'
                },
                3:{
                    id:'3',
                    name:'Powerball',
                    nameEs:'Powerball',
                    namePt:'Powerball',
                    country:'USA',
                    countryEs:'USA',
                    countryPT:'E.U.A'
                },
                5:{
                    id:'5',
                    name:'New York Lotto',
                    nameEs:'New York Lotto',
                    namePt:'New York Lotto',
                    country:'USA',
                    countryEs:'USA',
                    countryPT:'E.U.A'
                },
                6:{
                    id:'6',
                    name:'Florida Lotto',
                    nameEs:'Florida Lotto',
                    namePt:'Florida Lotto',
                    country:'USA',
                    countryEs:'USA',
                    countryPT:'E.U.A'
                },
                8:{
                    id:'8',
                    name:'EuroMillions',
                    nameEs:'EuroMillones',
                    namePt:'EuroMillons',
                    country:'USA',
                    countryEs:'USA',
                    countryPT:'E.U.A'
                },
                9:{
                    id:'9',
                    name:'Canada Lotto',
                    nameEs:'Canada Lotto',
                    namePt:'Canada Lotto',
                    country:'Canada',
                    countryEs:'Canadá',
                    countryPT:'Canada'
                },
                11:{
                    id:'11',
                    name:'Mega-Sena',
                    nameEs:'Mega-Sena',
                    namePt:'Mega-Sena',
                    country:'Brazil',
                    countryEs:'Brasil',
                    countryPT:'Brasil'
                },
                25:{
                    id:'25',
                    name:'EuroMillions UK',
                    nameEs:'EuroMillones UK',
                    namePt:'EuroMillons UK',
                    country:'Europe',
                    countryEs:'Europa',
                    countryPT:'Europa'
                },
            }
        ]
        //cset:false,
    },
    mutations: {
        mtnHashTag(state, n){
            state.hashTag = n;
        },
        mtnSite(state, n){
            state.site = n;
        },
        mtnLotto(state, n){
            state.lotto = n;
        },
        mtnLottoUrl(state, n){
            state.lottoUrl = n;
        },
        mtnLang(state, n){
            let setLang = ['en-us','en-uk','es-la','pt-la'];
            if (setLang.includes(n)) {
                state.lang = n;
            }else {
                state.lang  = 'en-us';
            }
        }, 
        mtnSiteWidth(state, n){
            state.siteWidth = n;
        },
        mtnBrandLogoUrl(state, n){
            state.brandLogoUrl = n;
        },
        mtnBrandLogo(state, n){
            state.brandLogo = n;
        },
        mtnJackpot(state, n){
            state.jackpot = n;
        },
        mtnCurrency(state, n){
            state.currency = n;
        },
        mtnJackpotMillion(state, n){
            state.jackpotMillion = n;
        },
        mtnMillionTxt(state, n){
            state.millionTxt = n;
        },
        mtnDataMax(state, n){
            state.dataMax = n;
        },
        mtnDataMax2(state, n){
            state.dataMax2 = n;
        },
        /* --- */
        mtnTotalPicks(state, n){
            state.vtotalpicks = n;
        },
        mtnExtraBall(state, n){
            state.vextraball = n;
        },
        mtnNormalBall(state, n){
            state.vnormalball = n;
        },
        mtnLandStyle(state, n){
            state.landStyle = n;
        },
        mtnLandPromo(state, n){
            state.landPromo = n;
        },
        mtnWWidth(state, n){
            state.wWidth = n;
        },
        mtnBanner(state, n){
            state.banner = n;
        },
        mtnTotalScroll(state, n){
            state.totalScroll = n;
        },
        mtnMainSectionHeight(state, n){
            state.mainSectionHeight = n;
        },
        mtnNavIconColor(state, n){
            state.navIconColor = n;
        },
        mtnWHeight(state, n){
            state.wHeight = n;
        },
        mtnPageUrl(state, n){
            state.pageUrl = n;
        },
        mtnHeaderHeight(state, n){
            state.headerHeight = n;
        },
        mtnMainMenuState(state, n){
            state.mainMenuState = n
        },
        mtnPageLoaded(state, n){
            state.pageLoaded = n
        },
        mtnBlend(state, n){
            state.blend = n
        }
     },
    getters:{
        getHashTag (state){
            return state.hashTag
        },
        getSite (state){
            return state.site
        },
        getLotto (state){
            return state.lotto
        },
        getLottoUrl (state){
            return state.lottoUrl
        },
        getLang (state){
            return state.lang
        },
        getSiteWidth (state){
            return state.siteWidth
        },
        getBrandLogoUrl (state){
            return state.brandLogoUrl
        },
        getBrandLogo (state){
            return state.brandLogo
        },
        getJackpot (state){
            return state.jackpot
        },
        getCurrency (state){
            return state.currency
        },
        getJackpotMillion (state){
            return state.jackpotMillion
        },
        getMillionTxt (state){
            return state.millionTxt
        },
        getDataMax (state){
            return state.dataMax
        },
        getDataMax2 (state){
            return state.dataMax2
        },
        getTotalPicks (state){
            return state.vtotalpicks
        },
        getExtraBall (state){
            return state.vextraball
        },
        getNormalBall (state){
            return state.vnormalball
        },
        getLandStyle (state){
            return state.landStyle
        },
        getLandPromo (state){
            return state.landPromo
        },
        getWWidth (state){
            return state.wWidth
        },
        getBanner (state){
            return state.banner
        },
        getTotalScroll (state){
            return state.totalScroll
        },
        getMainSectionHeight (state){
            return state.mainSectionHeight
        },
        getNavIconColor (state){
            return state.navIconColor
        },
        getWHeight (state){
            return state.wHeight
        },
        getPageUrl (state){
            return state.pageUrl
        },
        getHeaderHeight (state){
            return state.headerHeight
        },
        getMainMenuState (state){
            return state.mainMenuState
        },
        getPageLoaded (state){
            return state.pageLoaded
        },
        getBlend (state){
            return state.blend
        }

    },
    actions: {
        updateHashTag: ({ commit }, n) => {
            commit('mtnHashTag', n)
        },
        updateSite: ({ commit }, n) => {
            commit('mtnSite', n)
        },
        updateLotto: ({ commit }, n) => {
            commit('mtnLotto', n)
        }, 
        updateLottoUrl: ({ commit }, n) => {
            commit('mtnLottoUrl', n)
        }, 
        updateLang: ({ commit }, n) => {
            commit('mtnLang', n)
        }, 
        updateSiteWidth: ({ commit }, n) => {
            commit('mtnSiteWidth', n)
        }, 
        updateBrandLogoUrl: ({ commit }, n) => {
            commit('mtnBrandLogoUrl', n)
        },
        updateBrandLogo: ({ commit }, n) => {
            commit('mtnBrandLogo', n)
        },   
        updateJackpot: ({ commit }, n) => {
            commit('mtnJackpot', n)
        }, 
        updateCurrency: ({ commit }, n) => {
            commit('mtnCurrency', n)
        }, 
        updateJackpotMillion: ({ commit }, n) => {
            commit('mtnJackpotMillion', n)
        },  
        updateMillionTxt: ({ commit }, n) => {
            commit('mtnMillionTxt', n)
        }, 
        updateDataMax: ({ commit }, n) => {
            commit('mtnDataMax', n)
        },
        updateDataMax2: ({ commit }, n) => {
            commit('mtnDataMax2', n)
        }, 
        updateTotalPicks: ({ commit }, n) => {
            commit('mtnTotalPicks', n)
        }, 
        updateExtraBall: ({ commit }, n) => {
            commit('mtnExtraBall', n)
        },
        updateNormalBall: ({ commit }, n) => {
            commit('mtnNormalBall', n)
        },   
        updateLandStyle: ({ commit }, n) => {
            commit('mtnLandStyle', n)
        },  
        updateLandPromo: ({ commit }, n) => {
            commit('mtnLandPromo', n)
        }, 
        updateWWidth: ({ commit }, n) => {
            commit('mtnWWidth', n)
        }, 
        updateBanner: ({ commit }, n) => {
            commit('mtnBanner', n)
        },  
        updateTotalScroll: ({ commit }, n) => {
            commit('mtnTotalScroll', n)
        },  
        updateMainSectionHeight: ({ commit }, n) => {
            commit('mtnMainSectionHeight', n)
        }, 
        updateNavIconColor: ({ commit }, n) => {
            commit('mtnNavIconColor', n)
        },  
        updateWHeight: ({ commit }, n) => {
            commit('mtnWHeight', n)
        },   
        updatePageUrl: ({ commit }, n) => {
            commit('mtnPageUrl', n)
        },  
        updateHeaderHeight: ({ commit }, n) => {
            commit('mtnHeaderHeight', n)
        },
        updateMainMenuState: ({ commit }, n) => {
            commit('mtnMainMenuState', n)
        }, 
        updatePageLoaded: ({ commit }, n) => {
            commit('mtnPageLoaded', n)
        },
        updateBlend: ({ commit }, n) => {
            commit('mtnBlend', n)
        },     
    }
});

Vue.component('lb-main-wrapper',{
    props:{
        mainClass:{
            type:String,
            default:'main-wrapper'
        },
        set:{
            type:String,
        },
        lang:{
            type:String,
            default:'en-us'
        },
        sitewidth:{
            type: Number,
        },
        contentwidth:{
            type: Number,
            default:1280
        },
        lottoid:{
            type:Number,
        },
        imgbg:{
            type: Boolean,
            default: false
        }
    },
    template:` 
        <div :class="[mainClass, set,{'main-wrapper-imgbg':imgbg, 'no-blend-mix': blendSupport }]" 
        :data-swidth="fnWidth" 
        :data-lang="fnLang">
            <slot></slot>
        </div>
    `, 
    data(){
        return{

        }
    },
    computed:{
        fnWidth(){
            return store.dispatch('updateSiteWidth', this.sitewidth); 
        },
        fnLang(){
            return store.dispatch('updateLang', this.lang); 
        },
        blendSupport(){
            return store.getters.getBlend;
        },  
    }
});

Vue.component('lb-header',{
    props: {    
        mainClass: {
            type: String,
            default: 'lb-header'
        },
        set: {
            type: String,
        },
        stickyheader: {
            type: Boolean,
            default: false
        },
        logobreak:{
            type: Boolean,
            default: false
        },
        title: {
            type: String,
        },
        logopos:{
            type: String,
            validator(value) {
                let pos = ['left', 'center', 'right'];
                if (pos.includes(value)) {
                    return value;
                }else {
                    return value = 'left';
                }
            }, 
            default: 'left',
        },
    
        logobreakWrap:{
            type: String,
            default:'logobreak-wrap',
        },
        mainMenu:{
            type: String,
            default:'main-menu absolute transition-035 right-0 material-icons underline-none icon-md z-index-900 '
            
        },
        mainNav: {
            type: String,
            default:'main-nav fixed top-0 left-0 full-width vh-100 v-center txt-center opacity-0 transition-05 padding-15 bg-white'
        },
        logoOnlyText:{
            type: String,
            default:'relative logo-txt opacity-0'
        },
        headerBgWrap:{
            type: String,
            default:'header-bg-wrap flex-item absolute full-width full-height top-0 left-0 transition-035'
        },
        navLoginWrap: {
            tpye: String,
            default:'nav-login-wrap full-width transition-035'
        },
        navShareWrap: {
            type: String,
            default: 'nav-share-wrap full-width txt-center tansition-035'
        },
        navCLangOptions:{
            type: String,
            default:'relative-right main-nav-clang-options'
        },
        cLangOptionsNav:{
            type: String,
            default:'cl-options-menu relative-left inline-block transition-05 bullets-none'
        },
        set3:{
            type: String,
        },
        mainIconNavCurrency:{
            type: String,
            default:'relative-left underline-none currency-box currency-main-btn circle cl-icon margin-right-5'
        },
        iconNavCurrency:{
            type: String,
            default:'relative underline-none currency-box circle cl-icon'
        }
        
    },
    template:` 
        <header :class="[mainClass, set, logpos,
            { 'fixed top-0 left-0 z-index-900 sticky-header': activeStickyHeader}]" 
            :data-stickyheader="fnStickyHeader" 
            :data-logopos="fnLogoPos"
            :data-active="fnOnHeader">
            <div :class="[headerBgWrap, {'on-scroll':onHeader}]"></div>
            <div class="content-wrap full-height">
                <div class="relative-right">
                    <slot name="header-top-wrap"> </slot>
                </div>
            
                <div class="relative flex row wrap y-content-center full-width full-height ">
                    
                    <template v-if="logobreak">
                        <div class="grow-1 flex-item">
                        <div :class="[logobreakWrap]" >
                            <a class="underline-none" href="index.html" :title="title">
                                <img class="relative crown transition-05" :src="clogoUrl + 'avatar-shadow.png'" width="50" :alt="title" />
                                <img :class="[logoOnlyText,{'opacity-1':onHeader}]" :src="clogoUrl + 'logo-txt.png'" width="190" :alt="title" />
                            </a>
                        </div>
                        </div>
                    </template>
                    <template v-if="!logobreak">
                        <div class="flex-item">
                            <a class="underline-none" href="index.html" :title="title">
                                <img class="logo-img" :src="clogoUrl + clogo" :alt="title" />
                            </a>
                        </div>
                        
                    </template>
       
                    <div class="flex-item grow-1 txt-right">
                        <div :class="[navCLangOptions]" v-if="onHeader">
                        
                            <a @click.prevent="fnNavLang" v-show="!openNavCurrency" href="#" class="relative-left underline-none margin-right-10 nav-flag-icon-wrap">
                                <img class="cl-icon" :src="'images/flags/'+ flag + '-xs.png'" width="25"/>
                            </a>
                            <ul :class="[cLangOptionsNav, set3,{'open-options': openNavLang}]" v-show="openNavLang" v-for="lang in flags" :key="">
                                <li v-for="fg in lang" class="fleft margin-right-5">
                                    <img @click="fnCurrentLang" class="cl-icon lang-icon" :src="'images/flags/'+fg.flag+'.png'" :data-flag="fg.country" width="25"/>
                                </li>
                            </ul>
                           
                            <a @click.prevent="fnNavCurrency" v-show="!openNavLang" href="#" :class="[mainIconNavCurrency, bgcolor, currency]" role="button" aria-hidden="true"> </a>
                            
                            <ul :class="[cLangOptionsNav, set3,{'open-options': openNavCurrency}]" v-show="openNavCurrency"  v-for="item in currencyList"> 
                                <li v-for="currency in item" class="fleft margin-right-5">
                                    <a  @click.prevent="fnCurrentCurrency" href="#" :class="[iconNavCurrency, currency.icon, currency.bg]" :data-currency="'fa-' + currency.icon" :data-bg="currency.bg" role="button" aria-hidden="true"></a>
                                </li>
                            </ul>
                            
                        </div>
                        <a @click.prevent="fnMainMenu" href="#" :class="[mainMenu,  iconColor, isActive ? 'gmenu' : 'gclose']" aria-hidden="true"></a>
                    </div>

                </div>   
                
            </div>
            <nav :class="[mainNav,{'on-main-nav': mainMenuState}]">
                
                <div class="dcell relative">
                    <div :class="[navLoginWrap, whClass]">
                        <slot name="main-menu-login"></slot>
                        <slot name="main-menu-cart"></slot>
                    </div>
                    <ul class="bullets-none">
                        <slot name="main-menu-nav"></slot>
                    </ul>
                    <div :class="[navShareWrap, navSharePos]">
                        <slot name="main-menu-share"></slot>
                    </div>
                    
                </div>
            </nav> 
        </header>
    `,
    data() {
        return {
            activeStickyHeader: null,
            logpos:null,
            onHeader:null,
            mainMenuState: false,
            tmainMenuState: null,
            navSharePos:null,
            openNavLang:false,
            openNavCurrency:false,
            flag:'gb',
            currency:'fa-dollar-sign',
            bgcolor:'bg-green',
            isActive:true,
            currencyList:[{
                dollar:{
                    icon:'dollar-sign',
                    bg:'bg-green',
                },
                euro:{
                    icon:'euro-sign',
                    bg:'bg-euro',
                },
                pound:{
                    icon:'pound-sign',
                    bg:'bg-uk-green',
                },
                real:{
                    icon:'real-sign',
                    bg:'bg-green',
                }
            }],
            flags:[{
                brazil:{
                    country:'brazil',
                    flag:'brazil-xs'
                },
                gb:{
                    country:'gb',
                    flag:'gb-xs'
                },
                spain:{
                    country:'spain',
                    flag:'spain-xs'
                }
            }]
           
        }
    },
    computed: {
        fnStickyHeader(){
            if (this.stickyheader != null && this.stickyheader == true ) {
                return this.activeStickyHeader = true;
            }
        },
        fnHastTag(){
            return store.getters.getHashTag
        },
        csite(){
            return store.getters.getSite;
        },
        clang(){
            return store.getters.getLang
        },
        clogoUrl(){
            return store.getters.getBrandLogoUrl
        },
        clogo(){
            return store.getters.getBrandLogo
        }, 
        fnLogoPos(){
            let logpos = null;
            if(this.logopos === 'left'){
               logpos = 'txt-left'
            }else if (this.logopos === 'center'){
                logpos = 'txt-center'
            }else{
                logpos = 'txt-right'
            }
            return this.logpos = logpos;
        },
        fnOnHeader(){
            let ts = store.getters.getTotalScroll;
            if(ts >= 100){
                return this.onHeader = true, store.dispatch('updateNavIconColor', 'dark'); 
            }else{
                return this.onHeader = false, store.dispatch('updateNavIconColor', 'dark');
            }
        },
        iconColor(){
            return store.getters.getNavIconColor;
        },
        whClass(){
            let ww = store.getters.getWWidth,
            wh = store.getters.getWHeight;
            if(wh > 360){
                return this.navSharePos = 'absolute', 'whdesk absolute left-0 full-width txt-center';
            }else{
                return 'relative txt-center', this.navSharePos = 'relative';
            }
        }
        
    }, 
    methods:{
        fnMainMenu(){
            if(this.isActive){
                return this.isActive = false, this.mainMenuState = true, store.dispatch('updateMainMenuState', this.mainMenuState), store.dispatch('updateNavIconColor', 'dark');
            }else{
                return this.isActive = true, this.mainMenuState = false, store.dispatch('updateMainMenuState', this.mainMenuState), store.dispatch('updateNavIconColor', 'dark');
            }
        },
        fnNavLang(){
            let langNavState = this.openNavLang;
            if(langNavState){
                return this.openNavLang = false;
            }else{
                return this.openNavLang = true, this.openNavCurrency = false;
            }
        },
        fnCurrentLang(e){
            let el = e.target,
            cflag = el.dataset.flag;
            return this.openNavLang = false, this.flag = cflag;
        },
        fnNavCurrency(){
            let currencyNavState = this.openNavCurrency;
            if(currencyNavState){
                return this.openNavCurrency = false;
            }else{
                return this.openNavCurrency = true, this.openNavLang = false;
            }
        },
        fnCurrentCurrency(e){
            let el = e.target,
            ccurrency = el.dataset.currency,
            bg = el.dataset.bg;
            return this.openNavCurrency = false, this.currency = ccurrency, this.bgcolor = bg;
        }
    }
});

Vue.component('lb-main',{
    props:{
        mainClass: {
            type: String,
            default:'lb-main',
        },
        set: {
            type: String,
        },
        id: {
            type: String,
            default: 'main'
        },
    },
    template:`
        <main :id="id" :class="[mainClass, set]" role="main" :data-million="cmillion">
            <slot></slot>
        </main>
    `,
    data(){
        return {
        }
    },
    computed:{
        cmillion(){
            let lang = store.getters.getLang,
            million = store.getters.getJackpotMillion,
            txt =null;
            if(lang === 'en-us' || lang === 'en-uk'){
                txt = million[0];
            }else if(lang === 'es-la' || lang === 'es-mx'){
                txt = million[1];
            }else{
                txt = million[2];
            }
            return store.dispatch('updateMillionTxt', txt), txt;
        },
    }
    
});

Vue.component('lb-section',{
    props: {
        mainClass: {
            type: String,
            default: 'lb-section'
        },
        set: {
            type: String,
        },
        id:{
            type: String,
        },
        fullcover: {
            type: Boolean,
            default: false
        },
        image:{
            type:String,
        },
        mbimage:{
            type:String,
        },
        parallax: {
            type: Boolean,
            default:false,
        },
        ypos:{
            type: Boolean,
            default: false
        }
    },
    template: `
        <section :id="id" :class="[
            mainClass, 
            set, 
            {
                'fullCover': fullcover, 
                'parallax': parallax, 
                'ypos-section': yposClass,
            }]" 
            :style="bgurl" 
            :data-bgimg="fnBgImg"
            :data-scroll="fnTScroll"
           >
            <slot></slot>
        </section>
    `,
    data(){
        return {
            bgurl:null,
            yScroll:null,
            elpos:null,
            yposClass:null,
        }
    },
    computed: {
        fnBgImg(){
            let ww = store.getters.getWWidth,
            bg = this.image,
            bg2 = this.mbimage; 
            if ((bg != null && (/\.(jpg|png|gif)$/i).test(bg)) || (bg2 != null && (/\.(jpg|png|gif)$/i).test(bg2))){
                imagebg = null;
                if(ww >= 980){
                    imagebg = bg;  
                }else{
                    imagebg = bg2;
                }  
                return this.bgurl = `backgroundImage:url(images/${imagebg}); backgroundPosition: center 0; backgroundRepeat: no-repeat; backgroundSize:cover`, store.dispatch('updateBanner', this.bgurl);;
            }else{
                //return this.bgurl = 'background:transparent';
            }
        },
        fnTScroll(){   
            return this.yScroll = store.getters.getTotalScroll;
        },
    },
    beforeUpdate(){
        let sid = this.id;
        if(this.ypos && (sid != null || sid != '')){
            let sectionPos = document.getElementById(sid).offsetHeight;
            if(this.yScroll >= sectionPos + 100){
                return this.elpos = sectionPos, this.yposClass = true;
            }else {
                //return this.yposClass = false;
            }
        }
    },

});

Vue.component('lb-article',{
    props: {
        mainClass: {
            type: String,
            default: 'lb-article'
        },
        set: {
            type: String,
        },
        full:{
            type: Boolean,
            default: false
        },        
    },
    template: `
        <article :class="[mainClass, set, {'content-wrap':!full}]">
            <slot></slot>
        </article>
    `,
    data() {
        return {

        }
    },
    
  
});

Vue.component('lb-slider',{
    props:{
        mainClass:{
            type:String,
            default:'lb-slider bullets-none relative-left full-width padding-none-important'
        },
        set:{
            type:String,
        },
        id:{
            type:String,
            default:'slider'
        },
        controls:{
            type: Boolean,
            default: false
        },
        items:{
            type: Number,
            default:1,
        },
        autoplay:{
            type:Boolean,
            default:true,
        },
        controls:{
            type:Boolean,
            default:false,
        },
        slideby:{
            type:String,
            default:'page'
        },
        loop:{
            type: Boolean,
            default:true
        },
        hoverpause:{
            type: Boolean,
            default: true,
        },
        touch:{
            type: Boolean,
            default: true,
        },
        mode:{
            type: String,
            validator(value) {
                let md = ['carousel','gallery'];
                if (md.includes(value)) {
                    return value;
                }else {
                    return value = 'gallery';
                }
            }, 
            default:'gallery'
        },
        speed:{
            type: Number,
            default:300
        },
        delay:{
            type: Number,
            default:300
        },
        gutter:{
            type: Number,
            default:0
        },
        mousedrag: {
            type: Boolean,
            default:false,
        },
        navigation:{
            type: Boolean,
            default: true,
        },
        breakpoint1: {
            type: Number,
            default:1
        }, 
        breakpoint2:{
            type:Number,
            default:2
        },
        breakpoint3:{
            type:Number,
            default:4
        }

    },
    template:`
        <ul :class="[mainClass, set]" :id="id">
            <slot></slot>
        </ul>
    `,
    data(){
        return{

        }
    },
    mounted(){
        if(this.id != null && this.id != ''){
            var slider = tns({
                container: '#' + this.id,
                items: this.items,
                slideBy:this.slideby,
                autoplay: this.autoplay,
                loop: this.loop,
                autoplayHoverPause:this.hoverpause,
                touche:this.touch,
                mode:this.mode,
                navPosition:'bottom',
                controls:this.controls,
                speed:this.speed,
                animateDelay:this.delay,
                swipeAngle: false,
                gutter:this.gutter,
                mouseDrag:this.mousedrag,
                nav:this.navigation,
                responsive: {
                    320: {
                      items: this.breakpoint1
                    },
                    480: {
                        items: this.breakpoint2
                    },
                    980: {
                      items: this.breakpoint3
                    }
                  }
                
            });
        }
        
    }
});

Vue.component('lb-img-bg',{
    props:{
        mainClass:{
            type: String,
            default:'relative-left full-width full-height lb-img-bg'
        },
        set:{
            type:String
        },
        id:{
            type:String
        },
        image:{
            type: String,
        },
        mbimage:{
            type: String,
        }
    },
    template:`
        <div :class="[mainClass, set]" :style="bgurl"  :data-bgimg="fnBgImg">
            <slot></slot>
        </div>
    `,
    data(){
        return{
            bgurl:null
        }
    },
    computed:{
        fnBgImg(){
            let ww = store.getters.getWWidth,
            bg = this.image,
            bg2 = this.mbimage; 
            if ((bg != null && (/\.(jpg|png|gif)$/i).test(bg)) || (bg2 != null && (/\.(jpg|png|gif)$/i).test(bg2))){
                imagebg = null;
                if(ww >= 980){
                    imagebg = bg;  
                }else{
                    imagebg = bg2;
                }  
                return this.bgurl = `backgroundImage:url(images/banner-home/${imagebg}); backgroundPosition: center 0; backgroundRepeat: no-repeat; backgroundSize:cover`;
            }else{
                return this.bgurl = 'background:transparent';
            }
        },
    }
});

Vue.component('lb-cover',{
    props:{
        mainClass:{
            type: String,
            default:'lb-cover-offer absolute top-0 left-0 width-100-percent height-100-percent v-center txt-center overflow-hidden'
        },
        set:{
            type:String,
        },
        lotto:{
            type: Number
        },
        name:{
            type: String, 
        },
        country:{
            type: String
        },
        jackpot:{
            type: Number,
        },
        freehtml:{
            type: Boolean,
            default: false
        },
        dcell:{
            type: String,
            default:'dcell'
        },
        animate:{
            type:String,
            validator(value) {
                let setLang = ['fade-in','expand-in','bottom-in','top-in','left-in', 'right-in','none'];
                if (setLang.includes(value)) {
                    return value;
                }else {
                    return value = 'none';
                }
            }, 
            default:'none'
        },
        lbfreebox: {
            type: String,
            default:'lb-cover-free-box'
        },
        sliderlottobg:{
            type: Boolean,
            default: false,
        },
        image:{
            type: String,
        },
        mbimage:{
            type: String,
        },
        boxbg:{
            type: Boolean,
            default: false,
        },
        blendbox:{
            type:Boolean,
            default: false,
        },
        blendBoxClass:{
            type: String,
            default:'absolute blend-box top-0 left-0 full-width full-height blend-color'
        },
        setblend:{
            type: String,
        }
    },
    template:`
    <div>
        <div v-if="showBlendBox" :class="[blendBoxClass, setblend, bggBlend]"></div>
        <div :class="[mainClass, set, lottoClass]" :style="bgurl" :data-bg="fnBgImg"> 
        <div :class="[dcell, coverAnim]">
            <template v-if="!freehtml">
                <img class="lotto-logo" :src="'images/lotto-logos/' + lotto +'.png'" width="85"/>
                <h2 class="roboto uppercase white weight-700 margin-bottom-10 txt-shadow-dark">
                    {{name}}<span class="weight-300 letter-spacing--1"><span class="bar relative inline-block margin-left-right-5">|</span>{{country}}</span>
                </h2>
                <h3 class="roboto weight-300 white txt-shadow-dark">
                    $<strong class="weight-600 inline-block margin-left-right-5 woow">{{jackpot}}</strong>{{millionTxt}}
                </h3>
                <slot></slot> 
                <button class="button green big roboto weight-400">Play Now</button>
                
            </template>        
            <template v-if="freehtml">
                <slot name="free-html"></slot>  
            </template>
            </div>
        </div>
    </div>
    `, 
    data(){
        return{
            logoUrl:null,
            coverAnim:null,
            bgurl:null,
            bggBlend:"bgg-"+this.lotto,
           //lottoClass:null,
        }
    },
    computed:{
        millionTxt(){
            return store.getters.getMillionTxt;
        },
        lottoClass() {
            return 'lotto-' + this.lotto; 
        },
        fnBgImg(){
            let ww = store.getters.getWWidth,
            bg = this.image,
            bg2 = this.mbimage; 
            if ((bg != null && (/\.(jpg|png|gif)$/i).test(bg)) || (bg2 != null && (/\.(jpg|png|gif)$/i).test(bg2))){
                imagebg = null;
                if(ww >= 980){
                    imagebg = bg;  
                }else{
                    imagebg = bg2;
                }  
                return this.bgurl = `backgroundImage:url(${imagebg}); backgroundPosition: center 0; backgroundRepeat: no-repeat; backgroundSize:cover`;
            }else{
                return this.bgurl = 'background:transparent';
            }
        },
        showBlendBox(){
            let blend = store.getters.getBlend;
            if(this.blendbox && !blend){
                return true;
            }else {
                return false;
            }
        }
    }
});

Vue.component('lb-box-fx',{
    props:{
        mainClass:{
            type: String,
            default: 'lb-boxes-fx-wrap relative-left full-width full-height top-0 left-0 overflow-hidden'
        },
        set:{
            type: String
        },
        set2:{
            type: String
        },
        lotto:{
            type: Number,
        },
        animaBox:{
            type: String,
            default:'lb-anima-box absolute full-width opacity-0 padding-10 transition-035 v-center'
        },
        anim:{
            type:String,
            validator(value) {
                let setLang = ['fade-in','expand-in','bottom-in','top-in','left-in', 'right-in','none'];
                if (setLang.includes(value)) {
                    return value;
                }else {
                    return value = 'bottom-in';
                }
            }, 
            default:'bottom-in'
        },
        boxbg:{
            type: String,
        },
        ribbon:{
            type: Boolean,
            default: false
        },
        ribbontxt:{
            type: String,
            default: 'Popular'
        },
        
    },
    template:`
        <div :class="[mainClass, set, anim]" :style="bgUrl" :data-bg="fnBgImage">
      
            <div :class="[animaBox, set2]">
                <div class="dcell txt-center">
                    <slot>
                    </slot>
                </div> 
            </div>
            
            <slot name="front-img"></slot>
            <slot name="free-img"></slot>
            <a href="#" class="link-surface z-index-100" aria-hidden="true" role="button"></a>
            <p class="ribbon ribbon-top-left" v-if="ribbon"><span>{{ribbontxt}}</span></p>
        </div>
    `,
    data(){
        return {
            bgUrl:null
        }
    },
    computed:{
        fnBgImage(){
            let bg = this.boxbg;
            if (bg != null){
                return this.bgUrl = `backgroundImage:url(${bg}${this.lotto}.jpg); backgroundPosition: center center; backgroundRepeat: no-repeat; backgroundSize:cover`;
            }else{
                return this.bgUrl = 'background:transparent';
            }
        },
    }
        
});

Vue.component('lb-box-fx2',{
    props:{
        mainClass:{
            type: String,
            default:'lb-box-fx2 relative-left overflow-hidden'
        },
        set:{
            type: String,
        },
        lotto:{
            type: Number
        },
 
    },
    template:`
        <div :class="[mainClass, set]">
            <slot></slot>
            <div class="cover-fx2 absolute top-0 left-0 width-100-percent height-100-percent black-bgg-fx txt-center">
                <div class="xy-center">
                    <slot name="lb-box-fx2-content"></slot>
                </div>
            </div>
            <a href="#" class="link-surface z-index-100" aria-hidden="true" role="button"></a>
        </div>
    `
});

Vue.component('lb-multi-box',{
    props:{
        mainClass:{
            type:String,
            default:'lb-multi-box relative-left overflow-hidden txt-center'
        },
        set:{
            type:String,
        },
        lotto:{
            type: Number,
        },
        name:{
            type: String,
        },
        country:{
            type:String,
        },
        jackpot:{
            type:Number,
        },
        abstract:{
            type: Boolean,
            default:false,
        },
        darkbg:{
            type: Boolean,
            default: true,
        },
        blendbox:{
            type: Boolean,
            default: false
        },
        blendBoxClass:{
            type: String,
            default:'absolute blend-box top-0 left-0 full-width full-height blend-color'
        },
        autosize:{
            type: Boolean,
            default: true,
        },
    },
    template:`
        <div :class="[mainClass, set,{'abstract':abstract, 'full-width full-height':!autosize}]">
            <div v-if="showBlendBox" :class="[blendBoxClass, bggBlend]"></div>
            <div v-if="darkbg" class="cover-bg"></div>
            <slot></slot>
            <div class="cover-box absolute top-0 left-0 width-100-percent height-100-percent black-bgg-fx txt-center">
                <div class="xy-center">
                    <slot name="lb-multibox-content"></slot>
                </div>
            </div>
            <a href="#" class="link-surface z-index-100" aria-hidden="true" role="button"></a>
        </div>
    `,
    data(){
        return{
            bggBlend:"bgg-"+this.lotto,
        }
    },
    computed:{
        showBlendBox(){
            let sb = store.getters.getBlend;
            if(this.blendbox && !sb){
                return true;
            }else {
                return false;
            }
        }
    }

});

Vue.component('lb-promo-picker',{
    props:{
        mainClass:{
            type: String,
            default:'lb-promo-picker flex row wrap full-width padding-10'
        },
        set:{
            type: String,
        },
        lotto1:{
            type: Number,
        },
        lotto1name:{
            type: String,
        },
        lotto1country:{
            type: String,
        },
        lotto2:{
            type: Number,
        },
        lotto2name:{
            type: String,
        },
        lotto2country:{
            type: String,
        },
        
    },
    template:`
        <div :class="[mainClass, set]">
            <div class="flex-item grow-1">
                <div class="relative-left full-width flex row wrap y-content-center" >
    
                    <div class="flex-item">

                        <img class="lotto-logo" :src="'images/lotto-logos/' + this.lotto1 +'.png'" width="105"/>
                    </div>
                    <div class="flex-item">
                    
                        <h3 class="dark inline-block roboto weight-600 uppercase line-height-normal">
                            {{this.lotto1name}}<span class="weight-300"><span class="bar relative inline-block margin-left-right-5">|</span>{{this.lotto1country}}</span>
                        </h3>
                        <slot name="lotto-1">
                        </slot>

                        <a class="button green underline-none">Play Now</a>  
                    </div>
                   
                </div>
                
            </div>

            <div class="flex-item grow-1">
                <div class="relative-left full-width flex row wrap y-content-center" >
    
                    <div class="flex-item">

                        <img class="lotto-logo" :src="'images/lotto-logos/' + this.lotto2 +'.png'" width="105"/>
                    </div>
                    <div class="flex-item">
                    
                        <h3 class="dark inline-block roboto weight-600 uppercase line-height-normal">
                            {{this.lotto1name}}<span class="weight-300"><span class="bar relative inline-block margin-left-right-5">|</span>{{this.lotto2country}}</span>
                        </h3>
                        <slot name="lotto-2">
                        </slot>

                        <a class="button green underline-none">Play Now</a>  
                    </div>
                   
                </div>
                
            </div>
            
            <div class="flex-item grow-1">
            </div>
        </div>
    `
});

Vue.component('lb-social-share',{
    props:{
        mainClass:{
            type: String,
            default:'lb-social-share full-width flex row wrap x-content-center bullets-none'
        },
        set:{
            type: String,
        },
        facebook:{
            type: String,
        },
        twitter:{
            type: String,
        },
        whatsapp:{
            type:String,
        },
    },
    template:`
        <div>
        <h5 class="roboto weight-400 white txt-center share-us-txt">Share us</h5>
        <ul :class="[mainClass, set]">
            <li class="flex-item">
                <a :href="'https://www.facebook.com/sharer/sharer.php?u='+fnPageUrl" target="_blank">
                    <span class="fab fa-facebook-f" aria-hidden="true"></span>
                </a>
            </li>
            <li class="flex-item">
                <a :href="'https://twitter.com/intent/tweet?url='+fnPageUrl+'&text=Play%20%any%20lottery%20online%20by%20@LottoKings'" target="_blank" title="">
                    <span class="fab fa-twitter" aria-hidden="true"></span>
                </a>
            </li>
            <li class="flex-item">
                <a :href="'whatsapp://send?text='+fnPageUrl" data-action="share/whatsapp/share">
                    <span class="fab fa-whatsapp" aria-hidden="true"></span>
                </a>
            </li>
        </ul>
        </div>
    `,
    data(){
        return{
            
        }
    },
    computed:{
        fnPageUrl(){
            return store.getters.getPageUrl
        }
    }
});

Vue.component('lb-lotto-picker',{
    props:{
        mainClass:{
            type: String,
            default:'picker-wrap relative-left full-width'
        },
        set:{
            type:String,
        },
        lotto:{
            type:Number
        },
        tickets:{
            type: Number,
            default:5,
        },
        balls:{
            type:Number,
            default:60
        },
        ticketClass:{
            type: String,
        },
        name:{
            type:String,
        },
        country:{
            type:String,
        },
        jackpot:{
            type: Number
        },
        headerLottoClass:{
            type: String,
            default:'picker-header-lotto-wrap full-width flex row wrap y-items-center margin-bottom-5',
        },
        set2:{
            type: String
        },
        ticketBoxClass: {
            type: String,
            default:'ticket-box relative full-width'
        },
        ballClass: {
            type: String,
            default:'ticket-ball relative inline-block roboto weight-500 material-icons'
        },
        megaboxtotal:{
            type: Number,
            default:21,
        },
        ctaValue: {
            type: String,
            default:'pickerval-num transition-035 inline-block'
        }, 
        pickerHeader: {
            type: String,
            default:'picker-header transition-035 bg-white padding-20 relative flex row wrap x-content-center y-items-center full-width'
        },
        pickerTicketWrap:{
            type: String,
            default:'picker-tikets-wrap full-width relative-left padding-10 transition-035'
        }
    },
    template:`
        <div :class="[mainClass, set, pickerStyle]">
       
            <div class="content-wrap">

                <div :class="[headerLottoClass, headerLottoBg]" >
                    <div class="flex-item grow-2">
                        <img :src="'images/lotto-logos/' + lotto +'.png'" width="55"/>
                        <h3 class="roboto white inline-block picker-lotto-name relative margin-left-5 uppercase dark weight-600 lb-show-lotto">
                            {{name}}<span class="weight-300"><span class="bar relative inline-block margin-left-right-5">|</span>{{country}}</span>
                        </h3>
                    </div>
                    <div class="flex-item grow-3">
                        <h4 class="lb-jackpot relative txt-center roboto weight-400 white inline-block">
                            <span class="block weight-300">Win the next jackpot</span>
                            $<strong class="weight-600 inline-block margin-left-right-5 lb-jackpot-value woow yellow-ltk">{{jackpot}}</strong>Million
                            </span>
                        </h4>
                        <p class="timer relative-right weight-300 white roboto">
                            <span class="material-icons gschedule relative white margin-right-5"></span>
                            Fri <strong>22</strong>Mar <strong>20:30</strong>
                        </p>
                    </div>
                  
                </div>
                <div class="picker-content relative-left full-width bg-white">
                    <div :class="[pickerHeader, {'picker-header-fixed': fnHeaderFixed}]" id="picker-header">  
                        <div class="flex-item">
                            <a href="#" class="picker-button">
                                <span class="relative">Quick Pick</span> <i class="material-icons gplusone weight-500 blue-ltk"></i>
                            </a>
                            <a href="#" class="picker-button">     
                                <i class="material-icons gadd weight-500 blue-ltk"></i> <span class="relative">All</span>
                            </a>
                            <a href="#" class="picker-button" aria-hidden="true" role="button">
                                <i class="material-icons gdelete"></i>
                            </a>
                        </div>
                    </div>
                    
                    <div :class="[pickerTicketWrap, {'tickets-wrap-ptop':fnHeaderFixed}]">
                        <div class="picker-slider-wrap">
                        <lb-slider
                        id="pickerSlider"
                        :items="5"
                        :speed="400"
                        mode="carousel"
                        :autoplay="false"
                        :loop="false"
                        :controls="true"
                        set="picker-slider"
                        :mousedrag="true"
                        :gutter="0"
                        :breakpoint1="1"
                        :breakpoint2="3"
                        :breakpoint3="5"
                        >
                            <li class="ticket-li relative" v-for="i in totalTicktes" :key="i" :id="'ticket-' + i">
                                <div :class="[ticketBoxClass]">
                                    <div class="ticket-header relative-left full-width v-center">
                                        <div class="dcell">
                                            <h5 class="inline-block blue-ltk2 weight-400">
                                                Choose <span>5</span>
                                            </h5>
                                            <div class="relative-right ticket-header-buttons">
                                                <a href="#" class="picker-button material-icons grefresh" aria-hidden="true" role="button"></a>
                                                <a href="#" class="picker-button material-icons gdelete" aria-hidden="true" role="button"></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="ticket-lines relative margin-auto padding-10 full-width flex row wrap ">
                                        <p class="flex-item ticket-ball-wrap " v-for="k in totalBalls" :key="k">
                                            <span :class="[ballClass]" @click="fnNum" :id="'ball-' + k">
                                                {{k}}  
                                            </span>
                                        </p>
                                    </div>
                                    <div class="megabox relative-left margin-top-bottom-10 full-width padding-left-right-10">
                                        <p class="relative-left roboto margin-right-5 inline-block weight-400">
                                            {{name}}
                                        </p>
                                        <div class="relative-left picker-lines-select">
                                            <input :id="'lines-value-' + i" :v-model="'linesVal-' + i" pattern="\d+" type="number" />
                                            <a href="#" class="relative ictrl lines-btn line-add underline-none material-icons dark" :data-add="'lines-value-' + i" role="button" aria-hidden="true"></a>
                                            <a href="#" class="relative ictrl lines-btn line-less underline-none material-icons dark" :data-less="'lines-value-' + i" role="button" aria-hidden="true"></a>
                                        </div>
                                        <a href="#" class="relative underline-none margin-left-5 icon-help material-icons ghelp md-icon" aria-hidden="true" role="button"></a>           
                                    </div>
                                    <p class="ticket-under-number tertiary-3 absolute roboto weight-900 top-50p left-50p">
                                        {{i}}
                                    </p>
                                    <i class="material-icons ticket-complete gcheck-circle green absolute top-50p left-50p none"></i>
                                   
                                </div>
                                
                            </li>
                        </lb-slider>
                        </div>
                    </div>
                    <div class="relative-left picker-panels-wrap full-width">
                        <div class="lotto-picker-footer relative-left full-width flex row wrap y-items-center">
                            <div class="flex-item picker-options-panel flex-auto-panel padding-10 transition-05">
                                <h5 class="block margin-bottom-10 blue-ltk2 weight-500">Duration</h5>
                                <div class="full-width flex row wrap">
                                    <div class="custom-check-inline fleft margin-right-20 grow-1">
                                        <input class="custom-check" type="radio" id="draws-1" name="duration" />
                                        <label class="radio" for="draws-1">
                                            <span class="relative">1 draws</span>
                                        </label>
                                    </div>
                                    <div class="custom-check-inline fleft margin-right-20 grow-1">
                                        <input class="custom-check" type="radio" id="draws-5" name="duration" />
                                        <label class="radio" for="draws-5">
                                            <span class="relative">5 draws</span>
                                        </label>
                                    </div>
                                    <div class="custom-check-inline fleft margin-right-20 grow-1">
                                        <input class="custom-check" type="radio" id="draws-10" name="duration" />
                                        <label class="radio" for="draws-10">
                                            <span class="relative">10 draws</span>
                                        </label>
                                    </div>
                                    <div class="custom-check-inline fleft margin-right-20 grow-1">
                                        <input class="custom-check" type="radio" id="draws-20" name="duration" />
                                        <label class="radio" for="draws-20">
                                            <span class="relative">20 draws</span>
                                        </label>
                                    </div>
                                    <div class="custom-check-inline fleft margin-right-20 grow-1">
                                        <input class="custom-check" type="radio" id="draws-25" name="duration" />
                                        <label class="radio" for="draws-25">
                                            <span class="relative">25 draws</span>
                                        </label>
                                    </div>
                                    <div class="custom-check-inline fleft margin-right-20 grow-1">
                                        <input class="custom-check" type="radio" id="draws-50" name="duration" />
                                        <label class="radio" for="draws-50">
                                            <span class="relative">50 draws</span>
                                        </label>
                                    </div>
                                
                                </div>
                            </div>

                            <div class="flex-item flex-auto-panel picker-options-panel padding-10 transition-05">
                                <h5 class="block margin-bottom-10 blue-ltk2 weight-500">Extra game</h5>
                                <div class="full-width flex row wrap">
                                    
                                    <div class="custom-check-inline fleft margin-right-20 grow-1">
                                        <input class="custom-check" type="checkbox" id="powerplay" name="" />
                                        <label class="checkbox" for="powerplay">
                                            <span class="relative">PowerPlay</span>
                                        </label>
                                    </div>
                                
                                </div>
                            </div>

                            <div class="flex-item lotto-picker-cta flex-auto-panel padding-5 txt-right">
                               
                                <p class="cta-total-txt weight-500 padding-right-20 margin-bottom-5">
                                    Total:<strong class="inline-block weight-600 blue-ltk2 margin-left-5">$ <span :class="[ctaValue, prizeOn]">{{ctaTotal}}</span>.00</strong>
                                </p>
                                <a href="#" class="button relative green big add-to-cart">
                                    <i class="gcart material-icons yellow-ltk"></i><span class="relative margin-left-5">Submit</span>
                                </a>
                                
                            </div>           
                        </div>
                    </div>

                </div>
            </div>
        </div>
    `,
    data(){
        return{
            headerLottoBg:null,
            selected:null,
            ctaTotal:0,
            prizeOn: 'class-none',
            ticketCompleted: null,
            linesVal:1,
            tiketWrapHeight:null
        }
    },
    computed:{
        pickerStyle(){
            let lotto = this.lotto;
            if(lotto != null || lotto != ''){
                return this.headerLottoBg = `bgg-left-${this.lotto}`,`bg-lotto-${this.lotto} lotto-${this.lotto}`
            }
        },
        totalTicktes(){
            return this.tickets;
        },
        totalBalls(){
            return this.balls;
        },
        totalMegaBox(){
            return this.megaboxtotal;
            //let ts = store.getters.getTotalScroll;
        },
        fnHeaderFixed(){
            let ts = store.getters.getTotalScroll,
            hheight = store.getters.getHeaderHeight,
            mstate =  store.getters.getMainMenuState;
            if(ts >= hheight && ts <= this.tiketWrapHeight + hheight +80 && !mstate){
                return true;
            }else{
                return false;
            }
        }
    },
    methods:{
        fnNum(e){
            var c = this.ctaTotal;
            let ball = e.target;
            console.log(ball);
            if(ball.classList.contains('selected')){
                ball.classList.remove('selected');
                return this.ctaTotal = this.ctaTotal - 1, this.prizeOn = 'class-none';
            }else {
                ball.classList.add('selected');
                return this.ctaTotal = this.ctaTotal + 1, this.prizeOn = 'prizeOn';    
            }
        },
       
    },
    beforeUpdate(){
        let tiketHeight = document.querySelector('.picker-slider-wrap').offsetHeight;
        return this.tiketWrapHeight  = tiketHeight;
    },

    mounted(){
        var count = 0;
        $('.ticket-ball').on('click', function(){
            var current = $(this);           
            a = current.parent().parent('.ticket-lines'),
            b = current.parent().parent().parent('.ticket-box');
            t = $(a).find('.selected').length;
            if(t == 5){
                $(b).find('.ticket-complete').fadeIn().addClass('onTicketComplete');
                $(b).find('.ticket-under-number').fadeOut();
                
            }else if(t > 5){
                console.log('nop')
                $(b).find('.ticket-complete').fadeOut().removeClass('onTicketComplete');
                $(b).find('.ticket-under-number').fadeIn();
                $(this).addClass('tickerXg');
            }else {
                $(b).find('.ticket-complete').fadeOut().removeClass('onTicketComplete');
                $(b).find('.ticket-under-number').fadeIn();
            }
        });
    }
    
});

Vue.component('lb-preload',{
    props:{
        mainClass:{
            type: String,
            default:'lb-preload fixed top-0 left-0 full-width vh-100 bg-white v-center txt-center'
        },
        set:{
            type:String
        }
    },
    template:`
        <div v-if="!loading" :class="[mainClass, set]" :data-loading="loadingState">
            <div class="dcell">
                <img src="images/brand-logo/avatar-shadow.png" class="anim-pulse" width="50" />
                <br/>
                <img src="images/brand-logo/logo-txt.png" width="190" />
                <br/>
                <p class="roboto weight-600 blue-dark margin-bottom-10">Loading....</p>
                <a @click.prevent="fnSkipPreloader" href="#" class="roboto transition-05 inline-block padding-5 skip underline-none orange weight-600">
                    Skip Preloader
                </a>
            </div>
        </div>
    `,
    data(){
        return {
            loading:false
        }
    },
    computed:{
       loadingState(){
            return this.loading = store.getters.getPageLoaded
       }
    },
    methods:{
        fnSkipPreloader(){
            return this.loading = true, store.dispatch('updatePageLoaded', true);
        }
    }
    

});



// old 
Vue.component('lb-form',{
    props: {
        mainClass: {
            type: String,
            default: 'lb-form'
        },
        set: {
            type: String
        },
        id: {
            type: String
        },
        action: {
            type: String
        },
        method: {
            type: String
        },
        submitscript: {
            type: String
        },
        headtext: {
            type: String
        },
        button: {
            type: String
        }
    },
    template: `
        <form :class="[mainClass, set]" :action="action" :method="method" :id="id">
            <div class="focus-overlay" ></div>
            <div class="head-form">
                <h2>
                    <slot name="form-head-text"></slot>
                </h2>
                <div class="head-form-footer"></div>
            </div>
           <slot name="input"></slot>
        </form>
    `,
});

Vue.component('lb-counter', {
    props: {
        mainClass:{
            type: String,
            default: 'lb-counter',
        },
        set: {
            type: String,
        },
    },
    template:`
        <div class="counter">
            <div class="timer">
                <div class="num" id="td_lotto_countdown_days_1"></div>
                <div class="num" id="td_lotto_countdown_hour_1"></div>
                <div class="num" id="td_lotto_countdown_minute_1"></div>
                <div class="num" id="td_lotto_countdown_second_1"></div>
                <div class="time"> 
                    <span class="units ref" id="td_lotto_countdown_days_ref_1" ></span>
                    <span class="units">hours</span>
                    <span class="units">mins</span>
                    <span class="units">secs</span>
                </div>
            </div>
        </div>   
    `,
    data(){
        return {
        }
    },
    mounted(){
        var time_D1='24';
        var time_M1='2';
        var time_Y1='2018';
        var time_HH1='19';
        var time_MM1='59';
    }

});

Vue.component('lb-steps',{
    props:{
        mainClass:{
            type: String,
            default: 'lb-steps'
        },
        set: {
            type: String
        },
        id: {
            type: String
        },
        imgmobile: {
            type: Boolean
        }
        
    },
    template:`
        <ul :id="id" :class="[mainClass, set, { 'step-img-mobile-on' : showImgMobile }]" :data-imgmobile="fnImgMobile">
            <slot>
            </slot>
        </ul>
    `,
    data(){
        return{
            showImgMobile: null,
        }
    },
    computed:{
        fnImgMobile(){
            if (this.imgmobile != null && this.imgmobile == true) {
                return this.showImgMobile = true;
            }
        }, 
    }
});

Vue.component('lb-step-item',{
    props:{
        mainClass:{
            type: String,
            default: 'lb-step-item'
        },
        set: {
            type: String
        },
        id: {
            type: String
        },
        imgmiddle: {
            type: Boolean
        },
        freehtml: {
            type: Boolean,
        },
        imgmobile: {
            type: Boolean
        },

        contentbox: {
            type: Boolean
        },
        
 
    },
    template:`
        <li :id="id" :class="[mainClass, set, {'step-content-box': showContentBox, 'step-middle-img': showImgMiddle}]"  :data-contentBox="fnContentBox"  :data-imgmiddle="fnImgMiddle" :data-freehtml="fnFreeHtml" >
            <div v-if="!showContentBox && !showFreeHtml">
                <p class="step-number">
                    <span class="number">
                        <slot name="step-number"></slot>
                    </span>
                </p>
                <div v-if="!showImgMiddle">
                    <figure class="step-img">
                        <slot name="step-img"></slot>
                    </figure>
                    <figure class="step-img-mobile">
                        <slot name="step-img-mobile"></slot>
                    </figure>
                </div>
                <h4>
                    <slot name="step-title"></slot>
                </h4>
                <p v-if="showImgMiddle">
                    <slot></slot>
                </p>
                <div v-if="showImgMiddle">
                    <figure class="step-img">
                        <slot name="step-img"></slot>
                    </figure>
                    <figure v-if="imgmobile" class="step-img-mobile">
                        <slot name="step-img-mobile"></slot>
                    </figure>
                </div>
                <p>
                    <slot name="step-text"></slot>
                </p>
            </div>
            <div v-if="showContentBox && !showFreeHtml">
                <p class="step-number">
                    <span class="number">
                        <slot name="step-number"></slot>
                    </span>
                </p>
                <figure class="step-img">
                    <slot name="step-img"></slot>
                </figure>
                <figure :v-if="imgmobile" class="step-img-mobile">
                    <slot name="step-img-mobile"></slot>
                </figure>
                <div class="step-content-box">
                    <h4>
                        <slot name="step-title"></slot>
                    </h4>
                    <div class="step-text-wrap">
                        <p>
                            <slot name="step-text"></slot>
                        </p>
                    </div>
                </div>
            </div>
            <div v-if="showFreeHtml">
                <slot></slot>
            </div>
        </li>
    `,
    data(){
        return{
            showContentBox: null,
            showImgMiddle: null,
            showFreeHtml: null,
            showImgMiddle: null
        }
    }, 
    computed: {
        fnContentBox(){
            if (this.contentbox != null && this.contentbox == true) {
                return this.showContentBox = true;
            }
        },
        fnImgMiddle(){
            if (this.imgmiddle != null && this.imgmiddle == true) {
                return this.showImgMiddle = true;
            }
        },
        fnFreeHtml(){
            if (this.freehtml != null && this.freehtml == true) {
                return this.showFreeHtml = true;
            }
        },
       
        fnImgMiddle(){
            if (this.imgmiddle != null && this.imgmiddle == true) {
                return this.showImgMiddle = true;
            }
        }
        
    }
})

Vue.component('lb-border', {
    props: {
        mainClass:{
            type: String,
            default: 'lb-border'
        },
        set: {
            type: String
        },
        headlogo: {
            type: Boolean,
        },
        lottoicon: {
            type: Boolean,
        }
    },
    template:`
        <div :class="[mainClass, set, { headLogoBox : showHeadLogo }]" :data-headlogo="fnHeadLogo" :data-lottoicon="fnLottoIcon">
            <div class="lb-bg-content">
                <div class="head-logo-wrap" v-if="showHeadLogo">
                    <div class="head-logo-circle">
                        <img v-if="!showLottoIcon" :src="cbrandLogoUrl + csite + chashTag + 'avatar.png'" alt="" /> 
                        <img  v-if="showLottoIcon" :src="clottoUrl + csite + chashTag + clotto + '.png' " alt="" />
                    </div>
                </div>
                <h2>
                    <slot name="lb-border-title"></slot>
                </h2>
                <slot name="lb-free-content"></slot>
            </div>
        </div>
    `,
    data(){
        return {
            showHeadLogo: null,
            showLottoIcon: null,
        }
    },
    computed:{
        fnHeadLogo(){
            if (this.headlogo != null && this.headlogo == true) {
                return this.showHeadLogo = true;
            }
        },
        fnLottoIcon(){
            if (this.lottoicon != null && this.lottoicon == true) {
                return this.showLottoIcon = true;
            }
        },
        clottoUrl(){
            return store.getters.getLottoUrl
        },
        cbrandLogoUrl(){
            return store.getters.getBrandLogoUrl
        },
        clotto(){
            return store.getters.getLotto
        },
        csite(){
            return store.getters.getSite
        },
        chashTag(){
            return store.getters.getHashTag
        }
        
    },
    
});

Vue.component('lb-winners', {
    props: {
        mainClass: {
            type: String,
            default: 'lb-winners'
        },
        set:{
            type: String
        }
    },
    template:`
        <ul :class="[mainClass, set]">
            <slot name="winner-li"></slot>
        </ul>
    `,
    data(){
        return{

        }
    }
});

Vue.component('lb-winner-box', {
    props:{
        set:{
            type: String
        }
    },
    template:`
        <li :class="[set]">
            <slot name="winner-img"></slot>
            <div class="winner-content">
                <h3>
                    <span class="country-label ">
                        <slot name="winner-country-label"></slot>
                    </span>
                    <slot name="winner-name"></slot>
                </h3>
                <p>
                    <slot name="winner-text"></slot>
                </p>
            </div>
            <div class="winner-footer">
                <hr />
                <p>
                    <slot name="winner-footer-text"></slot>
                </p>
            </div>
        </li>
    `,
    data(){
        return{

        }
    }
});

Vue.component('lb-list',{
    props:{
        mainClass: {
            type: String,
            default: 'lb-list'
        },
        set:{
            type: String
        },
        allclick: {
            type: Boolean
        },
        image: {
            type: Boolean
        },
        small: {
            type: Boolean
        }
    },
    template:`
        <ul :class="[mainClass, set,{ sm : showSmall }]" :data-allclick="fnAllClick" :data-image="fnImage" :data-smallwidth="fnSmallWidth">
            <slot> </slot>
        </ul>
    `,
    components:{

    },
    data(){
        return{
            onAllClick: null,
            showImage: null,
            showSmall: null,
        }
    },
    computed:{
        fnAllClick(){
            if (this.allclick != null && this.allclick == true) {
                return this.onAllClick= true;
            }
        },
        fnImage(){
            if (this.image != null && this.image == true) {
                return this.showImage = true;
            }
        },
        fnSmallWidth(){
            if (this.small != null && this.small == true) {
                return this.showSmall = true;
            }
        }
    }

});

Vue.component('lb-list-item',{
    props:{
        set:{
            type: String
        },
        allclick: {
            type: Boolean
        },
        image: {
            type: Boolean
        }
        
    },
    
    template:`
        <li>
            <figure :v-if="image">
                <slot name="image"></slot>
            </figure>
            <slot name="content">
            </slot>
            <div class="all-click-wrap" :v-if="allclick">
                <slot class="your-link"></slot>
            </div>
        </li>
    `,
    data(){
        return{
           
        }
    },
  
});

Vue.component('lb-footer',{
    props: {
        mainClass: {
            type: String,
            default: 'lb-footer'
        },
        set:{
            type: String
        },
        id: {
            type: String,
            default: 'footer'
        }
    },
        template:`
            <footer :id="id" :class="[mainClass, set]" >
                <div class="content-wrap">
                    <slot>
                    </slot>
                    <hr class="lb-hr" />
                </div>
                <slot name="footer-full-box"></slot>
               
                <div class="relative-left full-width padding-top-bottom-10 txt-center powered-by">
                  <p class="roboto weight-300 white">
                    Powered by
                    <br/>
                    <img class="relative margin-top-5" src="images/okab_white.png" width="70"  />
                  </p>
                </div>
            </footer>
        `,
        data(){
            return{
               
            }
        }
    
});

Vue.component('lb-secure',{
    props: {
        mainClass: {
            type: String,
            default: 'lb-secure-box'
        },
        set:{
            type: String
        },
    },
    template:`
        <ul :class="[mainClass, set]" >
            <slot>
            </slot>
        </ul>
    `,
    data(){
        return{
            
        }
    }
    
});

Vue.component('lb-secure-icon',{
    props: {
        mainClass: {
            type: String,
            default: 'lb-secure-icon'
        },
        set:{
            type: String
        },
    },
    template:`
        <li :class="[mainClass, set]" >
            <slot></slot>
        </li>
    `,
    data(){
        return{
            
        }
    }
    
});

Vue.component('lb-jackpot-box',{
    props: {
        mainClass: {
            type: String,
            default: 'lb-jackpot-box'
        },
        set:{
            type: String
        },
        promo:{
            type:Boolean,
            default:true
        }
    },
    template:`
        <h3 :class="[mainClass, set]">
            <img class="lotto-icon" :src="clottoUrl + csite + chashTag + clotto + '.png' " />
            <span class="lotto-name">
                <strong class="strong-jackpot">
                    <small>{{ccurrency}}</small>
                    {{cjackpot}} {{cmillion}}
                </strong>
                <span class="only-lotto-name">
                    <slot name="lotto-name"></slot>
                </span>
            </span>
        </h3>
    `,
    data(){
        return{
         
        }
    },
    computed:{
        csite(){
            return store.getters.getSite;
        },
        chashTag(){
            return store.getters.getHashTag;
        },
        clottoUrl(){
            return store.getters.getLottoUrl;
        },
        clotto(){
            return store.getters.getLotto;
        },
        
        cmillion(){
            let lang = store.getters.getLang,
            million = store.getters.getJackpotMillion,
            txt =null;
            if(lang === 'en-us' || lang === 'en-uk'){
                txt = million[0];
            }else if(lang === 'es-la' || lang === 'es-mx'){
                txt = million[1];
            }else{
                txt = million[2];
            }
            return store.dispatch('updateMillionTxt', txt), txt;
        },
        cjackpot(){
            return store.getters.getJackpot;
        },
        ccurrency(){
            return store.getters.getCurrency;
        },
        
    }
    
});

Vue.component('lb-free-html',{
    template:`
        <div>
            <slot></slot>
        </div>
    `
});

Vue.component('lb-picker',{
    props:{
        mainClass:{
            type: String,
            default:'choose-numbers inline-block'
        },
        set:{
            type:String,
        },
    },
    template:`
        <div>
            <div :class="[mainClass, set, {onAnim: anim}]" v-for="i in fnTotalPicks" :key="i" :id="'picker-' + i">
                <div class="choose-numbers-line relative-left">
                    <a href="#" @click.prevent="randNumbers" class="button redo gray txt-uppercase underline-none relative-left" role="button" :data-cln="'list-' + i">
                        <i class="relative inline-block"></i>Quick Pick
                    </a>
                    <div class="relative-left cnum-wrap">
                        <ul class="relative-left bullets-none numbers-line-list" :id="'list-' + i" :data-max="fnMax" :data-max2="fnMax2">
                            <li v-for="k in fnNormalBall" :id="'num-' + k">
                                <input type="text" class="simple-num i-number" value="29">
                            </li>
                            <li v-for="k in fnExtraBall" :id="'extraBall-' + k">
                                <input type="text" class="extra-ball i-number" value="5">
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    `,
    data(){
      return{
          anim:null
      }  
    },
    methods:{
        randNumbers: (e) =>{
            let currentBtn = e.target,
            currentList = currentBtn.dataset.cln,
            inputs = document.querySelectorAll(`#${currentList} input`),
            imax = document.querySelector('.numbers-line-list').dataset.max,
            imax2 = document.querySelector('.numbers-line-list').dataset.max2,
            max = null;
            for(let val of inputs){
                if(val.classList.contains('simple-num')){
                    max = imax;     
                }else{
                    max = imax2;
                }
                var k = Math.floor(Math.random() * (max - 1)) + 1;
                val.value=k;
            }
            return this.anim = true;
        }
    },
    computed:{
        fnMax(){
            return store.getters.getDataMax
        },
        fnMax2(){
            return store.getters.getDataMax2
        },
        fnTotalPicks(){
            return store.getters.getTotalPicks
        },
        fnExtraBall(){
            return store.getters.getExtraBall
        },
        fnNormalBall(){
            return store.getters.getNormalBall
        },
    }
});

Vue.component('lb-fixed-box',{
    props: {
        mainClass: {
            type: String,
            default: 'lb-fixed-box'
        },
        set:{
            type: String
        },
        arrowtop: {
            type: Boolean,
            default: true
        }
    },
    template:`
        <div id="fixedBox" :class="[mainClass, set]" :data-arrowtop="fnShowArrowTop">
            <div class="content-wrap">
                <div class="fixed-box-content">
                    <slot>
                    </slot>
                </div>
            </div>
           <div :v-if="showArrowTop" class="lb-fixed-top-arrow-wrap">
                <div class="lb-fixed-top-arrow"></div>
           </div>
        </div>
    `,
    data(){
        return{
            showArrowTop:null,
        }

    },
    computed:{
        fnShowArrowTop(){
            if (this.arrowtop != null && this.arrowtop == true) {
                return this.showArroTop = true;
            }
        }
    }
});


var app = new Vue({
    el: '#app',
    data: {
        landingBox:'landingBox',
        lotto: Number,
        usr_email: '',
        usr_name:'',
        usr_password:'',
        usr_phone:'',
        usr_lastname:'',
        form: {
            formSubmitted: false

        },
        params: {
            input_error:'',       // Error style classes of the input field
            customErrorHTML:'',   // Custom HTML tags where the error message is going to be placed
            checkMailFirst:false, // Validate email field first
            showEmailGiftMsg:true // Show or not the gift message
        },
        json_msgs:{
            "es": {
                "usr_name_empty":"El campo 'Nombre' no puede quedar vac&#237;o.",
                "usr_lastname_empty":"El campo 'Apellido' no puede quedar vac&#237;o.",
                "usr_email_empty":"El campo 'Email' no puede quedar vac&#237;o.",
                "usr_email_invalid":"El campo 'Email' no es v&#225;lido.",
                "usr_email_click":"Ingrese una cuenta de correo verdadera: necesitamos validar su email para entregarle su regalo.",
                "usr_phone_empty":"El campo 'Tel&#233;fono' no puede quedar vac&#237;o.",
                "usr_phone_6characters":"El tel&#233;fono debe tener al menos 6 caracteres.",
                "usr_password_empty":"Cree una contrase&#241;a para acceder al sitio y verificar sus premios.",
                "usr_password_short":"La contrase&#241;a debe tener al menos 6 caracteres.",
                "usr_password_alphanumeric":"La contrase&#241;a debe tener al menos 6 caracteres alfanum&#233;ricos.",
                "logic_countryempty":"El campo 'Pa&#237;s' no es v&#225;lido.",
                "logic_emailexist":"Este mail ya est&#225; registrado. Lamentablemente, no puedes participar de la promoci&#243;n.",
                "logic_apierror":"Hubo un problema al procesar sus datos, por favor intente nuevamente.",
                "logic_fraud":"Usted ya recibi&#243; nuestra valiosa promoci&#243;n o no califica para ella. Con LottoKings.com siempre puede participar de las loter&#237;as con los pozos m&#225;s tentadores del mundo."
            },
            "pt":{
                "usr_name_empty":"Nome&#39; n&#227;o pode ficar vazio",
                "usr_lastname_empty":"Sobrenome&#39; n&#227;o pode ficar vazio",
                "usr_email_empty":"Endere&#231;o de e-mail inv&#225;lido",
                "usr_email_invalid":"Endere&#231;o de e-mail inv&#225;lido",
                "usr_email_click":"Ingresse uma conta de e-mail real para validarmos o seu e-mail e entregarmos o seu presente.",
                "usr_phone_empty":"Telefone&#39; n&#227;o pode ficar vazio",
                "usr_phone_6characters":"O telefone deve ter pelo menos 6 caracteres.",
                "usr_password_empty":"Senha&#39; n&#227;o pode ficar vazio",
                "usr_password_short":"Sua senha deve conter ao menos 6 caracteres.",
                "usr_password_alphanumeric":"Sua senha n&#227;o pode conter caracteres especiais, como &#34;&#241;&#34; &#34;&#231;&#34;.",
                "logic_countryempty":"Selecione o seu pa&#237;s",
                "logic_emailexist":"Voc&#234; j&#225; recebeu nossa promo&#231;&#227;o ou n&#227;o qualifica para a mesma. Com LotoSena.com voc&#234; pode participar sempre das loterias com os pr&#234;mios mais tentadores do mundo.",
                "logic_apierror":"Houve um problema no processamento de seus dados. Por favor, tente novamente.",
                "logic_fraud":"Voc&#234; j&#225; recebeu nossa promo&#231;&#227;o ou n&#227;o qualifica para a mesma. Com LotoSena.com voc&#234; pode participar sempre das loterias com os pr&#234;mios mais tentadores do mundo."
            },
            "en":{
                "usr_name_empty":"The First Name field cannot be left blank.",
                "usr_lastname_empty":"The Last Name field cannot be left blank.",
                "usr_email_empty":"The Email field cannot be left blank.",
                "usr_email_invalid":"Invalid email address, please re-enter.",
                "usr_email_click":"Insert a valid email address: You need to validate your account to receive your free ticket.",
                "usr_phone_empty":"The Phone field cannot be left blank.",
                "usr_phone_6characters":"Your phone must have at least 6 characters.",
                "usr_password_empty":"The Password field cannot be left blank.",
                "usr_password_short":"Your password must have at least 6 characters.",
                "usr_password_alphanumeric":"Your password must have at least 6 alphanumeric characters.",
                "logic_countryempty":"The Country field cannot be left blank.",
                "logic_emailexist":"The email is already registered.",
                "logic_apierror":"Try Later please.",
                "logic_fraud":"You have already received our exclusive offer. With LottoKings.com you can always play the word's richest lotteries from any location."
            },
            "pl":{
                "usr_name_empty":"Nazwa nie mo&#380;e by&#263; puste",
                "usr_lastname_empty":"Nazwisko nie mo&#380;e by&#263; puste",
                "usr_email_empty":"Email nie mo&#380;e by&#263; puste",
                "usr_email_invalid":"E-mail jest nieprawid&#322;owy",
                "usr_email_click":"Podaj prawid&#322;owy adres e-mail: Aby otrzyma&#263; bezp&#322;atny los, musisz zweryfikowa&#263; swoje konto.",
                "usr_phone_empty":"Numer telefonu nie mo&#380;e by&#263; puste",
                "usr_phone_6characters":"Numer telefonu musi sk&#322;ada&#263; si&#281; z co najmniej 6 znak&#243;w",
                "usr_password_empty":"Has&#322;o nie mo&#380;e by&#263; puste",
                "usr_password_short":"Has&#322;o musi sk&#322;ada&#263; si&#281; z co najmniej 6 znak&#243;w",
                "usr_password_alphanumeric":"Has&#322;o musi sk&#322;ada&#263; si&#281; z co najmniej 6 znak&#243;w alfanumerycznych",
                "logic_countryempty":"",
                "logic_emailexist":"Skorzysta&#322;e&#347; ju&#380; z naszej wy&#322;&#261;cznej oferty. W serwisie LottoKings.com mo&#380;esz zawsze gra&#263; w najbardziej dochodowe loterie na &#347;wiecie, niezale&#380;nie od tego, gdzie si&#281; znajdujesz.",
                "logic_apierror":"Wyst&#261;pi&#322; problem podczas przetwarzania Twoich danych. Spr&#243;buj ponownie.",
                "logic_fraud":"Skorzysta&#322;e&#347; ju&#380; z naszej wy&#322;&#261;cznej oferty. W serwisie LottoKings.com mo&#380;esz zawsze gra&#263; w najbardziej dochodowe loterie na &#347;wiecie, niezale&#380;nie od tego, gdzie si&#281; znajdujesz."
            },
            "ru":{
                "usr_name_empty":"&#1048;&#1084;&#1103; &#39; &#1085;&#1077; &#1084;&#1086;&#1078;&#1077;&#1090; &#1073;&#1099;&#1090;&#1100; &#1087;&#1091;&#1089;&#1090;&#1072;",
                "usr_lastname_empty":"&#1060;&#1072;&#1084;&#1080;&#1083;&#1080;&#1103; &#39; &#1085;&#1077; &#1084;&#1086;&#1078;&#1077;&#1090; &#1073;&#1099;&#1090;&#1100; &#1087;&#1091;&#1089;&#1090;&#1072;",
                "usr_email_empty":"&#1053;&#1077;&#1076;&#1077;&#1081;&#1089;&#1090;&#1074;&#1080;&#1090;&#1077;&#1083;&#1100;&#1085;&#1099;&#1081; &#1072;&#1076;&#1088;&#1077;&#1089; &#1101;&#1083;&#1077;&#1082;&#1090;&#1088;&#1086;&#1085;&#1085;&#1086;&#1081; &#1087;&#1086;&#1095;&#1090;&#1099;",
                "usr_email_invalid":"&#1053;&#1077;&#1076;&#1077;&#1081;&#1089;&#1090;&#1074;&#1080;&#1090;&#1077;&#1083;&#1100;&#1085;&#1099;&#1081; &#1072;&#1076;&#1088;&#1077;&#1089; &#1101;&#1083;&#1077;&#1082;&#1090;&#1088;&#1086;&#1085;&#1085;&#1086;&#1081; &#1087;&#1086;&#1095;&#1090;&#1099;",
                "usr_email_click":"&#1042;&#1074;&#1077;&#1076;&#1080;&#1090;&#1077; &#1087;&#1088;&#1072;&#1074;&#1080;&#1083;&#1100;&#1085;&#1099;&#1081; &#1101;&#1083;&#1077;&#1082;&#1090;&#1088;&#1086;&#1085;&#1085;&#1099;&#1081; &#1072;&#1076;&#1088;&#1077;&#1089;: &#1042;&#1072;&#1084; &#1085;&#1091;&#1078;&#1085;&#1086; &#1079;&#1072;&#1088;&#1077;&#1075;&#1080;&#1089;&#1090;&#1088;&#1080;&#1088;&#1086;&#1074;&#1072;&#1090;&#1100; &#1072;&#1082;&#1082;&#1072;&#1091;&#1085;&#1090;, &#1095;&#1090;&#1086;&#1073;&#1099; &#1087;&#1086;&#1083;&#1091;&#1095;&#1080;&#1090;&#1100; &#1073;&#1077;&#1089;&#1087;&#1083;&#1072;&#1090;&#1085;&#1099;&#1081; &#1073;&#1080;&#1083;&#1077;&#1090;.",
                "usr_phone_empty":"&#1058;&#1077;&#1083;&#1077;&#1092;&#1086;&#1085; &#39; &#1085;&#1077; &#1084;&#1086;&#1078;&#1077;&#1090; &#1073;&#1099;&#1090;&#1100; &#1087;&#1091;&#1089;&#1090;&#1072;",
                "usr_phone_6characters":"&#1042;&#1072;&#1096; &#1090;&#1077;&#1083;&#1077;&#1092;&#1086;&#1085; &#1076;&#1086;&#1083;&#1078;&#1077;&#1085; &#1089;&#1086;&#1076;&#1077;&#1088;&#1078;&#1072;&#1090;&#1100; &#1085;&#1077; &#1084;&#1077;&#1085;&#1077;&#1077; 6 &#1094;&#1080;&#1092;&#1088;.",
                "usr_password_empty":"&#1055;&#1072;&#1088;&#1086;&#1083;&#1100; &#39; &#1085;&#1077; &#1084;&#1086;&#1078;&#1077;&#1090; &#1073;&#1099;&#1090;&#1100; &#1087;&#1091;&#1089;&#1090;&#1072;",
                "usr_password_short":"&#1042;&#1072;&#1096; &#1090;&#1077;&#1083;&#1077;&#1092;&#1086;&#1085; &#1076;&#1086;&#1083;&#1078;&#1077;&#1085; &#1089;&#1086;&#1076;&#1077;&#1088;&#1078;&#1072;&#1090;&#1100; &#1085;&#1077; &#1084;&#1077;&#1085;&#1077;&#1077; 6 &#1094;&#1080;&#1092;&#1088;",
                "usr_password_alphanumeric":"&#1042;&#1072;&#1096; &#1087;&#1072;&#1088;&#1086;&#1083;&#1100; &#1076;&#1086;&#1083;&#1078;&#1077;&#1085; &#1089;&#1086;&#1076;&#1077;&#1088;&#1078;&#1072;&#1090;&#1100; &#1085;&#1077; &#1084;&#1077;&#1085;&#1077;&#1077; 6 &#1073;&#1091;&#1082;&#1074;&#1077;&#1085;&#1085;&#1099;&#1093; &#1089;&#1080;&#1084;&#1074;&#1086;&#1083;&#1086;&#1074;",
                "logic_countryempty":"&#1042;&#1099;&#1073;&#1077;&#1088;&#1080;&#1090;&#1077; &#1074;&#1072;&#1096;&#1091; &#1089;&#1090;&#1088;&#1072;&#1085;&#1091;",
                "logic_emailexist":"&#1042;&#1099; &#1091;&#1078;&#1077; &#1091;&#1095;&#1072;&#1089;&#1090;&#1074;&#1086;&#1074;&#1072;&#1083;&#1080; &#1074; &#1101;&#1082;&#1089;&#1082;&#1083;&#1102;&#1079;&#1080;&#1074;&#1085;&#1086;&#1081; &#1073;&#1077;&#1089;&#1087;&#1083;&#1072;&#1090;&#1085;&#1086;&#1081; &#1072;&#1082;&#1094;&#1080;&#1080;. &#1057; LottoKings.com &#1042;&#1099; &#1074;&#1089;&#1077;&#1075;&#1086;&#1076;&#1072; &#1084;&#1086;&#1078;&#1077;&#1090;&#1077; &#1080;&#1075;&#1088;&#1072;&#1090;&#1100; &#1074; &#1082;&#1088;&#1091;&#1087;&#1085;&#1077;&#1081;&#1096;&#1080;&#1077; &#1083;&#1086;&#1090;&#1077;&#1088;&#1077;&#1080; &#1084;&#1080;&#1088;&#1072; &#1087;&#1088;&#1103;&#1084;&#1086; &#1080;&#1079; &#1076;&#1086;&#1084;&#1072;",
                "logic_apierror":"&#1055;&#1088;&#1080; &#1086;&#1073;&#1088;&#1072;&#1073;&#1086;&#1090;&#1082;&#1077; &#1042;&#1072;&#1096;&#1077;&#1081; &#1080;&#1085;&#1092;&#1086;&#1088;&#1084;&#1072;&#1094;&#1080;&#1080; &#1074;&#1086;&#1079;&#1085;&#1080;&#1082;&#1083;&#1072; &#1086;&#1096;&#1080;&#1073;&#1082;&#1072;. &#1055;&#1086;&#1078;&#1072;&#1083;&#1091;&#1081;&#1089;&#1090;&#1072;, &#1087;&#1086;&#1087;&#1088;&#1086;&#1073;&#1091;&#1081;&#1090;&#1077; &#1089;&#1085;&#1086;&#1074;&#1072;",
                "logic_fraud":"&#1042;&#1099; &#1091;&#1078;&#1077; &#1091;&#1095;&#1072;&#1089;&#1090;&#1074;&#1086;&#1074;&#1072;&#1083;&#1080; &#1074; &#1101;&#1082;&#1089;&#1082;&#1083;&#1102;&#1079;&#1080;&#1074;&#1085;&#1086;&#1081; &#1073;&#1077;&#1089;&#1087;&#1083;&#1072;&#1090;&#1085;&#1086;&#1081; &#1072;&#1082;&#1094;&#1080;&#1080;. &#1057; LottoKings.com &#1042;&#1099; &#1074;&#1089;&#1077;&#1075;&#1086;&#1076;&#1072; &#1084;&#1086;&#1078;&#1077;&#1090;&#1077; &#1080;&#1075;&#1088;&#1072;&#1090;&#1100; &#1074; &#1082;&#1088;&#1091;&#1087;&#1085;&#1077;&#1081;&#1096;&#1080;&#1077; &#1083;&#1086;&#1090;&#1077;&#1088;&#1077;&#1080; &#1084;&#1080;&#1088;&#1072; &#1087;&#1088;&#1103;&#1084;&#1086; &#1080;&#1079; &#1076;&#1086;&#1084;&#1072;"
            },
            "de":{
                "usr_name_empty":"Vorname&#39; darf nicht leer sein",
                "usr_lastname_empty":"Nachname&#39; darf nicht leer sein",
                "usr_email_empty":"Ung&#252;ltige E-Mail Adresse",
                "usr_email_invalid":"Ung&#252;ltige E-Mail Adresse",
                "usr_email_click":"Geben Sie eine g&#252;ltige E-Mail-Adresse ein: Sie m&#252;ssen Ihr Konto best&#228;tigen, um Ihren kostenlosen Spielschein zu erhalten.",
                "usr_phone_empty":"Telefon&#39; darf nicht leer sein",
                "usr_phone_6characters":"Ihre Telefonnummer muss aus mindestens 6 Zeichen bestehen.",
                "usr_password_empty":"Passwort&#39; darf nicht leer sein",
                "usr_password_short":"Ihr Passwort muss aus mindestens 6 Zeichen bestehen.",
                "usr_password_alphanumeric":"Ihr Password muss aus mindestens 6 alphanumerischen Zeichen bestehen.",
                "logic_countryempty":"W&#228;hlen Sie Ihr Land",
                "logic_emailexist":"Sie haben unser exklusives Angebot bereits in Anspruch genommen. Mit LottoKings.com können Sie von jedem Ort aus an den gr&#246;&#223;ten Lotterien der Welt teilnehmen.",
                "logic_apierror":"Bei der Verarbeitung Ihrer Daten ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.",
                "logic_fraud":"Sie haben unser exklusives Angebot bereits in Anspruch genommen. Mit LottoKings.com können Sie von jedem Ort aus an den gr&#246;&#223;ten Lotterien der Welt teilnehmen."
            }
        },
       
    },  
    methods: {
        checkForm: function(e){
            this.errors = [];

            var msg = '';
            this.hide_error_msg();
            if(!this.usr_email){
                this.errors.push("Email required.");
                jQuery('#usr_email').addClass('error');
                jQuery('#usr_email_error').css("display", "block");
                jQuery('#usr_email_error').html(convertXML2CP(this.json_msgs.es.usr_email_empty));
                //this.set_error_msg('usr_email','empty',e);
            }else if(!this.checkMailFormat(this.usr_email)){
                this.errors.push("Email invalid.");
                jQuery('#usr_email').addClass('error');
                jQuery('#usr_email_error').css("display", "block");
                jQuery('#usr_email_error').html(convertXML2CP(this.json_msgs.es.usr_email_invalid));
                // this.set_error_msg('usr_email','invalid');
            }else if (!this.usr_name) {
                this.errors.push("Name required.");
                jQuery('#usr_name').addClass('error');
                jQuery('#usr_name_error').css("display", "block");
                jQuery('#usr_name_error').html(convertXML2CP(this.json_msgs.es.usr_name_empty));
                // this.set_error_msg('usr_name','empty',e);
            }else if(!this.usr_lastname) {
                this.errors.push("lastname required.");
                jQuery('#usr_lastname').addClass('error');
                jQuery('#usr_lastname_error').css("display", "block");
                jQuery('#usr_lastname_error').html(convertXML2CP(this.json_msgs.es.usr_lastname_empty));
            }else if(!this.usr_password){
                this.errors.push("Password required.");
                jQuery('#usr_password').addClass('error');
                jQuery('#usr_password_error').css("display", "block");
                jQuery('#usr_password_error').html(convertXML2CP(this.json_msgs.es.usr_password_empty));
            }else if(this.usr_password.length < 6){
                this.errors.push("Password short.");
                jQuery('#usr_password').addClass('error');
                jQuery('#usr_password_error').css("display", "block");
                jQuery('#usr_password_error').html(convertXML2CP(this.json_msgs.es.usr_password_short));
            }else if(!(this.usr_password.match("^[a-zA-Z0-9]*$")) || this.usr_password == '123456'){
                // set_error_msg('usr_password','alphanumeric');
                this.errors.push("Password not alphanumeric.");
                jQuery('#usr_password').addClass('error');
                jQuery('#usr_password_error').css("display", "block");
                jQuery('#usr_password_error').html(convertXML2CP(this.json_msgs.es.usr_password_alphanumeric));
                // -------------------------------------------------------//
            }else if(!this.usr_phone){
                this.errors.push("phone empty.");
                jQuery('#usr_phone').addClass('error');
                jQuery('#usr_phone_error').css("display", "block");
                jQuery('#usr_phone_error').html(convertXML2CP(this.json_msgs.es.usr_phone_empty));
            }else if(this.usr_phone.length < 6){
                this.errors.push("phone short.");
                jQuery('#usr_phone').addClass('error');
                jQuery('#usr_phone_error').css("display", "block");
                jQuery('#usr_phone_error').html(convertXML2CP(this.json_msgs.es.usr_phone_6characters));
            }

            if (!this.errors.length) {
                return true;
            }
            e.preventDefault();
        },
        checkMailFormat:function (email){
            var x = jQuery.trim(email);
            alert('email: '+x);
            var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            return filter.test(x);
        },
        hide_error_msg: function (){
            jQuery('#usr_phone').removeClass('error');
            jQuery('#usr_name').removeClass('error');
            jQuery('#usr_lastname').removeClass('error');
            jQuery('#usr_email').removeClass('error');
            jQuery('#usr_password').removeClass('error');
            jQuery(".field_error").html('').css('display','none');
        }
    }, 
    mounted(){
        let fixedBoxPoint = document.getElementById('fixedBoxPoint'),
        fixedBoxElement = document.getElementById('fixedBox'),
        theapp = document.getElementById('app');
        updateWidhtHeight();
        window.onresize = () => {
            updateWidhtHeight();
        };
        function updateWidhtHeight(){
            let ww = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
            wh = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight,
            hh = document.querySelector('.lb-header').offsetHeight;
            return store.dispatch('updateWWidth', ww), store.dispatch('updateWHeight', wh), store.dispatch('updateHeaderHeight', hh); 
        }

        window.onscroll = () => {
            onScrollEvents();
        };
        function onScrollEvents(){
            let totalS = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
            return store.dispatch('updateTotalScroll', totalS); 
        }
      
        (() => {
            let curl = window.location;
            return store.dispatch('updatePageUrl', curl); 
        })();
        window.onload = () => {
            return store.dispatch('updatePageLoaded', true); 
        };

        new universalParallax().init();

        (() => {
            if (typeof window.getComputedStyle(document.body).mixBlendMode === 'undefined') {
                return store.dispatch('updateBlend', true); 
            }
        })();
        
    
        // svg support 

        
        // old
        if(document.body.contains(fixedBoxPoint) && document.body.contains(fixedBoxElement)){
           
            let boxCoords = document.getElementById("fixedBoxPoint").getBoundingClientRect();
            let boxTop = boxCoords.top;
            window.onscroll = () => {
                fixedBox();
            };
            function fixedBox() {
                let totalS = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
                if (totalS >= boxTop - 400) {
                    fixedBoxElement.classList.add('onDisplay');
                    fixedBoxElement.classList.remove('fadeOut');
                    fixedBoxElement.classList.add('bounceSlideUp');
                    theapp.classList.add('fixed-active');
                } else {
                    fixedBoxElement.classList.remove('bounceSlideUp');
                    fixedBoxElement.classList.add('fadeOut');
                    theapp.classList.remove('fixed-active');
                }
            }
    
        }
    }
});
