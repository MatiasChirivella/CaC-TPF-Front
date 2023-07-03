const {createApp} = Vue

createApp({
    data(){
        return{
            productos: [],
            url: 'https://matiaschirivella.pythonanywhere.com/productos',
            cargando: true,
            error: false
        }
    },

    methods:{
        fetchData(url){
            fetch(url)
            .then(response => response.json())
            .then(data => {
                this.productos = data;
                this.cargando = false;
            })
            .catch(err => {
                console.error(err);
                this.error = true;
            })
        },

        eliminar(id){
            const url = 'https://matiaschirivella.pythonanywhere.com/productos/' + id;
            let options = {
                method: 'DELETE'
            }

            fetch(url,options)
            .then(response => response.json())
            .then(data => {
                location.reload();
            })
            .catch(err => {
                console.error(err)
            })
        }
    },

    created(){
        this.fetchData(this.url);
    }
}).mount('#app')