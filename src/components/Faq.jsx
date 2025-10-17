import '../styles/faq.css';
import { useState } from 'react';

const preguntas = [
  { id: 1, name: 'Necesito experiencia previa?', description: 'No, los entrenamientos están diseñados para adaptarse todos los niveles. Se incluyen alternativas con equipamiento y con implementos básicos.'},
  { id: 2, name: 'Cómo es el seguimiento on line?', description: 'El seguimiento incluye una entrevista sincrónica por zoom, previa al envío del plan -que se módica cada 4 semanas, seguimientos y corrección mediante videos. Acompañamiento a distancia.' },
  { id: 3, name: 'Cómo realizó el pago?', description: 'Abona de manera segura, a través de plataformas digitales: mercado pago, paypal y transferencias bancaria. Una vez realizado el pago recibís tu plan de entrenamiento o curso 💫' },
  { id: 4, name: 'Qué beneficios obtengo a través de mi compra?', description: 'A través de mis conocimientos vas a lograr libertad de movimiento, y transformar tu sistema de creencias que te impide La Constancia y el disfrute: seguimiento personalizado , soporte directo ya que te contactas conmigo.' },
  { id: 5, name: 'Qué más puedo encontrar además de los entrenamientos?', description: 'Además de los entrenamientos, vas a encontrar talleres y programas vinculados a profundidar la idea central de amapola, permanecer en un cuerpo en movimiento respetando su diseño natural. El cuerpo se nutre y repara a través del movimiento.' },
];

const Faq = () => {

    const [visibleQ, setVisibleQ] = useState(null);

    const toggleDescription = (id) => {
        setVisibleQ(visibleQ === id ? null : id);
    };

  return (
    <div className='preguntas'>
      <div className='main-container'>
        <div className='content'>
            <h5 data-aos="fade-up">Preguntas</h5>
            <h2 data-aos="fade-up">Tenes alguna duda?</h2>
            <h4 data-aos="fade-up">Encontra las respuesta a las preguntas mas comunes sobre clases, inscripciones y cursos.</h4>
        </div>
        <div className='respuestas' data-aos="fade-up">
                  {preguntas.map((pregunta) => (
                <div className="item" key={pregunta.id}>
                  <div className="pregunta-name">
                    <h3>{pregunta.name}</h3>
                    <div className="wrapper">
                    <input type="checkbox" checked={visibleQ === pregunta.id} onChange={() => toggleDescription(pregunta.id)} />
                      <div className="btn"></div>
                    </div>
                  </div>
                  {visibleQ === pregunta.id && <p>{pregunta.description}</p>}
                </div>
              ))}
          </div>
      </div>
    </div>
  )
}

export default Faq