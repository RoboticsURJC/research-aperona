# Documentación de laTeX


## 1. Introducción 

### Comandos

Comienzan siempre con "\", si queremos introducir argumentos:

* {}: argumentos obligatorios

* []: argumentos opcionales   


### Entornos

Son bloques de código sobre los que se aplica alguna acción. Delimitados por un comando de apertura "\begin{entorno}" y otro de cierre "\end{entorno}"


### Comentarios

Se usa el símbolo "%" al comienzo del comentario

### Símbolos reservados

* "\": Indica el inicio de un comentario

* "$": Declara el entorno matemático

* "{}": Inicia y finaliza un grupo

* "#": Indica el número de un argumento en la definición de comandos

* "%": Indica el inicio de un comentario

* "&": Separa elementos en una tabla o fórmula

* "^": Escribe un superíndice

* "_": Escribe un subíndice

* "~": Indica por dónde se puede partir una palabra al final de una línea


Para que aparezcan estos caracteres en el documento final es necesario escribirlos en el código fuente precedidos por la barra invertida 


## 2. Estructura de un documento

### Clase de un documento

Primera línea de un fichero en laTeX, indica la clase de documento que se va a generar mediante el comando "\documentclass". El argumento obligatorio {} indica el tipo de documento que se quiere escribir, por ejemplo:

* article

* report

* book

* letter

Los argumentos opcionales [] indican el tamaño de la hoja y tamaño base de la fuente


### Preámbulo

Va después de la clase y antes del comienzo del cuerpo del documento. Suele utilizarse para la carga de los paquetes de macros que se van a utilizar en el documento y la configuración del documento.

Luego se suelen configurar algunos aspectos del documento como podrían ser los márgenes, encabezados y pies, el título, autor y fecha, y otras muchas posibilidades.

También se pueden definir nuevos comandos laTeX o redefinir los ya existentes

### Cuerpo 

Contiene el texto del cuerpo del documento y tiene que ir dentro del entorno document. 

Empieza por el comando \maketitle si se desea empezar el documento con el título, autor y fecha que se hayan definido previamente en el preámbulo, y le sigue el comando 
\tableofcontents que introduce la tabla de contenidos en el documento. Finalmente iría el texto en sí con el contenido del documento.

### Esqueleto básico para xelatex

Si se va a compilar con **xelatex**, los paquetes del preámbulo cambian y deberían utilizarse:

```latex
\usepackage{fontspec}
\setmainfont{Times New Roman}
\usepackage{polyglossia}
\setdefaultlanguage{spanish}
```

* fontspec: permite definir las fuentes tipográfica que se desean utilizar en el documento final, que debe estar instalada en el sistema donde se compile el documento, y el paquete polyglossia permite definir el idioma del documento.


## 3. Secciones y párrafos

### Secciones y subsecciones

Un documento extenso se dividirá en secciones y subsecciones (O incluso capítulos). Para definir las secciones de un documento se utilizan los siguientes comandos:

* \chapter{Título del capítulo}: Crea un nuevo capítulo con el título indicado

* \section{Título de la sección}: Crea una nueva sección con el título indicado y la numeración.

* \subsection{Título de la subsección}: Crea una nueva subsección con el título indicado y la numeración

* \subsubsection{Título de la subsubsección}: Crea una nueva subsubsección con el título indicado y la numeración

Las secciones definidas con estos documentos aparecerán en la tabla de contenidos automáticamente.

Si añadimos un asterisco (Por ejemplo \chapter*), creamos encabezados de sección sin numerar y que tampoco aparecerán en la tabla de contenidos.

### Párrafos y cambios de línea

Para crear un párrafo nuevo dejamos una o más líneas en blanco

Si queremos hacer un cambio de línea dentro de un mismo párrafo, se utiliza el comando \newline

### Justificación

Los párrafos se justifican por defecto a la izquierda y a la derecha. laTeX permite partir las palabras al final de una línea para obtener párrafos más estéticos. 
Asimismo, se pueden justificar solo a la izquierda, solo a la derecha o centrados entre los márgenes. Para ello utilizamos:

* flushleft: Justificación a la izquierda

* flushright: Justificación a la derecha

* center: Justificación al centro


## 4. Formateo básico

### Negrita, cursiva y subrayado

* \textbf{...} : Pone el texto en negrita

* \textit{...} : Pone el texto en cursiva

* \emph{...} : Enfatiza el texto cambiando de estilo (si estamos en un entorno de cursiva pasa a normal y si estamos en un entorno de texto normal pasa a cursiva)

* \underline{...} : Subraya el texto


### Familias de tipos de letra 

Existen tres tipos de letra:

* \texrm{...} : Texto normal (Por defecto)

* \texsf{...} : Texto sin adornos

* \texttt{...} : Texto de máquina de escribir o monoespaciado

```latex
\begin{document}
Este texto es normal, \textsf{este es sin adornos}, \texttt{y este de máquina de escribir}.
\end{document}
```

En el preámbulo se puede seleccionar la fuente a utilizar para cada uno de ellos, especialmente con el paquete fontspec, para ello se usan los comandos:

* \setromanfont{Fuente normal} : Establece la fuente para el tipo de letra normal

* \setsansfont{Fuente sin adorno} : Establece la fuente para el tipo de letra sin adorno

* \setmonofont{Fuente monoespaciada} : Establece la fuente para el tipo de letra monoespaciado




