
import Main from "../POM/Main"
import Interact from "../POM/Interact"
import Erase from "../POM/Erase"

//paragithubA
describe('Practica', () => {
    const Principal = new Main()
    const Interactuar = new Interact()
    const Borrar = new Erase()


beforeEach(() => {
    Principal.homepage()
    Interactuar.clickmasintro()
    Interactuar.clickmasintro2()
    Interactuar.clickmasintro3()
    });
      
it('C165_Eliminar varias opciones ya existentes', () => {

    Borrar.borra()
    Borrar.borra2()
    Borrar.borra3()

    });
    
it('C169_Editar una tarea y ponerle el mismo nombre que una tarea ya existente', () => {

    Interactuar.dobleclick()
    Interactuar.sobrescribir()
    });

it.only('C167_Al filtrar las tareas activas cuando todas las tareas están completadas no muestra ninguna tarea', () => {

    Interactuar.clickmasintro4()
    Interactuar.clickmasintro5()
    Interactuar.pulsarall()
    Interactuar.pulsaractive()
    });

})