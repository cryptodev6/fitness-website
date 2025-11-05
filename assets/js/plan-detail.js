document.addEventListener("DOMContentLoaded", function () {
  const params = new URLSearchParams(window.location.search);
  const planKey = params.get("plan");

  const plans = {
    basico: {
      title: "Plan Básico",
      image: "https://yoga.websitelayout.net/img/service/services-01.jpg",
      description: `
        <p><strong>Ideal para principiantes.</strong> Incluye un plan nutricional balanceado y una rutina funcional para ganar energía y formar el hábito.</p>
        <ul>
          <li>Duración: 4 semanas</li>
          <li>Entrenamientos en casa o gym (30 min)</li>
          <li>Guía nutricional simple por porciones</li>
          <li>Soporte básico vía email</li>
        </ul>`
    },
    intermedio: {
      title: "Plan Intermedio",
      image: "https://yoga.websitelayout.net/img/service/services-02.jpg",
      description: `
        <p><strong>Ideal si ya entrenas o has seguido planes antes.</strong> Combinamos entrenamiento estructurado y alimentación estratégica.</p>
        <ul>
          <li>Duración: 6 semanas</li>
          <li>Rutinas progresivas por objetivo (masa, definición o salud)</li>
          <li>Plan nutricional antiinflamatorio ajustado a tus requerimientos</li>
          <li>Soporte mensual + revisión de progreso</li>
        </ul>`
    },
    premium: {
      title: "Plan Premium",
      image: "https://yoga.websitelayout.net/img/service/services-03.jpg",
      description: `
        <p><strong>Atención 100% personalizada.</strong> Incluye coaching emocional, nutrición avanzada y entrenamiento con ajustes semanales.</p>
        <ul>
          <li>Duración: 8-12 semanas</li>
          <li>Seguimiento semanal por WhatsApp</li>
          <li>Revisión de métricas, energía y estrés</li>
          <li>Soporte prioritario + comunidad VIP</li>
        </ul>`
    },
    reto: {
      title: "Reto 21 Días",
      image: "https://yoga.websitelayout.net/img/service/services-04.jpg",
      description: `
        <p><strong>Activa tu cuerpo y limpia tus hábitos en solo 21 días.</strong> Reto guiado con alimentación, rutinas y mindset diario.</p>
        <ul>
          <li>Duración: 21 días</li>
          <li>Alimentación antiinflamatoria y deliciosa</li>
          <li>Entrenamientos rápidos y efectivos</li>
          <li>Comunidad y soporte grupal</li>
        </ul>`
    },
    nutricion: {
      title: "Asesoría Nutricional",
      image: "https://yoga.websitelayout.net/img/service/services-05.jpg",
      description: `
        <p><strong>Consulta individual</strong> con análisis de tus hábitos, objetivos y relación con la comida. Recibirás un plan nutricional a medida.</p>
        <ul>
          <li>Duración: sesión única o paquete mensual</li>
          <li>Diagnóstico de composición corporal</li>
          <li>Plan de alimentación ajustado a tus horarios y gustos</li>
        </ul>`
    },
    coaching: {
      title: "Coaching Emocional",
      image: "https://yoga.websitelayout.net/img/service/services-06.jpg",
      description: `
        <p><strong>Transforma tu relación con la comida y el ejercicio.</strong> Aprende a gestionar la ansiedad y los bloqueos que frenan tu progreso.</p>
        <ul>
          <li>Sesiones 1:1 con coach certificada</li>
          <li>Herramientas prácticas para emociones y hábitos</li>
          <li>Guías de journaling y autoconocimiento</li>
        </ul>`
    }
  };

  const plan = plans[planKey] || plans.basico;

  document.getElementById("plan-title").textContent = plan.title;
  document.getElementById("plan-description").innerHTML = plan.description;
  document.getElementById("plan-image").setAttribute("data-background", plan.image);
  document.getElementById("plan-image").style.backgroundImage = `url(${plan.image})`;
});
