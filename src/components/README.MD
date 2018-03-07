## Components Files Naming Conventions
* Main layout components - prefix: 'The' + ComponentName. these are generally singeltons components.
* Composite - prefix: 'Composite.' + ComponentName. these are structure components made from simpler components.
* Componens - no prefix. these are the UI components.

When possible, Composite & Components should be nested in the same folder, else place composit
### example
|-components
    -CompositeFirst
        -Composite.CompositeFirst.vue
        -Componen_1.vue
        -Componen_2.vue
        -Componen_3.vue
    -CompositeSecond
        -Composite.CompositeSecond.vue
        -Componen_A.vue
        -Componen_B.vue
        -Componen_C.vue
    -TheHeader.vue
    -TheBody.vue
    -TheFooter.vue
    
The naming convention draws guidance form vue style guid, see https://vuejs.org/v2/style-guide/ 