new Vue({
    el: '#crud',
    created: function () {
        this.getKeeps();
    },
    data: {
        keeps: []
    },
    methods: {
        /* esto lista los elementos en la pantalla */
        getKeeps: function () {
            var urlKeeps = 'tasks';
            axios.get(urlKeeps).then(response => {
                this.keeps = response.data
            });
        },
        /* esete metodo eliminar registros */
        deleteKeep: function (keep) {
            var url = 'tasks/' + keep.id;
            axios.delete(url).then(response => {//elimina
                /* esto refresca la lista sin los elementos eliminados */
                this.getKeeps();
                //creando el mensaje personalizado
                toastr.success('eliminado correctamente');
            });
        }
    }
});