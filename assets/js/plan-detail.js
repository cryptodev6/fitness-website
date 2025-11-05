document.addEventListener("DOMContentLoaded", function () {
  const params = new URLSearchParams(window.location.search);
  const planKey = params.get("plan");

  const plans = {
    basico: {
      title: "Plan Básico",
      image: "https://yoga.websitelayout.net/img/service/services-01.jpg",
      description: `
        <p><strong><span class="highlight">Ideal para principiantes</span></strong> que quieren <span class="keyword">empezar con energía</span> y <span class="keyword">ver resultados reales</span> sin complicaciones.</p>
        <p>Incluye un <span class="highlight">plan nutricional balanceado</span> y una <span class="highlight">rutina funcional</span> que te ayuda a formar el hábito y sentirte mejor desde la primera semana.</p>
        <ul>
          <li><span class="label">Duración:</span> 4 semanas</li>
          <li><span class="label">Entrenamientos:</span> en casa o gym (30 min diarios)</li>
          <li><span class="label">Guía nutricional:</span> por porciones simples</li>
          <li><span class="label">Soporte básico:</span> email con feedback semanal</li>
        </ul>`
    },

    intermedio: {
      title: "Plan Intermedio",
      image: "https://yoga.websitelayout.net/img/service/services-02.jpg",
      description: `
        <p><strong><span class="highlight">Ideal si ya entrenas</span></strong> o has seguido planes antes. Combinamos <span class="keyword">entrenamiento estructurado</span> y <span class="keyword">alimentación estratégica</span> para optimizar tu rendimiento.</p>
        <p>Perfecto para quienes buscan <span class="keyword">definir</span>, <span class="keyword">ganar masa</span> o <span class="keyword">mejorar energía</span> sin estancarse.</p>
        <ul>
          <li><span class="label">Duración:</span> 6 semanas</li>
          <li><span class="label">Rutinas progresivas:</span> según objetivo (masa, definición o salud)</li>
          <li><span class="label">Nutrición:</span> antiinflamatoria ajustada a tus requerimientos</li>
          <li><span class="label">Soporte:</span> revisión mensual de progreso y ajustes</li>
        </ul>`
    },

    premium: {
      title: "Plan Premium",
      image: "https://yoga.websitelayout.net/img/service/services-03.jpg",
      description: `
        <p><strong><span class="highlight">Atención 100% personalizada</span></strong> para quienes buscan <span class="keyword">resultados visibles y sostenibles</span>.</p>
        <p>Incluye <span class="keyword">coaching emocional</span>, <span class="keyword">nutrición avanzada</span> y <span class="keyword">entrenamiento con ajustes semanales</span> para maximizar tu potencial.</p>
        <ul>
          <li><span class="label">Duración:</span> 8–12 semanas</li>
          <li><span class="label">Seguimiento VIP:</span> semanal por WhatsApp</li>
          <li><span class="label">Métricas:</span> energía, rendimiento y estrés</li>
          <li><span class="label">Acceso:</span> comunidad Premium y soporte prioritario</li>
        </ul>`
    },

    reto: {
      title: "Reto 21 Días",
      image: "https://yoga.websitelayout.net/img/service/services-04.jpg",
      description: `
        <p><strong><span class="highlight">Activa tu cuerpo</span></strong> y limpia tus hábitos en <span class="keyword">21 días</span>.</p>
        <p>Desafío guiado con <span class="keyword">alimentación antiinflamatoria</span>, <span class="keyword">rutinas rápidas</span> y <span class="keyword">mindset diario</span>.</p>
        <ul>
          <li><span class="label">Duración:</span> 21 días</li>
          <li><span class="label">Alimentación:</span> deliciosa y sencilla</li>
          <li><span class="label">Entrenamientos:</span> efectivos (&lt; 40 min)</li>
          <li><span class="label">Comunidad:</span> soporte diario en grupo</li>
        </ul>`
    },

    nutricion: {
      title: "Asesoría Nutricional",
      image: "https://yoga.websitelayout.net/img/service/services-05.jpg",
      description: `
        <p><strong><span class="highlight">Consulta individual</span></strong> con especialista en nutrición funcional. Creamos un <span class="keyword">plan totalmente personalizado</span> a tu vida real.</p>
        <p>Estrategias claras para <span class="keyword">comer sin culpa</span> y mantener energía estable durante el día.</p>
        <ul>
          <li><span class="label">Duración:</span> sesión única o paquete mensual</li>
          <li><span class="label">Diagnóstico:</span> composición corporal y hábitos</li>
          <li><span class="label">Plan:</span> adaptado a horarios y preferencias</li>
        </ul>`
    },

    coaching: {
      title: "Coaching Emocional",
      image: "https://yoga.websitelayout.net/img/service/services-06.jpg",
      description: `
        <p><strong><span class="highlight">Transforma tu relación con la comida</span></strong> y el ejercicio. Aprende a <span class="keyword">gestionar la ansiedad</span> y superar bloqueos.</p>
        <p>Acompañamiento 1:1 con herramientas de <span class="keyword">autoconocimiento</span> y <span class="keyword">motivación real</span>.</p>
        <ul>
          <li><span class="label">Sesiones:</span> 1:1 con coach certificada</li>
          <li><span class="label">Herramientas:</span> emociones, hábitos y protocolos</li>
          <li><span class="label">Guías:</span> journaling y mindset positivo</li>
        </ul>`
    }
  };


  const plan = plans[planKey] || plans.basico;

  document.getElementById("plan-title").textContent = plan.title;
  document.getElementById("plan-description").innerHTML = plan.description;
  document.getElementById("plan-image").setAttribute("data-background", plan.image);
  document.getElementById("plan-image").style.backgroundImage = `url(${plan.image})`;
});
