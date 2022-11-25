import App from './App.vue'
import router from './router'

const store = wepos_get_lib('Store');
const Vue   = wepos_get_lib('Vue');

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#vue-frontend-app',
    router,
    store,
    render: h => h(App),
    created() {
        this.setLocaleData( wepos.i18n['wepos'] );

        if ( wepos.i18n['wepos-pro'] ) {
            this.setLocaleData( wepos.i18n['wepos-pro'] );
        }
    }
})
