export interface TranslationContent {
  nav: {
    services: string;
    gallery: string;
    about: string;
    training: string;
    instagram: string;
    reviews: string;
    studio: string;
    faq: string;
    book: string;
    bookAppointment: string;
    langButton: string;
  };
  hero: {
    eyebrow: string;
    titleStart: string;
    titleItalic: string;
    titleEnd: string;
    subtitle: string;
    bookCta: string;
    servicesCta: string;
    locationLabel: string;
    addressLabel: string;
    badgeExp: string;
    badgeTraining: string;
  };
  services: {
    eyebrow: string;
    titleStart: string;
    titleItalic: string;
    titleEnd: string;
    subtitle: string;
    tabNails: string;
    tabBrows: string;
    note: string;
    bookCard: string;
    sectionCta: string;
    unhas: Array<{
      id: string;
      name: string;
      description: string;
      duration: string;
      price: string;
    }>;
    sobrancelhas: Array<{
      id: string;
      name: string;
      description: string;
      duration: string;
      price: string;
    }>;
  };
  gallery: {
    eyebrow: string;
    titleStart: string;
    titleItalic: string;
    subtitle: string;
    cta: string;
  };
  about: {
    eyebrow: string;
    title: string;
    subtitle: string;
    quote: string;
    author: string;
    paragraph1: string;
    paragraph2: string;
    proofs: string[];
    cta: string;
  };
  formacao: {
    eyebrow: string;
    titleStart: string;
    titleItalic: string;
    titleEnd: string;
    subtitle: string;
    supportText: string;
    galleryLabel: string;
    benefits: Array<{ title: string; subtitle: string }>;
    cta: string;
    subtext: string;
  };
  instagram: {
    eyebrow: string;
    titleStart: string;
    titleItalic: string;
    subtitle: string;
    follow: string;
    followAccount: string;
    book: string;
  };
  feedbacks: {
    eyebrow: string;
    titleStart: string;
    titleItalic: string;
    subtitle: string;
    cta: string;
    items: Array<{
      id: number;
      name: string;
      service: string;
      quote: string;
      rating: number;
    }>;
  };
  studio: {
    eyebrow: string;
    titleStart: string;
    titleItalic: string;
    subtitle: string;
    exclusiveBadge: string;
    byAppointment: string;
    videoBadge: string;
    directionsButton: string;
    addressTip: string;
    cta: string;
    benefits: Array<{ title: string; description: string }>;
  };
  agendamento: {
    eyebrow: string;
    titleStart: string;
    titleItalic: string;
    subtitle: string;
    cta: string;
    closing: string;
    rules: Array<{
      id: number;
      title: string;
      subtitle: string;
      text: string;
      detail?: Array<{ label: string; price: string }>;
    }>;
  };
  faq: {
    eyebrow: string;
    titleStart: string;
    titleItalic: string;
    subtitle: string;
    cta: string;
    items: Array<{
      id: number;
      question: string;
      answer: string;
    }>;
  };
  footer: {
    ral: string;
    privacy: string;
    terms: string;
    backToTop: string;
    rights: string;
  };
  legalModal: {
    close: string;
    privacyTitle: string;
    termsTitle: string;
    privacyP1: string;
    privacyH1: string;
    privacyP2: string;
    privacyH2: string;
    privacyP3: string;
    privacyH3: string;
    privacyP4: string;
    termsP1: string;
    termsH1: string;
    termsP2: string;
    termsH2: string;
    termsP3: string;
    termsH3: string;
    termsP4: string;
  };
  floatingCta: {
    book: string;
  };
}

export const translations: Record<'pt' | 'en', TranslationContent> = {
  pt: {
    nav: {
      services: 'Serviços',
      gallery: 'Galeria',
      about: 'Sobre',
      training: 'Formação',
      instagram: 'Instagram',
      reviews: 'Avaliações',
      studio: 'Studio',
      faq: 'FAQ',
      book: 'Agendar',
      bookAppointment: 'Agendar Horário Online',
      langButton: 'EN',
    },
    hero: {
      eyebrow: 'RUSSIAN MANICURE • FORMADORA',
      titleStart: 'Unhas limpas, ',
      titleItalic: 'delicadas',
      titleEnd: ' e feitas para durar',
      subtitle:
        'Estrutura impecável, acabamento fino e um momento só seu. Descubra a elegância da manicure russa com a Tatiane Santos.',
      bookCta: 'Agendar o meu horário',
      servicesCta: 'Ver serviços',
      locationLabel: 'Localização',
      addressLabel: 'Morada (Ver no mapa)',
      badgeExp: '+2 anos de experiência',
      badgeTraining: 'Formação para manicures',
    },
    services: {
      eyebrow: 'Menu Exclusivo',
      titleStart: 'Serviços feitos com ',
      titleItalic: 'cuidado',
      titleEnd: ' em cada detalhe',
      subtitle:
        'Muitas opções para você escolher o que combina com a sua rotina e o seu estilo.',
      tabNails: 'Unhas',
      tabBrows: 'Sobrancelhas',
      note: '*O preço pode variar conforme a data escolhida. Francesa e babyboomer têm acréscimo, conforme indicado em cada serviço.',
      bookCard: 'Agendar',
      sectionCta: 'Agendar o meu serviço',
      unhas: [
        {
          id: 'alongamento-l',
          name: 'Alongamento tamanho L',
          description:
            'Entre o tamanho 4 e 6 do molde. Nail art simples incluída. Francesa ou babyboomer: +€5.',
          duration: '2h',
          price: 'A partir de €40',
        },
        {
          id: 'alongamento-sm',
          name: 'Alongamento tamanho S/M',
          description:
            'Até ao tamanho 3 do molde. Nail art simples incluída. Francesa ou babyboomer: +€5.',
          duration: '2h',
          price: 'A partir de €35',
        },
        {
          id: 'banho-de-gel',
          name: 'Banho de gel',
          description:
            'Reforço de gel na unha natural, sem alongamento. Francesa: +€5.',
          duration: '1h30',
          price: 'A partir de €30',
        },
        {
          id: 'gelinho-maos',
          name: 'Gelinho mãos',
          description:
            'Inclui manicure russa e nivelamento de lâmina. Francesa: +€3.',
          duration: '1h30',
          price: '€20',
        },
        {
          id: 'gelinho-pes',
          name: 'Gelinho pés',
          description: 'Apenas nas unhas dos pés, sem pedicure.',
          duration: '1h',
          price: '€20',
        },
        {
          id: 'manutencao-l',
          name: 'Manutenção tamanho L',
          description:
            'Mais de 3 unhas partidas tem preço de alongamento. Nail art simples incluída. Francesa ou babyboomer: +€5.',
          duration: '2h',
          price: 'A partir de €35',
        },
        {
          id: 'manutencao-sm',
          name: 'Manutenção tamanho S/M',
          description:
            'Mais de 3 unhas partidas tem preço de alongamento. Francesa ou babyboomer: +€5.',
          duration: '1h30',
          price: 'A partir de €30',
        },
        {
          id: 'manutencao-outra',
          name: 'Manutenção vinda de outra profissional',
          description:
            'Para trabalho feito por outra profissional; o valor depende do tamanho, de acordo com a tabela. Nail art simples incluída. Francesa ou babyboomer: +€5.',
          duration: '2h',
          price: 'A partir de €35',
        },
        {
          id: 'remocao',
          name: 'Remoção',
          description:
            'Remoção cuidadosa do material, respeitando a sua unha natural.',
          duration: '30 min',
          price: '€10',
        },
        {
          id: 'spa-pes-verniz-gel',
          name: 'SPA dos pés + verniz de gel',
          description:
            'Cuidado relaxante para os pés, finalizado com verniz de gel.',
          duration: '1h30',
          price: '€30',
        },
      ],
      sobrancelhas: [
        {
          id: 'design-simples',
          name: 'Design simples',
          description: 'Design de sobrancelhas híbrido, linha + pinça.',
          duration: '45 min',
          price: '€10',
        },
        {
          id: 'design-simples-buco',
          name: 'Design simples + buço',
          description:
            'Design híbrido de sobrancelhas (linha + pinça) com remoção do buço.',
          duration: '45 min',
          price: '€15',
        },
      ],
    },
    gallery: {
      eyebrow: 'Portfólio & Detalhe',
      titleStart: 'Cada unha, uma obra ',
      titleItalic: 'delicada',
      subtitle:
        'Inspire-se nos trabalhos feitos com carinho e encontre o acabamento que tem a sua cara.',
      cta: 'Quero unhas assim',
    },
    about: {
      eyebrow: 'Sobre a Profissional',
      title: 'Conheça a Tatiane',
      subtitle:
        'A mão delicada, o olhar técnico e o coração por trás de cada atendimento.',
      quote:
        'Cuidar das suas unhas é cuidar de quem você é. Quando se olha ao espelho e se sente bonita, tudo muda.',
      author: 'Tatiane Santos',
      paragraph1:
        'Para a Tatiane, a manicure é muito mais do que estética: é uma pausa no meio da correria, um gesto de autocuidado e uma forma de elevar a autoestima. Cada cliente chega com a sua história, e o seu momento no studio é pensado para ser calmo, acolhedor e cheio de carinho, para que saia com as unhas bonitas e com a confiança renovada.',
      paragraph2:
        'Com mais de 2 anos de experiência, a Tatiane é especialista em Russian Manicure: técnica que valoriza a limpeza do contorno, a estrutura perfeita e a durabilidade. Além de profissional, é formadora e ensina outras manicures a dominar a técnica, com método, segurança e foco em resultados profissionais.',
      proofs: [
        '+2 anos dedicados à Russian Manicure',
        'Metodologia própria com foco em durabilidade',
        'Ambiente exclusivo e individual',
        'Formadora com alunas capacitadas',
      ],
      cta: 'Agendar com a Tatiane',
    },
    formacao: {
      eyebrow: 'FORMAÇÃO • CURSO VIP',
      titleStart: 'Aprenda a técnica. ',
      titleItalic: 'Transforme',
      titleEnd: ' a sua carreira.',
      subtitle:
        'Formação exclusiva de Russian Manicure com a Tatiane Santos, para quem quer dominar a técnica e construir uma carreira com confiança e autoridade.',
      supportText:
        'As turmas são reduzidas, com acompanhamento próximo e foco na prática. As vagas são limitadas e a lista de interessadas vai-se preenchendo. Garanta já o seu lugar na fila para a próxima turma.',
      galleryLabel: 'Galeria da Turma',
      benefits: [
        {
          title: 'Turmas Reduzidas',
          subtitle: 'Acompanhamento VIP 1 a 1',
        },
        {
          title: 'Prática com Modelo Real',
          subtitle: 'Foco no mundo de trabalho real',
        },
        {
          title: 'Certificado Incluso',
          subtitle: 'Metodologia russa comprovada',
        },
      ],
      cta: 'Quero fazer a próxima turma',
      subtext:
        'Vai ser redirecionada para o Instagram da Tatiane para entrar na fila de interessadas.',
    },
    instagram: {
      eyebrow: 'Comunidade & Bastidores',
      titleStart: 'Acompanhe o dia a dia do ',
      titleItalic: 'studio',
      subtitle:
        'Trabalhos novos, bastidores e dicas de cuidado. Venha fazer parte da nossa comunidade.',
      follow: 'Seguir',
      followAccount: 'Seguir @tatianesantosbeauty.pt',
      book: 'Agendar',
    },
    feedbacks: {
      eyebrow: 'Experiência Real',
      titleStart: 'Quem vem, ',
      titleItalic: 'volta',
      subtitle: 'Palavras de carinho de quem já viveu a experiência.',
      cta: 'Quero viver esta experiência',
      items: [
        {
          id: 1,
          name: 'Mariana S.',
          service: 'Alongamento tamanho L',
          quote:
            'As minhas unhas nunca ficaram tão limpas e delicadas. Passadas semanas continuam perfeitas!',
          rating: 5,
        },
        {
          id: 2,
          name: 'Joana P.',
          service: 'Manutenção S/M',
          quote:
            'Muito cuidado e atenção ao detalhe. Saí de lá a sentir-me renovada.',
          rating: 5,
        },
        {
          id: 3,
          name: 'Beatriz L.',
          service: 'Banho de gel',
          quote:
            'Resolveu o problema das minhas unhas fracas. Ficaram fortes e naturais.',
          rating: 5,
        },
        {
          id: 4,
          name: 'Carolina M.',
          service: 'Gelinho mãos',
          quote:
            'Atendimento carinhoso, ambiente calmo e um acabamento impecável. Recomendo!',
          rating: 5,
        },
        {
          id: 5,
          name: 'Inês R.',
          service: 'Manutenção vinda de outra profissional',
          quote:
            'Cheguei com as unhas desgastadas e saí com um trabalho de salto alto. Super profissional.',
          rating: 5,
        },
        {
          id: 6,
          name: 'Rita A.',
          service: 'Alongamento S/M',
          quote:
            'A Tatiane é uma artista. Pontual, simpática e o resultado dura muito tempo.',
          rating: 5,
        },
      ],
    },
    studio: {
      eyebrow: 'O Nosso Refúgio',
      titleStart: 'Um espaço pensado para o seu ',
      titleItalic: 'bem-estar',
      subtitle:
        'Higiene rigorosa, conforto e privacidade para viver cada atendimento com tranquilidade.',
      exclusiveBadge: 'Studio Exclusivo',
      byAppointment: 'Atendimento por marcação individual',
      videoBadge: 'Vídeo do Espaço',
      directionsButton: 'Como chegar',
      addressTip:
        'Fácil acesso com estacionamento na zona e proximidade de transportes',
      cta: 'Agendar a minha visita',
      benefits: [
        {
          title: 'Higiene',
          description:
            'Materiais esterilizados e descartáveis, tudo preparado para a sua segurança.',
        },
        {
          title: 'Conforto',
          description:
            'Ambiente aconchegante, climatizado e pensado para relaxar.',
        },
        {
          title: 'Privacidade',
          description: 'Atendimento individual, só para si.',
        },
        {
          title: 'Atenção exclusiva',
          description: 'Cada detalhe cuidado com tempo e calma.',
        },
      ],
    },
    agendamento: {
      eyebrow: 'Marcação Online',
      titleStart: 'O seu momento de autocuidado ',
      titleItalic: 'começa aqui',
      subtitle:
        'Escolha o dia e a hora que melhor se adaptam a si. Marcar é simples e rápido.',
      cta: 'Agendar agora',
      closing:
        'Agradecemos a sua compreensão. O sinal protege o tempo reservado para si e para as outras clientes.',
      rules: [
        {
          id: 1,
          title: 'Confira o seu WhatsApp',
          subtitle: '⚠️ Notificação importante',
          text: 'No momento do agendamento, confirme se o número de WhatsApp está correto. A confirmação da sua marcação é enviada por lá. Se o número estiver errado, não será possível entrar em contacto consigo.',
        },
        {
          id: 2,
          title: 'Sinal obrigatório',
          subtitle: 'Garantia de horário',
          text: 'Para clientes novas, e para quem já desmarcou mais do que uma vez, é necessário o pagamento de um sinal para garantir o horário:',
          detail: [
            { label: 'Alongamento e manutenção:', price: '€10' },
            { label: 'Gelinho:', price: '€6' },
          ],
        },
        {
          id: 3,
          title: 'Política do sinal',
          subtitle: 'Condições de reserva',
          text: 'O valor do sinal não é devolvido em caso de falta ou cancelamento.',
        },
      ],
    },
    faq: {
      eyebrow: 'Dúvidas Comuns',
      titleStart: 'Perguntas ',
      titleItalic: 'frequentes',
      subtitle: 'Tudo o que precisa de saber antes de marcar o seu horário.',
      cta: 'Agendar o meu horário',
      items: [
        {
          id: 1,
          question: 'Como faço para agendar?',
          answer:
            'Clique em "Agendar", escolha o serviço, o dia e a hora. A confirmação é enviada por WhatsApp.',
        },
        {
          id: 2,
          question: 'O que é Russian Manicure?',
          answer:
            'É uma técnica de manicure de alta precisão que limpa cuidadosamente a cutícula e o contorno da unha, resultando em acabamento mais limpo, natural e duradouro.',
        },
        {
          id: 3,
          question: 'Preciso de pagar sinal?',
          answer:
            'Sim, para clientes novas e para quem já desmarcou mais de uma vez: €10 para alongamento e manutenção, €6 para gelinho.',
        },
        {
          id: 4,
          question: 'O sinal é devolvido se eu faltar ou cancelar?',
          answer:
            'Não. O valor do sinal não é devolvido em caso de falta ou cancelamento.',
        },
        {
          id: 5,
          question: 'Porque é que o preço é "a partir de"?',
          answer:
            'O valor pode variar conforme o tamanho, o trabalho a realizar e a data escolhida. Francesa e babyboomer têm acréscimo.',
        },
        {
          id: 6,
          question: 'Fazem manutenção de trabalhos de outra profissional?',
          answer:
            'Sim. O valor depende do tamanho, de acordo com a tabela de manutenção.',
        },
        {
          id: 7,
          question: 'E se tiver mais de 3 unhas partidas na manutenção?',
          answer: 'Nesse caso o valor passa a ser o do alongamento.',
        },
        {
          id: 8,
          question: 'Onde fica o studio?',
          answer: 'Rua Foros de Amora, 1, Seixal – 15, Amora • Cruz de Pau.',
        },
        {
          id: 9,
          question: 'Posso fazer a formação com a Tatiane?',
          answer:
            'Sim! Clique em "Quero fazer a próxima turma" e entre na lista de interessadas pelo Instagram.',
        },
        {
          id: 10,
          question: 'O número de WhatsApp errado pode ser um problema?',
          answer:
            'Sim. A confirmação é enviada por WhatsApp; se o número estiver errado não conseguimos contactar. Confira antes de finalizar.',
        },
      ],
    },
    footer: {
      ral: 'Em caso de litígio o consumidor pode recorrer à Entidade de Resolução Alternativa de Litígios de Consumo da sua região.',
      privacy: 'Política de Privacidade',
      terms: 'Termos e Condições',
      backToTop: 'Voltar ao topo',
      rights: 'Todos os direitos reservados.',
    },
    legalModal: {
      close: 'Fechar',
      privacyTitle: 'Política de Privacidade',
      termsTitle: 'Termos e Condições',
      privacyP1:
        'A privacidade e segurança dos seus dados são fundamentais para nós. Esta Política de Privacidade explica de que forma recolhemos, utilizamos e protegemos as informações fornecidas por si aquando da utilização do nosso website institucional e agendamento de serviços em Tatiane Santos Beauty.',
      privacyH1: '1. Recolha de Dados',
      privacyP2:
        'Os dados fornecidos no agendamento (nome, número de telemóvel/WhatsApp e correio eletrónico) são utilizados exclusivamente para a confirmação, gestão de horários e esclarecimento de dúvidas prévias ao atendimento.',
      privacyH2: '2. Finalidade e Comunicações',
      privacyP3:
        'Não partilhamos os seus dados pessoais com terceiros para efeitos de publicidade de terceiros. As comunicações por WhatsApp destinam-se estritamente à confirmação do serviço e suporte à marcação.',
      privacyH3: '3. Os seus Direitos',
      privacyP4:
        'Nos termos do Regulamento Geral sobre a Proteção de Dados (RGPD), assiste-lhe o direito de acesso, retificação, eliminação ou oposição ao tratamento dos seus dados a qualquer momento mediante contacto com a profissional.',
      termsP1:
        'Ao agendar ou usufruir dos serviços de Tatiane Santos Beauty, o cliente concorda com as condições gerais aqui estabelecidas.',
      termsH1: '1. Marcações e Confirmação',
      termsP2:
        'Os agendamentos são realizados através da plataforma oficial. O cliente compromete-se a fornecer um contacto de WhatsApp correto para confirmação e envio das instruções de chegada.',
      termsH2: '2. Sinal de Reserva',
      termsP3:
        'Para novos clientes e clientes com desmarcações prévias, é cobrado um sinal (€10 para alongamento/manutenção; €6 para gelinho). O sinal não é reembolsável em caso de falta de comparência ou cancelamento com antecedência inferior à estipulada.',
      termsH3: '3. Pontualidade e Tolerância',
      termsP4:
        'Pedimos a pontualidade na hora marcada para não comprometer os atendimentos seguintes. Existe uma tolerância máxima de 10 minutos.',
    },
    floatingCta: {
      book: 'Agendar',
    },
  },

  en: {
    nav: {
      services: 'Services',
      gallery: 'Gallery',
      about: 'About',
      training: 'VIP Training',
      instagram: 'Instagram',
      reviews: 'Reviews',
      studio: 'Studio',
      faq: 'FAQ',
      book: 'Book Now',
      bookAppointment: 'Book Appointment Online',
      langButton: 'PT',
    },
    hero: {
      eyebrow: 'RUSSIAN MANICURE • MASTER INSTRUCTOR',
      titleStart: 'Clean, delicate nails ',
      titleItalic: 'crafted',
      titleEnd: ' to last',
      subtitle:
        'Flawless nail structure, fine precision finish, and a self-care moment designed just for you. Discover the sophistication of Russian manicure with Tatiane Santos.',
      bookCta: 'Book my appointment',
      servicesCta: 'View services',
      locationLabel: 'Location',
      addressLabel: 'Address (View on Map)',
      badgeExp: '+2 years of expertise',
      badgeTraining: 'Courses for nail technicians',
    },
    services: {
      eyebrow: 'Exclusive Menu',
      titleStart: 'Services crafted with ',
      titleItalic: 'care',
      titleEnd: ' in every detail',
      subtitle:
        'Curated nail and brow treatments tailored to your lifestyle and aesthetic.',
      tabNails: 'Nails',
      tabBrows: 'Eyebrows',
      note: '*Prices may vary depending on the chosen date. French tip and babyboomer designs carry a small surcharge, as indicated per service.',
      bookCard: 'Book',
      sectionCta: 'Book my appointment',
      unhas: [
        {
          id: 'alongamento-l',
          name: 'Nail Extensions (Size L)',
          description:
            'Between sizes 4 and 6 on the form. Simple nail art included. French or babyboomer: +€5.',
          duration: '2h',
          price: 'From €40',
        },
        {
          id: 'alongamento-sm',
          name: 'Nail Extensions (Size S/M)',
          description:
            'Up to size 3 on the form. Simple nail art included. French or babyboomer: +€5.',
          duration: '2h',
          price: 'From €35',
        },
        {
          id: 'banho-de-gel',
          name: 'Hard Gel Overlay (Banho de Gel)',
          description:
            'Natural nail reinforcement without extensions. French design: +€5.',
          duration: '1h30',
          price: 'From €30',
        },
        {
          id: 'gelinho-maos',
          name: 'Gel Polish (Gelinho Hands)',
          description:
            'Includes full dry Russian manicure and nail plate leveling. French: +€3.',
          duration: '1h30',
          price: '€20',
        },
        {
          id: 'gelinho-pes',
          name: 'Gel Polish Toes (Gelinho Feet)',
          description: 'Toenail treatment only, without full pedicure.',
          duration: '1h',
          price: '€20',
        },
        {
          id: 'manutencao-l',
          name: 'Gel Refill (Size L)',
          description:
            'More than 3 broken nails is priced as a new full set. Simple nail art included. French or babyboomer: +€5.',
          duration: '2h',
          price: 'From €35',
        },
        {
          id: 'manutencao-sm',
          name: 'Gel Refill (Size S/M)',
          description:
            'More than 3 broken nails is priced as a new full set. French or babyboomer: +€5.',
          duration: '1h30',
          price: 'From €30',
        },
        {
          id: 'manutencao-outra',
          name: 'Foreign Refill (From another artist)',
          description:
            'For maintenance on sets done by another salon; price depends on length according to price list. Simple nail art included. French/babyboomer: +€5.',
          duration: '2h',
          price: 'From €35',
        },
        {
          id: 'remocao',
          name: 'Material Removal',
          description:
            'Gentle, thorough removal preserving your natural nail health.',
          duration: '30 min',
          price: '€10',
        },
        {
          id: 'spa-pes-verniz-gel',
          name: 'Foot Spa + Gel Polish',
          description:
            'Relaxing foot care ritual finished with high-gloss gel polish.',
          duration: '1h30',
          price: '€30',
        },
      ],
      sobrancelhas: [
        {
          id: 'design-simples',
          name: 'Eyebrow Shaping',
          description: 'Hybrid brow styling technique using thread and tweezers.',
          duration: '45 min',
          price: '€10',
        },
        {
          id: 'design-simples-buco',
          name: 'Eyebrow Shaping + Upper Lip',
          description:
            'Hybrid brow design combined with upper lip hair removal.',
          duration: '45 min',
          price: '€15',
        },
      ],
    },
    gallery: {
      eyebrow: 'Portfolio & Craftsmanship',
      titleStart: 'Every set, a delicate ',
      titleItalic: 'masterpiece',
      subtitle:
        'Explore our precision work and find the finish that matches your personal elegance.',
      cta: 'I want nails like this',
    },
    about: {
      eyebrow: 'About the Artist',
      title: 'Meet Tatiane',
      subtitle:
        'A gentle touch, technical mastery, and heartfelt devotion behind every appointment.',
      quote:
        'Taking care of your nails is taking care of who you are. When you look in the mirror and feel radiant, everything changes.',
      author: 'Tatiane Santos',
      paragraph1:
        'To Tatiane, nail care is much more than mere aesthetics: it is a peaceful pause in the middle of a busy routine, an act of self-care, and a way to uplift your confidence. Every client brings their own story, and her studio is intentionally tailored to be serene, intimate, and warm.',
      paragraph2:
        'With more than 2 years of dedicated practice, Tatiane specializes in Russian Manicure: a technique celebrated for impeccable e-file cuticle detailing, balanced apex structure, and superior durability. Beyond her daily studio work, she trains emerging nail technicians to master the art with precision, hygiene, and confidence.',
      proofs: [
        '+2 years dedicated to Russian Manicure',
        'Proprietary method focused on longevity',
        'Private 1-on-1 studio setting',
        'Certified instructor mentoring nail artists',
      ],
      cta: 'Book with Tatiane',
    },
    formacao: {
      eyebrow: 'VIP TRAINING • MASTERCLASS',
      titleStart: 'Master the technique. ',
      titleItalic: 'Transform',
      titleEnd: ' your career.',
      subtitle:
        'Exclusive 1-on-1 and small group Russian Manicure training with Tatiane Santos, designed to build authority, speed, and clean artistry.',
      supportText:
        'Classes are strictly limited to ensure direct hands-on coaching on live models. Spots fill up fast for each cohort. Secure your place on the waiting list today.',
      galleryLabel: 'Classroom Gallery',
      benefits: [
        {
          title: 'Small Cohorts',
          subtitle: 'VIP 1-on-1 hands-on guidance',
        },
        {
          title: 'Live Model Practice',
          subtitle: 'Real-world salon conditions',
        },
        {
          title: 'Certificate Included',
          subtitle: 'Proven Russian e-file protocol',
        },
      ],
      cta: 'Join the next VIP cohort',
      subtext:
        'You will be redirected to Tatiane’s Instagram to join the priority waitlist via direct message.',
    },
    instagram: {
      eyebrow: 'Community & Backstage',
      titleStart: 'Experience the daily studio ',
      titleItalic: 'life',
      subtitle:
        'Fresh nail sets, behind-the-scenes techniques, and care tips. Join our beauty community.',
      follow: 'Follow',
      followAccount: 'Follow @tatianesantosbeauty.pt',
      book: 'Book Appointment',
    },
    feedbacks: {
      eyebrow: 'Real Experiences',
      titleStart: 'First-time visitors become ',
      titleItalic: 'regulars',
      subtitle: 'Warm words from clients who have experienced our care.',
      cta: 'Experience it for yourself',
      items: [
        {
          id: 1,
          name: 'Mariana S.',
          service: 'Nail Extensions (Size L)',
          quote:
            'My nails have never looked so clean and delicate. Weeks later they still look flawless!',
          rating: 5,
        },
        {
          id: 2,
          name: 'Joana P.',
          service: 'Gel Refill (Size S/M)',
          quote:
            'Incredible attention to detail. I walked out feeling refreshed and confident.',
          rating: 5,
        },
        {
          id: 3,
          name: 'Beatriz L.',
          service: 'Hard Gel Overlay',
          quote:
            'Solved my brittle nail problem. They are strong, elegant, and look completely natural.',
          rating: 5,
        },
        {
          id: 4,
          name: 'Carolina M.',
          service: 'Gel Polish Hands',
          quote:
            'Warm hospitality, peaceful atmosphere, and an immaculate e-file finish. Highly recommend!',
          rating: 5,
        },
        {
          id: 5,
          name: 'Inês R.',
          service: 'Foreign Refill',
          quote:
            'Arrived with damaged nails and left with high-end luxury nails. Truly top-tier professional.',
          rating: 5,
        },
        {
          id: 6,
          name: 'Rita A.',
          service: 'Nail Extensions (Size S/M)',
          quote:
            'Tatiane is an artist. Punctual, lovely to speak with, and her sets last for weeks without lifting.',
          rating: 5,
        },
      ],
    },
    studio: {
      eyebrow: 'Our Sanctuary',
      titleStart: 'A space designed for your ',
      titleItalic: 'well-being',
      subtitle:
        'Rigorous sterilization, peaceful comfort, and complete privacy for a serene self-care session.',
      exclusiveBadge: 'Private Studio',
      byAppointment: 'One-on-one appointments only',
      videoBadge: 'Studio Walkthrough Video',
      directionsButton: 'Directions',
      addressTip:
        'Easy parking in the immediate area with convenient transit links',
      cta: 'Book your visit',
      benefits: [
        {
          title: 'Hygiene & Safety',
          description:
            'Hospital-grade sterilization and single-use disposables prepared for your peace of mind.',
        },
        {
          title: 'Comfort',
          description:
            'Cozy, air-conditioned studio environment crafted for deep relaxation.',
        },
        {
          title: 'Privacy',
          description:
            'Individual one-on-one appointments without distractions.',
        },
        {
          title: 'Dedicated Attention',
          description:
            'Unrushed care with generous time allocated to every fine detail.',
        },
      ],
    },
    agendamento: {
      eyebrow: 'Online Booking',
      titleStart: 'Your self-care ritual ',
      titleItalic: 'starts here',
      subtitle:
        'Choose the day and time that best fits your schedule. Booking is fast and simple.',
      cta: 'Book now',
      closing:
        'Thank you for your understanding. The deposit protects the dedicated time reserved for you and fellow clients.',
      rules: [
        {
          id: 1,
          title: 'Verify your WhatsApp',
          subtitle: '⚠️ Important notice',
          text: 'When booking, make sure your WhatsApp number is accurate with country code. Your confirmation and arrival details are sent there. If incorrect, we cannot contact you.',
        },
        {
          id: 2,
          title: 'Required deposit',
          subtitle: 'Reservation guarantee',
          text: 'For new clients and clients who have previously cancelled or rescheduled, a deposit is required to secure the appointment:',
          detail: [
            { label: 'Extensions & Refills:', price: '€10' },
            { label: 'Gel polish:', price: '€6' },
          ],
        },
        {
          id: 3,
          title: 'Deposit policy',
          subtitle: 'Booking terms',
          text: 'The deposit is non-refundable in case of a no-show or late cancellation.',
        },
      ],
    },
    faq: {
      eyebrow: 'Common Questions',
      titleStart: 'Frequently Asked ',
      titleItalic: 'Questions',
      subtitle: 'Everything you need to know before booking your appointment.',
      cta: 'Book my appointment',
      items: [
        {
          id: 1,
          question: 'How do I book an appointment?',
          answer:
            'Click "Book Now", select your desired service, date, and time. Your confirmation is sent directly to your WhatsApp.',
        },
        {
          id: 2,
          question: 'What is a Russian Manicure?',
          answer:
            'It is a high-precision dry manicure technique using specialized e-file diamond bits to gently clean and lift the cuticle. It results in an exceptionally clean, natural look with longer polish longevity.',
        },
        {
          id: 3,
          question: 'Is a deposit required?',
          answer:
            'Yes, for all first-time clients and those who have previously missed or rescheduled appointments: €10 for extensions/refills, and €6 for gel polish.',
        },
        {
          id: 4,
          question: 'Is the deposit refunded if I miss or cancel?',
          answer:
            'No. The reservation deposit is strictly non-refundable in the event of a cancellation or no-show.',
        },
        {
          id: 5,
          question: 'Why are prices listed as "From"?',
          answer:
            'Prices vary depending on nail length, nail art complexity, and chosen date. French tips and babyboomer designs carry a slight surcharge.',
        },
        {
          id: 6,
          question: 'Do you refill sets made by other technicians?',
          answer:
            'Yes. Pricing depends on nail length according to our maintenance table.',
        },
        {
          id: 7,
          question: 'What if I have more than 3 broken nails for a refill?',
          answer:
            'Sets with more than 3 broken or missing nails are charged as a new full extension set.',
        },
        {
          id: 8,
          question: 'Where is the studio located?',
          answer:
            'Rua Foros de Amora, 1, Seixal – 15, Amora • Cruz de Pau, Portugal.',
        },
        {
          id: 9,
          question: 'Can I take the VIP training course with Tatiane?',
          answer:
            'Yes! Click "Join the next VIP cohort" to join the priority waitlist directly through Instagram DM.',
        },
        {
          id: 10,
          question: 'Can an incorrect WhatsApp number be an issue?',
          answer:
            'Yes. Confirmations and arrival details are dispatched via WhatsApp; please verify your number before finalizing.',
        },
      ],
    },
    footer: {
      ral: 'In case of consumer dispute, the client may resort to the Alternative Consumer Dispute Resolution Entity of their region.',
      privacy: 'Privacy Policy',
      terms: 'Terms & Conditions',
      backToTop: 'Back to top',
      rights: 'All rights reserved.',
    },
    legalModal: {
      close: 'Close',
      privacyTitle: 'Privacy Policy',
      termsTitle: 'Terms & Conditions',
      privacyP1:
        'Your privacy and data security are paramount to us. This Privacy Policy details how we collect, use, and protect information provided when booking services at Tatiane Santos Beauty.',
      privacyH1: '1. Data Collection',
      privacyP2:
        'Information submitted during scheduling (name, phone/WhatsApp, email) is strictly used for booking confirmation, appointment management, and pre-service instructions.',
      privacyH2: '2. Communications',
      privacyP3:
        'We never sell or distribute your personal details to third parties for marketing. Communications via WhatsApp are strictly operational.',
      privacyH3: '3. Your Rights',
      privacyP4:
        'Under GDPR regulations, you have the right to access, rectify, or request deletion of your stored records at any time by contacting us directly.',
      termsP1:
        'By booking an appointment or receiving services with Tatiane Santos Beauty, the client accepts the general terms outlined here.',
      termsH1: '1. Bookings and Confirmation',
      termsP2:
        'Appointments are scheduled via the official booking platform. The client agrees to provide an accurate WhatsApp number to receive confirmation details.',
      termsH2: '2. Booking Deposit',
      termsP3:
        'A deposit (€10 for extensions/refills, €6 for gel polish) is required for first-time guests. The deposit is non-refundable in the event of late cancellation or failure to arrive.',
      termsH3: '3. Punctuality',
      termsP4:
        'Please arrive promptly on time to avoid shortening your session or impacting subsequent appointments. A maximum grace period of 10 minutes applies.',
    },
    floatingCta: {
      book: 'Book Now',
    },
  },
};
