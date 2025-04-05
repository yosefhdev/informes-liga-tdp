# 🚀 Proyecto con Vite, Bun y ShadCN  

¡Bienvenido! 🎉 Este proyecto utiliza **Vite** ⚡ como bundler, **Bun** 🥖 como gestor de paquetes y **ShadCN** 🧩 para los componentes de UI.  

---

## 📦 Instalación  

Asegúrate de tener **Bun** instalado en tu sistema. Si no lo tienes, instálalo con:  

```sh
curl -fsSL https://bun.sh/install | bash
```

Luego, clona el repositorio y navega a la carpeta del proyecto:

```sh
git clone https://github.com/yosefhdev/informes-liga-tdp.git
cd informes-liga-tdp
```

Instala las dependencias con Bun:

```sh
bun install
```

## 🚀 Ejecución del proyecto

Para iniciar el servidor de desarrollo, usa:

```sh
bun dev
```

Esto ejecutará el servidor en <http://localhost:5173/> (o el puerto que Vite asigne).

## 🎨 Agregar componentes de ShadCN

Para agregar nuevos componentes de ShadCN, usa el siguiente comando:

```sh
bunx shadcn@latest add [component]
```

Ejemplo para agregar un botón:

```sh
bunx shadcn@latest add button
```

Puedes consultar los componentes en: <https://ui.shadcn.com/docs>

## 💡 Notas

### Requisitos

- Asegúrate de tener Bun y Node.js instalados.

- Compatibilidad: Este proyecto usa Vite, por lo que puede ejecutarse en la mayoría de los navegadores modernos.

- Personalización: Puedes modificar los estilos en `tailwind.config.js` y los componentes en `components/ui/`.
