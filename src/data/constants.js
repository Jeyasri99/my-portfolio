import mprompt from "../assets/mprompt.svg";
import password from "../assets/password.png";
import expensetracker from "../assets/expensetracker.svg";
import todo from "../assets/todo.svg";
import qtrip from "../assets/qtrip.svg";
import meats from "../assets/meats.svg";

export const heroDetails = {
  name: "Jeyasri Sathyamoorthy",
  roles: [
    "Doctoral Research Scientist",
    // "Mobile App Developer",
    // "UI/UX Designer",
    // "Programmer",
  ],
};

export const experience = [
  {
    year: "Jan 2024 - Present",
    role: "Doctoral Research Scientist",
    company: "George Mason University",
    description:
      "Led a translational ovarian cancer project that uncovered mitochondrial pathways driving chemotherapy resistance and developed robust drug-resistant models, increasing assay reproducibility by 40%. Executed high-throughput molecular profiling and integrated omics data to accelerate biomarker and therapeutic target discovery, reducing experimental turnaround time by 30%. Collaborated across disciplines to translate lab findings clinically, enhanced data compliance through GLP-aligned SOPs, and delivered 10+ publication-ready figures supporting impactful scientific communication.",
    technologies: [
      "Experimental design",
      "Molecular assays",
      "Data integration",
      "Statistical analysis",
      "SOP documentation",
    ],
  },
  {
    year: "Jan 2024 - Present",
    role: "Graduate Teaching Assistant",
    company: "George Mason University",
    description:
      "Supervised and mentored 200+ undergraduate students, increasing laboratory performance scores by 95% through structured demonstrations and guidance. Redesigned lab preparation workflows, cutting setup time by 50% and significantly improving instructional efficiency. Enforced strict safety and protocol compliance, achieving zero laboratory incidents throughout the semester.",
    technologies: ["Student supervision", "Workflow optimization", "Instructional efficiency", "Safety enforcement", "Protocol compliance"],
  },
  {
    year: "May 2023 - Dec 2023",
    role: "Graduate Research Assistant",
    company: "George Mason University",
    description:
      "Supported PhD researchers in molecular biology and oncology projects, ensuring timely data generation and analysis for 3+ studies. Performed 50+ molecular assays, optimized workflows to increase throughput by 30%, and improved data quality with rigorous validation, reducing error rates by 25%. Handled biospecimens and conducted laboratory analysis for clinical research, maintaining protocol compliance and accurate data reporting for 50+ samples.",
    technologies: ["Molecular assays", "Workflow optimization", "Data validation", "Biospecimen handling","Protocol compliance"],
  },
  {
    year: "Jan 2021 - Feb 2021",
    role: "Bioprocessing and chromatography Intern",
    company: "GE Healthcare",
    description:
      "Operated AKTA Avant systems for large-scale protein purification, consistently achieving over 90% purity with UNICORN software. Collaborated on workflow optimizations that boosted protein yield by 25% and executed detailed column packing and system calibration protocols for pilot-scale processes. Applied GMP-aligned standards to ensure batch consistency and data traceability throughout purification operations.",
    technologies: [
      "Protein purification",
      "Chromatography workflows",
      "System calibration",
      "Yield optimization",
      "GMP compliance",
    ],
  },
  {
    year: "Jun 2019 - Jul 2019",
    role: "Analytical Laboratory Intern",
    company: "Central Drug Testing Laboratory",
    description:
      "Conducted analytical testing on 50+ pharmaceutical samples using multiple spectroscopy platforms, supporting regulatory quality assessments. Assisted in processing 20+ analytical samples with zero documentation errors and managed calibration records for multi-instrument workflows. Maintained 100% audit-ready compliance, ensuring accurate reporting for pharmaceutical quality testing.",
    technologies: [
      "Analytical testing",
      "Spectroscopy techniques",
      "Documentation management",
      "Calibration records",
      "Regulatory compliance",
    ],
  },
  {
    year: "Jan 2018 - Feb 2018",
    role: "Laboratory Associate",
    company: "Eppendorf India Pvt. Ltd.",
    description:
      "Achieved high-precision quantification of biomolecules in 100+ samples with consistent reproducibility. Streamlined molecular workflows, optimizing sample processing efficiency by 20%. Trained in advanced centrifugation and precision pipetting, enhancing accuracy and reproducibility in sample handling.",
    technologies: [
      "Biomolecule quantification",
      "Workflow optimization",
      "Centrifugation systems",
      "Precision pipetting",
      "Sample processing",
    ],
  },
];

export const educationData = [
  {
    year: "2024 - Present",
    degree: "Doctor of Philosophy in Biosciences",
    institution: "George Mason University",
    // score: "CGPA : 9.45",
  },
  {
    year: "2022 - 2023",
    degree: "Master’s in biology",
    institution: "George Mason University",
    // score: "Score : 88.16%",
  },
  {
    year: "2017 - 2021",
    degree: "Bachelor of Technology, Biotechnology",
    institution: "Rajalakshmi Engineering College",
    // score: "Score : 97.2%",
  },
];

export const achievementsData = [
  {
    title: "Hydrolytic Degradation of Polyethylene Terephthalate by Cutinase Enzyme Derived from Fungal Biomass – Molecular Characterization",
    description:
      "Investigated the molecular mechanisms by which fungal cutinase enzymes facilitate the breakdown of PET plastics.",
    date: "March 2023",
  },
  {
    title: "Optimization and Modeling of Reactive Yellow Adsorption by Surface-Modified Delonix regia Seed: Non-linear Isotherm and Kinetic Parameters",
    description:
      "Developed and optimized a biosorption process using modified Delonix regia seeds for efficient removal of Reactive Yellow dye, analyzing adsorption kinetics and isotherms.",
    date: "December 2022",
  },
];

export const projects = [
  {
    image: mprompt,
    title: "Targeting Mitochondrial Survival Pathways to Reverse Cisplatin Resistance in Ovarian Cancer",
    description:
      "Led a translational drug-resistance project investigating mitochondrial metabolism, apoptosis regulation, and ROS signaling in chemoresistance pathways. Identified and validated therapeutic targets for sensitization strategies and developed resistant cell models for preclinical drug screening. Applied pathway inhibition approaches to successfully restore chemotherapy sensitivity.",
    technologies: ["Drug resistance models", "Pathway inhibition", "Target validation", "Apoptosis signaling","Preclinical screening"],
  },
  {
    image: meats,
    title: "Vitamin K Isoform Quantification in Human Serum for Clinical Biomarker Development",
    description:
      "Developed clinical assays integrating ELISA and LC-MS/MS for quantitative biomarker analysis and validation. Demonstrated disease association and translational relevance through rigorous biomarker validation. Applied statistical modeling and data interpretation to establish clinical correlations.",
    technologies: ["Assay development", "Biomarker validation", "Data interpretation", "Statistical modeling", "Clinical correlation"],
  },
  {
    image: qtrip,
    title: "Translational Proteomics of Cancer-Derived Extracellular Vesicles",
    description:
      "Drove a biomarker discovery project using proteomic profiling of tumor-derived extracellular vesicles, identifying key diagnostic, prognostic, and predictive protein signatures. Applied findings to advance liquid biopsy research and translational diagnostics. Integrated proteomic datasets with clinical relevance frameworks to enhance diagnostic utility.",
    technologies: ["Proteomic profiling", "Biomarker discovery", "Data integration","Liquid biopsy","Translational diagnostics"],
  },
  {
    image: todo,
    title: "Tumor Microenvironment Signaling and Metastatic Pathway Mapping",
    description:
      "Conducted systems-level research on cytokine signaling, EMT activation, angiogenesis, and stromal interactions in cancer. Identified key metastasis-driving pathways as targets for therapeutic intervention. Demonstrated the preclinical relevance of strategies designed to inhibit metastasis.",
    technologies: ["Systems biology","Pathway identification","EMT analysis","Angiogenesis research","Metastasis inhibition"],
  },
  {
    image: expensetracker,
    title: "Molecular Characterization of Cancer-Associated Proteins",
    description:
      "Performed functional profiling of oncogenic proteins associated with proliferation, survival signaling, and therapy resistance. Validated targets relevant for translational oncology pipelines and therapeutic development. Integrated molecular profiling outputs with drug development strategies to advance cancer therapy.",
    technologies: ["Functional profiling", "Target validation","Molecular oncology","Therapy resistance","Translational strategies"],
  },
];
