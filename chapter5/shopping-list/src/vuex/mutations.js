import _ from 'underscore'
import * as types from './mutation_types'

function findByID (state, id) {
    return _.findWhere (state.shoppinglists, { id: id })
}

export default {
    [types.CHANGE_TITLE] (state, data) {
        findByID(state, data.id).title = data.title
    }
}