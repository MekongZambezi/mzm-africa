// Shared content for MZM's five investment practices.
// Mining links to the existing /minerals page; the other four use /business/[slug].

export const practices = [
  {
    slug: 'mining',
    href: '/minerals',
    num: '01',
    title: 'Mining and Beneficiation',
    tag: 'Lead Practice',
    image: '/images/practice-mining.jpg',
    imageAlt: 'Excavators working at an open mine',
    summary:
      "Compliant investment in Zimbabwe's chrome, lithium and wider minerals sector, structured for in-country processing under the 2026 beneficiation and Critical Minerals framework.",
  },
  {
    slug: 'agriculture',
    href: '/business/agriculture',
    num: '02',
    title: 'Agriculture and Agro-processing',
    tag: 'Practice',
    image: '/images/practice-agriculture.jpg',
    imageAlt: 'Tobacco growing in a field',
    summary:
      'Investment in processing, storage and cold chain, and export buyer linkages for Zimbabwean growers and processors.',
    contact: 'projects@mzmafrica.com',
    lead:
      "Agriculture is one of the main anchors of Zimbabwe's economy and the largest part of today's trade with Vietnam. MZM brings Asian capital, equipment and buyers to the processing and export end of the value chain.",
    context: [
      "Zimbabwe's National Development Strategy 2 (2026 to 2030) prioritises agricultural productivity and sustainable agro-processing value chains.",
      'Tobacco is already Zimbabwe’s main export to Vietnam, and horticulture exports, including blueberries and citrus, are expanding into Asian markets.',
      'Government is promoting agro-industrial parks and provincial Special Economic Zones with incentives for processing investment.',
    ],
    services: [
      'Investment structuring for agro-processing plants, including milling, citrus and fruit processing',
      'Cold chain, packhouse and storage investment',
      'Introductions to Vietnamese and Asian processing machinery suppliers',
      'Export buyer introductions for tobacco, horticulture and processed foods',
      'Entry support for investors in agro-industrial parks and Special Economic Zones',
    ],
    boundaries:
      'Zimbabwe restricts foreign ownership of agricultural land. MZM therefore focuses on processing, logistics, equipment and contract supply arrangements, not land acquisition. Local sourcing requirements for certain processors are reflected in every structure.',
  },
  {
    slug: 'energy',
    href: '/business/energy',
    num: '03',
    title: 'Energy',
    tag: 'Practice',
    image: '/images/practice-energy.jpg',
    imageAlt: 'Solar panels installed on grassland',
    summary:
      'Captive power and solar supply for mining, processing and agro-industrial operations, sourced through our Asia desk.',
    contact: 'projects@mzmafrica.com',
    lead:
      'Reliable power is one of the main constraints on mining, processing and industrial growth in Zimbabwe. MZM connects operations that need power with Asian equipment suppliers and developers.',
    context: [
      'Government policy requires large-scale miners, including ferrochrome producers, to establish their own captive power.',
      'Captive and independent power producers now supply a growing share of Zimbabwe’s electricity, supported by a more open regulatory framework.',
      'Vietnam is one of the world’s leading producers of solar panels, giving Zimbabwean projects access to competitively priced equipment.',
    ],
    services: [
      'Captive solar and storage sourcing for mining and agro-processing clients',
      'Introductions to Asian solar equipment manufacturers and suppliers',
      'Supplier verification and procurement documentation',
      'Introductions between Zimbabwean projects and power developers',
      'Coordination of power requirements within MZM mining and agriculture mandates',
    ],
    boundaries:
      'MZM advises and connects; it does not develop or operate power projects. Generation projects require licensing by the Zimbabwe Energy Regulatory Authority and appropriate power purchase arrangements, which MZM coordinates with licensed developers and counsel.',
  },
  {
    slug: 'manufacturing',
    href: '/business/manufacturing',
    num: '04',
    title: 'Manufacturing and Industrial Parks',
    tag: 'Practice',
    image: '/images/practice-manufacturing.jpg',
    imageAlt: 'Machinery inside a factory',
    summary:
      'Site selection and Special Economic Zone entry for Asian manufacturers establishing operations in Zimbabwe.',
    contact: 'projects@mzmafrica.com',
    lead:
      "Industrialisation and value addition sit at the centre of Zimbabwe's National Development Strategy 2. MZM helps Asian manufacturers assess, license and establish operations in Zimbabwe's industrial zones.",
    context: [
      'Cabinet approved the Integrated Provincial Special Economic Zones framework in May 2026, creating zones aligned to each province’s strengths.',
      'Bulawayo has gazetted Special Economic Zones targeting agro-processing, tourism, renewable energy and diamond processing.',
      'Investors in industrial parks and Special Economic Zones can access tax and customs incentives under the ZIDA Act.',
    ],
    services: [
      'Site selection across Special Economic Zones and industrial parks',
      'Special Economic Zone investor licensing support through ZIDA',
      'Market entry briefings on regulation, incentives and labour',
      'Introductions to local partners, suppliers and service providers',
      'Coordination with MZM’s energy and agriculture practices on power and raw material supply',
    ],
    boundaries:
      'Manufacturing investments involve longer timelines and several approvals. MZM works with licensed legal and tax advisers on every engagement and does not offer incentives or approvals that only government agencies can grant.',
  },
  {
    slug: 'tourism',
    href: '/business/tourism',
    num: '05',
    title: 'Tourism and Mobility',
    tag: 'Practice',
    image: '/images/practice-tourism.jpg',
    imageAlt: 'Victoria Falls at sunset',
    summary:
      'Hospitality and transport investment, including clean mobility for Zimbabwe’s tourism destinations.',
    contact: 'emobility@mzmafrica.com',
    lead:
      'Tourism is one of the pillars of Zimbabwe’s growth strategy, anchored by Victoria Falls and a series of UNESCO World Heritage Sites. MZM supports investment in the transport and hospitality capacity that growth requires.',
    context: [
      'Tourism promotion and foreign investment attraction are named priorities of the National Development Strategy 2.',
      'International arrivals and tourism investment have grown strongly in 2026, with Asian arrivals among the fastest-growing markets.',
      'Zimbabwe co-hosts the ICC Men’s Cricket World Cup in 2027, with Victoria Falls a central destination for visitors.',
    ],
    services: [
      'Clean mobility initiatives for tourism destinations, including electric vehicle fleets',
      'Hospitality and tourism Special Economic Zone investment introductions',
      'Coordination with tourism authorities and development companies',
      'Market entry support for Asian hospitality and transport operators',
      'Partner and supplier verification',
    ],
    boundaries:
      'Tourism and transport projects require licensing by the relevant authorities and, in protected areas, environmental approval. MZM names partners publicly only once agreements are signed.',
  },
]

export const getPractice = (slug) => practices.find((p) => p.slug === slug)
