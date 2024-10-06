const allCourses = [
        {
            label: "AB - 1531 Elementary Arabic I",
            section: "A01",
            credits: "3.0"
        },
        {
            label: "AB - 1532 Elementary Arabic II",
            section: "B01",
            credits: "3.0"
        },
        {
            label: "AB - 1533 Elementary Arabic III",
            section: "C01",
            credits: "3.0"
        },
        {
            label: "AB - 2531 Intermediate Arabic I",
            section: "A01",
            credits: "3.0"
        },
        {
            label: "AB - 2532 Intermediate Arabic II",
            section: "B01",
            credits: "3.0"
        },
        {
            label: "AB - 2533 Intermediate Arabic III",
            section: "C01",
            credits: "3.0"
        },
        {
            label: "ACC - 2060 Financial Statements For Decision Making",
            section: "B01",
            credits: "3.0"
        },
        {
            label: "AE - 2110 Introduction to Incompressible Fluid Dynamics",
            section: "B01",
            credits: "3.0"
        },
        {
            label: "AE - 2210 Introduction to Thermal Engineering",
            section: "D01",
            credits: "3.0"
        },
        {
            label: "AE - 2310 Introduction to Aerospace Control Systems",
            section: "D01",
            credits: "3.0"
        },
        {
            label: "AE - 2320 Introduction to Orbital Mechanics",
            section: "CL01/CX01",
            credits: "3.0"
        },
        {
            label: "AE - 2410 Introduction to Aerospace Structures",
            section: "A01",
            credits: "3.0"
        },
        {
            label: "AE - 2550 Atmospheric And Space Environments",
            section: "D01",
            credits: "3.0"
        },
        {
            label: "AE - 3010 Experimentation and Data Science with Aerospace Engineering Applications",
            section: "CL01/CX01",
            credits: "3.0"
        },
        {
            label: "AE - 3110 Fundamentals of Compressible Fluid Dynamics",
            section: "A01",
            credits: "3.0"
        },
        {
            label: "AE - 3120 Fundamentals of Aerodynamics",
            section: "B01",
            credits: "3.0"
        },
        {
            label: "AE - 3310 Fundamentals of Navigation and Communication",
            section: "A01",
            credits: "3.0"
        },
        {
            label: "AE - 3420 Fundamentals of Aerospace Structures",
            section: "B01",
            credits: "3.0"
        },
        {
            label: "AE - 3430 Fundamentals of Composite Materials",
            section: "C01",
            credits: "3.0"
        },
        {
            label: "AE - 4210 Fundamentals of Air-Breathing Propulsion",
            section: "A01",
            credits: "3.0"
        },
        {
            label: "AE - 4220 Fundamentals of Rocket Propulsion",
            section: "A01",
            credits: "3.0"
        },
        {
            label: "AE - 4310 Fundamentals of Aircraft Dynamics and Control",
            section: "C01",
            credits: "3.0"
        },
        {
            label: "AE - 4320 Fundamentals of Spacecraft Dynamics and Control",
            section: "C01",
            credits: "3.0"
        },
        {
            label: "AE - 4410 Fundamentals of Structural Dynamics",
            section: "D01",
            credits: "3.0"
        },
        {
            label: "AE - 4510 Aircraft Design",
            section: "B01",
            credits: "3.0"
        },
        {
            label: "AE - 4520 Spacecraft and Mission Design",
            section: "B01",
            credits: "3.0"
        },
        {
            label: "AE - 5031 Applied Computational Methods for Partial Differential Equations",
            section: "B01",
            credits: "2.0"
        },
        {
            label: "AE - 5032 Aerospace Engineering Seminar",
            section: "A01",
            credits: "0.0"
        },
        {
            label: "AE - 5093 Special Topics",
            section: "B01 - ST: Orbital Mechanics",
            credits: "2.0"
        },
        {
            label: "AE - 5131 Incompressible Fluid Dynamics",
            section: "C01",
            credits: "2.0"
        },
        {
            label: "AE - 5132 Compressible Fluid Dynamics",
            section: "D01",
            credits: "2.0"
        },
        {
            label: "AE - 5133 Kinetic Theory of Gases and Applications",
            section: "B01",
            credits: "2.0"
        },
        {
            label: "AE - 5232 Spacecraft Propulsion",
            section: "D02",
            credits: "2.0"
        },
        {
            label: "AE - 5233 Combustion",
            section: "C01",
            credits: "2.0"
        },
        {
            label: "AE - 5234 Sustainable Energy Systems",
            section: "A01",
            credits: "2.0"
        },
        {
            label: "AE - 5331 Linear Control Systems",
            section: "C01",
            credits: "2.0"
        },
        {
            label: "AE - 5334 Spacecraft Dynamics and Control",
            section: "D01",
            credits: "2.0"
        },
        {
            label: "AE - 5335 Autonomous Aerial Vehicles",
            section: "A01",
            credits: "2.0"
        },
        {
            label: "AE - 5431 Solid Mechanics for Aerospace Structures (2",
            section: "C01",
            credits: "2.0"
        },
        {
            label: "AE - 5432 Composite Materials",
            section: "D01",
            credits: "2.0"
        },
        {
            label: "AE - 5433 Aeroelasticity",
            section: "A01",
            credits: "2.0"
        },
        {
            label: "AE - 6093 Advanced Special Topics",
            section: "X cancel 4.29.24 - ST: Engineering Optimization and Optimal Control",
            credits: "3.0"
        },
        {
            label: "AR - 1100 Essentials Of Art",
            section: "A01",
            credits: "3.0"
        },
        {
            label: "AR - 1101 Digital Imaging And Computer Art",
            section: "A01",
            credits: "3.0"
        },
        {
            label: "AR - 1111 Introduction To Art History",
            section: "A01",
            credits: "3.0"
        },
        {
            label: "AR - 2048 Technical Art And Character Rigging",
            section: "D01",
            credits: "3.0"
        },
        {
            label: "AR - 2101 3d Modeling I",
            section: "A01",
            credits: "3.0"
        },
        {
            label: "AR - 2111 Modern Art",
            section: "D01",
            credits: "3.0"
        },
        {
            label: "AR - 2114 Modern Architecture In The American Era, 1750-2001 And Beyond",
            section: "B01",
            credits: "3.0"
        },
        {
            label: "AR - 2115 Topics in Architecture since 1960",
            section: "D01",
            credits: "3.0"
        },
        {
            label: "AR - 2202 Figure Drawing",
            section: "C01",
            credits: "3.0"
        },
        {
            label: "AR - 2222 2d Animation I",
            section: "B01",
            credits: "3.0"
        },
        {
            label: "AR - 2301 Graphic Design",
            section: "A01",
            credits: "3.0"
        },
        {
            label: "AR - 2333 3d Animation I",
            section: "C01",
            credits: "3.0"
        },
        {
            label: "AR - 2401 Video Production",
            section: "A01",
            credits: "3.0"
        },
        {
            label: "AR - 2700 Digital Painting",
            section: "B01",
            credits: "3.0"
        },
        {
            label: "AR - 2740 3d Environmental Modeling",
            section: "B01",
            credits: "3.0"
        },
        {
            label: "AR - 2750 Topics In Studio Art",
            section: "B01 - Topics In Studio Art: Kinetic Art",
            credits: "3.0"
        },
        {
            label: "AR - 3101 3d Modeling II",
            section: "B01",
            credits: "3.0"
        },
        {
            label: "AR - 3112 Modernism, Mass Culture, And The Avant-Garde",
            section: "C01",
            credits: "3.0"
        },
        {
            label: "AR - 3200 Interactive Electronic Arts",
            section: "A01",
            credits: "3.0"
        },
        {
            label: "AR - 3210 Human Figure in Motion",
            section: "D01",
            credits: "3.0"
        },
        {
            label: "AR - 3222 2d Animation II",
            section: "C01",
            credits: "3.0"
        },
        {
            label: "AR - 3333 3d Animation II",
            section: "D01",
            credits: "3.0"
        },
        {
            label: "AR - 3700 Concept Art And Creative Illustration",
            section: "A01",
            credits: "3.0"
        },
        {
            label: "AREN - 2002 Architectural Design I",
            section: "A01",
            credits: "3.0"
        },
        {
            label: "AREN - 2004 Architectural Design II - Light And Lighting Systems",
            section: "B01",
            credits: "3.0"
        },
        {
            label: "AREN - 2023 Introduction To Architectural Engineering Systems",
            section: "D01",
            credits: "3.0"
        },
        {
            label: "AREN - 2025 Building Electrical Systems",
            section: "D01",
            credits: "3.0"
        },
        {
            label: "AREN - 3002 Architectural Design III",
            section: "D01",
            credits: "3.0"
        },
        {
            label: "AREN - 3003 Principles Of Hvac Design For Buildings",
            section: "DL01",
            credits: "3.0"
        },
        {
            label: "AREN - 3006 Advanced Hvac System Design",
            section: "B01",
            credits: "3.0"
        },
        {
            label: "AREN - 3020 Architectural Design IV - Building Energy Simulation",
            section: "A01",
            credits: "3.0"
        },
        {
            label: "AREN - 3022 Architectural Design V - Building Envelope Design",
            section: "C01",
            credits: "3.0"
        },
        {
            label: "AREN - 3024 Building Physics",
            section: "C01",
            credits: "3.0"
        },
        {
            label: "AREN - 400X AI-Aided Parametric Design and Fabrication",
            section: "F01",
            credits: "3.0"
        },
        {
            label: "AS - 1001 Heritage and Values I (General Military Course)",
            section: "AL01/AX01",
            credits: "1.0"
        },
        {
            label: "AS - 1002 Heritage and Values II (General Military Course)",
            section: "BL01/BX01",
            credits: "1.0"
        },
        {
            label: "AS - 1003 Heritage and Values III (General Military Course)",
            section: "CL01/CX01",
            credits: "1.0"
        },
        {
            label: "AS - 1004 Heritage and Values IV (General Military Course)",
            section: "DL01/DX01",
            credits: "1.0"
        },
        {
            label: "AS - 2001 Team and Leadership Fundamentals I (General Military Course)",
            section: "AL01/AX01",
            credits: "1.0"
        },
        {
            label: "AS - 2002 Team and Leadership Fundamentals II (General Military Course)",
            section: "BL01/BX01",
            credits: "1.0"
        },
        {
            label: "AS - 2003 Team and Leadership Fundamentals III (General Military Course)",
            section: "CL01/CX01",
            credits: "1.0"
        },
        {
            label: "AS - 2004 Team and Leadership Fundamentals IV (General Military Course)",
            section: "DL01/DX01",
            credits: "1.0"
        },
        {
            label: "AS - 3001 Leading People and Effective Communication I (Professional Officer Course)",
            section: "AL01/AX01",
            credits: "1.5"
        },
        {
            label: "AS - 3002 Leading People and Effective Communication II (Professional Officer Course)",
            section: "BL01/BX01",
            credits: "1.5"
        },
        {
            label: "AS - 3003 Leading People and Effective Communication III (Professional Officer Course)",
            section: "CL01/CX01",
            credits: "1.5"
        },
        {
            label: "AS - 3004 Leading People and Effective Communication IV (Professional Officer Course)",
            section: "DL01/DX01",
            credits: "1.5"
        },
        {
            label: "AS - 4001 National Security/Commissioning Preparation I (Professional Officer Course)",
            section: "AL01/AX01",
            credits: "1.5"
        },
        {
            label: "AS - 4002 National Security/Commissioning Preparation II (Professional Officer Course)",
            section: "BL01/BX01",
            credits: "1.5"
        },
        {
            label: "AS - 4003 National Security/Commissioning Preparation III (Professional Officer Course)",
            section: "CL01/CX01",
            credits: "1.5"
        },
        {
            label: "AS - 4004 National Security/Commissioning Preparation IV (Professional Officer Course)",
            section: "DL01/DX01",
            credits: "1.5"
        },
        {
            label: "BB - 1001 Introduction To Biology",
            section: "B01",
            credits: "3.0"
        },
        {
            label: "BB - 1002 Environmental Biology",
            section: "A01",
            credits: "3.0"
        },
        {
            label: "BB - 1003 Explrng Bioinfmtcs & Compu Bio",
            section: "B01",
            credits: "3.0"
        },
        {
            label: "BB - 1004 Human Biology",
            section: "A01",
            credits: "3.0"
        },
        {
            label: "BB - 1101 Foundations of Cellular and Molecular Biotechnology",
            section: "A01",
            credits: "3.0"
        },
        {
            label: "BB - 1102 Foundations of Ecology and Environmental Biology",
            section: "B01",
            credits: "3.0"
        },
        {
            label: "BB - 1801 Foundations of Biology and Biotechnology Laboratory",
            section: "BX01",
            credits: "3.0"
        },
        {
            label: "BB - 2003 Fundamentals Of Microbiology",
            section: "A01",
            credits: "3.0"
        },
        {
            label: "BB - 2030 Plant Diversity",
            section: "Interest List-D Term",
            credits: "0.0"
        },
        {
            label: "BB - 2040 Principles Of Ecology",
            section: "B01",
            credits: "3.0"
        },
        {
            label: "BB - 2101 Foundations of Physiology",
            section: "A01",
            credits: "3.0"
        },
        {
            label: "BB - 2550 Cell Biology",
            section: "B01",
            credits: "3.0"
        },
        {
            label: "BB - 2802 Enzymes, Proteins, and Purification Laboratory",
            section: "BL01/BX01",
            credits: "1.5"
        },
        {
            label: "BB - 2803 Anatomy and Physiology Laboratory",
            section: "CL01/CX01",
            credits: "1.5"
        },
        {
            label: "BB - 2804 Ecology, Environment, and Animal Behavior Laboratory",
            section: "DX01",
            credits: "1.5"
        },
        {
            label: "BB - 2815 Microbial and Molecular Investigations Laboratory (",
            section: "AX01",
            credits: "3.0"
        },
        {
            label: "BB - 2920 Genetics",
            section: "A01",
            credits: "3.0"
        },
        {
            label: "BB - 292X Urban Ecology and Environmental Justice",
            section: "DL01/DX01",
            credits: "3.0"
        },
        {
            label: "BB - 3003 Medical Microbiology: Plagues Of The Modern World",
            section: "A01",
            credits: "3.0"
        },
        {
            label: "BB - 3060 Animal Behavior",
            section: "B01",
            credits: "3.0"
        },
        {
            label: "BB - 3080 Neurobiology",
            section: "B01",
            credits: "3.0"
        },
        {
            label: "BB - 3101 Human Anatomy and Physiology: Movement And Communication",
            section: "A01",
            credits: "3.0"
        },
        {
            label: "BB - 3102 Human Anatomy and Physiology: Transport And Maintenance",
            section: "C01",
            credits: "3.0"
        },
        {
            label: "BB - 3813 Animal Cell Culture Techniques Laboratory",
            section: "AX01",
            credits: "1.5"
        },
        {
            label: "BB - 3815 Physiologic Systems Laboratory",
            section: "BX01",
            credits: "3.0"
        },
        {
            label: "BB - 3821 Microscopy Laboratory",
            section: "A01",
            credits: "1.5"
        },
        {
            label: "BB - 3825 Plant Physiology Laboratory",
            section: "D01",
            credits: "1.5"
        },
        {
            label: "BB - 3827 Molecular Biology and Genetic Engineering Laboratory",
            section: "A01",
            credits: "3.0"
        },
        {
            label: "BB - 3830 Immunotherapies Laboratory",
            section: "BX01",
            credits: "3.0"
        },
        {
            label: "BB - 3840 Design and Expression of Biomolecules Laboratory",
            section: "CX01",
            credits: "3.0"
        },
        {
            label: "BB - 3870 Cell Culture Models Laboratory",
            section: "DX01",
            credits: "3.0"
        },
        {
            label: "BB - 3920 Immunology",
            section: "D01",
            credits: "3.0"
        },
        {
            label: "BB - 3950 Molecular Biology",
            section: "D01",
            credits: "3.0"
        },
        {
            label: "BB - 4050 Cancer Biology",
            section: "C01",
            credits: "3.0"
        },
        {
            label: "BB - 4190 Regulation Of Gene Expression",
            section: "D01",
            credits: "3.0"
        },
        {
            label: "BB - 4260 Synthetic Biology",
            section: "C01",
            credits: "3.0"
        },
        {
            label: "BB - 4900 Advanced Topics in Biology and Biotechnology",
            section: "A01",
            credits: "3.0"
        },
        {
            label: "BB - 501 Seminar",
            section: "F01",
            credits: "0.0"
        },
        {
            label: "BB - 504 Molecular Biology of the Cell",
            section: "F01",
            credits: "3.0"
        },
        {
            label: "BB - 508 Animal Cell Culture",
            section: "SL01/SX01",
            credits: "3.0"
        },
        {
            label: "BB - 526 Synthetic Biology",
            section: "C01",
            credits: "2.0"
        },
        {
            label: "BB - 550 Cancer Biology",
            section: "C01",
            credits: "2.0"
        },
        {
            label: "BB - 551 Research Integrity In The Sciences",
            section: "F01",
            credits: "1.0"
        },
        {
            label: "BB - 554 Journal Club",
            section: "S01",
            credits: "1.0"
        },
        {
            label: "BB - 560 Methods Of Protein Purification And Downstream Processing",
            section: "FL01/FX01",
            credits: "3.0"
        },
        {
            label: "BB - 561 Model Systems: Experimental Approaches And Applications",
            section: "S01",
            credits: "2.0"
        },
        {
            label: "BB - 562 Cell Cycle Regulation",
            section: "S01",
            credits: "3.0"
        },
        {
            label: "BB - 570 Special Topics",
            section: "FL01/FX01 - ST: Medical and Applied Immunology",
            credits: "3.0"
        },
        {
            label: "BB - 575 Advanced Genetics And Cellular Biology",
            section: "F01",
            credits: "3.0"
        },
        {
            label: "BB - 581 Bioinformatics",
            section: "F01",
            credits: "3.0"
        },
        {
            label: "BB - 590 Advanced Topics in Biology and Biotechnology",
            section: "A01",
            credits: "2.0"
        },
        {
            label: "BCB - 1003 Explrng Bioinfmtcs & Compu Bio",
            section: "B01",
            credits: "3.0"
        },
        {
            label: "BCB - 4003 Biological And Biomedical Database Mining",
            section: "A01",
            credits: "3.0"
        },
        {
            label: "BCB - 4004 Statistical Methods In Genetics And Bioinformatics",
            section: "A01",
            credits: "3.0"
        },
        {
            label: "BCB - 501 Bioinformatics",
            section: "F01",
            credits: "3.0"
        },
        {
            label: "BCB - 503 Biological And Biomedical Database Mining",
            section: "F01",
            credits: "3.0"
        },
        {
            label: "BCB - 510 BCB Seminar",
            section: "F01",
            credits: "0.0"
        },
        {
            label: "BCB - 555 Journal Club in Quantitative Cell Biology",
            section: "F01",
            credits: "1.0"
        },
        {
            label: "BCB - 590 Special Topics",
            section: "S01 - ST: RNASeq Analysis",
            credits: "3.0"
        },
        {
            label: "BME - 1004 Introduction To Programming In Matlab",
            section: "BL01/BX01",
            credits: "3.0"
        },
        {
            label: "BME - 2001 Introduction To Biomaterials",
            section: "C01",
            credits: "3.0"
        },
        {
            label: "BME - 2210 Biomedical Signals, Instruments And Measurements",
            section: "B01",
            credits: "3.0"
        },
        {
            label: "BME - 2211 Biomedical Data Analysis",
            section: "C01",
            credits: "3.0"
        },
        {
            label: "BME - 2502 Introduction To Biomechanics: Stress Analysis",
            section: "B01",
            credits: "3.0"
        },
        {
            label: "BME - 2610 Introduction To Bioprocess Engineering",
            section: "A01",
            credits: "3.0"
        },
        {
            label: "BME - 3012 Biomedical Sensors Laboratory: Techniques",
            section: "BL01/BX01",
            credits: "1.5"
        },
        {
            label: "BME - 3013 . Biomedical Instrumentation Laboratory: Techniques",
            section: "CL01/CX02",
            credits: "1.5"
        },
        {
            label: "BME - 3014 Physiological Signals Laboratory: Techniques",
            section: "BL01/BX01",
            credits: "1.5"
        },
        {
            label: "BME - 3111 Physiology And Engineering",
            section: "AL01/AX01",
            credits: "3.0"
        },
        {
            label: "BME - 3300 Biomedical Engineering Design",
            section: "AL01/AX01",
            credits: "3.0"
        },
        {
            label: "BME - 3505 Solid Biomechanics Laboratory: Techniques",
            section: "AL01/AX01",
            credits: "1.5"
        },
        {
            label: "BME - 3507 Skeletal Biomechanics Laboratory: Techniques",
            section: "AL01/AX01",
            credits: "1.5"
        },
        {
            label: "BME - 360X Biotransport Laboratory I Techniques",
            section: "AL01/AX01",
            credits: "1.5"
        },
        {
            label: "BME - 3610 Transport Analysis In Bioengineering",
            section: "CL01",
            credits: "3.0"
        },
        {
            label: "BME - 3811 Biomaterials Laboratory: Techniques",
            section: "AX01",
            credits: "1.5"
        },
        {
            label: "BME - 3813 Cellular Engineering Laboratory: Techniques",
            section: "BL01/BX01",
            credits: "1.5"
        },
        {
            label: "BME - 4011 Biomedical Signal Analysis",
            section: "B01",
            credits: "3.0"
        },
        {
            label: "BME - 4012 Biomedical Sensors and Instrumentation Laboratory: Applications",
            section: "DL01/DX01",
            credits: "1.5"
        },
        {
            label: "BME - 4023 Biomedical Instrumentation Design",
            section: "A01",
            credits: "3.0"
        },
        {
            label: "BME - 4201 Biomedical Imaging",
            section: "D01",
            credits: "3.0"
        },
        {
            label: "BME - 4301 Biomedical Capstone - Design from the Margins",
            section: "B01",
            credits: "3.0"
        },
        {
            label: "BME - 4503 Computational Biomechanics",
            section: "B01",
            credits: "3.0"
        },
        {
            label: "BME - 4504 Biomechanics",
            section: "B01",
            credits: "3.0"
        },
        {
            label: "BME - 4505 Solid Biomechanics Laboratory: Applications",
            section: "BX01",
            credits: "1.5"
        },
        {
            label: "BME - 4507 Skeletal Biomechanics Laboratory: Applications",
            section: "B01",
            credits: "1.5"
        },
        {
            label: "BME - 4606 Biofluids",
            section: "D01",
            credits: "3.0"
        },
        {
            label: "BME - 4607 Biotransport Laboratory: Application",
            section: "DL01/DX01",
            credits: "1.5"
        },
        {
            label: "BME - 4701 Cell And Molecular Bioengineering",
            section: "A01",
            credits: "3.0"
        },
        {
            label: "BME - 4813 Cellular Engineering Laboratory: Applications",
            section: "CL01/CX01",
            credits: "1.5"
        },
        {
            label: "BME - 4814 Biomaterials",
            section: "A01",
            credits: "3.0"
        },
        {
            label: "BME - 4828 Biomaterial - Tissue Interactions",
            section: "B01",
            credits: "3.0"
        },
        {
            label: "BME - 4831 Drug Delivery",
            section: "C01",
            credits: "3.0"
        },
        {
            label: "BME - 523 Biomedical Instrumentation",
            section: "F01",
            credits: "3.0"
        },
        {
            label: "BME - 531 Biomaterials In The Design Of Medical Devices",
            section: "S01",
            credits: "3.0"
        },
        {
            label: "BME - 532 Medical Device Regulation",
            section: "F01",
            credits: "3.0"
        },
        {
            label: "BME - 552 Tissue Mechanics",
            section: "S01",
            credits: "3.0"
        },
        {
            label: "BME - 553 Biomechanics Of Orthopaedic Devices",
            section: "S01",
            credits: "3.0"
        },
        {
            label: "BME - 560 Physiology For Engineers",
            section: "S01",
            credits: "3.0"
        },
        {
            label: "BME - 562 Laboratory Animal Surgery",
            section: "F01",
            credits: "3.0"
        },
        {
            label: "BME - 580 Biomedical Robotics",
            section: "D02",
            credits: "2.0"
        },
        {
            label: "BME - 591 Graduate Seminar",
            section: "F01",
            credits: "0.0"
        },
        {
            label: "BME - 592 Healthcare Systems And Clinical Practice",
            section: "F01",
            credits: "1.0"
        },
        {
            label: "BME - 593 Scientific Communication",
            section: "F01",
            credits: "3.0"
        },
        {
            label: "BME - 595 Special Topics In Biomedical Engineering",
            section: "B01 - ST: Biomedical Signal Analysis",
            credits: "2.0"
        },
        {
            label: "BUS - 1020 Global Environment Of Business Decisions",
            section: "A02",
            credits: "3.0"
        },
        {
            label: "BUS - 2001 WPI Means Business",
            section: "D01",
            credits: "3.0"
        },
        {
            label: "BUS - 2020 The Legal Environment Of Business Decisions",
            section: "A01",
            credits: "3.0"
        },
        {
            label: "BUS - 2080 Data Analysis For Decision Making",
            section: "A01",
            credits: "3.0"
        },
        {
            label: "BUS - 500 Business Law, Ethics And Social Responsibility",
            section: "S01",
            credits: "3.0"
        },
        {
            label: "BUS - 546 Managing Technological Innovation",
            section: "F01",
            credits: "3.0"
        },
        {
            label: "BUS - 596 Master Of Science Capstone Project",
            section: "S01",
            credits: "3.0"
        },
        {
            label: "BUS - 599 Capstone Project",
            section: "F01",
            credits: "3.0"
        },
        {
            label: "BUS - 631 Research Methods and the Research Process",
            section: "F01",
            credits: "3.0"
        },
        {
            label: "BUS - 633 Quantitative Research Method",
            section: "S01",
            credits: "3.0"
        },
        {
            label: "BUS - 651 Seminar on Designing and Conducting Research Studies",
            section: "F01",
            credits: "3.0"
        },
        {
            label: "BUS - 691 Graduate Seminar",
            section: "F01",
            credits: "0.0"
        },
        {
            label: "BUS - 697 Independent Study",
            section: "F04",
            credits: "0.0"
        },
        {
            label: "CE - 2000 Analytical Mechanics I",
            section: "A01",
            credits: "3.0"
        },
        {
            label: "CE - 2001 Analytical Mechanics II",
            section: "B01",
            credits: "3.0"
        },
        {
            label: "CE - 2002 Introduction To Analysis And Design",
            section: "C01",
            credits: "3.0"
        },
        {
            label: "CE - 2020 Surveying",
            section: "AL01/AX01",
            credits: "3.0"
        },
        {
            label: "CE - 3006 Design Of Steel Structures",
            section: "Interest List-C Term",
            credits: "0.0"
        },
        {
            label: "CE - 3008 Design Of Reinforced Concrete Structures",
            section: "B01",
            credits: "3.0"
        },
        {
            label: "CE - 3010 Structural Engineering.",
            section: "D01",
            credits: "3.0"
        },
        {
            label: "CE - 3020 Project Management",
            section: "A01",
            credits: "3.0"
        },
        {
            label: "CE - 3022 Legal Aspects Of Professional Practice",
            section: "D01",
            credits: "3.0"
        },
        {
            label: "CE - 3025 Project Evaluation",
            section: "B01",
            credits: "3.0"
        },
        {
            label: "CE - 3026 Materials Of Construction",
            section: "CL01/CX01",
            credits: "3.0"
        },
        {
            label: "CE - 302X Civil, Environmental, and Architectural Engineering Profession and Practice",
            section: "B01",
            credits: "3.0"
        },
        {
            label: "CE - 303X Virtual Design and Construction (VDC)",
            section: "C01",
            credits: "3.0"
        },
        {
            label: "CE - 3041 Soil Mechanics",
            section: "B01",
            credits: "3.0"
        },
        {
            label: "CE - 3044 Foundation Engineering",
            section: "D01",
            credits: "3.0"
        },
        {
            label: "CE - 3050 Traffic Engineering",
            section: "DL01",
            credits: "3.0"
        },
        {
            label: "CE - 3059 Environmental Engineering",
            section: "A01",
            credits: "3.0"
        },
        {
            label: "CE - 3060 Water Treatment",
            section: "BL01",
            credits: "3.0"
        },
        {
            label: "CE - 3061 Waste Water Treatment",
            section: "CL01",
            credits: "3.0"
        },
        {
            label: "CE - 3062 Hydraulics",
            section: "D01",
            credits: "3.0"
        },
        {
            label: "CE - 3070 Urban And Environmental Planning",
            section: "A01",
            credits: "3.0"
        },
        {
            label: "CE - 3074 Environmental Analysis",
            section: "B01",
            credits: "3.0"
        },
        {
            label: "CE - 404X Geotechnical Engineering Laboratory",
            section: "BL01/BX01",
            credits: "3.0"
        },
        {
            label: "CE - 4060 Environmental Engineering Laboratory",
            section: "DL01/DX01",
            credits: "3.0"
        },
        {
            label: "CE - 4061 Hydrology",
            section: "A01",
            credits: "3.0"
        },
        {
            label: "CE - 4063 Transport & Transformations In The Environment",
            section: "D01",
            credits: "3.0"
        },
        {
            label: "CE - 460X Environmental Engineering Laboratory II",
            section: "AL01/AX01",
            credits: "3.0"
        },
        {
            label: "CE - 501 Professional Practice",
            section: "S01",
            credits: "3.0"
        },
        {
            label: "CE - 510 Structural Mechanics",
            section: "F01",
            credits: "3.0"
        },
        {
            label: "CE - 514 Continuum Mechanics",
            section: "A01",
            credits: "2.0"
        },
        {
            label: "CE - 5303 Applied Finite Element Methods In Engineering",
            section: "C01",
            credits: "2.0"
        },
        {
            label: "CE - 531 Advanced Design Of Steel Structures",
            section: "S01",
            credits: "3.0"
        },
        {
            label: "CE - 562 Biosystems In Environmental Engineering",
            section: "S01",
            credits: "3.0"
        },
        {
            label: "CE - 571 Water Chemistry",
            section: "S01",
            credits: "3.0"
        },
        {
            label: "CE - 572 Physical And Chemical Treatment Processes",
            section: "F01",
            credits: "3.0"
        },
        {
            label: "CE - 574 Water Resources Management",
            section: "S01",
            credits: "3.0"
        },
        {
            label: "CE - 580 Advanced Project Management",
            section: "F01",
            credits: "3.0"
        },
        {
            label: "CE - 584 Advanced Cost Estimating Procedures",
            section: "F01",
            credits: "3.0"
        },
        {
            label: "CE - 587 Building Information Modeling (BIM)",
            section: "S01",
            credits: "3.0"
        },
        {
            label: "CE - 590 Special Problems",
            section: "F01 - ST: Degradation of Infrastructure",
            credits: "3.0"
        },
        {
            label: "CE - 596 Graduate Seminar",
            section: "F01",
            credits: "0.0"
        },
        {
            label: "CH - 100X Exploring Majors and Careers in Chemistry and Biochemistry",
            section: "A01",
            credits: "0.75"
        },
        {
            label: "CH - 1010 Chemical Properties, Bonding, And Forces",
            section: "Interest List-A Term",
            credits: "3.0"
        },
        {
            label: "CH - 1020 Chemical Reactions",
            section: "Interest List-B Term",
            credits: "3.0"
        },
        {
            label: "CH - 1030 Kinetics, Equilibrium And Thermodynamics",
            section: "Interest List-C Term",
            credits: "0.0"
        },
        {
            label: "CH - 1040 Spectroscopy In Organic And Polymer Chemistry",
            section: "Interest List-D Term",
            credits: "0.0"
        },
        {
            label: "CH - 2310 Organic Chemistry I",
            section: "B01",
            credits: "3.0"
        },
        {
            label: "CH - 2320 Organic Chemistry II",
            section: "C01",
            credits: "3.0"
        },
        {
            label: "CH - 2330 Organic Chemistry III",
            section: "D01",
            credits: "3.0"
        },
        {
            label: "CH - 2360 Organic Laboratory",
            section: "AL01/AX01",
            credits: "3.0"
        },
        {
            label: "CH - 2640 Experimental Chemistry I: Instrumental Analysis",
            section: "AL01/AX01",
            credits: "3.0"
        },
        {
            label: "CH - 2650 Modern Physical Chemistry Methods",
            section: "BL01/BX01",
            credits: "3.0"
        },
        {
            label: "CH - 2660 Organic Synthesis And Analysis Laboratory",
            section: "Interest List-C Term",
            credits: "0.0"
        },
        {
            label: "CH - 2670 Investigation Of Coordination Complexes Through Inquiry",
            section: "Interest List-D Term",
            credits: "0.0"
        },
        {
            label: "CH - 3410 Structure, Bonding, And Reactivity In Inorganic Chemistry",
            section: "A01",
            credits: "3.0"
        },
        {
            label: "CH - 3510 Chemical Thermodynamics",
            section: "A01",
            credits: "3.0"
        },
        {
            label: "CH - 3520 Fundamentals of Applying Mathematical Methods in Chemistry and Biochemistry",
            section: "D01",
            credits: "3.0"
        },
        {
            label: "CH - 3530 Quantum Chemistry",
            section: "C01",
            credits: "3.0"
        },
        {
            label: "CH - 3550 Chemical Dynamics",
            section: "Interest List-B Term",
            credits: "3.0"
        },
        {
            label: "CH - 4110 Protein Structure And Function",
            section: "A01",
            credits: "3.0"
        },
        {
            label: "CH - 4120 Lipids And Biomembrane Functions",
            section: "C01",
            credits: "3.0"
        },
        {
            label: "CH - 4130 Nucleic Acids And Bioinformation",
            section: "B01",
            credits: "3.0"
        },
        {
            label: "CH - 4140 Metabolism And Disease",
            section: "D01",
            credits: "3.0"
        },
        {
            label: "CH - 4150 Enzymology And Protein Characterization Laboratory",
            section: "BL01/BX01",
            credits: "3.0"
        },
        {
            label: "CH - 4170 Experimental Genetic Engineering",
            section: "BL01/BX01",
            credits: "3.0"
        },
        {
            label: "CH - 4190 Regulation Of Gene Expression",
            section: "D01",
            credits: "3.0"
        },
        {
            label: "CH - 421X Applications of AI in Life Sciences Molecular Studies",
            section: "A01",
            credits: "3.0"
        },
        {
            label: "CH - 4330 Organic Synthesis",
            section: "A01",
            credits: "3.0"
        },
        {
            label: "CH - 4420 Principles and Applications of Group Theory in Chemistry",
            section: "C01",
            credits: "3.0"
        },
        {
            label: "CH - 520 Cell Signaling",
            section: "D01",
            credits: "3.0"
        },
        {
            label: "CH - 536 Theory And Applications Of NMR Spectroscopy",
            section: "C01",
            credits: "3.0"
        },
        {
            label: "CH - 538 Medicinal Chemistry",
            section: "A01",
            credits: "3.0"
        },
        {
            label: "CH - 540 Regulation Of Gene Expression",
            section: "D01",
            credits: "3.0"
        },
        {
            label: "CH - 542 Drugs In The Brain",
            section: "B01",
            credits: "3.0"
        },
        {
            label: "CH - 543 Organometallic Chemistry And Catalysis",
            section: "B01",
            credits: "3.0"
        },
        {
            label: "CH - 554 Molecular Modeling",
            section: "AL01/AX01",
            credits: "3.0"
        },
        {
            label: "CH - 555 Advanced Topics",
            section: "A01 - ST: AI in Molecular Life Sciences",
            credits: "3.0"
        },
        {
            label: "CH - 571 Seminar",
            section: "F01",
            credits: "1.0"
        },
        {
            label: "CHE - 1011 Introduction To Chemical Engineering",
            section: "B01",
            credits: "3.0"
        },
        {
            label: "CHE - 2011 Chemical Engineering Fundamentals",
            section: "AL01",
            credits: "3.0"
        },
        {
            label: "CHE - 2012 Elementary Chemical Processes",
            section: "BL01/BD01",
            credits: "3.0"
        },
        {
            label: "CHE - 2013 Applied Chemical Engineering Thermodynamics",
            section: "Interest List-C Term",
            credits: "3.0"
        },
        {
            label: "CHE - 2014 Advanced Chemical Processes",
            section: "DL01/DD01",
            credits: "3.0"
        },
        {
            label: "CHE - 3201 Kinetics And Reactor Design",
            section: "C01",
            credits: "3.0"
        },
        {
            label: "CHE - 3301 Introduction To Biological Engineering",
            section: "D01",
            credits: "3.0"
        },
        {
            label: "CHE - 3501 Applied Mathematics In Chemical Engineering",
            section: "Interest List-D Term",
            credits: "3.0"
        },
        {
            label: "CHE - 3702 Energy Challenges In The 21st Century",
            section: "C01",
            credits: "3.0"
        },
        {
            label: "CHE - 4063 Transport & Transformations In The Environment",
            section: "D01",
            credits: "3.0"
        },
        {
            label: "CHE - 4401 Unit Operations Of Chemical Engineering I",
            section: "AL01/AX01",
            credits: "3.0"
        },
        {
            label: "CHE - 4402 Unit Operations Of Chemical Engineering II",
            section: "BX01",
            credits: "3.0"
        },
        {
            label: "CHE - 4403 Chemical Engineering Design",
            section: "AL01/AD01",
            credits: "3.0"
        },
        {
            label: "CHE - 4404 Chemical Plant Design Project",
            section: "B01",
            credits: "3.0"
        },
        {
            label: "CHE - 4405 Chemical Process Dynamics And Control Laboratory",
            section: "Interest List-C Term",
            credits: "3.0"
        },
        {
            label: "CHE - 4410 Chemical Process Safety Design",
            section: "B01",
            credits: "3.0"
        },
        {
            label: "CHE - 501 Professional Development for Chemical Engineering Doctoral Students",
            section: "F01",
            credits: "0.0"
        },
        {
            label: "CHE - 502 Professional Development for Chemical Engineering Master\u2019s Students",
            section: "F01",
            credits: "0.0"
        },
        {
            label: "CHE - 503 Colloquium",
            section: "F01",
            credits: "0.0"
        },
        {
            label: "CHE - 504 Mathematical Analysis In Chemical Engineering",
            section: "S01",
            credits: "3.0"
        },
        {
            label: "CHE - 509 Reactor Design And Kinetics",
            section: "F01",
            credits: "3.0"
        },
        {
            label: "CHE - 515 Research Analysis And Design",
            section: "A01",
            credits: "3.0"
        },
        {
            label: "CHE - 521 Biochemical Engineering",
            section: "C01",
            credits: "3.0"
        },
        {
            label: "CHE - 554 Molecular Modeling",
            section: "AL01/AX01",
            credits: "3.0"
        },
        {
            label: "CHE - 561 Thermodynamics",
            section: "F01",
            credits: "3.0"
        },
        {
            label: "CHE - 565 Advanced Process Engineering",
            section: "D01",
            credits: "3.0"
        },
        {
            label: "CHE - 571 Transport Phenomena",
            section: "S01",
            credits: "3.0"
        },
        {
            label: "CHE - 580 Special Topics",
            section: "A02 - ST: Pathways to Chemical Engineering",
            credits: "3.0"
        },
        {
            label: "CN - 1541 Elementary Chinese I",
            section: "A01",
            credits: "3.0"
        },
        {
            label: "CN - 1542 Elementary Chinese II",
            section: "B01",
            credits: "3.0"
        },
        {
            label: "CN - 1543 Elementary Chinese III",
            section: "C01",
            credits: "3.0"
        },
        {
            label: "CN - 2541 Intermediate Chinese I",
            section: "D01",
            credits: "3.0"
        },
        {
            label: "CN - 2542 Intermediate Chinese II",
            section: "A01",
            credits: "3.0"
        },
        {
            label: "CN - 2543 Intermediate Chinese III",
            section: "B01",
            credits: "3.0"
        },
        {
            label: "CN - 2544 Intermediate Chinese IV",
            section: "C01",
            credits: "3.0"
        },
        {
            label: "CN - 3541 Advanced Chinese I",
            section: "D01",
            credits: "3.0"
        },
        {
            label: "CN - 3542 Advanced Chinese II",
            section: "A01",
            credits: "3.0"
        },
        {
            label: "CN - 3543 Advanced Chinese III",
            section: "B01",
            credits: "3.0"
        },
        {
            label: "CN - 3561 Business Chinese",
            section: "C01",
            credits: "3.0"
        },
        {
            label: "CS - 1004 Introduction To Programming For Non-Majors",
            section: "AL01/AX01",
            credits: "3.0"
        },
        {
            label: "CS - 1101 Introduction To Program Design",
            section: "Interest List-A Term",
            credits: "0.0"
        },
        {
            label: "CS - 1102 Accelerated Introduction To Program Design",
            section: "AL01/AX01",
            credits: "3.0"
        },
        {
            label: "CS - 2011 Introduction To Machine Organization And Assembly Language",
            section: "BL01/BX01",
            credits: "3.0"
        },
        {
            label: "CS - 2022 Discrete Mathematics",
            section: "Interest List-A Term",
            credits: "3.0"
        },
        {
            label: "CS - 2102 Object-Oriented Design Concepts",
            section: "Interest List-B Term",
            credits: "0.0"
        },
        {
            label: "CS - 2103 Accelerated Object-Oriented Design Concepts",
            section: "Interest List-B Term",
            credits: "0.0"
        },
        {
            label: "CS - 2119 Application Building With Object-Oriented Concepts",
            section: "Interest List-D Term",
            credits: "0.0"
        },
        {
            label: "CS - 2223 Algorithms",
            section: "A01",
            credits: "3.0"
        },
        {
            label: "CS - 2301 Systems Programming For Non-Majors",
            section: "Interest List-B Term",
            credits: "0.0"
        },
        {
            label: "CS - 2303 Systems Programming Concepts",
            section: "AL01/AX01",
            credits: "3.0"
        },
        {
            label: "CS - 3013 Operating Systems",
            section: "A01",
            credits: "3.0"
        },
        {
            label: "CS - 3041 Human-Computer Interaction",
            section: "B01",
            credits: "3.0"
        },
        {
            label: "CS - 3043 Social Implications Of Information Processing",
            section: "A01",
            credits: "3.0"
        },
        {
            label: "CS - 3133 Foundations Of Computer Science",
            section: "A01",
            credits: "3.0"
        },
        {
            label: "CS - 3431 Database Systems I",
            section: "A01",
            credits: "3.0"
        },
        {
            label: "CS - 3516 Computer Networks",
            section: "B01",
            credits: "3.0"
        },
        {
            label: "CS - 3733 Software Engineering",
            section: "Interest List-B Term",
            credits: "0.0"
        },
        {
            label: "CS - 4032 Numerical Methods For Linear And Nonlinear Systems",
            section: "C01",
            credits: "3.0"
        },
        {
            label: "CS - 4033 Numerical Methods For Calculus And Differential Equations",
            section: "BL01/BD01",
            credits: "3.0"
        },
        {
            label: "CS - 4099 Special Topics in Computer Science",
            section: "A01",
            credits: "3.0"
        },
        {
            label: "CS - 4120 Analysis Of Algorithms",
            section: "B01",
            credits: "3.0"
        },
        {
            label: "CS - 4123 Theory Of Computation",
            section: "D01",
            credits: "3.0"
        },
        {
            label: "CS - 4233 Object-Oriented Analysis And Design",
            section: "C01",
            credits: "3.0"
        },
        {
            label: "CS - 4241 Webware: Computational Technology For Network Information Systems",
            section: "A01",
            credits: "3.0"
        },
        {
            label: "CS - 4341 Introduction To Artificial Intelligence",
            section: "A01",
            credits: "3.0"
        },
        {
            label: "CS - 4342 Machine Learning",
            section: "B01",
            credits: "3.0"
        },
        {
            label: "CS - 4401 Software Security Engineering",
            section: "D01",
            credits: "3.0"
        },
        {
            label: "CS - 4404 Tools And Techniques In Computer Network Security",
            section: "C01",
            credits: "3.0"
        },
        {
            label: "CS - 4432 Database Systems II",
            section: "D01",
            credits: "3.0"
        },
        {
            label: "CS - 4433 Big Data Management and Analytics",
            section: "C01",
            credits: "3.0"
        },
        {
            label: "CS - 4445 Data Mining And Knowledge Discovery In Databases",
            section: "A01",
            credits: "3.0"
        },
        {
            label: "CS - 4516 Advanced Computer Networks",
            section: "D01",
            credits: "3.0"
        },
        {
            label: "CS - 4518 Mobile & Ubiquitous Computing",
            section: "D01",
            credits: "3.0"
        },
        {
            label: "CS - 4536 Programming Languages",
            section: "B01",
            credits: "3.0"
        },
        {
            label: "CS - 4731 Computer Graphics",
            section: "C01",
            credits: "3.0"
        },
        {
            label: "CS - 4732 Computer Animation",
            section: "D01",
            credits: "3.0"
        },
        {
            label: "CS - 4801 Introduction To Cryptography And Communication Security",
            section: "D01",
            credits: "3.0"
        },
        {
            label: "CS - 4803 Biological And Biomedical Database Mining",
            section: "A01",
            credits: "3.0"
        },
        {
            label: "CS - 4804 Data Visualization",
            section: "C01",
            credits: "3.0"
        },
        {
            label: "CS - 5003 Foundations Of Computer Science: An Introduction",
            section: "S01",
            credits: "3.0"
        },
        {
            label: "CS - 5007 Introduction To Applications Of Computer Science With Data Structures And Algorithms",
            section: "F02",
            credits: "3.0"
        },
        {
            label: "CS - 5008 Introduction to Systems and Network Programming",
            section: "F02",
            credits: "3.0"
        },
        {
            label: "CS - 502 Operating Systems",
            section: "S01",
            credits: "3.0"
        },
        {
            label: "CS - 503 Foundations Of Computer Science",
            section: "S01",
            credits: "3.0"
        },
        {
            label: "CS - 5084 Introduction To Algorithms: Design And Analysis",
            section: "F02",
            credits: "3.0"
        },
        {
            label: "CS - 509 Design Of Software Systems",
            section: "F01",
            credits: "3.0"
        },
        {
            label: "CS - 513 Computer Networks",
            section: "F01",
            credits: "3.0"
        },
        {
            label: "CS - 522 Numerical Methods",
            section: "F01",
            credits: "3.0"
        },
        {
            label: "CS - 525 Topics In Computer Science",
            section: "F01 - ST: Reinforcement Learning",
            credits: "3.0"
        },
        {
            label: "CS - 526 Human-Robot Interaction",
            section: "F01",
            credits: "3.0"
        },
        {
            label: "CS - 528 Mobile And Ubiquitous Computing",
            section: "S01",
            credits: "3.0"
        },
        {
            label: "CS - 534 Introduction to Artificial Intelligence",
            section: "F01",
            credits: "3.0"
        },
        {
            label: "CS - 536 Programming Language Design",
            section: "S01",
            credits: "3.0"
        },
        {
            label: "CS - 539 Machine Learning",
            section: "F01",
            credits: "3.0"
        },
        {
            label: "CS - 541 Deep Learning",
            section: "F01",
            credits: "3.0"
        },
        {
            label: "CS - 542 Database Management Systems",
            section: "F01",
            credits: "3.0"
        },
        {
            label: "CS - 545 Digital Image Processing",
            section: "S01",
            credits: "3.0"
        },
        {
            label: "CS - 546 Human-Computer Interaction",
            section: "S01",
            credits: "3.0"
        },
        {
            label: "CS - 547 Information Retrieval",
            section: "F01",
            credits: "3.0"
        },
        {
            label: "CS - 548 Knowledge Discovery And Data Mining",
            section: "F01",
            credits: "3.0"
        },
        {
            label: "CS - 549 Computer Vision",
            section: "S01",
            credits: "3.0"
        },
        {
            label: "CS - 551 Reinforcement Learning",
            section: "F01",
            credits: "3.0"
        },
        {
            label: "CS - 552 Generative Artificial Intelligence",
            section: "S01",
            credits: "3.0"
        },
        {
            label: "CS - 553 Machine Learning Development and Operations",
            section: "F01",
            credits: "3.0"
        },
        {
            label: "CS - 554 Natural Language Processing",
            section: "F01",
            credits: "3.0"
        },
        {
            label: "CS - 556 On-Device Deep Learning",
            section: "S01",
            credits: "3.0"
        },
        {
            label: "CS - 557 Software Security Design And Analysis",
            section: "F01",
            credits: "3.0"
        },
        {
            label: "CS - 568 Artificial Intelligence For Adaptive Educational Technology",
            section: "F01",
            credits: "3.0"
        },
        {
            label: "CS - 571 Case Studies In Computer Security",
            section: "S01",
            credits: "3.0"
        },
        {
            label: "CS - 573 Data Visualization",
            section: "F01",
            credits: "3.0"
        },
        {
            label: "CS - 577 Advanced Computer And Communications Networks",
            section: "F01",
            credits: "3.0"
        },
        {
            label: "CS - 578 Cryptography And Data Security",
            section: "F01",
            credits: "3.0"
        },
        {
            label: "CS - 583 Biological And Biomedical Database Mining",
            section: "F01",
            credits: "3.0"
        },
        {
            label: "CS - 584 Algorithms: Design And Analysis",
            section: "F01",
            credits: "3.0"
        },
        {
            label: "CS - 585 Big Data Management",
            section: "F01",
            credits: "3.0"
        },
        {
            label: "CS - 586 Big Data Analytics",
            section: "S01",
            credits: "3.0"
        },
        {
            label: "CS - 587 Cyber Security Capstone Experience",
            section: "F01",
            credits: "3.0"
        },
        {
            label: "CS - 588 Computer Science Capstone Experience",
            section: "F01",
            credits: "3.0"
        },
        {
            label: "CP - 1000 Cooperative Education Program - Semester",
            section: "F121",
            credits: "0.0"
        },
        {
            label: "CP - 1003 C Term Co-Op:",
            section: "C103",
            credits: "0.0"
        },
        {
            label: "DEV - 1200 International Development And Society",
            section: "A01",
            credits: "3.0"
        },
        {
            label: "DEV - 2200 Case Studies In International Development Policy And Engineering",
            section: "C01",
            credits: "3.0"
        },
        {
            label: "DEV - 300X Africa and Globalization: Roots and Routes",
            section: "D01",
            credits: "3.0"
        },
        {
            label: "DEV - 501 Social Innovation and Global Development",
            section: "F01",
            credits: "1.0"
        },
        {
            label: "DEV - 502 Design for Social Change",
            section: "S01",
            credits: "3.0"
        },
        {
            label: "DEV - 510 Design Studio 1",
            section: "S01",
            credits: "3.0"
        },
        {
            label: "DEV - 530 Ethics and Social Justice in Science, Engineering and Development",
            section: "F01",
            credits: "3.0"
        },
        {
            label: "DEV - 540 Research Methods",
            section: "F01",
            credits: "3.0"
        },
        {
            label: "DEV - 550 Policy Evaluation",
            section: "S01",
            credits: "3.0"
        },
        {
            label: "DS - 1010 Data Science I: Introduction To Data Science",
            section: "A01",
            credits: "3.0"
        },
        {
            label: "DS - 2010 Data Science II: Modeling And Data Analysis",
            section: "B01",
            credits: "3.0"
        },
        {
            label: "DS - 3010 Data Science III: Computational Data Intelligence",
            section: "B01",
            credits: "3.0"
        },
        {
            label: "DS - 4433 Big Data Management and Analytics",
            section: "C01",
            credits: "3.0"
        },
        {
            label: "DS - 4635 Data Analytics And Statistical Learning",
            section: "D01",
            credits: "3.0"
        },
        {
            label: "DS - 5006 Machine Learning for Engineering and Science Applications",
            section: "S01",
            credits: "3.0"
        },
        {
            label: "DS - 501 Introduction To Data Science",
            section: "F01",
            credits: "3.0"
        },
        {
            label: "DS - 502 Statistical Methods For Data Science",
            section: "F01",
            credits: "3.0"
        },
        {
            label: "DS - 503 Big Data Management",
            section: "F01",
            credits: "3.0"
        },
        {
            label: "DS - 504 Big Data Analytics",
            section: "S01",
            credits: "3.0"
        },
        {
            label: "DS - 517 Mathematical Foundations For Data Science",
            section: "F01",
            credits: "3.0"
        },
        {
            label: "DS - 541 Deep Learning",
            section: "F01",
            credits: "3.0"
        },
        {
            label: "DS - 547 Information Retrieval",
            section: "F01",
            credits: "3.0"
        },
        {
            label: "DS - 551 Reinforcement Learning",
            section: "F01",
            credits: "3.0"
        },
        {
            label: "DS - 552 Generative Artificial Intelligence",
            section: "S01",
            credits: "3.0"
        },
        {
            label: "DS - 553 Machine Learning Development and Operations",
            section: "F01",
            credits: "3.0"
        },
        {
            label: "DS - 554 Natural Language Processing",
            section: "F01",
            credits: "3.0"
        },
        {
            label: "DS - 556 On-Device Deep Learning",
            section: "S01",
            credits: "3.0"
        },
        {
            label: "DS - 577 Machine Learning in Cybersecurity",
            section: "S01",
            credits: "3.0"
        },
        {
            label: "DS - 598 Graduate Qualifying Project",
            section: "F01",
            credits: "3.0"
        },
        {
            label: "DS - 599 Master's Thesis in Data Science",
            section: "F01",
            credits: "0.0"
        },
        {
            label: "ECE - 2010 Introduction To Electrical And Computer Engineering",
            section: "AL01/AX01",
            credits: "3.0"
        },
        {
            label: "ECE - 2019 Sensors, Circuits, And Systems",
            section: "AL01/AX01",
            credits: "3.0"
        },
        {
            label: "ECE - 2029 Introduction To Digital Circuit Design",
            section: "BL01/BX01",
            credits: "3.0"
        },
        {
            label: "ECE - 2039 Computational Engineering",
            section: "AL01/AX01",
            credits: "3.0"
        },
        {
            label: "ECE - 2049 Embedded Computing In Engineering Design",
            section: "BL01/BX01",
            credits: "3.0"
        },
        {
            label: "ECE - 2112 Electromagnetic Fields",
            section: "C01",
            credits: "3.0"
        },
        {
            label: "ECE - 2201 Microelectronic Circuits I",
            section: "AL01/AX01",
            credits: "3.0"
        },
        {
            label: "ECE - 2305 Introduction To Communications And Networks",
            section: "DL01/DD01",
            credits: "3.0"
        },
        {
            label: "ECE - 2311 Continuous-Time Signal And System Analysis",
            section: "B01",
            credits: "3.0"
        },
        {
            label: "ECE - 2312 Discrete-Time Signal And System Analysis",
            section: "C01",
            credits: "3.0"
        },
        {
            label: "ECE - 2799 Electrical And Computer Engineering Design",
            section: "BL01/BD01",
            credits: "3.0"
        },
        {
            label: "ECE - 3012 Introduction To Control Systems Engineering",
            section: "D01",
            credits: "3.0"
        },
        {
            label: "ECE - 3113 Introduction To RF Circuit Design",
            section: "A01",
            credits: "3.0"
        },
        {
            label: "ECE - 3204 Microelectronic Circuits II",
            section: "DL01/DX01",
            credits: "3.0"
        },
        {
            label: "ECE - 331X Software Radio Design",
            section: "B01",
            credits: "3.0"
        },
        {
            label: "ECE - 3405 Foundations and Trends in Machine Learning for Engineering",
            section: "B01",
            credits: "3.0"
        },
        {
            label: "ECE - 3500 Electric Power and Renewable Energy Systems",
            section: "A01",
            credits: "3.0"
        },
        {
            label: "ECE - 3501 Electromechanical Energy Systems",
            section: "BL01/BD01",
            credits: "3.0"
        },
        {
            label: "ECE - 3829 Advanced Digital System Design With FPGAs",
            section: "AL01/AX01",
            credits: "3.0"
        },
        {
            label: "ECE - 3849 Real-Time Embedded Systems",
            section: "BL01/BX01",
            credits: "3.0"
        },
        {
            label: "ECE - 4011 Biomedical Signal Analysis",
            section: "B01",
            credits: "3.0"
        },
        {
            label: "ECE - 4023 Biomedical Instrumentation Design",
            section: "A01",
            credits: "3.0"
        },
        {
            label: "ECE - 4503 Power Electronics and Power Management",
            section: "D01",
            credits: "3.0"
        },
        {
            label: "ECE - 4703 Real-Time Digital Signal Processing",
            section: "BL01/BX01",
            credits: "3.0"
        },
        {
            label: "ECE - 4801 Computer Organization And Design",
            section: "C01",
            credits: "3.0"
        },
        {
            label: "ECE - 4802 Introduction To Cryptography And Communication Security",
            section: "D01",
            credits: "3.0"
        },
        {
            label: "ECE - 4901 CMOS Fundamentals",
            section: "A01",
            credits: "3.0"
        },
        {
            label: "ECE - 4902 Analog Integrated Circuit Design",
            section: "B01",
            credits: "3.0"
        },
        {
            label: "ECE - 502 Analysis Of Probabilistic Signals And Systems",
            section: "F01",
            credits: "3.0"
        },
        {
            label: "ECE - 503 Digital Signal Processing",
            section: "S01",
            credits: "3.0"
        },
        {
            label: "ECE - 504 Analysis Of Deterministic Signals And Systems",
            section: "F01",
            credits: "3.0"
        },
        {
            label: "ECE - 505 Computer Architecture",
            section: "F01",
            credits: "3.0"
        },
        {
            label: "ECE - 506 Introduction To Local And Wide Area Networks",
            section: "F01",
            credits: "3.0"
        },
        {
            label: "ECE - 5106 Modeling Of Electromagnetic Fields In Electrical & Biological Systems",
            section: "S01",
            credits: "3.0"
        },
        {
            label: "ECE - 514 Fundamentals Of RF And MW Engineering",
            section: "F01",
            credits: "3.0"
        },
        {
            label: "ECE - 5204 Analog Circuits And Intuition",
            section: "S01",
            credits: "3.0"
        },
        {
            label: "ECE - 523 Power Electronics",
            section: "F01",
            credits: "3.0"
        },
        {
            label: "ECE - 524 Advanced Analog Integrated Circuit Design",
            section: "S02",
            credits: "3.0"
        },
        {
            label: "ECE - 531 Principles Of Detection And Estimation Theory",
            section: "S01",
            credits: "3.0"
        },
        {
            label: "ECE - 5311 Information Theory And Coding",
            section: "S01",
            credits: "3.0"
        },
        {
            label: "ECE - 5312 Modern Digital Communications",
            section: "S01",
            credits: "3.0"
        },
        {
            label: "ECE - 537 Advanced Computer And Communications Networks",
            section: "F01",
            credits: "3.0"
        },
        {
            label: "ECE - 545 Digital Image Processing",
            section: "S01",
            credits: "3.0"
        },
        {
            label: "ECE - 5500 Power System Analysis",
            section: "F01",
            credits: "3.0"
        },
        {
            label: "ECE - 5511 Transients In Power Systems",
            section: "S01",
            credits: "3.0"
        },
        {
            label: "ECE - 5512 Electromechanical Energy Conversion",
            section: "F01",
            credits: "3.0"
        },
        {
            label: "ECE - 5521 Protective Relaying",
            section: "F01",
            credits: "3.0"
        },
        {
            label: "ECE - 5522 Advanced Applications In Protective Relaying",
            section: "S01",
            credits: "3.0"
        },
        {
            label: "ECE - 5523 Power System Dynamics",
            section: "F01",
            credits: "3.0"
        },
        {
            label: "ECE - 5530 Power Distribution",
            section: "F01",
            credits: "3.0"
        },
        {
            label: "ECE - 5531 Power System Operation And Planning",
            section: "S01",
            credits: "3.0"
        },
        {
            label: "ECE - 5540 Power Transmission",
            section: "S01",
            credits: "3.0"
        },
        {
            label: "ECE - 556 On-Device Deep Learning",
            section: "S01",
            credits: "3.0"
        },
        {
            label: "ECE - 574 Advanced Digital Systems Design",
            section: "F01",
            credits: "3.0"
        },
        {
            label: "ECE - 576 Applied Cryptography and Physical Attacks",
            section: "F01",
            credits: "3.0"
        },
        {
            label: "ECE - 577 Machine Learning in Cybersecurity",
            section: "S01",
            credits: "3.0"
        },
        {
            label: "ECE - 578 Cryptography And Data Security",
            section: "F01",
            credits: "3.0"
        },
        {
            label: "ECE - 579 Selected Topics In Computer Engineering",
            section: "F02 - ST: Machine Learning for Eng Applications",
            credits: "3.0"
        },
        {
            label: "ECE - 588 Cyber Security Capstone Experience",
            section: "F01",
            credits: "3.0"
        },
        {
            label: "ECE - 596 Graduate Seminars",
            section: "F01",
            credits: "0.0"
        },
        {
            label: "ECON - 1110 Introductory Microeconomics",
            section: "A01",
            credits: "3.0"
        },
        {
            label: "ECON - 1120 Introductory Macroeconomics",
            section: "A01",
            credits: "3.0"
        },
        {
            label: "ECON - 2110 Intermediate Microeconomics",
            section: "C01",
            credits: "3.0"
        },
        {
            label: "ECON - 2126 Public Economics",
            section: "A01",
            credits: "3.0"
        },
        {
            label: "ECON - 2135 Information Economics And Policy",
            section: "D01",
            credits: "3.0"
        },
        {
            label: "ECON - 220X Ecological Systems and Economic Policy",
            section: "D01",
            credits: "3.0"
        },
        {
            label: "ECON - 2910 Economics And Entrepreneurship",
            section: "B01",
            credits: "3.0"
        },
        {
            label: "ECON - 3125 Development Economics",
            section: "B01",
            credits: "3.0"
        },
        {
            label: "EN - 1219 Introduction to Creative Writing",
            section: "A01",
            credits: "3.0"
        },
        {
            label: "EN - 1222 Shakespeare In The Age Of Elizabeth",
            section: "A01",
            credits: "3.0"
        },
        {
            label: "EN - 1242 Introduction To English Poetry",
            section: "D01",
            credits: "3.0"
        },
        {
            label: "EN - 1251 Introduction To Literature",
            section: "A01",
            credits: "3.0"
        },
        {
            label: "EN - 1259 Introduction to Contemporary Chicana/o Literature",
            section: "B01",
            credits: "3.0"
        },
        {
            label: "EN - 2219 Creative Writing",
            section: "A01",
            credits: "3.0"
        },
        {
            label: "EN - 2234 Modern American Novel",
            section: "D01",
            credits: "3.0"
        },
        {
            label: "EN - 2242 Popular Fiction: Reading In Installments",
            section: "B01",
            credits: "3.0"
        },
        {
            label: "EN - 2251 Moral Issues In The Modern Novel",
            section: "B01",
            credits: "3.0"
        },
        {
            label: "EN - 2252 Science And Scientists In Modern Literature",
            section: "B01",
            credits: "3.0"
        },
        {
            label: "EN - 2281 World Literatures",
            section: "C01",
            credits: "3.0"
        },
        {
            label: "EN - 2410 Screenwriting",
            section: "D01",
            credits: "3.0"
        },
        {
            label: "EN - 3219 Advanced Creative Writing",
            section: "C01",
            credits: "3.0"
        },
        {
            label: "EN - 3226 Strange And Strangers",
            section: "C01",
            credits: "3.0"
        },
        {
            label: "EN - 3231 Supernatural Literatures",
            section: "A01",
            credits: "3.0"
        },
        {
            label: "EN - 3234 Modern American Poetry",
            section: "D01",
            credits: "3.0"
        },
        {
            label: "EN - 3248 The English Novel",
            section: "A01",
            credits: "3.0"
        },
        {
            label: "EN - 3257 Topics in African American Literature",
            section: "D01",
            credits: "3.0"
        },
        {
            label: "ENV - 1100 Introduction To Environmental Studies",
            section: "A01",
            credits: "3.0"
        },
        {
            label: "ENV - 1500 Introductions To Geographical Information Systems",
            section: "C01",
            credits: "3.0"
        },
        {
            label: "ENV - 2201 Planning For Sustainable Communities",
            section: "C01",
            credits: "3.0"
        },
        {
            label: "ENV - 2600 Environmental Problems In The Developing World",
            section: "B01",
            credits: "3.0"
        },
        {
            label: "ENV - 2710 Designing for Climate Resilience and Justice",
            section: "C01",
            credits: "3.0"
        },
        {
            label: "ENV - 3100 Adventures In Sustainable Urbanism",
            section: "D01",
            credits: "3.0"
        },
        {
            label: "ES - 1020 Introduction To Engineering",
            section: "A01",
            credits: "3.0"
        },
        {
            label: "ES - 1310 Introduction To Computer Aided Design",
            section: "Interest List-A Term",
            credits: "0.0"
        },
        {
            label: "ES - 1500 Fundamentals of Systems Thinking",
            section: "C01",
            credits: "3.0"
        },
        {
            label: "ES - 2001 Introduction To Materials Science",
            section: "AL01/AD01",
            credits: "3.0"
        },
        {
            label: "ES - 2501 Introduction To Static Systems",
            section: "AL01/AD01",
            credits: "3.0"
        },
        {
            label: "ES - 2502 Stress Analysis",
            section: "AL01/AD01",
            credits: "3.0"
        },
        {
            label: "ES - 2503 Introduction To Dynamic Systems",
            section: "AL01/AD01",
            credits: "3.0"
        },
        {
            label: "ES - 2800 Environmental Impacts Of Engineering Decisions",
            section: "D01",
            credits: "3.0"
        },
        {
            label: "ES - 3001 Introduction To Thermodynamics",
            section: "A01",
            credits: "3.0"
        },
        {
            label: "ES - 3002 Mass Transfer",
            section: "CL01/CD01",
            credits: "3.0"
        },
        {
            label: "ES - 3003 Heat Transfer",
            section: "AL01/AD01",
            credits: "3.0"
        },
        {
            label: "ES - 3004 Fluid Mechanics",
            section: "A01",
            credits: "3.0"
        },
        {
            label: "ES - 3011 Control Engineering I",
            section: "AL01/AX01",
            credits: "3.0"
        },
        {
            label: "ES - 3323 Advanced Computer Aided Design",
            section: "A01",
            credits: "3.0"
        },
        {
            label: "ESL - 500 Acad English for Intl Grad Students",
            section: "F01",
            credits: "0.0"
        },
        {
            label: "ETR - 1100 Engineering Innovation And Entrepreneurship",
            section: "A01",
            credits: "3.0"
        },
        {
            label: "ETR - 112X Innovation and the Entrepreneurial Mindset",
            section: "B01",
            credits: "3.0"
        },
        {
            label: "ETR - 2900 Social Entrepreneurship",
            section: "C01",
            credits: "3.0"
        },
        {
            label: "ETR - 2910 Economics And Entrepreneurship",
            section: "B01",
            credits: "3.0"
        },
        {
            label: "ETR - 4930 Growing And Managing New Ventures",
            section: "D01",
            credits: "3.0"
        },
        {
            label: "ETR - 500 Entrepreneurship And Innovation",
            section: "F02",
            credits: "3.0"
        },
        {
            label: "ETR - 593 Technology Commercialization",
            section: "S01",
            credits: "3.0"
        },
        {
            label: "FIN - 1250 Personal Finance",
            section: "A01",
            credits: "3.0"
        },
        {
            label: "FIN - 2070 Fundamentals of Finance",
            section: "A01",
            credits: "3.0"
        },
        {
            label: "FIN - 3300 Finance & Technology",
            section: "A01",
            credits: "3.0"
        },
        {
            label: "FIN - 3310 Financial Markets and Digital Currencies",
            section: "B01",
            credits: "3.0"
        },
        {
            label: "FIN - 3330 Financial Analytics",
            section: "C01",
            credits: "3.0"
        },
        {
            label: "FIN - 500 Financial Management",
            section: "F01",
            credits: "3.0"
        },
        {
            label: "FIN - 530 Cryptocurrencies and Financial Markets",
            section: "B01",
            credits: "3.0"
        },
        {
            label: "FIN - 540 Financial Analytics",
            section: "C01",
            credits: "3.0"
        },
        {
            label: "FP - 3070 Introduction To Fire Protection Engineering",
            section: "B01",
            credits: "3.0"
        },
        {
            label: "FP - 3080 Introduction To Building Fires Safety System Design",
            section: "B01",
            credits: "3.0"
        },
        {
            label: "FP - 4000 Fire Laboratory",
            section: "AL01/AX01",
            credits: "3.0"
        },
        {
            label: "FP - 4001 Fire, Risk, And Sustainability",
            section: "C01",
            credits: "3.0"
        },
        {
            label: "FP - 520 Fire Modeling",
            section: "F01",
            credits: "3.0"
        },
        {
            label: "FP - 521 Fire Dynamics I",
            section: "F01",
            credits: "3.0"
        },
        {
            label: "FP - 553 Fire Protection Systems",
            section: "S01",
            credits: "3.0"
        },
        {
            label: "FP - 554 Advanced Fire Suppression",
            section: "F01",
            credits: "3.0"
        },
        {
            label: "FP - 555 Detection, Alarm And Smoke Control",
            section: "S01",
            credits: "3.0"
        },
        {
            label: "FP - 570 Building Fire Safety I",
            section: "F01",
            credits: "3.0"
        },
        {
            label: "FP - 571 Performance-Based Design",
            section: "S01",
            credits: "3.0"
        },
        {
            label: "FP - 573 Industrial Fire Protection",
            section: "F01",
            credits: "3.0"
        },
        {
            label: "FP - 575 Explosion Protection",
            section: "S01",
            credits: "3.0"
        },
        {
            label: "FP - 580 Special Problems",
            section: "F02 - SP: Complex Decision Making",
            credits: "3.0"
        },
        {
            label: "FY - 1100 The Great Problems Seminars",
            section: "A02 - GPS: Climate Change",
            credits: "3.0"
        },
        {
            label: "FY - 1101 The Great Problems Seminars",
            section: "B02 - GPS: Climate Change",
            credits: "3.0"
        },
        {
            label: "FY - 1800 Discovering Majors And Careers",
            section: "A01",
            credits: "0.75"
        },
        {
            label: "GE - 2341 Geology",
            section: "A01",
            credits: "3.0"
        },
        {
            label: "GN - 1511 Elementary German I: Identities and Communities",
            section: "A01",
            credits: "3.0"
        },
        {
            label: "GN - 1512 Elementary German II",
            section: "B01",
            credits: "3.0"
        },
        {
            label: "GN - 2511 Intermediate German I: Cultural Practices and Products of the German-Speaking World",
            section: "C01",
            credits: "3.0"
        },
        {
            label: "GN - 2512 Intermediate German II",
            section: "D01",
            credits: "3.0"
        },
        {
            label: "GN - 3511 Advanced German I: Exploration and Innovation in the German-Speaking World",
            section: "A01",
            credits: "3.0"
        },
        {
            label: "GN - 3512 Advanced German II: National Identities and Storie",
            section: "B01",
            credits: "3.0"
        },
        {
            label: "GN - 3513 Survey Of German Civilization And Culture From 1871 To The Present",
            section: "C01",
            credits: "3.0"
        },
        {
            label: "GN - 3516 German Film",
            section: "D01",
            credits: "3.0"
        },
        {
            label: "GOV - 1301 U.S. Government",
            section: "B01",
            credits: "3.0"
        },
        {
            label: "GOV - 1303 American Public Policy",
            section: "B01",
            credits: "3.0"
        },
        {
            label: "GOV - 1310 Law, Courts, And Politics",
            section: "A01",
            credits: "3.0"
        },
        {
            label: "GOV - 1320 Topics In International Politics",
            section: "A01 - Topics In International Politics: Ghana",
            credits: "3.0"
        },
        {
            label: "GOV - 2100 Engineering and Public Policy",
            section: "D01",
            credits: "3.0"
        },
        {
            label: "GOV - 2302 Science-Technology Policy",
            section: "A01",
            credits: "3.0"
        },
        {
            label: "GOV - 2310 Constitutional Law: Foundations Of Government",
            section: "D01",
            credits: "3.0"
        },
        {
            label: "GOV - 2311 Environmental Policy And Law",
            section: "B01",
            credits: "3.0"
        },
        {
            label: "GOV - 2313 Intellectual Property Law",
            section: "D01",
            credits: "3.0"
        },
        {
            label: "GOV - 2314 Cyberlaw And Policy",
            section: "D01",
            credits: "3.0"
        },
        {
            label: "GOV - 236X Women In Politics",
            section: "B01",
            credits: "3.0"
        },
        {
            label: "HI - 1311 Introduction To American Urban History",
            section: "A01",
            credits: "3.0"
        },
        {
            label: "HI - 1313 The US and the World",
            section: "A01",
            credits: "3.0"
        },
        {
            label: "HI - 1314 Introduction To Early American History",
            section: "C01",
            credits: "3.0"
        },
        {
            label: "HI - 1322 Introduction To European History",
            section: "A01",
            credits: "3.0"
        },
        {
            label: "HI - 1330 Introduction To The History Of Science And Technology",
            section: "A01",
            credits: "3.0"
        },
        {
            label: "HI - 1333 Introduction to American Histories of Protest and Power",
            section: "A01",
            credits: "3.0"
        },
        {
            label: "HI - 1345 Atlantic Worlds",
            section: "B01",
            credits: "3.0"
        },
        {
            label: "HI - 1350 Introduction To Environmental History",
            section: "B01",
            credits: "3.0"
        },
        {
            label: "HI - 2310 Topics In Urban History",
            section: "C01 - Topics In Urban History: Civil Rights in the City",
            credits: "3.0"
        },
        {
            label: "HI - 2311 American Colonial History",
            section: "A01",
            credits: "3.0"
        },
        {
            label: "HI - 2313 American History, 1789-1877",
            section: "B01",
            credits: "3.0"
        },
        {
            label: "HI - 2314 American History, 1877-1920",
            section: "C01",
            credits: "3.0"
        },
        {
            label: "HI - 2315 The Shaping Of Post-1920 America",
            section: "D01",
            credits: "3.0"
        },
        {
            label: "HI - 2316 Twentieth Century American Foreign Relations",
            section: "B01",
            credits: "3.0"
        },
        {
            label: "HI - 2318 Topics In Law, Justice And American Society",
            section: "A01 - Topics In Law, Justice And American Society: Race, Gender, and the Law",
            credits: "3.0"
        },
        {
            label: "HI - 2320 Modern European History",
            section: "B01",
            credits: "3.0"
        },
        {
            label: "HI - 2328 History Of Revolutions In The Twentieth Century",
            section: "A01",
            credits: "3.0"
        },
        {
            label: "HI - 2329 European Empires",
            section: "C01",
            credits: "3.0"
        },
        {
            label: "HI - 2335 Topics In The History Of American Science And Technology",
            section: "C01 - Topics In The History Of American Science And Technology",
            credits: "3.0"
        },
        {
            label: "HI - 2343 East Asia: China At The Center",
            section: "C01",
            credits: "3.0"
        },
        {
            label: "HI - 2345 Welcome to Paradise: The U.S. and the Caribbean",
            section: "B01",
            credits: "3.0"
        },
        {
            label: "HI - 2350 Topics In The History Of Science",
            section: "C01 - Topics In The History Of Science: Space and Time",
            credits: "3.0"
        },
        {
            label: "HI - 2400 Topics In Environmental History",
            section: "A01 - Topics In Environmental History: American Nature",
            credits: "3.0"
        },
        {
            label: "HI - 2900 Topics in Gender and History",
            section: "A02 - Topics in Gender and History: Black Women's Activism in the Americas",
            credits: "3.0"
        },
        {
            label: "HI - 2913 Capitalism And Its Discontents",
            section: "C01",
            credits: "3.0"
        },
        {
            label: "HI - 2921 Topics In Modern European History",
            section: "B01 - Topics In Modern European History: History of Ireland",
            credits: "3.0"
        },
        {
            label: "HI - 3314 The American Revolution",
            section: "D01",
            credits: "3.0"
        },
        {
            label: "HI - 3317 Topics In Environmental History",
            section: "C01 - Topics In Environmental History",
            credits: "3.0"
        },
        {
            label: "HI - 331X Urban Ecology and Environmental Justice",
            section: "DL01/DX01",
            credits: "3.0"
        },
        {
            label: "HI - 3331 Topics In The History Of European Science And Technology",
            section: "D01 - Topics In The History Of European Science And Technology: The European Atom",
            credits: "3.0"
        },
        {
            label: "HI - 3334 Topics In The History Of American Science And Technology",
            section: "B01 - Topics In The History Of American Science And Technology: Media Revolutions",
            credits: "3.0"
        },
        {
            label: "HI - 3341 Topics In Imperial And Postcolonial History",
            section: "B01 - Topics In Imperial And Postcolonial History: Decolonial Thought and Practice",
            credits: "3.0"
        },
        {
            label: "HI - 3343 Topics In Asian History",
            section: "D01 - Topics In Asian History",
            credits: "3.0"
        },
        {
            label: "HU - 1222 Introduction To Medical Humanities",
            section: "C01",
            credits: "3.0"
        },
        {
            label: "HU - 1400 Introduction to Africana Studies",
            section: "A01",
            credits: "3.0"
        },
        {
            label: "HU - 1500 Introduction To Gender, Sexuality & Women's Studies",
            section: "A01",
            credits: "3.0"
        },
        {
            label: "HU - 2251 Introduction To Film Studies",
            section: "C01",
            credits: "3.0"
        },
        {
            label: "HU - 2501 Stem-Inism",
            section: "C01",
            credits: "3.0"
        },
        {
            label: "HU - 2502 Global Feminisms",
            section: "B01",
            credits: "3.0"
        },
        {
            label: "HU - 2901 Topics in Sexuality and LGBTQ+ Studies",
            section: "D01",
            credits: "3.0"
        },
        {
            label: "HU - 3900 Inquiry Seminar In Humanities And Arts",
            section: "A01 - INQ SEM: Effortless Action",
            credits: "3.0"
        },
        {
            label: "HU - 3910 Practicum In Humanities And Arts",
            section: "A01 - PRAC IN HUA: Writing for the Web",
            credits: "3.0"
        },
        {
            label: "ID - 2050 SOC SCI RES-IQP-",
            section: "A01 - SOC SCI RES-IQP: Cape Town",
            credits: "3.0"
        },
        {
            label: "ID - 2314 Cyberlaw And Policy",
            section: "D01",
            credits: "3.0"
        },
        {
            label: "ID - 3526 Comparative Business Environments",
            section: "D01",
            credits: "3.0"
        },
        {
            label: "ID - 3530 Spanish Film/Media: Cultural Issues",
            section: "B01",
            credits: "3.0"
        },
        {
            label: "ID - 3531 Contemporary Us Latino Literature & Culture",
            section: "C01",
            credits: "3.0"
        },
        {
            label: "ID - 500 Responsible Conduct Of Research",
            section: "S01",
            credits: "0.0"
        },
        {
            label: "ID - 525 Special Topics",
            section: "F01 - ST: Value Creation for Graduate Research",
            credits: "1.0"
        },
        {
            label: "ID - 527 Fundamentals Of Scientific Teaching And Pedagogy",
            section: "F01",
            credits: "0.0"
        },
        {
            label: "IDG - 598 Systems Engineering Leadership Project",
            section: "S01",
            credits: "3.0"
        },
        {
            label: "IGS - 502 Perspectives in Global Health",
            section: "F01",
            credits: "3.0"
        },
        {
            label: "IGS - 590 Capstone Seminar: Comparative Climate Action",
            section: "F01",
            credits: "3.0"
        },
        {
            label: "IGS - 596 Special Topics in Integrative and Global Studies",
            section: "B01",
            credits: "3.0"
        },
        {
            label: "IMGD - 1000 Critical Studies Of Interactive Media And Games",
            section: "B01",
            credits: "3.0"
        },
        {
            label: "IMGD - 1001 The Game Development Process",
            section: "A01",
            credits: "3.0"
        },
        {
            label: "IMGD - 1002 Storytelling In Interactive Media And Games",
            section: "D01",
            credits: "3.0"
        },
        {
            label: "IMGD - 2000 Social Issues In Interactive Media And Games",
            section: "D01",
            credits: "3.0"
        },
        {
            label: "IMGD - 2030 Game Audio I",
            section: "AL01/AX01",
            credits: "3.0"
        },
        {
            label: "IMGD - 2048 Technical Art And Character Rigging",
            section: "D01",
            credits: "3.0"
        },
        {
            label: "IMGD - 2101 3d Modeling I",
            section: "A01",
            credits: "3.0"
        },
        {
            label: "IMGD - 2200 AI in Writing and Communication",
            section: "C01",
            credits: "3.0"
        },
        {
            label: "IMGD - 2222 2d Animation I",
            section: "B01",
            credits: "3.0"
        },
        {
            label: "IMGD - 2333 3d Animation I",
            section: "C01",
            credits: "3.0"
        },
        {
            label: "IMGD - 2450 Narrative Design for Interactive Media and Games",
            section: "A01",
            credits: "3.0"
        },
        {
            label: "IMGD - 2500 Design Of Tabletop Strategy Games",
            section: "A01",
            credits: "3.0"
        },
        {
            label: "IMGD - 2700 Digital Painting",
            section: "B01",
            credits: "3.0"
        },
        {
            label: "IMGD - 2740 3d Environmental Modeling",
            section: "B01",
            credits: "3.0"
        },
        {
            label: "IMGD - 2900 Digital Game Design I",
            section: "A01",
            credits: "3.0"
        },
        {
            label: "IMGD - 2905 Data Analysis For Game Development",
            section: "D01",
            credits: "3.0"
        },
        {
            label: "IMGD - 3000 Technical Game Development I",
            section: "C01",
            credits: "3.0"
        },
        {
            label: "IMGD - 3030 Game Audio II",
            section: "DL01/DX01",
            credits: "3.0"
        },
        {
            label: "IMGD - 304X Technical Art Pipeline Management",
            section: "B01",
            credits: "3.0"
        },
        {
            label: "IMGD - 3100 Novel Interfaces For Interactive Environments",
            section: "C01",
            credits: "3.0"
        },
        {
            label: "IMGD - 3101 3d Modeling II",
            section: "B01",
            credits: "3.0"
        },
        {
            label: "IMGD - 3200 Interactive Electronic Arts",
            section: "A01",
            credits: "3.0"
        },
        {
            label: "IMGD - 3210 Human Figure in Motion",
            section: "D01",
            credits: "3.0"
        },
        {
            label: "IMGD - 3222 2d Animation II",
            section: "C01",
            credits: "3.0"
        },
        {
            label: "IMGD - 3333 3d Animation II",
            section: "D01",
            credits: "3.0"
        },
        {
            label: "IMGD - 3450 Writing Characters For Interactive Media & Games",
            section: "C01",
            credits: "3.0"
        },
        {
            label: "IMGD - 3500 Artistic Game Development I",
            section: "BL01/BX01",
            credits: "3.0"
        },
        {
            label: "IMGD - 3700 Concept Art And Creative Illustration",
            section: "A01",
            credits: "3.0"
        },
        {
            label: "IMGD - 3900 Digital Game Design II",
            section: "B01",
            credits: "3.0"
        },
        {
            label: "IMGD - 4000 Technical Game Development II",
            section: "DL01/DX01",
            credits: "3.0"
        },
        {
            label: "IMGD - 4099 Special Topics In Imgd",
            section: "A02 - ST: Cozy Games",
            credits: "3.0"
        },
        {
            label: "IMGD - 444X Advanced Topics in Interactive Media, Production",
            section: "D01",
            credits: "3.0"
        },
        {
            label: "IMGD - 4500 Artistic Game Development II",
            section: "DL01/DX01",
            credits: "3.0"
        },
        {
            label: "IMGD - 4700 Advanced Storytelling: Quest Logic And Level Design",
            section: "D01",
            credits: "3.0"
        },
        {
            label: "IMGD - 5000 IMGD Studio",
            section: "F01",
            credits: "3.0"
        },
        {
            label: "IMGD - 5010 IMGD Fundamentals",
            section: "F01",
            credits: "3.0"
        },
        {
            label: "IMGD - 5099 Special Topics",
            section: "F01 - ST: Digi Studio",
            credits: "3.0"
        },
        {
            label: "IMGD - 5100 Tangible And Embodied Interaction",
            section: "F01",
            credits: "3.0"
        },
        {
            label: "IMGD - 5400 Production Management For Interactive Media",
            section: "S01",
            credits: "3.0"
        },
        {
            label: "IMGD - 6001 IMGD Career Colloquium",
            section: "S01",
            credits: "1.0"
        },
        {
            label: "INTL - 1100 Introduction To International And Global Studies",
            section: "A01",
            credits: "3.0"
        },
        {
            label: "INTL - 1200 Introduction to Asia",
            section: "B01",
            credits: "3.0"
        },
        {
            label: "INTL - 1300 Introduction To Latin America",
            section: "A01",
            credits: "3.0"
        },
        {
            label: "INTL - 2100 Approaches To Global Studies",
            section: "B01",
            credits: "3.0"
        },
        {
            label: "INTL - 2110 Global Justice",
            section: "D01",
            credits: "3.0"
        },
        {
            label: "INTL - 2310 Modern Latin America",
            section: "D01",
            credits: "3.0"
        },
        {
            label: "INTL - 2320 Environmental Justice in the Global Caribbean and Latin America",
            section: "C01",
            credits: "3.0"
        },
        {
            label: "INTL - 2410 Modern Africa",
            section: "C01",
            credits: "3.0"
        },
        {
            label: "INTL - 2420 Middle East, North Africa and Mediterranean",
            section: "D01",
            credits: "3.0"
        },
        {
            label: "INTL - 2510 Contemporary Europe: Union And Disunion",
            section: "D01",
            credits: "3.0"
        },
        {
            label: "INTL - 2910 Topics In Global Studies",
            section: "A01 - Topics In Global Studies: Global Health",
            credits: "3.0"
        },
        {
            label: "INTL - 3050 Global Re-Entry Seminar",
            section: "D01",
            credits: "1.5"
        },
        {
            label: "INTL - 4100 Senior Seminar In International And Global Studies",
            section: "C01",
            credits: "3.0"
        },
        {
            label: "ISE - 1800 Academic Skills for English Language Learners",
            section: "A01",
            credits: "3.0"
        },
        {
            label: "ISE - 1801 College Writing for English Language Learners",
            section: "A01",
            credits: "3.0"
        },
        {
            label: "ISE - 1803 Oral Communication for English Language Learners",
            section: "A01",
            credits: "3.0"
        },
        {
            label: "ISE - 2800 Research Writing for English Language Learners",
            section: "B01",
            credits: "3.0"
        },
        {
            label: "ISE - 2820 Critical Reading of Our World for English Language Learners",
            section: "A01",
            credits: "3.0"
        },
        {
            label: "ISE - 3800 Loaded Language: Discourse And Power In International English",
            section: "B01",
            credits: "3.0"
        },
        {
            label: "JP - 100X Elementary Japanese I",
            section: "A01",
            credits: "3.0"
        },
        {
            label: "JP - 110X Elementary Japanese II",
            section: "B01",
            credits: "3.0"
        },
        {
            label: "JP - 120X Elementary Japanese III",
            section: "C01",
            credits: "3.0"
        },
        {
            label: "JP - 200X Intermediate Japanese I",
            section: "D01",
            credits: "3.0"
        },
        {
            label: "JP - 210X Intermediate Japanese II",
            section: "A01",
            credits: "3.0"
        },
        {
            label: "JP - 220X Intermediate Japanese III",
            section: "B01",
            credits: "3.0"
        },
        {
            label: "MA - 1020 Calculus I With Preliminary Topics",
            section: "Interest List-Fall",
            credits: "3.0"
        },
        {
            label: "MA - 1021 Calculus I",
            section: "Interest List-A Term",
            credits: "3.0"
        },
        {
            label: "MA - 1022 Calculus II",
            section: "Interest List-A Term",
            credits: "3.0"
        },
        {
            label: "MA - 1023 Calculus III",
            section: "Interest List-A Term",
            credits: "3.0"
        },
        {
            label: "MA - 1024 Calculus IV",
            section: "Interest List-A Term",
            credits: "3.0"
        },
        {
            label: "MA - 1033 Theoretical Calculus III",
            section: "AL01/AD01",
            credits: "3.0"
        },
        {
            label: "MA - 1034 Theoretical Calculus IV",
            section: "BL01/BD01",
            credits: "3.0"
        },
        {
            label: "MA - 1120 Calculus II (SEMESTER VERSION)",
            section: "SL01/SD01",
            credits: "3.0"
        },
        {
            label: "MA - 1801 Denksport",
            section: "A01",
            credits: "0.75"
        },
        {
            label: "MA - 1971 Bridge To Higher Mathematics",
            section: "D01",
            credits: "3.0"
        },
        {
            label: "MA - 2051 Ordinary Differential Equations",
            section: "Interest List-A Term",
            credits: "3.0"
        },
        {
            label: "MA - 2071 Matrices And Linear Algebra I",
            section: "Interest List-A Term",
            credits: "3.0"
        },
        {
            label: "MA - 2072 Accelerated Matrices And Linear Algebra I",
            section: "Interest List-C Term",
            credits: "3.0"
        },
        {
            label: "MA - 2073 Matrices And Linear Algebra II",
            section: "Interest List-C Term",
            credits: "3.0"
        },
        {
            label: "MA - 2201 Discrete Mathematics",
            section: "Interest List-A Term",
            credits: "3.0"
        },
        {
            label: "MA - 2210 Mathematical Methods In Decision Making",
            section: "DL01/DD01",
            credits: "3.0"
        },
        {
            label: "MA - 2211 Theory Of Interest I",
            section: "AL01/AD01",
            credits: "3.0"
        },
        {
            label: "MA - 2212 Theory Of Interest II",
            section: "BL01/BD01",
            credits: "3.0"
        },
        {
            label: "MA - 2251 Vector And Tensor Calculus",
            section: "CL01/CD01",
            credits: "3.0"
        },
        {
            label: "MA - 2271 Graph Theory",
            section: "CL01/CD01",
            credits: "3.0"
        },
        {
            label: "MA - 2431 Mathematical Modeling With Ordinary Differential Equations",
            section: "BL01/BD02",
            credits: "3.0"
        },
        {
            label: "MA - 2610 Applied Statistics For The Life Sciences",
            section: "Interest List-B Term",
            credits: "0.0"
        },
        {
            label: "MA - 2611 Applied Statistics I",
            section: "Interest List-A Term",
            credits: "0.0"
        },
        {
            label: "MA - 2612 Applied Statistics II",
            section: "Interest List-B Term",
            credits: "0.0"
        },
        {
            label: "MA - 2621 Probability For Applications",
            section: "Interest List-A Term",
            credits: "3.0"
        },
        {
            label: "MA - 2631 Probability Theory",
            section: "AL01/AD01",
            credits: "3.0"
        },
        {
            label: "MA - 3212 Actuarial Mathematics I",
            section: "CL01/CD01",
            credits: "3.0"
        },
        {
            label: "MA - 3213 Actuarial Mathematics II",
            section: "D01",
            credits: "3.0"
        },
        {
            label: "MA - 321X Introduction  to  Actuarial Ratemaking",
            section: "C01",
            credits: "3.0"
        },
        {
            label: "MA - 3231 Linear Programming",
            section: "A01",
            credits: "3.0"
        },
        {
            label: "MA - 3233 Discrete Optimization",
            section: "B01",
            credits: "3.0"
        },
        {
            label: "MA - 3257 Numerical Methods For Linear And Nonlinear Systems",
            section: "C01",
            credits: "3.0"
        },
        {
            label: "MA - 3457 Numerical Methods For Calculus And Differential Equations",
            section: "BL01/BD01",
            credits: "3.0"
        },
        {
            label: "MA - 3475 Calculus Of Variations",
            section: "C01",
            credits: "3.0"
        },
        {
            label: "MA - 3631 Mathematical Statistics",
            section: "BL01/BD01",
            credits: "3.0"
        },
        {
            label: "MA - 3823 Group Theory",
            section: "BL01/BD01",
            credits: "3.0"
        },
        {
            label: "MA - 3831 Principles Of Real Analysis I",
            section: "AL01/AD01",
            credits: "3.0"
        },
        {
            label: "MA - 3832 Principles Of Real Analysis II",
            section: "BL01/BD01",
            credits: "3.0"
        },
        {
            label: "MA - 4214 Loss Models II - Survival Models",
            section: "A01",
            credits: "3.0"
        },
        {
            label: "MA - 4216 Actuarial Seminar",
            section: "A01",
            credits: "0.0"
        },
        {
            label: "MA - 4235 Mathematical Optimization",
            section: "D01",
            credits: "3.0"
        },
        {
            label: "MA - 4291 Applied Complex Variables",
            section: "CL01/CD01",
            credits: "3.0"
        },
        {
            label: "MA - 4451 Boundary Value Problems",
            section: "AL01/AD01",
            credits: "3.0"
        },
        {
            label: "MA - 4473 Partial Differential Equations",
            section: "B01",
            credits: "3.0"
        },
        {
            label: "MA - 4603 Statistical Methods In Genetics And Bioinformatics",
            section: "A01",
            credits: "3.0"
        },
        {
            label: "MA - 4631 Probability And Mathematical Statistics I",
            section: "F01",
            credits: "3.0"
        },
        {
            label: "MA - 4632 Probability And Mathematical Statistics II",
            section: "S01",
            credits: "3.0"
        },
        {
            label: "MA - 4635 Data Analytics And Statistical Learning",
            section: "D01",
            credits: "3.0"
        },
        {
            label: "MA - 4891 Topics In Mathematics",
            section: "D01 - ST: Number Theory",
            credits: "3.0"
        },
        {
            label: "MA - 4895 Differential Geometry",
            section: "D01",
            credits: "3.0"
        },
        {
            label: "MA - 500 Basic Real Analysis",
            section: "F01",
            credits: "3.0"
        },
        {
            label: "MA - 501 Engineering Mathematics",
            section: "F02",
            credits: "3.0"
        },
        {
            label: "MA - 502 Linear Algebra",
            section: "F01",
            credits: "3.0"
        },
        {
            label: "MA - 503 Lebesgue Measure And Integration",
            section: "F01",
            credits: "3.0"
        },
        {
            label: "MA - 504 Functional Analysis",
            section: "S01",
            credits: "3.0"
        },
        {
            label: "MA - 510 Numerical Methods",
            section: "F01",
            credits: "3.0"
        },
        {
            label: "MA - 511 Applied Statistics For Engineers And Scientists",
            section: "F01",
            credits: "3.0"
        },
        {
            label: "MA - 512 Numerical Differential Equations",
            section: "S01",
            credits: "3.0"
        },
        {
            label: "MA - 517 Mathematical Foundations For Data Science",
            section: "F01",
            credits: "3.0"
        },
        {
            label: "MA - 530 Discrete Mathematics",
            section: "F01",
            credits: "3.0"
        },
        {
            label: "MA - 533 Discrete Mathematics II",
            section: "S01",
            credits: "3.0"
        },
        {
            label: "MA - 540 Probability And Mathematical Statistics I",
            section: "F01",
            credits: "3.0"
        },
        {
            label: "MA - 541 Probability And Mathematical Statistics II",
            section: "S01",
            credits: "3.0"
        },
        {
            label: "MA - 542 Regression Analysis",
            section: "S01",
            credits: "3.0"
        },
        {
            label: "MA - 543 Statistical Methods For Data Science",
            section: "F01",
            credits: "3.0"
        },
        {
            label: "MA - 546 Design and Analysis of Experiments",
            section: "F01",
            credits: "3.0"
        },
        {
            label: "MA - 547 Design and Analysis of Observational and Sampling Studies",
            section: "S01",
            credits: "3.0"
        },
        {
            label: "MA - 550 Time Series Analysis",
            section: "F01",
            credits: "3.0"
        },
        {
            label: "MA - 557 Graduate Seminar in Applied Mathematics",
            section: "S01",
            credits: "0.0"
        },
        {
            label: "MA - 559 Statistics Graduate Seminar",
            section: "F01",
            credits: "1.0"
        },
        {
            label: "MA - 574 Portfolio Valuation and Risk Management",
            section: "S01",
            credits: "3.0"
        },
        {
            label: "MA - 590 Special Topics",
            section: "F01 - ST: Stochastic Control and Optimization",
            credits: "3.0"
        },
        {
            label: "ME - 1520 The Technology Of Alpine Skiing",
            section: "C01",
            credits: "3.0"
        },
        {
            label: "ME - 1800 Manufacturing Science, Prototyping, And Computer-Controlled Machining",
            section: "AL01/AD01/AX01",
            credits: "3.0"
        },
        {
            label: "ME - 2300 Introduction To Engineering Design",
            section: "BL01/BX01",
            credits: "3.0"
        },
        {
            label: "ME - 2312 Introduction To Computational Solutions For Engineering Problems",
            section: "B01",
            credits: "3.0"
        },
        {
            label: "ME - 281X Introduction to Manufacturing Engineering",
            section: "B01",
            credits: "3.0"
        },
        {
            label: "ME - 2820 Materials Processing",
            section: "Interest List-B Term",
            credits: "3.0"
        },
        {
            label: "ME - 3310 Kinematics Of Mechanisms",
            section: "AL01/AX01",
            credits: "3.0"
        },
        {
            label: "ME - 3320 Design of Machine Elements",
            section: "Interest List-B Term",
            credits: "0.0"
        },
        {
            label: "ME - 3411 Intermediate Fluid Mechanics",
            section: "B01",
            credits: "3.0"
        },
        {
            label: "ME - 3501 Elementary Continuum Mechanics",
            section: "DL01/DD01",
            credits: "3.0"
        },
        {
            label: "ME - 3506 Rehabilitation Engineering",
            section: "C01",
            credits: "3.0"
        },
        {
            label: "ME - 3820 Computer-Aided Manufacturing",
            section: "DL01/DX01",
            credits: "3.0"
        },
        {
            label: "ME - 3901 Engineering Experimentation",
            section: "C01",
            credits: "3.0"
        },
        {
            label: "ME - 3902 Project-Based Engineering Experimentation",
            section: "A01",
            credits: "3.0"
        },
        {
            label: "ME - 4320 Advanced Engineering Design",
            section: "AL01/AX01",
            credits: "3.0"
        },
        {
            label: "ME - 4322 Modeling And Analysis Of Mechatronic Systems.",
            section: "AL01/AX01",
            credits: "3.0"
        },
        {
            label: "ME - 4323 Fundamentals of Vehicle Drivetrain Systems",
            section: "B01",
            credits: "3.0"
        },
        {
            label: "ME - 4324 Integrated Design of Mechanical System",
            section: "D01",
            credits: "3.0"
        },
        {
            label: "ME - 4422 Design and Optimization of Thermal Systems",
            section: "B01",
            credits: "3.0"
        },
        {
            label: "ME - 4424 Radiation Heat Transfer Application & Design",
            section: "B01",
            credits: "3.0"
        },
        {
            label: "ME - 4429 Thermofluid Application and Design",
            section: "A01",
            credits: "3.0"
        },
        {
            label: "ME - 4430 Integrated Thermomechanical Design and Analysis",
            section: "DL01/DX01",
            credits: "3.0"
        },
        {
            label: "ME - 4503 Computational Biomechanics",
            section: "B01",
            credits: "3.0"
        },
        {
            label: "ME - 4504 Biomechanics",
            section: "B01",
            credits: "3.0"
        },
        {
            label: "ME - 4506 Mechanical Vibrations",
            section: "AL01/AD01",
            credits: "3.0"
        },
        {
            label: "ME - 4512 Introduction to the Finite Element Method",
            section: "Interest List-A Term",
            credits: "0.0"
        },
        {
            label: "ME - 4606 Biofluids",
            section: "D01",
            credits: "3.0"
        },
        {
            label: "ME - 4813 Ceramics And Glasses For Engineering Applications",
            section: "A01",
            credits: "3.0"
        },
        {
            label: "ME - 4814 Biomaterials",
            section: "A01",
            credits: "3.0"
        },
        {
            label: "ME - 4832 Corrosion And Corrosion Control",
            section: "B01",
            credits: "3.0"
        },
        {
            label: "ME - 4840 Physical Metallurgy",
            section: "D01",
            credits: "3.0"
        },
        {
            label: "ME - 4875 Introduction To Nanomaterials And Nanotechnology",
            section: "D01",
            credits: "3.0"
        },
        {
            label: "ME - 500 Applied Analytical Methods in Engineering",
            section: "F01",
            credits: "3.0"
        },
        {
            label: "ME - 5001 Applied Numerical Methods In Engineering",
            section: "B01",
            credits: "2.0"
        },
        {
            label: "ME - 5108 Introduction To Computational Fluid Dynamics",
            section: "C01",
            credits: "2.0"
        },
        {
            label: "ME - 514 Fluid Dynamics",
            section: "F01",
            credits: "3.0"
        },
        {
            label: "ME - 516 Heat Transfer",
            section: "S01",
            credits: "3.0"
        },
        {
            label: "ME - 5200 Mechanical Vibrations",
            section: "D01",
            credits: "2.0"
        },
        {
            label: "ME - 5202 Advanced Dynamics",
            section: "A01",
            credits: "2.0"
        },
        {
            label: "ME - 5220 Control Of Linear Dynamical Systems",
            section: "B01",
            credits: "2.0"
        },
        {
            label: "ME - 5221 Control Of Nonlinear Dynamical Systems",
            section: "C01",
            credits: "2.0"
        },
        {
            label: "ME - 5225 Fiber Optical Sensors",
            section: "A01",
            credits: "2.0"
        },
        {
            label: "ME - 527 Foundations Of Robotics",
            section: "F02",
            credits: "3.0"
        },
        {
            label: "ME - 528 Robot Dynamics",
            section: "F02",
            credits: "3.0"
        },
        {
            label: "ME - 5303 Applied Finite Element Methods In Engineering",
            section: "C01",
            credits: "2.0"
        },
        {
            label: "ME - 5304 Laser Metrology And Nondestructive Testing",
            section: "C01",
            credits: "2.0"
        },
        {
            label: "ME - 5311 Structure And Properties Of Engineering Materials",
            section: "A01",
            credits: "2.0"
        },
        {
            label: "ME - 5312 Properties And Performance Of Engineering Materials",
            section: "B01",
            credits: "2.0"
        },
        {
            label: "ME - 5358 Plastics",
            section: "C01",
            credits: "2.0"
        },
        {
            label: "ME - 5361 Mechanical Behavior And Fracture Of Materials",
            section: "D01",
            credits: "2.0"
        },
        {
            label: "ME - 5370 Surface Metrology",
            section: "S01",
            credits: "3.0"
        },
        {
            label: "ME - 5371 Fundamentals of Surface Metrology",
            section: "A01",
            credits: "2.0"
        },
        {
            label: "ME - 5380 Foundations Of Elasticity",
            section: "B01",
            credits: "2.0"
        },
        {
            label: "ME - 5383 Continuum Mechanics",
            section: "A01",
            credits: "2.0"
        },
        {
            label: "ME - 5385 Metal Additive Manufacturing",
            section: "C01",
            credits: "2.0"
        },
        {
            label: "ME - 5390 Solar Cells",
            section: "B01",
            credits: "2.0"
        },
        {
            label: "ME - 5420 Fundamentals Of Axiomatic Design Of Manufacturing Processes",
            section: "C01",
            credits: "2.0"
        },
        {
            label: "ME - 543 Axiomatic Design Of Manufacturing Processes",
            section: "F01",
            credits: "3.0"
        },
        {
            label: "ME - 5431 Computer Integrated Manufacturing",
            section: "A01",
            credits: "2.0"
        },
        {
            label: "ME - 5441 Design For Manufacturability",
            section: "D01",
            credits: "2.0"
        },
        {
            label: "ME - 552 Tissue Mechanics",
            section: "S01",
            credits: "3.0"
        },
        {
            label: "ME - 5847 Materials for Electrochemical Energy Systems",
            section: "B01",
            credits: "2.0"
        },
        {
            label: "ME - 591 Graduate Seminar",
            section: "A01",
            credits: "0.0"
        },
        {
            label: "ME - 593 Special Topics",
            section: "B01 - ST: Design and Optimization of Thermal Systems",
            credits: "2.0"
        },
        {
            label: "MFE - 500 Current Topics In Manufacturing Seminar",
            section: "F01",
            credits: "0.0"
        },
        {
            label: "MFE - 520 Axiomatic Design Of Manufacturing Processes",
            section: "F01",
            credits: "3.0"
        },
        {
            label: "MFE - 531 Computer Integrated Manufacturing",
            section: "A01",
            credits: "2.0"
        },
        {
            label: "MFE - 5385 Metal Additive Manufacturing",
            section: "C01",
            credits: "2.0"
        },
        {
            label: "MFE - 541 Design For Manufacturability",
            section: "D01",
            credits: "2.0"
        },
        {
            label: "MFE - 5420 Fundamentals Of Axiomatic Design Of Manufacturing Processes",
            section: "C01",
            credits: "2.0"
        },
        {
            label: "MFE - 5841 Surface Metrology",
            section: "S01",
            credits: "3.0"
        },
        {
            label: "MFE - 5843 Fundamentals of Surface Metrology",
            section: "A01",
            credits: "2.0"
        },
        {
            label: "MFE - 594 Special Topics",
            section: "C02 - ST: Machining Processes",
            credits: "2.0"
        },
        {
            label: "MIS - 2300 Business Applications of Blockchain",
            section: "C01",
            credits: "3.0"
        },
        {
            label: "MIS - 3010 Creating Value Through Innovation",
            section: "C01",
            credits: "3.0"
        },
        {
            label: "MIS - 3720 Business Data Management",
            section: "C01",
            credits: "3.0"
        },
        {
            label: "MIS - 3730 Artificial Intelligence with Business Application",
            section: "B01",
            credits: "3.0"
        },
        {
            label: "MIS - 3787 Business Applications Of Machine Learning",
            section: "C01",
            credits: "3.0"
        },
        {
            label: "MIS - 4084 Business Intelligence",
            section: "A01",
            credits: "3.0"
        },
        {
            label: "MIS - 4720 Systems Analysis And Design",
            section: "D01",
            credits: "3.0"
        },
        {
            label: "MIS - 4741 User Experience And Design",
            section: "B01",
            credits: "3.0"
        },
        {
            label: "MIS - 500 Innovating With Information Systems",
            section: "F01",
            credits: "3.0"
        },
        {
            label: "MIS - 502 Data Management For Analytics",
            section: "F01",
            credits: "3.0"
        },
        {
            label: "MIS - 510 Business Application of Blockchain Tech",
            section: "C01",
            credits: "3.0"
        },
        {
            label: "MIS - 520 Artificial Intelligence and its Business Applications",
            section: "B01",
            credits: "3.0"
        },
        {
            label: "MIS - 571 Database Applications Design And Development",
            section: "F01",
            credits: "3.0"
        },
        {
            label: "MIS - 573 System Design And Development",
            section: "S01",
            credits: "3.0"
        },
        {
            label: "MIS - 576 Project Management",
            section: "F01",
            credits: "3.0"
        },
        {
            label: "MIS - 581 Policy and Strategy for Information Technology, Artificial Intelligence, and Analytics",
            section: "S01",
            credits: "3.0"
        },
        {
            label: "MIS - 582 Information Security Management",
            section: "F01",
            credits: "3.0"
        },
        {
            label: "MIS - 583 User Experience Applications",
            section: "S01",
            credits: "3.0"
        },
        {
            label: "MIS - 584 Business Intelligence",
            section: "F01",
            credits: "3.0"
        },
        {
            label: "MIS - 585 User Experience Design",
            section: "F01",
            credits: "3.0"
        },
        {
            label: "MIS - 587 Business Applications In Machine Learning",
            section: "S01",
            credits: "3.0"
        },
        {
            label: "MKT - 3640 Management Of Process And Product Innovation",
            section: "D01",
            credits: "3.0"
        },
        {
            label: "MKT - 3650 Consumer Behavior",
            section: "C01",
            credits: "3.0"
        },
        {
            label: "MKT - 4030 Achieving Strategic Effectiveness",
            section: "A01",
            credits: "3.0"
        },
        {
            label: "MKT - 500 Marketing Strategy",
            section: "F01",
            credits: "3.0"
        },
        {
            label: "MKT - 561 Consumer Behavior And Analytics",
            section: "F01",
            credits: "3.0"
        },
        {
            label: "MKT - 562 Marketing Research",
            section: "F01",
            credits: "3.0"
        },
        {
            label: "MKT - 565 Digital and Social Media Marketing",
            section: "S01",
            credits: "3.0"
        },
        {
            label: "MKT - 568 Marketing Analytics",
            section: "F01",
            credits: "3.0"
        },
        {
            label: "MKT - 569 Product Management",
            section: "S01",
            credits: "3.0"
        },
        {
            label: "ML - 1011 Foundations Of Officership I",
            section: "AL01/AD01/AX01",
            credits: "0.0"
        },
        {
            label: "ML - 1012 Foundations Of Officership II",
            section: "BL01/BD01/BX01",
            credits: "1.0"
        },
        {
            label: "ML - 1021 Basic Leadership I",
            section: "CL01/CD01/CX01",
            credits: "0.0"
        },
        {
            label: "ML - 1022 Basic Leadership II",
            section: "DL01/DD01/DX01",
            credits: "1.0"
        },
        {
            label: "ML - 2011 Individual Leadership Studies I",
            section: "AL01/AD01/AX01",
            credits: "0.75"
        },
        {
            label: "ML - 2012 Individual Leadership Studies II",
            section: "BL01/BD01/BX01",
            credits: "0.75"
        },
        {
            label: "ML - 2021 Leadership And Teamwork I",
            section: "CL01/CD01/CX01",
            credits: "0.75"
        },
        {
            label: "ML - 2022 Leadership And Teamwork II",
            section: "DL01/DD01/DX01",
            credits: "0.75"
        },
        {
            label: "ML - 3011 Leadership And Problem Solving I",
            section: "AL01/AD01/AX01",
            credits: "1.5"
        },
        {
            label: "ML - 3012 Leadership And Problem Solving II",
            section: "BL01/BD01/BX01",
            credits: "1.5"
        },
        {
            label: "ML - 3021 Leadership And Ethics I",
            section: "CL01/CD01/CX01",
            credits: "1.5"
        },
        {
            label: "ML - 3022 Leadership And Ethics II",
            section: "DL01/DD01/DX01",
            credits: "1.5"
        },
        {
            label: "ML - 4011 Leadership And Management I",
            section: "AL01/AD01/AX01",
            credits: "1.5"
        },
        {
            label: "ML - 4022 Leadership And Management II",
            section: "BL01/BD01/BX01",
            credits: "1.5"
        },
        {
            label: "ML - 4023 Officership",
            section: "CL01/CD01/CX01",
            credits: "1.5"
        },
        {
            label: "ML - 4024 Transition To Lieutenant",
            section: "DL01/DD01/DX01",
            credits: "1.5"
        },
        {
            label: "MME - 522 Applications Of Calculus",
            section: "F01",
            credits: "2.0"
        },
        {
            label: "MME - 526 Linear Models I",
            section: "F01",
            credits: "2.0"
        },
        {
            label: "MME - 532 Differential Equations",
            section: "S01",
            credits: "2.0"
        },
        {
            label: "MPE - 510 Classical Mechanics",
            section: "F01",
            credits: "2.0"
        },
        {
            label: "MPE - 520 Electrodynamics",
            section: "S01",
            credits: "2.0"
        },
        {
            label: "MTE - 509 Electron Microscopy",
            section: "A01",
            credits: "2.0"
        },
        {
            label: "MTE - 511 Structure And Properties Of Engineering Materials",
            section: "A01",
            credits: "2.0"
        },
        {
            label: "MTE - 512 Properties And Performance Of Engineering Materials",
            section: "B01",
            credits: "2.0"
        },
        {
            label: "MTE - 520 Axiomatic Design Of Manufacturing Processes",
            section: "F01",
            credits: "3.0"
        },
        {
            label: "MTE - 526 Advanced Thermodynamics",
            section: "B01",
            credits: "2.0"
        },
        {
            label: "MTE - 532 X-Ray Diffraction And Crystallography",
            section: "C01",
            credits: "2.0"
        },
        {
            label: "MTE - 5385 Metal Additive Manufacturing",
            section: "C01",
            credits: "2.0"
        },
        {
            label: "MTE - 5390 Solar Cells",
            section: "B01",
            credits: "2.0"
        },
        {
            label: "MTE - 540 Analytical Methods In Materials Engineering",
            section: "S01",
            credits: "3.0"
        },
        {
            label: "MTE - 5420 Fundamentals Of Axiomatic Design Of Manufacturing Processes",
            section: "C01",
            credits: "2.0"
        },
        {
            label: "MTE - 550 Phase Transformations In Materials",
            section: "S01",
            credits: "3.0"
        },
        {
            label: "MTE - 558 Plastics",
            section: "C01",
            credits: "2.0"
        },
        {
            label: "MTE - 561 Mechanical Behavior And Fracture Of Materials",
            section: "D01",
            credits: "2.0"
        },
        {
            label: "MTE - 575 Introduction To Nanomaterials And Nanotechnology",
            section: "D01",
            credits: "2.0"
        },
        {
            label: "MTE - 580 Materials Science And Engineering Seminar",
            section: "F01",
            credits: "0.0"
        },
        {
            label: "MTE - 5816 Ceramics And Glasses For Engineering Applications",
            section: "A01",
            credits: "2.0"
        },
        {
            label: "MTE - 5841 Surface Metrology",
            section: "S01",
            credits: "3.0"
        },
        {
            label: "MTE - 5843 Fundamentals of Surface Metrology",
            section: "A01",
            credits: "2.0"
        },
        {
            label: "MTE - 5844 Corrosion And Corrosion Control",
            section: "B01",
            credits: "2.0"
        },
        {
            label: "MTE - 5847 Materials for Electrochemical Energy Systems",
            section: "B01",
            credits: "2.0"
        },
        {
            label: "MTE - 594 Special Topics",
            section: "C01 - ST: Advanced Surface Engineering",
            credits: "2.0"
        },
        {
            label: "MU - 1000 Music and Its Makers",
            section: "A01",
            credits: "3.0"
        },
        {
            label: "MU - 1100 Foundations of Music Theory and Aural Skills",
            section: "A01",
            credits: "3.0"
        },
        {
            label: "MU - 2001 History of Western Art Music Before 1750",
            section: "A01",
            credits: "3.0"
        },
        {
            label: "MU - 2002 History of Western Art Music After 1750",
            section: "B01",
            credits: "3.0"
        },
        {
            label: "MU - 2010 Jazz History",
            section: "D01",
            credits: "3.0"
        },
        {
            label: "MU - 2020 History Of American Popular Music",
            section: "B01",
            credits: "3.0"
        },
        {
            label: "MU - 2100 Music Composition",
            section: "B01",
            credits: "3.0"
        },
        {
            label: "MU - 2101 Arranging And Orchestration",
            section: "A01",
            credits: "3.0"
        },
        {
            label: "MU - 2300 Foundations Of Music Technology",
            section: "A01",
            credits: "3.0"
        },
        {
            label: "MU - 2301 Making Music With Machines",
            section: "A01",
            credits: "3.0"
        },
        {
            label: "MU - 2401 Glee Club",
            section: "F01",
            credits: "1.5"
        },
        {
            label: "MU - 2402 Alden Voices",
            section: "F01",
            credits: "1.5"
        },
        {
            label: "MU - 2403 Chamber Choir",
            section: "F01",
            credits: "1.5"
        },
        {
            label: "MU - 2410 Jazz Combo",
            section: "F01",
            credits: "1.5"
        },
        {
            label: "MU - 2411 Jazz Ensemble",
            section: "F01",
            credits: "1.5"
        },
        {
            label: "MU - 2412 Stage Band",
            section: "F01",
            credits: "1.5"
        },
        {
            label: "MU - 2413 African Drumming Ensemble",
            section: "F01",
            credits: "1.5"
        },
        {
            label: "MU - 2420 Orchestra",
            section: "F01",
            credits: "1.5"
        },
        {
            label: "MU - 2421 String Quartet",
            section: "F01",
            credits: "1.5"
        },
        {
            label: "MU - 2430 Concert Band",
            section: "F01",
            credits: "1.5"
        },
        {
            label: "MU - 2431 Brass Ensemble",
            section: "F01",
            credits: "1.5"
        },
        {
            label: "MU - 2440 Percussion Ensemble",
            section: "F01",
            credits: "1.5"
        },
        {
            label: "MU - 2451 Conducting",
            section: "F01",
            credits: "1.5"
        },
        {
            label: "MU - 2501 Music And Mind",
            section: "B01",
            credits: "3.0"
        },
        {
            label: "MU - 3110 Jazz Theory",
            section: "B01",
            credits: "3.0"
        },
        {
            label: "MU - 3201 Music in Time of Conflict",
            section: "B01",
            credits: "3.0"
        },
        {
            label: "MU - 321X Topics in African American Music",
            section: "C01",
            credits: "3.0"
        },
        {
            label: "MU - 3230 World Music",
            section: "A01",
            credits: "3.0"
        },
        {
            label: "MU - 3300 Electronic Music Composition",
            section: "B01",
            credits: "3.0"
        },
        {
            label: "MU - 3301 Topics In Midi",
            section: "A01 - Topics In MIDI",
            credits: "3.0"
        },
        {
            label: "MU - 3302 Topics In Digital Sound",
            section: "C01 - Topics In Digital Sound: Sound Design",
            credits: "3.0"
        },
        {
            label: "MU - 3303 Topics In Interactive Programming",
            section: "C01 - Topics In Interactive Programming",
            credits: "3.0"
        },
        {
            label: "NEU - 501 Neuroscience",
            section: "F01",
            credits: "3.0"
        },
        {
            label: "NEU - 502 Neural Plasticity",
            section: "C01",
            credits: "3.0"
        },
        {
            label: "NEU - 503 Computational Neuroscience",
            section: "F01",
            credits: "3.0"
        },
        {
            label: "NEU - 504 Advanced Psychophysiology",
            section: "F01",
            credits: "3.0"
        },
        {
            label: "NEU - 590 Special Topics in Neuroscience",
            section: "S01",
            credits: "3.0"
        },
        {
            label: "NSE - 515 Radiation Biology",
            section: "S01",
            credits: "3.0"
        },
        {
            label: "NSE - 530 Health Physics",
            section: "F01",
            credits: "3.0"
        },
        {
            label: "NSE - 580 Radiation Therapy Physics",
            section: "S01",
            credits: "3.0"
        },
        {
            label: "OBC - 1010 Leadership Practice",
            section: "B01",
            credits: "3.0"
        },
        {
            label: "OBC - 4367 Leadership, Ethics, And Social Responsibility",
            section: "D01",
            credits: "3.0"
        },
        {
            label: "OBC - 505 Teaming And Organizing For Innovation",
            section: "F01",
            credits: "3.0"
        },
        {
            label: "OBC - 506 Leadership",
            section: "F01",
            credits: "3.0"
        },
        {
            label: "OBC - 533 Negotiations",
            section: "S01",
            credits: "3.0"
        },
        {
            label: "OIE - 2081 Introduction To Prescriptive Analytics",
            section: "A01",
            credits: "3.0"
        },
        {
            label: "OIE - 2600 Scripting for Process and Productivity Improvement",
            section: "B01",
            credits: "3.0"
        },
        {
            label: "OIE - 2850 Engineering Economics",
            section: "B01",
            credits: "3.0"
        },
        {
            label: "OIE - 3020 Achieving Effective Operations",
            section: "BL01/BX01",
            credits: "3.0"
        },
        {
            label: "OIE - 3405 Work Systems And Facilities Planning",
            section: "D01",
            credits: "3.0"
        },
        {
            label: "OIE - 3410 Materials Management In Supply Chains",
            section: "C01",
            credits: "3.0"
        },
        {
            label: "OIE - 3420 Quality Planning, Design And Control",
            section: "A01",
            credits: "3.0"
        },
        {
            label: "OIE - 344X Lean Six Sigma Problem Solving Methods",
            section: "D01",
            credits: "3.0"
        },
        {
            label: "OIE - 3460 Simulation Modeling And Analysis",
            section: "B01",
            credits: "3.0"
        },
        {
            label: "OIE - 3510 Stochastic Models",
            section: "D01",
            credits: "3.0"
        },
        {
            label: "OIE - 4410 Case Studies In Industrial Engineering",
            section: "D01",
            credits: "3.0"
        },
        {
            label: "OIE - 4460 Global Planning And Logistics",
            section: "C01",
            credits: "3.0"
        },
        {
            label: "OIE - 501 Operations Management",
            section: "F01",
            credits: "3.0"
        },
        {
            label: "OIE - 542 Risk Management And Decision Making",
            section: "F01",
            credits: "3.0"
        },
        {
            label: "OIE - 544 Supply Chain Analysis And Design",
            section: "F01",
            credits: "3.0"
        },
        {
            label: "OIE - 548 Performance Analytics",
            section: "S01",
            credits: "3.0"
        },
        {
            label: "OIE - 549 Sustainable Supply Chain and Operations Management",
            section: "S01",
            credits: "3.0"
        },
        {
            label: "OIE - 552 Modeling And Optimizing Processes",
            section: "B01",
            credits: "3.0"
        },
        {
            label: "OIE - 553 Global Purchasing And Logistics",
            section: "C01",
            credits: "3.0"
        },
        {
            label: "OIE - 558 Designing And Managing Lean Six Sigma Processes",
            section: "A01",
            credits: "3.0"
        },
        {
            label: "OIE - 597 Operations and Supply Chain Consulting Project",
            section: "S01",
            credits: "3.0"
        },
        {
            label: "OT - 500 Thesis Research Seminar",
            section: "S01",
            credits: "3.0"
        },
        {
            label: "OT - 2200 Early Fieldwork in STEM Teaching and Community Engagement",
            section: "B01",
            credits: "1.5"
        },
        {
            label: "OT - 2300 Teaching K-12 STEM in the Community",
            section: "D01",
            credits: "1.5"
        },
        {
            label: "OT - 3200 Sheltered English Immersion Endorsement Course For Teachers",
            section: "A01",
            credits: "3.0"
        },
        {
            label: "OT - 4000 Topics in Teacher Preparation: Practicum Seminar",
            section: "D01",
            credits: "1.5"
        },
        {
            label: "OT - 4100 Teaching Methods in Science, Technology, Engineering, and Mathematics",
            section: "B01",
            credits: "3.0"
        },
        {
            label: "OT - 4200 Senior Seminar",
            section: "A01",
            credits: "0.0"
        },
        {
            label: "PH - 1110 General Physics-Mechanics",
            section: "Interest List-A Term",
            credits: "3.0"
        },
        {
            label: "PH - 1111 Principles Of Physics-Mechanics",
            section: "Interest List-A Term",
            credits: "3.0"
        },
        {
            label: "PH - 1120 General Physics-Electricity And Magnetism",
            section: "Interest List-B Term",
            credits: "3.0"
        },
        {
            label: "PH - 1121 Principles Of Physics-Electricity And Magnetism",
            section: "Interest List-B Term",
            credits: "0.0"
        },
        {
            label: "PH - 1130 Modern Physics",
            section: "Interest List-B Term",
            credits: "3.0"
        },
        {
            label: "PH - 1140 Oscillations, And Waves",
            section: "AL01/AX01",
            credits: "3.0"
        },
        {
            label: "PH - 1150 Introductory Physics of Living Systems",
            section: "CL01/CD01",
            credits: "3.0"
        },
        {
            label: "PH - 2101 Principles Of Thermodynamics",
            section: "C01",
            credits: "3.0"
        },
        {
            label: "PH - 2201 Intermediate Mechanics I",
            section: "A01",
            credits: "3.0"
        },
        {
            label: "PH - 2202 Intermediate Mechanics II",
            section: "B01",
            credits: "3.0"
        },
        {
            label: "PH - 2301 Electromagnetic Fields",
            section: "A01",
            credits: "3.0"
        },
        {
            label: "PH - 2501 Photonics",
            section: "B01",
            credits: "3.0"
        },
        {
            label: "PH - 2520 Introduction To Astrophysics",
            section: "B01",
            credits: "3.0"
        },
        {
            label: "PH - 2540 Solar Systems",
            section: "C01",
            credits: "3.0"
        },
        {
            label: "PH - 2550 Atmospheric And Space Environments",
            section: "D01",
            credits: "3.0"
        },
        {
            label: "PH - 2601 Photonics Laboratory",
            section: "C01",
            credits: "3.0"
        },
        {
            label: "PH - 2651 Intermediate Physics Laboratory",
            section: "Interest List-D Term",
            credits: "0.0"
        },
        {
            label: "PH - 3206 Statistical Physics",
            section: "D01",
            credits: "3.0"
        },
        {
            label: "PH - 3301 Electromagnetic Theory",
            section: "B01",
            credits: "3.0"
        },
        {
            label: "PH - 3401 Quantum Mechanics I",
            section: "C01",
            credits: "3.0"
        },
        {
            label: "PH - 3402 Quantum Mechanics II",
            section: "D01",
            credits: "3.0"
        },
        {
            label: "PH - 3501 Relativity",
            section: "C01",
            credits: "3.0"
        },
        {
            label: "PH - 3502 Solid State Physics",
            section: "C01",
            credits: "3.0"
        },
        {
            label: "PH - 351X General Relativity",
            section: "D01",
            credits: "3.0"
        },
        {
            label: "PH - 443X Introduction To Quantum Information",
            section: "A01",
            credits: "3.0"
        },
        {
            label: "PH - 444X Quantum Optics Laboratory",
            section: "BX02",
            credits: "3.0"
        },
        {
            label: "PH - 511 Classical Mechanics I",
            section: "F01",
            credits: "3.0"
        },
        {
            label: "PH - 514 Quantum Mechanics I",
            section: "F04",
            credits: "3.0"
        },
        {
            label: "PH - 515 Quantum Mechanics II",
            section: "S01",
            credits: "3.0"
        },
        {
            label: "PH - 533 Advanced Electromagnetic Theory",
            section: "S01",
            credits: "3.0"
        },
        {
            label: "PH - 548 Fundamentals of Sensors",
            section: "F01",
            credits: "3.0"
        },
        {
            label: "PH - 554 Solid State Physics",
            section: "S01",
            credits: "2.0"
        },
        {
            label: "PH - 561 Atomic Force Microscopy",
            section: "SL01/SX01",
            credits: "3.0"
        },
        {
            label: "PH - 571 Biophysics Journal Club",
            section: "F01",
            credits: "1.0"
        },
        {
            label: "PH - 580 Graduate Seminar",
            section: "F01",
            credits: "0.0"
        },
        {
            label: "PH - 585 Science Writing & Proposal Dev",
            section: "F01",
            credits: "1.0"
        },
        {
            label: "PH - 597 Special Topics",
            section: "F01 - ST: Physics Education Research Journal Club",
            credits: "1.0"
        },
        {
            label: "PSY - 1400 Introduction To Psychological Science",
            section: "B01",
            credits: "3.0"
        },
        {
            label: "PSY - 1504 Strategies For Improving Cognitive Skills",
            section: "B01",
            credits: "3.0"
        },
        {
            label: "PSY - 1800 Special Topics In Psychological Science",
            section: "A01 - ST In Psychological Science: Psychology of Social Media Use",
            credits: "3.0"
        },
        {
            label: "PSY - 2401 The Psychology Of Education",
            section: "B01",
            credits: "3.0"
        },
        {
            label: "PSY - 2402 Social Psychology",
            section: "D01",
            credits: "3.0"
        },
        {
            label: "PSY - 2403 Cognitive Psychology",
            section: "C01",
            credits: "3.0"
        },
        {
            label: "PSY - 2404 Developmental Psychology",
            section: "B01",
            credits: "3.0"
        },
        {
            label: "PSY - 2406 Cross-Cultural Psychology",
            section: "C01",
            credits: "3.0"
        },
        {
            label: "PSY - 2412 Mental Health",
            section: "A01",
            credits: "3.0"
        },
        {
            label: "PSY - 2501 Music And Mind",
            section: "B01",
            credits: "3.0"
        },
        {
            label: "PSY - 3408 Health Psychology",
            section: "C01",
            credits: "3.0"
        },
        {
            label: "PSY - 3504 Human Sexuality",
            section: "B01",
            credits: "3.0"
        },
        {
            label: "PSY - 4110 Psychophysiology",
            section: "A01",
            credits: "3.0"
        },
        {
            label: "PSY - 4400 Survey Design and Methodology",
            section: "A01",
            credits: "3.0"
        },
        {
            label: "PSY - 4800 Special Topics In Psychological Science",
            section: "C01 - ST In Psychological Science: Creativity and Learning Science",
            credits: "3.0"
        },
        {
            label: "PSY - 501 Foundations Of The Learning Sciences",
            section: "F01",
            credits: "3.0"
        },
        {
            label: "PSY - 506 Learning and Creativity",
            section: "S01",
            credits: "3.0"
        },
        {
            label: "PY - 1731 Introduction To Philosophy And Religion",
            section: "A01",
            credits: "3.0"
        },
        {
            label: "PY - 2711 Epistemology",
            section: "C01",
            credits: "3.0"
        },
        {
            label: "PY - 2713 Bioethics",
            section: "A01",
            credits: "3.0"
        },
        {
            label: "PY - 2717 Philosophy And The Environment",
            section: "D01",
            credits: "3.0"
        },
        {
            label: "PY - 2718 Existentialism And Phenomenology",
            section: "D01",
            credits: "3.0"
        },
        {
            label: "PY - 2719 Philosophy Of Science",
            section: "B01",
            credits: "3.0"
        },
        {
            label: "PY - 2731 Ethics",
            section: "A01",
            credits: "3.0"
        },
        {
            label: "PY - 2734 Philosophy And Spirituality",
            section: "A01",
            credits: "3.0"
        },
        {
            label: "PY - 3711 Topics In Philosophy",
            section: "C01 - Topics In Philosophy: Justice and Responsibility",
            credits: "3.0"
        },
        {
            label: "PY - 3712 Philosophy Of Religion",
            section: "C01",
            credits: "3.0"
        },
        {
            label: "PY - 3721 Topics In Religion",
            section: "C01 - Topics In Religion: Buddhism",
            credits: "3.0"
        },
        {
            label: "RBE - 1001 Introduction To Robotics",
            section: "AL01/AX01",
            credits: "3.0"
        },
        {
            label: "RBE - 100X Programming for Robotics",
            section: "AL01/AX01",
            credits: "3.0"
        },
        {
            label: "RBE - 2001 Unified Robotics I: Mechanical Applications in Robotics",
            section: "AL01/AX01",
            credits: "3.0"
        },
        {
            label: "RBE - 2002 Unified Robotics II: Sensing and Perception in Robotics",
            section: "BL01/BX01",
            credits: "3.0"
        },
        {
            label: "RBE - 200X Embedded Systems for Robotics",
            section: "AL01/AX01",
            credits: "3.0"
        },
        {
            label: "RBE - 3001 Unified Robotics III",
            section: "AL01/AX01",
            credits: "3.0"
        },
        {
            label: "RBE - 3002 Unified Robotics IV",
            section: "BL01/BX01",
            credits: "3.0"
        },
        {
            label: "RBE - 3100 Social Implications Of Robotics",
            section: "A01",
            credits: "3.0"
        },
        {
            label: "RBE - 4322 Modeling And Analysis Of Mechatronic Systems.",
            section: "AL01/AX01",
            credits: "3.0"
        },
        {
            label: "RBE - 4540 Vision-based Robotic Manipulation",
            section: "AL01/AX01",
            credits: "3.0"
        },
        {
            label: "RBE - 4601 Human Factors and Human-Robot Interface",
            section: "B01",
            credits: "3.0"
        },
        {
            label: "RBE - 4701 Artificial Intelligence for Robotics",
            section: "C01",
            credits: "3.0"
        },
        {
            label: "RBE - 474X Deep learning For Perception",
            section: "A01",
            credits: "3.0"
        },
        {
            label: "RBE - 4815 Industrial Robotics",
            section: "BL01/BX01",
            credits: "3.0"
        },
        {
            label: "RBE - 500 Foundations Of Robotics",
            section: "F02",
            credits: "3.0"
        },
        {
            label: "RBE - 501 Robot Dynamics",
            section: "F02",
            credits: "3.0"
        },
        {
            label: "RBE - 502 Robot Control",
            section: "F02",
            credits: "3.0"
        },
        {
            label: "RBE - 510 Multi-Robot Systems",
            section: "A01",
            credits: "2.0"
        },
        {
            label: "RBE - 511 Swarm Intelligence",
            section: "F01",
            credits: "3.0"
        },
        {
            label: "RBE - 522 Continuum Robotics",
            section: "A01",
            credits: "2.0"
        },
        {
            label: "RBE - 526 Human-Robot Interaction",
            section: "F01",
            credits: "3.0"
        },
        {
            label: "RBE - 530 Soft Robotics",
            section: "D01",
            credits: "2.0"
        },
        {
            label: "RBE - 549 Computer Vision",
            section: "S01",
            credits: "3.0"
        },
        {
            label: "RBE - 550 Motion Planning",
            section: "F01",
            credits: "3.0"
        },
        {
            label: "RBE - 575 Safety and Guarantees for Autonomous Robots",
            section: "S01",
            credits: "3.0"
        },
        {
            label: "RBE - 577 Machine Learning for Robotics",
            section: "F01",
            credits: "3.0"
        },
        {
            label: "RBE - 580 Biomedical Robotics",
            section: "D02",
            credits: "2.0"
        },
        {
            label: "RBE - 594 Capstone Project Experience In Robotics Engineering",
            section: "F02",
            credits: "3.0"
        },
        {
            label: "RBE - 595 Special Topics",
            section: "A01",
            credits: "2.0"
        },
        {
            label: "RE - 1731 Introduction To Philosophy And Religion",
            section: "A01",
            credits: "3.0"
        },
        {
            label: "RE - 2721 Religion And Culture",
            section: "C01",
            credits: "3.0"
        },
        {
            label: "RE - 2726 Global Religions",
            section: "A01",
            credits: "3.0"
        },
        {
            label: "RE - 2731 Ethics",
            section: "A01",
            credits: "3.0"
        },
        {
            label: "RE - 3711 Topics In Philosophy",
            section: "C01 - Topics In Philosophy: Justice and Responsibility",
            credits: "3.0"
        },
        {
            label: "RE - 3721 Topics In Religion",
            section: "C01 - Topics In Religion: Buddhism",
            credits: "3.0"
        },
        {
            label: "RE - 3723 Religion, Gender & Sexuality",
            section: "B01",
            credits: "3.0"
        },
        {
            label: "SD - 1510 Introduction To System Dynamics Modeling",
            section: "A01",
            credits: "3.0"
        },
        {
            label: "SEME - 501 Foundations Of The Learning Sciences",
            section: "F01",
            credits: "3.0"
        },
        {
            label: "SEME - 568 Artificial Intelligence For Adaptive Educational Technology",
            section: "F01",
            credits: "3.0"
        },
        {
            label: "SOC - 1202 Introduction To Sociology And Cultural Diversity",
            section: "A01",
            credits: "3.0"
        },
        {
            label: "SP - 1523 Elementary Spanish I",
            section: "C01",
            credits: "3.0"
        },
        {
            label: "SP - 1524 Elementary Spanish II",
            section: "D01",
            credits: "3.0"
        },
        {
            label: "SP - 2521 Intermediate Spanish I",
            section: "A01",
            credits: "3.0"
        },
        {
            label: "SP - 2522 Intermediate Spanish II",
            section: "B01",
            credits: "3.0"
        },
        {
            label: "SP - 3521 Advanced Spanish I",
            section: "C01",
            credits: "3.0"
        },
        {
            label: "SP - 3522 Advanced Spanish II",
            section: "D01",
            credits: "3.0"
        },
        {
            label: "SP - 3523 Topics In Latin American Culture",
            section: "A01 - Topics In Latin American Culture",
            credits: "3.0"
        },
        {
            label: "SP - 3526 Comparative Business Environments",
            section: "D01",
            credits: "3.0"
        },
        {
            label: "SP - 3530 Spanish Film/Media: Cultural Issues",
            section: "B01",
            credits: "3.0"
        },
        {
            label: "SP - 3531 Contemporary Us Latino Literature & Culture",
            section: "C01",
            credits: "3.0"
        },
        {
            label: "SP - 3532 Studies In Spanish Literature: Artistic Expression And Nation Building",
            section: "A01",
            credits: "3.0"
        },
        {
            label: "SS - 1505 Games For Understanding Complexity",
            section: "A01",
            credits: "3.0"
        },
        {
            label: "SS - 510 Principles of Epidemiology",
            section: "S01",
            credits: "3.0"
        },
        {
            label: "SS - 560 Artificial Intelligence: Exploring Technology, Ethics and Policy",
            section: "S01",
            credits: "3.0"
        },
        {
            label: "STS - 1200 Fundamentals Of Global Health",
            section: "C01",
            credits: "3.0"
        },
        {
            label: "STS - 4000 Senior Seminar In Global Public Health",
            section: "A01",
            credits: "3.0"
        },
        {
            label: "SYS - 501 Concepts Of Systems Engineering",
            section: "F01",
            credits: "3.0"
        },
        {
            label: "SYS - 502 Business Practices",
            section: "F01",
            credits: "3.0"
        },
        {
            label: "SYS - 510 Systems Architecture And Design",
            section: "S01",
            credits: "3.0"
        },
        {
            label: "SYS - 511 Systems Integration, Verification & Validation",
            section: "F01",
            credits: "3.0"
        },
        {
            label: "SYS - 512 Requirements Engineering",
            section: "S01",
            credits: "3.0"
        },
        {
            label: "SYS - 521 Model Based Systems Engineering",
            section: "S01",
            credits: "3.0"
        },
        {
            label: "SYS - 540 Introduction To Systems Thinking",
            section: "S01",
            credits: "3.0"
        },
        {
            label: "SYS - 579 Special Topics",
            section: "F02 - ST: Complex Decision Making",
            credits: "3.0"
        },
        {
            label: "SYS - 585 Systems Engineering Capstone Experience",
            section: "F01",
            credits: "3.0"
        },
        {
            label: "TH - 1221 Introduction to Theatre on Page and Stage",
            section: "A01",
            credits: "3.0"
        },
        {
            label: "TH - 201X Ballet I",
            section: "A01",
            credits: "1.5"
        },
        {
            label: "TH - 205X Dance for Musical Theatre",
            section: "D01",
            credits: "1.5"
        },
        {
            label: "TH - 2100 Fundamentals of Acting",
            section: "A01",
            credits: "3.0"
        },
        {
            label: "TH - 2400 Fundamentals of Theatrical Design",
            section: "A01",
            credits: "3.0"
        },
        {
            label: "TH - 2500 Fundamentals of Technical Theatre",
            section: "C01",
            credits: "3.0"
        },
        {
            label: "TH - 310X Scene Study for Actors & Directors",
            section: "D01",
            credits: "3.0"
        },
        {
            label: "TH - 3200 Special Topics in Dramatic Literature",
            section: "B01",
            credits: "3.0"
        },
        {
            label: "TH - 3240 Playwriting",
            section: "A01",
            credits: "3.0"
        },
        {
            label: "TH - 3300 Special Topics in Theater Studies",
            section: "D01",
            credits: "3.0"
        },
        {
            label: "TH - 3400 Lighting Design",
            section: "C01",
            credits: "3.0"
        },
        {
            label: "TH - 3510 Scenic Fabrication",
            section: "B01",
            credits: "3.0"
        },
        {
            label: "WR - 1010 Elements Of Writing",
            section: "A01",
            credits: "3.0"
        },
        {
            label: "WR - 1011 Writing About Science And Technology",
            section: "A01",
            credits: "3.0"
        },
        {
            label: "WR - 1020 Introduction To Rhetoric",
            section: "C01",
            credits: "3.0"
        },
        {
            label: "WR - 2010 Elements Of Style",
            section: "A01",
            credits: "3.0"
        },
        {
            label: "WR - 2200 AI in Writing and Communication",
            section: "C01",
            credits: "3.0"
        },
        {
            label: "WR - 2210 Business Writing And Communication",
            section: "A01",
            credits: "3.0"
        },
        {
            label: "WR - 2310 Visual Rhetoric",
            section: "B01",
            credits: "3.0"
        },
        {
            label: "WR - 2410 Screenwriting",
            section: "D01",
            credits: "3.0"
        },
        {
            label: "WR - 2450 Narrative Design for Interactive Media and Games",
            section: "A01",
            credits: "3.0"
        },
        {
            label: "WR - 2500 Writing in the Life Sciences",
            section: "B01",
            credits: "3.0"
        },
        {
            label: "WR - 3011 Teaching Writing",
            section: "A01",
            credits: "3.0"
        },
        {
            label: "WR - 3112 Rhetorical Theory",
            section: "A01",
            credits: "3.0"
        },
        {
            label: "WR - 3210 Technical Writing",
            section: "A01",
            credits: "3.0"
        },
        {
            label: "WR - 3214 Writing About Disease And Public Health",
            section: "B01",
            credits: "3.0"
        },
        {
            label: "WR - 3450 Writing Characters For Interactive Media & Games",
            section: "C01",
            credits: "3.0"
        },
        {
            label: "WR - 4111 Research Methods In Writing",
            section: "B01",
            credits: "3.0"
        },
        {
            label: "WR - 4210 Medical Writing",
            section: "C01",
            credits: "3.0"
        },
        {
            label: "WR - 513 Ethical Impact and Communication in  Robotics and AI Research",
            section: "S01",
            credits: "3.0"
        },
        {
            label: "WPE - 1003 Intro To Badminton",
            section: "C01",
            credits: "0.75"
        },
        {
            label: "WPE - 1008 Rowing For Fitness",
            section: "A01",
            credits: "0.75"
        },
        {
            label: "WPE - 1009 Walking For Fitness",
            section: "A01",
            credits: "0.75"
        },
        {
            label: "WPE - 1011 Touch Football",
            section: "A02",
            credits: "0.75"
        },
        {
            label: "WPE - 1012 Basketball",
            section: "A01",
            credits: "0.75"
        },
        {
            label: "WPE - 1013 Softball",
            section: "A01",
            credits: "0.75"
        },
        {
            label: "WPE - 1017 Beginning Swimming",
            section: "A01",
            credits: "0.75"
        },
        {
            label: "WPE - 1018 Volleyball",
            section: "A01",
            credits: "0.75"
        },
        {
            label: "WPE - 1019 Soccer",
            section: "A01",
            credits: "0.75"
        },
        {
            label: "WPE - 1054 Plyometrics",
            section: "A01",
            credits: "0.75"
        },
        {
            label: "WPE - 1055 Physical Conditioning",
            section: "A01",
            credits: "0.75"
        },
        {
            label: "WPE - 1070 Leisure Education: Redefining Social Norms",
            section: "D02",
            credits: "0.75"
        },
        {
            label: "WPE - 1077 Swimming For Fitness",
            section: "BO1",
            credits: "0.75"
        },
        {
            label: "WPE - 1078 Aquatic Conditioning",
            section: "B01",
            credits: "0.75"
        },
        {
            label: "WPE - 1099 Healthy Alternative",
            section: "A01 - Healthy Alternative: Zumba",
            credits: "0.75"
        },
        {
            label: "WPE - 1200 Club Sport - Miscellaneous",
            section: "A01",
            credits: "0.75"
        },
        {
            label: "WPE - 1201 Club Sport - Alpine Ski Team",
            section: "C01",
            credits: "0.75"
        },
        {
            label: "WPE - 1202 Club Sport - Badminton",
            section: "F01",
            credits: "0.75"
        },
        {
            label: "WPE - 1203 Club Sport - Ballroom Dancing",
            section: "F01",
            credits: "0.75"
        },
        {
            label: "WPE - 1204 Club Sport - Dance Team",
            section: "F01",
            credits: "0.75"
        },
        {
            label: "WPE - 1205 Club Sport - Fencing Team",
            section: "A01",
            credits: "0.75"
        },
        {
            label: "WPE - 1206 Club Sport - Men's Ice Hockey",
            section: "B01",
            credits: "0.75"
        },
        {
            label: "WPE - 1207 Club Sport - Karate",
            section: "A01",
            credits: "0.75"
        },
        {
            label: "WPE - 1209 Club Sport- Women's Rugby Team",
            section: "F01",
            credits: "0.75"
        },
        {
            label: "WPE - 1210 Club Sport - Men's Ultimate Frisbee Team",
            section: "F01",
            credits: "0.75"
        },
        {
            label: "WPE - 1211 Club Sport - Women's Ultimate Frisbee Team",
            section: "F01",
            credits: "0.75"
        },
        {
            label: "WPE - 1212 Club Sport - Men's Lacrosse Team",
            section: "C01",
            credits: "0.75"
        },
        {
            label: "WPE - 1213 Club Sport - Women's Lacrosse Team",
            section: "C01",
            credits: "0.75"
        },
        {
            label: "WPE - 1214 Club Sport - Men's Volleyball Team",
            section: "F01",
            credits: "0.75"
        },
        {
            label: "WPE - 1216 Club Sport - Pep Band",
            section: "C01",
            credits: "0.75"
        },
        {
            label: "WPE - 1217 Club Sport - Sailing",
            section: "F01",
            credits: "0.75"
        },
        {
            label: "WPE - 1219 Club Sport - Soma (Society of Martial Arts)",
            section: "F01",
            credits: "0.75"
        },
        {
            label: "WPE - 1220 Club Sport - Smas: Boffer Games",
            section: "A01",
            credits: "0.75"
        },
        {
            label: "WPE - 1221 Club Sport - Running",
            section: "F01",
            credits: "0.75"
        },
        {
            label: "WPE - 1222 Club Sport - Men's Soccer",
            section: "F01",
            credits: "0.75"
        },
        {
            label: "WPE - 1223 Club Sport - Women's Soccer",
            section: "F01",
            credits: "0.75"
        },
        {
            label: "WPE - 1224 Club Sport - Cheerleading",
            section: "F01",
            credits: "0.75"
        },
        {
            label: "WPE - 1225 Club Sport - Scuba Co-Ed",
            section: "D01",
            credits: "0.75"
        },
        {
            label: "WPE - 1226 Club Sport - Water Polo",
            section: "F01",
            credits: "0.75"
        },
        {
            label: "WPE - 1227 Club Sport - Tennis",
            section: "F01",
            credits: "0.75"
        },
        {
            label: "WPE - 1228 Club Sport - Cycling",
            section: "F01",
            credits: "0.75"
        },
        {
            label: "WPE - 1229 Club Sport - Men's Rugby",
            section: "F01",
            credits: "0.75"
        },
        {
            label: "WPE - 1230 Club Sport - Competitive Climbing Co-Ed",
            section: "B01",
            credits: "0.75"
        },
        {
            label: "WPE - 1231 Club Sport - Freestyle Wrestling",
            section: "F01",
            credits: "0.75"
        },
        {
            label: "WPE - 1232 Club Sport - Equestrian",
            section: "F01",
            credits: "0.75"
        },
        {
            label: "WPE - 1233 Club Sport - Men's Basketball",
            section: "C01",
            credits: "0.75"
        },
        {
            label: "WPE - 1234 Club Sport - Women\u2019s Basketball",
            section: "C01",
            credits: "0.75"
        },
        {
            label: "WPE - 1235 Club Sport - Women\u2019s Volleyball",
            section: "F01",
            credits: "0.75"
        },
        {
            label: "WPE - 1236 Club Sport - Women\u2019s Ice Hockey",
            section: "B01",
            credits: "0.75"
        },
        {
            label: "WPE - 1237 Club Sport \u2013 Outing Club: Climbing",
            section: "F01",
            credits: "0.75"
        },
        {
            label: "WPE - 1238 Club Sport \u2013 Rangeela: Bollywood Bhangra Fusion",
            section: "F01",
            credits: "0.75"
        },
        {
            label: "WPE - 1239 Club Sport \u2013 Powerlifting",
            section: "F01",
            credits: "0.75"
        },
        {
            label: "WPE - 1601 Insight Program",
            section: "F01",
            credits: "0.75"
        },
        {
            label: "WPE - 1611 Introduction to Mindfulness",
            section: "A01",
            credits: "0.75"
        },
        {
            label: "WPE - 1612 Introductory Yoga",
            section: "A01",
            credits: "0.75"
        },
        {
            label: "WPE - 1613 Succeeding as an Introvert",
            section: "B01",
            credits: "0.75"
        },
        {
            label: "WPE - 1699 Special Topics in Holistic Well-Being",
            section: "A01",
            credits: "0.75"
        },
        {
            label: "WPE - 2001 Varsity Football Team",
            section: "A01",
            credits: "0.75"
        },
        {
            label: "WPE - 2002 Varsity Men's Soccer Team",
            section: "A01",
            credits: "0.75"
        },
        {
            label: "WPE - 2003 Varsity Women's Soccer Team",
            section: "A01",
            credits: "0.75"
        },
        {
            label: "WPE - 2004 Varsity Field Hockey Team",
            section: "A01",
            credits: "0.75"
        },
        {
            label: "WPE - 2005 Varsity Women's Volleyball Team",
            section: "A01",
            credits: "0.75"
        },
        {
            label: "WPE - 2006 Varsity Men's And Women's Cross Country Team",
            section: "A01",
            credits: "0.75"
        },
        {
            label: "WPE - 2007 Varsity Wrestling Team",
            section: "B01",
            credits: "0.75"
        },
        {
            label: "WPE - 2008 Varsity Men's Basketball Team",
            section: "B01",
            credits: "0.75"
        },
        {
            label: "WPE - 2009 Varsity Women's Basketball Team",
            section: "B01",
            credits: "0.75"
        },
        {
            label: "WPE - 2010 Varsity Men's And Women's Swim Team",
            section: "BO1",
            credits: "0.75"
        },
        {
            label: "WPE - 2011 Varsity Men's And Women's Indoor Track Team",
            section: "BO1",
            credits: "0.75"
        },
        {
            label: "WPE - 2012 Varsity Baseball Team",
            section: "C01",
            credits: "0.75"
        },
        {
            label: "WPE - 2013 Varsity Softball Team",
            section: "C01",
            credits: "0.75"
        },
        {
            label: "WPE - 2014 Varsity Men's And Women's Outdoor Track Team",
            section: "D01",
            credits: "0.75"
        },
        {
            label: "WPE - 2015 Varsity Men's Crew Team",
            section: "A01",
            credits: "0.75"
        },
        {
            label: "WPE - 2016 Varsity Women's Crew Team",
            section: "A01",
            credits: "0.75"
        }
    
];

export default allCourses;