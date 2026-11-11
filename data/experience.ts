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
    description: 'Designed and brought up a custom 8-layer, 34.29 mm square all-in-one flight controller and 4-in-1 ESC board for an autonomous micro drone.',
    bullets: [
      'Designed an 8-layer, 34.29 mm square, double-sided all-in-one flight controller and 4-in-1 ESC board in EasyEDA for the micro drone, owning schematic capture, component placement, routing, BOM, DRC/design review, and hardware bring-up (243 components, 64 BOM line items, 0201/0402 passives).',
      'Integrated an STM32F411 flight controller with an ICM-42688-P IMU, BMP280 barometer, HMC5883L magnetometer, W25Q128 blackbox flash, and AT7456E analog OSD.',
      'Built the 4-motor power stage: four EFM8BB21 ESC microcontrollers, four FD6288Q three-phase gate drivers, 24 MOSFETs, and INA199 current sensing across a 1 mΩ shunt, with TVS input protection and buck/LDO power rails.',
      'Worked across mechanical and electronics integration within the product design process in Geometry Assurance Engineering.'
    ],
    skills: ['8-Layer PCB Design', 'EasyEDA', 'STM32F411', '4-in-1 ESC', 'BLDC Motor Drive', 'ICM-42688-P', 'Hardware Bring-up', 'Avionics']
  }
]
