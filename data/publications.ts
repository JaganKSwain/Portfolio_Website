export interface Publication {
  id: string
  title: string
  authors: string[]
  venue: string
  status: 'Manuscript in Preparation' | 'Under Review' | 'Published'
  format?: string
  abstract: string
  highlights: string[]
  tags: string[]
  year: string
}

export const publications: Publication[] = [
  {
    id: 'retinal-benchmark-rfmid',
    title: 'Systematic Benchmarking of Deep Learning Architectures for Multi-Label Retinal Disease Classification on the RFMiD Dataset',
    authors: ['J. K. Swain', 'S. R. Prusty', 'S. Mallik', 'A. Pal'],
    venue: 'IISER Berhampur & NIST University Research Initiative',
    status: 'Manuscript in Preparation',
    abstract: 'Extensive empirical benchmark evaluating 15 modern deep learning architectures (CNNs, spatial attention, Vision Transformers, Swin, MaxViT, and hybrids) on the challenging RFMiD dataset spanning 3,200 fundus images and 45 distinct retinal pathologies using stratified 5-fold cross-validation.',
    highlights: [
      'Benchmarked 15 architectures under identical PyTorch/timm training protocols',
      'Best single model MaxViT-Tiny achieved RIADD 0.710 ± 0.015',
      '7-architecture probability-averaging ensemble achieved RIADD 0.756, mean AUC 0.933, and mAP 0.543 on 640 hold-out images',
      'Ablation studies on 4 loss functions & 3 augmentation policies with Wilcoxon signed-rank significance testing'
    ],
    tags: ['Medical Deep Learning', 'Vision Transformers', 'MaxViT', 'RFMiD', 'Ensemble Learning', 'PyTorch'],
    year: '2026'
  },
  {
    id: 'sram-cim-skywater130',
    title: 'Design, Mixed-Signal Modeling, and Statistical Characterization of an Open-Source 10T SRAM Compute-In-Memory Macro for Binary/Ternary Neural Networks in SkyWater 130nm CMOS',
    authors: ['J. K. Swain'],
    venue: 'IEEE Transactions on Circuits and Systems I (TCAS-I format)',
    status: 'Manuscript in Preparation',
    format: 'IEEE TCAS-I Format',
    abstract: 'Full-custom design, mixed-signal modeling, and Monte Carlo statistical verification of an open-source 32×32 differential 10T SRAM compute-in-memory (CiM) macro fabricated on the open SkyWater 130nm CMOS process node for high-efficiency binary and ternary deep learning accelerators.',
    highlights: [
      '32×32 differential 10T bitcell with decoupled read stack: 790 mV static noise margin at 1.8 V & zero compute read-disturb (ΔSNM = 0 mV)',
      '16-tap digitally controlled delay line (0.8–2.5 ns) & 4-bit Flash ADC with Wallace tree decoder (INL max 0.36 LSB)',
      'Digital periphery synthesized with Yosys on sky130_fd_sc_hd, closing timing at 200 MHz (Fmax 648.9 MHz, 4,774 cells)',
      'Cocotb/Icarus closed-loop co-simulation: 99.94% of 1,600 dot products within ±1 LSB; 97.62% accuracy on MNIST quantization-aware LeNet-5 across 15-point PVT grid'
    ],
    tags: ['SkyWater 130nm', 'Compute-in-Memory', '10T SRAM', 'Mixed-Signal VLSI', 'Flash ADC', 'Cocotb', 'Yosys'],
    year: '2026'
  }
]

