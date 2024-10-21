# Architecture decision record (ADR)

## Arquitectura hexagonal

* En la medida de lo posible, se va a aplicar arquitectura hexagonal con `vertical slicing`. Esto quiere decir que cada feature, tendrá su carpeta infrastructure, application, domain y ui para la parte visible (según se necesite, no siempre tienen que existir todas las carpetas).
En el caso de nuestra aplicación una feature clara es `movies` pero podrían existir otras como `actors`

## CQRS
* Para mantener la escalabilidad y las acciones de lectura y escritura separadas, aplicaremos el patrón CQRS. Nos serviremos de las clases `query.ts` y `command.ts`, ya que ambas extienden de `use-case.ts`

## Testing

* Los test unitarios están enfocados a emular el comportamiento real del usuario. Para ello nos servimos de `@testing-library/react-native`. Aplicando tanto el patrón Object Mother para crear mocks de una forma mucho más fácil y reutilizable como el patrón Page Object para aumentar la legibilidad y escalabilidad de los tests.


* (TO-DO) Los test e2e los haríamos con `Cypress`. Para ello, se crearía un archivo `commands.ts` con la definición y la implementación de los métodos que nos fueran a ayudar a hacer los tests más rápido. Ej: Para escoger una opción de un select, hay que hacer un click en el select y otro en la opción. Para esto definiríamos una función `selectOption(option)` y la usaríamos en cada archivo del proyecto que lo necesitara.
  También aplicando el patrón Page Object
