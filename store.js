import { configureStore } from '@reduxjs/toolkit'
import faqReducer from './slices/faqSlice'

export default configureStore({
  reducer: {
    faq: faqReducer
  }
})