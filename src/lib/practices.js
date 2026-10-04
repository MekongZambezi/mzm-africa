// Shared content for MZM's five investment practices.
// Mining links to the existing /minerals page; the other four use /business/[slug].
// zimbabwe / vietnam: the named policies each practice serves on both sides of the corridor.

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
      'Investment in processing, storage and cold chain, and Asian buyers for Zimbabwean tobacco, cotton, horticulture and processed foods.',
    contact: 'projects@mzmafrica.com',
    lead:
      "Agriculture is one of the main anchors of Zimbabwe's economy and the basis of today's trade with Vietnam. MZM works in both directions: Asian capital and equipment into processing, and Zimbabwean produce to Asian buyers.",
    context: [
      "Zimbabwe's National Development Strategy 2 (2026 to 2030) prioritises agricultural productivity and sustainable agro-processing value chains.",
      'The Horticulture Recovery and Growth Plan targets a US$2 billion horticulture industry by 2030, with export competitiveness as a stated goal.',
      'Tobacco is already the main product Zimbabwe sells to Vietnam, and Vietnam’s textile industry is a large importer of cotton.',
    ],
    zimbabwe: [
      'National Development Strategy 2 (2026 to 2030)',
      'Horticulture Recovery and Growth Plan',
      'National Industrial Development Policy II: oilseeds, dairy, textiles and leather value chains',
      'ZimTrade export development programmes',
    ],
    vietnam: [
      'GoGlobal Programme (Decision 626/QD-TTg, 2026): agro-processing named as a priority sector',
      'Africa listed as a potential market for agricultural investment',
      'Processing industries reliant on imported raw materials, including cotton and tobacco',
    ],
    services: [
      'Investment structuring for agro-processing, including fruit, oilseed, dairy and cotton processing',
      'Cold chain, packhouse and storage investment',
      'Introductions to Vietnamese processing machinery suppliers',
      'Asian buyer introductions for tobacco, cotton, horticulture and processed foods',
      'Entry support for investors in agro-industrial parks and Special Economic Zones',
    ],
    boundaries:
      'Zimbabwe restricts foreign ownership of agricultural land, so MZM focuses on processing, logistics, equipment and supply contracts, not land. Tobacco grading and packaging are reserved for Zimbabwean citizens, and grain milling is open to foreign investors only above set investment and employment thresholds. MZM works with licensed Zimbabwean merchants and processors in these areas.',
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
      'Rules gazetted in July 2026 remove licence fees for renewable projects up to 10 MW and allow own-use plants between 100 kW and 10 MW to register rather than license.',
      'Vietnam is one of the world’s leading producers of solar panels, giving Zimbabwean projects access to competitively priced equipment.',
    ],
    zimbabwe: [
      'National Development Strategy 2: energy infrastructure',
      'Captive power requirement for large-scale miners',
      '2026 licensing and net metering reforms for renewable and own-use generation',
    ],
    vietnam: [
      'Leading solar panel manufacturing and export base',
      'Energy generation the largest sector of Vietnamese outbound investment in early 2026',
    ],
    services: [
      'Captive solar and storage sourcing for mining and agro-processing clients',
      'Introductions to Asian solar equipment manufacturers and suppliers',
      'Supplier verification and procurement documentation',
      'Introductions between Zimbabwean projects and licensed power developers',
      'Coordination of power requirements within MZM mining and agriculture mandates',
    ],
    boundaries:
      'MZM advises and connects; it does not develop or operate power projects. Generation projects are licensed or registered with the Zimbabwe Energy Regulatory Authority, which MZM coordinates with licensed developers and counsel.',
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
      'Site selection and Special Economic Zone entry for Asian manufacturers, with a focus on textiles, leather and processing industries.',
    contact: 'projects@mzmafrica.com',
    lead:
      "Industrialisation and value addition sit at the centre of Zimbabwe's development strategy, and Vietnam's GoGlobal programme names the same industries for its firms abroad. MZM helps Asian manufacturers assess, license and establish operations in Zimbabwe.",
    context: [
      'The National Industrial Development Policy II (2026 to 2030) aims to raise manufactured exports from US$400 million to US$1 billion across 16 priority value chains.',
      'Cabinet approved the Integrated Provincial Special Economic Zones framework in May 2026, with zones matched to each province’s strengths.',
      'Investors in Special Economic Zones and industrial parks can access tax and customs incentives under the ZIDA Act.',
    ],
    zimbabwe: [
      'National Industrial Development Policy II (2026 to 2030)',
      'Local Content Strategy (2026 to 2035)',
      'Integrated Provincial Special Economic Zones framework',
    ],
    vietnam: [
      'GoGlobal Programme: electronics, textiles, leather and processing named as priority sectors',
      'Target of 100 Vietnamese enterprises supported to invest abroad by 2030',
    ],
    services: [
      'Site selection across Special Economic Zones and industrial parks',
      'Special Economic Zone investor licensing support through ZIDA',
      'Market entry briefings on regulation, incentives and labour',
      'Introductions to local partners, suppliers and service providers',
      'Coordination with MZM’s energy and agriculture practices on power and raw materials',
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
      'Hospitality investment and clean mobility partnerships for Zimbabwe’s tourism destinations.',
    contact: 'emobility@mzmafrica.com',
    lead:
      'Tourism is one of the pillars of Zimbabwe’s growth strategy, anchored by Victoria Falls and a series of UNESCO World Heritage Sites. MZM supports investment in the hospitality and transport capacity that growth requires.',
    context: [
      'Government encourages private investment in lodges, hotels, conference facilities, eco-tourism and tourism transport.',
      'Tourism promotion and foreign investment attraction are named priorities of the National Development Strategy 2.',
      'Zimbabwe co-hosts the ICC Men’s Cricket World Cup in 2027, with Victoria Falls a central destination for visitors.',
    ],
    zimbabwe: [
      'National Tourism Recovery and Growth Strategy',
      'National Development Strategy 2: tourism and investment promotion',
      'Tourism Special Economic Zones',
    ],
    vietnam: [
      'Vietnamese groups expanding into African hospitality and electric mobility',
      'GoGlobal Programme support for services and distribution abroad',
    ],
    services: [
      'Hospitality and tourism Special Economic Zone investment introductions',
      'Electric vehicle supply partnerships with Zimbabwean-owned transport operators',
      'Coordination with tourism authorities and development companies',
      'Market entry support for Asian hospitality operators',
      'Partner and supplier verification',
    ],
    boundaries:
      'Passenger transport and travel agency services are reserved for Zimbabwean citizens. MZM structures vehicle supply and technology partnerships with Zimbabwean-owned operators; it does not offer foreign ownership of transport businesses. Partners are named publicly only once agreements are signed.',
  },
]

export const getPractice = (slug) => practices.find((p) => p.slug === slug)
