<template>
  <div class="additem">
    <h2>Add Items</h2>
    <input type="text" class="input form-control" placeholder="Add list item">
    <span class="input-groupp-btn">
      <button class="btn btn-primary" type="button">Add</button>
    </span>
  </div>
</template>

<script>
import AddItem from './AddItem'
export default {
  name: 'add-item',
  components: {
    AddItem
  },
  data (text) {
    return [
      { text: 'Banana', checked: false },
      { text: 'Apples', checked: true }
    ]
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
