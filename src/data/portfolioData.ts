import { Accolade, ExperienceItem, DegreeItem, AcademicDomain, ProjectItem } from '../types';

import parkingCapstoneImg from '../assets/images/parking_capstone_1789429712672.jpg';
import sqlNormalizationImg from '../assets/images/sql_normalization_1789429724438.jpg';
import erpSimulationImg from '../assets/images/erp_simulation_1789429736526.jpg';
import biDataAnalysisImg from '../assets/images/bi_data_analysis_1789429748642.jpg';
import atmUiPrototypeImg from '../assets/images/atm_ui_prototype_1789429759741.jpg';
import currencyConverterImg from '../assets/images/currency_converter_1789429771496.jpg';

export const CANDIDATE_INFO = {
  name: 'Aries Burasco',
  initials: 'AB',
  title: 'PROCUREMENT & ANALYTICS',
  headline: 'Procurement | Supply Chain | Business Analytics',
  bio: 'Information Systems graduate student with experience in procurement, operations, analytics, and process improvement.',
  aboutMe: "My name is Aries Burasco, I ran Cross Country my first two years of College at Northwest Arkansas Community College. I still run about 30 to 40 miles a week along with being involved in the Young Professionals Group at Mount Comfort during my free time. I was also involved with the Razorbacks For Christ Ministry during my time at the University of Arkansas while doing my Bachelor's and Master's Degrees.",
  location: 'Rogers, AR',
  affiliation: 'U of A Walton College of Business',
  email: 'ariesburasco4@gmail.com',
  linkedin: 'linkedin.com/in/aries-burasco',
  linkedinUrl: 'https://linkedin.com/in/aries-burasco',
  statusPill: 'OPEN TO ANALYTICS & PROCUREMENT ROLES',
  timezone: 'Northwest Arkansas (CST)',
  copyright: '© 2025 Aries Burasco • Sam M. Walton College of Business • Rogers, AR'
};

export const ACCOLADES: Accolade[] = [
  {
    id: 'procurement-impact',
    category: 'PROCUREMENT IMPACT',
    date: 'Cost Optimization',
    icon: 'trending_down',
    title: 'Procurement Impact',
    description: 'Reduced procurement costs by more than 25% through recurring vendor pricing reviews and supplier evaluation.',
    badge: '25%+ cost savings through vendor reviews & evaluation'
  },
  {
    id: 'captain',
    category: 'COLLEGIATE LEADERSHIP',
    date: 'Aug 2021 – Nov 2022',
    icon: 'flag',
    title: 'Team Captain — Cross-Country',
    description: 'Led 10-member squad throughout training, setting the standard that led to a historic 5th place finish at Nationals for Northwest Arkansas Community College.',
    badge: "NWACC Men's Cross-Country collegiate squad leadership"
  },
  {
    id: 'letter-award',
    category: 'ATHLETIC DISTINCTION',
    date: 'Mar 2022, 2023',
    icon: 'military_tech',
    title: 'NWACC Cross-Country Letter Award',
    description: 'Two-time recipient recognized for athletic excellence, stamina, peer mentorship, and collegiate dedication.',
    badge: 'Dual-year varsity recognition for exceptional dedication'
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'wilshar-steel',
    role: 'Procurement Coordinator',
    company: 'Wilshar Steel',
    location: 'Lowell, AR',
    period: 'July 2025 – Present',
    current: true,
    category: 'CURRENT ROLE',
    icon: 'inventory_2',
    highlights: [
      'Achieved over 25% cost savings through periodic vendor pricing reviews.',
      'Coordinated on-time delivery shipments for 90%+ of purchase orders.'
    ],
    tags: ['Vendor Mgmt', 'Logistics'],
    featuredTag: 'Cost Reduction'
  },
  {
    id: 'uark-testing',
    role: 'Testing Services Administrator',
    company: 'University of Arkansas',
    location: 'Fayetteville, AR',
    period: 'February 2025 – May 2025',
    category: 'HIGHER EDUCATION OPERATIONS',
    icon: 'school',
    highlights: [
      'Cut test completion time by 15% via optimized scheduling and resource allocation.',
      'Managed exam intake workflows for 100+ tests weekly with zero compliance incidents.'
    ],
    tags: ['Scheduling', 'Compliance'],
    featuredTag: 'Process Control'
  },
  {
    id: 'nwacc-trainer',
    role: 'Microsoft Office Suite Trainer',
    company: 'Northwest Arkansas Community College (NWACC)',
    location: 'Bentonville, AR',
    period: 'May 2024 – January 2025',
    category: 'ANALYTICS & INSTRUCTION',
    icon: 'terminal',
    highlights: [
      'Drove a 40% Excel & SQL proficiency increase through hands-on analytics training.',
      'Integrated Copilot AI workflows, boosting student output drafting and reporting by 45%.'
    ],
    tags: ['Advanced Excel', 'SQL & Access'],
    featuredTag: 'Copilot AI'
  },
  {
    id: 'jones-center',
    role: 'Member Representative',
    company: 'The Jones Center',
    location: 'Springdale, AR',
    period: 'February 2023 – August 2023',
    category: 'OPERATIONS & COMMUNITY',
    icon: 'groups',
    highlights: [
      'Delivered 13% membership growth and led Splash Bash event generating 20% monthly revenue.',
      'Achieved 25% decrease in wait times via refined party booking operations.'
    ],
    tags: ['Member Operations', 'Event Logistics'],
    featuredTag: 'Revenue Driver'
  }
];

export const DEGREES: DegreeItem[] = [
  {
    id: 'pmis',
    status: 'In Progress',
    statusType: 'in-progress',
    degreeType: 'POST-GRADUATE DEGREE',
    cohortOrDate: 'Cohort 2025 - 2027',
    title: "Master's of Information Systems",
    institution: 'University of Arkansas — Sam M. Walton College of Business',
    gpa: '4.0',
    details: {
      primaryLabel: 'CONCENTRATION',
      primaryTitle: 'Emerging Technology',
      primaryDesc: 'Enterprise Cloud Systems, Big Data Orchestration & Predictive Analytics',
      primaryIcon: 'neurology',
      secondaryLabel: 'TARGET GRADUATION',
      secondaryTitle: 'May 2027',
      secondaryDesc: 'Fayetteville, Arkansas • Full Academic Standing',
      secondaryIcon: 'calendar_month'
    }
  },
  {
    id: 'bsba',
    status: 'Completing May 2025',
    statusType: 'completing',
    degreeType: 'UNDERGRADUATE MAJOR',
    cohortOrDate: 'Sam M. Walton College of Business',
    title: 'Bachelor of Science in Business Administration',
    institution: 'University of Arkansas — Fayetteville, AR',
    gpa: '3.94',
    details: {
      primaryLabel: 'PRIMARY MAJOR',
      primaryTitle: 'Information Systems',
      primaryDesc: 'Specialization in Business Analytics & Enterprise Data Models',
      primaryIcon: 'query_stats',
      secondaryLabel: 'ACADEMIC MINOR',
      secondaryTitle: 'Supply Chain Management',
      secondaryDesc: 'Logistics Optimization, Procurement Strategy & Vendor Analytics',
      secondaryIcon: 'hub'
    }
  },
  {
    id: 'asba',
    status: 'Conferred',
    statusType: 'conferred',
    degreeType: 'FOUNDATIONAL DEGREE',
    cohortOrDate: 'May 2023',
    title: 'Associate of Science in Business Administration',
    institution: 'Northwest Arkansas Community College (NWACC) — Bentonville, AR',
    gpa: '3.80',
    details: {
      primaryLabel: 'CONCENTRATED MAJOR',
      primaryTitle: 'Information Systems',
      primaryDesc: 'Core database schema design, computational logic, and foundational business statistics.',
      primaryIcon: 'terminal',
      secondaryLabel: 'Campus Record',
      secondaryTitle: 'Summa Cum Laude Honors',
      secondaryDesc: 'Varsity Cross-Country Scholar Athlete & Squad Captain',
      secondaryIcon: 'domain'
    }
  }
];

export const ACADEMIC_DOMAINS: AcademicDomain[] = [
  {
    id: 'enterprise-analytics',
    icon: 'database',
    title: 'Enterprise Analytics',
    description: 'Data warehousing, SQL ETL pipeline architecture, predictive statistical modeling, and dashboard visual storytelling for decision support.'
  },
  {
    id: 'supply-chain',
    icon: 'local_shipping',
    title: 'Supply Chain Operations',
    description: 'Quantitative inventory modeling, supplier risk management, carrier freight evaluation, and procurement optimization algorithms.'
  },
  {
    id: 'emerging-tech',
    icon: 'code_blocks',
    title: 'Emerging Technologies',
    description: 'Cloud infrastructure paradigms, robotic process automation (RPA), workflow intelligence, and modern algorithmic governance.'
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'parking-capstone',
    number: '01 / ARCHITECTURE',
    category: 'CAPSTONE • SYSTEMS ARCHITECTURE',
    filterCategory: 'C# & Architecture',
    title: 'Parking System Capstone Project',
    description: 'Built an end-to-end parking management application with user authentication, occupancy tracking, automated pricing logic, and a relational database backend.',
    image: parkingCapstoneImg,
    previewFooter: {
      left: 'HogParkApp Interface',
      right: 'Lot Availability Dashboard',
      icon: 'local_parking'
    },
    callout: {
      label1: 'C# / Architecture',
      text1: 'Full-stack parking bay allocation & transaction processing system with live capacity updates.'
    },
    tags: ['IoT Simulation', 'Architecture', 'Event Logic'],
    details: {
      overview: 'Engineered an end-to-end multi-tier parking allocation architecture designed to handle peak surge volumes, RFID gate sensor inputs, and transactional billing audits.',
      keyAchievements: [
        'Built automated space-occupancy tracking reducing parking lot search latency by 32%',
        'Integrated role-based access control (RBAC) protecting payment records and administrative bypasses',
        'Implemented responsive front-end dashboard visualizing bay capacity in real time'
      ],
      technicalStack: ['C# .NET', 'SQL Server', 'Entity Framework', 'RESTful API', 'Tailwind CSS'],
      architectureNotes: 'Model-View-Controller architecture with repository pattern isolating data access layers from transaction logic.'
    }
  },
  {
    id: 'sql-normalization',
    number: '02',
    category: 'Relational Schemas / 3NF',
    filterCategory: 'Databases',
    title: 'SQL Database Normalization',
    description: 'Designed 3NF normalized schema eliminating redundancy across dense transactional datasets with complex relational joins.',
    image: sqlNormalizationImg,
    previewFooter: {
      left: 'Database Diagram for Construction Warehouse',
      right: 'Tables & Relational Keys',
      icon: 'schema'
    },
    callout: {
      label1: 'Redundancy Reduction',
      text1: 'Region / Constr / 3NF Form',
      label2: '100% Anomaly-Free',
      text2: 'Eliminated insertion, update & deletion anomalies'
    },
    tags: ['SQL', '3NF Normalization', 'Data Integrity'],
    details: {
      overview: 'Decomposed unnormalized legacy datasets into a cohesive Third Normal Form (3NF) relational schema, enforcing functional dependency integrity and referential constraints.',
      keyAchievements: [
        'Eliminated transitive dependencies across 12 interrelated commercial entities',
        'Engineered optimized composite indexes yielding 4x faster multi-table join execution',
        'Wrote automated SQL assertions and verification test harnesses validating zero data loss'
      ],
      technicalStack: ['PostgreSQL', 'T-SQL', 'Database Schema Modeling', 'Data Modeling ERD Tools'],
      architectureNotes: 'Entity-Relationship architecture adhering strictly to Boyce-Codd and 3NF paradigms with foreign key cascading controls.'
    }
  },
  {
    id: 'erp-simulation',
    number: '03',
    category: 'Supply Chain & Inventory',
    filterCategory: 'Analytics & ERP',
    title: 'ERP Simulation Team Project',
    description: 'Analyzed provided customer datasets to forecast and maintain optimal inventory levels on the shelf utilizing the enterprise ERP Game Simulation System.',
    image: erpSimulationImg,
    previewFooter: {
      left: 'Market & Inventory Reports',
      right: 'Price & Stock Analytics',
      icon: 'query_stats'
    },
    callout: {
      label1: 'ERP Systems',
      text1: 'Dynamic EOQ replenishment algorithms and safety stock elasticity modeling.'
    },
    tags: ['ERP Systems', 'Logistics', 'Demand Forecasting'],
    details: {
      overview: 'Coordinated a competitive business simulation managing manufacturing, procurement, pricing, and distribution across regional distribution centers.',
      keyAchievements: [
        'Maintained 98.4% customer order fill rate while preventing costly warehouse holding overages',
        'Forecasted regional demand spikes using historical moving averages and price elasticity curves',
        'Achieved top-quartile team enterprise valuation through precise cash-flow cycles'
      ],
      technicalStack: ['ERP Simulation', 'SAP Analytics', 'Inventory Optimization', 'Excel Solver'],
      architectureNotes: 'Simulated multi-echelon supply chain network balancing transport lead times and production cycle intervals.'
    }
  },
  {
    id: 'bi-data-analysis',
    number: '04',
    category: 'Tableau / Power BI',
    filterCategory: 'Analytics & ERP',
    title: 'BI Data Analysis',
    description: 'Synthesized multi-dimensional operational metrics and executive margin variance dashboards for decision-support analytics.',
    image: biDataAnalysisImg,
    previewFooter: {
      left: 'Email Engagement Analysis',
      right: 'Loyalty Member Metrics',
      icon: 'bar_chart'
    },
    callout: {
      label1: 'Executive KPI Visuals',
      text1: 'Dynamic ETL',
      label2: 'Interactive margin variance tracking',
      text2: 'Filter-driven requisitions across regional store performance.'
    },
    tags: ['Data Visualization', 'KPI Reporting', 'Business Analytics'],
    details: {
      overview: 'Formulated executive-ready visual intelligence suites consolidating vendor cost variances, inventory turns, and regional sales performance.',
      keyAchievements: [
        'Constructed custom DAX and LOD calculations isolating gross profit margin drag factors',
        'Built automated data refresh pipelines ingesting operational CSV and SQL feeds weekly',
        'Authored user-friendly slicers enabling executive leadership to pivot metrics in seconds'
      ],
      technicalStack: ['Power BI', 'Tableau Desktop', 'DAX', 'SQL Data Pipelines', 'Excel Power Query'],
      architectureNotes: 'Star schema analytical model decoupling dimension tables from multi-million record transactional fact tables.'
    }
  },
  {
    id: 'atm-ui',
    number: '05',
    category: 'OOP Architecture / C# .NET',
    filterCategory: 'C# & Architecture',
    title: 'ATM UI Team Project',
    description: 'Built a robust backend architecture paired with a realistic interactive ATM user interface, faithfully simulating PIN verification, live account balance inquiries, and debit/credit transactional flows.',
    image: atmUiPrototypeImg,
    previewFooter: {
      left: 'Hog Bank Prototype',
      right: 'C# Forms Interface',
      icon: 'atm'
    },
    callout: {
      label1: 'Interactive Teller Simulation',
      text1: 'Realistic terminal GUI supporting secure PIN entry, dynamic balance checks, and deposit/withdrawal handling.'
    },
    tags: ['C#', '.NET', 'Object-Oriented Design'],
    details: {
      overview: 'Constructed an object-oriented ATM state-machine supporting card swipe simulation, session timeouts, PIN security hashing, and transactional audit trails.',
      keyAchievements: [
        'Implemented strict concurrency control preventing overdraft race conditions',
        'Architected modular classes for Account, Customer, CardReader, and CashDispenser',
        'Designed intuitive touch-and-keypad responsive GUI mimicking modern financial kiosks'
      ],
      technicalStack: ['C# .NET Core', 'WPF / WinForms', 'Design Patterns (State, Factory)', 'Unit Testing'],
      architectureNotes: 'State-driven design pattern preventing unauthorized transitions before successful credential validation.'
    }
  },
  {
    id: 'currency-converter',
    number: '06',
    category: 'Algorithmic Logic / Python',
    filterCategory: 'Python Logic',
    title: 'Currency Conversion Program',
    description: 'Constructed real-time exchange rate ingestion, floating-point arithmetic handling, and low-latency multi-currency conversion utility.',
    image: currencyConverterImg,
    previewFooter: {
      left: 'Tkinter GUI Window',
      right: 'Live Rate Conversion',
      icon: 'terminal'
    },
    callout: {
      label1: 'USD → EUR, JPY, GBP',
      text1: 'O(1) Lookup: Cached hash-map indexing for instant floating-point cross-rate computation.'
    },
    tags: ['Python', 'API Ingestion', 'Numerical Computing'],
    details: {
      overview: 'Developed a high-precision currency conversion utility integrating live REST API forex benchmarks with local caching and offline fallback rates.',
      keyAchievements: [
        'Achieved sub-millisecond conversions using pre-indexed cross-currency matrix pairs',
        'Handled edge-case float precision discrepancies using Python decimal arithmetic module',
        'Designed terminal CLI and interactive GUI interface for batch multi-currency conversions'
      ],
      technicalStack: ['Python 3', 'Requests HTTP Library', 'Decimals & Math API', 'JSON REST Endpoints'],
      architectureNotes: 'Triangular arbitrage validation algorithm detecting rate discrepancies and logging conversion fees.'
    }
  },
  {
    id: 'school-db',
    number: '07',
    category: 'CRUD & Relational Data / C# Engine',
    filterCategory: 'Databases',
    title: 'School Database Program in C#',
    description: 'Connected directly to the school information database to provide a functional snapshot of the student portal interface, displaying real-time grades, course schedules, and registration management.',
    callout: {
      label1: 'Student Portal Snapshot',
      text1: 'Live view of enrolled classes and semester grades.',
      label2: 'Course Registration',
      text2: 'Interactive enrollment and schedule verification.'
    },
    tags: ['C#', 'CRUD Engine', 'Database Systems'],
    details: {
      overview: 'Engineered an administrative education management application linking a normalized SQL database to a C# desktop and web portal interface.',
      keyAchievements: [
        'Streamlined course registration checks preventing prerequisite bypasses and timeslot overlaps',
        'Built dynamic GPA calculation engine factoring credit weights and letter grade points',
        'Developed full CRUD interfaces with parametrized SQL queries safeguarding against injection'
      ],
      technicalStack: ['C# .NET', 'ADO.NET / Dapper', 'SQL Server Express', 'Stored Procedures'],
      architectureNotes: 'Tiered client-server connection pool with automated error recovery and secure connection strings.'
    }
  }
];
