/* ============================================================
   CATÁLOGO DE LA TIENDA  ·  aquí se agregan, quitan o cambian prendas
   ============================================================
   Cada prenda es una línea. Campos:
     nombre   texto que ve el cliente
     precio   número en pesos, sin puntos (119900)
     desc     frase corta (opcional)
     modelo   foto de la MODELO puesta con ESA prenda
              (misma modelo, misma pose, mismo fondo; solo cambia esa prenda)
     tipo     (opcional) forma al dibujarla: "camiseta", "manga-larga", "hoodie", "pantalon", "chaqueta"
     color    color de la prenda en #hex (para dibujarla colgada en el perchero)
     colgado  foto de la prenda colgada de un gancho (opcional; si no hay, se dibuja con "color")
     mini     foto pequeña para la colección (opcional; si no hay, se recorta de "modelo")
   Las imágenes van en la carpeta img/ (formato .webp, .png o .jpg).
   Para agregar una categoría nueva, copia un bloque { id: ... } completo.
   ============================================================ */

const MARCA = "SUBSUELO";
const WHATSAPP = "";      // tu número con indicativo, ej: "573001234567"

const CATEGORIAS = [
  { id: "camisetas", nombre: "Camisetas", tipo: "camiseta", tallas: ["S", "M", "L", "XL"], foco: "30%", prendas: [
    { nombre: "Boxy Negra", precio: 119900, desc: "Algodón pesado, corte boxy y caída amplia.", color: "#171717", colgado: "img/camisetas/01-colgado.jpg", modelo: "img/camisetas/01.webp" },
    { nombre: "Boxy Lavada Gris", precio: 129900, desc: "Teñido lavado, cada una sale distinta.", color: "#55565a", colgado: "img/camisetas/02-colgado.jpg", modelo: "img/camisetas/02.webp" },
    { nombre: "Oversize Hueso", precio: 109900, desc: "Blanco roto, cuello grueso, hombro caído.", color: "#ebe7de", modelo: "img/camisetas/03.webp" },
    { nombre: "Manga Larga Carbón", tipo: "manga-larga", precio: 139900, desc: "Manga larga con puño en canalé.", color: "#2a2a2c", modelo: "img/camisetas/04.webp" }
  ] },
  { id: "hoodies", nombre: "Hoodies", tipo: "hoodie", tallas: ["S", "M", "L", "XL"], foco: "32%", prendas: [
    { nombre: "Hoodie Negro Oversize", precio: 239900, desc: "Felpa gruesa, capota doble y bolsillo canguro.", color: "#151515", modelo: "img/hoodies/01.webp" },
    { nombre: "Hoodie Gris Jaspe", precio: 239900, desc: "Gris jaspe con interior perchado.", color: "#9b9c9f", modelo: "img/hoodies/02.webp" },
    { nombre: "Hoodie Zip Carbón", precio: 259900, desc: "Cierre completo, lavado suave y puños reforzados.", color: "#323336", colgado: "img/hoodies/03-colgado.jpg", modelo: "img/hoodies/03.webp" },
    { nombre: "Hoodie Crema", precio: 239900, desc: "Crema apagado, silueta amplia.", color: "#efe5d1", colgado: "img/hoodies/04-colgado.jpg", modelo: "img/hoodies/04.webp" }
  ] },
  { id: "pantalones", nombre: "Pantalones", tipo: "pantalon", tallas: ["28", "30", "32", "34"], foco: "64%", prendas: [
    { nombre: "Cargo Doble Bolsillo", precio: 229900, desc: "Dos bolsillos laterales por pierna, corte holgado.", color: "#1c1c1e", modelo: "img/pantalones/01.webp" },
    { nombre: "Jean Ancho Lavado", precio: 249900, desc: "Denim negro lavado, pierna muy ancha.", color: "#3b3b3d", modelo: "img/pantalones/02.webp" }
  ] }

  /* Cuando tengas las fotos de chaquetas, agrega aquí un bloque igual a los de arriba:
  ,{ id: "chaquetas", nombre: "Chaquetas", tallas: ["S", "M", "L", "XL"], foco: "30%", prendas: [
    { nombre: "Cuero Negra", precio: 329900, desc: "...", modelo: "img/chaquetas/01.webp" }
  ] }
  */
];

/* Foto de ambiente opcional (si no existe, simplemente no se muestra) */
const EDITORIAL = "img/ambiente-01.webp";
