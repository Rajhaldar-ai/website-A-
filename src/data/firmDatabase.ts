/**
 * SOURCE A — CLIENT INFORMATION DATABASE
 * All factual content, credentials, services, locations, statistics, and explicit placeholders
 * are centralized here to guarantee 100% factual integrity with zero invented claims.
 */

export interface ServiceItem {
  id: string;
  title: string;
  summary: string;
  scopeDetails: string[];
  ctaLabel: string;
  mandateValue: string;
}

export interface ServiceGroup {
  number: string;
  id: string;
  categoryTitle: string;
  eyebrow: string;
  editorialLead: string;
  services: ServiceItem[];
  primaryCta: string;
  mandateKey: string;
}

export interface IndustrySector {
  index: string;
  name: string;
  category: string;
  advisoryFocus: string;
  relevantPracticeAreas: string[];
  featured?: boolean;
}

export interface ProcessStage {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
}

export interface ArticlePlaceholderSlot {
  slotId: string;
  tier: 'lead' | 'secondary' | 'archive';
  category: string;
  placeholderTitle: string;
  placeholderDate: string;
  editorialNote: string;
  sourceReference: string;
}

export interface FaqEntry {
  id: string;
  question: string;
  answer: string;
  isSuppliedOfficial: boolean;
  verificationTag: string;
}

export const FIRM_DATABASE = {
  identity: {
    firmName: 'Rajinder Arora & Associates',
    designation: 'Chartered Accountants',
    educationalInitiative: 'GST Research Foundation',
    officialTagline: 'Chartered Accountants · Tax Counsel & GST Research Foundation',
    foundationTagline: 'Advancing Practical GST Jurisprudence, Portal Mastery & Professional Training',
  },

  founder: {
    name: 'CA Rajender Arora',
    credentials: 'FCA, LLB',
    credentialBreakdown: [
      'Fellow Member, Institute of Chartered Accountants of India (FCA)',
      'Bachelor of Laws (LLB) — Statutory & Appellate Jurisprudence',
      'Founder, Rajinder Arora & Associates — Chartered Accountants',
      'Founder & Lead Faculty, GST Research Foundation',
    ],
    biography: [
      'CA Rajender Arora (FCA, LLB) leads Rajinder Arora & Associates at the intersection of Chartered Accountancy and statutory tax law. Combining fellowship in accountancy with formal legal training, his practice concentrates on complex GST Show Cause Notice (SCN) defense, appellate representation, Input Tax Credit (ITC) jurisprudence, and corporate assurance.',
      'Beyond chambers practice, he established the GST Research Foundation to bridge the divide between statutory enactment and real-world practitioner execution—delivering structured training across the GST Portal, Tally accounting systems, case studies, and GST Appellate Tribunal (GSTAT) readiness.',
    ],
    verifiedMetricsNote:
      'Supplied public-profile authorship & practice figures (retained as editable client-verified records):',
  },

  statistics: [
    {
      value: '20+ Years',
      label: 'Professional Practice',
      context: 'Chartered Accountancy, Tax Advisory & Statutory Representation',
      verificationStatus: 'Supplied Client Record',
    },
    {
      value: '59+',
      label: 'Professional Contributions',
      context: 'Published Tax Commentaries, GST Modules & Statutory Analyses',
      verificationStatus: 'Verified Public Profile (TaxGuru)',
    },
    {
      value: '1.14M+',
      label: 'Readership Views',
      context: 'Cumulative readership across published tax & GST jurisprudence articles',
      verificationStatus: 'Verified Public Profile (TaxGuru)',
    },
    {
      value: '2 Locations',
      label: 'New Delhi Chambers',
      context: 'Shastri Nagar & DLF Tower, Moti Nagar, Delhi',
      verificationStatus: 'Supplied Office Locations',
    },
  ],

  hero: {
    eyebrow: 'RAJINDER ARORA & ASSOCIATES · CHARTERED ACCOUNTANTS',
    headline: 'Jurisprudential Precision in Tax Litigation, Audit & Corporate Advisory.',
    supportingParagraph:
      'Led by CA Rajender Arora (FCA, LLB), our chambers integrate Chartered Accountancy rigor with formal legal representation—advising enterprises on GST Show Cause Notices, appellate defense, statutory & IT/CISA audits, corporate finance, and practitioner education through the GST Research Foundation.',
    primaryCta: 'Book a Corporate Consultation',
    secondaryCtas: [
      'Hire a Tax Counsel',
      'Consult on GST SCN Notices',
      'Submit Case Files / Notice for Evaluation',
    ],
  },

  assets: {
    taxLawArchive: '/src/assets/images/editorial_tax_law_archive_1790868660067.jpg',
    corporateAuditBoardroom: '/src/assets/images/corporate_audit_architecture_1790868673650.jpg',
    firmChambersInterior: '/src/assets/images/firm_chambers_interior_1790868685050.jpg',
    gstFoundationHall: '/src/assets/images/gst_foundation_lecture_hall_1790868697101.jpg',
  },

  serviceGroups: [
    {
      number: '01',
      id: 'tax-litigation',
      categoryTitle: 'Tax Consultancy & Litigation',
      eyebrow: 'PRACTICE PILLAR I · STATUTORY DEFENSE & REPRESENTATION',
      editorialLead:
        'Structured legal and accounting representation across adjudication, appeals, Input Tax Credit (ITC) disputes, and enforcement proceedings under GST.',
      primaryCta: 'Consult on GST SCN Notices',
      mandateKey: 'Tax Consultancy & GST SCN Litigation',
      services: [
        {
          id: 'gst-scn-appeals',
          title: 'GST SCN Management & Appeals',
          summary:
            'Comprehensive jurisprudential review, reply drafting, and appellate representation for Show Cause Notices (SCNs) and adjudication orders.',
          scopeDetails: [
            'Detailed statutory analysis of Show Cause Notices & demand summaries',
            'Drafting of replies grounded in GST law and judicial precedents',
            'Representation before adjudicating and appellate authorities',
          ],
          ctaLabel: 'Consult on GST SCN Notices',
          mandateValue: 'GST SCN Management & Appeals',
        },
        {
          id: 'itc-optimization-refunds',
          title: 'ITC Optimization & Refund Filing',
          summary:
            'Advisory on Input Tax Credit eligibility, reconciliation protocols, and end-to-end representation for GST refund claims.',
          scopeDetails: [
            'ITC eligibility review & statutory reconciliation compliance',
            'Export, inverted duty structure, and excess balance refund filing',
            'Defense against ITC reversal notices and blocking proceedings',
          ],
          ctaLabel: 'Book a Corporate Consultation',
          mandateValue: 'ITC Optimization & Refund Filing',
        },
        {
          id: 'search-seizure-transit',
          title: 'Search / Seizure / Transit Detention Defense',
          summary:
            'Time-critical legal and procedural counsel during departmental inspections, search proceedings, and e-way bill transit detentions.',
          scopeDetails: [
            'Representation during search, inspection, and seizure proceedings',
            'Transit detention defense & goods release documentation',
            'Post-proceedings advisory and statutory notice representation',
          ],
          ctaLabel: 'Hire a Tax Counsel',
          mandateValue: 'Search / Seizure / Transit Detention Defense',
        },
      ],
    },
    {
      number: '02',
      id: 'auditing-finance',
      categoryTitle: 'Auditing & Corporate Finance',
      eyebrow: 'PRACTICE PILLAR II · ASSURANCE, GOVERNANCE & CAPITAL',
      editorialLead:
        'Independent statutory assurance, operational risk examination, information systems auditing, and corporate financial structuring.',
      primaryCta: 'Book a Corporate Consultation',
      mandateKey: 'Statutory, Retail & IT/CISA Auditing',
      services: [
        {
          id: 'statutory-audits',
          title: 'Statutory Audits',
          summary:
            'Independent examination of financial statements in accordance with applicable corporate and accounting standards.',
          scopeDetails: ['Statutory financial statement assurance', 'Regulatory reporting compliance'],
          ctaLabel: 'Inquire on Statutory Audit',
          mandateValue: 'Statutory Audits',
        },
        {
          id: 'risk-assurance',
          title: 'Risk Assurance',
          summary:
            'Evaluation of internal control frameworks, enterprise risk exposure, and governance safeguards.',
          scopeDetails: ['Internal control evaluation', 'Operational risk & process assurance'],
          ctaLabel: 'Inquire on Risk Assurance',
          mandateValue: 'Risk Assurance',
        },
        {
          id: 'retail-audits',
          title: 'Retail Audits',
          summary:
            'Specialized operational, inventory, and revenue verification audits tailored to retail and trading networks.',
          scopeDetails: ['Store-level & inventory control review', 'Multi-location retail compliance'],
          ctaLabel: 'Inquire on Retail Audits',
          mandateValue: 'Retail Audits',
        },
        {
          id: 'it-cisa-auditing',
          title: 'IT / CISA Auditing',
          summary:
            'Information systems auditing, ERP control verification, and technology governance aligned with CISA methodologies.',
          scopeDetails: ['Information systems & ERP control audits', 'Data integrity & IT compliance review'],
          ctaLabel: 'Inquire on IT / CISA Auditing',
          mandateValue: 'IT / CISA Auditing',
        },
        {
          id: 'corporate-law-advisory',
          title: 'Corporate Law Advisory',
          summary:
            'Counsel on corporate governance, statutory entity compliance, and regulatory filings.',
          scopeDetails: ['Corporate governance & entity compliance', 'Statutory advisory & documentation'],
          ctaLabel: 'Inquire on Corporate Law',
          mandateValue: 'Corporate Law Advisory',
        },
        {
          id: 'project-financing',
          title: 'Project Financing',
          summary:
            'Structuring financial documentation, viability assessments, and advisory for corporate project financing.',
          scopeDetails: ['Project report preparation & financial modeling', 'Institutional financing documentation'],
          ctaLabel: 'Inquire on Project Financing',
          mandateValue: 'Project Financing',
        },
      ],
    },
    {
      number: '03',
      id: 'gst-training-service',
      categoryTitle: 'GST Courses & Training',
      eyebrow: 'PRACTICE PILLAR III · GST RESEARCH FOUNDATION',
      editorialLead:
        'Structured professional education equipping accountants, commerce graduates, and tax practitioners with practical command over GST law, portal operations, and appellate procedure.',
      primaryCta: 'Explore GST Research Foundation',
      mandateKey: 'GST Research Foundation — Course Inquiry',
      services: [
        {
          id: 'professional-gst-courses',
          title: 'Professional GST Courses & Practical Training',
          summary:
            'Applied curriculum covering statutory provisions, live GST Portal workflows, Tally integration, real-world Case Studies, and GSTAT-related learning.',
          scopeDetails: [
            'Live GST Portal compliance & filing mechanics',
            'Tally accounting integration for GST',
            'Applied Case Studies & GSTAT-related procedural learning',
          ],
          ctaLabel: 'Request Curriculum Details',
          mandateValue: 'GST Research Foundation — Course Inquiry',
        },
      ],
    },
  ] as ServiceGroup[],

  aboutFirm: {
    eyebrow: 'ABOUT THE FIRM',
    headline: 'An Advisory Practice Built on Statutory Rigor and Dual-Discipline Counsel.',
    leadParagraph:
      'Rajinder Arora & Associates is a New Delhi Chartered Accountancy practice advising corporates, institutions, emerging enterprises, and fellow tax practitioners across direct/indirect tax litigation, assurance, and corporate compliance.',
    bodyParagraphs: [
      'Modern tax administration—particularly under the Goods and Services Tax (GST) regime—demands both granular accounting reconciliation and disciplined legal interpretation. Our practice integrates these dimensions under one roof, handling complex GST Show Cause Notices (SCNs), Input Tax Credit (ITC) disputes, search and transit detention proceedings, and statutory audits.',
      'Complementing our advisory and litigation chambers, the firm spearheads the GST Research Foundation: an educational initiative dedicated to practical GST training, portal execution, Tally implementation, and appellate preparedness.',
    ],
    pillars: [
      {
        title: 'Tax Advisory & Litigation',
        detail: 'SCN replies, appellate briefs, ITC optimization, refund claims, and search/seizure/transit defense.',
      },
      {
        title: 'Assurance & Corporate Advisory',
        detail: 'Statutory, Risk, Retail, and IT/CISA audits alongside Corporate Law advisory and Project Financing.',
      },
      {
        title: 'GST Research Foundation',
        detail: 'Practical professional training covering the GST Portal, Tally, Case Studies, and GSTAT-related learning.',
      },
    ],
  },

  industries: [
    {
      index: '01',
      name: 'E-Commerce',
      category: 'Digital Commerce & Marketplaces',
      advisoryFocus:
        'TCS compliance, multi-state GST registration, high-volume ITC reconciliation, and portal refund filings.',
      relevantPracticeAreas: ['ITC Optimization & Refund Filing', 'GST SCN Management', 'IT / CISA Auditing'],
      featured: true,
    },
    {
      index: '02',
      name: 'Retail & Trading',
      category: 'Distribution & Merchandising',
      advisoryFocus:
        'Retail store audits, inventory verification, supplier ITC chain compliance, and transit documentation.',
      relevantPracticeAreas: ['Retail Audits', 'ITC Optimization', 'Transit Detention Defense'],
      featured: true,
    },
    {
      index: '03',
      name: 'Logistics',
      category: 'Supply Chain & Freight',
      advisoryFocus:
        'E-way bill compliance, transit detention representation, seizure defense, and fleet tax structuring.',
      relevantPracticeAreas: ['Search / Seizure / Transit Detention Defense', 'GST SCN Management & Appeals'],
      featured: true,
    },
    {
      index: '04',
      name: 'Banking & Financial Services',
      category: 'Financial Institutions',
      advisoryFocus:
        'Statutory assurance, risk assurance, IT/CISA systems auditing, and regulatory tax compliance.',
      relevantPracticeAreas: ['Statutory Audits', 'IT / CISA Auditing', 'Risk Assurance'],
    },
    {
      index: '05',
      name: 'MNCs',
      category: 'Multinational Corporations',
      advisoryFocus:
        'Cross-border GST refund advisory, statutory assurance, corporate law governance, and complex litigation defense.',
      relevantPracticeAreas: ['GST SCN Management & Appeals', 'Statutory Audits', 'Corporate Law Advisory'],
    },
    {
      index: '06',
      name: 'Mid-sized Corporates',
      category: 'Established Enterprises',
      advisoryFocus:
        'Comprehensive statutory auditing, internal risk controls, project financing, and ongoing tax counsel.',
      relevantPracticeAreas: ['Statutory Audits', 'Project Financing', 'Risk Assurance'],
    },
    {
      index: '07',
      name: 'Startups',
      category: 'Emerging Growth Entities',
      advisoryFocus:
        'Entity structuring, corporate law compliance, initial GST registration & ITC frameworks, and financing readiness.',
      relevantPracticeAreas: ['Corporate Law Advisory', 'Project Financing', 'ITC Optimization'],
    },
    {
      index: '08',
      name: 'NGOs / Non-Profits',
      category: 'Social & Institutional Sector',
      advisoryFocus:
        'Statutory audit compliance, governance assurance, and specialized tax advisory for non-profit institutions.',
      relevantPracticeAreas: ['Statutory Audits', 'Risk Assurance', 'Corporate Law Advisory'],
    },
    {
      index: '09',
      name: 'Professional Tax Practitioners',
      category: 'Peer Counsel & Professional Education',
      advisoryFocus:
        'Special-counsel collaboration on complex GST litigation, GSTAT readiness, and advanced practitioner training via GST Research Foundation.',
      relevantPracticeAreas: ['GST Courses & Training', 'GST SCN Management & Appeals', 'GSTAT Learning'],
      featured: true,
    },
  ] as IndustrySector[],

  differentiators: [
    {
      number: '01',
      theme: 'Dual Discipline',
      title: 'FCA + LLB: Financial Mastery Paired with Legal Jurisprudence',
      description:
        'Tax litigation sits at the boundary of accounting records and statutory interpretation. Led by CA Rajender Arora (FCA, LLB), the firm synthesizes Chartered Accountancy audit precision with formal legal drafting and representation.',
      proofLabel: 'Verified Qualification · Fellow Chartered Accountant (FCA) & Bachelor of Laws (LLB)',
    },
    {
      number: '02',
      theme: 'Intellectual Contribution',
      title: '59+ Published Contributions & 1.14M+ Readership Views',
      description:
        'Sustained scholarly and practical engagement with Indian tax law through 59+ published articles, GST compliance analyses, and instructional modules—reaching over 1.14 million cumulative views on professional platforms including TaxGuru.',
      proofLabel: 'Supplied Public-Profile Record · TaxGuru & GST Research Foundation Modules',
    },
    {
      number: '03',
      theme: 'Professional Recognition',
      title: 'Public-Profile & Institutional Credentials',
      description:
        'Recognized across professional tax forums and practitioner education initiatives for contributions to GST literacy, statutory commentary, and CISA/systems audit methodology.',
      proofLabel: 'Note: Client-provided / public-profile recognition claims subject to final client verification',
    },
  ],

  process: [
    {
      number: '01',
      title: 'Intake & Document Retrieval',
      subtitle: 'CHRONOLOGICAL RECORD & STATUTORY AUDIT TRAIL',
      description:
        'Systematic compilation of Show Cause Notices (SCNs), DRC forms, GST portal ledgers, GSTR-2A/2B reconciliations, audit observations, and underlying commercial contracts.',
      deliverables: ['Notice & limitation period verification', 'Complete documentary & ledger indexing'],
    },
    {
      number: '02',
      title: 'Jurisprudential Review',
      subtitle: 'STATUTORY PROVISIONS & JUDICIAL PRECEDENT ANALYSIS',
      description:
        'Evaluation of departmental allegations against CGST/SGST/IGST statutory provisions, CBIC circulars, notifications, and binding High Court / Supreme Court jurisprudence.',
      deliverables: ['Statutory & procedural validity assessment', 'Precedent mapping & risk matrix'],
    },
    {
      number: '03',
      title: 'Drafting & Strategy',
      subtitle: 'EVIDENTIARY REPLIES, APPEALS & RECONCILIATION BRIEFS',
      description:
        'Preparation of legally structured SCN replies, appellate memorandums, writ/tribunal briefs, and supporting CA-certified financial reconciliations.',
      deliverables: ['Comprehensive legal & factual submission', 'Structured annexures & ledger schedules'],
    },
    {
      number: '04',
      title: 'Authority Representation',
      subtitle: 'APPEARANCE BEFORE ADJUDICATING & APPELLATE FORUMS',
      description:
        'Personal hearing representation before adjudicating officers, appellate authorities, and tribunal forums to articulate both the legal ratio and accounting evidence.',
      deliverables: ['Personal hearing advocacy', 'Post-hearing written submissions & order review'],
    },
  ] as ProcessStage[],

  gstFoundation: {
    name: 'GST Research Foundation',
    eyebrow: 'ASSOCIATED EDUCATIONAL INITIATIVE',
    tagline: 'Practical GST Education, Portal Execution & Appellate Readiness',
    overview:
      'An educational initiative by Rajinder Arora & Associates dedicated to transforming theoretical GST law into practical workplace competence for Chartered Accountancy students, corporate accountants, commerce graduates, and practicing tax professionals.',
    curriculumPillars: [
      {
        code: 'MOD 01',
        title: 'GST Portal Operations & Live Compliance',
        detail: 'End-to-end practical navigation of the official GST Portal, registration workflows, return filing, and ledger management.',
      },
      {
        code: 'MOD 02',
        title: 'Tally Prime & Accounting Integration',
        detail: 'Hands-on GST configuration, voucher entry, e-invoicing, e-way bill generation, and reconciliation inside Tally.',
      },
      {
        code: 'MOD 03',
        title: 'Real-World Case Studies & SCN Drafting',
        detail: 'Analysis of practical departmental notices, ITC disputes, and drafting structured replies using real case scenarios.',
      },
      {
        code: 'MOD 04',
        title: 'GSTAT-Related Learning & Appellate Procedure',
        detail: 'Foundational and advanced training on GST Appellate Tribunal (GSTAT) frameworks, filing procedures, and litigation readiness.',
      },
    ],
    placeholders: {
      upcomingBatchDate: '[COURSE DATE]',
      registrationUrl: '[COURSE REGISTRATION LINK]',
      feeStructure: '[COURSE FEE — CONTACT FOR DETAILS]',
    },
  },

  insightsArchive: {
    eyebrow: 'INSIGHTS & STATUTORY COMMENTARY',
    headline: 'Tax Jurisprudence & Practice Archive',
    subheadline:
      'Reflecting 59+ published professional contributions and 1.14M+ cumulative readership views across TaxGuru and professional forums. Below is the structured publication layout ready for live client article integration.',
    publicProfileReference: {
      platformName: 'TaxGuru — CA Rajender Arora Author Archive',
      contributionsCount: '59+ Professional Contributions',
      viewsCount: '1.14M+ Views',
      url: 'https://taxguru.in/',
    },
    sampleSlots: [
      {
        slotId: 'ARCHIVE-SLOT-01',
        tier: 'lead',
        category: 'GST Litigation & SCN Defense',
        placeholderTitle: '[SAMPLE ARTICLE PLACEHOLDER — INSERT OFFICIAL TAXGURU / FIRM ARTICLE TITLE]',
        placeholderDate: '[PUBLICATION DATE]',
        editorialNote:
          'Lead monograph slot reserved for verified articles authored by CA Rajender Arora (FCA, LLB) on GST Show Cause Notice adjudication, limitation periods, or appellate jurisprudence.',
        sourceReference: 'Client Database Slot · Ready for Verified TaxGuru Article Import',
      },
      {
        slotId: 'ARCHIVE-SLOT-02',
        tier: 'secondary',
        category: 'ITC Jurisprudence & Refunds',
        placeholderTitle: '[SAMPLE ARTICLE PLACEHOLDER — ITC & REFUND ANALYSIS]',
        placeholderDate: '[PUBLICATION DATE]',
        editorialNote:
          'Secondary briefing slot structured for published commentary on Input Tax Credit (ITC) reconciliation, rule reversals, and export/inverted duty refund filings.',
        sourceReference: 'Client Database Slot · Ready for Verified Article Import',
      },
      {
        slotId: 'ARCHIVE-SLOT-03',
        tier: 'secondary',
        category: 'GSTAT & Appellate Practice',
        placeholderTitle: '[SAMPLE ARTICLE PLACEHOLDER — GSTAT PROCEDURAL COMMENTARY]',
        placeholderDate: '[PUBLICATION DATE]',
        editorialNote:
          'Secondary briefing slot structured for educational modules and statutory updates from the GST Research Foundation regarding GSTAT readiness.',
        sourceReference: 'Client Database Slot · Ready for Verified Article Import',
      },
      {
        slotId: 'ARCHIVE-SLOT-04',
        tier: 'archive',
        category: 'Search, Seizure & Transit Detention',
        placeholderTitle: '[SAMPLE ARTICLE PLACEHOLDER — TRANSIT & DETENTION DEFENSE]',
        placeholderDate: '[PUBLICATION DATE]',
        editorialNote: 'Archival row reserved for verified statutory commentary on e-way bill detention and inspection proceedings.',
        sourceReference: 'Client Database Slot',
      },
      {
        slotId: 'ARCHIVE-SLOT-05',
        tier: 'archive',
        category: 'Statutory & IT / CISA Auditing',
        placeholderTitle: '[SAMPLE ARTICLE PLACEHOLDER — CORPORATE & SYSTEMS ASSURANCE]',
        placeholderDate: '[PUBLICATION DATE]',
        editorialNote: 'Archival row reserved for verified commentary on statutory audits, internal controls, and CISA systems assurance.',
        sourceReference: 'Client Database Slot',
      },
    ] as ArticlePlaceholderSlot[],
  },

  faqs: [
    {
      id: 'faq-official-1',
      question: 'Who can enroll in GST courses?',
      answer:
        'The professional GST courses offered through the GST Research Foundation are designed for Chartered Accountancy (CA) students and practitioners, commerce graduates, corporate accounting professionals, tax consultants, and business owners seeking practical command over GST compliance and litigation procedures.',
      isSuppliedOfficial: true,
      verificationTag: 'Official Supplied FAQ',
    },
    {
      id: 'faq-official-2',
      question: 'What modules do the courses cover?',
      answer:
        'The curriculum covers practical, hands-on modules including live GST Portal operations, Tally accounting integration for GST, real-world Case Studies, Input Tax Credit (ITC) & return filing mechanics, and GSTAT-related (GST Appellate Tribunal) procedural learning.',
      isSuppliedOfficial: true,
      verificationTag: 'Official Supplied FAQ',
    },
    {
      id: 'faq-suggested-1',
      question: '[SUGGESTED FUTURE FAQ] How do we initiate an evaluation for a GST Show Cause Notice (SCN)?',
      answer:
        '[SUGGESTED DRAFT FOR CLIENT APPROVAL] You may schedule a corporate consultation or submit your Show Cause Notice (SCN) reference and supporting annexures for an initial jurisprudential and limitation review following our 4-stage Intake, Review, Drafting, and Representation process.',
      isSuppliedOfficial: false,
      verificationTag: 'Suggested Future FAQ — Requires Client Approval',
    },
    {
      id: 'faq-suggested-2',
      question: '[SUGGESTED FUTURE FAQ] Which New Delhi chambers location should we visit for corporate consultations?',
      answer:
        '[SUGGESTED DRAFT FOR CLIENT APPROVAL] Consultations are conducted Monday through Saturday (10:00 AM–7:00 PM) at our primary chambers in Shastri Nagar (Office No. E2/254, 2nd Floor, Delhi - 110052) and our secondary location at DLF Tower, Moti Nagar (4th Floor, Delhi - 110015). Please book an appointment in advance.',
      isSuppliedOfficial: false,
      verificationTag: 'Suggested Future FAQ — Requires Client Approval',
    },
  ] as FaqEntry[],

  contact: {
    primaryAddress: {
      label: 'Primary Chambers — Shastri Nagar',
      line1: 'Office No. E2/254, 2nd Floor',
      line2: 'Shastri Nagar, Delhi - 110052',
      full: 'Office No. E2/254, 2nd Floor, Shastri Nagar, Delhi - 110052',
      coordinatesNote: 'North-Central New Delhi · Commercial & Tax Advisory Chambers',
    },
    secondaryAddress: {
      label: 'Secondary Location — Moti Nagar',
      line1: '4th Floor, DLF Tower',
      line2: 'Moti Nagar, Delhi - 110015',
      full: '4th Floor, DLF Tower, Moti Nagar, Delhi - 110015',
      coordinatesNote: 'West New Delhi Corporate Hub · DLF Tower Commercial Complex',
    },
    hours: {
      days: 'Monday–Saturday',
      time: '10:00 AM–7:00 PM',
      full: 'Monday–Saturday · 10:00 AM–7:00 PM',
    },
    placeholders: {
      phone: '[PHONE NUMBER]',
      email: '[EMAIL ADDRESS]',
    },
    publicProfiles: [
      {
        name: 'TaxGuru Author Profile',
        descriptor: '59+ Contributions · 1.14M+ Views',
        href: 'https://taxguru.in/',
      },
      {
        name: 'LinkedIn Professional Profile',
        descriptor: 'CA Rajender Arora (FCA, LLB)',
        href: 'https://www.linkedin.com/',
      },
    ],
  },
};
