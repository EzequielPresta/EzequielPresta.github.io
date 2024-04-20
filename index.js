
let caba = 3000;
let zona1 = 4500;
let zona2 = 6000;


let destinos = [
    {   zona : "Caba",
        barrio : "Caba",
        precio : caba
    } ,
    {   zona : "Caba",
        barrio : "Capital Federal",
        precio : caba
    } ,
    {   zona : 1,
        barrio : "Ciudadela",
        precio : zona1
    },
    {   zona : 1,
    barrio : "Jose Ingenieros",
    precio : zona1
},
{   zona : 1,
barrio : "Caseros",
precio : zona1
},
{   zona : 1,
barrio : "Palomar",
precio : zona1
},
{   zona : 1,
barrio : "Ciudad Jardin",
precio : zona1
},
{   zona : 1,
    barrio : "Churruca",
    precio : zona1
    },
    {   zona : 1,
        barrio : "El Libertador",
        precio : zona1
        },
        {   zona : 1,
            barrio : "Loma Hermosa",
            precio : zona1
            },   
            {   zona : 1,
                barrio : "Martin Coronado",
                precio : zona1
                },   
                
                {   zona : 1,
                    barrio : "Pablo Podesta",
                    precio : zona1
                    },   
                    {   zona : 1,
                        barrio : "Remedios de Escalada",
                        precio : zona1
                        },   
                        {   zona : 1,
                            barrio : "Saenz Peña",
                            precio : zona1
                            },  
                            {   zona : 1,
                                barrio : "Santos Lugares",
                                precio : zona1
                                },
                                {   zona : 1,
                                    barrio : "Villa Bosch",
                                    precio : zona1
                                    },      
                                    {   zona : 1,
                                        barrio : "Villa Raffo",
                                        precio : zona1
                                        },       
 {   zona : 1,
 barrio : "San Martin",
 precio : zona1},
 {   zona : 1,
    barrio : "Villa Lynch",
    precio : zona1},     
    {   zona : 1,
        barrio : "Villa Maipu",
        precio : zona1},     
        {   zona : 1,
            barrio : "Villa Ballester",
            precio : zona1},  
            {   zona : 1,
                barrio : "Billinghurst",
                precio : zona1},  
                {   zona : 1,
                    barrio : "Jose Leon Suarez",
                    precio : zona1},   
                    {   zona : 1,
                        barrio : "San Andres",
                        precio : zona1},  
                        {   zona : 1,
                            barrio : "Villa Martelli",
                            precio : zona1},  
                            {   zona : 1,
                                barrio : "Florida",
                                precio : zona1},  
                                {   zona : 1,
                                    barrio : "Munro",
                                    precio : zona1},  
                                    {   zona : 1,
                                        barrio : "Carapachay",
                                        precio : zona1},  
                                        {   zona : 1,
                                            barrio : "Villa Adelina",
                                            precio : zona1},  
                                            {   zona : 1,
                                                barrio : "Bulogne",
                                                precio : zona1},  
                                                {   zona : 1,
                                                    barrio : "Vicente Lopez",
                                                    precio : zona1},  
                                                    {   zona : 1,
                                                        barrio : "Martinez",
                                                        precio : zona1},  
                                                        {   zona : 1,
                                                            barrio : "La lucila",
                                                            precio : zona1},  
                                                            {   zona : 1,
                                                                barrio : "Acassuso",
                                                                precio : zona1}, 
                                                                {   zona : 1,
                                                                    barrio : "San Isidro",
                                                                    precio : zona1},   
                                                                    {   zona : 1,
                                                                        barrio : "Beccar",
                                                                        precio : zona1},   
                                                                        {   zona : 1,
                                                                            barrio : "Victoria",
                                                                            precio : zona1},  
                                                                            {   zona : 1,
                                                                                barrio : "San Fernando",
                                                                                precio : zona1},  
                                                                                {   zona : 1,
                                                                                    barrio : "Virreyes",
                                                                                    precio : zona1},
                                                                                 


]

function insertatTabla(){

    let modeloTabla = '<table class="table table-dark table-striped">';

    modeloTabla = modeloTabla + '<tr> <th>Zona</th><th>Destino</th><th>Precio</th> </tr>'

    destinos.forEach(p => {
      
        modeloTabla = modeloTabla + '<tr>';
        modeloTabla = modeloTabla + '<td>'+p.zona+'</td>';
        modeloTabla = modeloTabla + '<td>'+p.barrio+'</td>';
        modeloTabla = modeloTabla + '<td>'+p.precio+'</td>';
        modeloTabla = modeloTabla + '</tr>'
       
    });


    modeloTabla = modeloTabla + '</table>'
    document.getElementById('lista').innerHTML= modeloTabla;



};

insertatTabla();



function filtrar(){

    let buscar = document.getElementById('buscar').value;

    if (buscar !== "") {

       // console.log(buscar);

    

        let listaFiltrada = destinos.filter(p => p.barrio.toLowerCase().includes(buscar.toLowerCase()));

     //   console.log(listaFiltrada);

        let modeloTabla = '<table class="table table-dark table-striped">';

    modeloTabla = modeloTabla + '<tr> <th>Zona</th><th>Destino</th><th>Precio</th> </tr>'

    listaFiltrada.forEach(p => {
      
        modeloTabla = modeloTabla + '<tr>';
        modeloTabla = modeloTabla + '<td>'+p.zona+'</td>';
        modeloTabla = modeloTabla + '<td>'+p.barrio+'</td>';
        modeloTabla = modeloTabla + '<td>'+p.precio+'</td>';
        modeloTabla = modeloTabla + '</tr>'
       
    });


    modeloTabla = modeloTabla + '</table>'

    if (listaFiltrada.length > 0) {
        document.getElementById('lista').innerHTML= modeloTabla;
    } else{

        document.getElementById('lista').innerHTML= "<p>No hay resultado de la busqueda</p>";
    }
   
        
    } else{
        insertatTabla();
    }


}

