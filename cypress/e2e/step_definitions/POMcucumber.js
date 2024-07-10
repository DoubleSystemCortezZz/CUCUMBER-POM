import {
    Given,
    When,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";
  import { pruebasCPOM } from "@pages/CCPOM";

Given('Ingreso en la web', () => {
    pruebasCPOM.homepage();
})

When('Ingreso 3 tareas con  nombres: {string}, {string}, {string}', (texto1, texto2, texto3) => {
    pruebasCPOM.clickmasintro(texto1);
    pruebasCPOM.clickmasintro(texto2);
    pruebasCPOM.clickmasintro(texto3);

})

When('Borro 3 tareas con nombres: {string}, {string}, {string}', (texto1, texto2, texto3) => {
    pruebasCPOM.borra(texto1);
    pruebasCPOM.borra(texto2);
    pruebasCPOM.borra(texto3);
})

When('Agrego 2 tareas más con nombres: {string}, {string}', (texto1, texto2) => {
    pruebasCPOM.clickmasintro(texto1);
    pruebasCPOM.clickmasintro(texto1);

})

When('Editar una tarea', () => {
    pruebasCPOM.dobleclick();
})

When('Sobreescribir una tarea', () => {
    pruebasCPOM.sobrescribir("Tarea Nueva");
})

When('Tickar todas las tareas', () => {
    pruebasCPOM.pulsarall();
})

When('Pulsar Active', () => {
    pruebasCPOM.pulsaractive();
})

Then('Ahora la tarea numero {string} se llama {string}', (numero, texto) => {
    pruebasCPOM.DeberiaLLamarse(numero, texto);
})

Then('Se comprueba si se han borrado las 3 pruebas', () => {
    pruebasCPOM.NoDeberiaContener("1")
    pruebasCPOM.NoDeberiaContener("2")
    pruebasCPOM.NoDeberiaContener("3")
})

Then('Se comprueba si no aparecen las 5 pruebas', () => {
    pruebasCPOM.NoDeberiaContener("1")
    pruebasCPOM.NoDeberiaContener("2")
    pruebasCPOM.NoDeberiaContener("3")
    pruebasCPOM.NoDeberiaContener("4")
    pruebasCPOM.NoDeberiaContener("5")
})