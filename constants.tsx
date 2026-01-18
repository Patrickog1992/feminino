import { Step } from './types';

export const STEPS: Step[] = [
  {
    id: 'intro',
    type: 'interstitial',
    title: 'A maioria das mulheres não sabem disso e isso está sabotando sua performance na cama',
    image: 'https://i.imgur.com/BMQxGMY.jpeg',
    subtitle: 'Descubra como aumentar o prazer, a confiança e melhorar sua vida sexual como um todo',
    buttonText: 'Continuar'
  },
  {
    id: 'age',
    type: 'single',
    title: 'Qual é a sua idade?',
    subtitle: 'A idade influencia a saúde do assoalho pélvico e o bem-estar sexual. Isso nos ajuda a personalizar suas orientações.',
    options: [
      { label: '18–25', value: '18-25' },
      { label: '26–35', value: '26-35' },
      { label: '36–45', value: '36-45' },
      { label: '45+', value: '45+' }
    ]
  },
  {
    id: 'goals',
    type: 'multi',
    title: 'O que você quer melhorar?',
    subtitle: 'Selecione todas as opções que se aplicam',
    options: [
      { label: 'Ter orgasmos mais intensos', value: 'orgasmos_intensos' },
      { label: 'Melhorar a sensibilidade sexual', value: 'sensibilidade' },
      { label: 'Tonificar os músculos vaginais', value: 'tonificar' },
      { label: 'Ter orgasmos com mais facilidade', value: 'orgasmos_facilidade' },
      { label: 'Tornar o sexo mais prazeroso', value: 'mais_prazer' },
      { label: 'Aumentar o desejo sexual de forma natural', value: 'desejo' },
      { label: 'Melhorar a intimidade com o(a) parceiro(a)', value: 'intimidade' },
      { label: 'Melhorar a comunicação sexual', value: 'comunicacao' },
      { label: 'Lidar com o sexo conforme você envelhece', value: 'envelhecimento' },
      { label: 'Nenhuma das opções acima', value: 'nenhuma' }
    ],
    buttonText: 'Continuar'
  },
  {
    id: 'minute_promo',
    type: 'interstitial',
    title: 'Torne o sexo mais prazeroso com apenas alguns minutos por dia',
    subtitle: 'Pequenas mudanças na sua rotina podem desbloquear níveis de prazer que você nunca imaginou.',
    buttonText: 'Continuar'
  },
  {
    id: 'confidence',
    type: 'single',
    title: 'Você tem se sentido fisicamente confiante e satisfeita ultimamente?',
    options: [
      { label: 'Sim, totalmente', value: 'sim' },
      { label: 'As coisas poderiam estar melhores', value: 'poderiam_melhorar' },
      { label: 'Estou me sentindo péssima', value: 'pessima' }
    ]
  },
  {
    id: 'orgasm_ability',
    type: 'single',
    title: 'Como você avaliaria sua capacidade de ter orgasmo durante o sexo?',
    options: [
      { label: 'Excelente, nunca tenho problemas', value: 'excelente' },
      { label: 'É boa, mas às vezes tenho dificuldades', value: 'boa_mas_dificil' },
      { label: 'Costumo ter dificuldade para chegar ao orgasmo', value: 'dificil' },
      { label: 'Prefiro não responder', value: 'nao_responder' }
    ]
  },
  {
    id: 'kegel_history',
    type: 'single',
    title: 'Você já tentou fazer exercícios de Kegel para trabalhar os músculos do Assoalho Pélvico (AP)?',
    options: [
      { label: 'Sim, com certeza!', value: 'sim' },
      { label: 'Não, mas sei o que são', value: 'nao_sei_o_que_sao' },
      { label: 'Não, nunca', value: 'nunca' },
      { label: 'Assoalho pélvico? O que é isso?', value: 'o_que_e_isso' }
    ]
  },
  {
    id: 'kegel_info_1',
    type: 'interstitial',
    title: 'Fortalecer os músculos do Assoalho Pélvico (AP) pode aumentar o prazer durante o sexo e ajudar você a atingir orgasmos com mais regularidade',
    image: 'https://i.imgur.com/UiGq1ND.jpeg',
    buttonText: 'Continuar'
  },
  {
    id: 'kegel_info_2',
    type: 'interstitial',
    title: 'Exercícios de Kegel de 5 minutos e técnicas de respiração são fáceis de aprender e podem ser feitos em qualquer lugar',
    image: 'https://i.imgur.com/EyCOGHA.jpeg',
    buttonText: 'Continuar'
  },
  {
    id: 'sex_happiness',
    type: 'single',
    title: 'Quão feliz você está com sua vida sexual?',
    options: [
      { label: 'Feliz e satisfeita', value: 'feliz' },
      { label: 'Feliz, mas gostaria de explorar mais', value: 'explorar' },
      { label: 'Há espaço para melhorar', value: 'melhorar' }
    ]
  },
  {
    id: 'sex_experience',
    type: 'single',
    title: 'Como você avaliaria sua experiência sexual ultimamente?',
    options: [
      { label: 'Totalmente satisfeita', value: 'totalmente_satisfeita' },
      { label: 'Satisfeita', value: 'satisfeita' },
      { label: 'Ok', value: 'ok' },
      { label: 'Não está boa', value: 'nao_boa' },
      { label: 'Nada satisfeita', value: 'nada_satisfeita' }
    ]
  },
  {
    id: 'postpartum',
    type: 'single',
    title: 'Você deu à luz nos últimos dois anos?',
    options: [
      { label: 'Sim', value: 'sim' },
      { label: 'Não', value: 'nao' }
    ]
  },
  {
    id: 'senses_info_1',
    type: 'interstitial',
    title: 'Uma vida sexual feliz e satisfatória exige prática. Os sentidos vão guiar você e seu(sua) parceiro(a) a explorar e aproveitar.',
    image: 'https://i.imgur.com/O0jApzS.jpeg',
    buttonText: 'Continuar'
  },
  {
    id: 'recent_feeling',
    type: 'single',
    title: 'Como você tem se sentido neste último mês?',
    options: [
      { label: 'Esgotada, cansada, sem energia', value: 'esgotada' },
      { label: 'Estou bem, mas às vezes fico um pouco para baixo', value: 'bem_baixo' },
      { label: 'Estou ok, mas gostaria de ter mais energia', value: 'ok_energia' },
      { label: 'Estou em uma boa fase', value: 'boa_fase' },
      { label: 'Amando a vida e cheia de energia!', value: 'amando_vida' }
    ]
  },
  {
    id: 'senses_info_2',
    type: 'interstitial',
    title: 'O Senses oferece práticas físicas e ferramentas emocionais para trazer mais prazer, desejo, satisfação e intimidade para sua vida',
    image: 'https://i.imgur.com/eXZ2Dk6.jpeg',
    buttonText: 'Continuar'
  },
  {
    id: 'partner',
    type: 'single',
    title: 'Você tem um parceiro(a) sexual?',
    options: [
      { label: 'Sim, tenho um parceiro(a) fixo(a)', value: 'fixo' },
      { label: 'Tenho um parceiro(a), mas não é fixo(a)', value: 'nao_fixo' },
      { label: 'Não, não tenho', value: 'nao' },
      { label: 'Prefiro não responder', value: 'nao_responder' }
    ]
  },
  {
    id: 'testimonial_1',
    type: 'interstitial',
    title: 'Encontrei o Senses no momento perfeito! Eu estava começando a me sentir culpada por não conseguir aproveitar o sexo, mas graças a este protocolo comecei a conhecer meu verdadeiro eu!',
    subtitle: '– Michelle, 28 anos',
    image: 'https://i.imgur.com/sqYjS4V.png',
    buttonText: 'Continuar'
  },
  {
    id: 'frequency',
    type: 'single',
    title: 'Com que frequência você faz sexo?',
    options: [
      { label: 'Diariamente', value: 'diariamente' },
      { label: 'Algumas vezes por semana', value: 'algumas_vezes' },
      { label: 'Semanalmente', value: 'semanalmente' },
      { label: 'Mensalmente', value: 'mensalmente' },
      { label: 'Prefiro não responder', value: 'nao_responder' }
    ]
  },
  {
    id: 'libido_loss',
    type: 'single',
    title: 'Seu desejo sexual diminuiu no último ano?',
    options: [
      { label: 'Sim, diminuiu bastante', value: 'sim' },
      { label: 'Talvez, não tenho certeza', value: 'talvez' },
      { label: 'Não, mas gostaria que aumentasse', value: 'nao_mas_quero_aumentar' },
      { label: 'Não, parece normal', value: 'nao_normal' },
      { label: 'Prefiro não responder', value: 'nao_responder' }
    ]
  },
  {
    id: 'medication',
    type: 'single',
    title: 'Você usa algum medicamento ou suplemento para melhorar o desempenho sexual?',
    options: [
      { label: 'Sim, com frequência', value: 'sim_frequencia' },
      { label: 'Sim, mas apenas ocasionalmente', value: 'sim_ocasional' },
      { label: 'Não', value: 'nao' },
      { label: 'Prefiro não responder', value: 'nao_responder' }
    ]
  },
  {
    id: 'kegel_fact',
    type: 'interstitial',
    title: 'Você sabia?',
    subtitle: 'Os exercícios de Kegel superam medicamentos e outras remédios que te fazem mal',
    image: 'https://i.imgur.com/vWt8x0x.jpeg',
    buttonText: 'Continuar'
  },
  {
    id: 'diet',
    type: 'scale',
    title: 'Como você descreveria seus hábitos alimentares diários?',
    subtitle: 'Ruim — Super saudável',
    options: [
      { label: '1', value: 1 },
      { label: '2', value: 2 },
      { label: '3', value: 3 },
      { label: '4', value: 4 },
      { label: '5', value: 5 }
    ]
  },
  {
    id: 'alcohol',
    type: 'single',
    title: 'Com que frequência você consome álcool?',
    options: [
      { label: 'Diariamente', value: 'diariamente' },
      { label: 'Algumas vezes por semana', value: 'algumas_vezes' },
      { label: 'Semanalmente', value: 'semanalmente' },
      { label: 'Mensalmente', value: 'mensalmente' },
      { label: 'Nunca bebo', value: 'nunca' }
    ]
  },
  {
    id: 'smoking',
    type: 'single',
    title: 'Você fuma?',
    options: [
      { label: 'Sim', value: 'sim' },
      { label: 'Não', value: 'nao' },
      { label: 'Às vezes', value: 'as_vezes' }
    ]
  },
  {
    id: 'exercise',
    type: 'single',
    title: 'Descreva sua atividade física semanal',
    options: [
      { label: 'Quase nenhuma', value: 'nenhuma' },
      { label: 'Apenas caminhadas', value: 'caminhadas' },
      { label: 'Exercício 1–2 vezes por semana', value: '1_2' },
      { label: 'Exercício 3–5 vezes por semana', value: '3_5' },
      { label: 'Exercício 5–7 vezes por semana', value: '5_7' }
    ]
  },
  {
    id: 'almost_ready',
    type: 'interstitial',
    title: 'Estamos quase prontos para tornar suas experiências sexuais mais prazerosas e liberar sua deusa interior! 👑',
    image: 'https://i.imgur.com/7UhvDwt.jpeg',
    buttonText: 'Continuar'
  },
  {
    id: 'stress',
    type: 'scale',
    title: 'Como você avaliaria seu nível de estresse ultimamente?',
    subtitle: 'Não me estresso — Extremamente estressada',
    options: [
      { label: '1', value: 1 },
      { label: '2', value: 2 },
      { label: '3', value: 3 },
      { label: '4', value: 4 },
      { label: '5', value: 5 }
    ]
  },
  {
    id: 'chart_result',
    type: 'chart',
    title: 'O último plano que você precisará para melhorar sua vida sexual',
    buttonText: 'Continuar'
  },
  {
    id: 'loading_plan',
    type: 'loading',
    title: 'Seu guia sexual personalizado do Senses está pronto! 🔥💦'
  },
  {
    id: 'sales_page',
    type: 'sales',
    title: 'Sales Page'
  }
];

export const MOCKUP_IMAGES = [
  { src: 'https://i.imgur.com/5vta2FI.jpeg', alt: 'Exercício Kegel' },
  { src: 'https://i.imgur.com/UxMmNWG.jpeg', alt: 'Respiração Tântrica' },
  { src: 'https://i.imgur.com/VC7oQBd.jpeg', alt: 'Meditação Íntima' }
];

export const TESTIMONIALS = [
  {
    name: "Ana Clara, 32",
    img: "https://i.imgur.com/Sza1ZfT.png",
    text: "Meninas, sério... eu achava que era impossível mudar depois dos 30. O Senses mudou minha vida! 👍",
    rating: 5
  },
  {
    name: "Beatriz, 29",
    img: "https://i.imgur.com/GJZpDHa.png",
    text: "Meu marido perguntou o que eu fiz kkkk! A confiança que eu ganhei não tem preço. Amei demais! ❤️",
    rating: 5
  },
  {
    name: "Carla, 41",
    img: "https://i.imgur.com/UA8o4Kz.png",
    text: "Nunca imaginei que 5 minutos por dia fariam tanta diferença. Recomendo pra todas as minhas amigas.",
    rating: 5
  },
  {
    name: "Juliana, 25",
    img: "https://i.imgur.com/oOLHMGS.jpg",
    text: "O guia é super fácil de seguir. Já na primeira semana senti diferença na sensibilidade. Incrível! 👏",
    rating: 5
  }
];

export const FAQS = [
  {
    question: "Como vou receber o acesso?",
    answer: "O acesso é imediato! Assim que o pagamento for confirmado, você receberá um e-mail com seu login e senha para acessar a plataforma exclusiva do Senses."
  },
  {
    question: "Preciso de algum equipamento?",
    answer: "Não! O Protocolo Prazer Feminino foi desenhado para ser feito usando apenas o seu corpo, no conforto da sua casa."
  },
  {
    question: "E se eu não gostar?",
    answer: "Você tem nossa Garantia Total de 30 dias. Se não sentir os resultados, devolvemos 100% do seu dinheiro sem burocracia."
  },
  {
    question: "O pagamento é seguro?",
    answer: "Sim, utilizamos uma plataforma de pagamento criptografada e 100% segura. Seus dados estão protegidos."
  }
];
