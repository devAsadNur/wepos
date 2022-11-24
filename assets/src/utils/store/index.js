import Vuex from 'vuex';
import Cart from './modules/Cart.module';
import Order from './modules/Order.module';

export function getStore( Vue ) {
    Vue.use( Vuex );

    return new Vuex.Store( {
        modules: {
            Cart,
            Order
        }
    } );
}
