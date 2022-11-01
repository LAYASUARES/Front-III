import './style.scss'
import batataGif from './../../assets/images/batataGif.gif'

export function TerceiraAula() {

     
     const components = [
          {name: "Produtos", description: "teste", image: "http://pa1.narvii.com/6203/b19ab0278cb42d6c11e6ac6c3c4f2824dc593def_00.gif"},
          {name: "Informação", description: "teste 2", image: ""},
          {name: "Questões", description: "teste 3", image: ""},
          {name: "Guias", description: "teste 4", image: ""},
          {name: "Queixas", description: "teste 4", image: ""},
     ]

     return (
          <main>
               
               <h1>Lista de componentes encontrados em um sistema</h1>
               <ul>
                    {
                         components.map(component => (
                              

                              <li>
                                   <input type="radio" id="first" name="teste" />
                                   <label htmlFor="first">{component.name}</label>
                                   <div>
                                        <p>{component.description}</p>
                                   </div>
                              </li>
                              
                         ))
                    }
                    
               </ul>
          </main>
     )
}