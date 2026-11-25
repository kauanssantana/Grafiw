import { COMPANY } from './company';

export interface SecaoLegal { titulo: string; paragrafos?: string[]; itens?: string[] }
export interface DocLegal { slug: string; titulo: string; resumo: string; atualizado: string; secoes: SecaoLegal[] }

const ATUALIZADO = 'novembro de 2026';
const quem = COMPANY.razaoSocial ? `${COMPANY.razaoSocial} (${COMPANY.name})` : COMPANY.name;
const dadosEmpresa = [
  `${quem}${COMPANY.cnpj ? `, CNPJ ${COMPANY.cnpj}` : ''}.`,
  `Endereço: ${COMPANY.addressLines.join(', ')}.`,
  `Telefone: ${COMPANY.phone}. WhatsApp: ${COMPANY.whatsappLabel}. E-mail: ${COMPANY.email}.`,
];

// ⚠️ Texto-base. Recomenda-se revisão por um advogado antes de manter no ar, principalmente os trechos
// de retenção de dados e de uso de ferramentas de análise/marketing, caso sejam adicionadas ao site.
export const POLITICA: DocLegal = {
  slug: 'politica-de-privacidade',
  titulo: 'Política de Privacidade',
  resumo: 'Como a Grafiw trata os dados pessoais de quem visita o site e entra em contato com a gente.',
  atualizado: ATUALIZADO,
  secoes: [
    { titulo: 'Quem somos',
      paragrafos: [
        `Esta Política de Privacidade explica como a ${COMPANY.name} (“Grafiw”) trata os dados pessoais de quem visita este site ou entra em contato conosco, em conformidade com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018, a LGPD).`,
        'A Grafiw é a controladora dos dados tratados por meio deste site:',
      ],
      itens: dadosEmpresa },
    { titulo: 'Quais dados coletamos',
      itens: [
        'Dados que você informa no formulário de contato: nome, e-mail, telefone fixo, WhatsApp, assunto e mensagem.',
        'Dados trocados por WhatsApp: ao clicar nos botões de WhatsApp, a conversa continua no aplicativo, e o tratamento desses dados também segue a política do WhatsApp.',
        'Dados de navegação: como em qualquer site, o servidor que hospeda este site pode registrar automaticamente dados técnicos de acesso, como endereço IP, data e hora, páginas acessadas, navegador e dispositivo.',
      ] },
    { titulo: 'Para que usamos seus dados',
      itens: [
        'Responder suas dúvidas e pedidos de orçamento. Base legal: procedimentos preliminares relacionados a contrato, a pedido do titular, e/ou consentimento (LGPD, art. 7º, incisos I e V).',
        'Manter a segurança e o bom funcionamento do site. Base legal: legítimo interesse (art. 7º, inciso IX).',
        'Cumprir obrigações legais ou regulatórias. Base legal: art. 7º, inciso II.',
      ],
      paragrafos: ['Não usamos seus dados para enviar publicidade sem o seu consentimento.'] },
    { titulo: 'Com quem compartilhamos',
      paragrafos: ['Não vendemos seus dados pessoais. Podemos compartilhá-los apenas com:'],
      itens: [
        'Empresas que nos ajudam a operar o site e a atender você, como hospedagem, serviço de recebimento de formulários e de e-mail, e WhatsApp.',
        'Autoridades públicas, quando houver obrigação legal ou ordem judicial.',
      ] },
    { titulo: 'Serviços de terceiros e cookies',
      paragrafos: [
        'Este site exibe conteúdos de terceiros, como o mapa do Google Maps, vídeos do YouTube e fontes do Google Fonts. Ao carregá-los, esses serviços podem coletar dados, como seu endereço IP, e usar cookies ou identificadores, conforme as próprias políticas de privacidade.',
        'O site não usa cookies de publicidade nem ferramentas próprias de rastreamento. Você pode gerenciar ou bloquear cookies nas configurações do seu navegador. Se passarmos a usar ferramentas de análise ou marketing, atualizaremos esta política e, quando necessário, pediremos o seu consentimento.',
      ] },
    { titulo: 'Por quanto tempo guardamos seus dados',
      paragrafos: ['Guardamos os dados pelo tempo necessário para atender à sua solicitação e cumprir obrigações legais. Depois disso, eles são eliminados ou anonimizados.'] },
    { titulo: 'Seus direitos',
      paragrafos: ['Pela LGPD (art. 18), você pode solicitar a qualquer momento:'],
      itens: [
        'confirmação de que tratamos seus dados e acesso a eles;',
        'correção de dados incompletos, inexatos ou desatualizados;',
        'anonimização, bloqueio ou eliminação de dados desnecessários ou tratados em desconformidade com a lei;',
        'portabilidade dos dados, quando aplicável;',
        'informação sobre com quem compartilhamos seus dados;',
        'revogação do consentimento, quando o tratamento for baseado nele;',
        'oposição a tratamento realizado com base em outras hipóteses legais, se houver descumprimento da lei.',
      ] },
    { titulo: 'Como exercer seus direitos',
      paragrafos: [`Envie sua solicitação para ${COMPANY.email}. Podemos pedir informações para confirmar a sua identidade antes de atender ao pedido. Você também pode apresentar reclamação à Autoridade Nacional de Proteção de Dados (ANPD).`] },
    { titulo: 'Segurança',
      paragrafos: ['Adotamos medidas técnicas e organizacionais razoáveis para proteger seus dados contra acessos não autorizados, perda ou uso indevido. Nenhum sistema é totalmente seguro, mas trabalhamos para reduzir os riscos.'] },
    { titulo: 'Alterações nesta política',
      paragrafos: ['Podemos atualizar esta política para refletir mudanças no site ou na lei. A data da última atualização aparece no topo desta página.'] },
    { titulo: 'Fale com a gente',
      paragrafos: [`Dúvidas sobre esta política? Escreva para ${COMPANY.email} ou ligue para ${COMPANY.phone}.`] },
  ],
};

export const TERMOS: DocLegal = {
  slug: 'termos-e-condicoes',
  titulo: 'Termos e Condições',
  resumo: 'Regras de uso do site da Grafiw Tintas e Texturas.',
  atualizado: ATUALIZADO,
  secoes: [
    { titulo: 'Aceitação',
      paragrafos: [`Ao acessar e usar este site, você concorda com estes Termos e Condições e com a nossa Política de Privacidade. Se não concordar, recomendamos que não use o site. O site é mantido por ${quem}.`] },
    { titulo: 'Sobre o site',
      paragrafos: ['Este é um site institucional e de apresentação de produtos. Ele não é uma loja virtual: não fazemos vendas nem pagamentos pelo site. Pedidos e orçamentos são combinados com nosso atendimento, por WhatsApp, telefone ou na loja.'] },
    { titulo: 'Produtos, preços e disponibilidade',
      itens: [
        'Os preços exibidos são de referência e podem mudar sem aviso. Confirme valores, condições e disponibilidade com o nosso atendimento.',
        'As fotos são ilustrativas. As cores podem variar conforme a tela do seu aparelho, a superfície e a forma de aplicação.',
        'Rendimento, tempo de secagem e número de demãos dependem da preparação da superfície, das condições do ambiente e da aplicação.',
        'Entregas, prazos e frete são combinados no atendimento.',
      ] },
    { titulo: 'Orientações técnicas',
      paragrafos: ['As informações e os passos de aplicação do site são orientações gerais. Siga as instruções da embalagem e as boas práticas de obra. Em caso de dúvida, fale com o nosso atendimento consultivo antes de aplicar.'] },
    { titulo: 'Propriedade intelectual',
      paragrafos: ['Marcas, logotipos, textos, fotos e demais conteúdos do site pertencem à Grafiw ou a terceiros que autorizaram o uso. Não é permitido copiar, reproduzir ou distribuir esses conteúdos sem autorização prévia.'] },
    { titulo: 'Uso adequado',
      paragrafos: ['Ao usar o formulário de contato e os demais recursos, você se compromete a informar dados verdadeiros e a não enviar conteúdo ilegal, ofensivo ou spam, nem tentar prejudicar o funcionamento do site.'] },
    { titulo: 'Links e conteúdos de terceiros',
      paragrafos: ['O site pode conter links e conteúdos de terceiros, como redes sociais, YouTube e Google Maps. Não controlamos esses serviços e não somos responsáveis por seu conteúdo ou por suas políticas.'] },
    { titulo: 'Limitação de responsabilidade',
      paragrafos: ['Fazemos o possível para manter as informações corretas e o site disponível, mas não garantimos que ele esteja sempre livre de erros ou interrupções. Isso não afeta os direitos do consumidor previstos em lei.'] },
    { titulo: 'Alterações',
      paragrafos: ['Podemos alterar estes Termos a qualquer momento. A versão vigente é a publicada nesta página, com a data da última atualização no topo.'] },
    { titulo: 'Lei aplicável e foro',
      paragrafos: ['Estes Termos seguem as leis brasileiras. Fica eleito o foro da comarca de São Paulo/SP, sem prejuízo do direito do consumidor de propor ação no foro do seu domicílio.'] },
    { titulo: 'Contato',
      itens: dadosEmpresa },
  ],
};

export const DOCS_LEGAIS = [POLITICA, TERMOS];
