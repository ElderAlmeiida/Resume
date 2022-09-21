
// pega a tag principal que ira receber o menu
export default function  (data) {

    const tree = document.querySelector('nav#tree')


    // recebe toda a avore de elementos
    const menu = document.createElement('ul')



   const fristLevel= data.filter(item=> !item.parent)
   const getfristlis = fristLevel.map(buildtree)
   getfristlis.forEach(li=>menu.append(li))
   

   function buildtree (item){
          //adiciona elementos sem filhos
          const li = document.createElement('li') 
          li.innerHTML=item.name
          
          const children = data.filter(child => child.parent === item.id)
          
           if(children.length>0){
            
            // adiciona um click para parrents
            li.addEventListener('click', event=>{
                event.stopPropagation()
                event.target.classList.toggle('open')
            })

            // adiciona uma classe identificadora de que tem filhos
            li.classList.add('has-children')
            //constroi filhos
            const submenu = document.createElement('ul')   
            children.map(buildtree)
            .forEach(li => submenu.append(li))
            li.append(submenu)
           }
          //adiciona elementos ao menu
          return li
  
      }
      //adiciona menu ao html 
      tree.append(menu)
}

   
