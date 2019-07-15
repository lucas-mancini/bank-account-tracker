import { combineReducers } from 'redux'
import initialData from '../initialData'
import {
  BankEntryActionTypes,
  ADD_ENTRY,
  REMOVE_ENTRY,
  SET_ENTRY_ID_TO_REMOVE
} from '../actions/actions'
import { BankEntry } from '../types'

type DataStateType = BankEntry[]

const initialDataState: DataStateType = initialData
function dataReducer(state = initialDataState, action: BankEntryActionTypes): DataStateType {
  switch (action.type) {
    case ADD_ENTRY:
      return [...state, action.payload]
    case REMOVE_ENTRY:
      return state.filter(entry => entry.id !== action.id)
    default:
      return state
  }
}

type AppStateType = { entryIdToRemove: string }

const initialAppState: AppStateType = { entryIdToRemove: '' }
function appReducer(state = initialAppState, action: BankEntryActionTypes): AppStateType {
  switch (action.type) {
    case SET_ENTRY_ID_TO_REMOVE:
      return { ...state, entryIdToRemove: action.id }
    default:
      return state
  }
}

const rootReducer = combineReducers({
  data: dataReducer,
  app: appReducer
})

export default rootReducer

export type AppState = ReturnType<typeof rootReducer>
