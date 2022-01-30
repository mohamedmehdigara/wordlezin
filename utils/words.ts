const defaultMessage = ' Using word of the day instead.'

// copied from https://github.com/yyx990803/vue-wordle/blob/main/src/words.ts
export function getWordOfTheDay(): string {
  if (location.search) {
    try {
      const query = atob(location.search.slice(1))
      if (query.length !== 5) {
        alert(`Incorrect word length from encoded query. ${defaultMessage}`)
      } else {
        return query
      }
    } catch (e) {
      alert(`Malformed encoded word query. ${defaultMessage}`)
    }
  }

  const now = new Date()
  const start = new Date(2022, 0, 30)
  const diff = Number(now) - Number(start)
  let day = Math.floor(diff / (1000 * 60 * 60 * 24))
  while (day > answers.length) {
    day -= answers.length
  }

  return answers[day]
}

export function isValidWord(word: string): boolean {
  const normalizedWord = word.toLowerCase()
  return answers.includes(normalizedWord) || validWords.includes(normalizedWord)
}

const answers: Array<string> = [
  'sagaz',
  'negro',
  'âmago',
  'êxito',
  'mexer',
  'termo',
  'senso',
  'nobre',
  'algoz',
  'afeto',
  'plena',
  'ética',
  'mútua',
  'sutil',
  'tênue',
  'vigor',
  'aquém',
  'audaz',
  'porém',
  'fazer',
  'sanar',
  'inato',
  'seção',
  'cerne',
  'assim',
  'desde',
  'ideia',
  'fosse',
  'moral',
  'poder',
  'torpe',
  'honra',
  'muito',
  'justo',
  'anexo',
  'fútil',
  'gozar',
  'razão',
  'quiçá',
  'ícone',
  'etnia',
  'sobre',
  'tange',
  'égide',
  'lapso',
  'mútuo',
  'sonho',
  'expor',
  'haver',
  'hábil',
  'casal',
  'amigo',
  'posse',
  'pesar',
  'ávido',
  'tempo',
  'ardil',
  'corja',
  'coser',
  'boçal',
  'então',
  'genro',
  'seara',
  'dengo',
  'detém',
  'prole',
  'causa',
  'dizer',
  'digno',
  'tenaz',
  'dever',
  'crivo',
  'óbice',
  'ânsia',
  'ápice',
  'saber',
  'brado',
  'gleba',
  'ceder',
  'porra',
  'ânimo',
  'pária',
  'assaz',
  'atroz',
  'comum',
  'culto',
  'graça',
  'temor',
  'sendo',
  'orgia',
  'censo',
  'mundo',
  'denso',
  'pauta',
  'fugaz',
  'cozer',
  'valha',
  'neném',
  'ainda',
  'vício',
  'revés',
  'forte',
  'vulgo',
  'pudor',
  'estar',
  'regra',
  'dogma',
  'louco',
  'banal',
  'criar',
  'pífio',
  'tenro',
  'impor',
  'desse',
  'apraz',
  'reaça',
  'jeito',
  'ordem',
  'atrás',
  'pedir',
  'clava',
  'round',
  'saúde',
  'viril',
  'usura',
  'manso',
  'mercê',
  'juízo',
  'sábio',
  'ontem',
  'prosa',
  'servo',
  'afago',
  'presa',
  'feliz',
  'fluir',
  'ébrio',
  'falar',
  'coisa',
  'cunho',
  'forma',
  'devir',
  'vendo',
  'sério',
  'meiga',
  'homem',
  'platô',
  'guisa',
  'pleno',
  'temer',
  'visar',
  'bruma',
  'cisma',
  'mesmo',
  'mágoa',
  'limbo',
  'acaso',
  'puder',
  'gerar',
  'êxodo',
  'óbvio',
  'herói',
  'obter',
  'afins',
  'xibiu',
  'ímpio',
  'valor',
  'matiz',
  'lugar',
  'praxe',
  'crise',
  'senil',
  'havia',
  'vênia',
  'fluxo',
  'enfim',
  'certo',
  'álibi',
  'ritmo',
  'tédio',
  'garbo',
  'reter',
  'pulha',
  'tomar',
  'parvo',
  'grato',
  'vital',
  'união',
  'posso',
  'valia',
  'visão',
  'vivaz',
  'favor',
  'laico',
  'bravo',
  'parco',
  'abrir',
  'todos',
  'prumo',
  'ameno',
  'fácil',
  'gênio',
  'reles',
  'óbito',
  'possa',
  'prime',
  'olhar',
  'falso',
  'levar',
  'anelo',
  'tecer',
  'tesão',
  'selar',
  'fator',
  'burro',
  'citar',
  'adiar',
  'rogar',
  'façam',
  'farsa',
  'casta',
  'coeso',
  'achar',
  'cisão',
  'ranço',
  'épico',
  'noção',
  'cabal',
  'legal',
  'sinto',
  'morte',
  'imune',
  'exato',
  'sábia',
  'nicho',
  'falta',
  'fardo',
  'ativo',
  'gente',
  'amplo',
  'lavra',
  'haste',
  'força',
  'ouvir',
  'gesto',
  'labor',
  'viver',
  'dúbio',
  'revel',
  'brega',
  'deter',
  'cesta',
  'sulco',
  'sonso',
  'árduo',
  'sesta',
  'leigo',
  'tendo',
  'passo',
  'único',
  'feixe',
  'atuar',
  'vemos',
  'ótica',
  'ciúme',
  'toada',
  'calma',
  'igual',
  'vadia',
  'débil',
  'humor',
  'ideal',
  'tende',
  'sonsa',
  'vácuo',
  'rever',
  'hiato',
  'ponto',
  'pobre',
  'ambos',
  'fusão',
  'terno',
  'claro',
  'probo',
  'remir',
  'cauda',
  'varão',
  'velho',
  'outro',
  'leito',
  'advém',
  'doido',
  'senão',
  'horda',
  'marco',
  'jovem',
  'inata',
  'xeque',
  'capaz',
  'relva',
  'carma',
  'tenra',
  'fonte',
  'linda',
  'algum',
  'caçar',
  'anuir',
  'ajuda',
  'ficar',
  'apoio',
  'velar',
  'dorso',
  'vimos',
  'rigor',
  'noite',
  'farão',
  'série',
  'verso',
  'botar',
  'tanto',
  'vazio',
  'morar',
  'prece',
  'cruel',
  'ambas',
  'moção',
  'peste',
  'líder',
  'casto',
  'vírus',
  'massa',
  'frase',
  'entre',
  'covil',
  'terra',
  'pouco',
  'fauna',
  'faina',
  'coesa',
  'coçar',
  'furor',
  'preso',
  'credo',
  'signo',
  'dócil',
  'sente',
  'vetor',
  'lazer',
  'feito',
  'árido',
  'aceso',
  'minha',
  'ciclo',
  'flora',
  'raiva',
  'ímpar',
  'maior',
  'beata',
  'vulto',
  'chata',
  'birra',
  'torço',
  'brisa',
  'breve',
  'vasto',
  'houve',
  'liame',
  'trama',
  'setor',
  'adeus',
  'pegar',
  'papel',
  'salvo',
  'corno',
  'ardor',
  'senda',
  'manha',
  'seita',
  'banzo',
  'morro',
  'pecha',
  'reger',
  'prado',
  'átomo',
  'visse',
  'antro',
  'avaro',
  'blasé',
  'segue',
  'livro',
  'anciã',
  'nossa',
  'ocaso',
  'plano',
  'comer',
  'peixe',
  'áureo',
  'ótimo',
  'saída',
  'rezar',
  'acima',
  'aliás',
  'chulo',
  'prono',
  'saiba',
  'junto',
  'meses',
  'fitar',
  'nunca',
  'jazia',
  'sorte',
  'opção',
  'fruir',
  'parar',
  'serão',
  'mudar',
  'puxar',
  'pajem',
  'bando',
  'chuva',
  'sinal',
  'treta',
  'fugir',
  'motim',
  'gerir',
  'prazo',
  'alude',
  'nação',
  'leite',
  'foder',
  'tosco',
  'sinhá',
  'séria',
  'norma',
  'época',
  'andar',
  'brava',
  'carro',
  'grupo',
  'arcar',
  'exame',
  'tenso',
  'avião',
  'rapaz',
  'venal',
  'soldo',
  'ídolo',
  'lenda',
  'virão',
  'tirar',
  'exijo',
  'quota',
  'parte',
  'reino',
  'praga',
  'sumir',
  'malta',
  'campo',
  'pompa',
  'aonde',
  'traga',
  'logro',
  'fixar',
  'preto',
  'vilão',
  'voraz',
  'anais',
  'corpo',
  'solto',
  'quase',
  'turva',
  'nódoa',
  'cópia',
  'antes',
  'cheio',
  'certa',
  'oásis',
  'parva',
  'turba',
  'agora',
  'alado',
  'apego',
  'messe',
  'grave',
  'índio',
  'filho',
  'risco',
  'doído',
  'caixa',
  'verve',
  'estão',
  'prova',
  'apelo',
  'perda',
  'praia',
  'pardo',
  'acesa',
  'nível',
  'fenda',
  'trupe',
  'retém',
  'ligar',
  'viria',
  'átrio',
  'tocar',
  'lindo',
  'sabia',
  'dessa',
  'texto',
  'ficha',
  'navio',
  'psico',
  'opaco',
  'alçar',
  'verba',
  'supra',
  'coito',
  'ético',
  'astro',
  'livre',
  'áurea',
  'cioso',
  'faixa',
  'afora',
  'elite',
  'fraco',
  'glosa',
  'parca',
  'autor',
  'lidar',
  'conta',
  'grata',
  'firme',
  'mente',
  'calda',
  'privê',
  'bater',
  'tinha',
  'cousa',
  'fatal',
  'fatos',
  'reses',
  'junco',
  'turvo',
  'molho',
  'verbo',
  'magia',
  'torso',
  'irmão',
  'macio',
  'douto',
  'jirau',
  'ígneo',
  'oxalá',
  'supor',
  'abriu',
  'deixa',
  'pagão',
  'asilo',
  'atual',
  'rouca',
  'salve',
  'órfão',
  'bicho',
  'light',
  'posto',
  'pique',
  'festa',
  'caber',
  'extra',
  'curso',
  'ruína',
  'paira',
  'locus',
  'besta',
  'pisar',
  'zelar',
  'finda',
  'ereto',
  'sexta',
  'vezes',
  'desta',
  'judeu',
  'abuso',
  'rádio',
  'feudo',
  'bioma',
  'vídeo',
  'combo',
  'tetra',
  'agudo',
  'manhã',
  'facto',
  'culpa',
  'baixo',
  'menos',
  'vinha',
  'urgia',
  'porta',
  'cútis',
  'surja',
  'sarça',
  'advir',
  'meigo',
  'vosso',
  'estio',
  'traço',
  'longe',
  'bônus',
  'tento',
  'autos',
  'cocho',
  'sítio',
  'super',
  'museu',
  'facho',
  'pilar',
  'clean',
  'suave',
  'rumor',
  'lasso',
  'drops',
  'geral',
  'penta',
  'acolá',
  'optar',
  'gosto',
  'medir',
  'amena',
  'boato',
  'pífia',
  'ações',
  'turma',
  'rubro',
  'calão',
  'crime',
  'chama',
  'letal',
  'mosto',
  'cover',
  'ponha',
  'pacto',
  'louça',
  'cacho',
  'pódio',
  'lápis',
  'folga',
  'vetar',
  'aroma',
  'hoste',
  'finjo',
  'vigia',
  'local',
  'pasmo',
  'fazia',
  'cânon',
  'açude',
  'axila',
  'refém',
  'feroz',
  'drama',
  'rival',
  'troça',
  'brabo',
  'hobby',
  'móvel',
  'mesma',
  'monte',
  'ecoar',
  'lesse',
  'nosso',
  'poema',
  'golpe',
  'metiê',
  'riste',
  'plebe',
  'súcia',
  'peito',
  'fórum',
  'daqui',
  'ávida',
  'lição',
  'forem',
  'monge',
  'teste',
  'clima',
  'páreo',
  'coral',
  'viram',
  'aluno',
  'escol',
  'ébano',
  'carta',
  'légua',
  'sarau',
  'falha',
  'macro',
  'venha',
  'farta',
  'poeta',
  'cargo',
  'briga',
  'átimo',
  'plaga',
  'fruto',
  'tacha',
  'perco',
  'cetro',
  'passa',
  'chato',
  'conto',
  'ateia',
  'idoso',
  'calmo',
  'virar',
  'plumo',
  'assar',
  'busca',
  'vento',
  'estro',
  'arado',
  'roupa',
  'tribo',
  'chefe',
  'recém',
  'piada',
  'tarde',
  'ímpia',
  'catre',
  'grama',
  'surto',
  'seixo',
  'aviso',
  'traje',
  'swing',
  'ornar',
  'bruta',
  'verde',
  'civil',
  'deste',
  'deram',
  'arfar',
  'vedar',
  'depor',
  'fosso',
  'trato',
  'broxa',
  'irado',
  'pasma',
  'saldo',
  'tição',
  'nuvem',
  'grota',
  'beijo',
  'troca',
  'canso',
  'porte',
  'âmbar',
  'cifra',
  'silvo',
  'úteis',
  'pedra',
  'régio',
  'bazar',
  'segar',
  'gabar',
  'vazão',
  'pavor',
  'laudo',
  'amado',
  'bucho',
  'troco',
  'tiver',
  'casar',
  'bruto',
  'tutor',
  'gíria',
  'sósia',
  'perto',
  'molde',
  'vagar',
  'lesto',
  'magna',
  'rural',
  'bença',
  'mídia',
  'minar',
  'nesse',
  'tchau',
  'odiar',
  'meche',
  'vadio',
  'corso',
  'sótão',
  'fossa',
  'itens',
  'clero',
  'jejum',
  'renda',
  'única',
  'inter',
  'ileso',
  'viado',
  'aviar',
  'mangá',
  'berro',
  'manga',
  'negar',
  'largo',
  'feita',
  'paiol',
  'cinto',
  'pomar',
  'cenho',
  'pugna',
  'lesão',
  'horto',
  'pinho',
  'canto',
  'visto',
  'podar',
  'rocha',
  'ruído',
  'areia',
  'invés',
  'urdir',
  'órgão',
  'cível',
  'ufano',
  'proto',
  'bolsa',
  'marca',
  'frota',
  'mocho',
  'amiga',
  'dúbia',
  'vista',
  'canil',
  'piche',
  'vasta',
  'úmido',
  'peita',
  'penso',
  'densa',
  'bulir',
  'júlia',
  'culta',
  'morfo',
  'jogar',
  'esgar',
  'guria',
  'fazes',
  'resto',
  'artur',
  'xucro',
  'apear',
  'cheia',
  'úbere',
  'linha',
  'mamãe',
  'findo',
  'misto',
  'demão',
  'narco',
  'monta',
  'natal',
  'chula',
  'varoa',
  'campa',
  'manto',
  'close',
  'barão',
  'gemer',
  'stand',
  'fundo',
  'bunda',
  'amada',
  'chaga',
  'mover',
  'ágape',
  'símio',
  'venho',
  'jazer',
  'retro',
  'punha',
  'nessa',
  'álbum',
  'preço',
  'ardis',
  'sigla',
  'calça',
  'seiva',
  'tenha',
  'sabor',
  'folia',
  'firma',
  'cosmo',
  'tumba',
  'álamo',
  'matar',
  'cerca',
  'porca',
  'lábia',
  'banto',
  'rente',
  'salva',
  'louro',
  'míope',
  'sinta',
  'ceita',
  'torna',
  'coevo',
  'pólis',
  'ferpa',
  'arroz',
  'barro',
  'axial',
  'solta',
  'enjoo',
  'redor',
  'ousar',
  'verão',
  'zumbi',
  'fugiu',
  'lousa',
  'obtém',
  'bolso',
  'corar',
  'velha',
  'etapa',
  'áudio',
  'trago',
  'lutar',
  'cacto',
  'volta',
  'limpo',
  'queda',
  'mimar',
  'penca',
  'final',
  'fátuo',
  'reler',
  'vário',
  'quite',
  'santo',
  'nesta',
  'baixa',
  'farol',
  'veloz',
  'letra',
  'troço',
  'longo',
  'nácar',
  'vazia',
  'mania',
  'sugar',
  'farto',
  'neste',
  'staff',
  'refil',
  'folha',
  'burra',
  'forro',
  'puído',
  'bedel',
  'repor',
  'viger',
  'ultra',
  'coroa',
  'justa',
  'macho',
  'lucro',
  'dança',
  'subir',
  'passe',
  'urgir',
  'sadio',
  'custo',
  'hífen',
  'mouro',
  'gueto',
  'mimos',
  'sexto',
  'usual',
  'valer',
  'chave',
  'sócio',
  'harém',
  'lento',
  'lábil',
  'desça',
  'versa',
  'anzol',
  'abade',
  'rédea',
  'calvo',
  'árdua',
  'aéreo',
  'pavio',
  'ceifa',
]
const validWords: Array<string> = [
  'amago',
  'exito',
  'etica',
  'mutua',
  'tenue',
  'aquem',
  'porem',
  'secao',
  'futil',
  'razao',
  'quica',
  'icone',
  'egide',
  'mutuo',
  'habil',
  'avido',
  'bocal',
  'entao',
  'detem',
  'obice',
  'ansia',
  'apice',
  'animo',
  'paria',
  'graca',
  'nenem',
  'vicio',
  'reves',
  'pifio',
  'reaca',
  'atras',
  'saude',
  'merce',
  'juizo',
  'sabio',
  'ebrio',
  'serio',
  'plato',
  'magoa',
  'exodo',
  'obvio',
  'heroi',
  'impio',
  'venia',
  'alibi',
  'tedio',
  'uniao',
  'visao',
  'facil',
  'genio',
  'obito',
  'tesao',
  'facam',
  'cisao',
  'ranco',
  'epico',
  'nocao',
  'forca',
  'dubio',
  'arduo',
  'unico',
  'otica',
  'ciume',
  'debil',
  'vacuo',
  'fusao',
  'varao',
  'advem',
  'senao',
  'cacar',
  'farao',
  'serie',
  'mocao',
  'lider',
  'virus',
  'cocar',
  'docil',
  'arido',
  'impar',
  'torco',
  'atomo',
  'blase',
  'ancia',
  'aureo',
  'otimo',
  'saida',
  'alias',
  'opcao',
  'serao',
  'nacao',
  'sinha',
  'seria',
  'epoca',
  'aviao',
  'idolo',
  'virao',
  'vilao',
  'nodoa',
  'copia',
  'oasis',
  'indio',
  'estao',
  'nivel',
  'retem',
  'atrio',
  'alcar',
  'etico',
  'aurea',
  'prive',
  'irmao',
  'igneo',
  'oxala',
  'pagao',
  'orfao',
  'ruina',
  'radio',
  'video',
  'cutis',
  'sarca',
  'traco',
  'bonus',
  'sitio',
  'acola',
  'pifia',
  'acoes',
  'calao',
  'louca',
  'podio',
  'lapis',
  'canon',
  'acude',
  'refem',
  'movel',
  'metie',
  'sucia',
  'forum',
  'avida',
  'licao',
  'pareo',
  'ebano',
  'legua',
  'atimo',
  'recem',
  'impia',
  'ticao',
  'ambar',
  'uteis',
  'regio',
  'vazao',
  'giria',
  'sosia',
  'benca',
  'midia',
  'sotao',
  'unica',
  'lesao',
  'ruido',
  'inves',
  'orgao',
  'civel',
  'dubia',
  'umido',
  'julia',
  'ubere',
  'mamae',
  'demao',
  'barao',
  'agape',
  'simio',
  'album',
  'preco',
  'calca',
  'alamo',
  'labia',
  'miope',
  'polis',
  'verao',
  'obtem',
  'audio',
  'fatuo',
  'vario',
  'nacar',
  'puido',
  'danca',
  'hifen',
  'socio',
  'harem',
  'labil',
  'desca',
  'redea',
  'ardua',
  'aereo',
]
