// document.querySelectorAll('.table tbody tr').forEach((row) => {
//     row.addEventListener('mouseover', () => {
//         row.classList.remove('table-active');
//     });
//     row.addEventListener('mouseout', () => {
//         row.classList.add('table-active');
//     });
// });











// MOSTRAR los formualrios NUEVA HERRAMIENTA
// fetch(recurso)
//   .then((res) => res.json())
//   .then((data) => {
//     if (data.error) {
//       console.error("error al mostrar datos", data);
//     } else {
//       mostrar(data.body);
//     }
//   })
//   .catch((error) => console.log(error));

// const mostrar = (data) => {
//   let body = "";

//   for (let i = 0; i < data.length; i++) {
//     body += `
//         <div class="caja_reporte">
    
//             <div class="contenido_reporte">
//               <div class="content-between">
//                 <h5 class="contexto_title">Formulario de Nueva Herramienta</h5>
//                 <small>${data[i].fecha.substring(0, 10)}</small>
//               </div>
//               <p class="contexto"> Enviado por : ${data[i].email}</p>
        
//             </div>
    
//             <div class="acciones">
                    
//               <div class="ojito">
//                 <i class='icono bx bxs-file-pdf green' onclick="reporte('${data[i].asunto}', '${data[i].cantidad}', '${data[i].descripcion}', '${data[i].email}', '${data[i].nombre}', '${data[i].apellido}');"></i>
//               </div>
//             </div>
    
//         </div>
//   `;
//   }
//   document.getElementById("data").innerHTML = body;

// };




















// CREAR reporte2 para DAÑO HERRAMIENTA
// const crearReporte = (asunto, cantidad, descripcion, email, nombre, apellido, nombre_herramienta) => {
//     const reporte = new jsPDF();
  
//     // Encabezado
//     reporte.setFontSize(20);
//     reporte.setFont("helvetica", "bold");
//     reporte.text('Tool_Inventory - SENA', 105, 15, null, null, 'center');
//     reporte.setLineWidth(1);
//     reporte.line(10, 20, 200, 20);
  
//     // Contenido
//     let fila = 30;
//     reporte.setFontSize(16);
//     reporte.setTextColor(220, 53, 69); // Rojo
//     reporte.text(10, fila, "Formulario Daño de Herramienta");
  
//     fila += 10;
//     reporte.setFontSize(12);
//     reporte.setTextColor(0, 0, 0); // Negro
//     reporte.setFont("helvetica", "bold");
//     reporte.text(10, (fila += 10), "Enviado por:");
//     reporte.setFont("helvetica", "normal");
//     reporte.text(50, fila, email);
  
//     reporte.setFont("helvetica", "bold");
//     reporte.text(10, (fila += 10), "Asunto:");
//     reporte.setFont("helvetica", "normal");
//     reporte.text(50, fila, asunto);
  
//     reporte.setFont("helvetica", "bold");
//     reporte.text(10, (fila += 10), "Nombre:");
//     reporte.setFont("helvetica", "normal");
//     reporte.text(50, fila, `${nombre} ${apellido}`);
  
//     reporte.setFont("helvetica", "bold");
//     reporte.text(10, (fila += 10), "Herramienta:");
//     reporte.setFont("helvetica", "normal");
//     reporte.text(50, fila, nombre_herramienta);
  
//     reporte.setFont("helvetica", "bold");
//     reporte.text(10, (fila += 10), "Cantidad rotas:");
//     reporte.setFont("helvetica", "normal");
//     reporte.text(50, fila, cantidad.toString());
  
//     reporte.setFont("helvetica", "bold");
//     reporte.text(10, (fila += 10), "Descripción:");
//     reporte.setFont("helvetica", "normal");
//     reporte.text(50, fila, descripcion);
  
//     // Agregar pie de página con la fecha
//     const formattedDate = new Date().toLocaleDateString('es-ES', {
//       day: '2-digit',
//       month: '2-digit',
//       year: 'numeric'
//     });
//     const formattedTime = new Date().toLocaleTimeString('es-ES', {
//       hour: '2-digit',
//       minute: '2-digit'
//     });
  
//     reporte.line(10, 280, 200, 280);
//     reporte.setFontSize(10);
//     reporte.setFont("helvetica", "italic");
//     reporte.text(`Fecha y hora de impresión: ${formattedDate} -- ${formattedTime}`, 10, 285);
  
//     // Guardar el PDF
//     reporte.save("FormularioDañoHerramienta.pdf");
//   };
  
  
  
  
//   // MOSTRAR todos lo REPORTE de daño herramienta PDF
//   document.getElementById('generatePdfBtn').addEventListener('click', function () {
//     fetch(recursos)
//       .then((res) => res.json())
//       .then((data) => {
//         if (data.error) {
//           console.error("error al mostrar datos", data);
//         } else {
//           generatePdfBtn(data.body);
//         }
//       })
//       .catch((error) => console.log(error));
//   });
  
//   const generatePdfBtn = (data) => {
//     // Crear una instancia de jsPDF
//     const doc = new jsPDF();
  
//     // Agregar encabezado
//     doc.setFontSize(16);
//     doc.setTextColor(0, 0, 0);
//     doc.text('Tool_Inventory - SENA', 105, 10, null, null, 'center');
//     doc.setFont("helvetica", "normal");
//     doc.text('Reporte Daños Herramientas:', 14, 22);
  
  
//     // Crear la estructura de datos para la tabla
//     const tableData = [];
//     for (let i = 0; i < data.length; i++) {
//       const item = data[i];
//       tableData.push([
//         item.fecha.substring(0, 10),
//         item.email,
//         `${item.nombre} ${item.apellido}`,
//         item.asunto,
//         `${item.descripcion}`,
//         `${item.nombre_herramienta} (CANTIDAD: ${item.cantidad})`
//       ]);
//     }
  
  
//     // Configurar posición y dimensiones de la tabla
//     doc.autoTable({
//       startY: 30, // Posición inicial de la tabla
//       head: [['Fecha', 'Enviado por', 'Instructor', 'Asunto', 'Descripcion', 'Herramienta']], // Encabezados de las columnas
//       body: tableData, // Datos de la tabla
//       headStyles: { fillColor: [255, 182, 193] }, // Color del encabezado
//       didDrawPage: function (data) {
//         // Agregar pie de página con la fecha
//         const formattedDate = new Date().toLocaleDateString('es-ES', {
//           day: '2-digit',
//           month: '2-digit',
//           year: 'numeric'
//         });
//         const formattedTime = new Date().toLocaleTimeString('es-ES', {
//           hour: '2-digit',
//           minute: '2-digit'
//         });
//         doc.setTextColor(0, 0, 255);
//         doc.setFontSize(12);
//         doc.setFont("helvetica", "normal");
//         doc.text(`Fecha y hora de impresión: ${formattedDate} -- ${formattedTime}`, 10, doc.internal.pageSize.height - 10);
//       }
//     });
  
//     // Guardar el PDF
//     doc.save('ReporteDañoHerramientas.pdf');
  
//   };
  
  
//   // BARRA DE BUSQUEDA
//   const search = document.getElementById("search_invenatry");
  
//   search.addEventListener("keyup", e => {
//     const query = e.target.value.toLowerCase();
  
//     document.querySelectorAll('#data .caja_reporte').forEach(row => {
  
//       const title = row.querySelector('.contexto_title').textContent.toLowerCase();
//       const contexto = row.querySelector('.contexto').textContent.toLowerCase();
  
//       if (title.includes(query) || contexto.includes(query)) {
//         row.classList.remove('filtro');
//       } else {
//         row.classList.add('filtro');
//       }
//     });
  
//   });
  
//   const style = document.createElement('style')
//   style.innerHTML = `
//   .filtro {
//       display: none;
//       }
//   `;
  
//   document.head.appendChild(style);