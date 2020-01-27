new Vue({
    el: '#crud',
    created: function () {
        this.getKeeps();
    },
    data: {
        /* variables */
        keeps: [],
        newKeep: '',
        fillKeep: { 'id': '', 'keep': '' },
        errors: []
    },
    methods: {
        /* esto lista los elementos en la pantalla */
        getKeeps: function () {
            var urlKeeps = 'tasks';
            axios.get(urlKeeps).then(response => {
                this.keeps = response.data
            });
        },

        editKeep: function (keep) {
            
            /* pasando datos */
            this.fillKeep.id = keep.id;
            this.fillKeep.keep = keep.keep;
            /* usando jquery para mostrar formulario*/
            $('#edit').modal('show');
        },

        updateKeep: function(id){
            /*  la ruta */
            var url = 'tasks/'+id;
            /* actualizar en al base de datos */
            axios.put(url, this.fillKeep).then(response=>{
                /* si todo va bien actulizar la interface */
                this.getKeeps();
                /* limpiamos las variables */
                this.fillKeep ={ 'id': '', 'keep': '' };
                this.errors=[];
                /* ocultando el formulario */
                $('#edit').modal('hide');
                toastr.success('tarea acutlaiza con exito');


            }).catch(error=>{
                this.errors=error.response.data
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
        },
        createKeep: function () {
            var url = 'tasks';
            axios.post(url, {
                keep: this.newKeep
            }).then(response => {
                this.getKeeps();
                this.newKeep = '';
                this.errors = [];
                /* para cerrar la ventana */
                $('#create').modal('hide');
                /* crea un mensaje */
                toastr.success('nueva tarea creada con exito');
            }).catch(error => {
                this.errors = error.response.data
            });
        }
    }
});