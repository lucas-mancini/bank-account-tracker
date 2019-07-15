import { combineReducers } from 'redux'
import initialData from '../initialData'
import {
  BankEntryActionTypes,
  ADD_ENTRY,
  REMOVE_ENTRY,
  SET_ENTRY_ID_TO_REMOVE
} from '../actions/actions'
import { BankEntry } from '../types'

const initialDataState: BankEntry[] = initialData

function data(state = initialDataState, action: BankEntryActionTypes): BankEntry[] {
  switch (action.type) {
    case ADD_ENTRY:
      return [...state, action.payload]
    case REMOVE_ENTRY:
      return state.filter(entry => entry.id !== action.id)
    default:
      return state
  }
}

const initialAppState = { entryIdToRemove: '' }

function app(state = initialAppState, action: BankEntryActionTypes): { entryIdToRemove: string } {
  switch (action.type) {
    case SET_ENTRY_ID_TO_REMOVE:
      return { ...state, entryIdToRemove: action.id }
    default:
      return state
  }
}

const rootReducer = combineReducers({
  data,
  app
})

export default rootReducer

export type AppState = ReturnType<typeof rootReducer>
