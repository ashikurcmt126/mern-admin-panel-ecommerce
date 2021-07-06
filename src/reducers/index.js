import authReducer from './auth.reducers'
import userReducer from './user.reducer'
import categoryReducer from './category.reducer'
import productReducer from './product.reducer'
import orderReducer from './order.reducer'
import pageReducer from './page.reducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    auth: authReducer,
    user: userReducer,
    order: orderReducer,
    category: categoryReducer,
    product: productReducer,
    page: pageReducer
})

export default rootReducer;