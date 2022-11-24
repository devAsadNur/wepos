import App from './App.vue'
import router from './router'
import menuFix from './utils/admin-menu-fix'

const Vue   = wepos_get_lib('Vue');
const store = wepos_get_lib('Store');

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#wepos-admin-app',
    router,
    store,
    render: h => h(App),
    created() {
        this.setLocaleData( wepos.i18n['wepos'] );

        if ( wepos.i18n['wepos-pro'] ) {
            this.setLocaleData( wepos.i18n['wepos-pro'] );
        }
    }
});


// fix the admin menu for the slug "wepos-app"
menuFix('wepos');
