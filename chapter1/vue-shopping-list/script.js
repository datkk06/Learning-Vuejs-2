// var data = {
//   items: [{ text: 'Bananas', checked: true }, { text: 'Apples', checked: false }],
//   title: 'My Shopping List',
//   newItem: ''
// };

var server_data = {
  items: [{ id: '1', name: 'SVR1', status: 'ACTIVE' }],
  title: 'Server Management',
  newItem: ''
}

// new Vue({
//   el: '#app',
//   data: server_data,
//   methods: {
//     addItem: function () {
//       var text;

//       text = this.newItem.trim();
//       if (text) {
//         this.items.push({
//           text: text,
//           checked: false
//         });
//         this.newItem = '';
//       }
//     },
//     say: function (message) {
//       alert(message)
//     }
//   }
// });

new Vue({
  el: '#app',
  data: server_data,
  methods: {
    addItem: function () {
      var id;
      var name;
      var status;

      id = this.id.trim();
      name = this.name.trim();
      status = this.status.trim();
      if (id, status, name) {
        this.items.push({
          id: id,
          name: name,
          status: status
        });
        this.newItem = '';
      }
    }
  }
});
