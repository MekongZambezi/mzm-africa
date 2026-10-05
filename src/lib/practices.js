// Shared content for MZM's five sectors.
// Every practice has the same fields and the same depth, so all five are presented with equal weight.
// Facts checked against official and press sources, October 2026.

export const STATUS = {
  open: 'Open to investment',
  conditions: 'Open, with conditions',
  trade: 'Established trade',
  enquiries: 'Enquiries welcome',
  access: 'Awaiting market access',
  large: 'Large-scale only',
}

export const practices = [
  {
    slug: 'mining',
    href: '/business/mining',
    num: '01',
    title: 'Mining and Beneficiation',
    image: '/images/practice-mining.jpg',
    imageAlt: 'Excavators working at an open mine',
    summary: 'Investment in chrome, lithium, gold and other minerals, set up so the ore is processed inside Zimbabwe.',
    contact: 'projects@mzmafrica.com',
    lead: 'Mining is Zimbabwe’s largest export earner, and the government now expects minerals to be processed in the country before they are sold abroad. MZM brings investors whose plans include that processing.',
    context: [
      'Since 25 February 2026, raw mineral exports need a Ministry of Mines approved plan to process them in Zimbabwe.',
      'On 22 May 2026 the Ministry declared 14 critical minerals, including lithium, chrome and copper. The State will hold a minimum shareholding in their exploitation. The regulations that set its size are still pending.',
      'Mining took the largest share of investment licences approved by ZIDA in the first half of 2026.',
    ],
    focus: [
      { name: 'Chrome', status: 'conditions', body: 'Investment in ferrochrome and other processing. Raw chrome exports are no longer permitted.' },
      { name: 'Lithium', status: 'conditions', body: 'Processing investment, and projects with a processing plan. Large producers must build lithium sulphate capacity by January 2027.' },
      { name: 'Gold', status: 'large', body: 'Small and medium gold mining is reserved for Zimbabweans. MZM works only on large-scale projects, with all gold sold to Fidelity Gold Refinery.' },
      { name: 'Copper and other critical minerals', status: 'enquiries', body: 'Copper, nickel, platinum group metals, graphite and others, subject to the State shareholding rules once published.' },
    ],
    services: [
      'Title and ownership checks with the Ministry of Mines before any introduction',
      'Project set-up for processing inside Zimbabwe',
      'Introductions to Asian processing technology and equipment suppliers',
      'Buyer introductions for licensed producers, with sales through MMCZ or Fidelity Gold Refinery',
      'Power planning through our energy sector work',
    ],
    zimbabwe: [
      'Ministry of Mines beneficiation agenda (2026)',
      'Critical minerals declaration (22 May 2026)',
      'National Development Strategy 2 (2026 to 2030)',
    ],
    vietnam: [
      'GoGlobal Programme (Decision 626/QD-TTg, 2026): support for Vietnamese firms investing abroad',
      'A growing steel industry that imports ferroalloys',
    ],
    zimInstitutions: [
      ['Ministry of Mines and Mining Development', 'Mining titles, export approvals and processing plans'],
      ['Minerals Marketing Corporation of Zimbabwe (MMCZ)', 'Sole marketing and export agent for minerals other than gold and silver'],
      ['Fidelity Gold Refinery', 'Sole buyer, refiner and exporter of gold'],
      ['Zimbabwe Investment and Development Agency (ZIDA)', 'Investment licences'],
    ],
    vnInstitutions: [
      ['Vietnam Steel Association', 'Steelmakers that buy ferroalloys'],
      ['Ministry of Finance', 'Registration of outward investment (Decree 103/2026)'],
      ['State Bank of Vietnam', 'Foreign exchange registration for outward investment (Circular 34/2026)'],
    ],
    boundaries:
      'Artisanal mining, small and medium gold mining, quarrying and granite mining are reserved for Zimbabwean citizens. MZM works only on large-scale projects and processing. MZM does not buy or sell minerals itself: every sale goes through MMCZ or Fidelity Gold Refinery.',
  },
  {
    slug: 'agriculture',
    href: '/business/agriculture',
    num: '02',
    title: 'Agriculture and Agro-processing',
    image: '/images/practice-agriculture.jpg',
    imageAlt: 'Tobacco growing in a field',
    summary: 'Investment in processing, storage and cold chain, and Asian buyers for Zimbabwean tobacco, cotton, nuts and fruit.',
    contact: 'projects@mzmafrica.com',
    lead: 'Agriculture is the base of today’s trade with Vietnam: tobacco makes up almost all of what Zimbabwe sells there. MZM works in both directions, bringing Asian investment into processing and Zimbabwean produce to Asian buyers.',
    context: [
      'Tobacco makes up almost all of Zimbabwe’s current exports to Vietnam.',
      'Vietnam imported 1.71 million tonnes of cotton in 2025, mainly from the United States, Brazil and Australia, with no significant African supplier.',
      'Zimbabwe’s horticulture growth plan focuses on blueberries, avocados, macadamia, citrus and coffee for export.',
    ],
    focus: [
      { name: 'Tobacco', status: 'trade', body: 'Flue-cured leaf sold through licensed Zimbabwean merchants to Vietnam’s licensed manufacturers, who import within an annual quota.' },
      { name: 'Cotton', status: 'enquiries', body: 'Lint for Vietnamese spinning mills, from ginners registered with the Agricultural Marketing Authority.' },
      { name: 'Nuts and fruit', status: 'access', body: 'Macadamia and processed nuts now. Fresh blueberries, citrus and avocados once Vietnam completes its plant health review for each fruit.' },
      { name: 'Agro-processing investment', status: 'open', body: 'Packhouses, cold chain, and oilseed, dairy and fruit processing.' },
    ],
    services: [
      'Investment in fruit, oilseed, dairy and cotton processing',
      'Cold chain, packhouse and storage investment',
      'Introductions to Vietnamese processing machinery suppliers',
      'Asian buyer introductions for tobacco, cotton, nuts and processed foods',
      'Guidance on Vietnamese import rules, product by product',
    ],
    zimbabwe: [
      'National Development Strategy 2 (2026 to 2030)',
      'Horticulture growth plan to 2030',
      'ZNIDP II: oilseeds, dairy, textiles and leather value chains',
    ],
    vietnam: [
      'GoGlobal Programme: agriculture and food processing named as priority sectors',
      'Processing industries that rely on imported cotton, tobacco and nuts',
    ],
    zimInstitutions: [
      ['Ministry of Lands, Agriculture, Fisheries, Water and Rural Development', 'Agricultural policy and production'],
      ['Tobacco Industry and Marketing Board (TIMB)', 'Licenses tobacco merchants, contractors and auction floors'],
      ['Agricultural Marketing Authority (AMA)', 'Registers cotton ginners and merchants'],
      ['ZimTrade', 'Export development and buyer programmes'],
    ],
    vnInstitutions: [
      ['Vietnam Tobacco Association', 'Licensed tobacco manufacturers and buyers'],
      ['Vietnam Cotton and Spinning Association (VCOSA)', 'Spinning mills that buy cotton'],
      ['Plant Production and Protection Department', 'Plant health market access for fresh fruit'],
    ],
    boundaries:
      'Tobacco grading and packaging are reserved for Zimbabwean citizens, and grain milling is open to foreign investors only above set investment and employment thresholds. MZM works with licensed Zimbabwean merchants and processors in these areas, and focuses on processing, storage and supply contracts, not land.',
  },
  {
    slug: 'energy',
    href: '/business/energy',
    num: '03',
    title: 'Energy',
    image: '/images/practice-energy.jpg',
    imageAlt: 'Solar panels installed on grassland',
    summary: 'Solar and storage for mines, processors and factories, with equipment sourced from Asian manufacturers.',
    contact: 'projects@mzmafrica.com',
    lead: 'Reliable power is one of the main limits on mining, processing and industrial growth in Zimbabwe. MZM connects operations that need power with Asian equipment suppliers and developers.',
    context: [
      'Government has directed that new smelting capacity and large mines provide their own power.',
      'Rules gazetted in July 2026 remove licence fees for renewable plants under 10 MW and let own-use plants from 100 kW to 10 MW register rather than apply for a licence.',
      'Energy projects led ZIDA’s investment approvals by value in the first quarter of 2026.',
    ],
    focus: [
      { name: 'Captive solar for mines', status: 'open', body: 'Solar plants for mines and smelters that must supply their own power.' },
      { name: 'Storage and hybrid systems', status: 'open', body: 'Battery storage and hybrid systems for operations that need power around the clock.' },
      { name: 'Own-use plants for industry', status: 'open', body: 'Plants from 100 kW to 10 MW for agro-processors and factories, registered with ZERA.' },
      { name: 'Grid and distribution projects', status: 'conditions', body: 'Private distribution and virtual net metering, opened by the 2026 rules and licensed by ZERA.' },
    ],
    services: [
      'Solar and storage sourcing for mining and agro-processing clients',
      'Introductions to Asian solar equipment manufacturers',
      'Supplier checks and procurement documents',
      'Introductions between Zimbabwean projects and licensed power developers',
      'Power planning for MZM’s mining and agriculture clients',
    ],
    zimbabwe: [
      'National Development Strategy 2: energy infrastructure',
      '2026 licensing and net metering reforms',
      'Own-power direction for new smelting capacity',
    ],
    vietnam: [
      'A major solar panel manufacturing and export base',
      'GoGlobal Programme: support for Vietnamese firms investing abroad',
    ],
    zimInstitutions: [
      ['Ministry of Energy and Power Development', 'Energy policy'],
      ['Zimbabwe Energy Regulatory Authority (ZERA)', 'Licences and registration for power generation and distribution'],
      ['Zimbabwe Investment and Development Agency (ZIDA)', 'Investment licences'],
    ],
    vnInstitutions: [
      ['Vietnam Energy Association', 'Industry body for power and renewables'],
      ['Vietnam Trade Promotion Agency (VIETRADE)', 'Runs the GoGlobal Programme Office'],
    ],
    boundaries:
      'MZM advises and connects; it does not build or operate power plants. Generation projects are licensed or registered with ZERA by the developer or operator, with MZM coordinating the suppliers and partners.',
  },
  {
    slug: 'manufacturing',
    href: '/business/manufacturing',
    num: '04',
    title: 'Manufacturing and Industrial Parks',
    image: '/images/practice-manufacturing.jpg',
    imageAlt: 'Machinery inside a factory',
    summary: 'Site selection and Special Economic Zone entry for Asian manufacturers in textiles, leather, food and metal processing.',
    contact: 'projects@mzmafrica.com',
    lead: 'Industrialisation is at the centre of Zimbabwe’s development strategy, and Vietnam’s GoGlobal Programme names the same industries for its firms abroad. MZM helps Asian manufacturers choose a site, get licensed and start operating in Zimbabwe.',
    context: [
      'The Zimbabwe National Industrial Development Policy II (2026 to 2030) aims to more than double manufactured exports.',
      'Zimbabwe has six public Special Economic Zones, including manufacturing zones in Bulawayo and an agro-processing and beneficiation zone in Mutare.',
      'ZIDA lists a five-year corporate tax holiday and duty rebates on capital equipment for Special Economic Zone investors.',
    ],
    focus: [
      { name: 'Textiles and garments', status: 'open', body: 'Spinning and garment plants close to Zimbabwean cotton.' },
      { name: 'Leather and footwear', status: 'open', body: 'Tanning, footwear and leather goods, using Zimbabwean hides.' },
      { name: 'Food and agro-processing', status: 'open', body: 'Food, oilseed and dairy processing for local and regional markets.' },
      { name: 'Metal processing', status: 'open', body: 'Steel and metal processing linked to Zimbabwe’s beneficiation policy.' },
    ],
    services: [
      'Site selection across Special Economic Zones and industrial parks',
      'Special Economic Zone licensing support through ZIDA',
      'Briefings on regulation, incentives and labour',
      'Introductions to local partners, suppliers and service providers',
      'Power and raw material planning through our energy and agriculture work',
    ],
    zimbabwe: [
      'ZNIDP II (2026 to 2030)',
      'Local Content Strategy (2026 to 2035)',
      'Special Economic Zones under the ZIDA Act',
    ],
    vietnam: [
      'GoGlobal Programme: textiles, footwear, food processing and mechanical engineering named as priority sectors',
      'Target of in-depth support for 100 Vietnamese firms investing abroad by 2030',
    ],
    zimInstitutions: [
      ['Ministry of Industry and Commerce', 'Industrial policy and reserved-sector permits'],
      ['Zimbabwe Investment and Development Agency (ZIDA)', 'Investment and Special Economic Zone licences'],
      ['Confederation of Zimbabwe Industries', 'Industry body for manufacturers'],
    ],
    vnInstitutions: [
      ['Vietnam Textile and Apparel Association (VITAS)', 'Textile and garment manufacturers'],
      ['Leather, Footwear and Handbag Association (LEFASO)', 'Footwear and leather goods manufacturers'],
      ['Vietnam Chamber of Commerce and Industry (VCCI)', 'National business federation'],
    ],
    boundaries:
      'Manufacturing investments take longer and need several approvals. MZM works with licensed legal and tax advisers on every engagement and does not offer incentives or approvals that only government agencies can grant.',
  },
  {
    slug: 'tourism',
    href: '/business/tourism',
    num: '05',
    title: 'Tourism and Hospitality',
    image: '/images/practice-tourism.jpg',
    imageAlt: 'Victoria Falls at sunset',
    summary: 'Hotel, lodge and conference investment for Zimbabwe’s main tourism destinations.',
    contact: 'projects@mzmafrica.com',
    lead: 'Tourism is one of the pillars of Zimbabwe’s growth strategy, built around Victoria Falls and five UNESCO World Heritage Sites. MZM introduces hospitality investors and operators to the projects that growth needs.',
    context: [
      'In November 2025 the government cut tourism registration fees and announced tax incentives for accommodation, conferencing, aviation and eco-tourism.',
      'The Masuwe Special Economic Zone in Victoria Falls is designated for tourism and financial services.',
      'Zimbabwe co-hosts the ICC Men’s Cricket World Cup in 2027.',
    ],
    focus: [
      { name: 'Hotels and lodges', status: 'open', body: 'New and upgraded accommodation at Victoria Falls, Hwange, Kariba and the eastern highlands.' },
      { name: 'Conference facilities', status: 'open', body: 'Conference and events venues, now covered by new tax incentives.' },
      { name: 'Eco-tourism', status: 'open', body: 'Low-impact lodges and camps near national parks and heritage sites.' },
      { name: 'Tourism zone projects', status: 'open', body: 'Projects in the Masuwe Special Economic Zone, licensed through ZIDA.' },
    ],
    services: [
      'Hospitality investment introductions',
      'Market entry support for Asian hotel operators',
      'Special Economic Zone licensing support through ZIDA',
      'Registration and grading with the Zimbabwe Tourism Authority',
      'Partner and supplier checks',
    ],
    zimbabwe: [
      'National Development Strategy 2: tourism and investment promotion',
      'National tourism growth strategy',
      'Tourism Special Economic Zones',
    ],
    vietnam: [
      'GoGlobal Programme: support for Vietnamese services and distribution firms abroad',
      'Vietnamese groups expanding into African real estate and hospitality',
    ],
    zimInstitutions: [
      ['Ministry of Tourism and Hospitality Industry', 'Tourism policy'],
      ['Zimbabwe Tourism Authority', 'Registers, grades and licenses tourism operators'],
      ['Zimbabwe Investment and Development Agency (ZIDA)', 'Investment and Special Economic Zone licences'],
    ],
    vnInstitutions: [
      ['Vietnam Chamber of Commerce and Industry (VCCI)', 'National business federation'],
      ['Vietnam Trade Promotion Agency (VIETRADE)', 'Runs the GoGlobal Programme Office'],
    ],
    boundaries:
      'Travel agencies and passenger transport, except international brands, are reserved for Zimbabwean citizens. MZM works on hotels, lodges and conference facilities, and introduces Zimbabwean partners for reserved activities.',
  },
]

export const getPractice = (slug) => practices.find((p) => p.slug === slug)
