// ============================================
// PROMPTBOT - Generador de Respuestas WhatsApp
// ============================================

// Base de plantillas de respuestas
const templates = {
    restaurante: {
        saludo: [
            "¡Hola! 👋 Bienvenido a {nombre}.\n\n🍽️ Estamos listos para atenderte.\n\n¿En qué podemos ayudarte hoy?\n• Ver menú\n• Hacer pedido\n• Reservar mesa\n• Preguntar por promociones",
            "¡Hola! 🌟 Gracias por contactar a {nombre}.\n\nNos encanta que nos escribas. ¿Qué se te antoja hoy?\n\n📱 Escríbenos y con gusto te atendemos.",
            "¡Bienvenido a {nombre}! 🎉\n\nEstamos para servirte. Cuéntanos, ¿qué te gustaría ordenar hoy?\n\n⏰ Horario: {horario}"
        ],
        precios: [
            "💰 *Precios en {nombre}*\n\nTenemos opciones para todos los gustos:\n\n🥗 Entradas: desde $50\n🍝 Platos fuertes: desde $120\n🍰 Postres: desde $45\n🥤 Bebidas: desde $25\n\n📋 ¿Te enviamos el menú completo?",
            "¡Claro! 📋 Nuestros precios son:\n\n• Combos individuales: $99-$150\n• Combos familiares: $250-$400\n• Promociones del día disponibles\n\n💬 ¿Qué te interesa?"
        ],
        horarios: [
            "🕐 *Horarios de {nombre}*\n\n{horario}\n\n📍 Estamos en: {ubicacion}\n📞 Teléfono: {telefono}\n\n¡Te esperamos! 🙌",
        ],
        ubicacion: [
            "📍 *¿Cómo llegar a {nombre}?*\n\nEstamos en: {ubicacion}\n\n🚗 Contamos con estacionamiento\n🛵 También hacemos entregas a domicilio\n\n¿Necesitas indicaciones más específicas?"
        ],
        pedido: [
            "📦 *¡Perfecto! Hagamos tu pedido*\n\nPor favor envíanos:\n\n1️⃣ Tu nombre\n2️⃣ Tu dirección completa\n3️⃣ Lo que deseas ordenar\n4️⃣ Forma de pago\n\n⏱️ Tiempo estimado: 30-45 min\n💳 Aceptamos efectivo y tarjeta"
        ],
        agradecimiento: [
            "🙏 *¡Gracias por tu preferencia!*\n\nEn {nombre} valoramos mucho que nos elijas.\n\n⭐ Si te gustó, déjanos tu reseña\n📸 Comparte tu experiencia\n\n¡Vuelve pronto! 🤗"
        ],
        ausente: [
            "😴 *Fuera de horario*\n\nGracias por escribirnos a {nombre}.\n\nEn este momento no estamos disponibles.\n⏰ Nuestro horario es: {horario}\n\n📝 Déjanos tu pedido y te respondemos mañana a primera hora.\n\n¡Gracias por tu paciencia!"
        ],
        promocion: [
            "🎉 *¡PROMOCIÓN ESPECIAL!*\n\n🔥 Solo en {nombre}:\n\n✅ 2x1 en platillos seleccionados\n✅ Postre gratis en pedidos +$200\n✅ Envío gratis en tu primer pedido\n\n⏰ Válido: Esta semana\n\n¡No te lo pierdas! 🚀"
        ]
    },
    
    tienda: {
        saludo: [
            "¡Hola! 👋 Bienvenido a {nombre}.\n\n🛒 Somos tu tienda de confianza.\n\n¿Qué estás buscando hoy?\n• Catálogo de productos\n• Precios y disponibilidad\n• Estado de tu pedido\n• Formas de pago",
            "¡Hola! 🌟 Gracias por contactarnos.\n\n{nombre} está para servirte.\n\n💬 Cuéntanos qué necesitas y te ayudamos al instante."
        ],
        precios: [
            "💰 *Precios y Catálogo*\n\n📋 Te comparto nuestro catálogo actualizado.\n\n✅ Precios ya con IVA\n✅ Envíos a todo el país\n✅ Garantía incluida\n\n¿Hay algo específico que te interese?",
        ],
        horarios: [
            "🕐 *Horarios de atención*\n\n{horario}\n\n📱 WhatsApp: Respondemos en menos de 1 hora\n📦 Envíos: Lunes a Sábado\n\n¿En qué podemos ayudarte?"
        ],
        ubicacion: [
            "📍 *¿Dónde estamos?*\n\n{ubicacion}\n\n🚚 También hacemos envíos a todo el país\n💳 Pago contra entrega disponible\n\n¿Te interesa algún producto?"
        ],
        pedido: [
            "📦 *¡Hagamos tu pedido!*\n\nEnvíanos:\n\n1️⃣ Producto(s) que deseas\n2️⃣ Cantidad\n3️⃣ Tu nombre completo\n4️⃣ Dirección de envío\n5️⃣ Teléfono de contacto\n\n💳 Formas de pago:\n• Transferencia\n• Tarjeta\n• Efectivo contra entrega"
        ],
        agradecimiento: [
            "🙏 *¡Gracias por tu compra!*\n\nTu confianza en {nombre} significa mucho.\n\n📦 Tu pedido está siendo procesado\n📱 Te notificaremos el envío\n\n⭐ ¿Nos dejas una reseña?\n\n¡Vuelve pronto! 🛒"
        ],
        ausente: [
            "😴 *Mensaje automático*\n\nGracias por escribir a {nombre}.\n\nEn este momento no podemos responder.\n⏰ Horario: {horario}\n\n📝 Tu mensaje es importante. Te responderemos lo antes posible.\n\n¡Gracias por esperar!"
        ],
        promocion: [
            "🎉 *¡OFERTAS ESPECIALES!*\n\n🔥 Promociones en {nombre}:\n\n✅ Hasta 30% de descuento\n✅ Envío gratis +$500\n✅ 3 MSI en compras +$1000\n\n⏰ Por tiempo limitado\n\n¡Aprovecha ahora! 🛒"
        ]
    },
    
    servicios: {
        saludo: [
            "¡Hola! 👋 Bienvenido a {nombre}.\n\n🔧 Somos profesionales a tu servicio.\n\n¿En qué podemos ayudarte?\n• Cotización\n• Agendar cita\n• Información de servicios\n• Dudas generales",
            "¡Hola! 🌟 Gracias por contactar a {nombre}.\n\nEstamos listos para atenderte.\n\n💬 Cuéntanos qué necesitas."
        ],
        precios: [
            "💰 *Cotización de Servicios*\n\nPara darte un precio exacto, necesitamos saber:\n\n1️⃣ ¿Qué servicio necesitas?\n2️⃣ ¿Cuál es la situación actual?\n3️⃣ ¿Para cuándo lo necesitas?\n\n📋 Cotización sin compromiso\n✅ Garantía en nuestro trabajo"
        ],
        horarios: [
            "🕐 *Horarios de {nombre}*\n\n{horario}\n\n📱 WhatsApp: Siempre disponible\n🏠 Servicio a domicilio disponible\n📞 Teléfono: {telefono}\n\n¿Agendamos una cita?"
        ],
        ubicacion: [
            "📍 *Nuestra ubicación*\n\n{ubicacion}\n\n🏠 También ofrecemos servicio a domicilio\n🚗 Cobertura en toda la zona\n\n¿Necesitas que vayamos a tu domicilio?"
        ],
        pedido: [
            "📋 *¡Agenda tu servicio!*\n\nPara agendar necesitamos:\n\n1️⃣ Tu nombre\n2️⃣ Tipo de servicio\n3️⃣ Dirección\n4️⃣ Fecha y hora preferida\n5️⃣ Teléfono de contacto\n\n✅ Confirmamos en menos de 2 horas"
        ],
        agradecimiento: [
            "🙏 *¡Gracias por confiar en nosotros!*\n\nEn {nombre} nos esforzamos por darte el mejor servicio.\n\n⭐ Tu opinión nos importa\n📱 Cualquier duda, escríbenos\n\n¡Estamos para servirte! 🤝"
        ],
        ausente: [
            "😴 *Fuera de horario*\n\nGracias por contactar a {nombre}.\n\n⏰ Horario de atención: {horario}\n\n📝 Déjanos tu mensaje y te contactamos mañana.\n\n🚨 Urgencias: {telefono}\n\n¡Gracias por tu paciencia!"
        ],
        promocion: [
            "🎉 *¡PROMOCIÓN DEL MES!*\n\n🔥 En {nombre} tenemos:\n\n✅ 15% descuento en primer servicio\n✅ Diagnóstico GRATIS\n✅ Garantía extendida\n\n📅 Agenda ahora y aprovecha\n\n¡Te esperamos! 🛠️"
        ]
    },
    
    salud: {
        saludo: [
            "¡Hola! 👋 Bienvenido a {nombre}.\n\n🏥 Tu salud es nuestra prioridad.\n\n¿En qué podemos ayudarte?\n• Agendar cita\n• Información de servicios\n• Horarios disponibles\n• Ubicación",
            "¡Hola! 🌟 Gracias por contactar a {nombre}.\n\nEstamos para cuidarte.\n\n💬 ¿Cómo podemos ayudarte hoy?"
        ],
        precios: [
            "💰 *Costos de Consulta*\n\n📋 Nuestros servicios:\n\n• Consulta general: $XXX\n• Consulta especializada: $XXX\n• Estudios básicos: desde $XXX\n\n✅ Aceptamos seguros\n💳 Facilidades de pago\n\n¿Te agendamos una cita?"
        ],
        horarios: [
            "🕐 *Horarios de atención*\n\n{horario}\n\n📍 {ubicacion}\n📞 Citas: {telefono}\n\n🚨 Urgencias: Disponibles 24/7\n\n¿Necesitas agendar una cita?"
        ],
        ubicacion: [
            "📍 *¿Cómo llegar?*\n\n{ubicacion}\n\n🅿️ Estacionamiento disponible\n♿ Acceso para personas con discapacidad\n\n¿Necesitas indicaciones específicas?"
        ],
        pedido: [
            "📅 *¡Agenda tu cita!*\n\nPor favor envíanos:\n\n1️⃣ Nombre completo\n2️⃣ Fecha de nacimiento\n3️⃣ Motivo de consulta\n4️⃣ Fecha y hora preferida\n5️⃣ Teléfono de contacto\n\n✅ Confirmamos disponibilidad al instante"
        ],
        agradecimiento: [
            "🙏 *¡Gracias por confiar en nosotros!*\n\nEn {nombre} cuidamos de tu salud.\n\n📋 Sigue las indicaciones de tu médico\n📱 Cualquier duda, contáctanos\n\n¡Tu bienestar es nuestra misión! 💚"
        ],
        ausente: [
            "😴 *Fuera de horario de atención*\n\nGracias por contactar a {nombre}.\n\n⏰ Horario: {horario}\n\n🚨 URGENCIAS: Llama al {telefono}\n\n📝 Para citas, responderemos mañana temprano."
        ],
        promocion: [
            "🎉 *¡PROMOCIÓN DE SALUD!*\n\n💚 En {nombre}:\n\n✅ Chequeo general: 20% desc.\n✅ Paquete preventivo con descuento\n✅ Primera consulta con precio especial\n\n📅 Agenda ahora\n\n¡Tu salud no puede esperar! 🏥"
        ]
    },
    
    educacion: {
        saludo: [
            "¡Hola! 👋 Bienvenido a {nombre}.\n\n📚 La educación transforma vidas.\n\n¿En qué podemos ayudarte?\n• Información de cursos\n• Inscripciones\n• Horarios\n• Costos",
            "¡Hola! 🌟 Gracias por tu interés en {nombre}.\n\n🎓 Estamos para ayudarte a crecer.\n\n💬 ¿Qué te gustaría saber?"
        ],
        precios: [
            "💰 *Inversión en tu Educación*\n\n📋 Nuestros programas:\n\n• Cursos básicos: desde $XXX/mes\n• Cursos avanzados: desde $XXX/mes\n• Diplomados: consultar\n\n✅ Becas disponibles\n💳 Facilidades de pago\n\n¿Te interesa algún curso en particular?"
        ],
        horarios: [
            "🕐 *Horarios de clases*\n\n📅 Turnos disponibles:\n• Matutino: 8am - 12pm\n• Vespertino: 2pm - 6pm\n• Sabatino: 9am - 2pm\n\n📍 {ubicacion}\n📞 {telefono}\n\n¿Qué horario te conviene?"
        ],
        ubicacion: [
            "📍 *¿Dónde estamos?*\n\n{ubicacion}\n\n🚌 Cerca de transporte público\n🅿️ Estacionamiento disponible\n\n📱 También ofrecemos clases en línea\n\n¿Te gustaría visitarnos?"
        ],
        pedido: [
            "📝 *¡Inscríbete ahora!*\n\nPara inscribirte necesitamos:\n\n1️⃣ Nombre completo\n2️⃣ Curso de interés\n3️⃣ Turno preferido\n4️⃣ Email\n5️⃣ Teléfono\n\n✅ Te contactamos en menos de 24 horas"
        ],
        agradecimiento: [
            "🙏 *¡Gracias por elegirnos!*\n\nEn {nombre} creemos en tu potencial.\n\n📚 Tu éxito es nuestro compromiso\n💪 ¡Sigue adelante!\n\n¿Tienes alguna duda sobre tus clases?"
        ],
        ausente: [
            "😴 *Mensaje automático*\n\nGracias por contactar a {nombre}.\n\n⏰ Horario de atención: {horario}\n\n📝 Responderemos tu mensaje lo antes posible.\n\n📧 También puedes escribirnos por email."
        ],
        promocion: [
            "🎉 *¡INSCRIPCIONES ABIERTAS!*\n\n🎓 En {nombre}:\n\n✅ 20% descuento en inscripción\n✅ Material incluido\n✅ Certificado oficial\n\n📅 Cupo limitado\n\n¡Invierte en tu futuro! 📚"
        ]
    },
    
    inmobiliaria: {
        saludo: [
            "¡Hola! 👋 Bienvenido a {nombre}.\n\n🏠 Tu hogar ideal te espera.\n\n¿Qué estás buscando?\n• Comprar propiedad\n• Rentar\n• Vender mi propiedad\n• Asesoría inmobiliaria",
            "¡Hola! 🌟 Gracias por contactar a {nombre}.\n\n🏡 Hacemos realidad tu sueño inmobiliario.\n\n💬 ¿En qué podemos ayudarte?"
        ],
        precios: [
            "💰 *Nuestras Propiedades*\n\n🏠 Tenemos opciones para ti:\n\n• Departamentos: desde $X\n• Casas: desde $X\n• Terrenos: desde $X\n• Locales comerciales: consultar\n\n📋 ¿Qué tipo de propiedad buscas?\n📍 ¿En qué zona te interesa?"
        ],
        horarios: [
            "🕐 *Horarios de atención*\n\n{horario}\n\n📱 WhatsApp: Siempre disponible\n🏠 Visitas a propiedades: Con cita\n\n📞 {telefono}\n\n¿Agendamos una visita?"
        ],
        ubicacion: [
            "📍 *Nuestra oficina*\n\n{ubicacion}\n\n🏠 Propiedades en toda la zona\n🚗 Visitas a domicilio disponibles\n\n¿En qué zona te interesa buscar?"
        ],
        pedido: [
            "📋 *¡Encontremos tu propiedad ideal!*\n\nCuéntanos:\n\n1️⃣ ¿Compra o renta?\n2️⃣ Tipo de propiedad\n3️⃣ Zona de preferencia\n4️⃣ Presupuesto aproximado\n5️⃣ Características deseadas\n\n🏠 Te enviamos opciones personalizadas"
        ],
        agradecimiento: [
            "🙏 *¡Gracias por confiar en nosotros!*\n\nEn {nombre} te acompañamos en cada paso.\n\n🏠 Tu satisfacción es nuestra prioridad\n📱 Estamos para cualquier duda\n\n¡Bienvenido a tu nuevo hogar! 🏡"
        ],
        ausente: [
            "😴 *Fuera de horario*\n\nGracias por contactar a {nombre}.\n\n⏰ Horario: {horario}\n\n📝 Déjanos tu consulta y te respondemos mañana.\n\n🏠 Visita nuestro sitio web para ver propiedades disponibles."
        ],
        promocion: [
            "🎉 *¡OPORTUNIDAD ÚNICA!*\n\n🏠 En {nombre}:\n\n✅ Propiedades con descuento\n✅ Asesoría GRATIS\n✅ Financiamiento disponible\n✅ Sin comisión para compradores\n\n📅 Agenda tu visita\n\n¡Tu hogar te espera! 🏡"
        ]
    }
};

// Variables globales
let currentResponse = '';
let selectedType = '';
let history = [];

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    initEventListeners();
    loadHistory();
});

function initEventListeners() {
    // Botones de tipo de respuesta
    document.querySelectorAll('.type-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.type-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            selectedType = e.target.dataset.type;
            generateResponse();
        });
    });
    
    // Botón copiar
    document.getElementById('copyBtn').addEventListener('click', copyResponse);
    
    // Botón regenerar
    document.getElementById('regenerateBtn').addEventListener('click', generateResponse);
    
    // Botón exportar
    document.getElementById('exportBtn').addEventListener('click', exportHistory);
    
    // Detectar cambios en inputs para regenerar
    ['businessType', 'businessName', 'businessHours', 'businessPhone', 'businessLocation'].forEach(id => {
        document.getElementById(id).addEventListener('change', () => {
            if (selectedType) generateResponse();
        });
    });
}

function generateResponse() {
    const businessType = document.getElementById('businessType').value;
    const businessName = document.getElementById('businessName').value || 'Mi Negocio';
    const businessHours = document.getElementById('businessHours').value || 'Lun-Vie 9am-6pm';
    const businessPhone = document.getElementById('businessPhone').value || '(000) 000-0000';
    const businessLocation = document.getElementById('businessLocation').value || 'Tu Ciudad';
    
    if (!businessType || !selectedType) {
        document.getElementById('responseOutput').innerHTML = 
            '<p class="placeholder">Selecciona tipo de negocio y tipo de respuesta</p>';
        return;
    }
    
    const typeTemplates = templates[businessType][selectedType];
    if (!typeTemplates) {
        document.getElementById('responseOutput').innerHTML = 
            '<p class="placeholder">Plantilla no disponible</p>';
        return;
    }
    
    // Seleccionar plantilla aleatoria
    const template = typeTemplates[Math.floor(Math.random() * typeTemplates.length)];
    
    // Reemplazar variables
    currentResponse = template
        .replace(/{nombre}/g, businessName)
        .replace(/{horario}/g, businessHours)
        .replace(/{telefono}/g, businessPhone)
        .replace(/{ubicacion}/g, businessLocation);
    
    // Mostrar respuesta
    document.getElementById('responseOutput').textContent = currentResponse;
    
    // Habilitar botones
    document.getElementById('copyBtn').disabled = false;
    document.getElementById('regenerateBtn').disabled = false;
    
    // Agregar al historial
    addToHistory(selectedType, currentResponse);
}

function copyResponse() {
    navigator.clipboard.writeText(currentResponse).then(() => {
        showToast('✅ ¡Copiado al portapapeles!');
    });
}

function showToast(message) {
    let toast = document.querySelector('.toast');
    if (!toast) {
        toast = document.createElement('div');
        toast.className = 'toast';
        document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2000);
}

function addToHistory(type, response) {
    const item = {
        type: type,
        response: response,
        timestamp: new Date().toLocaleString()
    };
    
    history.unshift(item);
    if (history.length > 20) history.pop();
    
    saveHistory();
    renderHistory();
}

function renderHistory() {
    const container = document.getElementById('history');
    
    if (history.length === 0) {
        container.innerHTML = '<p class="placeholder">Las respuestas generadas aparecerán aquí...</p>';
        return;
    }
    
    container.innerHTML = history.map(item => `
        <div class="history-item" onclick="copyFromHistory('${escapeHtml(item.response)}')">
            <small>📝 ${item.type.toUpperCase()} - ${item.timestamp}</small>
            <p>${item.response.substring(0, 100)}...</p>
        </div>
    `).join('');
}

function copyFromHistory(text) {
    navigator.clipboard.writeText(text).then(() => {
        showToast('✅ ¡Copiado!');
    });
}

function saveHistory() {
    localStorage.setItem('promptbot_history', JSON.stringify(history));
}

function loadHistory() {
    const saved = localStorage.getItem('promptbot_history');
    if (saved) {
        history = JSON.parse(saved);
        renderHistory();
    }
}

function exportHistory() {
    if (history.length === 0) {
        showToast('⚠️ No hay respuestas para exportar');
        return;
    }
    
    let content = '# MIS RESPUESTAS DE WHATSAPP\n';
    content += '# Generado con PromptBot\n\n';
    content += '================================\n\n';
    
    history.forEach((item, index) => {
        content += `[${index + 1}] ${item.type.toUpperCase()}\n`;
        content += `Fecha: ${item.timestamp}\n\n`;
        content += item.response;
        content += '\n\n--------------------------------\n\n';
    });
    
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'respuestas-whatsapp.txt';
    a.click();
    
    showToast('📥 ¡Archivo descargado!');
}

function escapeHtml(text) {
    return text.replace(/'/g, "\\'").replace(/"/g, '\\"');
}
