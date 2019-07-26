import * as types from './mutation_types'

// export const start = ({ dispatch }) => {
//   dispatch(types.START)
// }
// export const pause = ({ dispatch }) => {
//   dispatch(types.PAUSE)
// }
// export const stop = ({ dispatch }) => {
//   dispatch(types.STOP)
// }

export default {
  start: ({  commit }) => {
    commit(types.START)
  },
  pause: ({ commit }) => {
    commit(types.PAUSE)
  },
  stop: ({ commit }) => {
    commit(types.STOP)
  }
}