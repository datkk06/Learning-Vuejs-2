var server_data = {
    items: [{ id: '1', name: 'SVR1', status: 'ACTIVE', expired: 5 }],
    title: 'Server Management',
    newItem: ''
  }
  
  new Vue({
    el: '#app',
    data: server_data,
    computed: {
        price: function() {
            pricing = (this.expired) * 10000
            price = pricing + 'đ'
            return price
        }
    },
    methods: {
      addItem: function () {
        var id;
        var name;
        var status;
        var expired;
  
        id = this.id.trim();
        name = this.name.trim();
        status = this.status.trim();
        if (id, status, name) {
          this.items.push({
            id: id,
            name: name,
            status: status,
            expired: expired
          });
          this.newItem = '';
        }
      }
    }
  });
  