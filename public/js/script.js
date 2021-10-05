const socket = io();

  let mensaje = document.getElementById('input')
   let ListaDeMsj = document.getElementById('messages');
   let form = document.getElementById('form')

            form.addEventListener('submit',(e)=>{

             e.preventDefault();
            
              if(mensaje.value){

                socket.emit('msj',{Mensaje : mensaje.value});
                mensaje.value = "";
              }
            }) 
                
             socket.on('msj',(e)=>{


               let item = document.createElement('li')
               item.innerHTML = e.Mensaje

               ListaDeMsj.appendChild(item)
               window.scrollTo(0, document.body.scrollHeight);
              /*
                ListaDeMsj.innerHTML = `
                <li>
                   <strong>${e.Usuario}</strong>
                   <p>${e.Mensaje}</p>
           
                </li>`
                */
             })
           
       


           

