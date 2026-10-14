export interface ServiceItem {
  id: string;
  name: string;
  description: string;
  duration: string;
  price: string;
}

export interface GalleryItem {
  id: number;
  url: string;
  title: string;
  category: string;
}

export interface TestimonialItem {
  id: number;
  name: string;
  service: string;
  quote: string;
  rating: number;
}

export interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

export const siteData = {
  brand: {
    name: "Tatiane Santos",
    tagline: "Russian Manicure • Formadora",
    instagramHandle: "@tatianesantosbeauty.pt",
    domain: "tatianesantosbeauty.pt",
  },

  links: {
    instagram: "https://www.instagram.com/tatianesantosbeauty.pt/",
    booking:
      "https://tatianesantosnails.tuaagenda.app/?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAcGRvZgJzcnRjBmFwcF9pZA85MzY2MTk3NDMzOTI0NTkAAafX08EoyaFdKnYyDD7ROpvDRh_fenhyEkKLjyo7YRY8b2Y_izhB8-VWlxvxIw_aem_tOjRIXL8Hw4j8GxwzJKMfw",
    googleMapsDirections:
      "https://www.google.com/maps/search/?api=1&query=Rua+Foros+de+Amora+1+Seixal+Portugal",
    googleMapsEmbed:
      "https://www.google.com/maps?q=Rua+Foros+de+Amora+1,+Seixal,+Portugal&output=embed",
    instagramReelEmbed: "https://www.instagram.com/reel/DYAnhdmoLAK/embed",
    instagramPostStudioEmbed: "https://www.instagram.com/p/DddsRzMttPB/embed",
    livroReclamacoes: "https://www.livroreclamacoes.pt",
  },

  location: {
    short: "Amora • Cruz de Pau",
    address: "Rua Foros de Amora, 1, Seixal – 15",
    city: "Amora, Seixal",
    country: "Portugal",
  },

  legal: {
    companyName: "Tatiane Santos Beauty",
    fullAddress: "Rua Foros de Amora, 1, Seixal – 15, Portugal",
    ralText:
      "Em caso de litígio o consumidor pode recorrer à Entidade de Resolução Alternativa de Litígios de Consumo da sua região.",
  },

  hero: {
    image:
      "https://i.ibb.co/7dbFGW5f/Save-Clip-App-791388339-18618378067038999-4154212851022288844-n.webp",
    eyebrow: "RUSSIAN MANICURE • FORMADORA",
    title: "Unhas limpas, delicadas e feitas para durar",
    subtitle:
      "Estrutura impecável, acabamento fino e um momento só seu. Descubra a elegância da manicure russa com a Tatiane Santos.",
    badges: ["+2 anos de experiência", "Formação para manicures"],
  },

  services: {
    title: "Serviços feitos com cuidado em cada detalhe",
    subtitle:
      "Muitas opções para você escolher o que combina com a sua rotina e o seu estilo.",
    note: "*O preço pode variar conforme a data escolhida. Francesa e babyboomer têm acréscimo, conforme indicado em cada serviço.",
    unhas: [
      {
        id: "alongamento-l",
        name: "Alongamento tamanho L",
        description:
          "Entre o tamanho 4 e 6 do molde. Nail art simples incluída. Francesa ou babyboomer: +€5.",
        duration: "2h",
        price: "A partir de €40",
      },
      {
        id: "alongamento-sm",
        name: "Alongamento tamanho S/M",
        description:
          "Até ao tamanho 3 do molde. Nail art simples incluída. Francesa ou babyboomer: +€5.",
        duration: "2h",
        price: "A partir de €35",
      },
      {
        id: "banho-de-gel",
        name: "Banho de gel",
        description:
          "Reforço de gel na unha natural, sem alongamento. Francesa: +€5.",
        duration: "1h30",
        price: "A partir de €30",
      },
      {
        id: "gelinho-maos",
        name: "Gelinho mãos",
        description:
          "Inclui manicure russa e nivelamento de lâmina. Francesa: +€3.",
        duration: "1h30",
        price: "€20",
      },
      {
        id: "gelinho-pes",
        name: "Gelinho pés",
        description: "Apenas nas unhas dos pés, sem pedicure.",
        duration: "1h",
        price: "€20",
      },
      {
        id: "manutencao-l",
        name: "Manutenção tamanho L",
        description:
          "Mais de 3 unhas partidas tem preço de alongamento. Nail art simples incluída. Francesa ou babyboomer: +€5.",
        duration: "2h",
        price: "A partir de €35",
      },
      {
        id: "manutencao-sm",
        name: "Manutenção tamanho S/M",
        description:
          "Mais de 3 unhas partidas tem preço de alongamento. Francesa ou babyboomer: +€5.",
        duration: "1h30",
        price: "A partir de €30",
      },
      {
        id: "manutencao-outra",
        name: "Manutenção vinda de outra profissional",
        description:
          "Para trabalho feito por outra profissional; o valor depende do tamanho, de acordo com a tabela. Nail art simples incluída. Francesa ou babyboomer: +€5.",
        duration: "2h",
        price: "A partir de €35",
      },
      {
        id: "remocao",
        name: "Remoção",
        description:
          "Remoção cuidadosa do material, respeitando a sua unha natural.",
        duration: "30 min",
        price: "€10",
      },
      {
        id: "spa-pes-verniz-gel",
        name: "SPA dos pés + verniz de gel",
        description:
          "Cuidado relaxante para os pés, finalizado com verniz de gel.",
        duration: "1h30",
        price: "€30",
      },
    ] as ServiceItem[],

    sobrancelhas: [
      {
        id: "design-simples",
        name: "Design simples",
        description: "Design de sobrancelhas híbrido, linha + pinça.",
        duration: "45 min",
        price: "€10",
      },
      {
        id: "design-simples-buco",
        name: "Design simples + buço",
        description:
          "Design híbrido de sobrancelhas (linha + pinça) com remoção do buço.",
        duration: "45 min",
        price: "€15",
      },
    ] as ServiceItem[],
  },

  gallery: [
    {
      id: 1,
      url: "https://i.ibb.co/0pvgWnfS/Save-Clip-App-793141637-18619318072038999-6478746098535236083-n.webp",
      title: "Russian Manicure • Nude Acetinado",
      category: "Estrutura & Nivelamento",
    },
    {
      id: 2,
      url: "https://i.ibb.co/7tLg2VWB/Save-Clip-App-728234613-18596144128038999-7590647966337961491-n.webp",
      title: "Acabamento Fino • Cutícula Limpa",
      category: "Contorno Perfeito",
    },
    {
      id: 3,
      url: "https://i.ibb.co/5Xjm3p3Q/Save-Clip-App-568043991-18532054000038999-8477620212955015245-n.webp",
      title: "Esmaltação sob a Cutícula",
      category: "Precisão & Durabilidade",
    },
    {
      id: 4,
      url: "https://i.ibb.co/PKJMLsk/Save-Clip-App-709101458-18589174069038999-1169142713458054016-n.webp",
      title: "Banho de Gel • Reforço Natural",
      category: "Unhas Fortes",
    },
    {
      id: 5,
      url: "https://i.ibb.co/pvCjrp0w/Save-Clip-App-571922079-18534906868038999-1095883256330425456-n.webp",
      title: "Alongamento em Gel • Simetria",
      category: "Alongamento Estruturado",
    },
    {
      id: 6,
      url: "https://i.ibb.co/VYVX6tD9/Save-Clip-App-544092014-18523655071038999-6437059673492581925-n.webp",
      title: "Manicure Russa Clássica",
      category: "Elegância Minimalista",
    },
    {
      id: 7,
      url: "https://i.ibb.co/KzBzZ6q2/Save-Clip-App-504333981-18508638103038999-8193729275686418506-n.webp",
      title: "Geometria & Brilho Perfeito",
      category: "Ponto de Tensão",
    },
    {
      id: 8,
      url: "https://i.ibb.co/cKLYk5B0/Save-Clip-App-482072752-18487496365038999-7670705494359718126-n.webp",
      title: "Verniz Gel • Tons Delicados",
      category: "Cuidado Feminino",
    },
  ] as GalleryItem[],

  about: {
    image:
      "https://i.ibb.co/7dbFGW5f/Save-Clip-App-791388339-18618378067038999-4154212851022288844-n.webp",
    title: "Conheça a Tatiane",
    subtitle:
      "A mão delicada, o olhar técnico e o coração por trás de cada atendimento.",
    quote:
      "Cuidar das suas unhas é cuidar de quem você é. Quando se olha ao espelho e se sente bonita, tudo muda.",
    author: "Tatiane Santos",
    paragraph1:
      "Para a Tatiane, a manicure é muito mais do que estética: é uma pausa no meio da correria, um gesto de autocuidado e uma forma de elevar a autoestima. Cada cliente chega com a sua história, e o seu momento no studio é pensado para ser calmo, acolhedor e cheio de carinho, para que saia com as unhas bonitas e com a confiança renovada.",
    paragraph2:
      "Com mais de 2 anos de experiência, a Tatiane é especialista em Russian Manicure: técnica que valoriza a limpeza do contorno, a estrutura perfeita e a durabilidade. Além de profissional, é formadora e ensina outras manicures a dominar a técnica, com método, segurança e foco em resultados profissionais.",
  },

  formacao: {
    eyebrow: "FORMAÇÃO • CURSO VIP",
    title: "Aprenda a técnica. Transforme a sua carreira.",
    subtitle:
      "Formação exclusiva de Russian Manicure com a Tatiane Santos, para quem quer dominar a técnica e construir uma carreira com confiança e autoridade.",
    supportText:
      "As turmas são reduzidas, com acompanhamento próximo e foco na prática. As vagas são limitadas e a lista de interessadas vai-se preenchendo. Garanta já o seu lugar na fila para a próxima turma.",
    buttonText: "Quero fazer a próxima turma",
    buttonSubtext:
      "Vai ser redirecionada para o Instagram da Tatiane para entrar na fila de interessadas.",
    images: [
      {
        id: 1,
        url: "https://i.ibb.co/RkxNRnJ2/Save-Clip-App-722286342-18594032200038999-7733773856279546316-n.webp",
        title: "Prática Intensiva em Modelo Real",
      },
      {
        id: 2,
        url: "https://i.ibb.co/W4J76wPk/Save-Clip-App-724092490-18594032536038999-9150501202956018361-n.webp",
        title: "Técnica de Manicura com Brocas",
      },
      {
        id: 3,
        url: "https://i.ibb.co/6Rg3H4Bb/Save-Clip-App-724804900-18594032560038999-5067160679259087883-n.webp",
        title: "Nivelamento e Ponto de Tensão",
      },
      {
        id: 4,
        url: "https://i.ibb.co/Z6NpFMHP/Save-Clip-App-724624446-18594032620038999-7563526922439176404-n.webp",
        title: "Acompanhamento Individual VIP",
      },
      {
        id: 5,
        url: "https://i.ibb.co/SDZjH7GZ/Save-Clip-App-724230529-18594032680038999-4169761571528322063-n.webp",
        title: "Materiais & Biossegurança",
      },
      {
        id: 6,
        url: "https://i.ibb.co/N6ksF4gt/Save-Clip-App-723118624-18594032719038999-3493698455535101128-n.webp",
        title: "Certificado e Entrega Profissional",
      },
    ],
  },

  feedbacks: {
    title: "Quem vem, volta",
    subtitle: "Palavras de carinho de quem já viveu a experiência.",
    items: [
      {
        id: 1,
        name: "Mariana S.",
        service: "Alongamento tamanho L",
        quote:
          "As minhas unhas nunca ficaram tão limpas e delicadas. Passadas semanas continuam perfeitas!",
        rating: 5,
      },
      {
        id: 2,
        name: "Joana P.",
        service: "Manutenção S/M",
        quote:
          "Muito cuidado e atenção ao detalhe. Saí de lá a sentir-me renovada.",
        rating: 5,
      },
      {
        id: 3,
        name: "Beatriz L.",
        service: "Banho de gel",
        quote:
          "Resolveu o problema das minhas unhas fracas. Ficaram fortes e naturais.",
        rating: 5,
      },
      {
        id: 4,
        name: "Carolina M.",
        service: "Gelinho mãos",
        quote:
          "Atendimento carinhoso, ambiente calmo e um acabamento impecável. Recomendo!",
        rating: 5,
      },
      {
        id: 5,
        name: "Inês R.",
        service: "Manutenção vinda de outra profissional",
        quote:
          "Cheguei com as unhas desgastadas e saí com um trabalho de salto alto. Super profissional.",
        rating: 5,
      },
      {
        id: 6,
        name: "Rita A.",
        service: "Alongamento S/M",
        quote:
          "A Tatiane é uma artista. Pontual, simpática e o resultado dura muito tempo.",
        rating: 5,
      },
    ] as TestimonialItem[],
  },

  studio: {
    title: "Um espaço pensado para o seu bem-estar",
    subtitle:
      "Higiene rigorosa, conforto e privacidade para viver cada atendimento com tranquilidade.",
    image:
      "https://i.ibb.co/KzXx7Ky8/Center-logo-improve-photo-quality-2-K-20261014064249.webp",
    benefits: [
      {
        title: "Higiene",
        description:
          "Materiais esterilizados e descartáveis, tudo preparado para a sua segurança.",
      },
      {
        title: "Conforto",
        description:
          "Ambiente aconchegante, climatizado e pensado para relaxar.",
      },
      {
        title: "Privacidade",
        description: "Atendimento individual, só para si.",
      },
      {
        title: "Atenção exclusiva",
        description: "Cada detalhe cuidado com tempo e calma.",
      },
    ],
  },

  agendamento: {
    title: "O seu momento de autocuidado começa aqui",
    subtitle:
      "Escolha o dia e a hora que melhor se adaptam a si. Marcar é simples e rápido.",
    closing:
      "Agradecemos a sua compreensão. O sinal protege o tempo reservado para si e para as outras clientes.",
    rules: [
      {
        id: 1,
        title: "Confira o seu WhatsApp",
        subtitle: "⚠️ Notificação importante",
        text: "No momento do agendamento, confirme se o número de WhatsApp está correto. A confirmação da sua marcação é enviada por lá. Se o número estiver errado, não será possível entrar em contacto consigo.",
      },
      {
        id: 2,
        title: "Sinal obrigatório",
        subtitle: "Garantia de horário",
        text: "Para clientes novas, e para quem já desmarcou mais do que uma vez, é necessário o pagamento de um sinal para garantir o horário:\n• €10 para alongamento e manutenção\n• €6 para gelinho",
      },
      {
        id: 3,
        title: "Política do sinal",
        subtitle: "Condições de reserva",
        text: "O valor do sinal não é devolvido em caso de falta ou cancelamento.",
      },
    ],
  },

  faq: {
    title: "Perguntas frequentes",
    subtitle: "Tudo o que precisa de saber antes de marcar o seu horário.",
    items: [
      {
        id: 1,
        question: "Como faço para agendar?",
        answer:
          'Clique em "Agendar", escolha o serviço, o dia e a hora. A confirmação é enviada por WhatsApp.',
      },
      {
        id: 2,
        question: "O que é Russian Manicure?",
        answer:
          "É uma técnica de manicure de alta precisão que limpa cuidadosamente a cutícula e o contorno da unha, resultando em acabamento mais limpo, natural e duradouro.",
      },
      {
        id: 3,
        question: "Preciso de pagar sinal?",
        answer:
          "Sim, para clientes novas e para quem já desmarcou mais de uma vez: €10 para alongamento e manutenção, €6 para gelinho.",
      },
      {
        id: 4,
        question: "O sinal é devolvido se eu faltar ou cancelar?",
        answer:
          "Não. O valor do sinal não é devolvido em caso de falta ou cancelamento.",
      },
      {
        id: 5,
        question: "Porque é que o preço é \"a partir de\"?",
        answer:
          "O valor pode variar conforme o tamanho, o trabalho a realizar e a data escolhida. Francesa e babyboomer têm acréscimo.",
      },
      {
        id: 6,
        question: "Fazem manutenção de trabalhos de outra profissional?",
        answer:
          "Sim. O valor depende do tamanho, de acordo com a tabela de manutenção.",
      },
      {
        id: 7,
        question: "E se tiver mais de 3 unhas partidas na manutenção?",
        answer:
          "Nesse caso o valor passa a ser o do alongamento.",
      },
      {
        id: 8,
        question: "Onde fica o studio?",
        answer:
          "Rua Foros de Amora, 1, Seixal – 15, Amora • Cruz de Pau.",
      },
      {
        id: 9,
        question: "Posso fazer a formação com a Tatiane?",
        answer:
          'Sim! Clique em "Quero fazer a próxima turma" e entre na lista de interessadas pelo Instagram.',
      },
      {
        id: 10,
        question: "O número de WhatsApp errado pode ser um problema?",
        answer:
          "Sim. A confirmação é enviada por WhatsApp; se o número estiver errado não conseguimos contactar. Confira antes de finalizar.",
      },
    ] as FaqItem[],
  },
};
