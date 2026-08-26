# Fundamentos de la arquitectura de servicios en NestJS

En el dominio de la banca digital, se requiere diseñar y explicar la arquitectura de un servicio REST que maneje operaciones de cuentas bancarias. El servicio debe soportar creación, lectura, actualización y eliminación de cuentas, con validaciones de negocio específicas (por ejemplo, saldo mínimo, tipos de cuenta). El sistema interactúa con un motor de reglas de negocio y un almacén de datos.

## Informacion General

| Campo | Valor |
|-------|-------|
| **Tema** | TypeScript NestJS |
| **Nivel** | junior-l1 |
| **Tipo** | theoretical |
| **Tiempo estimado** | 2 horas |

## Fases del Reto

### Fase 0: Configuración del Proyecto

**Objetivo:** Obtener el proyecto base funcional enviando el Código Base a un asistente de IA, que lo analizará, corregirá errores y generará un ZIP listo para usar.

**Tiempo estimado:** 15-30 minutos

**Instrucciones:**

- Asegúrate de tener instalado para ejecutar el proyecto: Un IDE o editor de código.
- Copia todo el contenido del campo **Código Base** de este reto — incluyendo el texto de instrucciones que aparece al inicio.
- Abre un asistente de IA (Claude en claude.ai, ChatGPT o Gemini — se recomienda Claude), pega el contenido copiado en el chat y envíalo.
- El asistente analizará los archivos, corregirá errores y generará un archivo ZIP descargable. Descárgalo y extráelo en la carpeta donde quieras trabajar.
- Verifica que el proyecto arranca sin errores.

**Entregable:** El proyecto compila/arranca sin errores.

<details>
<summary>Pistas de conocimiento</summary>

- Copia el Código Base completo incluyendo el texto de instrucciones al inicio — esas instrucciones le indican al asistente exactamente qué hacer con los archivos.
- Si el asistente no genera el ZIP automáticamente al terminar el análisis, escríbele: "genera el ZIP ahora".
- Si el proyecto tiene errores al arrancar, comparte el mensaje de error con el mismo asistente para que lo corrija.

</details>

### Fase 1: Exploración del dominio y requerimientos

**Objetivo:** Identificar y describir los actores, fuentes y sumideros involucrados en las operaciones de cuentas bancarias.

**Tiempo estimado:** 30 minutos

**Instrucciones:**

- Enumera los actores clave (por ejemplo, cliente, sistema de reglas de negocio, almacén de datos) y describe sus roles.
- Identifica las fuentes y sumideros de datos (por ejemplo, solicitudes de API, respuestas, eventos de auditoría).

**Entregable:** Mapa de actores y flujos de datos para las operaciones de cuentas bancarias.

<details>
<summary>Pistas de conocimiento</summary>

- Considera las validaciones de negocio necesarias para cada tipo de operación.
- Piensa en los posibles estados de una cuenta bancaria y las transiciones entre ellos.

</details>

### Fase 2: Definición de las operaciones y validaciones

**Objetivo:** Definir las operaciones CRUD para cuentas bancarias y las validaciones de negocio asociadas.

**Tiempo estimado:** 45 minutos

**Instrucciones:**

- Describe las operaciones CRUD (crear, leer, actualizar, eliminar) para cuentas bancarias.
- Especifica las validaciones de negocio para cada operación (por ejemplo, saldo mínimo para apertura de cuenta, tipos de cuenta permitidos).

**Entregable:** Documento que describe las operaciones CRUD y las validaciones de negocio para cuentas bancarias.

<details>
<summary>Pistas de conocimiento</summary>

- Considera los posibles errores y modos de falla para cada operación.
- Piensa en cómo manejarías las transacciones concurrentes.

</details>

### Fase 3: Diseño de la arquitectura del servicio

**Objetivo:** Diseñar la arquitectura del servicio REST en NestJS, incluyendo módulos, controladores y servicios.

**Tiempo estimado:** 45 minutos

**Instrucciones:**

- Diseña la arquitectura del servicio REST en NestJS, identificando los módulos, controladores y servicios necesarios.
- Describe cómo se integran el motor de reglas de negocio y el almacén de datos en la arquitectura.

**Entregable:** Diagrama de la arquitectura del servicio REST en NestJS, incluyendo módulos, controladores y servicios.

<details>
<summary>Pistas de conocimiento</summary>

- Considera la separación de responsabilidades entre módulos y servicios.
- Piensa en cómo manejarías la comunicación con el motor de reglas de negocio y el almacén de datos.

</details>

## Dimensiones Evaluadas

- **queEs**: ¿Qué es un servicio REST en el contexto de NestJS y cómo se integra con otros componentes del sistema?
- **paraQueSirve**: ¿Para qué sirve cada uno de los módulos, controladores y servicios en la arquitectura del servicio REST?
- **comoSeUsa**: ¿Cómo se usan las validaciones de negocio en las operaciones CRUD para cuentas bancarias?
- **erroresComunes**: ¿Cuáles son los errores comunes que pueden ocurrir en las operaciones CRUD para cuentas bancarias y cómo se manejan?
- **queDecisionesImplica**: ¿Qué decisiones implica el diseño de la arquitectura del servicio REST en NestJS y cómo afecta al sistema en general?

## Criterios de Evaluacion

- Identificación correcta de actores, fuentes y sumideros en el dominio de las operaciones de cuentas bancarias.
- Definición precisa de las operaciones CRUD y validaciones de negocio para cuentas bancarias.
- Diseño adecuado de la arquitectura del servicio REST en NestJS, incluyendo módulos, controladores y servicios.
- Consideración de posibles errores y modos de falla en las operaciones CRUD.
- Justificación de decisiones críticas en el diseño de la arquitectura del servicio.

---

*Reto generado automaticamente por Challenge Generator - Pragma*
