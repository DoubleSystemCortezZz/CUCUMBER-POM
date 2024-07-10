Feature: Testeando todo page

Scenario: C165_Eliminar varias opciones ya existentes
    Given Ingreso en la web
    When Ingreso 3 tareas con  nombres: "Tarea 1", "Tarea 2", "Tarea 3"
    When Borro 3 tareas con nombres: "Tarea 1", "Tarea 2", "Tarea 3"
    Then Se comprueba si se han borrado las 3 pruebas

Scenario: C169_Editar una tarea y ponerle el mismo nombre que una tarea ya existente
    Given Ingreso en la web
    When Ingreso 3 tareas con  nombres: "Tarea 1", "Tarea 2", "Tarea 3"
    When Editar una tarea
    When Sobreescribir una tarea
    Then Ahora la tarea numero "3" se llama "Tarea Nueva"
    

Scenario: C167_Al filtrar las tareas activas cuando todas las tareas están completadas no muestra ninguna tarea
    Given Ingreso en la web
    When Ingreso 3 tareas con  nombres: "Tarea 1", "Tarea 2", "Tarea 3"
    When Agrego 2 tareas más con nombres: "Tarea 4", "Tarea 5"
    When Tickar todas las tareas
    When Pulsar Active
    Then Se comprueba si no aparecen las 5 pruebas
