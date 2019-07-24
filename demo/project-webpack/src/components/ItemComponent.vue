<template>
    <h2>{{ title }}</h2>
    <AddItem></AddItem>
</template>


<script>
import AddItem from './AddItem'
import ListItem from './ListItem'
import ChangeTitleComponent from './ChangeTitleComponent'

export default {
    name: 'itempr',
    components: {
        'add-item': AddItem,
        ListItem,
        ChangeTitleComponent
    },
    data () {
        return {
            items: [{text: 'Banana', checked: true},
                {text: 'Apples', checked: false}]
        }
    },
    methods: {
        addItem (text) {
            this.items.push({
                text: text,
                checked: false
            })
        }
    }
}
</script>

<script>
export default {
    name: 'index'
}
</script>

