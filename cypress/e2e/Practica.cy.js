
import Main from "../POM/Main"
import Interact from "../POM/Interact"

//paragithubA
describe('Practica', () => {
    const Principal = new Main()
    const Interactuar = new Interact()


beforeEach(() => {
    Principal.homepage()
    Interactuar.clickmasintro("Tarea 1")
    Interactuar.clickmasintro("Tarea 2")
    Interactuar.clickmasintro("Tarea 3")
    });
      
it('C165_Eliminar varias opciones ya existentes', () => {

    Interactuar.borra("Tarea 1")
    Interactuar.borra("Tarea 2")
    Interactuar.borra("Tarea 3")

    });
    
it('C169_Editar una tarea y ponerle el mismo nombre que una tarea ya existente', () => {

    Interactuar.dobleclick()
    Interactuar.sobrescribir()
    });

it('C167_Al filtrar las tareas activas cuando todas las tareas están completadas no muestra ninguna tarea', () => {

    Interactuar.clickmasintro("Tarea 4")
    Interactuar.clickmasintro("Tarea 5")
    Interactuar.pulsarall()
    Interactuar.pulsaractive()
    });

})