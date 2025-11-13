document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const key = params.get("plan");

  const plans = {
    "peso-ideal": {
      title: "Plan Peso Ideal 360",
      image: "https://images.pexels.com/photos/1552249/pexels-photo-1552249.jpeg",
      cta: "#pago-peso-ideal",
      description: `
        <p><strong class="highlight">Objetivo:</strong> Recuperar tu peso saludable y sentirte liviana otra vez.</p>
        <p>Un plan completo para <span class="highlight">bajar grasa corporal</span> sin dietas extremas, sin efecto rebote
        y con acompañamiento cercano. Ideal si estás comenzando o quieres retomar tu proceso con estructura.</p>

        <p><strong class="label">Incluye:</strong></p>
        <ul>
          <li>Alimentación guiada según tus objetivos y contexto real.</li>
          <li>Entrenamientos quema grasa adaptados a tu nivel (casa o gym).</li>
          <li>Educación en hábitos para sostener resultados.</li>
          <li>Uso estratégico de suplemento recomendado.</li>
        </ul>
      <p><strong class="label">Modalidades:</strong></p>

                  <ul class="plan-list">
                    <li>
                      <strong>BASIC – 30 días (USD 199):</strong> Plan personalizado de alimentación y entrenamiento, acceso a comunidad y 1 suplemento. 
                      Ideal para iniciar con estructura clara.
                      <div class="payment-buttons">
                        <a href="https://checkout.bold.co/payment/LNK_7W29G58WBT" 
                          target="_blank" 
                          class="payment-btn basico">
                          Plan Básico
                        </a>
                      </div>
                    </li>

                    <li>
                      <strong>PLUS – 60 días (USD 299):</strong> Opción más elegida. Coaching semanal 1:1, recetarios fit, ajustes según progreso,
                      acompañamiento cercano y 2 suplementos para optimizar resultados.
                      <div class="payment-buttons">
                        <a href="https://checkout.bold.co/payment/LNK_L6HYYBUQLT" 
                          target="_blank" 
                          class="payment-btn plus">
                          Plan Plus
                        </a>
                      </div>
                    </li>

                    <li>
                      <strong>VIP – 90 días (USD 499):</strong> Transformación total. Seguimiento diario, asesoría emocional, respiración y visualización guiada,
                      revisión semanal, optimización de hábitos y 4 suplementos estratégicos.
                      <div class="payment-buttons">
                        <a href="https://checkout.bold.co/payment/LNK_7W29G58WBT" 
                          target="_blank" 
                          class="payment-btn vip">
                          Plan VIP
                        </a>
                      </div>
                    </li>
                  </ul>


        </ul>
      `
    },

    "definicion": {
      title: "Plan Definición Muscular",
      image: "https://images.pexels.com/photos/2261477/pexels-photo-2261477.jpeg",
      cta: "#pago-definicion",
      description: `
        <p><strong class="highlight">Objetivo:</strong> Marcar tus músculos, reducir tu % de grasa y verte más fit.</p>
        <p>Diseñado para quien quiere <span class="highlight">esculpir su cuerpo</span>, mejorar composición corporal
        y mantener energía alta sin perder músculo.</p>

        <p><strong class="label">Incluye:</strong></p>
        <ul>
          <li>Plan alto en proteínas adaptado a tus requerimientos.</li>
          <li>Entrenamientos estratégicos de fuerza y cardio inteligente.</li>
          <li>Guía de suplementación para definición y recuperación.</li>
        </ul>

        <p><strong class="label">Modalidades:</strong></p>
        <ul>
      

              <ul class="plan-list">
                <li>
                  <strong>BASIC – 30 días (USD 199):</strong>
                  Plan de alimentación para definición + rutina de entrenamiento detallada.
                  <div class="payment-buttons">
                    <a href="https://checkout.bold.co/payment/LNK_I3KJM8MPR3" 
                      target="_blank" 
                      class="payment-btn basico">
                      Plan Básico
                    </a>
                  </div>
                </li>

                <li>
                  <strong>PLUS – 60 días (USD 299):</strong>
                  Coaching 1:1 semanal, manejo de antojos, recetarios fit, ajustes continuos y 2 suplementos incluidos.
                  <div class="payment-buttons">
                    <a href="https://checkout.bold.co/payment/LNK_8X5CIG3VDL" 
                      target="_blank" 
                      class="payment-btn plus">
                      Plan Plus
                    </a>
                  </div>
                </li>

                <li>
                  <strong>VIP – 90 días (USD 499):</strong>
                  Seguimiento diario, trabajo de mindset, visualizaciones, ajustes semanales avanzados
                  y 4 suplementos para máxima definición y rendimiento.
                  <div class="payment-buttons">
                    <a href="https://checkout.bold.co/payment/LNK_L85TTWUV0Y" 
                      target="_blank" 
                      class="payment-btn vip">
                      Plan VIP
                    </a>
                  </div>
                </li>
              </ul>

      `
    },

    "strong": {
      title: "Plan Get Strong (Fuerza Total)",
      image: "https://images.pexels.com/photos/2294403/pexels-photo-2294403.jpeg",
      cta: "#pago-strong",
      description: `
        <p><strong class="highlight">Objetivo:</strong> Ganar masa muscular limpia, fuerza y un físico poderoso.</p>
        <p>Ideal para quien desea <span class="highlight">aumentar músculo sin acumular grasa</span>, mejorar rendimiento y verse atlético,
        con una estructura clara y acompañamiento profesional.</p>

        <p><strong class="label">Incluye:</strong></p>
        <ul>
          <li>Plan hipercalórico limpio, alineado a tus objetivos y metabolismo.</li>
          <li>Rutinas progresivas de fuerza y volumen (casa o gym).</li>
          <li>Guía avanzada de proteína, creatina y suplementación específica.</li>
        </ul>

       <p><strong class="label">Modalidades:</strong></p>

          <ul class="plan-list">
            <li>
              <strong>BASIC – 30 días (USD 199):</strong>
              Plan hipercalórico + rutina de fuerza + 1 suplemento recomendado.
              <div class="payment-buttons">
                <a href="https://checkout.bold.co/payment/LNK_FKTFT18227" 
                  target="_blank" 
                  class="payment-btn basico">
                  Plan Básico
                </a>
              </div>
            </li>

            <li>
              <strong>PLUS – 60 días (USD 299):</strong>
              Coaching 1:1, ajustes de cargas, recetarios, seguimiento de rendimiento
              y 2 suplementos incluidos.
              <div class="payment-buttons">
                <a href="https://checkout.bold.co/payment/LNK_N6HEGZON4W" 
                  target="_blank" 
                  class="payment-btn plus">
                  Plan Plus
                </a>
              </div>
            </li>

            <li>
              <strong>VIP – 90 días (USD 499):</strong>
              Seguimiento diario, estrategias mentales, visualizaciones, biohacks para recuperación,
              revisión de composición muscular y 4 suplementos clave.
              <div class="payment-buttons">
                <a href="https://checkout.bold.co/payment/LNK_249SYSCMMI" 
                  target="_blank" 
                  class="payment-btn vip">
                  Plan VIP
                </a>
              </div>
            </li>
          </ul>

      `
    },

    "detox": {
      title: "Plan Detox Reset",
      image: "https://images.unsplash.com/photo-1554284126-aa88f22d8b74?auto=format&fit=crop&w=800&q=80",
      cta: "#pago-detox",
      description: `
        <p><strong class="highlight">Objetivo:</strong> Eliminar toxinas, desinflamar y recuperar ligereza.</p>
        <p>Un reinicio físico y mental para quienes sienten <span class="highlight">hinchazón, pesadez o fatiga</span>.
        Trabaja sobre digestión, energía y claridad mental.</p>

        <p><strong class="label">Incluye:</strong></p>
        <ul>
          <li>Plan alimenticio depurativo y funcional.</li>
          <li>Licuados y preparaciones detox estratégicas.</li>
          <li>Guía antiinflamatoria y educación nutricional.</li>
          <li>Suplemento detox recomendado.</li>
        </ul>

       <p><strong class="label">Modalidades:</strong></p>

            <ul class="plan-list">
              <li>
                <strong>BASIC – 30 días (USD 199):</strong>
                Menú detox estructurado, licuados funcionales y 1 suplemento.
                <div class="payment-buttons">
                  <a href="https://checkout.bold.co/payment/LNK_1DNW24W7K3" 
                    target="_blank" 
                    class="payment-btn basico">
                    Plan Básico
                  </a>
                </div>
              </li>

              <li>
                <strong>PLUS – 60 días (USD 299):</strong>
                Coaching 1:1, guía linfática, recetarios, ajustes según respuesta del cuerpo
                y 2 suplementos.
                <div class="payment-buttons">
                  <a href="https://checkout.bold.co/payment/LNK_HV2SFF1Q0R" 
                    target="_blank" 
                    class="payment-btn plus">
                    Plan Plus
                  </a>
                </div>
              </li>

              <li>
                <strong>VIP – 90 días (USD 499):</strong>
                Seguimiento diario, apoyo emocional, visualizaciones detox, plan reset profundo
                y acompañamiento integral.
                <div class="payment-buttons">
                  <a href="https://checkout.bold.co/payment/LNK_N4SN2BK03E" 
                    target="_blank" 
                    class="payment-btn vip">
                    Plan VIP
                  </a>
                </div>
              </li>
            </ul>

      `
    },

    "antiinflamatorio": {
      title: "Plan Antiinflamatorio Vital",
      image: "https://images.unsplash.com/photo-1558611848-73f7eb4001a1?auto=format&fit=crop&w=800&q=80",
      cta: "#pago-antiinflamatorio",
      description: `
        <p><strong class="highlight">Objetivo:</strong> Reducir inflamación crónica y restaurar bienestar interno.</p>
        <p>Ideal para quienes sufren <span class="highlight">hinchazón, molestias digestivas, dolor articular o fatiga constante</span>.
        Enfoque funcional para sanar desde la raíz.</p>

        <p><strong class="label">Incluye:</strong></p>
        <ul>
          <li>Menú antiinflamatorio completo y flexible.</li>
          <li>Guía digestiva y de combinación de alimentos.</li>
          <li>Educación en hábitos antiinflamatorios (estrés, sueño, hidratación).</li>
          <li>Suplemento funcional recomendado.</li>
        </ul>
<p><strong class="label">Modalidades:</strong></p>

        <ul class="plan-list">
          <li>
            <strong>BASIC – 30 días (USD 199):</strong>
            Menú antiinflamatorio, guía de compras, plan digestivo y 1 suplemento.
            <div class="payment-buttons">
              <a href="https://checkout.bold.co/payment/LNK_FNAGWDD97G" 
                target="_blank" 
                class="payment-btn basico">
                Plan Básico
              </a>
            </div>
          </li>

          <li>
            <strong>PLUS – 60 días (USD 299):</strong>
            Coaching 1:1, enfoque en salud intestinal y articular, recetarios específicos
            y 2 suplementos.
            <div class="payment-buttons">
              <a href="https://checkout.bold.co/payment/LNK_845954WCDJ" 
                target="_blank" 
                class="payment-btn plus">
                Plan Plus
              </a>
            </div>
          </li>

          <li>
            <strong>VIP – 90 días (USD 499):</strong>
            Seguimiento diario, asesoría emocional/respiratoria, visualizaciones regenerativas,
            biohacks y ajustes personalizados continuos.
            <div class="payment-buttons">
              <a href="https://checkout.bold.co/payment/LNK_SD35DXN2T4" 
                target="_blank" 
                class="payment-btn vip">
                Plan VIP
              </a>
            </div>
          </li>
        </ul>

      `
    },

    "stressfree": {
      title: "Plan Stress Free (Equilibrio Total)",
      image: "https://images.unsplash.com/photo-1505678261036-a3fcc5e884ee?auto=format&fit=crop&w=800&q=80",
      cta: "#pago-stressfree",
      description: `
        <p><strong class="highlight">Objetivo:</strong> Reducir el estrés, mejorar el sueño y recuperar el balance.</p>
        <p>Perfecto para quienes viven con <span class="highlight">ansiedad, insomnio o agotamiento emocional</span>.
        Integra alimentación, hábitos y herramientas emocionales.</p>

        <p><strong class="label">Incluye:</strong></p>
        <ul>
          <li>Menú relajante y regulador.</li>
          <li>Guía mindfulness y respiración consciente.</li>
          <li>Estrategias para regular cortisol y sistema nervioso.</li>
          <li>Suplemento anti-estrés recomendado.</li>
        </ul>
<p><strong class="label">Modalidades:</strong></p>

          <ul class="plan-list">
            <li>
              <strong>BASIC – 30 días (USD 199):</strong>
              Plan calmante, ejercicios respiratorios, guía de sueño y 1 suplemento.
              <div class="payment-buttons">
                <a href="https://checkout.bold.co/payment/LNK_90XJE81AFS" 
                  target="_blank" 
                  class="payment-btn basico">
                  Plan Básico
                </a>
              </div>
            </li>

            <li>
              <strong>PLUS – 60 días (USD 299):</strong>
              Coaching emocional semanal, guía de cortisol, recetarios anti-estrés
              y 2 suplementos.
              <div class="payment-buttons">
                <a href="https://checkout.bold.co/payment/LNK_1DE7RCCMH1" 
                  target="_blank" 
                  class="payment-btn plus">
                  Plan Plus
                </a>
              </div>
            </li>

            <li>
              <strong>VIP – 90 días (USD 499):</strong>
              Seguimiento diario, técnicas de respiración y journaling, visualizaciones,
              revisión de hábitos y soporte integral.
              <div class="payment-buttons">
                <a href="https://checkout.bold.co/payment/LNK_UWLCZCH989" 
                  target="_blank" 
                  class="payment-btn vip">
                  Plan VIP
                </a>
              </div>
            </li>
          </ul>

      `
    }
  };


  const plan = plans[key] || plans["peso-ideal"];

  document.getElementById("plan-title").textContent = plan.title;
  document.getElementById("plan-description").innerHTML = plan.description;
  document.getElementById("plan-image").style.backgroundImage = `url(${plan.image})`;
  document.getElementById("plan-cta").setAttribute("href", plan.cta);
});
