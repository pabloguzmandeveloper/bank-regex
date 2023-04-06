// Descripción y definiciones de cada expresión regular

/'regex'/               //Las barras inclinadas a la derecha son las que continen a una regex, aunque una 'i' fuera de ellas afecta a toda la regex como lo explicamos adelante
// Flags son propiedades que ordenan determinadas modificaciones
/'regex'/i              //La 'i' determina........


//  Propiedades 	Flag	Descripción
//  .global	        g	    Búsqueda global. Permite seguir buscando coincidencias en lugar de pararse al encontrar una.
//  .ignoreCase	    i	    Le da igual mayúsculas y minúsculas. Se suele denominar insensible a mayús/minús.
//  .multiline	    m	    Multilínea. Permite a ^ y $ tratar los finales de línea \r o \n.
//  .unicode	    u	    Unicode. Interpreta el patrón como un código de una secuencia Unicode.
//  .sticky	        y	    Sticky. Busca sólo desde la posición indicada por lastIndex.
//  .dotAll	        s	    Establece si \n, \r, separación de párrafo o separación de línea deberían considerarse en los . (puntos)
//  .hasIndices	    d	    Establece si al ejecutar un .exec() el resultado deberá tener propiedad .indices.




// Métodos de regexp

.test() // concatenado a una variable que contiene el patrón a matchear y al pasarle un string como parámetro entrega por resultado un boleano true or false


// Regex para:
const one = /(Caja)?\s*((?<!\w)x|por|pack)\s*?((?<!\d)\d+(?:\.\d+)?(?!\d))\s*(?!\bu(n|ni(dad)?|nidades)\b)(?!\s*(l|lt|lts|litro|litros|cc|ml|cm3|gr|grs|k|kg|kgs|°|%|[/])\b)/i;

// Variantes de regex para resultados similares al anterior.

const regex1    = /(Caja)?\s*((?<!\w)x|por|pack)\s*?((?<!\d)\d+(?:\.\d+)?(?!\d))\s*(?!\bu(n|ni(dad)?|nidades)\b)(?!\s*(l|lt|lts|litro|litros|cc|ml|cm3|gr|grs|k|kg|kgs|°|%)\b)/i;


const regex2    = /(Caja)?\s*((?<!\w)x|de|por|pack)\s*?(\d+)\s*(?!\bu(n|ni(dad)?|nidades)\b)(?!\s*(l|lt|lts|litro|litros|cc|ml|cm3|gr|grs|k|kg|kgs|°|%)\b)(?!\d)/i;


const regex3    = /(Caja)?\s*?(x|de|por|pack)\s*?(\d+)\s*(?!\bu(n|ni(dad)?|nidades)\b)(?!\s*(l|lts|litro|litros|cc|ml|cm3)\b)(?!\s*(°|%)\b)/i;


const regex4    = /(Caja)?\s*?(x|de|por|pack)\s*?(\d+)(?!\s*?(°|%)[\w\s]*?\b)/i

// Expresión regular para la segunda combinación
const regex5    = /(Caja)\s*(x|por)\s*(\d+)/i;
