export interface ExperienceItem {
  id: string
  role: string
  company: string
  location: string
  period: string
  type: 'Research' | 'Industry' | 'Internship'
  supervisor?: string
  department?: string
  description: string
  bullets: string[]
  skills: string[]
}

export const experiences: ExperienceItem[] = [
  {
    id: 'iiser-berhampur',
    role: 'Research Intern – Deep Learning for Medical Imaging',
    company: 'IISER Berhampur',
    department: 'Department of Computer Science',
    location: 'Berhampur, Odisha, India',
    period: 'Jun 2026 – Present',
    type: 'Research',
    supervisor: 'Dr. Anabik Pal',
    description: 'First author on systematic benchmarking of 15 deep learning architectures for multi-label retinal disease classification on the RFMiD benchmark.',
    bullets: [
      'Benchmarked 15 deep learning architectures (CNN, spatial attention, ViT, Swin, MaxViT, and hybrids) on RFMiD (3,200 fundus images, 45 disease labels) using 5-fold stratified cross-validation under an identical PyTorch/timm training protocol.',
      'Engineered a 7-architecture, 5-fold probability-averaging ensemble achieving RIADD 0.756, mean AUC 0.933, and mAP 0.543 on the 640-image hold-out (+0.046 RIADD, +0.082 mAP over the top single model MaxViT-Tiny at 0.710).',
      'Conducted exhaustive ablation studies on 4 loss functions and 3 augmentation policies: domain medical augmentation added 0.02–0.04 RIADD, while ImageNet pretraining elevated ViT-Small RIADD from 0.480 to 0.690 (validated via Wilcoxon signed-rank tests across folds).',
      'Authored research manuscript in preparation: "Systematic Benchmarking of Deep Learning Architectures for Multi-Label Retinal Disease Classification on the RFMiD Dataset" and instituted collaborative GitHub PR review workflows.'
    ],
    skills: ['Deep Learning', 'PyTorch', 'timm', 'Vision Transformers', 'MaxViT', 'Medical Imaging', 'Statistical Significance']
  },
  {
    id: 'pe-geometry',
    role: 'Engineering Intern – Micro Drone Project',
    company: 'PE Geometry India Pvt Ltd',
    department: 'Geometry Assurance Engineering',
    location: 'Bengaluru, Karnataka, India',
    period: '05 Jun 2026 – 31 Jul 2026',
    type: 'Industry',
    description: 'Hardware-software co-engineering for advanced autonomous micro drone systems.',
    bullets: [
      'Contributed to end-to-end development of micro drone prototypes, bridging cross-functional mechanical and electronic subsystems.',
      'Applied structured product design methodologies to integrate PCB layouts, flight electronics, and sensor payloads for stable aerodynamics.',
      'Recognized officially in the internship certificate for outstanding learning agility, dedication, and proactive engineering exploration.'
    ],
    skills: ['Drone Systems', 'Embedded Electronics', 'Hardware Prototyping', 'CAD', 'Sensors']
  }
]
