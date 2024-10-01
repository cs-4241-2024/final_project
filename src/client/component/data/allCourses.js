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
        label: "ACC - 2060 Financial Statements For Decision Making",
        section: "D01",
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
        label: "AE - 2320 Introduction to Orbital Mechanics",
        section: "CL01/CX02",
        credits: "3.0"
    },
    {
        label: "AE - 2320 Introduction to Orbital Mechanics",
        section: "CL01/CX03",
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
        label: "AE - 3010 Experimentation and Data Science with Aerospace Engineering Applications",
        section: "CL01/CX02",
        credits: "3.0"
    },
    {
        label: "AE - 3010 Experimentation and Data Science with Aerospace Engineering Applications",
        section: "CL01/CX03",
        credits: "3.0"
    },
    {
        label: "AE - 3010 Experimentation and Data Science with Aerospace Engineering Applications",
        section: "CL01/CX04",
        credits: "3.0"
    },
    {
        label: "AE - 3010 Experimentation and Data Science with Aerospace Engineering Applications",
        section: "CL01/CX05",
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
        label: "AE - 3420 Fundamentals of Aerospace Structures",
        section: "B02",
        credits: "3.0"
    },
    {
        label: "AE - 3430 Fundamentals of Composite Materials",
        section: "C01",
        credits: "3.0"
    },
    {
        label: "AE - 3430 Fundamentals of Composite Materials",
        section: "C02",
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
        label: "AE - 5031 Applied Computational Methods for Partial Differential Equations",
        section: "B02",
        credits: "2.0"
    },
    {
        label: "AE - 5032 Aerospace Engineering Seminar",
        section: "A01",
        credits: "0.0"
    },
    {
        label: "AE - 5032 Aerospace Engineering Seminar",
        section: "A02",
        credits: "0.0"
    },
    {
        label: "AE - 5032 Aerospace Engineering Seminar",
        section: "A03",
        credits: "0.0"
    },
    {
        label: "AE - 5032 Aerospace Engineering Seminar",
        section: "B01",
        credits: "0.0"
    },
    {
        label: "AE - 5032 Aerospace Engineering Seminar",
        section: "B02",
        credits: "0.0"
    },
    {
        label: "AE - 5032 Aerospace Engineering Seminar",
        section: "B03",
        credits: "0.0"
    },
    {
        label: "AE - 5032 Aerospace Engineering Seminar",
        section: "C01",
        credits: "0.0"
    },
    {
        label: "AE - 5032 Aerospace Engineering Seminar",
        section: "C02",
        credits: "0.0"
    },
    {
        label: "AE - 5032 Aerospace Engineering Seminar",
        section: "C03",
        credits: "0.0"
    },
    {
        label: "AE - 5032 Aerospace Engineering Seminar",
        section: "D01",
        credits: "0.0"
    },
    {
        label: "AE - 5032 Aerospace Engineering Seminar",
        section: "D02",
        credits: "0.0"
    },
    {
        label: "AE - 5032 Aerospace Engineering Seminar",
        section: "D03",
        credits: "0.0"
    },
    {
        label: "AE - 5093 Special Topics",
        section: "B01 - ST: Orbital Mechanics",
        credits: "2.0"
    },
    {
        label: "AE - 5093 Special Topics",
        section: "B02 - ST: Orbital Mechanics",
        credits: "2.0"
    },
    {
        label: "AE - 5093 Special Topics",
        section: "D01 - ST: Scientific Deep Learning for Engineers",
        credits: "2.0"
    },
    {
        label: "AE - 5093 Special Topics",
        section: "D02 - ST: Scientific Deep Learning for Engineers",
        credits: "2.0"
    },
    {
        label: "AE - 5131 Incompressible Fluid Dynamics",
        section: "C01",
        credits: "2.0"
    },
    {
        label: "AE - 5131 Incompressible Fluid Dynamics",
        section: "C02",
        credits: "2.0"
    },
    {
        label: "AE - 5132 Compressible Fluid Dynamics",
        section: "D01",
        credits: "2.0"
    },
    {
        label: "AE - 5132 Compressible Fluid Dynamics",
        section: "D02",
        credits: "2.0"
    },
    {
        label: "AE - 5133 Kinetic Theory of Gases and Applications",
        section: "B01",
        credits: "2.0"
    },
    {
        label: "AE - 5133 Kinetic Theory of Gases and Applications",
        section: "B02",
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
        label: "AE - 5233 Combustion",
        section: "C02",
        credits: "2.0"
    },
    {
        label: "AE - 5234 Sustainable Energy Systems",
        section: "A01",
        credits: "2.0"
    },
    {
        label: "AE - 5234 Sustainable Energy Systems",
        section: "A02",
        credits: "2.0"
    },
    {
        label: "AE - 5331 Linear Control Systems",
        section: "C01",
        credits: "2.0"
    },
    {
        label: "AE - 5331 Linear Control Systems",
        section: "C02",
        credits: "2.0"
    },
    {
        label: "AE - 5334 Spacecraft Dynamics and Control",
        section: "D01",
        credits: "2.0"
    },
    {
        label: "AE - 5334 Spacecraft Dynamics and Control",
        section: "D02",
        credits: "2.0"
    },
    {
        label: "AE - 5335 Autonomous Aerial Vehicles",
        section: "A01",
        credits: "2.0"
    },
    {
        label: "AE - 5335 Autonomous Aerial Vehicles",
        section: "A02",
        credits: "2.0"
    },
    {
        label: "AE - 5431 Solid Mechanics for Aerospace Structures (2",
        section: "C01",
        credits: "2.0"
    },
    {
        label: "AE - 5431 Solid Mechanics for Aerospace Structures (2",
        section: "C02",
        credits: "2.0"
    },
    {
        label: "AE - 5432 Composite Materials",
        section: "D01",
        credits: "2.0"
    },
    {
        label: "AE - 5432 Composite Materials",
        section: "D02",
        credits: "2.0"
    },
    {
        label: "AE - 5433 Aeroelasticity",
        section: "A01",
        credits: "2.0"
    },
    {
        label: "AE - 5433 Aeroelasticity",
        section: "A02",
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
        label: "AR - 1100 Essentials Of Art",
        section: "A02",
        credits: "3.0"
    },
    {
        label: "AR - 1100 Essentials Of Art",
        section: "A03",
        credits: "3.0"
    },
    {
        label: "AR - 1100 Essentials Of Art",
        section: "A04",
        credits: "3.0"
    },
    {
        label: "AR - 1100 Essentials Of Art",
        section: "B01",
        credits: "3.0"
    },
    {
        label: "AR - 1100 Essentials Of Art",
        section: "B02",
        credits: "3.0"
    },
    {
        label: "AR - 1100 Essentials Of Art",
        section: "C01",
        credits: "3.0"
    },
    {
        label: "AR - 1100 Essentials Of Art",
        section: "C02",
        credits: "3.0"
    },
    {
        label: "AR - 1100 Essentials Of Art",
        section: "C03",
        credits: "3.0"
    },
    {
        label: "AR - 1100 Essentials Of Art",
        section: "C04",
        credits: "3.0"
    },
    {
        label: "AR - 1100 Essentials Of Art",
        section: "D01",
        credits: "3.0"
    },
    {
        label: "AR - 1100 Essentials Of Art",
        section: "D02",
        credits: "3.0"
    },
    {
        label: "AR - 1100 Essentials Of Art",
        section: "D03",
        credits: "3.0"
    },
    {
        label: "AR - 1101 Digital Imaging And Computer Art",
        section: "A01",
        credits: "3.0"
    },
    {
        label: "AR - 1101 Digital Imaging And Computer Art",
        section: "A02",
        credits: "3.0"
    },
    {
        label: "AR - 1101 Digital Imaging And Computer Art",
        section: "B01",
        credits: "3.0"
    },
    {
        label: "AR - 1101 Digital Imaging And Computer Art",
        section: "B02",
        credits: "3.0"
    },
    {
        label: "AR - 1101 Digital Imaging And Computer Art",
        section: "B03",
        credits: "3.0"
    },
    {
        label: "AR - 1101 Digital Imaging And Computer Art",
        section: "C01",
        credits: "3.0"
    },
    {
        label: "AR - 1101 Digital Imaging And Computer Art",
        section: "C02",
        credits: "3.0"
    },
    {
        label: "AR - 1101 Digital Imaging And Computer Art",
        section: "C03",
        credits: "3.0"
    },
    {
        label: "AR - 1101 Digital Imaging And Computer Art",
        section: "D01",
        credits: "3.0"
    },
    {
        label: "AR - 1111 Introduction To Art History",
        section: "A01",
        credits: "3.0"
    },
    {
        label: "AR - 1111 Introduction To Art History",
        section: "A02",
        credits: "3.0"
    },
    {
        label: "AR - 1111 Introduction To Art History",
        section: "B01",
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
        label: "AR - 2101 3d Modeling I",
        section: "A02",
        credits: "3.0"
    },
    {
        label: "AR - 2101 3d Modeling I",
        section: "C01",
        credits: "3.0"
    },
    {
        label: "AR - 2101 3d Modeling I",
        section: "C02",
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
        label: "AR - 2202 Figure Drawing",
        section: "C02",
        credits: "3.0"
    },
    {
        label: "AR - 2222 2d Animation I",
        section: "B01",
        credits: "3.0"
    },
    {
        label: "AR - 2222 2d Animation I",
        section: "C01",
        credits: "3.0"
    },
    {
        label: "AR - 2301 Graphic Design",
        section: "A01",
        credits: "3.0"
    },
    {
        label: "AR - 2301 Graphic Design",
        section: "D01",
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
        label: "AR - 2401 Video Production",
        section: "D01",
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
        label: "AR - 2750 Topics In Studio Art",
        section: "C01 - Topics In Studio Art: Art in the Makerspace",
        credits: "3.0"
    },
    {
        label: "AR - 2750 Topics In Studio Art",
        section: "C02 - Topics In Studio Art: Aesthetics, Visual Design, and UI",
        credits: "3.0"
    },
    {
        label: "AR - 2750 Topics In Studio Art",
        section: "D01 - Topics In Studio Art: Contemporary Miniature Painting",
        credits: "3.0"
    },
    {
        label: "AR - 2750 Topics In Studio Art",
        section: "D02 - Topics In Studio Art: Digital Photography",
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
        label: "BB - 1001 Introduction To Biology",
        section: "C01",
        credits: "3.0"
    },
    {
        label: "BB - 1002 Environmental Biology",
        section: "A01",
        credits: "3.0"
    },
    {
        label: "BB - 1002 Environmental Biology",
        section: "C01",
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
        label: "BB - 1004 Human Biology",
        section: "B01",
        credits: "3.0"
    },
    {
        label: "BB - 1101 Foundations of Cellular and Molecular Biotechnology",
        section: "A01",
        credits: "3.0"
    },
    {
        label: "BB - 1101 Foundations of Cellular and Molecular Biotechnology",
        section: "C01",
        credits: "3.0"
    },
    {
        label: "BB - 1102 Foundations of Ecology and Environmental Biology",
        section: "B01",
        credits: "3.0"
    },
    {
        label: "BB - 1102 Foundations of Ecology and Environmental Biology",
        section: "D01",
        credits: "3.0"
    },
    {
        label: "BB - 1801 Foundations of Biology and Biotechnology Laboratory",
        section: "BX01",
        credits: "3.0"
    },
    {
        label: "BB - 1801 Foundations of Biology and Biotechnology Laboratory",
        section: "BX02",
        credits: "3.0"
    },
    {
        label: "BB - 1801 Foundations of Biology and Biotechnology Laboratory",
        section: "BX03",
        credits: "3.0"
    },
    {
        label: "BB - 1801 Foundations of Biology and Biotechnology Laboratory",
        section: "CX01",
        credits: "3.0"
    },
    {
        label: "BB - 1801 Foundations of Biology and Biotechnology Laboratory",
        section: "CX02",
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
        label: "BB - 2030 Plant Diversity",
        section: "DL01/DX01",
        credits: "0.0"
    },
    {
        label: "BB - 2030 Plant Diversity",
        section: "DL01/DX02",
        credits: "0.0"
    },
    {
        label: "BB - 2030 Plant Diversity",
        section: "DL01/DX03",
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
        label: "BB - 2550 Cell Biology",
        section: "C01",
        credits: "3.0"
    },
    {
        label: "BB - 2550 Cell Biology",
        section: "D01",
        credits: "3.0"
    },
    {
        label: "BB - 2802 Enzymes, Proteins, and Purification Laboratory",
        section: "BL01/BX01",
        credits: "1.5"
    },
    {
        label: "BB - 2802 Enzymes, Proteins, and Purification Laboratory",
        section: "BL01/BX02",
        credits: "1.5"
    },
    {
        label: "BB - 2802 Enzymes, Proteins, and Purification Laboratory",
        section: "BL01/BX03",
        credits: "1.5"
    },
    {
        label: "BB - 2803 Anatomy and Physiology Laboratory",
        section: "CL01/CX01",
        credits: "1.5"
    },
    {
        label: "BB - 2803 Anatomy and Physiology Laboratory",
        section: "CL01/CX02",
        credits: "1.5"
    },
    {
        label: "BB - 2803 Anatomy and Physiology Laboratory",
        section: "CL01/CX03",
        credits: "1.5"
    },
    {
        label: "BB - 2803 Anatomy and Physiology Laboratory",
        section: "CL01/CX04",
        credits: "1.5"
    },
    {
        label: "BB - 2804 Ecology, Environment, and Animal Behavior Laboratory",
        section: "DX01",
        credits: "1.5"
    },
    {
        label: "BB - 2804 Ecology, Environment, and Animal Behavior Laboratory",
        section: "DX02",
        credits: "1.5"
    },
    {
        label: "BB - 2815 Microbial and Molecular Investigations Laboratory (",
        section: "AX01",
        credits: "3.0"
    },
    {
        label: "BB - 2815 Microbial and Molecular Investigations Laboratory (",
        section: "AX02",
        credits: "3.0"
    },
    {
        label: "BB - 2815 Microbial and Molecular Investigations Laboratory (",
        section: "AX03",
        credits: "3.0"
    },
    {
        label: "BB - 2920 Genetics",
        section: "A01",
        credits: "3.0"
    },
    {
        label: "BB - 2920 Genetics",
        section: "CL01/CD01",
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
        label: "BB - 3813 Animal Cell Culture Techniques Laboratory",
        section: "AX02",
        credits: "1.5"
    },
    {
        label: "BB - 3813 Animal Cell Culture Techniques Laboratory",
        section: "BX01",
        credits: "1.5"
    },
    {
        label: "BB - 3813 Animal Cell Culture Techniques Laboratory",
        section: "BX02",
        credits: "1.5"
    },
    {
        label: "BB - 3813 Animal Cell Culture Techniques Laboratory",
        section: "CX01",
        credits: "1.5"
    },
    {
        label: "BB - 3813 Animal Cell Culture Techniques Laboratory",
        section: "CX02",
        credits: "1.5"
    },
    {
        label: "BB - 3813 Animal Cell Culture Techniques Laboratory",
        section: "CX03",
        credits: "1.5"
    },
    {
        label: "BB - 3813 Animal Cell Culture Techniques Laboratory",
        section: "DX01",
        credits: "1.5"
    },
    {
        label: "BB - 3815 Physiologic Systems Laboratory",
        section: "BX01",
        credits: "3.0"
    },
    {
        label: "BB - 3815 Physiologic Systems Laboratory",
        section: "DX01",
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
        label: "BB - 4900 Advanced Topics in Biology and Biotechnology",
        section: "B01",
        credits: "3.0"
    },
    {
        label: "BB - 4900 Advanced Topics in Biology and Biotechnology",
        section: "D01",
        credits: "3.0"
    },
    {
        label: "BB - 501 Seminar",
        section: "F01",
        credits: "0.0"
    },
    {
        label: "BB - 501 Seminar",
        section: "S01",
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
        label: "BB - 570 Special Topics",
        section: "S01 - ST: Practical Process Control",
        credits: "3.0"
    },
    {
        label: "BB - 570 Special Topics",
        section: "SL02/SX02 - ST: Antibody Therapeutics",
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
        label: "BB - 581 Bioinformatics",
        section: "S01",
        credits: "3.0"
    },
    {
        label: "BB - 590 Advanced Topics in Biology and Biotechnology",
        section: "A01",
        credits: "2.0"
    },
    {
        label: "BB - 590 Advanced Topics in Biology and Biotechnology",
        section: "B01",
        credits: "2.0"
    },
    {
        label: "BB - 590 Advanced Topics in Biology and Biotechnology",
        section: "D01",
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
        label: "BCB - 501 Bioinformatics",
        section: "S01",
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
        label: "BCB - 510 BCB Seminar",
        section: "S01",
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
        label: "BME - 1004 Introduction To Programming In Matlab",
        section: "BL01/BX02",
        credits: "3.0"
    },
    {
        label: "BME - 1004 Introduction To Programming In Matlab",
        section: "CL01/CX01",
        credits: "3.0"
    },
    {
        label: "BME - 1004 Introduction To Programming In Matlab",
        section: "CL01/CX02",
        credits: "3.0"
    },
    {
        label: "BME - 1004 Introduction To Programming In Matlab",
        section: "DL01/DX01",
        credits: "3.0"
    },
    {
        label: "BME - 1004 Introduction To Programming In Matlab",
        section: "DL01/DX02",
        credits: "3.0"
    },
    {
        label: "BME - 1004 Introduction To Programming In Matlab",
        section: "DL01/DX03",
        credits: "3.0"
    },
    {
        label: "BME - 2001 Introduction To Biomaterials",
        section: "C01",
        credits: "3.0"
    },
    {
        label: "BME - 2001 Introduction To Biomaterials",
        section: "D01",
        credits: "3.0"
    },
    {
        label: "BME - 2210 Biomedical Signals, Instruments And Measurements",
        section: "B01",
        credits: "3.0"
    },
    {
        label: "BME - 2210 Biomedical Signals, Instruments And Measurements",
        section: "C01",
        credits: "3.0"
    },
    {
        label: "BME - 2211 Biomedical Data Analysis",
        section: "C01",
        credits: "3.0"
    },
    {
        label: "BME - 2211 Biomedical Data Analysis",
        section: "D01",
        credits: "3.0"
    },
    {
        label: "BME - 2502 Introduction To Biomechanics: Stress Analysis",
        section: "B01",
        credits: "3.0"
    },
    {
        label: "BME - 2502 Introduction To Biomechanics: Stress Analysis",
        section: "D01",
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
        label: "BME - 3012 Biomedical Sensors Laboratory: Techniques",
        section: "BL01/BX02",
        credits: "1.5"
    },
    {
        label: "BME - 3012 Biomedical Sensors Laboratory: Techniques",
        section: "BL01/BX03",
        credits: "1.5"
    },
    {
        label: "BME - 3013 . Biomedical Instrumentation Laboratory: Techniques",
        section: "CL01/CX02",
        credits: "1.5"
    },
    {
        label: "BME - 3013 . Biomedical Instrumentation Laboratory: Techniques",
        section: "CL01/CX03",
        credits: "1.5"
    },
    {
        label: "BME - 3013 . Biomedical Instrumentation Laboratory: Techniques",
        section: "CL01/DX01",
        credits: "1.5"
    },
    {
        label: "BME - 3014 Physiological Signals Laboratory: Techniques",
        section: "BL01/BX01",
        credits: "1.5"
    },
    {
        label: "BME - 3014 Physiological Signals Laboratory: Techniques",
        section: "BL01/BX02",
        credits: "1.5"
    },
    {
        label: "BME - 3111 Physiology And Engineering",
        section: "AL01/AX01",
        credits: "3.0"
    },
    {
        label: "BME - 3111 Physiology And Engineering",
        section: "AL01/AX02",
        credits: "3.0"
    },
    {
        label: "BME - 3111 Physiology And Engineering",
        section: "DL01/DX01",
        credits: "3.0"
    },
    {
        label: "BME - 3111 Physiology And Engineering",
        section: "DL01/DX02",
        credits: "3.0"
    },
    {
        label: "BME - 3300 Biomedical Engineering Design",
        section: "AL01/AX01",
        credits: "3.0"
    },
    {
        label: "BME - 3300 Biomedical Engineering Design",
        section: "AL01/AX02",
        credits: "3.0"
    },
    {
        label: "BME - 3300 Biomedical Engineering Design",
        section: "AL01/AX03",
        credits: "3.0"
    },
    {
        label: "BME - 3300 Biomedical Engineering Design",
        section: "BL01/BX01",
        credits: "3.0"
    },
    {
        label: "BME - 3300 Biomedical Engineering Design",
        section: "BL01/BX02",
        credits: "3.0"
    },
    {
        label: "BME - 3300 Biomedical Engineering Design",
        section: "BL01/BX03",
        credits: "3.0"
    },
    {
        label: "BME - 3505 Solid Biomechanics Laboratory: Techniques",
        section: "AL01/AX01",
        credits: "1.5"
    },
    {
        label: "BME - 3505 Solid Biomechanics Laboratory: Techniques",
        section: "AL01/AX02",
        credits: "1.5"
    },
    {
        label: "BME - 3505 Solid Biomechanics Laboratory: Techniques",
        section: "AL01/AX03",
        credits: "1.5"
    },
    {
        label: "BME - 3505 Solid Biomechanics Laboratory: Techniques",
        section: "CL01/CX01",
        credits: "1.5"
    },
    {
        label: "BME - 3505 Solid Biomechanics Laboratory: Techniques",
        section: "CL01/CX02",
        credits: "1.5"
    },
    {
        label: "BME - 3505 Solid Biomechanics Laboratory: Techniques",
        section: "CL01/CX03",
        credits: "1.5"
    },
    {
        label: "BME - 3507 Skeletal Biomechanics Laboratory: Techniques",
        section: "AL01/AX01",
        credits: "1.5"
    },
    {
        label: "BME - 3507 Skeletal Biomechanics Laboratory: Techniques",
        section: "AL01/AX02",
        credits: "1.5"
    },
    {
        label: "BME - 3507 Skeletal Biomechanics Laboratory: Techniques",
        section: "AL01/AX03",
        credits: "1.5"
    },
    {
        label: "BME - 360X Biotransport Laboratory I Techniques",
        section: "AL01/AX01",
        credits: "1.5"
    },
    {
        label: "BME - 360X Biotransport Laboratory I Techniques",
        section: "AL01/AX02",
        credits: "1.5"
    },
    {
        label: "BME - 360X Biotransport Laboratory I Techniques",
        section: "BL01/BX01",
        credits: "1.5"
    },
    {
        label: "BME - 360X Biotransport Laboratory I Techniques",
        section: "BL01/BX02",
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
        label: "BME - 3811 Biomaterials Laboratory: Techniques",
        section: "AX02",
        credits: "1.5"
    },
    {
        label: "BME - 3811 Biomaterials Laboratory: Techniques",
        section: "AX03",
        credits: "1.5"
    },
    {
        label: "BME - 3811 Biomaterials Laboratory: Techniques",
        section: "CX01",
        credits: "1.5"
    },
    {
        label: "BME - 3811 Biomaterials Laboratory: Techniques",
        section: "CX02",
        credits: "1.5"
    },
    {
        label: "BME - 3811 Biomaterials Laboratory: Techniques",
        section: "CX03",
        credits: "1.5"
    },
    {
        label: "BME - 3813 Cellular Engineering Laboratory: Techniques",
        section: "BL01/BX01",
        credits: "1.5"
    },
    {
        label: "BME - 3813 Cellular Engineering Laboratory: Techniques",
        section: "BL01/BX02",
        credits: "1.5"
    },
    {
        label: "BME - 3813 Cellular Engineering Laboratory: Techniques",
        section: "BL01/BX03",
        credits: "1.5"
    },
    {
        label: "BME - 3813 Cellular Engineering Laboratory: Techniques",
        section: "BL01/BX04",
        credits: "1.5"
    },
    {
        label: "BME - 3813 Cellular Engineering Laboratory: Techniques",
        section: "CL01/CX01",
        credits: "1.5"
    },
    {
        label: "BME - 3813 Cellular Engineering Laboratory: Techniques",
        section: "CL01/CX02",
        credits: "1.5"
    },
    {
        label: "BME - 3813 Cellular Engineering Laboratory: Techniques",
        section: "CL01/CX03",
        credits: "1.5"
    },
    {
        label: "BME - 3813 Cellular Engineering Laboratory: Techniques",
        section: "CL01/CX04",
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
        label: "BME - 4504 Biomechanics",
        section: "C01",
        credits: "3.0"
    },
    {
        label: "BME - 4505 Solid Biomechanics Laboratory: Applications",
        section: "BX01",
        credits: "1.5"
    },
    {
        label: "BME - 4505 Solid Biomechanics Laboratory: Applications",
        section: "DX01",
        credits: "1.5"
    },
    {
        label: "BME - 4505 Solid Biomechanics Laboratory: Applications",
        section: "X cancel",
        credits: "1.5"
    },
    {
        label: "BME - 4505 Solid Biomechanics Laboratory: Applications",
        section: "X cancel",
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
        label: "BME - 4813 Cellular Engineering Laboratory: Applications",
        section: "CL01/CX02",
        credits: "1.5"
    },
    {
        label: "BME - 4813 Cellular Engineering Laboratory: Applications",
        section: "DL01/DX01",
        credits: "1.5"
    },
    {
        label: "BME - 4813 Cellular Engineering Laboratory: Applications",
        section: "DL01/DX02",
        credits: "1.5"
    },
    {
        label: "BME - 4814 Biomaterials",
        section: "A01",
        credits: "3.0"
    },
    {
        label: "BME - 4814 Biomaterials",
        section: "C01",
        credits: "3.0"
    },
    {
        label: "BME - 4828 Biomaterial - Tissue Interactions",
        section: "B01",
        credits: "3.0"
    },
    {
        label: "BME - 4828 Biomaterial - Tissue Interactions",
        section: "D01",
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
        label: "BME - 591 Graduate Seminar",
        section: "S01",
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
        label: "BME - 595 Special Topics In Biomedical Engineering",
        section: "F01 - ST: Value Creation for Graduate Research",
        credits: "2.0"
    },
    {
        label: "BME - 595 Special Topics In Biomedical Engineering",
        section: "F02 - ST: Medical Devices for Global Health",
        credits: "2.0"
    },
    {
        label: "BME - 595 Special Topics In Biomedical Engineering",
        section: "F03 - ST: Computational Modeling for Biofluid and Medical Devices",
        credits: "2.0"
    },
    {
        label: "BME - 595 Special Topics In Biomedical Engineering",
        section: "S01 - ST: Biofabrication",
        credits: "2.0"
    },
    {
        label: "BME - 595 Special Topics In Biomedical Engineering",
        section: "S02 - ST:  Lab Automation",
        credits: "2.0"
    },
    {
        label: "BUS - 1020 Global Environment Of Business Decisions",
        section: "A02",
        credits: "3.0"
    },
    {
        label: "BUS - 1020 Global Environment Of Business Decisions",
        section: "C01",
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
        label: "BUS - 2020 The Legal Environment Of Business Decisions",
        section: "C01",
        credits: "3.0"
    },
    {
        label: "BUS - 2080 Data Analysis For Decision Making",
        section: "A01",
        credits: "3.0"
    },
    {
        label: "BUS - 2080 Data Analysis For Decision Making",
        section: "B01",
        credits: "3.0"
    },
    {
        label: "BUS - 2080 Data Analysis For Decision Making",
        section: "C01",
        credits: "3.0"
    },
    {
        label: "BUS - 2080 Data Analysis For Decision Making",
        section: "D01",
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
        label: "BUS - 691 Graduate Seminar",
        section: "S01",
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
        label: "CE - 2020 Surveying",
        section: "AL01/AX02",
        credits: "3.0"
    },
    {
        label: "CE - 2020 Surveying",
        section: "AL01/AX03",
        credits: "3.0"
    },
    {
        label: "CE - 3006 Design Of Steel Structures",
        section: "Interest List-C Term",
        credits: "0.0"
    },
    {
        label: "CE - 3006 Design Of Steel Structures",
        section: "CL01/CX01",
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
        label: "CE - 3026 Materials Of Construction",
        section: "CL01/CX02",
        credits: "3.0"
    },
    {
        label: "CE - 3026 Materials Of Construction",
        section: "CL01/CX03",
        credits: "3.0"
    },
    {
        label: "CE - 3026 Materials Of Construction",
        section: "CL01/CX04",
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
        label: "CE - 3059 Environmental Engineering",
        section: "C01",
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
        label: "CE - 4060 Environmental Engineering Laboratory",
        section: "DL01/DX02",
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
        label: "CE - 501 Professional Practice",
        section: "S02",
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
        label: "CE - 5303 Applied Finite Element Methods In Engineering",
        section: "C02",
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
        label: "CE - 580 Advanced Project Management",
        section: "F02",
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
        label: "CE - 590 Special Problems",
        section: "F02 - SP: Solid Waste Engineering",
        credits: "3.0"
    },
    {
        label: "CE - 590 Special Problems",
        section: "S02 - SP: Negotiation and Conflict Resolution in the Construction Industry",
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
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL01/AD02/AX02",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL01/AD02/AX03",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL01/AD02/AX04",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL01/AD02/AX05",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL01/AD02/AX07",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL01/AD02/AX08",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL01/AD02/AX09",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL01/AD02/AX10",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL01/AD02/AX12",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL01/AD02/AX13",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL01/AD02/AX16",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL01/AD02/AX17",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL01/AD03/AX02",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL01/AD03/AX03",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL01/AD03/AX04",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL01/AD03/AX05",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL01/AD03/AX07",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL01/AD03/AX08",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL01/AD03/AX09",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL01/AD03/AX10",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL01/AD03/AX12",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL01/AD03/AX13",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL01/AD03/AX16",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL01/AD03/AX17",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL01/AD04/AX02",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL01/AD04/AX03",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL01/AD04/AX04",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL01/AD04/AX05",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL01/AD04/AX07",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL01/AD04/AX08",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL01/AD04/AX09",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL01/AD04/AX10",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL01/AD04/AX12",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL01/AD04/AX13",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL01/AD04/AX16",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL01/AD04/AX17",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL01/AD05/AX02",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL01/AD05/AX03",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL01/AD05/AX04",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL01/AD05/AX05",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL01/AD05/AX07",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL01/AD05/AX08",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL01/AD05/AX09",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL01/AD05/AX10",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL01/AD05/AX12",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL01/AD05/AX13",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL01/AD05/AX16",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL01/AD05/AX17",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL01/AD06/AX02",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL01/AD06/AX03",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL01/AD06/AX04",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL01/AD06/AX05",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL01/AD06/AX07",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL01/AD06/AX08",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL01/AD06/AX09",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL01/AD06/AX10",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL01/AD06/AX12",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL01/AD06/AX13",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL01/AD06/AX16",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL01/AD06/AX17",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL01/AD07/AX02",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL01/AD07/AX03",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL01/AD07/AX04",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL01/AD07/AX05",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL01/AD07/AX07",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL01/AD07/AX08",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL01/AD07/AX09",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL01/AD07/AX10",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL01/AD07/AX12",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL01/AD07/AX13",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL01/AD07/AX16",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL01/AD07/AX17",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL01/AD08/AX02",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL01/AD08/AX03",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL01/AD08/AX04",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL01/AD08/AX05",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL01/AD08/AX07",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL01/AD08/AX08",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL01/AD08/AX09",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL01/AD08/AX10",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL01/AD08/AX12",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL01/AD08/AX13",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL01/AD08/AX16",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL01/AD08/AX17",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL02/AD02/AX01",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL02/AD02/AX03",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL02/AD02/AX04",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL02/AD02/AX05",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL02/AD02/AX06",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL02/AD02/AX08",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL02/AD02/AX09",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL02/AD02/AX10",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL02/AD02/AX11",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL02/AD02/AX13",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL02/AD02/AX15",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL02/AD02/AX17",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL02/AD03/AX01",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL02/AD03/AX03",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL02/AD03/AX04",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL02/AD03/AX05",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL02/AD03/AX06",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL02/AD03/AX08",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL02/AD03/AX09",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL02/AD03/AX10",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL02/AD03/AX11",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL02/AD03/AX13",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL02/AD03/AX15",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL02/AD03/AX17",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL02/AD05/AX01",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL02/AD05/AX03",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL02/AD05/AX04",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL02/AD05/AX05",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL02/AD05/AX06",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL02/AD05/AX08",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL02/AD05/AX09",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL02/AD05/AX10",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL02/AD05/AX11",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL02/AD05/AX13",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL02/AD05/AX15",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL02/AD05/AX17",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL02/AD06/AX01",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL02/AD06/AX03",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL02/AD06/AX04",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL02/AD06/AX05",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL02/AD06/AX06",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL02/AD06/AX08",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL02/AD06/AX09",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL02/AD06/AX10",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL02/AD06/AX11",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL02/AD06/AX13",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL02/AD06/AX15",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL02/AD06/AX17",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL02/AD07/AX01",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL02/AD07/AX03",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL02/AD07/AX04",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL02/AD07/AX05",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL02/AD07/AX06",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL02/AD07/AX08",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL02/AD07/AX09",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL02/AD07/AX10",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL02/AD07/AX11",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL02/AD07/AX13",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL02/AD07/AX15",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL02/AD07/AX17",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL02/AD08/AX01",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL02/AD08/AX03",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL02/AD08/AX04",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL02/AD08/AX05",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL02/AD08/AX06",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL02/AD08/AX08",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL02/AD08/AX09",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL02/AD08/AX10",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL02/AD08/AX11",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL02/AD08/AX13",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL02/AD08/AX15",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL02/AD08/AX17",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL03/AD02/AX01",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL03/AD02/AX02",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL03/AD02/AX03",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL03/AD02/AX05",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL03/AD02/AX06",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL03/AD02/AX07",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL03/AD02/AX08",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL03/AD02/AX10",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL03/AD02/AX11",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL03/AD02/AX12",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL03/AD02/AX13",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL03/AD02/AX15",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL03/AD02/AX16",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL03/AD02/AX17",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL03/AD03/AX01",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL03/AD03/AX02",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL03/AD03/AX03",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL03/AD03/AX05",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL03/AD03/AX06",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL03/AD03/AX07",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL03/AD03/AX08",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL03/AD03/AX10",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL03/AD03/AX11",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL03/AD03/AX12",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL03/AD03/AX13",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL03/AD03/AX15",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL03/AD03/AX16",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL03/AD03/AX17",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL03/AD04/AX01",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL03/AD04/AX02",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL03/AD04/AX03",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL03/AD04/AX05",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL03/AD04/AX06",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL03/AD04/AX07",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL03/AD04/AX08",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL03/AD04/AX10",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL03/AD04/AX11",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL03/AD04/AX12",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL03/AD04/AX13",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL03/AD04/AX15",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL03/AD04/AX16",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL03/AD04/AX17",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL03/AD05/AX01",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL03/AD05/AX02",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL03/AD05/AX03",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL03/AD05/AX05",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL03/AD05/AX06",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL03/AD05/AX07",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL03/AD05/AX08",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL03/AD05/AX10",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL03/AD05/AX11",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL03/AD05/AX12",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL03/AD05/AX13",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL03/AD05/AX15",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL03/AD05/AX16",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL03/AD05/AX17",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL03/AD06/AX01",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL03/AD06/AX02",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL03/AD06/AX03",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL03/AD06/AX05",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL03/AD06/AX06",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL03/AD06/AX07",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL03/AD06/AX08",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL03/AD06/AX10",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL03/AD06/AX11",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL03/AD06/AX12",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL03/AD06/AX13",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL03/AD06/AX15",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL03/AD06/AX16",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL03/AD06/AX17",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL03/AD07/AX01",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL03/AD07/AX02",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL03/AD07/AX03",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL03/AD07/AX05",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL03/AD07/AX06",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL03/AD07/AX07",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL03/AD07/AX08",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL03/AD07/AX10",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL03/AD07/AX11",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL03/AD07/AX12",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL03/AD07/AX13",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL03/AD07/AX15",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL03/AD07/AX16",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL03/AD07/AX17",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL04/AD02/AX01",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL04/AD02/AX02",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL04/AD02/AX03",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL04/AD02/AX05",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL04/AD02/AX06",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL04/AD02/AX07",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL04/AD02/AX08",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL04/AD02/AX10",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL04/AD02/AX11",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL04/AD02/AX12",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL04/AD02/AX13",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL04/AD02/AX15",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL04/AD02/AX16",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL04/AD02/AX17",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL04/AD03/AX01",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL04/AD03/AX02",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL04/AD03/AX03",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL04/AD03/AX05",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL04/AD03/AX06",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL04/AD03/AX07",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL04/AD03/AX08",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL04/AD03/AX10",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL04/AD03/AX11",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL04/AD03/AX12",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL04/AD03/AX13",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL04/AD03/AX15",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL04/AD03/AX16",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL04/AD03/AX17",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL04/AD04/AX01",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL04/AD04/AX02",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL04/AD04/AX03",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL04/AD04/AX05",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL04/AD04/AX06",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL04/AD04/AX07",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL04/AD04/AX08",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL04/AD04/AX10",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL04/AD04/AX11",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL04/AD04/AX12",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL04/AD04/AX13",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL04/AD04/AX15",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL04/AD04/AX16",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL04/AD04/AX17",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL04/AD05/AX01",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL04/AD05/AX02",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL04/AD05/AX03",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL04/AD05/AX05",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL04/AD05/AX06",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL04/AD05/AX07",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL04/AD05/AX08",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL04/AD05/AX10",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL04/AD05/AX11",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL04/AD05/AX12",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL04/AD05/AX13",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL04/AD05/AX15",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL04/AD05/AX16",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL04/AD05/AX17",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL04/AD06/AX01",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL04/AD06/AX02",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL04/AD06/AX03",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL04/AD06/AX05",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL04/AD06/AX06",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL04/AD06/AX07",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL04/AD06/AX08",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL04/AD06/AX10",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL04/AD06/AX11",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL04/AD06/AX12",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL04/AD06/AX13",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL04/AD06/AX15",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL04/AD06/AX16",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL04/AD06/AX17",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL04/AD08/AX01",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL04/AD08/AX02",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL04/AD08/AX03",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL04/AD08/AX05",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL04/AD08/AX06",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL04/AD08/AX07",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL04/AD08/AX08",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL04/AD08/AX10",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL04/AD08/AX11",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL04/AD08/AX12",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL04/AD08/AX13",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL04/AD08/AX15",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL04/AD08/AX16",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "AL04/AD08/AX17",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "Interest List-C Term",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "CL01/CD02/CX01",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "CL01/CD02/CX02",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "CL01/CD02/CX03",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "CL01/CD02/CX05",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "CL01/CD02/CX06",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "CL01/CD02/CX07",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "CL01/CD02/CX09",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "CL01/CD02/CX10",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "CL01/CD02/CX11",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "CL01/CD02/CX13",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "CL01/CD03/CX01",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "CL01/CD03/CX02",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "CL01/CD03/CX03",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "CL01/CD03/CX05",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "CL01/CD03/CX06",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "CL01/CD03/CX07",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "CL01/CD03/CX09",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "CL01/CD03/CX10",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "CL01/CD03/CX11",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "CL01/CD03/CX13",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "CL01/CD04/CX01",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "CL01/CD04/CX02",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "CL01/CD04/CX03",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "CL01/CD04/CX05",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "CL01/CD04/CX06",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "CL01/CD04/CX07",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "CL01/CD04/CX09",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "CL01/CD04/CX10",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "CL01/CD04/CX11",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "CL01/CD04/CX13",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "CL01/CD05/CX01",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "CL01/CD05/CX02",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "CL01/CD05/CX03",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "CL01/CD05/CX05",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "CL01/CD05/CX06",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "CL01/CD05/CX07",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "CL01/CD05/CX09",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "CL01/CD05/CX10",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "CL01/CD05/CX11",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "CL01/CD05/CX13",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "CL01/CD06/CX01",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "CL01/CD06/CX02",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "CL01/CD06/CX03",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "CL01/CD06/CX05",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "CL01/CD06/CX06",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "CL01/CD06/CX07",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "CL01/CD06/CX09",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "CL01/CD06/CX10",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "CL01/CD06/CX11",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "CL01/CD06/CX13",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "CL01/CD07/CX01",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "CL01/CD07/CX02",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "CL01/CD07/CX03",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "CL01/CD07/CX05",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "CL01/CD07/CX06",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "CL01/CD07/CX07",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "CL01/CD07/CX09",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "CL01/CD07/CX10",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "CL01/CD07/CX11",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "CL01/CD07/CX13",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "CL02/CD02/CX02",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "CL02/CD02/CX03",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "CL02/CD02/CX06",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "CL02/CD02/CX07",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "CL02/CD02/CX08",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "CL02/CD02/CX09",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "CL02/CD02/CX10",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "CL02/CD02/CX11",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "CL02/CD02/CX12",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "CL02/CD03/CX02",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "CL02/CD03/CX03",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "CL02/CD03/CX06",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "CL02/CD03/CX07",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "CL02/CD03/CX08",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "CL02/CD03/CX09",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "CL02/CD03/CX10",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "CL02/CD03/CX11",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "CL02/CD03/CX12",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "CL02/CD05/CX02",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "CL02/CD05/CX03",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "CL02/CD05/CX06",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "CL02/CD05/CX07",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "CL02/CD05/CX08",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "CL02/CD05/CX09",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "CL02/CD05/CX10",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "CL02/CD05/CX11",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "CL02/CD05/CX12",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "CL02/CD06/CX02",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "CL02/CD06/CX03",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "CL02/CD06/CX06",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "CL02/CD06/CX07",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "CL02/CD06/CX08",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "CL02/CD06/CX09",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "CL02/CD06/CX10",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "CL02/CD06/CX11",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "CL02/CD06/CX12",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "CL02/CD07/CX02",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "CL02/CD07/CX03",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "CL02/CD07/CX06",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "CL02/CD07/CX07",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "CL02/CD07/CX08",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "CL02/CD07/CX09",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "CL02/CD07/CX10",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "CL02/CD07/CX11",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "CL02/CD07/CX12",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "CL03/CD02/CX01",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "CL03/CD02/CX02",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "CL03/CD02/CX05",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "CL03/CD02/CX06",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "CL03/CD02/CX08",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "CL03/CD02/CX09",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "CL03/CD02/CX10",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "CL03/CD02/CX12",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "CL03/CD02/CX13",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "CL03/CD03/CX01",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "CL03/CD03/CX02",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "CL03/CD03/CX05",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "CL03/CD03/CX06",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "CL03/CD03/CX08",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "CL03/CD03/CX09",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "CL03/CD03/CX10",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "CL03/CD03/CX12",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "CL03/CD03/CX13",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "CL03/CD04/CX01",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "CL03/CD04/CX02",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "CL03/CD04/CX05",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "CL03/CD04/CX06",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "CL03/CD04/CX08",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "CL03/CD04/CX09",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "CL03/CD04/CX10",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "CL03/CD04/CX12",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "CL03/CD04/CX13",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "CL03/CD05/CX01",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "CL03/CD05/CX02",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "CL03/CD05/CX05",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "CL03/CD05/CX06",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "CL03/CD05/CX08",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "CL03/CD05/CX09",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "CL03/CD05/CX10",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "CL03/CD05/CX12",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "CL03/CD05/CX13",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "CL03/CD06/CX01",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "CL03/CD06/CX02",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "CL03/CD06/CX05",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "CL03/CD06/CX06",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "CL03/CD06/CX08",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "CL03/CD06/CX09",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "CL03/CD06/CX10",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "CL03/CD06/CX12",
        credits: "3.0"
    },
    {
        label: "CH - 1010 Chemical Properties, Bonding, And Forces",
        section: "CL03/CD06/CX13",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "Interest List-B Term",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "BL01/BD02/BX02",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "BL01/BD02/BX03",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "BL01/BD02/BX04",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "BL01/BD02/BX05",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "BL01/BD02/BX07",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "BL01/BD02/BX08",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "BL01/BD02/BX09",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "BL01/BD02/BX11",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "BL01/BD02/BX12",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "BL01/BD02/BX13",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "BL01/BD02/BX16",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "BL01/BD02/BX19",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "BL01/BD03/BX02",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "BL01/BD03/BX03",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "BL01/BD03/BX04",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "BL01/BD03/BX05",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "BL01/BD03/BX07",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "BL01/BD03/BX08",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "BL01/BD03/BX09",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "BL01/BD03/BX11",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "BL01/BD03/BX12",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "BL01/BD03/BX13",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "BL01/BD03/BX16",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "BL01/BD03/BX19",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "BL01/BD04/BX02",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "BL01/BD04/BX03",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "BL01/BD04/BX04",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "BL01/BD04/BX05",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "BL01/BD04/BX07",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "BL01/BD04/BX08",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "BL01/BD04/BX09",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "BL01/BD04/BX11",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "BL01/BD04/BX12",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "BL01/BD04/BX13",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "BL01/BD04/BX16",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "BL01/BD04/BX19",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "BL01/BD05/BX02",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "BL01/BD05/BX03",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "BL01/BD05/BX04",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "BL01/BD05/BX05",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "BL01/BD05/BX07",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "BL01/BD05/BX08",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "BL01/BD05/BX09",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "BL01/BD05/BX11",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "BL01/BD05/BX12",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "BL01/BD05/BX13",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "BL01/BD05/BX16",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "BL01/BD05/BX19",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "BL01/BD06/BX02",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "BL01/BD06/BX03",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "BL01/BD06/BX04",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "BL01/BD06/BX05",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "BL01/BD06/BX07",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "BL01/BD06/BX08",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "BL01/BD06/BX09",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "BL01/BD06/BX11",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "BL01/BD06/BX12",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "BL01/BD06/BX13",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "BL01/BD06/BX16",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "BL01/BD06/BX19",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "BL01/BD07/BX02",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "BL01/BD07/BX03",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "BL01/BD07/BX04",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "BL01/BD07/BX05",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "BL01/BD07/BX07",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "BL01/BD07/BX08",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "BL01/BD07/BX09",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "BL01/BD07/BX11",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "BL01/BD07/BX12",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "BL01/BD07/BX13",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "BL01/BD07/BX16",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "BL01/BD07/BX19",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "BL02/BD02/BX03",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "BL02/BD02/BX04",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "BL02/BD02/BX05",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "BL02/BD02/BX06",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "BL02/BD02/BX08",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "BL02/BD02/BX09",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "BL02/BD02/BX10",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "BL02/BD02/BX12",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "BL02/BD02/BX13",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "BL02/BD02/BX16",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "BL02/BD02/BX19",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "BL02/BD03/BX03",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "BL02/BD03/BX04",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "BL02/BD03/BX05",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "BL02/BD03/BX06",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "BL02/BD03/BX08",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "BL02/BD03/BX09",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "BL02/BD03/BX10",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "BL02/BD03/BX12",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "BL02/BD03/BX13",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "BL02/BD03/BX16",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "BL02/BD03/BX19",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "BL02/BD05/BX03",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "BL02/BD05/BX04",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "BL02/BD05/BX05",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "BL02/BD05/BX06",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "BL02/BD05/BX08",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "BL02/BD05/BX09",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "BL02/BD05/BX10",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "BL02/BD05/BX12",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "BL02/BD05/BX13",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "BL02/BD05/BX16",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "BL02/BD05/BX19",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "BL02/BD06/BX03",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "BL02/BD06/BX04",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "BL02/BD06/BX05",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "BL02/BD06/BX06",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "BL02/BD06/BX08",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "BL02/BD06/BX09",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "BL02/BD06/BX10",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "BL02/BD06/BX12",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "BL02/BD06/BX13",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "BL02/BD06/BX16",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "BL02/BD06/BX19",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "BL02/BD07/BX03",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "BL02/BD07/BX04",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "BL02/BD07/BX05",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "BL02/BD07/BX06",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "BL02/BD07/BX08",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "BL02/BD07/BX09",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "BL02/BD07/BX10",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "BL02/BD07/BX12",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "BL02/BD07/BX13",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "BL02/BD07/BX16",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "BL02/BD07/BX19",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "BL03/BD02/BX02",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "BL03/BD02/BX03",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "BL03/BD02/BX05",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "BL03/BD02/BX06",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "BL03/BD02/BX07",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "BL03/BD02/BX08",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "BL03/BD02/BX10",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "BL03/BD02/BX11",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "BL03/BD02/BX12",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "BL03/BD02/BX16",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "BL03/BD02/BX19",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "BL03/BD03/BX02",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "BL03/BD03/BX03",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "BL03/BD03/BX05",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "BL03/BD03/BX06",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "BL03/BD03/BX07",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "BL03/BD03/BX08",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "BL03/BD03/BX10",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "BL03/BD03/BX11",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "BL03/BD03/BX12",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "BL03/BD03/BX16",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "BL03/BD03/BX19",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "BL03/BD04/BX02",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "BL03/BD04/BX03",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "BL03/BD04/BX05",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "BL03/BD04/BX06",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "BL03/BD04/BX07",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "BL03/BD04/BX08",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "BL03/BD04/BX10",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "BL03/BD04/BX11",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "BL03/BD04/BX12",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "BL03/BD04/BX16",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "BL03/BD04/BX19",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "BL03/BD05/BX02",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "BL03/BD05/BX03",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "BL03/BD05/BX05",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "BL03/BD05/BX06",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "BL03/BD05/BX07",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "BL03/BD05/BX08",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "BL03/BD05/BX10",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "BL03/BD05/BX11",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "BL03/BD05/BX12",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "BL03/BD05/BX16",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "BL03/BD05/BX19",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "BL03/BD06/BX02",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "BL03/BD06/BX03",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "BL03/BD06/BX05",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "BL03/BD06/BX06",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "BL03/BD06/BX07",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "BL03/BD06/BX08",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "BL03/BD06/BX10",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "BL03/BD06/BX11",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "BL03/BD06/BX12",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "BL03/BD06/BX16",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "BL03/BD06/BX19",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "BL03/BD07/BX02",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "BL03/BD07/BX03",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "BL03/BD07/BX05",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "BL03/BD07/BX06",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "BL03/BD07/BX07",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "BL03/BD07/BX08",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "BL03/BD07/BX10",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "BL03/BD07/BX11",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "BL03/BD07/BX12",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "BL03/BD07/BX16",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "BL03/BD07/BX19",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "Interest List-D Term",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "DL01/DD01/DX03",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "DL01/DD01/DX04",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "DL01/DD01/DX07",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "DL01/DD01/DX08",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "DL01/DD02/DX03",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "DL01/DD02/DX04",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "DL01/DD02/DX07",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "DL01/DD02/DX08",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "DL01/DD03/DX03",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "DL01/DD03/DX04",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "DL01/DD03/DX07",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "DL01/DD03/DX08",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "DL02/DD01/DX02",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "DL02/DD01/DX03",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "DL02/DD01/DX04",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "DL02/DD01/DX06",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "DL02/DD01/DX07",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "DL02/DD01/DX08",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "DL02/DD02/DX02",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "DL02/DD02/DX03",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "DL02/DD02/DX04",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "DL02/DD02/DX06",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "DL02/DD02/DX07",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "DL02/DD02/DX08",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "DL02/DD03/DX02",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "DL02/DD03/DX03",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "DL02/DD03/DX04",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "DL02/DD03/DX06",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "DL02/DD03/DX07",
        credits: "3.0"
    },
    {
        label: "CH - 1020 Chemical Reactions",
        section: "DL02/DD03/DX08",
        credits: "3.0"
    },
    {
        label: "CH - 1030 Kinetics, Equilibrium And Thermodynamics",
        section: "Interest List-C Term",
        credits: "0.0"
    },
    {
        label: "CH - 1030 Kinetics, Equilibrium And Thermodynamics",
        section: "CL01/CX01",
        credits: "0.0"
    },
    {
        label: "CH - 1030 Kinetics, Equilibrium And Thermodynamics",
        section: "CL01/CX02",
        credits: "0.0"
    },
    {
        label: "CH - 1030 Kinetics, Equilibrium And Thermodynamics",
        section: "CL01/CX03",
        credits: "0.0"
    },
    {
        label: "CH - 1030 Kinetics, Equilibrium And Thermodynamics",
        section: "CL01/CX04",
        credits: "0.0"
    },
    {
        label: "CH - 1030 Kinetics, Equilibrium And Thermodynamics",
        section: "CL01/CX08",
        credits: "0.0"
    },
    {
        label: "CH - 1030 Kinetics, Equilibrium And Thermodynamics",
        section: "CL02/CX01",
        credits: "0.0"
    },
    {
        label: "CH - 1030 Kinetics, Equilibrium And Thermodynamics",
        section: "CL02/CX03",
        credits: "0.0"
    },
    {
        label: "CH - 1030 Kinetics, Equilibrium And Thermodynamics",
        section: "CL02/CX05",
        credits: "0.0"
    },
    {
        label: "CH - 1030 Kinetics, Equilibrium And Thermodynamics",
        section: "CL02/CX08",
        credits: "0.0"
    },
    {
        label: "CH - 1040 Spectroscopy In Organic And Polymer Chemistry",
        section: "Interest List-D Term",
        credits: "0.0"
    },
    {
        label: "CH - 1040 Spectroscopy In Organic And Polymer Chemistry",
        section: "DL01/DX01",
        credits: "0.0"
    },
    {
        label: "CH - 1040 Spectroscopy In Organic And Polymer Chemistry",
        section: "DL01/DX02",
        credits: "0.0"
    },
    {
        label: "CH - 1040 Spectroscopy In Organic And Polymer Chemistry",
        section: "DL01/DX04",
        credits: "0.0"
    },
    {
        label: "CH - 1040 Spectroscopy In Organic And Polymer Chemistry",
        section: "DL01/DX05",
        credits: "0.0"
    },
    {
        label: "CH - 2310 Organic Chemistry I",
        section: "B01",
        credits: "3.0"
    },
    {
        label: "CH - 2310 Organic Chemistry I",
        section: "B02",
        credits: "3.0"
    },
    {
        label: "CH - 2320 Organic Chemistry II",
        section: "C01",
        credits: "3.0"
    },
    {
        label: "CH - 2320 Organic Chemistry II",
        section: "C02",
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
        label: "CH - 2360 Organic Laboratory",
        section: "AL02/AX02",
        credits: "3.0"
    },
    {
        label: "CH - 2360 Organic Laboratory",
        section: "BL01/BX01",
        credits: "3.0"
    },
    {
        label: "CH - 2360 Organic Laboratory",
        section: "Interest List-D Term",
        credits: "3.0"
    },
    {
        label: "CH - 2360 Organic Laboratory",
        section: "DL01/DX01",
        credits: "3.0"
    },
    {
        label: "CH - 2360 Organic Laboratory",
        section: "DL01/DX02",
        credits: "3.0"
    },
    {
        label: "CH - 2640 Experimental Chemistry I: Instrumental Analysis",
        section: "AL01/AX01",
        credits: "3.0"
    },
    {
        label: "CH - 2640 Experimental Chemistry I: Instrumental Analysis",
        section: "AL01/AX02",
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
        label: "CH - 2660 Organic Synthesis And Analysis Laboratory",
        section: "CL01/CX01",
        credits: "0.0"
    },
    {
        label: "CH - 2670 Investigation Of Coordination Complexes Through Inquiry",
        section: "Interest List-D Term",
        credits: "0.0"
    },
    {
        label: "CH - 2670 Investigation Of Coordination Complexes Through Inquiry",
        section: "DL01/DX01",
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
        label: "CH - 3550 Chemical Dynamics",
        section: "BL01/BD01",
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
        label: "CH - 4150 Enzymology And Protein Characterization Laboratory",
        section: "CL01/C01",
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
        label: "CH - 520 Cell Signaling",
        section: "D02",
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
        label: "CH - 555 Advanced Topics",
        section: "S02 - ST: Drug Regulations",
        credits: "3.0"
    },
    {
        label: "CH - 571 Seminar",
        section: "F01",
        credits: "1.0"
    },
    {
        label: "CH - 571 Seminar",
        section: "S01",
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
        label: "CHE - 2013 Applied Chemical Engineering Thermodynamics",
        section: "CL01/CD01",
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
        label: "CHE - 3201 Kinetics And Reactor Design",
        section: "D01",
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
        label: "CHE - 3501 Applied Mathematics In Chemical Engineering",
        section: "DL01/DD01/DX01",
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
        label: "CHE - 4401 Unit Operations Of Chemical Engineering I",
        section: "AL01/AX02",
        credits: "3.0"
    },
    {
        label: "CHE - 4401 Unit Operations Of Chemical Engineering I",
        section: "AL01/AX03",
        credits: "3.0"
    },
    {
        label: "CHE - 4402 Unit Operations Of Chemical Engineering II",
        section: "BX01",
        credits: "3.0"
    },
    {
        label: "CHE - 4402 Unit Operations Of Chemical Engineering II",
        section: "BX02",
        credits: "3.0"
    },
    {
        label: "CHE - 4402 Unit Operations Of Chemical Engineering II",
        section: "BX03",
        credits: "3.0"
    },
    {
        label: "CHE - 4403 Chemical Engineering Design",
        section: "AL01/AD01",
        credits: "3.0"
    },
    {
        label: "CHE - 4403 Chemical Engineering Design",
        section: "AL02/AD02",
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
        label: "CHE - 4405 Chemical Process Dynamics And Control Laboratory",
        section: "CL01/CD01",
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
        label: "CHE - 501 Professional Development for Chemical Engineering Doctoral Students",
        section: "S01",
        credits: "0.0"
    },
    {
        label: "CHE - 502 Professional Development for Chemical Engineering Master\u2019s Students",
        section: "F01",
        credits: "0.0"
    },
    {
        label: "CHE - 502 Professional Development for Chemical Engineering Master\u2019s Students",
        section: "S01",
        credits: "0.0"
    },
    {
        label: "CHE - 503 Colloquium",
        section: "F01",
        credits: "0.0"
    },
    {
        label: "CHE - 503 Colloquium",
        section: "S01",
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
        label: "CHE - 580 Special Topics",
        section: "D02 - ST: TBD",
        credits: "3.0"
    },
    {
        label: "CN - 1541 Elementary Chinese I",
        section: "A01",
        credits: "3.0"
    },
    {
        label: "CN - 1541 Elementary Chinese I",
        section: "A02",
        credits: "3.0"
    },
    {
        label: "CN - 1541 Elementary Chinese I",
        section: "A03",
        credits: "3.0"
    },
    {
        label: "CN - 1542 Elementary Chinese II",
        section: "B01",
        credits: "3.0"
    },
    {
        label: "CN - 1542 Elementary Chinese II",
        section: "B02",
        credits: "3.0"
    },
    {
        label: "CN - 1543 Elementary Chinese III",
        section: "C01",
        credits: "3.0"
    },
    {
        label: "CN - 1543 Elementary Chinese III",
        section: "C02",
        credits: "3.0"
    },
    {
        label: "CN - 2541 Intermediate Chinese I",
        section: "D01",
        credits: "3.0"
    },
    {
        label: "CN - 2541 Intermediate Chinese I",
        section: "D02",
        credits: "3.0"
    },
    {
        label: "CN - 2542 Intermediate Chinese II",
        section: "A01",
        credits: "3.0"
    },
    {
        label: "CN - 2542 Intermediate Chinese II",
        section: "A02",
        credits: "3.0"
    },
    {
        label: "CN - 2543 Intermediate Chinese III",
        section: "B01",
        credits: "3.0"
    },
    {
        label: "CN - 2543 Intermediate Chinese III",
        section: "B02",
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
        label: "CS - 1004 Introduction To Programming For Non-Majors",
        section: "AL01/AX02",
        credits: "3.0"
    },
    {
        label: "CS - 1004 Introduction To Programming For Non-Majors",
        section: "AL01/AX03",
        credits: "3.0"
    },
    {
        label: "CS - 1004 Introduction To Programming For Non-Majors",
        section: "AL01/AX04",
        credits: "3.0"
    },
    {
        label: "CS - 1004 Introduction To Programming For Non-Majors",
        section: "AL01/AX06",
        credits: "3.0"
    },
    {
        label: "CS - 1004 Introduction To Programming For Non-Majors",
        section: "DL01/DX01",
        credits: "3.0"
    },
    {
        label: "CS - 1004 Introduction To Programming For Non-Majors",
        section: "DL01/DX02",
        credits: "3.0"
    },
    {
        label: "CS - 1004 Introduction To Programming For Non-Majors",
        section: "DL01/DX03",
        credits: "3.0"
    },
    {
        label: "CS - 1101 Introduction To Program Design",
        section: "Interest List-A Term",
        credits: "0.0"
    },
    {
        label: "CS - 1101 Introduction To Program Design",
        section: "AL01/AX04",
        credits: "0.0"
    },
    {
        label: "CS - 1101 Introduction To Program Design",
        section: "AL01/AX05",
        credits: "0.0"
    },
    {
        label: "CS - 1101 Introduction To Program Design",
        section: "AL01/AX06",
        credits: "0.0"
    },
    {
        label: "CS - 1101 Introduction To Program Design",
        section: "AL01/AX07",
        credits: "0.0"
    },
    {
        label: "CS - 1101 Introduction To Program Design",
        section: "AL01/AX08",
        credits: "0.0"
    },
    {
        label: "CS - 1101 Introduction To Program Design",
        section: "AL01/AX09",
        credits: "0.0"
    },
    {
        label: "CS - 1101 Introduction To Program Design",
        section: "AL01/AX10",
        credits: "0.0"
    },
    {
        label: "CS - 1101 Introduction To Program Design",
        section: "AL01/AX11",
        credits: "0.0"
    },
    {
        label: "CS - 1101 Introduction To Program Design",
        section: "AL01/AX12",
        credits: "0.0"
    },
    {
        label: "CS - 1101 Introduction To Program Design",
        section: "AL01/AX13",
        credits: "0.0"
    },
    {
        label: "CS - 1101 Introduction To Program Design",
        section: "AL01/AX14",
        credits: "0.0"
    },
    {
        label: "CS - 1101 Introduction To Program Design",
        section: "AL01/AX15",
        credits: "0.0"
    },
    {
        label: "CS - 1101 Introduction To Program Design",
        section: "AL02/AX04",
        credits: "0.0"
    },
    {
        label: "CS - 1101 Introduction To Program Design",
        section: "AL02/AX05",
        credits: "0.0"
    },
    {
        label: "CS - 1101 Introduction To Program Design",
        section: "AL02/AX06",
        credits: "0.0"
    },
    {
        label: "CS - 1101 Introduction To Program Design",
        section: "AL02/AX07",
        credits: "0.0"
    },
    {
        label: "CS - 1101 Introduction To Program Design",
        section: "AL02/AX08",
        credits: "0.0"
    },
    {
        label: "CS - 1101 Introduction To Program Design",
        section: "AL02/AX09",
        credits: "0.0"
    },
    {
        label: "CS - 1101 Introduction To Program Design",
        section: "AL02/AX10",
        credits: "0.0"
    },
    {
        label: "CS - 1101 Introduction To Program Design",
        section: "AL02/AX11",
        credits: "0.0"
    },
    {
        label: "CS - 1101 Introduction To Program Design",
        section: "AL02/AX12",
        credits: "0.0"
    },
    {
        label: "CS - 1101 Introduction To Program Design",
        section: "AL02/AX13",
        credits: "0.0"
    },
    {
        label: "CS - 1101 Introduction To Program Design",
        section: "AL02/AX14",
        credits: "0.0"
    },
    {
        label: "CS - 1101 Introduction To Program Design",
        section: "AL02/AX15",
        credits: "0.0"
    },
    {
        label: "CS - 1101 Introduction To Program Design",
        section: "AL03/AX01",
        credits: "0.0"
    },
    {
        label: "CS - 1101 Introduction To Program Design",
        section: "AL03/AX02",
        credits: "0.0"
    },
    {
        label: "CS - 1101 Introduction To Program Design",
        section: "AL03/AX03",
        credits: "0.0"
    },
    {
        label: "CS - 1101 Introduction To Program Design",
        section: "Interest List-C Term",
        credits: "0.0"
    },
    {
        label: "CS - 1101 Introduction To Program Design",
        section: "CL01/CX01",
        credits: "0.0"
    },
    {
        label: "CS - 1101 Introduction To Program Design",
        section: "CL01/CX02",
        credits: "0.0"
    },
    {
        label: "CS - 1101 Introduction To Program Design",
        section: "CL01/CX03",
        credits: "0.0"
    },
    {
        label: "CS - 1101 Introduction To Program Design",
        section: "CL01/CX04",
        credits: "0.0"
    },
    {
        label: "CS - 1102 Accelerated Introduction To Program Design",
        section: "AL01/AX01",
        credits: "3.0"
    },
    {
        label: "CS - 1102 Accelerated Introduction To Program Design",
        section: "AL01/AX02",
        credits: "3.0"
    },
    {
        label: "CS - 1102 Accelerated Introduction To Program Design",
        section: "AL01/AX03",
        credits: "3.0"
    },
    {
        label: "CS - 1102 Accelerated Introduction To Program Design",
        section: "AL01/AX04",
        credits: "3.0"
    },
    {
        label: "CS - 2011 Introduction To Machine Organization And Assembly Language",
        section: "BL01/BX01",
        credits: "3.0"
    },
    {
        label: "CS - 2011 Introduction To Machine Organization And Assembly Language",
        section: "BL01/BX02",
        credits: "3.0"
    },
    {
        label: "CS - 2011 Introduction To Machine Organization And Assembly Language",
        section: "BL01/BX03",
        credits: "3.0"
    },
    {
        label: "CS - 2011 Introduction To Machine Organization And Assembly Language",
        section: "BL01/BX04",
        credits: "3.0"
    },
    {
        label: "CS - 2011 Introduction To Machine Organization And Assembly Language",
        section: "BL01/BX05",
        credits: "3.0"
    },
    {
        label: "CS - 2011 Introduction To Machine Organization And Assembly Language",
        section: "DL01/DX01",
        credits: "3.0"
    },
    {
        label: "CS - 2011 Introduction To Machine Organization And Assembly Language",
        section: "DL01/DX02",
        credits: "3.0"
    },
    {
        label: "CS - 2011 Introduction To Machine Organization And Assembly Language",
        section: "DL01/DX03",
        credits: "3.0"
    },
    {
        label: "CS - 2011 Introduction To Machine Organization And Assembly Language",
        section: "DL01/DX04",
        credits: "3.0"
    },
    {
        label: "CS - 2011 Introduction To Machine Organization And Assembly Language",
        section: "DL01/DX05",
        credits: "3.0"
    },
    {
        label: "CS - 2022 Discrete Mathematics",
        section: "Interest List-A Term",
        credits: "3.0"
    },
    {
        label: "CS - 2022 Discrete Mathematics",
        section: "AL01/AD01",
        credits: "3.0"
    },
    {
        label: "CS - 2022 Discrete Mathematics",
        section: "AL01/AD02",
        credits: "3.0"
    },
    {
        label: "CS - 2022 Discrete Mathematics",
        section: "AL01/AD03",
        credits: "3.0"
    },
    {
        label: "CS - 2022 Discrete Mathematics",
        section: "AL01/AD04",
        credits: "3.0"
    },
    {
        label: "CS - 2022 Discrete Mathematics",
        section: "AL01/AD05",
        credits: "3.0"
    },
    {
        label: "CS - 2022 Discrete Mathematics",
        section: "BL01/BD01",
        credits: "3.0"
    },
    {
        label: "CS - 2022 Discrete Mathematics",
        section: "BL01/BD02",
        credits: "3.0"
    },
    {
        label: "CS - 2022 Discrete Mathematics",
        section: "BL01/BD03",
        credits: "3.0"
    },
    {
        label: "CS - 2022 Discrete Mathematics",
        section: "CL01/CD01",
        credits: "3.0"
    },
    {
        label: "CS - 2022 Discrete Mathematics",
        section: "CL01/CD02",
        credits: "3.0"
    },
    {
        label: "CS - 2022 Discrete Mathematics",
        section: "CL01/CD03",
        credits: "3.0"
    },
    {
        label: "CS - 2022 Discrete Mathematics",
        section: "CL01/CD04",
        credits: "3.0"
    },
    {
        label: "CS - 2022 Discrete Mathematics",
        section: "Interest List-D Term",
        credits: "3.0"
    },
    {
        label: "CS - 2022 Discrete Mathematics",
        section: "DL01/DD01",
        credits: "3.0"
    },
    {
        label: "CS - 2022 Discrete Mathematics",
        section: "DL01/DD02",
        credits: "3.0"
    },
    {
        label: "CS - 2022 Discrete Mathematics",
        section: "DL01/DD03",
        credits: "3.0"
    },
    {
        label: "CS - 2102 Object-Oriented Design Concepts",
        section: "Interest List-B Term",
        credits: "0.0"
    },
    {
        label: "CS - 2102 Object-Oriented Design Concepts",
        section: "BL01/BX01",
        credits: "0.0"
    },
    {
        label: "CS - 2102 Object-Oriented Design Concepts",
        section: "BL01/BX02",
        credits: "0.0"
    },
    {
        label: "CS - 2102 Object-Oriented Design Concepts",
        section: "BL01/BX03",
        credits: "0.0"
    },
    {
        label: "CS - 2102 Object-Oriented Design Concepts",
        section: "BL01/BX04",
        credits: "0.0"
    },
    {
        label: "CS - 2102 Object-Oriented Design Concepts",
        section: "BL01/BX05",
        credits: "0.0"
    },
    {
        label: "CS - 2102 Object-Oriented Design Concepts",
        section: "BL01/BX06",
        credits: "0.0"
    },
    {
        label: "CS - 2102 Object-Oriented Design Concepts",
        section: "BL01/BX08",
        credits: "0.0"
    },
    {
        label: "CS - 2102 Object-Oriented Design Concepts",
        section: "BL01/BX11",
        credits: "0.0"
    },
    {
        label: "CS - 2102 Object-Oriented Design Concepts",
        section: "BL02/BX07",
        credits: "0.0"
    },
    {
        label: "CS - 2102 Object-Oriented Design Concepts",
        section: "BL02/BX09",
        credits: "0.0"
    },
    {
        label: "CS - 2102 Object-Oriented Design Concepts",
        section: "BL02/BX10",
        credits: "0.0"
    },
    {
        label: "CS - 2102 Object-Oriented Design Concepts",
        section: "BL02/BX12",
        credits: "0.0"
    },
    {
        label: "CS - 2102 Object-Oriented Design Concepts",
        section: "BL02/BX13",
        credits: "0.0"
    },
    {
        label: "CS - 2102 Object-Oriented Design Concepts",
        section: "BL02/BX14",
        credits: "0.0"
    },
    {
        label: "CS - 2102 Object-Oriented Design Concepts",
        section: "BL02/BX15",
        credits: "0.0"
    },
    {
        label: "CS - 2102 Object-Oriented Design Concepts",
        section: "Interest List-D Term",
        credits: "0.0"
    },
    {
        label: "CS - 2102 Object-Oriented Design Concepts",
        section: "DL01/DX01",
        credits: "0.0"
    },
    {
        label: "CS - 2102 Object-Oriented Design Concepts",
        section: "DL01/DX02",
        credits: "0.0"
    },
    {
        label: "CS - 2102 Object-Oriented Design Concepts",
        section: "DL01/DX03",
        credits: "0.0"
    },
    {
        label: "CS - 2102 Object-Oriented Design Concepts",
        section: "DL01/DX04",
        credits: "0.0"
    },
    {
        label: "CS - 2103 Accelerated Object-Oriented Design Concepts",
        section: "Interest List-B Term",
        credits: "0.0"
    },
    {
        label: "CS - 2103 Accelerated Object-Oriented Design Concepts",
        section: "BL01/BX01",
        credits: "0.0"
    },
    {
        label: "CS - 2103 Accelerated Object-Oriented Design Concepts",
        section: "BL01/BX02",
        credits: "0.0"
    },
    {
        label: "CS - 2103 Accelerated Object-Oriented Design Concepts",
        section: "BL01/BX03",
        credits: "0.0"
    },
    {
        label: "CS - 2103 Accelerated Object-Oriented Design Concepts",
        section: "BL01/BX04",
        credits: "0.0"
    },
    {
        label: "CS - 2119 Application Building With Object-Oriented Concepts",
        section: "Interest List-D Term",
        credits: "0.0"
    },
    {
        label: "CS - 2119 Application Building With Object-Oriented Concepts",
        section: "DL01/DX01",
        credits: "0.0"
    },
    {
        label: "CS - 2119 Application Building With Object-Oriented Concepts",
        section: "DL01/DX02",
        credits: "0.0"
    },
    {
        label: "CS - 2119 Application Building With Object-Oriented Concepts",
        section: "DL01/DX03",
        credits: "0.0"
    },
    {
        label: "CS - 2119 Application Building With Object-Oriented Concepts",
        section: "DL01/DX04",
        credits: "0.0"
    },
    {
        label: "CS - 2223 Algorithms",
        section: "A01",
        credits: "3.0"
    },
    {
        label: "CS - 2223 Algorithms",
        section: "B01",
        credits: "3.0"
    },
    {
        label: "CS - 2223 Algorithms",
        section: "B02",
        credits: "3.0"
    },
    {
        label: "CS - 2223 Algorithms",
        section: "D01",
        credits: "3.0"
    },
    {
        label: "CS - 2223 Algorithms",
        section: "D02",
        credits: "3.0"
    },
    {
        label: "CS - 2301 Systems Programming For Non-Majors",
        section: "Interest List-B Term",
        credits: "0.0"
    },
    {
        label: "CS - 2301 Systems Programming For Non-Majors",
        section: "BL01/BX01",
        credits: "0.0"
    },
    {
        label: "CS - 2301 Systems Programming For Non-Majors",
        section: "BL01/BX02",
        credits: "0.0"
    },
    {
        label: "CS - 2301 Systems Programming For Non-Majors",
        section: "BL01/BX03",
        credits: "0.0"
    },
    {
        label: "CS - 2303 Systems Programming Concepts",
        section: "AL01/AX01",
        credits: "3.0"
    },
    {
        label: "CS - 2303 Systems Programming Concepts",
        section: "AL01/AX02",
        credits: "3.0"
    },
    {
        label: "CS - 2303 Systems Programming Concepts",
        section: "AL01/AX03",
        credits: "3.0"
    },
    {
        label: "CS - 2303 Systems Programming Concepts",
        section: "AL01/AX04",
        credits: "3.0"
    },
    {
        label: "CS - 2303 Systems Programming Concepts",
        section: "AL01/AX05",
        credits: "3.0"
    },
    {
        label: "CS - 2303 Systems Programming Concepts",
        section: "AL01/AX06",
        credits: "3.0"
    },
    {
        label: "CS - 2303 Systems Programming Concepts",
        section: "Interest List-C Term",
        credits: "3.0"
    },
    {
        label: "CS - 2303 Systems Programming Concepts",
        section: "CL01/CX01",
        credits: "3.0"
    },
    {
        label: "CS - 2303 Systems Programming Concepts",
        section: "CL01/CX02",
        credits: "3.0"
    },
    {
        label: "CS - 2303 Systems Programming Concepts",
        section: "CL01/CX03",
        credits: "3.0"
    },
    {
        label: "CS - 2303 Systems Programming Concepts",
        section: "CL02/CX04",
        credits: "3.0"
    },
    {
        label: "CS - 2303 Systems Programming Concepts",
        section: "CL02/CX05",
        credits: "3.0"
    },
    {
        label: "CS - 2303 Systems Programming Concepts",
        section: "CL02/CX06",
        credits: "3.0"
    },
    {
        label: "CS - 2303 Systems Programming Concepts",
        section: "CL02/CX07",
        credits: "3.0"
    },
    {
        label: "CS - 2303 Systems Programming Concepts",
        section: "CL02/CX08",
        credits: "3.0"
    },
    {
        label: "CS - 2303 Systems Programming Concepts",
        section: "CL03/CX13",
        credits: "3.0"
    },
    {
        label: "CS - 2303 Systems Programming Concepts",
        section: "CL03/CX14",
        credits: "3.0"
    },
    {
        label: "CS - 2303 Systems Programming Concepts",
        section: "CL03/CX15",
        credits: "3.0"
    },
    {
        label: "CS - 2303 Systems Programming Concepts",
        section: "CL03/CX16",
        credits: "3.0"
    },
    {
        label: "CS - 2303 Systems Programming Concepts",
        section: "CL03/CX17",
        credits: "3.0"
    },
    {
        label: "CS - 3013 Operating Systems",
        section: "A01",
        credits: "3.0"
    },
    {
        label: "CS - 3013 Operating Systems",
        section: "A02",
        credits: "3.0"
    },
    {
        label: "CS - 3013 Operating Systems",
        section: "A03",
        credits: "3.0"
    },
    {
        label: "CS - 3013 Operating Systems",
        section: "C01",
        credits: "3.0"
    },
    {
        label: "CS - 3013 Operating Systems",
        section: "C02",
        credits: "3.0"
    },
    {
        label: "CS - 3013 Operating Systems",
        section: "C04",
        credits: "3.0"
    },
    {
        label: "CS - 3041 Human-Computer Interaction",
        section: "B01",
        credits: "3.0"
    },
    {
        label: "CS - 3041 Human-Computer Interaction",
        section: "D01",
        credits: "3.0"
    },
    {
        label: "CS - 3043 Social Implications Of Information Processing",
        section: "A01",
        credits: "3.0"
    },
    {
        label: "CS - 3043 Social Implications Of Information Processing",
        section: "A02",
        credits: "3.0"
    },
    {
        label: "CS - 3043 Social Implications Of Information Processing",
        section: "B01",
        credits: "3.0"
    },
    {
        label: "CS - 3043 Social Implications Of Information Processing",
        section: "B02",
        credits: "3.0"
    },
    {
        label: "CS - 3043 Social Implications Of Information Processing",
        section: "B03",
        credits: "3.0"
    },
    {
        label: "CS - 3043 Social Implications Of Information Processing",
        section: "C01",
        credits: "3.0"
    },
    {
        label: "CS - 3043 Social Implications Of Information Processing",
        section: "C02",
        credits: "3.0"
    },
    {
        label: "CS - 3043 Social Implications Of Information Processing",
        section: "C03",
        credits: "3.0"
    },
    {
        label: "CS - 3043 Social Implications Of Information Processing",
        section: "D01",
        credits: "3.0"
    },
    {
        label: "CS - 3043 Social Implications Of Information Processing",
        section: "D02",
        credits: "3.0"
    },
    {
        label: "CS - 3043 Social Implications Of Information Processing",
        section: "D03",
        credits: "3.0"
    },
    {
        label: "CS - 3043 Social Implications Of Information Processing",
        section: "D04",
        credits: "3.0"
    },
    {
        label: "CS - 3133 Foundations Of Computer Science",
        section: "A01",
        credits: "3.0"
    },
    {
        label: "CS - 3133 Foundations Of Computer Science",
        section: "B01",
        credits: "3.0"
    },
    {
        label: "CS - 3133 Foundations Of Computer Science",
        section: "C01",
        credits: "3.0"
    },
    {
        label: "CS - 3133 Foundations Of Computer Science",
        section: "D01",
        credits: "3.0"
    },
    {
        label: "CS - 3431 Database Systems I",
        section: "A01",
        credits: "3.0"
    },
    {
        label: "CS - 3431 Database Systems I",
        section: "A02",
        credits: "3.0"
    },
    {
        label: "CS - 3431 Database Systems I",
        section: "B01",
        credits: "3.0"
    },
    {
        label: "CS - 3431 Database Systems I",
        section: "C01",
        credits: "3.0"
    },
    {
        label: "CS - 3431 Database Systems I",
        section: "C02",
        credits: "3.0"
    },
    {
        label: "CS - 3431 Database Systems I",
        section: "D01",
        credits: "3.0"
    },
    {
        label: "CS - 3516 Computer Networks",
        section: "B01",
        credits: "3.0"
    },
    {
        label: "CS - 3516 Computer Networks",
        section: "C01",
        credits: "3.0"
    },
    {
        label: "CS - 3516 Computer Networks",
        section: "D01",
        credits: "3.0"
    },
    {
        label: "CS - 3733 Software Engineering",
        section: "Interest List-B Term",
        credits: "0.0"
    },
    {
        label: "CS - 3733 Software Engineering",
        section: "BL01/BX01",
        credits: "0.0"
    },
    {
        label: "CS - 3733 Software Engineering",
        section: "BL02/BX02",
        credits: "0.0"
    },
    {
        label: "CS - 3733 Software Engineering",
        section: "CL01/CX01",
        credits: "0.0"
    },
    {
        label: "CS - 3733 Software Engineering",
        section: "DL01/DX01",
        credits: "0.0"
    },
    {
        label: "CS - 3733 Software Engineering",
        section: "DL02/DX02",
        credits: "0.0"
    },
    {
        label: "CS - 4032 Numerical Methods For Linear And Nonlinear Systems",
        section: "C01",
        credits: "3.0"
    },
    {
        label: "CS - 4032 Numerical Methods For Linear And Nonlinear Systems",
        section: "C02",
        credits: "3.0"
    },
    {
        label: "CS - 4032 Numerical Methods For Linear And Nonlinear Systems",
        section: "C03",
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
        label: "CS - 4099 Special Topics in Computer Science",
        section: "C01 - ST: Graph Machine Learning",
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
        label: "CS - 4241 Webware: Computational Technology For Network Information Systems",
        section: "C01",
        credits: "3.0"
    },
    {
        label: "CS - 4341 Introduction To Artificial Intelligence",
        section: "A01",
        credits: "3.0"
    },
    {
        label: "CS - 4341 Introduction To Artificial Intelligence",
        section: "B01",
        credits: "3.0"
    },
    {
        label: "CS - 4341 Introduction To Artificial Intelligence",
        section: "C01",
        credits: "3.0"
    },
    {
        label: "CS - 4341 Introduction To Artificial Intelligence",
        section: "D01",
        credits: "3.0"
    },
    {
        label: "CS - 4342 Machine Learning",
        section: "B01",
        credits: "3.0"
    },
    {
        label: "CS - 4342 Machine Learning",
        section: "C01",
        credits: "3.0"
    },
    {
        label: "CS - 4342 Machine Learning",
        section: "D01",
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
        label: "CS - 5007 Introduction To Applications Of Computer Science With Data Structures And Algorithms",
        section: "S01",
        credits: "3.0"
    },
    {
        label: "CS - 5008 Introduction to Systems and Network Programming",
        section: "F02",
        credits: "3.0"
    },
    {
        label: "CS - 5008 Introduction to Systems and Network Programming",
        section: "S01",
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
        label: "CS - 5084 Introduction To Algorithms: Design And Analysis",
        section: "S01",
        credits: "3.0"
    },
    {
        label: "CS - 509 Design Of Software Systems",
        section: "F01",
        credits: "3.0"
    },
    {
        label: "CS - 509 Design Of Software Systems",
        section: "F02",
        credits: "3.0"
    },
    {
        label: "CS - 509 Design Of Software Systems",
        section: "S01",
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
        label: "CS - 534 Introduction to Artificial Intelligence",
        section: "S01",
        credits: "3.0"
    },
    {
        label: "CS - 534 Introduction to Artificial Intelligence",
        section: "S02",
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
        label: "CS - 539 Machine Learning",
        section: "F02",
        credits: "3.0"
    },
    {
        label: "CS - 539 Machine Learning",
        section: "S01",
        credits: "3.0"
    },
    {
        label: "CS - 539 Machine Learning",
        section: "S02",
        credits: "3.0"
    },
    {
        label: "CS - 541 Deep Learning",
        section: "F01",
        credits: "3.0"
    },
    {
        label: "CS - 541 Deep Learning",
        section: "S01",
        credits: "3.0"
    },
    {
        label: "CS - 542 Database Management Systems",
        section: "F01",
        credits: "3.0"
    },
    {
        label: "CS - 542 Database Management Systems",
        section: "F02",
        credits: "3.0"
    },
    {
        label: "CS - 542 Database Management Systems",
        section: "F03",
        credits: "3.0"
    },
    {
        label: "CS - 542 Database Management Systems",
        section: "S01",
        credits: "3.0"
    },
    {
        label: "CS - 542 Database Management Systems",
        section: "S02",
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
        label: "CS - 548 Knowledge Discovery And Data Mining",
        section: "S01",
        credits: "3.0"
    },
    {
        label: "CS - 549 Computer Vision",
        section: "S01",
        credits: "3.0"
    },
    {
        label: "CS - 549 Computer Vision",
        section: "S02",
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
        label: "CS - 552 Generative Artificial Intelligence",
        section: "S02",
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
        label: "CS - 554 Natural Language Processing",
        section: "S01",
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
        label: "CS - 571 Case Studies In Computer Security",
        section: "S02",
        credits: "3.0"
    },
    {
        label: "CS - 573 Data Visualization",
        section: "F01",
        credits: "3.0"
    },
    {
        label: "CS - 573 Data Visualization",
        section: "S02",
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
        label: "CS - 584 Algorithms: Design And Analysis",
        section: "F02",
        credits: "3.0"
    },
    {
        label: "CS - 585 Big Data Management",
        section: "F01",
        credits: "3.0"
    },
    {
        label: "CS - 585 Big Data Management",
        section: "S01",
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
        label: "CS - 587 Cyber Security Capstone Experience",
        section: "S01",
        credits: "3.0"
    },
    {
        label: "CS - 588 Computer Science Capstone Experience",
        section: "F01",
        credits: "3.0"
    },
    {
        label: "CS - 588 Computer Science Capstone Experience",
        section: "S01",
        credits: "3.0"
    },
    {
        label: "CP - 1000 Cooperative Education Program - Semester",
        section: "F121",
        credits: "0.0"
    },
    {
        label: "CP - 1000 Cooperative Education Program - Semester",
        section: "S101",
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
        label: "DEV - 1200 International Development And Society",
        section: "B01",
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
        label: "DS - 1010 Data Science I: Introduction To Data Science",
        section: "B01",
        credits: "3.0"
    },
    {
        label: "DS - 1010 Data Science I: Introduction To Data Science",
        section: "C01",
        credits: "3.0"
    },
    {
        label: "DS - 1010 Data Science I: Introduction To Data Science",
        section: "D01",
        credits: "3.0"
    },
    {
        label: "DS - 2010 Data Science II: Modeling And Data Analysis",
        section: "B01",
        credits: "3.0"
    },
    {
        label: "DS - 2010 Data Science II: Modeling And Data Analysis",
        section: "C01",
        credits: "3.0"
    },
    {
        label: "DS - 2010 Data Science II: Modeling And Data Analysis",
        section: "D01",
        credits: "3.0"
    },
    {
        label: "DS - 3010 Data Science III: Computational Data Intelligence",
        section: "B01",
        credits: "3.0"
    },
    {
        label: "DS - 3010 Data Science III: Computational Data Intelligence",
        section: "C01",
        credits: "3.0"
    },
    {
        label: "DS - 3010 Data Science III: Computational Data Intelligence",
        section: "D01",
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
        label: "DS - 501 Introduction To Data Science",
        section: "F02",
        credits: "3.0"
    },
    {
        label: "DS - 501 Introduction To Data Science",
        section: "S02",
        credits: "3.0"
    },
    {
        label: "DS - 502 Statistical Methods For Data Science",
        section: "F01",
        credits: "3.0"
    },
    {
        label: "DS - 502 Statistical Methods For Data Science",
        section: "S02",
        credits: "3.0"
    },
    {
        label: "DS - 503 Big Data Management",
        section: "F01",
        credits: "3.0"
    },
    {
        label: "DS - 503 Big Data Management",
        section: "S01",
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
        label: "DS - 517 Mathematical Foundations For Data Science",
        section: "F02",
        credits: "3.0"
    },
    {
        label: "DS - 541 Deep Learning",
        section: "F01",
        credits: "3.0"
    },
    {
        label: "DS - 541 Deep Learning",
        section: "S01",
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
        label: "DS - 552 Generative Artificial Intelligence",
        section: "S02",
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
        label: "DS - 554 Natural Language Processing",
        section: "S01",
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
        label: "DS - 577 Machine Learning in Cybersecurity",
        section: "S02",
        credits: "3.0"
    },
    {
        label: "DS - 598 Graduate Qualifying Project",
        section: "F01",
        credits: "3.0"
    },
    {
        label: "DS - 598 Graduate Qualifying Project",
        section: "F03",
        credits: "3.0"
    },
    {
        label: "DS - 598 Graduate Qualifying Project",
        section: "S01",
        credits: "3.0"
    },
    {
        label: "DS - 598 Graduate Qualifying Project",
        section: "S02",
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
        label: "ECE - 2010 Introduction To Electrical And Computer Engineering",
        section: "AL01/AX02",
        credits: "3.0"
    },
    {
        label: "ECE - 2010 Introduction To Electrical And Computer Engineering",
        section: "AL01/AX03",
        credits: "3.0"
    },
    {
        label: "ECE - 2010 Introduction To Electrical And Computer Engineering",
        section: "AL01/AX04",
        credits: "3.0"
    },
    {
        label: "ECE - 2010 Introduction To Electrical And Computer Engineering",
        section: "AL01/AX05",
        credits: "3.0"
    },
    {
        label: "ECE - 2010 Introduction To Electrical And Computer Engineering",
        section: "BL01/BX01",
        credits: "3.0"
    },
    {
        label: "ECE - 2010 Introduction To Electrical And Computer Engineering",
        section: "BL01/BX02",
        credits: "3.0"
    },
    {
        label: "ECE - 2010 Introduction To Electrical And Computer Engineering",
        section: "BL01/BX03",
        credits: "3.0"
    },
    {
        label: "ECE - 2010 Introduction To Electrical And Computer Engineering",
        section: "BL01/BX04",
        credits: "3.0"
    },
    {
        label: "ECE - 2010 Introduction To Electrical And Computer Engineering",
        section: "CL01/CX01",
        credits: "3.0"
    },
    {
        label: "ECE - 2010 Introduction To Electrical And Computer Engineering",
        section: "CL01/CX02",
        credits: "3.0"
    },
    {
        label: "ECE - 2010 Introduction To Electrical And Computer Engineering",
        section: "CL01/CX03",
        credits: "3.0"
    },
    {
        label: "ECE - 2010 Introduction To Electrical And Computer Engineering",
        section: "CL02/CX04",
        credits: "3.0"
    },
    {
        label: "ECE - 2010 Introduction To Electrical And Computer Engineering",
        section: "CL02/CX05",
        credits: "3.0"
    },
    {
        label: "ECE - 2010 Introduction To Electrical And Computer Engineering",
        section: "CL02/CX06",
        credits: "3.0"
    },
    {
        label: "ECE - 2010 Introduction To Electrical And Computer Engineering",
        section: "DL01/DX01",
        credits: "3.0"
    },
    {
        label: "ECE - 2010 Introduction To Electrical And Computer Engineering",
        section: "DL01/DX02",
        credits: "3.0"
    },
    {
        label: "ECE - 2010 Introduction To Electrical And Computer Engineering",
        section: "DL01/DX03",
        credits: "3.0"
    },
    {
        label: "ECE - 2010 Introduction To Electrical And Computer Engineering",
        section: "DL01/DX04",
        credits: "3.0"
    },
    {
        label: "ECE - 2010 Introduction To Electrical And Computer Engineering",
        section: "DL01/DX05",
        credits: "3.0"
    },
    {
        label: "ECE - 2010 Introduction To Electrical And Computer Engineering",
        section: "DL01/DX06",
        credits: "3.0"
    },
    {
        label: "ECE - 2019 Sensors, Circuits, And Systems",
        section: "AL01/AX01",
        credits: "3.0"
    },
    {
        label: "ECE - 2019 Sensors, Circuits, And Systems",
        section: "AL01/AX02",
        credits: "3.0"
    },
    {
        label: "ECE - 2019 Sensors, Circuits, And Systems",
        section: "AL01/AX03",
        credits: "3.0"
    },
    {
        label: "ECE - 2019 Sensors, Circuits, And Systems",
        section: "CL01/CX01",
        credits: "3.0"
    },
    {
        label: "ECE - 2019 Sensors, Circuits, And Systems",
        section: "CL01/CX02",
        credits: "3.0"
    },
    {
        label: "ECE - 2019 Sensors, Circuits, And Systems",
        section: "CL01/CX03",
        credits: "3.0"
    },
    {
        label: "ECE - 2029 Introduction To Digital Circuit Design",
        section: "BL01/BX01",
        credits: "3.0"
    },
    {
        label: "ECE - 2029 Introduction To Digital Circuit Design",
        section: "BL01/BX02",
        credits: "3.0"
    },
    {
        label: "ECE - 2029 Introduction To Digital Circuit Design",
        section: "BL01/BX03",
        credits: "3.0"
    },
    {
        label: "ECE - 2029 Introduction To Digital Circuit Design",
        section: "DL01/DX01",
        credits: "3.0"
    },
    {
        label: "ECE - 2029 Introduction To Digital Circuit Design",
        section: "DL01/DX02",
        credits: "3.0"
    },
    {
        label: "ECE - 2029 Introduction To Digital Circuit Design",
        section: "DL01/DX03",
        credits: "3.0"
    },
    {
        label: "ECE - 2029 Introduction To Digital Circuit Design",
        section: "DL01/DX04",
        credits: "3.0"
    },
    {
        label: "ECE - 2039 Computational Engineering",
        section: "AL01/AX01",
        credits: "3.0"
    },
    {
        label: "ECE - 2039 Computational Engineering",
        section: "AL01/AX02",
        credits: "3.0"
    },
    {
        label: "ECE - 2039 Computational Engineering",
        section: "AL01/AX03",
        credits: "3.0"
    },
    {
        label: "ECE - 2039 Computational Engineering",
        section: "CL01/CX01",
        credits: "3.0"
    },
    {
        label: "ECE - 2039 Computational Engineering",
        section: "CL01/CX02",
        credits: "3.0"
    },
    {
        label: "ECE - 2039 Computational Engineering",
        section: "CL01/CX03",
        credits: "3.0"
    },
    {
        label: "ECE - 2049 Embedded Computing In Engineering Design",
        section: "BL01/BX01",
        credits: "3.0"
    },
    {
        label: "ECE - 2049 Embedded Computing In Engineering Design",
        section: "BL01/BX02",
        credits: "3.0"
    },
    {
        label: "ECE - 2049 Embedded Computing In Engineering Design",
        section: "BL01/BX03",
        credits: "3.0"
    },
    {
        label: "ECE - 2049 Embedded Computing In Engineering Design",
        section: "DL01/DX01",
        credits: "3.0"
    },
    {
        label: "ECE - 2049 Embedded Computing In Engineering Design",
        section: "DL01/DX02",
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
        label: "ECE - 2201 Microelectronic Circuits I",
        section: "AL01/AX02",
        credits: "3.0"
    },
    {
        label: "ECE - 2201 Microelectronic Circuits I",
        section: "CL01/CX01",
        credits: "3.0"
    },
    {
        label: "ECE - 2201 Microelectronic Circuits I",
        section: "CL01/CX02",
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
        label: "ECE - 2311 Continuous-Time Signal And System Analysis",
        section: "D01",
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
        label: "ECE - 2799 Electrical And Computer Engineering Design",
        section: "BL01/BD02",
        credits: "3.0"
    },
    {
        label: "ECE - 2799 Electrical And Computer Engineering Design",
        section: "DL01/DD01",
        credits: "3.0"
    },
    {
        label: "ECE - 2799 Electrical And Computer Engineering Design",
        section: "DL01/DD02",
        credits: "3.0"
    },
    {
        label: "ECE - 2799 Electrical And Computer Engineering Design",
        section: "DL01/DD03",
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
        label: "ECE - 3204 Microelectronic Circuits II",
        section: "DL01/DX02",
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
        label: "ECE - 3829 Advanced Digital System Design With FPGAs",
        section: "AL01/AX02",
        credits: "3.0"
    },
    {
        label: "ECE - 3829 Advanced Digital System Design With FPGAs",
        section: "AL01/AX03",
        credits: "3.0"
    },
    {
        label: "ECE - 3829 Advanced Digital System Design With FPGAs",
        section: "CL01/CX01",
        credits: "3.0"
    },
    {
        label: "ECE - 3829 Advanced Digital System Design With FPGAs",
        section: "CL01/CX02",
        credits: "3.0"
    },
    {
        label: "ECE - 3829 Advanced Digital System Design With FPGAs",
        section: "CL01/CX03",
        credits: "3.0"
    },
    {
        label: "ECE - 3849 Real-Time Embedded Systems",
        section: "BL01/BX01",
        credits: "3.0"
    },
    {
        label: "ECE - 3849 Real-Time Embedded Systems",
        section: "BL01/BX02",
        credits: "3.0"
    },
    {
        label: "ECE - 3849 Real-Time Embedded Systems",
        section: "DL01/DX01",
        credits: "3.0"
    },
    {
        label: "ECE - 3849 Real-Time Embedded Systems",
        section: "DL01/DX02",
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
        label: "ECE - 502 Analysis Of Probabilistic Signals And Systems",
        section: "F02",
        credits: "3.0"
    },
    {
        label: "ECE - 503 Digital Signal Processing",
        section: "S01",
        credits: "3.0"
    },
    {
        label: "ECE - 503 Digital Signal Processing",
        section: "S02",
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
        label: "ECE - 514 Fundamentals Of RF And MW Engineering",
        section: "F02",
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
        label: "ECE - 531 Principles Of Detection And Estimation Theory",
        section: "S02",
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
        label: "ECE - 5312 Modern Digital Communications",
        section: "S02",
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
        label: "ECE - 5500 Power System Analysis",
        section: "S01",
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
        label: "ECE - 574 Advanced Digital Systems Design",
        section: "F02",
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
        label: "ECE - 577 Machine Learning in Cybersecurity",
        section: "S02",
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
        label: "ECE - 579 Selected Topics In Computer Engineering",
        section: "S01 - ST: Physical Security of Microelectronic Systems",
        credits: "3.0"
    },
    {
        label: "ECE - 588 Cyber Security Capstone Experience",
        section: "F01",
        credits: "3.0"
    },
    {
        label: "ECE - 588 Cyber Security Capstone Experience",
        section: "S01",
        credits: "3.0"
    },
    {
        label: "ECE - 596 Graduate Seminars",
        section: "F01",
        credits: "0.0"
    },
    {
        label: "ECE - 596 Graduate Seminars",
        section: "S01",
        credits: "0.0"
    },
    {
        label: "ECON - 1110 Introductory Microeconomics",
        section: "A01",
        credits: "3.0"
    },
    {
        label: "ECON - 1110 Introductory Microeconomics",
        section: "B01",
        credits: "3.0"
    },
    {
        label: "ECON - 1110 Introductory Microeconomics",
        section: "C01",
        credits: "3.0"
    },
    {
        label: "ECON - 1120 Introductory Macroeconomics",
        section: "A01",
        credits: "3.0"
    },
    {
        label: "ECON - 1120 Introductory Macroeconomics",
        section: "B01",
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
        label: "EN - 1219 Introduction to Creative Writing",
        section: "A02",
        credits: "3.0"
    },
    {
        label: "EN - 1219 Introduction to Creative Writing",
        section: "B01",
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
        label: "EN - 1251 Introduction To Literature",
        section: "A02",
        credits: "3.0"
    },
    {
        label: "EN - 1251 Introduction To Literature",
        section: "D01",
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
        label: "EN - 2219 Creative Writing",
        section: "B01",
        credits: "3.0"
    },
    {
        label: "EN - 2219 Creative Writing",
        section: "C02",
        credits: "3.0"
    },
    {
        label: "EN - 2219 Creative Writing",
        section: "D01",
        credits: "3.0"
    },
    {
        label: "EN - 2219 Creative Writing",
        section: "D02",
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
        label: "EN - 3219 Advanced Creative Writing",
        section: "D02",
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
        label: "ENV - 1100 Introduction To Environmental Studies",
        section: "B01",
        credits: "3.0"
    },
    {
        label: "ENV - 1100 Introduction To Environmental Studies",
        section: "B02",
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
        label: "ES - 1310 Introduction To Computer Aided Design",
        section: "AL01/AX01",
        credits: "0.0"
    },
    {
        label: "ES - 1310 Introduction To Computer Aided Design",
        section: "AL01/AX02",
        credits: "0.0"
    },
    {
        label: "ES - 1310 Introduction To Computer Aided Design",
        section: "BL01/BX01",
        credits: "0.0"
    },
    {
        label: "ES - 1310 Introduction To Computer Aided Design",
        section: "BL01/BX02",
        credits: "0.0"
    },
    {
        label: "ES - 1310 Introduction To Computer Aided Design",
        section: "Interest List-C Term",
        credits: "0.0"
    },
    {
        label: "ES - 1310 Introduction To Computer Aided Design",
        section: "CL01/CX03",
        credits: "0.0"
    },
    {
        label: "ES - 1310 Introduction To Computer Aided Design",
        section: "CL01/CX04",
        credits: "0.0"
    },
    {
        label: "ES - 1310 Introduction To Computer Aided Design",
        section: "CL02/CX01",
        credits: "0.0"
    },
    {
        label: "ES - 1310 Introduction To Computer Aided Design",
        section: "CL02/CX02",
        credits: "0.0"
    },
    {
        label: "ES - 1310 Introduction To Computer Aided Design",
        section: "DL01/DX01",
        credits: "0.0"
    },
    {
        label: "ES - 1310 Introduction To Computer Aided Design",
        section: "DL01/DX02",
        credits: "0.0"
    },
    {
        label: "ES - 1310 Introduction To Computer Aided Design",
        section: "DL02/DX03",
        credits: "0.0"
    },
    {
        label: "ES - 1310 Introduction To Computer Aided Design",
        section: "DL02/DX04",
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
        label: "ES - 2001 Introduction To Materials Science",
        section: "BL01/BD01",
        credits: "3.0"
    },
    {
        label: "ES - 2001 Introduction To Materials Science",
        section: "CL01/CD01",
        credits: "3.0"
    },
    {
        label: "ES - 2001 Introduction To Materials Science",
        section: "CL02/CD02",
        credits: "3.0"
    },
    {
        label: "ES - 2001 Introduction To Materials Science",
        section: "DL01/DD01",
        credits: "3.0"
    },
    {
        label: "ES - 2001 Introduction To Materials Science",
        section: "DL02/DD02",
        credits: "3.0"
    },
    {
        label: "ES - 2001 Introduction To Materials Science",
        section: "DL03/DD03",
        credits: "3.0"
    },
    {
        label: "ES - 2501 Introduction To Static Systems",
        section: "AL01/AD01",
        credits: "3.0"
    },
    {
        label: "ES - 2501 Introduction To Static Systems",
        section: "AL03/AD03",
        credits: "3.0"
    },
    {
        label: "ES - 2501 Introduction To Static Systems",
        section: "BL01/BD01",
        credits: "3.0"
    },
    {
        label: "ES - 2501 Introduction To Static Systems",
        section: "CL01/CD01",
        credits: "3.0"
    },
    {
        label: "ES - 2501 Introduction To Static Systems",
        section: "DL01/DD01",
        credits: "3.0"
    },
    {
        label: "ES - 2501 Introduction To Static Systems",
        section: "DL02/DD02",
        credits: "3.0"
    },
    {
        label: "ES - 2502 Stress Analysis",
        section: "AL01/AD01",
        credits: "3.0"
    },
    {
        label: "ES - 2502 Stress Analysis",
        section: "BL02/BD02",
        credits: "3.0"
    },
    {
        label: "ES - 2502 Stress Analysis",
        section: "CL01/CD01",
        credits: "3.0"
    },
    {
        label: "ES - 2502 Stress Analysis",
        section: "CL02/CD02",
        credits: "3.0"
    },
    {
        label: "ES - 2502 Stress Analysis",
        section: "DL01/DD01",
        credits: "3.0"
    },
    {
        label: "ES - 2502 Stress Analysis",
        section: "DL02/DD02",
        credits: "3.0"
    },
    {
        label: "ES - 2503 Introduction To Dynamic Systems",
        section: "AL01/AD01",
        credits: "3.0"
    },
    {
        label: "ES - 2503 Introduction To Dynamic Systems",
        section: "AL02/AD02",
        credits: "3.0"
    },
    {
        label: "ES - 2503 Introduction To Dynamic Systems",
        section: "BL01/BD01",
        credits: "3.0"
    },
    {
        label: "ES - 2503 Introduction To Dynamic Systems",
        section: "BL02/BD02",
        credits: "3.0"
    },
    {
        label: "ES - 2503 Introduction To Dynamic Systems",
        section: "CL01/CD01",
        credits: "3.0"
    },
    {
        label: "ES - 2503 Introduction To Dynamic Systems",
        section: "DL01/DD01",
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
        label: "ES - 3001 Introduction To Thermodynamics",
        section: "B01",
        credits: "3.0"
    },
    {
        label: "ES - 3001 Introduction To Thermodynamics",
        section: "B02",
        credits: "3.0"
    },
    {
        label: "ES - 3001 Introduction To Thermodynamics",
        section: "C01",
        credits: "3.0"
    },
    {
        label: "ES - 3001 Introduction To Thermodynamics",
        section: "C02",
        credits: "3.0"
    },
    {
        label: "ES - 3001 Introduction To Thermodynamics",
        section: "D01",
        credits: "3.0"
    },
    {
        label: "ES - 3001 Introduction To Thermodynamics",
        section: "D02",
        credits: "3.0"
    },
    {
        label: "ES - 3002 Mass Transfer",
        section: "CL01/CD01",
        credits: "3.0"
    },
    {
        label: "ES - 3002 Mass Transfer",
        section: "DL01/DD01",
        credits: "3.0"
    },
    {
        label: "ES - 3003 Heat Transfer",
        section: "AL01/AD01",
        credits: "3.0"
    },
    {
        label: "ES - 3003 Heat Transfer",
        section: "BL01/BD01",
        credits: "3.0"
    },
    {
        label: "ES - 3003 Heat Transfer",
        section: "BL02/BD02",
        credits: "3.0"
    },
    {
        label: "ES - 3003 Heat Transfer",
        section: "CL01/CD01",
        credits: "3.0"
    },
    {
        label: "ES - 3003 Heat Transfer",
        section: "DL01/DD01",
        credits: "3.0"
    },
    {
        label: "ES - 3004 Fluid Mechanics",
        section: "A01",
        credits: "3.0"
    },
    {
        label: "ES - 3004 Fluid Mechanics",
        section: "A02",
        credits: "3.0"
    },
    {
        label: "ES - 3004 Fluid Mechanics",
        section: "B01",
        credits: "3.0"
    },
    {
        label: "ES - 3004 Fluid Mechanics",
        section: "C01",
        credits: "3.0"
    },
    {
        label: "ES - 3004 Fluid Mechanics",
        section: "C02",
        credits: "3.0"
    },
    {
        label: "ES - 3004 Fluid Mechanics",
        section: "D01",
        credits: "3.0"
    },
    {
        label: "ES - 3011 Control Engineering I",
        section: "AL01/AX01",
        credits: "3.0"
    },
    {
        label: "ES - 3011 Control Engineering I",
        section: "AL01/AX02",
        credits: "3.0"
    },
    {
        label: "ES - 3011 Control Engineering I",
        section: "BL01/BX01",
        credits: "3.0"
    },
    {
        label: "ES - 3011 Control Engineering I",
        section: "BL01/BX02",
        credits: "3.0"
    },
    {
        label: "ES - 3011 Control Engineering I",
        section: "Interest List-C Term",
        credits: "3.0"
    },
    {
        label: "ES - 3011 Control Engineering I",
        section: "CL01/CX01",
        credits: "3.0"
    },
    {
        label: "ES - 3011 Control Engineering I",
        section: "CL01/CX02",
        credits: "3.0"
    },
    {
        label: "ES - 3323 Advanced Computer Aided Design",
        section: "A01",
        credits: "3.0"
    },
    {
        label: "ES - 3323 Advanced Computer Aided Design",
        section: "A02",
        credits: "3.0"
    },
    {
        label: "ES - 3323 Advanced Computer Aided Design",
        section: "D01",
        credits: "3.0"
    },
    {
        label: "ES - 3323 Advanced Computer Aided Design",
        section: "D02",
        credits: "3.0"
    },
    {
        label: "ESL - 500 Acad English for Intl Grad Students",
        section: "F01",
        credits: "0.0"
    },
    {
        label: "ESL - 500 Acad English for Intl Grad Students",
        section: "F02",
        credits: "0.0"
    },
    {
        label: "ESL - 500 Acad English for Intl Grad Students",
        section: "S01",
        credits: "0.0"
    },
    {
        label: "ESL - 500 Acad English for Intl Grad Students",
        section: "S02",
        credits: "0.0"
    },
    {
        label: "ETR - 1100 Engineering Innovation And Entrepreneurship",
        section: "A01",
        credits: "3.0"
    },
    {
        label: "ETR - 1100 Engineering Innovation And Entrepreneurship",
        section: "B01",
        credits: "3.0"
    },
    {
        label: "ETR - 1100 Engineering Innovation And Entrepreneurship",
        section: "C01",
        credits: "3.0"
    },
    {
        label: "ETR - 1100 Engineering Innovation And Entrepreneurship",
        section: "D01",
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
        label: "FIN - 1250 Personal Finance",
        section: "B01",
        credits: "3.0"
    },
    {
        label: "FIN - 1250 Personal Finance",
        section: "C01",
        credits: "3.0"
    },
    {
        label: "FIN - 2070 Fundamentals of Finance",
        section: "A01",
        credits: "3.0"
    },
    {
        label: "FIN - 2070 Fundamentals of Finance",
        section: "C01",
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
        label: "FIN - 500 Financial Management",
        section: "S01",
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
        label: "FP - 3070 Introduction To Fire Protection Engineering",
        section: "D01",
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
        label: "FP - 4000 Fire Laboratory",
        section: "AL01/AX02",
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
        label: "FP - 520 Fire Modeling",
        section: "F02",
        credits: "3.0"
    },
    {
        label: "FP - 521 Fire Dynamics I",
        section: "F01",
        credits: "3.0"
    },
    {
        label: "FP - 521 Fire Dynamics I",
        section: "F02",
        credits: "3.0"
    },
    {
        label: "FP - 553 Fire Protection Systems",
        section: "S01",
        credits: "3.0"
    },
    {
        label: "FP - 553 Fire Protection Systems",
        section: "S02",
        credits: "3.0"
    },
    {
        label: "FP - 554 Advanced Fire Suppression",
        section: "F01",
        credits: "3.0"
    },
    {
        label: "FP - 554 Advanced Fire Suppression",
        section: "F02",
        credits: "3.0"
    },
    {
        label: "FP - 555 Detection, Alarm And Smoke Control",
        section: "S01",
        credits: "3.0"
    },
    {
        label: "FP - 555 Detection, Alarm And Smoke Control",
        section: "S02",
        credits: "3.0"
    },
    {
        label: "FP - 570 Building Fire Safety I",
        section: "F01",
        credits: "3.0"
    },
    {
        label: "FP - 570 Building Fire Safety I",
        section: "F02",
        credits: "3.0"
    },
    {
        label: "FP - 571 Performance-Based Design",
        section: "S01",
        credits: "3.0"
    },
    {
        label: "FP - 571 Performance-Based Design",
        section: "S02",
        credits: "3.0"
    },
    {
        label: "FP - 573 Industrial Fire Protection",
        section: "F01",
        credits: "3.0"
    },
    {
        label: "FP - 573 Industrial Fire Protection",
        section: "F02",
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
        label: "FP - 580 Special Problems",
        section: "F03 - ST: Complex Decision Making",
        credits: "3.0"
    },
    {
        label: "FP - 580 Special Problems",
        section: "S01 - SP: Combustion",
        credits: "3.0"
    },
    {
        label: "FP - 580 Special Problems",
        section: "S02 - SP: Combustion",
        credits: "3.0"
    },
    {
        label: "FY - 1100 The Great Problems Seminars",
        section: "A02 - GPS: Climate Change",
        credits: "3.0"
    },
    {
        label: "FY - 1100 The Great Problems Seminars",
        section: "A03 - GPS: Seeking Sustainability",
        credits: "3.0"
    },
    {
        label: "FY - 1100 The Great Problems Seminars",
        section: "A04 - GPS: Recover, Reuse",
        credits: "3.0"
    },
    {
        label: "FY - 1100 The Great Problems Seminars",
        section: "A05 - GPS: Shelter the World",
        credits: "3.0"
    },
    {
        label: "FY - 1100 The Great Problems Seminars",
        section: "A06 - GPS: Heal the World",
        credits: "3.0"
    },
    {
        label: "FY - 1100 The Great Problems Seminars",
        section: "A07 - GPS: Our Unequal World",
        credits: "3.0"
    },
    {
        label: "FY - 1100 The Great Problems Seminars",
        section: "A08 - GPS: Extinctions",
        credits: "3.0"
    },
    {
        label: "FY - 1100 The Great Problems Seminars",
        section: "A09 - GPS: Smart & Sustainable Cities",
        credits: "3.0"
    },
    {
        label: "FY - 1100 The Great Problems Seminars",
        section: "B08 - GPS: Power the World",
        credits: "3.0"
    },
    {
        label: "FY - 1100 The Great Problems Seminars",
        section: "B11 - GPS: AI, Design, and Society",
        credits: "3.0"
    },
    {
        label: "FY - 1100 The Great Problems Seminars",
        section: "BL09/BD09 - GPS: Humanitarian Engineering",
        credits: "3.0"
    },
    {
        label: "FY - 1101 The Great Problems Seminars",
        section: "B02 - GPS: Climate Change",
        credits: "3.0"
    },
    {
        label: "FY - 1101 The Great Problems Seminars",
        section: "B03 - GPS: Seeking Sustainability",
        credits: "3.0"
    },
    {
        label: "FY - 1101 The Great Problems Seminars",
        section: "B04 - GPS: Recover, Reuse",
        credits: "3.0"
    },
    {
        label: "FY - 1101 The Great Problems Seminars",
        section: "B06 - GPS: Heal the World",
        credits: "3.0"
    },
    {
        label: "FY - 1101 The Great Problems Seminars",
        section: "B07 - GPS: Our Unequal World",
        credits: "3.0"
    },
    {
        label: "FY - 1101 The Great Problems Seminars",
        section: "B08 - GPS: Extinctions",
        credits: "3.0"
    },
    {
        label: "FY - 1101 The Great Problems Seminars",
        section: "B09 - GPS: Smart & Sustainable Cities",
        credits: "3.0"
    },
    {
        label: "FY - 1101 The Great Problems Seminars",
        section: "BL05/BX05-A - GPS: Shelter the World",
        credits: "3.0"
    },
    {
        label: "FY - 1101 The Great Problems Seminars",
        section: "BL05/BX05-B - GPS: Shelter the World",
        credits: "3.0"
    },
    {
        label: "FY - 1101 The Great Problems Seminars",
        section: "C08 - GPS: Power the World",
        credits: "3.0"
    },
    {
        label: "FY - 1101 The Great Problems Seminars",
        section: "C11 - GPS: AI, Design, and Society",
        credits: "3.0"
    },
    {
        label: "FY - 1101 The Great Problems Seminars",
        section: "CL09/CD09 - GPS: Humanitarian Engineering",
        credits: "3.0"
    },
    {
        label: "FY - 1800 Discovering Majors And Careers",
        section: "A01",
        credits: "0.75"
    },
    {
        label: "FY - 1800 Discovering Majors And Careers",
        section: "C01",
        credits: "0.75"
    },
    {
        label: "FY - 1800 Discovering Majors And Careers",
        section: "X cancel 5.21.24",
        credits: "0.75"
    },
    {
        label: "GE - 2341 Geology",
        section: "A01",
        credits: "3.0"
    },
    {
        label: "GE - 2341 Geology",
        section: "C01",
        credits: "3.0"
    },
    {
        label: "GN - 1511 Elementary German I: Identities and Communities",
        section: "A01",
        credits: "3.0"
    },
    {
        label: "GN - 1511 Elementary German I: Identities and Communities",
        section: "A02",
        credits: "3.0"
    },
    {
        label: "GN - 1511 Elementary German I: Identities and Communities",
        section: "A03",
        credits: "3.0"
    },
    {
        label: "GN - 1512 Elementary German II",
        section: "B01",
        credits: "3.0"
    },
    {
        label: "GN - 1512 Elementary German II",
        section: "B02",
        credits: "3.0"
    },
    {
        label: "GN - 2511 Intermediate German I: Cultural Practices and Products of the German-Speaking World",
        section: "C01",
        credits: "3.0"
    },
    {
        label: "GN - 2511 Intermediate German I: Cultural Practices and Products of the German-Speaking World",
        section: "C02",
        credits: "3.0"
    },
    {
        label: "GN - 2512 Intermediate German II",
        section: "D01",
        credits: "3.0"
    },
    {
        label: "GN - 2512 Intermediate German II",
        section: "D02",
        credits: "3.0"
    },
    {
        label: "GN - 3511 Advanced German I: Exploration and Innovation in the German-Speaking World",
        section: "A01",
        credits: "3.0"
    },
    {
        label: "GN - 3511 Advanced German I: Exploration and Innovation in the German-Speaking World",
        section: "A02",
        credits: "3.0"
    },
    {
        label: "GN - 3512 Advanced German II: National Identities and Storie",
        section: "B01",
        credits: "3.0"
    },
    {
        label: "GN - 3512 Advanced German II: National Identities and Storie",
        section: "B02",
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
        label: "GOV - 1320 Topics In International Politics",
        section: "C01 - Topics In International Politics",
        credits: "3.0"
    },
    {
        label: "GOV - 1320 Topics In International Politics",
        section: "D01 - Topics In International Politics: Law, International NGOs, and Human Rights",
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
        label: "HI - 1311 Introduction To American Urban History",
        section: "B01",
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
        label: "HI - 1330 Introduction To The History Of Science And Technology",
        section: "A02",
        credits: "3.0"
    },
    {
        label: "HI - 1330 Introduction To The History Of Science And Technology",
        section: "B01",
        credits: "3.0"
    },
    {
        label: "HI - 1333 Introduction to American Histories of Protest and Power",
        section: "A01",
        credits: "3.0"
    },
    {
        label: "HI - 1333 Introduction to American Histories of Protest and Power",
        section: "B01",
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
        label: "HI - 2314 American History, 1877-1920",
        section: "C02",
        credits: "3.0"
    },
    {
        label: "HI - 2315 The Shaping Of Post-1920 America",
        section: "D01",
        credits: "3.0"
    },
    {
        label: "HI - 2315 The Shaping Of Post-1920 America",
        section: "D02",
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
        label: "HI - 2350 Topics In The History Of Science",
        section: "D01 - Topics In The History Of Science: Biology/Anthropology",
        credits: "3.0"
    },
    {
        label: "HI - 2400 Topics In Environmental History",
        section: "A01 - Topics In Environmental History: American Nature",
        credits: "3.0"
    },
    {
        label: "HI - 2400 Topics In Environmental History",
        section: "D01 - Topics In Environmental History: Global Environmental History",
        credits: "3.0"
    },
    {
        label: "HI - 2900 Topics in Gender and History",
        section: "A02 - Topics in Gender and History: Black Women's Activism in the Americas",
        credits: "3.0"
    },
    {
        label: "HI - 2900 Topics in Gender and History",
        section: "D01 - Topics in Gender and History: Women, Peace, and Conflict",
        credits: "3.0"
    },
    {
        label: "HI - 2900 Topics in Gender and History",
        section: "D02 - Topics in Gender and History: Tech Bros",
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
        label: "HU - 1400 Introduction to Africana Studies",
        section: "C01",
        credits: "3.0"
    },
    {
        label: "HU - 1500 Introduction To Gender, Sexuality & Women's Studies",
        section: "A01",
        credits: "3.0"
    },
    {
        label: "HU - 1500 Introduction To Gender, Sexuality & Women's Studies",
        section: "A02",
        credits: "3.0"
    },
    {
        label: "HU - 1500 Introduction To Gender, Sexuality & Women's Studies",
        section: "C01",
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
        label: "HU - 2501 Stem-Inism",
        section: "D01",
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
        label: "HU - 3900 Inquiry Seminar In Humanities And Arts",
        section: "A03 - INQ SEM: Early American History",
        credits: "3.0"
    },
    {
        label: "HU - 3900 Inquiry Seminar In Humanities And Arts",
        section: "A04 - INQ SEM: Am History Thru Film",
        credits: "3.0"
    },
    {
        label: "HU - 3900 Inquiry Seminar In Humanities And Arts",
        section: "A05 - INQ SEM: History of Sports",
        credits: "3.0"
    },
    {
        label: "HU - 3900 Inquiry Seminar In Humanities And Arts",
        section: "A06 - INQ SEM: Sci-Fi, Horror, and Fantasy Writing",
        credits: "3.0"
    },
    {
        label: "HU - 3900 Inquiry Seminar In Humanities And Arts",
        section: "A07 - INQ SEM: Rhetorics of Health and Illness",
        credits: "3.0"
    },
    {
        label: "HU - 3900 Inquiry Seminar In Humanities And Arts",
        section: "B01 - INQ SEM: Literature of African Project Centers",
        credits: "3.0"
    },
    {
        label: "HU - 3900 Inquiry Seminar In Humanities And Arts",
        section: "B02 - INQ SEM: A Christmas Carol",
        credits: "3.0"
    },
    {
        label: "HU - 3900 Inquiry Seminar In Humanities And Arts",
        section: "B03 - INQ SEM: AI and Professional Writing",
        credits: "3.0"
    },
    {
        label: "HU - 3900 Inquiry Seminar In Humanities And Arts",
        section: "B04 - INQ SEM: Riots and Rebellion in Urban America",
        credits: "3.0"
    },
    {
        label: "HU - 3900 Inquiry Seminar In Humanities And Arts",
        section: "B06 - INQ SEM: Urban History",
        credits: "3.0"
    },
    {
        label: "HU - 3900 Inquiry Seminar In Humanities And Arts",
        section: "B07 - INQ SEM: Power of Manifestos",
        credits: "3.0"
    },
    {
        label: "HU - 3900 Inquiry Seminar In Humanities And Arts",
        section: "B08 - INQ SEM: Intercultural Comm",
        credits: "3.0"
    },
    {
        label: "HU - 3900 Inquiry Seminar In Humanities And Arts",
        section: "B09 - INQ SEM: The Beatles",
        credits: "3.0"
    },
    {
        label: "HU - 3900 Inquiry Seminar In Humanities And Arts",
        section: "B10 - INQ SEM: Ethics and Politics of Meat-Eating",
        credits: "3.0"
    },
    {
        label: "HU - 3900 Inquiry Seminar In Humanities And Arts",
        section: "B11 - INQ SEM: Narratives and Counternarratives",
        credits: "3.0"
    },
    {
        label: "HU - 3900 Inquiry Seminar In Humanities And Arts",
        section: "B12 - INQ SEM: Popular Culture in East Asia",
        credits: "3.0"
    },
    {
        label: "HU - 3900 Inquiry Seminar In Humanities And Arts",
        section: "B14 - INQ SEM: Microliterature",
        credits: "3.0"
    },
    {
        label: "HU - 3900 Inquiry Seminar In Humanities And Arts",
        section: "B16 - INQ SEM: Travel Writing",
        credits: "3.0"
    },
    {
        label: "HU - 3900 Inquiry Seminar In Humanities And Arts",
        section: "C01 - INQ SEM: MCKIM, MEAD & WHITE & AMER ARCH 1870-1929",
        credits: "3.0"
    },
    {
        label: "HU - 3900 Inquiry Seminar In Humanities And Arts",
        section: "C02 - INQ SEM: The Poetic Sequence",
        credits: "3.0"
    },
    {
        label: "HU - 3900 Inquiry Seminar In Humanities And Arts",
        section: "C03 - INQ SEM: Soviet Space Program",
        credits: "3.0"
    },
    {
        label: "HU - 3900 Inquiry Seminar In Humanities And Arts",
        section: "C04 - INQ SEM: Literature and the Environment",
        credits: "3.0"
    },
    {
        label: "HU - 3900 Inquiry Seminar In Humanities And Arts",
        section: "C05 - INQ SEM: Integrating the Humanities in STEM Education",
        credits: "3.0"
    },
    {
        label: "HU - 3900 Inquiry Seminar In Humanities And Arts",
        section: "C06 - INQ SEM: Rhetoric and Popular Culture",
        credits: "3.0"
    },
    {
        label: "HU - 3900 Inquiry Seminar In Humanities And Arts",
        section: "C07 - INQ SEM: DDT, SILNT SPR, AM ENV",
        credits: "3.0"
    },
    {
        label: "HU - 3900 Inquiry Seminar In Humanities And Arts",
        section: "C08 - INQ SEM: History of Biodiversity, Extinction, and Anthropocene Technologies",
        credits: "3.0"
    },
    {
        label: "HU - 3900 Inquiry Seminar In Humanities And Arts",
        section: "C09 - INQ SEM: History Through Film",
        credits: "3.0"
    },
    {
        label: "HU - 3900 Inquiry Seminar In Humanities And Arts",
        section: "C10 - INQ SEM: Writing through Conflict",
        credits: "3.0"
    },
    {
        label: "HU - 3900 Inquiry Seminar In Humanities And Arts",
        section: "C11 - INQ SEM: Queer Cinema",
        credits: "3.0"
    },
    {
        label: "HU - 3900 Inquiry Seminar In Humanities And Arts",
        section: "C14 - INQ SEM: Contemporary Moral Problems",
        credits: "3.0"
    },
    {
        label: "HU - 3900 Inquiry Seminar In Humanities And Arts",
        section: "C15 - INQ SEM: Queerly Religious",
        credits: "3.0"
    },
    {
        label: "HU - 3900 Inquiry Seminar In Humanities And Arts",
        section: "C16 - INQ SEM: Loaded Language",
        credits: "3.0"
    },
    {
        label: "HU - 3900 Inquiry Seminar In Humanities And Arts",
        section: "C17 - INQ SEM: Environmental Phil",
        credits: "3.0"
    },
    {
        label: "HU - 3900 Inquiry Seminar In Humanities And Arts",
        section: "C18 - INQ SEM: Rhetoric & Motivation in Exercise and Sport",
        credits: "3.0"
    },
    {
        label: "HU - 3900 Inquiry Seminar In Humanities And Arts",
        section: "C19 - INQ SEM: Jazz History Database",
        credits: "3.0"
    },
    {
        label: "HU - 3900 Inquiry Seminar In Humanities And Arts",
        section: "C20 - INQ SEM: Music and Society",
        credits: "3.0"
    },
    {
        label: "HU - 3900 Inquiry Seminar In Humanities And Arts",
        section: "C22 - INQ SEM: Writing Suspense",
        credits: "3.0"
    },
    {
        label: "HU - 3900 Inquiry Seminar In Humanities And Arts",
        section: "C27 - INQ SEM: Global Studies",
        credits: "3.0"
    },
    {
        label: "HU - 3900 Inquiry Seminar In Humanities And Arts",
        section: "D01 - INQ SEM: Collections of W A M",
        credits: "3.0"
    },
    {
        label: "HU - 3900 Inquiry Seminar In Humanities And Arts",
        section: "D02 - INQ SEM: Writing, Rhetoric, and Social Justice",
        credits: "3.0"
    },
    {
        label: "HU - 3900 Inquiry Seminar In Humanities And Arts",
        section: "D03 - INQ SEM:  Biomedicine and the Language of Pain",
        credits: "3.0"
    },
    {
        label: "HU - 3900 Inquiry Seminar In Humanities And Arts",
        section: "D04 - INQ SEM: AI and Rhetorical Machines",
        credits: "3.0"
    },
    {
        label: "HU - 3900 Inquiry Seminar In Humanities And Arts",
        section: "D05 - INQ SEM: Feminist Killjoys",
        credits: "3.0"
    },
    {
        label: "HU - 3900 Inquiry Seminar In Humanities And Arts",
        section: "D06 - INQ SEM: Gravity's Rainbow",
        credits: "3.0"
    },
    {
        label: "HU - 3900 Inquiry Seminar In Humanities And Arts",
        section: "D07 - INQ SEM: Native American History",
        credits: "3.0"
    },
    {
        label: "HU - 3900 Inquiry Seminar In Humanities And Arts",
        section: "D08 - INQ SEM: Media Revolutions",
        credits: "3.0"
    },
    {
        label: "HU - 3900 Inquiry Seminar In Humanities And Arts",
        section: "D09 - INQ SEM: Visions of the City",
        credits: "3.0"
    },
    {
        label: "HU - 3900 Inquiry Seminar In Humanities And Arts",
        section: "D10 - INQ SEM IN HUA: Revolutions",
        credits: "3.0"
    },
    {
        label: "HU - 3900 Inquiry Seminar In Humanities And Arts",
        section: "D11 - INQ SEM: History of Rationality in Enlightenment Society",
        credits: "3.0"
    },
    {
        label: "HU - 3900 Inquiry Seminar In Humanities And Arts",
        section: "D12 - INQ SEM: Early American History",
        credits: "3.0"
    },
    {
        label: "HU - 3900 Inquiry Seminar In Humanities And Arts",
        section: "D13 - INQ SEM: The Meaning of Life",
        credits: "3.0"
    },
    {
        label: "HU - 3900 Inquiry Seminar In Humanities And Arts",
        section: "D14 - INQ SEM: Nationalism",
        credits: "3.0"
    },
    {
        label: "HU - 3900 Inquiry Seminar In Humanities And Arts",
        section: "D15 - INQ SEM: Jewish Immigrant Fiction",
        credits: "3.0"
    },
    {
        label: "HU - 3900 Inquiry Seminar In Humanities And Arts",
        section: "D16 - INQ SEM: Oceans",
        credits: "3.0"
    },
    {
        label: "HU - 3900 Inquiry Seminar In Humanities And Arts",
        section: "D17 - INQ SEM: Music and Society",
        credits: "3.0"
    },
    {
        label: "HU - 3900 Inquiry Seminar In Humanities And Arts",
        section: "D18 - INQ SEM: Philosophy of Film",
        credits: "3.0"
    },
    {
        label: "HU - 3900 Inquiry Seminar In Humanities And Arts",
        section: "D19 - INQ SEM: Philosophy and Religion in Early China",
        credits: "3.0"
    },
    {
        label: "HU - 3900 Inquiry Seminar In Humanities And Arts",
        section: "D20 - INQ SEM: Decolonization and Activism in the African Diaspora",
        credits: "3.0"
    },
    {
        label: "HU - 3900 Inquiry Seminar In Humanities And Arts",
        section: "D21 - INQ SEM: The Long Civil Rights Movement",
        credits: "3.0"
    },
    {
        label: "HU - 3900 Inquiry Seminar In Humanities And Arts",
        section: "D22 - INQ SEM: Mapping History",
        credits: "3.0"
    },
    {
        label: "HU - 3910 Practicum In Humanities And Arts",
        section: "A01 - PRAC IN HUA: Writing for the Web",
        credits: "3.0"
    },
    {
        label: "HU - 3910 Practicum In Humanities And Arts",
        section: "A02 - PRAC IN HUA: Developing Technology for Music",
        credits: "3.0"
    },
    {
        label: "HU - 3910 Practicum In Humanities And Arts",
        section: "A03 - PRAC IN HUA: Light Art",
        credits: "3.0"
    },
    {
        label: "HU - 3910 Practicum In Humanities And Arts",
        section: "A04 - PRAC IN HUA: Creating Algorithmic Music",
        credits: "3.0"
    },
    {
        label: "HU - 3910 Practicum In Humanities And Arts",
        section: "B01 - PRAC IN HUA: Musical Robotics",
        credits: "3.0"
    },
    {
        label: "HU - 3910 Practicum In Humanities And Arts",
        section: "B02 - PRAC HUA: Visual Persuasion",
        credits: "3.0"
    },
    {
        label: "HU - 3910 Practicum In Humanities And Arts",
        section: "C01 - PRAC IN HUA: Documentary Short Video and Narrative Photography",
        credits: "3.0"
    },
    {
        label: "HU - 3910 Practicum In Humanities And Arts",
        section: "C02 - PRAC IN HUA: Illustrating Fiction",
        credits: "3.0"
    },
    {
        label: "HU - 3910 Practicum In Humanities And Arts",
        section: "C03 - PRAC IN HUA: Music and Science",
        credits: "3.0"
    },
    {
        label: "HU - 3910 Practicum In Humanities And Arts",
        section: "C04 - PRAC IN HUA: Arranging",
        credits: "3.0"
    },
    {
        label: "HU - 3910 Practicum In Humanities And Arts",
        section: "C05 - PRAC IN HUA: Adapt/Modded Musical Instruments",
        credits: "3.0"
    },
    {
        label: "HU - 3910 Practicum In Humanities And Arts",
        section: "C06 - PRAC IN HUA: WasteWorks",
        credits: "3.0"
    },
    {
        label: "HU - 3910 Practicum In Humanities And Arts",
        section: "C08 - PRAC IN HUA:  Producer as Composer",
        credits: "3.0"
    },
    {
        label: "HU - 3910 Practicum In Humanities And Arts",
        section: "D01 - PRAC IN HUA: Creating Algorithmic Music",
        credits: "3.0"
    },
    {
        label: "HU - 3910 Practicum In Humanities And Arts",
        section: "D02 - PRAC IN HUA: Nature, Design & Art",
        credits: "3.0"
    },
    {
        label: "HU - 3910 Practicum In Humanities And Arts",
        section: "D03 - PRAC IN HUA: 2D Design - 3D Sculpture",
        credits: "3.0"
    },
    {
        label: "HU - 3910 Practicum In Humanities And Arts",
        section: "D04 - PRAC IN HUA: Advanced Studies in Figure Drawing",
        credits: "3.0"
    },
    {
        label: "HU - 3910 Practicum In Humanities And Arts",
        section: "D05 - PRAC IN HUA: Cinematic Production",
        credits: "3.0"
    },
    {
        label: "HU - 3910 Practicum In Humanities And Arts",
        section: "D06 - PRAC IN HUA: Light Art",
        credits: "3.0"
    },
    {
        label: "HU - 3910 Practicum In Humanities And Arts",
        section: "D07 - PRAC IN HUA: Develop Technology for Music",
        credits: "3.0"
    },
    {
        label: "HU - 3910 Practicum In Humanities And Arts",
        section: "D08 - PRAC IN HUA: Vocal Performance",
        credits: "3.0"
    },
    {
        label: "HU - 3910 Practicum In Humanities And Arts",
        section: "D09 - PRAC IN HUA: Music and Science",
        credits: "3.0"
    },
    {
        label: "HU - 3910 Practicum In Humanities And Arts",
        section: "D11 - PRAC IN HUA: WasteWorks",
        credits: "3.0"
    },
    {
        label: "HU - 3910 Practicum In Humanities And Arts",
        section: "D12 - PRAC IN HUA: Literary Magazine Editing",
        credits: "3.0"
    },
    {
        label: "HU - 3910 Practicum In Humanities And Arts",
        section: "D13 - PRAC IN HUA: Instrumental Music Performance",
        credits: "3.0"
    },
    {
        label: "HU - 3910 Practicum In Humanities And Arts",
        section: "D14 - PRAC IN HUA: Writing a Web Series",
        credits: "3.0"
    },
    {
        label: "HU - 3910 Practicum In Humanities And Arts",
        section: "F01 - PRAC IN HUA: Acting & Dramaturgy",
        credits: "3.0"
    },
    {
        label: "HU - 3910 Practicum In Humanities And Arts",
        section: "F02 - PRAC IN HUA: Design & Management",
        credits: "3.0"
    },
    {
        label: "HU - 3910 Practicum In Humanities And Arts",
        section: "F03 - PRAC IN HUA: Technical Production",
        credits: "3.0"
    },
    {
        label: "HU - 3910 Practicum In Humanities And Arts",
        section: "S01 - PRAC IN HUA: Directing & Dramaturgy",
        credits: "3.0"
    },
    {
        label: "HU - 3910 Practicum In Humanities And Arts",
        section: "S02 - PRAC IN HUA: Design & Management",
        credits: "3.0"
    },
    {
        label: "HU - 3910 Practicum In Humanities And Arts",
        section: "S03 - PRAC IN HUA: Technical Production",
        credits: "3.0"
    },
    {
        label: "ID - 2050 SOC SCI RES-IQP-",
        section: "A01 - SOC SCI RES-IQP: Cape Town",
        credits: "3.0"
    },
    {
        label: "ID - 2050 SOC SCI RES-IQP-",
        section: "A02 - SOC SCI RES- IQP: Hangzhou",
        credits: "3.0"
    },
    {
        label: "ID - 2050 SOC SCI RES-IQP-",
        section: "A03 - SOC SCI RES- IQP: Kyoto",
        credits: "3.0"
    },
    {
        label: "ID - 2050 SOC SCI RES-IQP-",
        section: "A04 - SOC SCI RES- IQP: Melbourne",
        credits: "3.0"
    },
    {
        label: "ID - 2050 SOC SCI RES-IQP-",
        section: "A05 - SOC SCI RES- IQP: Nantucket",
        credits: "3.0"
    },
    {
        label: "ID - 2050 SOC SCI RES-IQP-",
        section: "A06 - SOC SCI RES- IQP: Prague",
        credits: "3.0"
    },
    {
        label: "ID - 2050 SOC SCI RES-IQP-",
        section: "A07 - SOC SCI RES-IQP: Santa Fe",
        credits: "3.0"
    },
    {
        label: "ID - 2050 SOC SCI RES-IQP-",
        section: "A08 - SOC SCI RES-IQP: Tirana",
        credits: "3.0"
    },
    {
        label: "ID - 2050 SOC SCI RES-IQP-",
        section: "A09 - SOC SCI RES-IQP: Venice",
        credits: "3.0"
    },
    {
        label: "ID - 2050 SOC SCI RES-IQP-",
        section: "A10 - SOC SCI RES-IQP: Washington DC",
        credits: "3.0"
    },
    {
        label: "ID - 2050 SOC SCI RES-IQP-",
        section: "A11 - SOC SCI RES-IQP: Nepal",
        credits: "3.0"
    },
    {
        label: "ID - 2050 SOC SCI RES-IQP-",
        section: "A12 - SOC SCI RES-IQP- Hawaii",
        credits: "3.0"
    },
    {
        label: "ID - 2050 SOC SCI RES-IQP-",
        section: "A13 - SOC SCI RES-IQP- Syros",
        credits: "3.0"
    },
    {
        label: "ID - 2050 SOC SCI RES-IQP-",
        section: "B01 - SOC SCI RES-IQP: Bangkok ",
        credits: "3.0"
    },
    {
        label: "ID - 2050 SOC SCI RES-IQP-",
        section: "B02 - SOC SCI RES-IQP- Cuenca",
        credits: "3.0"
    },
    {
        label: "ID - 2050 SOC SCI RES-IQP-",
        section: "B04 - SOC SCI RES-IQP: Hawaii",
        credits: "3.0"
    },
    {
        label: "ID - 2050 SOC SCI RES-IQP-",
        section: "B05 - SOC SCI RES-IQP: Ghana",
        credits: "3.0"
    },
    {
        label: "ID - 2050 SOC SCI RES-IQP-",
        section: "B06 - SOC SCI RES-IQP: Monteverde, Costa Rica",
        credits: "3.0"
    },
    {
        label: "ID - 2050 SOC SCI RES-IQP-",
        section: "B07 - SOC SCI RES-IQP- London",
        credits: "3.0"
    },
    {
        label: "ID - 2050 SOC SCI RES-IQP-",
        section: "B08 - SOC SCI RES-IQP: San Jose, Costa Rica",
        credits: "3.0"
    },
    {
        label: "ID - 2050 SOC SCI RES-IQP-",
        section: "B09 - SOC SCI RES-IQP: New Zealand",
        credits: "3.0"
    },
    {
        label: "ID - 2050 SOC SCI RES-IQP-",
        section: "B10 - SOC SCI RES-IQP- Worcester, MA.",
        credits: "3.0"
    },
    {
        label: "ID - 2050 SOC SCI RES-IQP-",
        section: "B11 - SOC SCI RES-IQP: Hong Kong, China",
        credits: "3.0"
    },
    {
        label: "ID - 2050 SOC SCI RES-IQP-",
        section: "B12 - SOC SCI RES-IQP- Puerta Rico",
        credits: "3.0"
    },
    {
        label: "ID - 2050 SOC SCI RES-IQP-",
        section: "C01 - SOC SCI RES-IQP-Paraguay",
        credits: "3.0"
    },
    {
        label: "ID - 2050 SOC SCI RES-IQP-",
        section: "C02 - SOC SCI RES-IQP-Germany",
        credits: "3.0"
    },
    {
        label: "ID - 2050 SOC SCI RES-IQP-",
        section: "C03 - SOC SCI RES-IQP- Romania",
        credits: "3.0"
    },
    {
        label: "ID - 2050 SOC SCI RES-IQP-",
        section: "C04 - SOC SCI RES-IQP- Denmark",
        credits: "3.0"
    },
    {
        label: "ID - 2050 SOC SCI RES-IQP-",
        section: "C05 - SOC SCI RES-IQP- Cuenca",
        credits: "3.0"
    },
    {
        label: "ID - 2050 SOC SCI RES-IQP-",
        section: "C06 - SOC SCI RES-IQP- Paxton",
        credits: "3.0"
    },
    {
        label: "ID - 2050 SOC SCI RES-IQP-",
        section: "C07 - SOC SCI RES-IQP- London",
        credits: "3.0"
    },
    {
        label: "ID - 2050 SOC SCI RES-IQP-",
        section: "C08 - SOC SCI RES-IQP- India",
        credits: "3.0"
    },
    {
        label: "ID - 2050 SOC SCI RES-IQP-",
        section: "C09 - SOC SCI RES-IQP- Australia",
        credits: "3.0"
    },
    {
        label: "ID - 2050 SOC SCI RES-IQP-",
        section: "C10 - SOC SCI RES-IQP- Cadiz",
        credits: "3.0"
    },
    {
        label: "ID - 2050 SOC SCI RES-IQP-",
        section: "C11 - SOC SCI RES-IQP- Puerto Rico",
        credits: "3.0"
    },
    {
        label: "ID - 2050 SOC SCI RES-IQP-",
        section: "C12 - SOC SCI RES-IQP- Taipei Taiwan",
        credits: "3.0"
    },
    {
        label: "ID - 2050 SOC SCI RES-IQP-",
        section: "C13 - SOC SCI RES-IQP- Greece",
        credits: "3.0"
    },
    {
        label: "ID - 2050 SOC SCI RES-IQP-",
        section: "C14 - SOC SCI RES-IQP- MWROC MA, USA",
        credits: "3.0"
    },
    {
        label: "ID - 2050 SOC SCI RES-IQP-",
        section: "C15 - SOC SCI RES-IQP- Namibia",
        credits: "3.0"
    },
    {
        label: "ID - 2050 SOC SCI RES-IQP-",
        section: "C16 - SOC SCI RES-IQP- Worcester UK",
        credits: "3.0"
    },
    {
        label: "ID - 2050 SOC SCI RES-IQP-",
        section: "C17 - SOC SCI RES-IQP- Armenia",
        credits: "3.0"
    },
    {
        label: "ID - 2050 SOC SCI RES-IQP-",
        section: "C18 - SOC SCI RES-IQP- Rabat-Morocco",
        credits: "3.0"
    },
    {
        label: "ID - 2050 SOC SCI RES-IQP-",
        section: "C19 - SOC SCI RES-IQP-Worc Tech Teacher Prep",
        credits: "3.0"
    },
    {
        label: "ID - 2050 SOC SCI RES-IQP-",
        section: "C20 - SOC SCI RES-IQP- Worcester Ma",
        credits: "3.0"
    },
    {
        label: "ID - 2050 SOC SCI RES-IQP-",
        section: "C21 - SOC SCI RES-IQP- Venice",
        credits: "3.0"
    },
    {
        label: "ID - 2050 SOC SCI RES-IQP-",
        section: "C22 - SOC SCI RES-IQP- Lausanne",
        credits: "3.0"
    },
    {
        label: "ID - 2050 SOC SCI RES-IQP-",
        section: "C23 - SOC SCI RES-IQP- San Jose Costa Rica",
        credits: "3.0"
    },
    {
        label: "ID - 2050 SOC SCI RES-IQP-",
        section: "C24 - SOC SCI RES-IQP- Singapore",
        credits: "3.0"
    },
    {
        label: "ID - 2050 SOC SCI RES-IQP-",
        section: "D01 - SOC SCI RES-IQP: COA option ME",
        credits: "3.0"
    },
    {
        label: "ID - 2050 SOC SCI RES-IQP-",
        section: "D02 - SOC SCI RES-IQP: Schodic option ME",
        credits: "3.0"
    },
    {
        label: "ID - 2050 SOC SCI RES-IQP-",
        section: "D03 - SOC SCI RES-IQP- Beijing China",
        credits: "3.0"
    },
    {
        label: "ID - 2050 SOC SCI RES-IQP-",
        section: "D04 - SOC SCI RES-IQP- London England",
        credits: "3.0"
    },
    {
        label: "ID - 2050 SOC SCI RES-IQP-",
        section: "D05 - SOC SCI RES-IQP: MWROC",
        credits: "3.0"
    },
    {
        label: "ID - 2050 SOC SCI RES-IQP-",
        section: "D06 - SOC SCI RES-IQP: France",
        credits: "3.0"
    },
    {
        label: "ID - 2050 SOC SCI RES-IQP-",
        section: "D07 - SOC SCI RES-IQP- Boston, MA",
        credits: "3.0"
    },
    {
        label: "ID - 2050 SOC SCI RES-IQP-",
        section: "D08 - SOC SCI RES-IQP- Farm Stay, MA",
        credits: "3.0"
    },
    {
        label: "ID - 2050 SOC SCI RES-IQP-",
        section: "D09 - SOC SCI RES-IQP- Glacier National Park",
        credits: "3.0"
    },
    {
        label: "ID - 2050 SOC SCI RES-IQP-",
        section: "D10 - SOC SCI RES-IQP- Panama City, Panama",
        credits: "3.0"
    },
    {
        label: "ID - 2050 SOC SCI RES-IQP-",
        section: "D11 - SOC SCI RES-IQP- Reykjavik, Iceland",
        credits: "3.0"
    },
    {
        label: "ID - 2050 SOC SCI RES-IQP-",
        section: "D12 - SOC SCI RES-IQP- Zurich, Switzerland",
        credits: "3.0"
    },
    {
        label: "ID - 2050 SOC SCI RES-IQP-",
        section: "D13 - SOC SCI RES-IQP- Venice",
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
        label: "IMGD - 1000 Critical Studies Of Interactive Media And Games",
        section: "C01",
        credits: "3.0"
    },
    {
        label: "IMGD - 1001 The Game Development Process",
        section: "A01",
        credits: "3.0"
    },
    {
        label: "IMGD - 1001 The Game Development Process",
        section: "A02",
        credits: "3.0"
    },
    {
        label: "IMGD - 1001 The Game Development Process",
        section: "B01",
        credits: "3.0"
    },
    {
        label: "IMGD - 1001 The Game Development Process",
        section: "C01",
        credits: "3.0"
    },
    {
        label: "IMGD - 1002 Storytelling In Interactive Media And Games",
        section: "D01",
        credits: "3.0"
    },
    {
        label: "IMGD - 1002 Storytelling In Interactive Media And Games",
        section: "D02",
        credits: "3.0"
    },
    {
        label: "IMGD - 1002 Storytelling In Interactive Media And Games",
        section: "D03",
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
        label: "IMGD - 2030 Game Audio I",
        section: "BL01/BX01",
        credits: "3.0"
    },
    {
        label: "IMGD - 2030 Game Audio I",
        section: "CL01/CX01",
        credits: "3.0"
    },
    {
        label: "IMGD - 2030 Game Audio I",
        section: "DL01/DX01",
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
        label: "IMGD - 2101 3d Modeling I",
        section: "A02",
        credits: "3.0"
    },
    {
        label: "IMGD - 2101 3d Modeling I",
        section: "C01",
        credits: "3.0"
    },
    {
        label: "IMGD - 2101 3d Modeling I",
        section: "C02",
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
        label: "IMGD - 2222 2d Animation I",
        section: "C01",
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
        label: "IMGD - 2450 Narrative Design for Interactive Media and Games",
        section: "B01",
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
        label: "IMGD - 2900 Digital Game Design I",
        section: "C01",
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
        label: "IMGD - 4099 Special Topics In Imgd",
        section: "B01 - ST: AI-Based Experience Design",
        credits: "3.0"
    },
    {
        label: "IMGD - 4099 Special Topics In Imgd",
        section: "F01 - ST: Digi Studio",
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
        label: "IMGD - 5000 IMGD Studio",
        section: "S01",
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
        label: "INTL - 1100 Introduction To International And Global Studies",
        section: "A02",
        credits: "3.0"
    },
    {
        label: "INTL - 1100 Introduction To International And Global Studies",
        section: "C01",
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
        label: "INTL - 2100 Approaches To Global Studies",
        section: "D01",
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
        label: "INTL - 2910 Topics In Global Studies",
        section: "A02 - Topics In Global Studies: Europe in the Era of the World Wars",
        credits: "3.0"
    },
    {
        label: "INTL - 2910 Topics In Global Studies",
        section: "B01 - Topics In Global Studies: Chinese Women and Modernity",
        credits: "3.0"
    },
    {
        label: "INTL - 2910 Topics In Global Studies",
        section: "B02 - Topics In Global Studies: Modern Russia and the World, 1917-2019",
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
        label: "ISE - 1801 College Writing for English Language Learners",
        section: "B01",
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
        label: "ISE - 2800 Research Writing for English Language Learners",
        section: "D01",
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
        label: "MA - 1020 Calculus I With Preliminary Topics",
        section: "FL01/FD01",
        credits: "3.0"
    },
    {
        label: "MA - 1020 Calculus I With Preliminary Topics",
        section: "FL01/FD02",
        credits: "3.0"
    },
    {
        label: "MA - 1020 Calculus I With Preliminary Topics",
        section: "FL02/FD05",
        credits: "3.0"
    },
    {
        label: "MA - 1020 Calculus I With Preliminary Topics",
        section: "FL03/FD03",
        credits: "3.0"
    },
    {
        label: "MA - 1020 Calculus I With Preliminary Topics",
        section: "FL03/FD06",
        credits: "3.0"
    },
    {
        label: "MA - 1021 Calculus I",
        section: "Interest List-A Term",
        credits: "3.0"
    },
    {
        label: "MA - 1021 Calculus I",
        section: "AL02/AD03/AX01",
        credits: "3.0"
    },
    {
        label: "MA - 1021 Calculus I",
        section: "AL02/AD03/AX02",
        credits: "3.0"
    },
    {
        label: "MA - 1021 Calculus I",
        section: "AL02/AD03/AX03",
        credits: "3.0"
    },
    {
        label: "MA - 1021 Calculus I",
        section: "AL02/AD03/AX04",
        credits: "3.0"
    },
    {
        label: "MA - 1021 Calculus I",
        section: "AL02/AD03/AX05",
        credits: "3.0"
    },
    {
        label: "MA - 1021 Calculus I",
        section: "AL02/AD03/AX06",
        credits: "3.0"
    },
    {
        label: "MA - 1021 Calculus I",
        section: "AL02/AD03/AX07",
        credits: "3.0"
    },
    {
        label: "MA - 1021 Calculus I",
        section: "AL02/AD03/AX08",
        credits: "3.0"
    },
    {
        label: "MA - 1021 Calculus I",
        section: "AL02/AD03/AX09",
        credits: "3.0"
    },
    {
        label: "MA - 1021 Calculus I",
        section: "AL02/AD03/AX11",
        credits: "3.0"
    },
    {
        label: "MA - 1021 Calculus I",
        section: "AL02/AD03/AX12",
        credits: "3.0"
    },
    {
        label: "MA - 1021 Calculus I",
        section: "AL02/AD03/AX13",
        credits: "3.0"
    },
    {
        label: "MA - 1021 Calculus I",
        section: "AL02/AD11/AX01",
        credits: "3.0"
    },
    {
        label: "MA - 1021 Calculus I",
        section: "AL02/AD11/AX02",
        credits: "3.0"
    },
    {
        label: "MA - 1021 Calculus I",
        section: "AL02/AD11/AX03",
        credits: "3.0"
    },
    {
        label: "MA - 1021 Calculus I",
        section: "AL02/AD11/AX04",
        credits: "3.0"
    },
    {
        label: "MA - 1021 Calculus I",
        section: "AL02/AD11/AX05",
        credits: "3.0"
    },
    {
        label: "MA - 1021 Calculus I",
        section: "AL02/AD11/AX06",
        credits: "3.0"
    },
    {
        label: "MA - 1021 Calculus I",
        section: "AL02/AD11/AX07",
        credits: "3.0"
    },
    {
        label: "MA - 1021 Calculus I",
        section: "AL02/AD11/AX08",
        credits: "3.0"
    },
    {
        label: "MA - 1021 Calculus I",
        section: "AL02/AD11/AX09",
        credits: "3.0"
    },
    {
        label: "MA - 1021 Calculus I",
        section: "AL02/AD11/AX11",
        credits: "3.0"
    },
    {
        label: "MA - 1021 Calculus I",
        section: "AL02/AD11/AX12",
        credits: "3.0"
    },
    {
        label: "MA - 1021 Calculus I",
        section: "AL02/AD11/AX13",
        credits: "3.0"
    },
    {
        label: "MA - 1021 Calculus I",
        section: "AL02/AD17/AX01",
        credits: "3.0"
    },
    {
        label: "MA - 1021 Calculus I",
        section: "AL02/AD17/AX02",
        credits: "3.0"
    },
    {
        label: "MA - 1021 Calculus I",
        section: "AL02/AD17/AX03",
        credits: "3.0"
    },
    {
        label: "MA - 1021 Calculus I",
        section: "AL02/AD17/AX04",
        credits: "3.0"
    },
    {
        label: "MA - 1021 Calculus I",
        section: "AL02/AD17/AX05",
        credits: "3.0"
    },
    {
        label: "MA - 1021 Calculus I",
        section: "AL02/AD17/AX06",
        credits: "3.0"
    },
    {
        label: "MA - 1021 Calculus I",
        section: "AL02/AD17/AX07",
        credits: "3.0"
    },
    {
        label: "MA - 1021 Calculus I",
        section: "AL02/AD17/AX08",
        credits: "3.0"
    },
    {
        label: "MA - 1021 Calculus I",
        section: "AL02/AD17/AX09",
        credits: "3.0"
    },
    {
        label: "MA - 1021 Calculus I",
        section: "AL02/AD17/AX11",
        credits: "3.0"
    },
    {
        label: "MA - 1021 Calculus I",
        section: "AL02/AD17/AX12",
        credits: "3.0"
    },
    {
        label: "MA - 1021 Calculus I",
        section: "AL02/AD17/AX13",
        credits: "3.0"
    },
    {
        label: "MA - 1021 Calculus I",
        section: "AL04/AD04/AX01",
        credits: "3.0"
    },
    {
        label: "MA - 1021 Calculus I",
        section: "AL04/AD04/AX02",
        credits: "3.0"
    },
    {
        label: "MA - 1021 Calculus I",
        section: "AL04/AD04/AX03",
        credits: "3.0"
    },
    {
        label: "MA - 1021 Calculus I",
        section: "AL04/AD04/AX04",
        credits: "3.0"
    },
    {
        label: "MA - 1021 Calculus I",
        section: "AL04/AD04/AX05",
        credits: "3.0"
    },
    {
        label: "MA - 1021 Calculus I",
        section: "AL04/AD04/AX06",
        credits: "3.0"
    },
    {
        label: "MA - 1021 Calculus I",
        section: "AL04/AD04/AX07",
        credits: "3.0"
    },
    {
        label: "MA - 1021 Calculus I",
        section: "AL04/AD04/AX08",
        credits: "3.0"
    },
    {
        label: "MA - 1021 Calculus I",
        section: "AL04/AD04/AX09",
        credits: "3.0"
    },
    {
        label: "MA - 1021 Calculus I",
        section: "AL04/AD04/AX10",
        credits: "3.0"
    },
    {
        label: "MA - 1021 Calculus I",
        section: "AL04/AD04/AX11",
        credits: "3.0"
    },
    {
        label: "MA - 1021 Calculus I",
        section: "AL04/AD04/AX12",
        credits: "3.0"
    },
    {
        label: "MA - 1021 Calculus I",
        section: "AL04/AD04/AX13",
        credits: "3.0"
    },
    {
        label: "MA - 1021 Calculus I",
        section: "AL04/AD08/AX01",
        credits: "3.0"
    },
    {
        label: "MA - 1021 Calculus I",
        section: "AL04/AD08/AX02",
        credits: "3.0"
    },
    {
        label: "MA - 1021 Calculus I",
        section: "AL04/AD08/AX03",
        credits: "3.0"
    },
    {
        label: "MA - 1021 Calculus I",
        section: "AL04/AD08/AX04",
        credits: "3.0"
    },
    {
        label: "MA - 1021 Calculus I",
        section: "AL04/AD08/AX05",
        credits: "3.0"
    },
    {
        label: "MA - 1021 Calculus I",
        section: "AL04/AD08/AX06",
        credits: "3.0"
    },
    {
        label: "MA - 1021 Calculus I",
        section: "AL04/AD08/AX07",
        credits: "3.0"
    },
    {
        label: "MA - 1021 Calculus I",
        section: "AL04/AD08/AX08",
        credits: "3.0"
    },
    {
        label: "MA - 1021 Calculus I",
        section: "AL04/AD08/AX09",
        credits: "3.0"
    },
    {
        label: "MA - 1021 Calculus I",
        section: "AL04/AD08/AX10",
        credits: "3.0"
    },
    {
        label: "MA - 1021 Calculus I",
        section: "AL04/AD08/AX11",
        credits: "3.0"
    },
    {
        label: "MA - 1021 Calculus I",
        section: "AL04/AD08/AX12",
        credits: "3.0"
    },
    {
        label: "MA - 1021 Calculus I",
        section: "AL04/AD08/AX13",
        credits: "3.0"
    },
    {
        label: "MA - 1021 Calculus I",
        section: "AL05/AD05/AX01",
        credits: "3.0"
    },
    {
        label: "MA - 1021 Calculus I",
        section: "AL05/AD05/AX02",
        credits: "3.0"
    },
    {
        label: "MA - 1021 Calculus I",
        section: "AL05/AD05/AX03",
        credits: "3.0"
    },
    {
        label: "MA - 1021 Calculus I",
        section: "AL05/AD05/AX04",
        credits: "3.0"
    },
    {
        label: "MA - 1021 Calculus I",
        section: "AL05/AD05/AX05",
        credits: "3.0"
    },
    {
        label: "MA - 1021 Calculus I",
        section: "AL05/AD05/AX06",
        credits: "3.0"
    },
    {
        label: "MA - 1021 Calculus I",
        section: "AL05/AD05/AX07",
        credits: "3.0"
    },
    {
        label: "MA - 1021 Calculus I",
        section: "AL05/AD05/AX08",
        credits: "3.0"
    },
    {
        label: "MA - 1021 Calculus I",
        section: "AL05/AD05/AX09",
        credits: "3.0"
    },
    {
        label: "MA - 1021 Calculus I",
        section: "AL05/AD05/AX10",
        credits: "3.0"
    },
    {
        label: "MA - 1021 Calculus I",
        section: "AL05/AD05/AX11",
        credits: "3.0"
    },
    {
        label: "MA - 1021 Calculus I",
        section: "AL05/AD05/AX12",
        credits: "3.0"
    },
    {
        label: "MA - 1021 Calculus I",
        section: "AL05/AD05/AX13",
        credits: "3.0"
    },
    {
        label: "MA - 1021 Calculus I",
        section: "AL06/AD06/AX01",
        credits: "3.0"
    },
    {
        label: "MA - 1021 Calculus I",
        section: "AL06/AD06/AX02",
        credits: "3.0"
    },
    {
        label: "MA - 1021 Calculus I",
        section: "AL06/AD06/AX03",
        credits: "3.0"
    },
    {
        label: "MA - 1021 Calculus I",
        section: "AL06/AD06/AX04",
        credits: "3.0"
    },
    {
        label: "MA - 1021 Calculus I",
        section: "AL06/AD06/AX05",
        credits: "3.0"
    },
    {
        label: "MA - 1021 Calculus I",
        section: "AL06/AD06/AX06",
        credits: "3.0"
    },
    {
        label: "MA - 1021 Calculus I",
        section: "AL06/AD06/AX07",
        credits: "3.0"
    },
    {
        label: "MA - 1021 Calculus I",
        section: "AL06/AD06/AX08",
        credits: "3.0"
    },
    {
        label: "MA - 1021 Calculus I",
        section: "AL06/AD06/AX09",
        credits: "3.0"
    },
    {
        label: "MA - 1021 Calculus I",
        section: "AL06/AD06/AX10",
        credits: "3.0"
    },
    {
        label: "MA - 1021 Calculus I",
        section: "AL06/AD06/AX11",
        credits: "3.0"
    },
    {
        label: "MA - 1021 Calculus I",
        section: "AL06/AD06/AX12",
        credits: "3.0"
    },
    {
        label: "MA - 1021 Calculus I",
        section: "AL06/AD06/AX13",
        credits: "3.0"
    },
    {
        label: "MA - 1021 Calculus I",
        section: "AL06/AD07/AX01",
        credits: "3.0"
    },
    {
        label: "MA - 1021 Calculus I",
        section: "AL06/AD07/AX02",
        credits: "3.0"
    },
    {
        label: "MA - 1021 Calculus I",
        section: "AL06/AD07/AX03",
        credits: "3.0"
    },
    {
        label: "MA - 1021 Calculus I",
        section: "AL06/AD07/AX04",
        credits: "3.0"
    },
    {
        label: "MA - 1021 Calculus I",
        section: "AL06/AD07/AX05",
        credits: "3.0"
    },
    {
        label: "MA - 1021 Calculus I",
        section: "AL06/AD07/AX06",
        credits: "3.0"
    },
    {
        label: "MA - 1021 Calculus I",
        section: "AL06/AD07/AX07",
        credits: "3.0"
    },
    {
        label: "MA - 1021 Calculus I",
        section: "AL06/AD07/AX08",
        credits: "3.0"
    },
    {
        label: "MA - 1021 Calculus I",
        section: "AL06/AD07/AX09",
        credits: "3.0"
    },
    {
        label: "MA - 1021 Calculus I",
        section: "AL06/AD07/AX10",
        credits: "3.0"
    },
    {
        label: "MA - 1021 Calculus I",
        section: "AL06/AD07/AX11",
        credits: "3.0"
    },
    {
        label: "MA - 1021 Calculus I",
        section: "AL06/AD07/AX12",
        credits: "3.0"
    },
    {
        label: "MA - 1021 Calculus I",
        section: "AL06/AD07/AX13",
        credits: "3.0"
    },
    {
        label: "MA - 1021 Calculus I",
        section: "AL07/AD15/AX01",
        credits: "3.0"
    },
    {
        label: "MA - 1021 Calculus I",
        section: "AL07/AD15/AX03",
        credits: "3.0"
    },
    {
        label: "MA - 1021 Calculus I",
        section: "AL07/AD15/AX04",
        credits: "3.0"
    },
    {
        label: "MA - 1021 Calculus I",
        section: "AL07/AD15/AX05",
        credits: "3.0"
    },
    {
        label: "MA - 1021 Calculus I",
        section: "AL07/AD15/AX06",
        credits: "3.0"
    },
    {
        label: "MA - 1021 Calculus I",
        section: "AL07/AD15/AX07",
        credits: "3.0"
    },
    {
        label: "MA - 1021 Calculus I",
        section: "AL07/AD15/AX08",
        credits: "3.0"
    },
    {
        label: "MA - 1021 Calculus I",
        section: "AL07/AD15/AX09",
        credits: "3.0"
    },
    {
        label: "MA - 1021 Calculus I",
        section: "AL07/AD15/AX10",
        credits: "3.0"
    },
    {
        label: "MA - 1021 Calculus I",
        section: "AL07/AD15/AX11",
        credits: "3.0"
    },
    {
        label: "MA - 1021 Calculus I",
        section: "AL07/AD15/AX12",
        credits: "3.0"
    },
    {
        label: "MA - 1021 Calculus I",
        section: "AL07/AD15/AX13",
        credits: "3.0"
    },
    {
        label: "MA - 1021 Calculus I",
        section: "AL07/AD16/AX01",
        credits: "3.0"
    },
    {
        label: "MA - 1021 Calculus I",
        section: "AL07/AD16/AX02",
        credits: "3.0"
    },
    {
        label: "MA - 1021 Calculus I",
        section: "AL07/AD16/AX04",
        credits: "3.0"
    },
    {
        label: "MA - 1021 Calculus I",
        section: "AL07/AD16/AX05",
        credits: "3.0"
    },
    {
        label: "MA - 1021 Calculus I",
        section: "AL07/AD16/AX06",
        credits: "3.0"
    },
    {
        label: "MA - 1021 Calculus I",
        section: "AL07/AD16/AX07",
        credits: "3.0"
    },
    {
        label: "MA - 1021 Calculus I",
        section: "AL07/AD16/AX08",
        credits: "3.0"
    },
    {
        label: "MA - 1021 Calculus I",
        section: "AL07/AD16/AX09",
        credits: "3.0"
    },
    {
        label: "MA - 1021 Calculus I",
        section: "AL07/AD16/AX10",
        credits: "3.0"
    },
    {
        label: "MA - 1021 Calculus I",
        section: "AL07/AD16/AX11",
        credits: "3.0"
    },
    {
        label: "MA - 1021 Calculus I",
        section: "AL07/AD16/AX12",
        credits: "3.0"
    },
    {
        label: "MA - 1021 Calculus I",
        section: "AL07/AD16/AX13",
        credits: "3.0"
    },
    {
        label: "MA - 1021 Calculus I",
        section: "AL08/AD09/AX01",
        credits: "3.0"
    },
    {
        label: "MA - 1021 Calculus I",
        section: "AL08/AD09/AX02",
        credits: "3.0"
    },
    {
        label: "MA - 1021 Calculus I",
        section: "AL08/AD09/AX03",
        credits: "3.0"
    },
    {
        label: "MA - 1021 Calculus I",
        section: "AL08/AD09/AX04",
        credits: "3.0"
    },
    {
        label: "MA - 1021 Calculus I",
        section: "AL08/AD09/AX05",
        credits: "3.0"
    },
    {
        label: "MA - 1021 Calculus I",
        section: "AL08/AD09/AX06",
        credits: "3.0"
    },
    {
        label: "MA - 1021 Calculus I",
        section: "AL08/AD09/AX07",
        credits: "3.0"
    },
    {
        label: "MA - 1021 Calculus I",
        section: "AL08/AD09/AX08",
        credits: "3.0"
    },
    {
        label: "MA - 1021 Calculus I",
        section: "AL08/AD09/AX09",
        credits: "3.0"
    },
    {
        label: "MA - 1021 Calculus I",
        section: "AL08/AD09/AX10",
        credits: "3.0"
    },
    {
        label: "MA - 1021 Calculus I",
        section: "AL08/AD09/AX11",
        credits: "3.0"
    },
    {
        label: "MA - 1021 Calculus I",
        section: "AL08/AD09/AX12",
        credits: "3.0"
    },
    {
        label: "MA - 1021 Calculus I",
        section: "AL08/AD09/AX13",
        credits: "3.0"
    },
    {
        label: "MA - 1021 Calculus I",
        section: "AL08/AD14/AX01",
        credits: "3.0"
    },
    {
        label: "MA - 1021 Calculus I",
        section: "AL08/AD14/AX02",
        credits: "3.0"
    },
    {
        label: "MA - 1021 Calculus I",
        section: "AL08/AD14/AX03",
        credits: "3.0"
    },
    {
        label: "MA - 1021 Calculus I",
        section: "AL08/AD14/AX04",
        credits: "3.0"
    },
    {
        label: "MA - 1021 Calculus I",
        section: "AL08/AD14/AX05",
        credits: "3.0"
    },
    {
        label: "MA - 1021 Calculus I",
        section: "AL08/AD14/AX06",
        credits: "3.0"
    },
    {
        label: "MA - 1021 Calculus I",
        section: "AL08/AD14/AX07",
        credits: "3.0"
    },
    {
        label: "MA - 1021 Calculus I",
        section: "AL08/AD14/AX08",
        credits: "3.0"
    },
    {
        label: "MA - 1021 Calculus I",
        section: "AL08/AD14/AX09",
        credits: "3.0"
    },
    {
        label: "MA - 1021 Calculus I",
        section: "AL08/AD14/AX10",
        credits: "3.0"
    },
    {
        label: "MA - 1021 Calculus I",
        section: "AL08/AD14/AX11",
        credits: "3.0"
    },
    {
        label: "MA - 1021 Calculus I",
        section: "AL08/AD14/AX12",
        credits: "3.0"
    },
    {
        label: "MA - 1021 Calculus I",
        section: "AL08/AD14/AX13",
        credits: "3.0"
    },
    {
        label: "MA - 1021 Calculus I",
        section: "AL09/AD19/AX01",
        credits: "3.0"
    },
    {
        label: "MA - 1021 Calculus I",
        section: "AL09/AD19/AX02",
        credits: "3.0"
    },
    {
        label: "MA - 1021 Calculus I",
        section: "AL09/AD19/AX03",
        credits: "3.0"
    },
    {
        label: "MA - 1021 Calculus I",
        section: "AL09/AD19/AX04",
        credits: "3.0"
    },
    {
        label: "MA - 1021 Calculus I",
        section: "AL09/AD19/AX05",
        credits: "3.0"
    },
    {
        label: "MA - 1021 Calculus I",
        section: "AL09/AD19/AX06",
        credits: "3.0"
    },
    {
        label: "MA - 1021 Calculus I",
        section: "AL09/AD19/AX07",
        credits: "3.0"
    },
    {
        label: "MA - 1021 Calculus I",
        section: "AL09/AD19/AX08",
        credits: "3.0"
    },
    {
        label: "MA - 1021 Calculus I",
        section: "AL09/AD19/AX09",
        credits: "3.0"
    },
    {
        label: "MA - 1021 Calculus I",
        section: "AL09/AD19/AX10",
        credits: "3.0"
    },
    {
        label: "MA - 1021 Calculus I",
        section: "AL09/AD19/AX11",
        credits: "3.0"
    },
    {
        label: "MA - 1021 Calculus I",
        section: "AL09/AD19/AX12",
        credits: "3.0"
    },
    {
        label: "MA - 1021 Calculus I",
        section: "AL09/AD19/AX13",
        credits: "3.0"
    },
    {
        label: "MA - 1021 Calculus I",
        section: "AL09/AD20/AX01",
        credits: "3.0"
    },
    {
        label: "MA - 1021 Calculus I",
        section: "AL09/AD20/AX02",
        credits: "3.0"
    },
    {
        label: "MA - 1021 Calculus I",
        section: "AL09/AD20/AX03",
        credits: "3.0"
    },
    {
        label: "MA - 1021 Calculus I",
        section: "AL09/AD20/AX04",
        credits: "3.0"
    },
    {
        label: "MA - 1021 Calculus I",
        section: "AL09/AD20/AX05",
        credits: "3.0"
    },
    {
        label: "MA - 1021 Calculus I",
        section: "AL09/AD20/AX06",
        credits: "3.0"
    },
    {
        label: "MA - 1021 Calculus I",
        section: "AL09/AD20/AX07",
        credits: "3.0"
    },
    {
        label: "MA - 1021 Calculus I",
        section: "AL09/AD20/AX08",
        credits: "3.0"
    },
    {
        label: "MA - 1021 Calculus I",
        section: "AL09/AD20/AX09",
        credits: "3.0"
    },
    {
        label: "MA - 1021 Calculus I",
        section: "AL09/AD20/AX10",
        credits: "3.0"
    },
    {
        label: "MA - 1021 Calculus I",
        section: "AL09/AD20/AX11",
        credits: "3.0"
    },
    {
        label: "MA - 1021 Calculus I",
        section: "AL09/AD20/AX12",
        credits: "3.0"
    },
    {
        label: "MA - 1021 Calculus I",
        section: "AL09/AD20/AX13",
        credits: "3.0"
    },
    {
        label: "MA - 1021 Calculus I",
        section: "Interest List-B Term",
        credits: "3.0"
    },
    {
        label: "MA - 1021 Calculus I",
        section: "BL01/BD02/BX01",
        credits: "3.0"
    },
    {
        label: "MA - 1021 Calculus I",
        section: "CL01/CD01/CX01",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "Interest List-A Term",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "AL02/AD02/AX01",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "AL02/AD02/AX02",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "AL02/AD02/AX03",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "AL02/AD02/AX05",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "AL02/AD02/AX06",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "AL02/AD02/AX07",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "AL02/AD02/AX09",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "AL02/AD02/AX10",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "AL03/AD03/AX01",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "AL03/AD03/AX02",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "AL03/AD03/AX05",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "AL03/AD03/AX06",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "AL03/AD03/AX07",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "AL03/AD03/AX08",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "AL03/AD03/AX09",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "AL03/AD03/AX10",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "AL04/AD04/AX01",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "AL04/AD04/AX02",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "AL04/AD04/AX03",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "AL04/AD04/AX05",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "AL04/AD04/AX06",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "AL04/AD04/AX08",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "AL04/AD04/AX09",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "AL04/AD04/AX10",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "AL04/AD13/AX01",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "AL04/AD13/AX02",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "AL04/AD13/AX03",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "AL04/AD13/AX05",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "AL04/AD13/AX06",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "AL04/AD13/AX08",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "AL04/AD13/AX09",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "AL04/AD13/AX10",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "AL05/AD05/AX01",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "AL05/AD05/AX03",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "AL05/AD05/AX05",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "AL05/AD05/AX06",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "AL05/AD05/AX07",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "AL05/AD05/AX08",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "AL05/AD05/AX09",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "AL05/AD05/AX10",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "AL07/AD06/AX01",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "AL07/AD06/AX02",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "AL07/AD06/AX05",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "AL07/AD06/AX06",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "AL07/AD06/AX07",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "AL07/AD06/AX08",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "AL07/AD06/AX09",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "AL07/AD06/AX10",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "AL07/AD10/AX01",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "AL07/AD10/AX02",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "AL07/AD10/AX05",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "AL07/AD10/AX06",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "AL07/AD10/AX07",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "AL07/AD10/AX08",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "AL07/AD10/AX09",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "AL07/AD10/AX10",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "AL08/AD11/AX01",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "AL08/AD11/AX02",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "AL08/AD11/AX03",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "AL08/AD11/AX05",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "AL08/AD11/AX06",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "AL08/AD11/AX07",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "AL08/AD11/AX08",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "AL08/AD11/AX10",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "AL08/AD12/AX01",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "AL08/AD12/AX02",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "AL08/AD12/AX03",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "AL08/AD12/AX05",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "AL08/AD12/AX06",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "AL08/AD12/AX07",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "AL08/AD12/AX08",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "AL08/AD12/AX10",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "Interest List-B Term",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "BL01/BD01/BX01",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "BL01/BD01/BX02",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "BL01/BD01/BX03",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "BL01/BD01/BX04",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "BL01/BD01/BX06",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "BL01/BD01/BX07",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "BL01/BD01/BX08",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "BL01/BD01/BX10",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "BL01/BD01/BX12",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "BL01/BD01/BX14",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "BL01/BD01/BX15",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "BL01/BD01/BX16",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "BL01/BD10/BX01",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "BL01/BD10/BX02",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "BL01/BD10/BX03",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "BL01/BD10/BX04",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "BL01/BD10/BX06",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "BL01/BD10/BX07",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "BL01/BD10/BX08",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "BL01/BD10/BX10",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "BL01/BD10/BX12",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "BL01/BD10/BX14",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "BL01/BD10/BX15",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "BL01/BD10/BX16",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "BL02/BD02/BX01",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "BL02/BD02/BX02",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "BL02/BD02/BX03",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "BL02/BD02/BX04",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "BL02/BD02/BX06",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "BL02/BD02/BX07",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "BL02/BD02/BX08",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "BL02/BD02/BX10",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "BL02/BD02/BX11",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "BL02/BD02/BX14",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "BL02/BD02/BX15",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "BL02/BD02/BX16",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "BL02/BD11/BX01",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "BL02/BD11/BX02",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "BL02/BD11/BX03",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "BL02/BD11/BX04",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "BL02/BD11/BX06",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "BL02/BD11/BX07",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "BL02/BD11/BX08",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "BL02/BD11/BX10",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "BL02/BD11/BX11",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "BL02/BD11/BX14",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "BL02/BD11/BX15",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "BL02/BD11/BX16",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "BL02/BD13/BX01",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "BL02/BD13/BX02",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "BL02/BD13/BX03",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "BL02/BD13/BX04",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "BL02/BD13/BX06",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "BL02/BD13/BX07",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "BL02/BD13/BX08",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "BL02/BD13/BX10",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "BL02/BD13/BX11",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "BL02/BD13/BX14",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "BL02/BD13/BX15",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "BL02/BD13/BX16",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "BL02/BD14/BX01",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "BL02/BD14/BX02",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "BL02/BD14/BX03",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "BL02/BD14/BX04",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "BL02/BD14/BX06",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "BL02/BD14/BX07",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "BL02/BD14/BX08",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "BL02/BD14/BX10",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "BL02/BD14/BX11",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "BL02/BD14/BX14",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "BL02/BD14/BX15",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "BL02/BD14/BX16",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "BL05/BD05/BX01",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "BL05/BD05/BX02",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "BL05/BD05/BX03",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "BL05/BD05/BX04",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "BL05/BD05/BX06",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "BL05/BD05/BX07",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "BL05/BD05/BX08",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "BL05/BD05/BX10",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "BL05/BD05/BX11",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "BL05/BD05/BX12",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "BL05/BD05/BX14",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "BL05/BD05/BX15",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "BL05/BD05/BX16",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "BL05/BD07/BX01",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "BL05/BD07/BX02",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "BL05/BD07/BX03",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "BL05/BD07/BX04",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "BL05/BD07/BX06",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "BL05/BD07/BX07",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "BL05/BD07/BX08",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "BL05/BD07/BX10",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "BL05/BD07/BX11",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "BL05/BD07/BX12",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "BL05/BD07/BX14",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "BL05/BD07/BX15",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "BL05/BD07/BX16",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "BL05/BD12/BX01",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "BL05/BD12/BX02",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "BL05/BD12/BX03",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "BL05/BD12/BX04",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "BL05/BD12/BX06",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "BL05/BD12/BX07",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "BL05/BD12/BX08",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "BL05/BD12/BX10",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "BL05/BD12/BX11",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "BL05/BD12/BX12",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "BL05/BD12/BX14",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "BL05/BD12/BX15",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "BL05/BD12/BX16",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "BL08/BD08/BX01",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "BL08/BD08/BX02",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "BL08/BD08/BX03",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "BL08/BD08/BX04",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "BL08/BD08/BX06",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "BL08/BD08/BX07",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "BL08/BD08/BX08",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "BL08/BD08/BX10",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "BL08/BD08/BX11",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "BL08/BD08/BX12",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "BL08/BD08/BX14",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "BL08/BD08/BX15",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "BL08/BD17/BX01",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "BL08/BD17/BX02",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "BL08/BD17/BX03",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "BL08/BD17/BX04",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "BL08/BD17/BX06",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "BL08/BD17/BX07",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "BL08/BD17/BX08",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "BL08/BD17/BX10",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "BL08/BD17/BX11",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "BL08/BD17/BX12",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "BL08/BD17/BX14",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "BL08/BD17/BX15",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "BL11/BD03/BX01",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "BL11/BD03/BX02",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "BL11/BD03/BX03",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "BL11/BD03/BX04",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "BL11/BD03/BX06",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "BL11/BD03/BX07",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "BL11/BD03/BX08",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "BL11/BD03/BX10",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "BL11/BD03/BX11",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "BL11/BD03/BX12",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "BL11/BD03/BX14",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "BL11/BD03/BX15",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "BL11/BD03/BX16",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "BL11/BD19/BX01",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "BL11/BD19/BX02",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "BL11/BD19/BX03",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "BL11/BD19/BX04",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "BL11/BD19/BX06",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "BL11/BD19/BX07",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "BL11/BD19/BX08",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "BL11/BD19/BX10",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "BL11/BD19/BX11",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "BL11/BD19/BX12",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "BL11/BD19/BX14",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "BL11/BD19/BX15",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "BL11/BD19/BX16",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "Interest List-C Term",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "CL01/CD03/CX01",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "CL01/CD03/CX02",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "CL01/CD03/CX03",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "CL01/CD03/CX04",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "CL01/CD04/CX01",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "CL01/CD04/CX02",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "CL01/CD04/CX03",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "CL01/CD04/CX04",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "CL02/CD01/CX01",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "CL02/CD01/CX02",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "CL02/CD01/CX03",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "CL02/CD01/CX04",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "CL02/CD02/CX01",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "CL02/CD02/CX02",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "CL02/CD02/CX03",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "CL02/CD02/CX04",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "Interest List-D Term",
        credits: "3.0"
    },
    {
        label: "MA - 1022 Calculus II",
        section: "DL01/DD01/DX01",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "Interest List-A Term",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "AL01/AD01/AX01",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "AL01/AD01/AX02",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "AL01/AD01/AX03",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "AL01/AD01/AX04",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "AL01/AD01/AX06",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "AL01/AD01/AX07",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "AL01/AD01/AX08",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "AL01/AD01/AX09",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "AL01/AD01/AX10",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "AL01/AD01/AX11",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "AL01/AD01/AX12",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "AL01/AD01/AX13",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "AL01/AD02/AX01",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "AL01/AD02/AX02",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "AL01/AD02/AX03",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "AL01/AD02/AX04",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "AL01/AD02/AX06",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "AL01/AD02/AX07",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "AL01/AD02/AX08",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "AL01/AD02/AX09",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "AL01/AD02/AX10",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "AL01/AD02/AX11",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "AL01/AD02/AX12",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "AL01/AD02/AX13",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "AL02/AD04/AX01",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "AL02/AD04/AX02",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "AL02/AD04/AX03",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "AL02/AD04/AX04",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "AL02/AD04/AX05",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "AL02/AD04/AX06",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "AL02/AD04/AX07",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "AL02/AD04/AX08",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "AL02/AD04/AX10",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "AL02/AD04/AX11",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "AL02/AD04/AX12",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "AL02/AD06/AX01",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "AL02/AD06/AX02",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "AL02/AD06/AX03",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "AL02/AD06/AX04",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "AL02/AD06/AX05",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "AL02/AD06/AX06",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "AL02/AD06/AX07",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "AL02/AD06/AX08",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "AL02/AD06/AX10",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "AL02/AD06/AX11",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "AL02/AD06/AX12",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "AL04/AD03/AX01",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "AL04/AD03/AX02",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "AL04/AD03/AX03",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "AL04/AD03/AX04",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "AL04/AD03/AX05",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "AL04/AD03/AX06",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "AL04/AD03/AX08",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "AL04/AD03/AX09",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "AL04/AD03/AX10",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "AL04/AD03/AX12",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "AL04/AD03/AX13",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "AL04/AD05/AX01",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "AL04/AD05/AX02",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "AL04/AD05/AX03",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "AL04/AD05/AX04",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "AL04/AD05/AX05",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "AL04/AD05/AX06",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "AL04/AD05/AX08",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "AL04/AD05/AX09",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "AL04/AD05/AX10",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "AL04/AD05/AX12",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "AL04/AD05/AX13",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "AL04/AD16/AX01",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "AL04/AD16/AX02",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "AL04/AD16/AX03",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "AL04/AD16/AX04",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "AL04/AD16/AX05",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "AL04/AD16/AX06",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "AL04/AD16/AX08",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "AL04/AD16/AX09",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "AL04/AD16/AX10",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "AL04/AD16/AX12",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "AL04/AD16/AX13",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "AL06/AD14/AX01",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "AL06/AD14/AX02",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "AL06/AD14/AX03",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "AL06/AD14/AX05",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "AL06/AD14/AX06",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "AL06/AD14/AX07",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "AL06/AD14/AX08",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "AL06/AD14/AX09",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "AL06/AD14/AX10",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "AL06/AD14/AX11",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "AL06/AD14/AX12",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "AL06/AD14/AX13",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "AL06/AD15/AX01",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "AL06/AD15/AX02",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "AL06/AD15/AX03",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "AL06/AD15/AX05",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "AL06/AD15/AX06",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "AL06/AD15/AX07",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "AL06/AD15/AX08",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "AL06/AD15/AX09",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "AL06/AD15/AX10",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "AL06/AD15/AX11",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "AL06/AD15/AX12",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "AL06/AD15/AX13",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "AL08/AD09/AX01",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "AL08/AD09/AX02",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "AL08/AD09/AX03",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "AL08/AD09/AX05",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "AL08/AD09/AX06",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "AL08/AD09/AX07",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "AL08/AD09/AX08",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "AL08/AD09/AX09",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "AL08/AD09/AX10",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "AL08/AD09/AX11",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "AL08/AD09/AX12",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "AL08/AD09/AX13",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "AL08/AD10/AX01",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "AL08/AD10/AX02",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "AL08/AD10/AX03",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "AL08/AD10/AX05",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "AL08/AD10/AX06",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "AL08/AD10/AX07",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "AL08/AD10/AX08",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "AL08/AD10/AX09",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "AL08/AD10/AX10",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "AL08/AD10/AX11",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "AL08/AD10/AX12",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "AL08/AD10/AX13",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "AL09/AD17/AX01",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "AL09/AD17/AX02",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "AL09/AD17/AX03",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "AL09/AD17/AX04",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "AL09/AD17/AX05",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "AL09/AD17/AX06",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "AL09/AD17/AX07",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "AL09/AD17/AX08",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "AL09/AD17/AX09",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "AL09/AD17/AX10",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "AL09/AD17/AX11",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "AL09/AD17/AX12",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "AL09/AD17/AX13",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "Interest List-B Term",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "BL01/BD01/BX01",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "BL01/BD01/BX02",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "BL01/BD01/BX03",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "BL01/BD01/BX04",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "BL01/BD01/BX05",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "BL01/BD01/BX06",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "BL01/BD01/BX07",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "BL01/BD01/BX10",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "BL01/BD01/BX11",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "BL01/BD07/BX01",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "BL01/BD07/BX02",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "BL01/BD07/BX03",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "BL01/BD07/BX04",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "BL01/BD07/BX05",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "BL01/BD07/BX06",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "BL01/BD07/BX07",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "BL01/BD07/BX10",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "BL01/BD07/BX11",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "BL02/BD02/BX01",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "BL02/BD02/BX02",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "BL02/BD02/BX03",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "BL02/BD02/BX04",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "BL02/BD02/BX05",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "BL02/BD02/BX06",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "BL02/BD02/BX07",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "BL02/BD02/BX10",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "BL02/BD02/BX11",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "BL03/BD04/BX02",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "BL03/BD04/BX03",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "BL03/BD04/BX04",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "BL03/BD04/BX05",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "BL03/BD04/BX06",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "BL03/BD04/BX07",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "BL03/BD04/BX10",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "BL03/BD04/BX11",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "BL05/BD05/BX01",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "BL05/BD05/BX02",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "BL05/BD05/BX03",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "BL05/BD05/BX04",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "BL05/BD05/BX05",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "BL05/BD05/BX06",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "BL05/BD05/BX07",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "BL05/BD05/BX11",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "BL05/BD08/BX01",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "BL05/BD08/BX02",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "BL05/BD08/BX03",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "BL05/BD08/BX04",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "BL05/BD08/BX05",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "BL05/BD08/BX06",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "BL05/BD08/BX07",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "BL05/BD08/BX11",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "BL06/BD09/BX01",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "BL06/BD09/BX02",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "BL06/BD09/BX03",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "BL06/BD09/BX04",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "BL06/BD09/BX05",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "BL06/BD09/BX06",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "BL06/BD09/BX07",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "BL06/BD09/BX10",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "BL06/BD10/BX01",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "BL06/BD10/BX02",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "BL06/BD10/BX03",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "BL06/BD10/BX04",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "BL06/BD10/BX05",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "BL06/BD10/BX06",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "BL06/BD10/BX07",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "BL06/BD10/BX10",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "Interest List-C Term",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "CL01/CD01/CX01",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "CL01/CD01/CX02",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "CL01/CD01/CX03",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "CL01/CD01/CX04",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "CL01/CD01/CX05",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "CL01/CD01/CX06",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "CL01/CD01/CX07",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "CL01/CD01/CX10",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "CL01/CD01/CX11",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "CL01/CD01/CX12",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "CL03/CD07/CX01",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "CL03/CD07/CX02",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "CL03/CD07/CX03",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "CL03/CD07/CX04",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "CL03/CD07/CX05",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "CL03/CD07/CX06",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "CL03/CD07/CX10",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "CL03/CD07/CX11",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "CL03/CD07/CX12",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "CL03/CD08/CX01",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "CL03/CD08/CX02",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "CL03/CD08/CX03",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "CL03/CD08/CX04",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "CL03/CD08/CX05",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "CL03/CD08/CX06",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "CL03/CD08/CX10",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "CL03/CD08/CX11",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "CL03/CD08/CX12",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "CL04/CD05/CX01",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "CL04/CD05/CX02",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "CL04/CD05/CX03",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "CL04/CD05/CX04",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "CL04/CD05/CX06",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "CL04/CD05/CX07",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "CL04/CD05/CX10",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "CL04/CD05/CX11",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "CL04/CD05/CX12",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "CL04/CD06/CX01",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "CL04/CD06/CX02",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "CL04/CD06/CX03",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "CL04/CD06/CX04",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "CL04/CD06/CX06",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "CL04/CD06/CX07",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "CL04/CD06/CX10",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "CL04/CD06/CX11",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "CL04/CD06/CX12",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "CL05/CD09/CX01",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "CL05/CD09/CX02",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "CL05/CD09/CX04",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "CL05/CD09/CX05",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "CL05/CD09/CX06",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "CL05/CD09/CX07",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "CL05/CD09/CX10",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "CL05/CD09/CX12",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "CL05/CD10/CX01",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "CL05/CD10/CX02",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "CL05/CD10/CX04",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "CL05/CD10/CX05",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "CL05/CD10/CX06",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "CL05/CD10/CX07",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "CL05/CD10/CX10",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "CL05/CD10/CX12",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "CL05/CD12/CX01",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "CL05/CD12/CX02",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "CL05/CD12/CX04",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "CL05/CD12/CX05",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "CL05/CD12/CX06",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "CL05/CD12/CX07",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "CL05/CD12/CX10",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "CL05/CD12/CX12",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "CL06/CD13/CX01",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "CL06/CD13/CX02",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "CL06/CD13/CX03",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "CL06/CD13/CX04",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "CL06/CD13/CX05",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "CL06/CD13/CX06",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "CL06/CD13/CX07",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "CL06/CD13/CX10",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "CL06/CD13/CX11",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "CL06/CD13/CX12",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "CL06/CD16/CX01",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "CL06/CD16/CX02",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "CL06/CD16/CX03",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "CL06/CD16/CX04",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "CL06/CD16/CX05",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "CL06/CD16/CX06",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "CL06/CD16/CX07",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "CL06/CD16/CX10",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "CL06/CD16/CX11",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "CL06/CD16/CX12",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "Interest List-D Term",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "DL01/DD01/DX02",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "DL01/DD01/DX03",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "DL01/DD01/DX04",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "DL01/DD02/DX02",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "DL01/DD02/DX03",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "DL01/DD02/DX04",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "DL02/DD03/DX02",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "DL02/DD03/DX03",
        credits: "3.0"
    },
    {
        label: "MA - 1023 Calculus III",
        section: "DL02/DD03/DX04",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "Interest List-A Term",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "AL01-ACL/AD03-ACL/AX04",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "AL01-ACL/AD03-ACL/AX05",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "AL01-ACL/AD03-ACL/AX06",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "AL01-ACL/AD03-ACL/AX07",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "AL01-ACL/AD03-ACL/AX08",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "AL01-ACL/AD04-ACL/AX05",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "AL01-ACL/AD04-ACL/AX06",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "AL01-ACL/AD04-ACL/AX07",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "AL01-ACL/AD04-ACL/AX08",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "AL06-ACL/AD06-ACL/AX04",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "AL06-ACL/AD06-ACL/AX05",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "AL06-ACL/AD06-ACL/AX08",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "AL06-ACL/AD06-ACL/AX10",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "AL06-ACL/AD08-ACL/AX04",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "AL06-ACL/AD08-ACL/AX05",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "AL06-ACL/AD08-ACL/AX06",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "AL06-ACL/AD08-ACL/AX08",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "AL06-ACL/AD08-ACL/AX10",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "AL07/AD05/AX04",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "AL07/AD05/AX06",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "AL07/AD05/AX08",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "AL07/AD05/AX10",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "AL09-ACL/AD10-ACL/AX05",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "AL09-ACL/AD10-ACL/AX06",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "AL09-ACL/AD10-ACL/AX07",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "AL09-ACL/AD10-ACL/AX08",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "AL09-ACL/AD10-ACL/AX10",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "Interest List-B Term",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "BL01/BD01/BX01",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "BL01/BD01/BX02",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "BL01/BD01/BX03",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "BL01/BD01/BX04",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "BL01/BD01/BX07",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "BL01/BD01/BX08",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "BL01/BD01/BX09",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "BL01/BD01/BX10",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "BL01/BD01/BX11",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "BL01/BD01/BX12",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "BL01/BD01/BX13",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "BL01/BD01/BX14",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "BL02/BD02/BX01",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "BL02/BD02/BX02",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "BL02/BD02/BX03",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "BL02/BD02/BX04",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "BL02/BD02/BX06",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "BL02/BD02/BX07",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "BL02/BD02/BX08",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "BL02/BD02/BX10",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "BL02/BD02/BX11",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "BL02/BD02/BX12",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "BL02/BD02/BX13",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "BL02/BD02/BX14",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "BL03/BD03/BX01",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "BL03/BD03/BX02",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "BL03/BD03/BX03",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "BL03/BD03/BX04",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "BL03/BD03/BX07",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "BL03/BD03/BX08",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "BL03/BD03/BX09",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "BL03/BD03/BX10",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "BL03/BD03/BX11",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "BL03/BD03/BX12",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "BL03/BD03/BX13",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "BL03/BD03/BX14",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "BL04/BD04/BX01",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "BL04/BD04/BX02",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "BL04/BD04/BX03",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "BL04/BD04/BX04",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "BL04/BD04/BX06",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "BL04/BD04/BX07",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "BL04/BD04/BX09",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "BL04/BD04/BX10",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "BL04/BD04/BX11",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "BL04/BD04/BX12",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "BL04/BD04/BX13",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "BL04/BD04/BX14",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "BL04/BD11/BX01",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "BL04/BD11/BX02",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "BL04/BD11/BX03",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "BL04/BD11/BX04",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "BL04/BD11/BX06",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "BL04/BD11/BX07",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "BL04/BD11/BX09",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "BL04/BD11/BX10",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "BL04/BD11/BX11",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "BL04/BD11/BX12",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "BL04/BD11/BX13",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "BL04/BD11/BX14",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "BL05/BD05/BX01",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "BL05/BD05/BX02",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "BL05/BD05/BX03",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "BL05/BD05/BX04",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "BL05/BD05/BX06",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "BL05/BD05/BX07",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "BL05/BD05/BX08",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "BL05/BD05/BX09",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "BL05/BD05/BX10",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "BL05/BD05/BX11",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "BL05/BD05/BX12",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "BL05/BD05/BX13",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "BL05/BD06/BX01",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "BL05/BD06/BX02",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "BL05/BD06/BX03",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "BL05/BD06/BX04",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "BL05/BD06/BX06",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "BL05/BD06/BX07",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "BL05/BD06/BX08",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "BL05/BD06/BX09",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "BL05/BD06/BX10",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "BL05/BD06/BX11",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "BL05/BD06/BX12",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "BL05/BD06/BX13",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "BL07/BD09/BX01",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "BL07/BD09/BX02",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "BL07/BD09/BX03",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "BL07/BD09/BX06",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "BL07/BD09/BX07",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "BL07/BD09/BX08",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "BL07/BD09/BX09",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "BL07/BD09/BX10",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "BL07/BD09/BX11",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "BL07/BD09/BX12",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "BL07/BD09/BX14",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "BL07/BD13/BX01",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "BL07/BD13/BX02",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "BL07/BD13/BX03",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "BL07/BD13/BX06",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "BL07/BD13/BX07",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "BL07/BD13/BX08",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "BL07/BD13/BX09",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "BL07/BD13/BX10",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "BL07/BD13/BX11",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "BL07/BD13/BX12",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "BL07/BD13/BX14",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "BL09/BD07/BX01",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "BL09/BD07/BX02",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "BL09/BD07/BX03",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "BL09/BD07/BX04",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "BL09/BD07/BX06",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "BL09/BD07/BX08",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "BL09/BD07/BX09",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "BL09/BD07/BX10",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "BL09/BD07/BX11",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "BL09/BD07/BX12",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "BL09/BD07/BX13",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "BL09/BD07/BX14",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "BL11/BD17/BX01",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "BL11/BD17/BX02",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "BL11/BD17/BX03",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "BL11/BD17/BX04",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "BL11/BD17/BX06",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "BL11/BD17/BX07",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "BL11/BD17/BX08",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "BL11/BD17/BX09",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "BL11/BD17/BX10",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "BL11/BD17/BX11",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "BL11/BD17/BX12",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "BL11/BD17/BX13",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "BL11/BD17/BX14",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "BL12/BD08/BX01",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "BL12/BD08/BX02",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "BL12/BD08/BX04",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "BL12/BD08/BX06",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "BL12/BD08/BX07",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "BL12/BD08/BX08",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "BL12/BD08/BX09",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "BL12/BD08/BX10",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "BL12/BD08/BX11",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "BL12/BD08/BX13",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "BL12/BD08/BX14",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "BL12/BD12/BX01",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "BL12/BD12/BX02",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "BL12/BD12/BX04",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "BL12/BD12/BX06",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "BL12/BD12/BX07",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "BL12/BD12/BX08",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "BL12/BD12/BX09",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "BL12/BD12/BX10",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "BL12/BD12/BX11",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "BL12/BD12/BX13",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "BL12/BD12/BX14",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "Interest List-C Term",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "CL01/CD04/CX01",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "CL01/CD04/CX02",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "CL01/CD04/CX03",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "CL01/CD04/CX05",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "CL01/CD04/CX07",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "CL01/CD04/CX08",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "CL01/CD06/CX01",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "CL01/CD06/CX02",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "CL01/CD06/CX03",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "CL01/CD06/CX04",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "CL01/CD06/CX07",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "CL01/CD06/CX08",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "CL02/CD01/CX02",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "CL02/CD01/CX03",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "CL02/CD01/CX04",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "CL02/CD01/CX05",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "CL02/CD01/CX06",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "CL02/CD01/CX08",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "CL02/CD02/CX01",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "CL02/CD02/CX03",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "CL02/CD02/CX04",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "CL02/CD02/CX05",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "CL02/CD02/CX06",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "CL02/CD02/CX08",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "CL02/CD03/CX01",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "CL02/CD03/CX02",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "CL02/CD03/CX04",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "CL02/CD03/CX05",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "CL02/CD03/CX06",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "CL02/CD03/CX08",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "CL03/CD07/CX01",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "CL03/CD07/CX02",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "CL03/CD07/CX03",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "CL03/CD07/CX05",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "CL03/CD07/CX06",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "CL03/CD07/CX08",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "CL04/CD08/CX01",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "CL04/CD08/CX03",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "CL04/CD08/CX04",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "CL04/CD08/CX05",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "CL04/CD08/CX06",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "CL04/CD08/CX07",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "CL04/CD09/CX01",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "CL04/CD09/CX03",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "CL04/CD09/CX04",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "CL04/CD09/CX05",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "CL04/CD09/CX06",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "CL04/CD09/CX07",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "CL04/CD09/CX08",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "Interest List-D Term",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "DL01/DD01/DX02",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "DL01/DD01/DX03",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "DL01/DD01/DX04",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "DL01/DD01/DX05",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "DL01/DD01/DX06",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "DL01/DD01/DX07",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "DL01/DD01/DX11",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "DL01/DD01/DX12",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "DL01/DD01/DX13",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "DL01/DD15/DX02",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "DL01/DD15/DX03",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "DL01/DD15/DX04",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "DL01/DD15/DX05",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "DL01/DD15/DX06",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "DL01/DD15/DX07",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "DL01/DD15/DX11",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "DL01/DD15/DX12",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "DL01/DD15/DX13",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "DL04/DD05/DX02",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "DL04/DD05/DX03",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "DL04/DD05/DX04",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "DL04/DD05/DX05",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "DL04/DD05/DX06",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "DL04/DD05/DX07",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "DL04/DD05/DX10",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "DL04/DD05/DX11",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "DL04/DD05/DX13",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "DL05/DD06/DX02",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "DL05/DD06/DX03",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "DL05/DD06/DX04",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "DL05/DD06/DX05",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "DL05/DD06/DX06",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "DL05/DD06/DX07",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "DL05/DD06/DX10",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "DL05/DD06/DX11",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "DL05/DD06/DX12",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "DL05/DD06/DX13",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "DL05/DD14/DX02",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "DL05/DD14/DX03",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "DL05/DD14/DX04",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "DL05/DD14/DX05",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "DL05/DD14/DX06",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "DL05/DD14/DX07",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "DL05/DD14/DX10",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "DL05/DD14/DX11",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "DL05/DD14/DX12",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "DL05/DD14/DX13",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "DL06/DD07/DX02",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "DL06/DD07/DX03",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "DL06/DD07/DX04",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "DL06/DD07/DX05",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "DL06/DD07/DX06",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "DL06/DD07/DX07",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "DL06/DD07/DX10",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "DL06/DD07/DX11",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "DL06/DD07/DX12",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "DL06/DD07/DX13",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "DL06/DD13/DX02",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "DL06/DD13/DX03",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "DL06/DD13/DX04",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "DL06/DD13/DX05",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "DL06/DD13/DX06",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "DL06/DD13/DX07",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "DL06/DD13/DX10",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "DL06/DD13/DX11",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "DL06/DD13/DX12",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "DL06/DD13/DX13",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "DL07/DD08/DX02",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "DL07/DD08/DX03",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "DL07/DD08/DX04",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "DL07/DD08/DX05",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "DL07/DD08/DX06",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "DL07/DD08/DX07",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "DL07/DD08/DX10",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "DL07/DD08/DX11",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "DL07/DD08/DX12",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "DL07/DD08/DX13",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "DL08/DD09/DX02",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "DL08/DD09/DX03",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "DL08/DD09/DX04",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "DL08/DD09/DX05",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "DL08/DD09/DX06",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "DL08/DD09/DX07",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "DL08/DD09/DX10",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "DL08/DD09/DX11",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "DL08/DD09/DX12",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "DL08/DD09/DX13",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "DL09/DD12/DX02",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "DL09/DD12/DX03",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "DL09/DD12/DX04",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "DL09/DD12/DX05",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "DL09/DD12/DX06",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "DL09/DD12/DX07",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "DL09/DD12/DX10",
        credits: "3.0"
    },
    {
        label: "MA - 1024 Calculus IV",
        section: "DL09/DD12/DX11",
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
        label: "MA - 1801 Denksport",
        section: "B01",
        credits: "0.75"
    },
    {
        label: "MA - 1801 Denksport",
        section: "D01",
        credits: "0.75"
    },
    {
        label: "MA - 1971 Bridge To Higher Mathematics",
        section: "D01",
        credits: "3.0"
    },
    {
        label: "MA - 1971 Bridge To Higher Mathematics",
        section: "D02",
        credits: "3.0"
    },
    {
        label: "MA - 2051 Ordinary Differential Equations",
        section: "Interest List-A Term",
        credits: "3.0"
    },
    {
        label: "MA - 2051 Ordinary Differential Equations",
        section: "AL01/AD01",
        credits: "3.0"
    },
    {
        label: "MA - 2051 Ordinary Differential Equations",
        section: "AL01/AD03",
        credits: "3.0"
    },
    {
        label: "MA - 2051 Ordinary Differential Equations",
        section: "AL01/AD04",
        credits: "3.0"
    },
    {
        label: "MA - 2051 Ordinary Differential Equations",
        section: "AL02/AD07",
        credits: "3.0"
    },
    {
        label: "MA - 2051 Ordinary Differential Equations",
        section: "AL02/AD08",
        credits: "3.0"
    },
    {
        label: "MA - 2051 Ordinary Differential Equations",
        section: "AL02/AD09",
        credits: "3.0"
    },
    {
        label: "MA - 2051 Ordinary Differential Equations",
        section: "AL03/AD10",
        credits: "3.0"
    },
    {
        label: "MA - 2051 Ordinary Differential Equations",
        section: "AL03/AD11",
        credits: "3.0"
    },
    {
        label: "MA - 2051 Ordinary Differential Equations",
        section: "Interest List-B Term",
        credits: "3.0"
    },
    {
        label: "MA - 2051 Ordinary Differential Equations",
        section: "BL01/BD01",
        credits: "3.0"
    },
    {
        label: "MA - 2051 Ordinary Differential Equations",
        section: "BL01/BD02",
        credits: "3.0"
    },
    {
        label: "MA - 2051 Ordinary Differential Equations",
        section: "BL01/BD03",
        credits: "3.0"
    },
    {
        label: "MA - 2051 Ordinary Differential Equations",
        section: "BL01/BD05",
        credits: "3.0"
    },
    {
        label: "MA - 2051 Ordinary Differential Equations",
        section: "BL02/BD04",
        credits: "3.0"
    },
    {
        label: "MA - 2051 Ordinary Differential Equations",
        section: "BL02/BD06",
        credits: "3.0"
    },
    {
        label: "MA - 2051 Ordinary Differential Equations",
        section: "BL02/BD08",
        credits: "3.0"
    },
    {
        label: "MA - 2051 Ordinary Differential Equations",
        section: "BL02/BD09",
        credits: "3.0"
    },
    {
        label: "MA - 2051 Ordinary Differential Equations",
        section: "Interest List-C Term",
        credits: "3.0"
    },
    {
        label: "MA - 2051 Ordinary Differential Equations",
        section: "CL01/CD01",
        credits: "3.0"
    },
    {
        label: "MA - 2051 Ordinary Differential Equations",
        section: "CL01/CD02",
        credits: "3.0"
    },
    {
        label: "MA - 2051 Ordinary Differential Equations",
        section: "CL01/CD04",
        credits: "3.0"
    },
    {
        label: "MA - 2051 Ordinary Differential Equations",
        section: "CL02/CD06",
        credits: "3.0"
    },
    {
        label: "MA - 2051 Ordinary Differential Equations",
        section: "CL02/CD08",
        credits: "3.0"
    },
    {
        label: "MA - 2051 Ordinary Differential Equations",
        section: "CL03/CD11",
        credits: "3.0"
    },
    {
        label: "MA - 2051 Ordinary Differential Equations",
        section: "CL03/CD12",
        credits: "3.0"
    },
    {
        label: "MA - 2051 Ordinary Differential Equations",
        section: "CL03/CD13",
        credits: "3.0"
    },
    {
        label: "MA - 2051 Ordinary Differential Equations",
        section: "Interest List-D Term",
        credits: "3.0"
    },
    {
        label: "MA - 2051 Ordinary Differential Equations",
        section: "DL01/DD02",
        credits: "3.0"
    },
    {
        label: "MA - 2051 Ordinary Differential Equations",
        section: "DL01/DD03",
        credits: "3.0"
    },
    {
        label: "MA - 2051 Ordinary Differential Equations",
        section: "DL01/DD05",
        credits: "3.0"
    },
    {
        label: "MA - 2051 Ordinary Differential Equations",
        section: "DL02/DD06",
        credits: "3.0"
    },
    {
        label: "MA - 2051 Ordinary Differential Equations",
        section: "DL02/DD07",
        credits: "3.0"
    },
    {
        label: "MA - 2051 Ordinary Differential Equations",
        section: "DL03/DD11",
        credits: "3.0"
    },
    {
        label: "MA - 2051 Ordinary Differential Equations",
        section: "DL03/DD12",
        credits: "3.0"
    },
    {
        label: "MA - 2071 Matrices And Linear Algebra I",
        section: "Interest List-A Term",
        credits: "3.0"
    },
    {
        label: "MA - 2071 Matrices And Linear Algebra I",
        section: "AL01/AD01",
        credits: "3.0"
    },
    {
        label: "MA - 2071 Matrices And Linear Algebra I",
        section: "AL01/AD02",
        credits: "3.0"
    },
    {
        label: "MA - 2071 Matrices And Linear Algebra I",
        section: "AL01/AD03",
        credits: "3.0"
    },
    {
        label: "MA - 2071 Matrices And Linear Algebra I",
        section: "AL01/AD04",
        credits: "3.0"
    },
    {
        label: "MA - 2071 Matrices And Linear Algebra I",
        section: "AL02/AD06",
        credits: "3.0"
    },
    {
        label: "MA - 2071 Matrices And Linear Algebra I",
        section: "AL02/AD07",
        credits: "3.0"
    },
    {
        label: "MA - 2071 Matrices And Linear Algebra I",
        section: "AL02/AD08",
        credits: "3.0"
    },
    {
        label: "MA - 2071 Matrices And Linear Algebra I",
        section: "AL02/AD09",
        credits: "3.0"
    },
    {
        label: "MA - 2071 Matrices And Linear Algebra I",
        section: "Interest List-B Term",
        credits: "3.0"
    },
    {
        label: "MA - 2071 Matrices And Linear Algebra I",
        section: "BL01/BD01",
        credits: "3.0"
    },
    {
        label: "MA - 2071 Matrices And Linear Algebra I",
        section: "BL01/BD02",
        credits: "3.0"
    },
    {
        label: "MA - 2071 Matrices And Linear Algebra I",
        section: "BL01/BD03",
        credits: "3.0"
    },
    {
        label: "MA - 2071 Matrices And Linear Algebra I",
        section: "BL02/BD05",
        credits: "3.0"
    },
    {
        label: "MA - 2071 Matrices And Linear Algebra I",
        section: "BL02/BD06",
        credits: "3.0"
    },
    {
        label: "MA - 2071 Matrices And Linear Algebra I",
        section: "BL02/BD07",
        credits: "3.0"
    },
    {
        label: "MA - 2071 Matrices And Linear Algebra I",
        section: "BL02/BD08",
        credits: "3.0"
    },
    {
        label: "MA - 2071 Matrices And Linear Algebra I",
        section: "Interest List-C Term",
        credits: "3.0"
    },
    {
        label: "MA - 2071 Matrices And Linear Algebra I",
        section: "CL01/CD01",
        credits: "3.0"
    },
    {
        label: "MA - 2071 Matrices And Linear Algebra I",
        section: "CL01/CD02",
        credits: "3.0"
    },
    {
        label: "MA - 2071 Matrices And Linear Algebra I",
        section: "CL01/CD03",
        credits: "3.0"
    },
    {
        label: "MA - 2071 Matrices And Linear Algebra I",
        section: "CL02/CD06",
        credits: "3.0"
    },
    {
        label: "MA - 2071 Matrices And Linear Algebra I",
        section: "CL02/CD07",
        credits: "3.0"
    },
    {
        label: "MA - 2071 Matrices And Linear Algebra I",
        section: "CL02/CD08",
        credits: "3.0"
    },
    {
        label: "MA - 2071 Matrices And Linear Algebra I",
        section: "CL03/CD09",
        credits: "3.0"
    },
    {
        label: "MA - 2071 Matrices And Linear Algebra I",
        section: "CL03/CD10",
        credits: "3.0"
    },
    {
        label: "MA - 2071 Matrices And Linear Algebra I",
        section: "Interest List-D Term",
        credits: "3.0"
    },
    {
        label: "MA - 2071 Matrices And Linear Algebra I",
        section: "DL01/DD02",
        credits: "3.0"
    },
    {
        label: "MA - 2071 Matrices And Linear Algebra I",
        section: "DL01/DD03",
        credits: "3.0"
    },
    {
        label: "MA - 2071 Matrices And Linear Algebra I",
        section: "DL01/DD05",
        credits: "3.0"
    },
    {
        label: "MA - 2071 Matrices And Linear Algebra I",
        section: "DL02/DD07",
        credits: "3.0"
    },
    {
        label: "MA - 2071 Matrices And Linear Algebra I",
        section: "DL02/DD08",
        credits: "3.0"
    },
    {
        label: "MA - 2071 Matrices And Linear Algebra I",
        section: "DL02/DD09",
        credits: "3.0"
    },
    {
        label: "MA - 2071 Matrices And Linear Algebra I",
        section: "DL02/DD10",
        credits: "3.0"
    },
    {
        label: "MA - 2071 Matrices And Linear Algebra I",
        section: "DL03/DD11",
        credits: "3.0"
    },
    {
        label: "MA - 2071 Matrices And Linear Algebra I",
        section: "DL03/DD12",
        credits: "3.0"
    },
    {
        label: "MA - 2071 Matrices And Linear Algebra I",
        section: "DL03/DD13",
        credits: "3.0"
    },
    {
        label: "MA - 2072 Accelerated Matrices And Linear Algebra I",
        section: "Interest List-C Term",
        credits: "3.0"
    },
    {
        label: "MA - 2072 Accelerated Matrices And Linear Algebra I",
        section: "CL01/CD02",
        credits: "3.0"
    },
    {
        label: "MA - 2073 Matrices And Linear Algebra II",
        section: "Interest List-C Term",
        credits: "3.0"
    },
    {
        label: "MA - 2073 Matrices And Linear Algebra II",
        section: "CL02/CD02",
        credits: "3.0"
    },
    {
        label: "MA - 2073 Matrices And Linear Algebra II",
        section: "DL01/DD01",
        credits: "3.0"
    },
    {
        label: "MA - 2201 Discrete Mathematics",
        section: "Interest List-A Term",
        credits: "3.0"
    },
    {
        label: "MA - 2201 Discrete Mathematics",
        section: "AL01/AD01",
        credits: "3.0"
    },
    {
        label: "MA - 2201 Discrete Mathematics",
        section: "AL01/AD02",
        credits: "3.0"
    },
    {
        label: "MA - 2201 Discrete Mathematics",
        section: "AL01/AD03",
        credits: "3.0"
    },
    {
        label: "MA - 2201 Discrete Mathematics",
        section: "AL01/AD04",
        credits: "3.0"
    },
    {
        label: "MA - 2201 Discrete Mathematics",
        section: "AL01/AD05",
        credits: "3.0"
    },
    {
        label: "MA - 2201 Discrete Mathematics",
        section: "BL01/BD01",
        credits: "3.0"
    },
    {
        label: "MA - 2201 Discrete Mathematics",
        section: "BL01/BD02",
        credits: "3.0"
    },
    {
        label: "MA - 2201 Discrete Mathematics",
        section: "BL01/BD03",
        credits: "3.0"
    },
    {
        label: "MA - 2201 Discrete Mathematics",
        section: "CL01/CD01",
        credits: "3.0"
    },
    {
        label: "MA - 2201 Discrete Mathematics",
        section: "CL01/CD02",
        credits: "3.0"
    },
    {
        label: "MA - 2201 Discrete Mathematics",
        section: "CL01/CD03",
        credits: "3.0"
    },
    {
        label: "MA - 2201 Discrete Mathematics",
        section: "CL01/CD04",
        credits: "3.0"
    },
    {
        label: "MA - 2201 Discrete Mathematics",
        section: "Interest List-D Term",
        credits: "3.0"
    },
    {
        label: "MA - 2201 Discrete Mathematics",
        section: "DL01/DD01",
        credits: "3.0"
    },
    {
        label: "MA - 2201 Discrete Mathematics",
        section: "DL01/DD02",
        credits: "3.0"
    },
    {
        label: "MA - 2201 Discrete Mathematics",
        section: "DL01/DD03",
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
        label: "MA - 2251 Vector And Tensor Calculus",
        section: "CL01/CD02",
        credits: "3.0"
    },
    {
        label: "MA - 2271 Graph Theory",
        section: "CL01/CD01",
        credits: "3.0"
    },
    {
        label: "MA - 2271 Graph Theory",
        section: "DL01/DD01",
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
        label: "MA - 2610 Applied Statistics For The Life Sciences",
        section: "BL01/BX02",
        credits: "0.0"
    },
    {
        label: "MA - 2610 Applied Statistics For The Life Sciences",
        section: "BL01/BX03",
        credits: "0.0"
    },
    {
        label: "MA - 2611 Applied Statistics I",
        section: "Interest List-A Term",
        credits: "0.0"
    },
    {
        label: "MA - 2611 Applied Statistics I",
        section: "AL01/AX02",
        credits: "0.0"
    },
    {
        label: "MA - 2611 Applied Statistics I",
        section: "AL01/AX03",
        credits: "0.0"
    },
    {
        label: "MA - 2611 Applied Statistics I",
        section: "AL02/AX06",
        credits: "0.0"
    },
    {
        label: "MA - 2611 Applied Statistics I",
        section: "AL02/AX07",
        credits: "0.0"
    },
    {
        label: "MA - 2611 Applied Statistics I",
        section: "AL02/AX08",
        credits: "0.0"
    },
    {
        label: "MA - 2611 Applied Statistics I",
        section: "AL03/AX10",
        credits: "0.0"
    },
    {
        label: "MA - 2611 Applied Statistics I",
        section: "AL03/AX12",
        credits: "0.0"
    },
    {
        label: "MA - 2611 Applied Statistics I",
        section: "Interest List-B Term",
        credits: "0.0"
    },
    {
        label: "MA - 2611 Applied Statistics I",
        section: "BL01/BX01",
        credits: "0.0"
    },
    {
        label: "MA - 2611 Applied Statistics I",
        section: "BL01/BX03 ",
        credits: "0.0"
    },
    {
        label: "MA - 2611 Applied Statistics I",
        section: "BL02/BX07",
        credits: "0.0"
    },
    {
        label: "MA - 2611 Applied Statistics I",
        section: "BL02/BX08",
        credits: "0.0"
    },
    {
        label: "MA - 2611 Applied Statistics I",
        section: "Interest List-C Term",
        credits: "0.0"
    },
    {
        label: "MA - 2611 Applied Statistics I",
        section: "CL01/CX01",
        credits: "0.0"
    },
    {
        label: "MA - 2611 Applied Statistics I",
        section: "CL01/CX02",
        credits: "0.0"
    },
    {
        label: "MA - 2611 Applied Statistics I",
        section: "CL01/CX03",
        credits: "0.0"
    },
    {
        label: "MA - 2611 Applied Statistics I",
        section: "CL01/CX04",
        credits: "0.0"
    },
    {
        label: "MA - 2611 Applied Statistics I",
        section: "CL02/CX05",
        credits: "0.0"
    },
    {
        label: "MA - 2611 Applied Statistics I",
        section: "CL02/CX07",
        credits: "0.0"
    },
    {
        label: "MA - 2611 Applied Statistics I",
        section: "CL02/CX08",
        credits: "0.0"
    },
    {
        label: "MA - 2611 Applied Statistics I",
        section: "Interest List-D Term",
        credits: "0.0"
    },
    {
        label: "MA - 2611 Applied Statistics I",
        section: "DL01/DX01",
        credits: "0.0"
    },
    {
        label: "MA - 2611 Applied Statistics I",
        section: "DL01/DX02",
        credits: "0.0"
    },
    {
        label: "MA - 2611 Applied Statistics I",
        section: "DL02/DX03",
        credits: "0.0"
    },
    {
        label: "MA - 2611 Applied Statistics I",
        section: "DL02/DX04",
        credits: "0.0"
    },
    {
        label: "MA - 2611 Applied Statistics I",
        section: "DL02/DX05",
        credits: "0.0"
    },
    {
        label: "MA - 2611 Applied Statistics I",
        section: "DL03/DX09",
        credits: "0.0"
    },
    {
        label: "MA - 2611 Applied Statistics I",
        section: "DL03/DX10",
        credits: "0.0"
    },
    {
        label: "MA - 2611 Applied Statistics I",
        section: "DL04/DX11",
        credits: "0.0"
    },
    {
        label: "MA - 2611 Applied Statistics I",
        section: "DL04/DX12",
        credits: "0.0"
    },
    {
        label: "MA - 2612 Applied Statistics II",
        section: "Interest List-B Term",
        credits: "0.0"
    },
    {
        label: "MA - 2612 Applied Statistics II",
        section: "BL01/BX02",
        credits: "0.0"
    },
    {
        label: "MA - 2612 Applied Statistics II",
        section: "BL01/BX04",
        credits: "0.0"
    },
    {
        label: "MA - 2612 Applied Statistics II",
        section: "BL02/BX05",
        credits: "0.0"
    },
    {
        label: "MA - 2612 Applied Statistics II",
        section: "BL02/BX06",
        credits: "0.0"
    },
    {
        label: "MA - 2612 Applied Statistics II",
        section: "Interest List-D Term",
        credits: "0.0"
    },
    {
        label: "MA - 2612 Applied Statistics II",
        section: "DL01/DX02",
        credits: "0.0"
    },
    {
        label: "MA - 2612 Applied Statistics II",
        section: "DL01/DX03",
        credits: "0.0"
    },
    {
        label: "MA - 2612 Applied Statistics II",
        section: "DL01/DX04",
        credits: "0.0"
    },
    {
        label: "MA - 2612 Applied Statistics II",
        section: "DL02/DX05",
        credits: "0.0"
    },
    {
        label: "MA - 2612 Applied Statistics II",
        section: "DL02/DX06",
        credits: "0.0"
    },
    {
        label: "MA - 2621 Probability For Applications",
        section: "Interest List-A Term",
        credits: "3.0"
    },
    {
        label: "MA - 2621 Probability For Applications",
        section: "AL01/AD01",
        credits: "3.0"
    },
    {
        label: "MA - 2621 Probability For Applications",
        section: "AL01/AD02",
        credits: "3.0"
    },
    {
        label: "MA - 2621 Probability For Applications",
        section: "AL01/AD04",
        credits: "3.0"
    },
    {
        label: "MA - 2621 Probability For Applications",
        section: "AL02/AD06",
        credits: "3.0"
    },
    {
        label: "MA - 2621 Probability For Applications",
        section: "AL02/AD07",
        credits: "3.0"
    },
    {
        label: "MA - 2621 Probability For Applications",
        section: "Interest List-B Term",
        credits: "3.0"
    },
    {
        label: "MA - 2621 Probability For Applications",
        section: "BL01/BD01",
        credits: "3.0"
    },
    {
        label: "MA - 2621 Probability For Applications",
        section: "BL01/BD02",
        credits: "3.0"
    },
    {
        label: "MA - 2621 Probability For Applications",
        section: "BL01/BD04",
        credits: "3.0"
    },
    {
        label: "MA - 2621 Probability For Applications",
        section: "BL02/BD05",
        credits: "3.0"
    },
    {
        label: "MA - 2621 Probability For Applications",
        section: "BL02/BD06",
        credits: "3.0"
    },
    {
        label: "MA - 2621 Probability For Applications",
        section: "Interest List-C Term",
        credits: "3.0"
    },
    {
        label: "MA - 2621 Probability For Applications",
        section: "CL01/CD02",
        credits: "3.0"
    },
    {
        label: "MA - 2621 Probability For Applications",
        section: "CL01/CD04",
        credits: "3.0"
    },
    {
        label: "MA - 2621 Probability For Applications",
        section: "CL01/CD05",
        credits: "3.0"
    },
    {
        label: "MA - 2621 Probability For Applications",
        section: "CL02/CD06",
        credits: "3.0"
    },
    {
        label: "MA - 2621 Probability For Applications",
        section: "CL02/CD07",
        credits: "3.0"
    },
    {
        label: "MA - 2621 Probability For Applications",
        section: "CL02/CD08",
        credits: "3.0"
    },
    {
        label: "MA - 2621 Probability For Applications",
        section: "CL02/CD12",
        credits: "3.0"
    },
    {
        label: "MA - 2621 Probability For Applications",
        section: "Interest List-D Term",
        credits: "3.0"
    },
    {
        label: "MA - 2621 Probability For Applications",
        section: "DL01/DD01",
        credits: "3.0"
    },
    {
        label: "MA - 2621 Probability For Applications",
        section: "DL01/DD02 ",
        credits: "3.0"
    },
    {
        label: "MA - 2621 Probability For Applications",
        section: "DL02/DD04 ",
        credits: "3.0"
    },
    {
        label: "MA - 2621 Probability For Applications",
        section: "DL02/DD05",
        credits: "3.0"
    },
    {
        label: "MA - 2621 Probability For Applications",
        section: "DL03/DD06",
        credits: "3.0"
    },
    {
        label: "MA - 2621 Probability For Applications",
        section: "DL03/DD07",
        credits: "3.0"
    },
    {
        label: "MA - 2631 Probability Theory",
        section: "AL01/AD01",
        credits: "3.0"
    },
    {
        label: "MA - 2631 Probability Theory",
        section: "DL01/DD01",
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
        label: "MA - 3231 Linear Programming",
        section: "A02",
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
        label: "MA - 3257 Numerical Methods For Linear And Nonlinear Systems",
        section: "C02",
        credits: "3.0"
    },
    {
        label: "MA - 3257 Numerical Methods For Linear And Nonlinear Systems",
        section: "C03",
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
        label: "MA - 3831 Principles Of Real Analysis I",
        section: "CL01/CD01",
        credits: "3.0"
    },
    {
        label: "MA - 3832 Principles Of Real Analysis II",
        section: "BL01/BD01",
        credits: "3.0"
    },
    {
        label: "MA - 3832 Principles Of Real Analysis II",
        section: "DL01/DD01",
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
        label: "MA - 4216 Actuarial Seminar",
        section: "B01",
        credits: "0.0"
    },
    {
        label: "MA - 4216 Actuarial Seminar",
        section: "C01",
        credits: "0.0"
    },
    {
        label: "MA - 4216 Actuarial Seminar",
        section: "D01",
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
        label: "MA - 501 Engineering Mathematics",
        section: "S01",
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
        label: "MA - 511 Applied Statistics For Engineers And Scientists",
        section: "S01",
        credits: "3.0"
    },
    {
        label: "MA - 511 Applied Statistics For Engineers And Scientists",
        section: "S02",
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
        label: "MA - 517 Mathematical Foundations For Data Science",
        section: "F02",
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
        label: "MA - 543 Statistical Methods For Data Science",
        section: "S02",
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
        label: "MA - 559 Statistics Graduate Seminar",
        section: "S01",
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
        label: "MA - 590 Special Topics",
        section: "S02 - ST:Statistical Methods for Social and Behavioral Science",
        credits: "3.0"
    },
    {
        label: "MA - 590 Special Topics",
        section: "S03 - ST: Principles of Epidemiology",
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
        label: "ME - 1800 Manufacturing Science, Prototyping, And Computer-Controlled Machining",
        section: "AL01/AD01/AX02",
        credits: "3.0"
    },
    {
        label: "ME - 1800 Manufacturing Science, Prototyping, And Computer-Controlled Machining",
        section: "AL01/AD01/AX03",
        credits: "3.0"
    },
    {
        label: "ME - 1800 Manufacturing Science, Prototyping, And Computer-Controlled Machining",
        section: "AL01/AD01/AX04",
        credits: "3.0"
    },
    {
        label: "ME - 1800 Manufacturing Science, Prototyping, And Computer-Controlled Machining",
        section: "BL01/BD01/BX01",
        credits: "3.0"
    },
    {
        label: "ME - 1800 Manufacturing Science, Prototyping, And Computer-Controlled Machining",
        section: "BL01/BD01/BX02",
        credits: "3.0"
    },
    {
        label: "ME - 1800 Manufacturing Science, Prototyping, And Computer-Controlled Machining",
        section: "BL01/BD01/BX03",
        credits: "3.0"
    },
    {
        label: "ME - 1800 Manufacturing Science, Prototyping, And Computer-Controlled Machining",
        section: "BL01/BD01/BX04",
        credits: "3.0"
    },
    {
        label: "ME - 1800 Manufacturing Science, Prototyping, And Computer-Controlled Machining",
        section: "CL01/CD01/CX01",
        credits: "3.0"
    },
    {
        label: "ME - 1800 Manufacturing Science, Prototyping, And Computer-Controlled Machining",
        section: "CL01/CD01/CX02",
        credits: "3.0"
    },
    {
        label: "ME - 1800 Manufacturing Science, Prototyping, And Computer-Controlled Machining",
        section: "CL01/CD01/CX03",
        credits: "3.0"
    },
    {
        label: "ME - 1800 Manufacturing Science, Prototyping, And Computer-Controlled Machining",
        section: "CL01/CD01/CX04",
        credits: "3.0"
    },
    {
        label: "ME - 1800 Manufacturing Science, Prototyping, And Computer-Controlled Machining",
        section: "DL01/DD01/DX01",
        credits: "3.0"
    },
    {
        label: "ME - 1800 Manufacturing Science, Prototyping, And Computer-Controlled Machining",
        section: "DL01/DD01/DX02",
        credits: "3.0"
    },
    {
        label: "ME - 1800 Manufacturing Science, Prototyping, And Computer-Controlled Machining",
        section: "DL01/DD01/DX03",
        credits: "3.0"
    },
    {
        label: "ME - 1800 Manufacturing Science, Prototyping, And Computer-Controlled Machining",
        section: "DL01/DD01/DX04",
        credits: "3.0"
    },
    {
        label: "ME - 2300 Introduction To Engineering Design",
        section: "BL01/BX01",
        credits: "3.0"
    },
    {
        label: "ME - 2300 Introduction To Engineering Design",
        section: "CL01/CX01",
        credits: "3.0"
    },
    {
        label: "ME - 2300 Introduction To Engineering Design",
        section: "DL01/DX01",
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
        label: "ME - 2820 Materials Processing",
        section: "BL01/BD01",
        credits: "3.0"
    },
    {
        label: "ME - 2820 Materials Processing",
        section: "DL01/DD01",
        credits: "3.0"
    },
    {
        label: "ME - 3310 Kinematics Of Mechanisms",
        section: "AL01/AX01",
        credits: "3.0"
    },
    {
        label: "ME - 3310 Kinematics Of Mechanisms",
        section: "CL01/CX01",
        credits: "3.0"
    },
    {
        label: "ME - 3320 Design of Machine Elements",
        section: "Interest List-B Term",
        credits: "0.0"
    },
    {
        label: "ME - 3320 Design of Machine Elements",
        section: "BL01/BX01",
        credits: "0.0"
    },
    {
        label: "ME - 3320 Design of Machine Elements",
        section: "CL01/CX01",
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
        label: "ME - 3820 Computer-Aided Manufacturing",
        section: "DL01/DX02",
        credits: "3.0"
    },
    {
        label: "ME - 3820 Computer-Aided Manufacturing",
        section: "DL01/DX03",
        credits: "3.0"
    },
    {
        label: "ME - 3901 Engineering Experimentation",
        section: "C01",
        credits: "3.0"
    },
    {
        label: "ME - 3901 Engineering Experimentation",
        section: "C02",
        credits: "3.0"
    },
    {
        label: "ME - 3901 Engineering Experimentation",
        section: "D01",
        credits: "3.0"
    },
    {
        label: "ME - 3901 Engineering Experimentation",
        section: "D02",
        credits: "3.0"
    },
    {
        label: "ME - 3901 Engineering Experimentation",
        section: "D03",
        credits: "3.0"
    },
    {
        label: "ME - 3901 Engineering Experimentation",
        section: "D04",
        credits: "3.0"
    },
    {
        label: "ME - 3902 Project-Based Engineering Experimentation",
        section: "A01",
        credits: "3.0"
    },
    {
        label: "ME - 3902 Project-Based Engineering Experimentation",
        section: "A02",
        credits: "3.0"
    },
    {
        label: "ME - 3902 Project-Based Engineering Experimentation",
        section: "A03",
        credits: "3.0"
    },
    {
        label: "ME - 3902 Project-Based Engineering Experimentation",
        section: "A04",
        credits: "3.0"
    },
    {
        label: "ME - 3902 Project-Based Engineering Experimentation",
        section: "B01",
        credits: "3.0"
    },
    {
        label: "ME - 3902 Project-Based Engineering Experimentation",
        section: "B02",
        credits: "3.0"
    },
    {
        label: "ME - 4320 Advanced Engineering Design",
        section: "AL01/AX01",
        credits: "3.0"
    },
    {
        label: "ME - 4320 Advanced Engineering Design",
        section: "BL01/BX01",
        credits: "3.0"
    },
    {
        label: "ME - 4320 Advanced Engineering Design",
        section: "Interest List-C Term",
        credits: "3.0"
    },
    {
        label: "ME - 4320 Advanced Engineering Design",
        section: "CL01/CX01",
        credits: "3.0"
    },
    {
        label: "ME - 4320 Advanced Engineering Design",
        section: "DL01/DX01",
        credits: "3.0"
    },
    {
        label: "ME - 4322 Modeling And Analysis Of Mechatronic Systems.",
        section: "AL01/AX01",
        credits: "3.0"
    },
    {
        label: "ME - 4322 Modeling And Analysis Of Mechatronic Systems.",
        section: "CL01/CX01",
        credits: "3.0"
    },
    {
        label: "ME - 4323 Fundamentals of Vehicle Drivetrain Systems",
        section: "B01",
        credits: "3.0"
    },
    {
        label: "ME - 4323 Fundamentals of Vehicle Drivetrain Systems",
        section: "C01",
        credits: "3.0"
    },
    {
        label: "ME - 4323 Fundamentals of Vehicle Drivetrain Systems",
        section: "D01",
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
        label: "ME - 4429 Thermofluid Application and Design",
        section: "B01",
        credits: "3.0"
    },
    {
        label: "ME - 4429 Thermofluid Application and Design",
        section: "B02",
        credits: "3.0"
    },
    {
        label: "ME - 4429 Thermofluid Application and Design",
        section: "C01",
        credits: "3.0"
    },
    {
        label: "ME - 4429 Thermofluid Application and Design",
        section: "D01",
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
        label: "ME - 4504 Biomechanics",
        section: "C01",
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
        label: "ME - 4512 Introduction to the Finite Element Method",
        section: "AL01/AX01",
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
        label: "ME - 4814 Biomaterials",
        section: "C01",
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
        label: "ME - 500 Applied Analytical Methods in Engineering",
        section: "F02",
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
        label: "ME - 514 Fluid Dynamics",
        section: "F02",
        credits: "3.0"
    },
    {
        label: "ME - 516 Heat Transfer",
        section: "S01",
        credits: "3.0"
    },
    {
        label: "ME - 516 Heat Transfer",
        section: "S02",
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
        label: "ME - 5202 Advanced Dynamics",
        section: "B01",
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
        label: "ME - 5225 Fiber Optical Sensors",
        section: "A02",
        credits: "2.0"
    },
    {
        label: "ME - 527 Foundations Of Robotics",
        section: "F02",
        credits: "3.0"
    },
    {
        label: "ME - 527 Foundations Of Robotics",
        section: "F03",
        credits: "3.0"
    },
    {
        label: "ME - 527 Foundations Of Robotics",
        section: "S03",
        credits: "3.0"
    },
    {
        label: "ME - 528 Robot Dynamics",
        section: "F02",
        credits: "3.0"
    },
    {
        label: "ME - 528 Robot Dynamics",
        section: "S01",
        credits: "3.0"
    },
    {
        label: "ME - 528 Robot Dynamics",
        section: "S02",
        credits: "3.0"
    },
    {
        label: "ME - 5303 Applied Finite Element Methods In Engineering",
        section: "C01",
        credits: "2.0"
    },
    {
        label: "ME - 5303 Applied Finite Element Methods In Engineering",
        section: "C02",
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
        label: "ME - 5312 Properties And Performance Of Engineering Materials",
        section: "B02",
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
        label: "ME - 5371 Fundamentals of Surface Metrology",
        section: "B01",
        credits: "2.0"
    },
    {
        label: "ME - 5371 Fundamentals of Surface Metrology",
        section: "C01",
        credits: "2.0"
    },
    {
        label: "ME - 5371 Fundamentals of Surface Metrology",
        section: "D01",
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
        label: "ME - 5420 Fundamentals Of Axiomatic Design Of Manufacturing Processes",
        section: "D01",
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
        label: "ME - 5431 Computer Integrated Manufacturing",
        section: "A02",
        credits: "2.0"
    },
    {
        label: "ME - 5441 Design For Manufacturability",
        section: "D01",
        credits: "2.0"
    },
    {
        label: "ME - 5441 Design For Manufacturability",
        section: "D02",
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
        label: "ME - 591 Graduate Seminar",
        section: "B01",
        credits: "0.0"
    },
    {
        label: "ME - 591 Graduate Seminar",
        section: "C01",
        credits: "0.0"
    },
    {
        label: "ME - 591 Graduate Seminar",
        section: "D01",
        credits: "0.0"
    },
    {
        label: "ME - 593 Special Topics",
        section: "B01 - ST: Design and Optimization of Thermal Systems",
        credits: "2.0"
    },
    {
        label: "ME - 593 Special Topics",
        section: "B04",
        credits: "2.0"
    },
    {
        label: "ME - 593 Special Topics",
        section: "C01 - ST: Machining Processes",
        credits: "2.0"
    },
    {
        label: "ME - 593 Special Topics",
        section: "C02 - ST: Machining Processes",
        credits: "2.0"
    },
    {
        label: "ME - 593 Special Topics",
        section: "F03 - ST: Computational Modeling for Biofluid and Medical Devices",
        credits: "2.0"
    },
    {
        label: "MFE - 500 Current Topics In Manufacturing Seminar",
        section: "F01",
        credits: "0.0"
    },
    {
        label: "MFE - 500 Current Topics In Manufacturing Seminar",
        section: "S01",
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
        label: "MFE - 531 Computer Integrated Manufacturing",
        section: "A02",
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
        label: "MFE - 541 Design For Manufacturability",
        section: "D02",
        credits: "2.0"
    },
    {
        label: "MFE - 5420 Fundamentals Of Axiomatic Design Of Manufacturing Processes",
        section: "C01",
        credits: "2.0"
    },
    {
        label: "MFE - 5420 Fundamentals Of Axiomatic Design Of Manufacturing Processes",
        section: "D01",
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
        label: "MFE - 5843 Fundamentals of Surface Metrology",
        section: "B01",
        credits: "2.0"
    },
    {
        label: "MFE - 5843 Fundamentals of Surface Metrology",
        section: "C01",
        credits: "2.0"
    },
    {
        label: "MFE - 5843 Fundamentals of Surface Metrology",
        section: "D01",
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
        label: "MIS - 4084 Business Intelligence",
        section: "D01",
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
        label: "MIS - 500 Innovating With Information Systems",
        section: "S01",
        credits: "3.0"
    },
    {
        label: "MIS - 502 Data Management For Analytics",
        section: "F01",
        credits: "3.0"
    },
    {
        label: "MIS - 502 Data Management For Analytics",
        section: "S02",
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
        label: "MIS - 576 Project Management",
        section: "F02",
        credits: "3.0"
    },
    {
        label: "MIS - 581 Policy and Strategy for Information Technology, Artificial Intelligence, and Analytics",
        section: "S01",
        credits: "3.0"
    },
    {
        label: "MIS - 581 Policy and Strategy for Information Technology, Artificial Intelligence, and Analytics",
        section: "S02",
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
        label: "MIS - 583 User Experience Applications",
        section: "S02",
        credits: "3.0"
    },
    {
        label: "MIS - 584 Business Intelligence",
        section: "F01",
        credits: "3.0"
    },
    {
        label: "MIS - 584 Business Intelligence",
        section: "F02",
        credits: "3.0"
    },
    {
        label: "MIS - 584 Business Intelligence",
        section: "F03",
        credits: "3.0"
    },
    {
        label: "MIS - 584 Business Intelligence",
        section: "F04",
        credits: "3.0"
    },
    {
        label: "MIS - 584 Business Intelligence",
        section: "S01",
        credits: "3.0"
    },
    {
        label: "MIS - 585 User Experience Design",
        section: "F01",
        credits: "3.0"
    },
    {
        label: "MIS - 585 User Experience Design",
        section: "F02",
        credits: "3.0"
    },
    {
        label: "MIS - 587 Business Applications In Machine Learning",
        section: "S01",
        credits: "3.0"
    },
    {
        label: "MIS - 587 Business Applications In Machine Learning",
        section: "S02",
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
        label: "MKT - 4030 Achieving Strategic Effectiveness",
        section: "D01",
        credits: "3.0"
    },
    {
        label: "MKT - 500 Marketing Strategy",
        section: "F01",
        credits: "3.0"
    },
    {
        label: "MKT - 500 Marketing Strategy",
        section: "S01",
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
        label: "MKT - 568 Marketing Analytics",
        section: "F02",
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
        label: "MTE - 512 Properties And Performance Of Engineering Materials",
        section: "B02",
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
        label: "MTE - 526 Advanced Thermodynamics",
        section: "B02",
        credits: "2.0"
    },
    {
        label: "MTE - 532 X-Ray Diffraction And Crystallography",
        section: "C01",
        credits: "2.0"
    },
    {
        label: "MTE - 532 X-Ray Diffraction And Crystallography",
        section: "C02",
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
        label: "MTE - 5420 Fundamentals Of Axiomatic Design Of Manufacturing Processes",
        section: "D01",
        credits: "2.0"
    },
    {
        label: "MTE - 550 Phase Transformations In Materials",
        section: "S01",
        credits: "3.0"
    },
    {
        label: "MTE - 550 Phase Transformations In Materials",
        section: "S02",
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
        label: "MTE - 575 Introduction To Nanomaterials And Nanotechnology",
        section: "D02",
        credits: "2.0"
    },
    {
        label: "MTE - 580 Materials Science And Engineering Seminar",
        section: "F01",
        credits: "0.0"
    },
    {
        label: "MTE - 580 Materials Science And Engineering Seminar",
        section: "S01",
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
        label: "MTE - 5843 Fundamentals of Surface Metrology",
        section: "B01",
        credits: "2.0"
    },
    {
        label: "MTE - 5843 Fundamentals of Surface Metrology",
        section: "C01",
        credits: "2.0"
    },
    {
        label: "MTE - 5843 Fundamentals of Surface Metrology",
        section: "D01",
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
        label: "MTE - 594 Special Topics",
        section: "C02 - ST: Machining Processes",
        credits: "2.0"
    },
    {
        label: "MTE - 594 Special Topics",
        section: "C03 - ST: Extraction and Recycling of Metals",
        credits: "2.0"
    },
    {
        label: "MU - 1000 Music and Its Makers",
        section: "A01",
        credits: "3.0"
    },
    {
        label: "MU - 1000 Music and Its Makers",
        section: "A02",
        credits: "3.0"
    },
    {
        label: "MU - 1000 Music and Its Makers",
        section: "B01",
        credits: "3.0"
    },
    {
        label: "MU - 1000 Music and Its Makers",
        section: "D01",
        credits: "3.0"
    },
    {
        label: "MU - 1100 Foundations of Music Theory and Aural Skills",
        section: "A01",
        credits: "3.0"
    },
    {
        label: "MU - 1100 Foundations of Music Theory and Aural Skills",
        section: "A02",
        credits: "3.0"
    },
    {
        label: "MU - 1100 Foundations of Music Theory and Aural Skills",
        section: "A03",
        credits: "3.0"
    },
    {
        label: "MU - 1100 Foundations of Music Theory and Aural Skills",
        section: "B01",
        credits: "3.0"
    },
    {
        label: "MU - 1100 Foundations of Music Theory and Aural Skills",
        section: "B02",
        credits: "3.0"
    },
    {
        label: "MU - 1100 Foundations of Music Theory and Aural Skills",
        section: "C01",
        credits: "3.0"
    },
    {
        label: "MU - 1100 Foundations of Music Theory and Aural Skills",
        section: "C02",
        credits: "3.0"
    },
    {
        label: "MU - 1100 Foundations of Music Theory and Aural Skills",
        section: "D01",
        credits: "3.0"
    },
    {
        label: "MU - 1100 Foundations of Music Theory and Aural Skills",
        section: "D02",
        credits: "3.0"
    },
    {
        label: "MU - 1100 Foundations of Music Theory and Aural Skills",
        section: "D03",
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
        label: "MU - 2020 History Of American Popular Music",
        section: "C01",
        credits: "3.0"
    },
    {
        label: "MU - 2100 Music Composition",
        section: "B01",
        credits: "3.0"
    },
    {
        label: "MU - 2100 Music Composition",
        section: "C01",
        credits: "3.0"
    },
    {
        label: "MU - 2100 Music Composition",
        section: "D01",
        credits: "3.0"
    },
    {
        label: "MU - 2101 Arranging And Orchestration",
        section: "A01",
        credits: "3.0"
    },
    {
        label: "MU - 2101 Arranging And Orchestration",
        section: "C01",
        credits: "3.0"
    },
    {
        label: "MU - 2300 Foundations Of Music Technology",
        section: "A01",
        credits: "3.0"
    },
    {
        label: "MU - 2300 Foundations Of Music Technology",
        section: "D01",
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
        label: "MU - 2401 Glee Club",
        section: "F02",
        credits: "1.5"
    },
    {
        label: "MU - 2401 Glee Club",
        section: "S01",
        credits: "1.5"
    },
    {
        label: "MU - 2401 Glee Club",
        section: "S02",
        credits: "1.5"
    },
    {
        label: "MU - 2402 Alden Voices",
        section: "F01",
        credits: "1.5"
    },
    {
        label: "MU - 2402 Alden Voices",
        section: "F02",
        credits: "1.5"
    },
    {
        label: "MU - 2402 Alden Voices",
        section: "S01",
        credits: "1.5"
    },
    {
        label: "MU - 2402 Alden Voices",
        section: "S02",
        credits: "1.5"
    },
    {
        label: "MU - 2403 Chamber Choir",
        section: "F01",
        credits: "1.5"
    },
    {
        label: "MU - 2403 Chamber Choir",
        section: "F02",
        credits: "1.5"
    },
    {
        label: "MU - 2403 Chamber Choir",
        section: "S01",
        credits: "1.5"
    },
    {
        label: "MU - 2403 Chamber Choir",
        section: "S02",
        credits: "1.5"
    },
    {
        label: "MU - 2410 Jazz Combo",
        section: "F01",
        credits: "1.5"
    },
    {
        label: "MU - 2410 Jazz Combo",
        section: "F02",
        credits: "1.5"
    },
    {
        label: "MU - 2410 Jazz Combo",
        section: "S01",
        credits: "1.5"
    },
    {
        label: "MU - 2410 Jazz Combo",
        section: "S02",
        credits: "1.5"
    },
    {
        label: "MU - 2411 Jazz Ensemble",
        section: "F01",
        credits: "1.5"
    },
    {
        label: "MU - 2411 Jazz Ensemble",
        section: "F02",
        credits: "1.5"
    },
    {
        label: "MU - 2411 Jazz Ensemble",
        section: "S01",
        credits: "1.5"
    },
    {
        label: "MU - 2411 Jazz Ensemble",
        section: "S02",
        credits: "1.5"
    },
    {
        label: "MU - 2412 Stage Band",
        section: "F01",
        credits: "1.5"
    },
    {
        label: "MU - 2412 Stage Band",
        section: "F02",
        credits: "1.5"
    },
    {
        label: "MU - 2412 Stage Band",
        section: "S01",
        credits: "1.5"
    },
    {
        label: "MU - 2412 Stage Band",
        section: "S02",
        credits: "1.5"
    },
    {
        label: "MU - 2413 African Drumming Ensemble",
        section: "F01",
        credits: "1.5"
    },
    {
        label: "MU - 2413 African Drumming Ensemble",
        section: "F02",
        credits: "1.5"
    },
    {
        label: "MU - 2413 African Drumming Ensemble",
        section: "S01",
        credits: "1.5"
    },
    {
        label: "MU - 2413 African Drumming Ensemble",
        section: "S02",
        credits: "1.5"
    },
    {
        label: "MU - 2420 Orchestra",
        section: "F01",
        credits: "1.5"
    },
    {
        label: "MU - 2420 Orchestra",
        section: "F02",
        credits: "1.5"
    },
    {
        label: "MU - 2420 Orchestra",
        section: "S01",
        credits: "1.5"
    },
    {
        label: "MU - 2420 Orchestra",
        section: "S02",
        credits: "1.5"
    },
    {
        label: "MU - 2421 String Quartet",
        section: "F01",
        credits: "1.5"
    },
    {
        label: "MU - 2421 String Quartet",
        section: "F02",
        credits: "1.5"
    },
    {
        label: "MU - 2421 String Quartet",
        section: "S01",
        credits: "1.5"
    },
    {
        label: "MU - 2421 String Quartet",
        section: "S02",
        credits: "1.5"
    },
    {
        label: "MU - 2430 Concert Band",
        section: "F01",
        credits: "1.5"
    },
    {
        label: "MU - 2430 Concert Band",
        section: "F02",
        credits: "1.5"
    },
    {
        label: "MU - 2430 Concert Band",
        section: "S01",
        credits: "1.5"
    },
    {
        label: "MU - 2430 Concert Band",
        section: "S02",
        credits: "1.5"
    },
    {
        label: "MU - 2431 Brass Ensemble",
        section: "F01",
        credits: "1.5"
    },
    {
        label: "MU - 2431 Brass Ensemble",
        section: "F02",
        credits: "1.5"
    },
    {
        label: "MU - 2431 Brass Ensemble",
        section: "S01",
        credits: "1.5"
    },
    {
        label: "MU - 2431 Brass Ensemble",
        section: "S02",
        credits: "1.5"
    },
    {
        label: "MU - 2440 Percussion Ensemble",
        section: "F01",
        credits: "1.5"
    },
    {
        label: "MU - 2440 Percussion Ensemble",
        section: "F02",
        credits: "1.5"
    },
    {
        label: "MU - 2440 Percussion Ensemble",
        section: "S01",
        credits: "1.5"
    },
    {
        label: "MU - 2440 Percussion Ensemble",
        section: "S02",
        credits: "1.5"
    },
    {
        label: "MU - 2451 Conducting",
        section: "F01",
        credits: "1.5"
    },
    {
        label: "MU - 2451 Conducting",
        section: "F02",
        credits: "1.5"
    },
    {
        label: "MU - 2451 Conducting",
        section: "F03",
        credits: "1.5"
    },
    {
        label: "MU - 2451 Conducting",
        section: "F04",
        credits: "1.5"
    },
    {
        label: "MU - 2451 Conducting",
        section: "F05",
        credits: "1.5"
    },
    {
        label: "MU - 2451 Conducting",
        section: "F06",
        credits: "1.5"
    },
    {
        label: "MU - 2451 Conducting",
        section: "F07",
        credits: "1.5"
    },
    {
        label: "MU - 2451 Conducting",
        section: "F08",
        credits: "1.5"
    },
    {
        label: "MU - 2451 Conducting",
        section: "S01",
        credits: "1.5"
    },
    {
        label: "MU - 2451 Conducting",
        section: "S02",
        credits: "1.5"
    },
    {
        label: "MU - 2451 Conducting",
        section: "S03",
        credits: "1.5"
    },
    {
        label: "MU - 2451 Conducting",
        section: "S04",
        credits: "1.5"
    },
    {
        label: "MU - 2451 Conducting",
        section: "S05",
        credits: "1.5"
    },
    {
        label: "MU - 2451 Conducting",
        section: "S06",
        credits: "1.5"
    },
    {
        label: "MU - 2451 Conducting",
        section: "S07",
        credits: "1.5"
    },
    {
        label: "MU - 2451 Conducting",
        section: "S08",
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
        label: "MU - 3230 World Music",
        section: "C01",
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
        label: "MU - 3301 Topics In Midi",
        section: "B01 - Topics In MIDI",
        credits: "3.0"
    },
    {
        label: "MU - 3302 Topics In Digital Sound",
        section: "C01 - Topics In Digital Sound: Sound Design",
        credits: "3.0"
    },
    {
        label: "MU - 3302 Topics In Digital Sound",
        section: "D01 - Topics In Digital Sound: Film Music",
        credits: "3.0"
    },
    {
        label: "MU - 3303 Topics In Interactive Programming",
        section: "C01 - Topics In Interactive Programming",
        credits: "3.0"
    },
    {
        label: "MU - 3303 Topics In Interactive Programming",
        section: "D01 - Topics In Interactive Programming",
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
        label: "NEU - 590 Special Topics in Neuroscience",
        section: "S02",
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
        label: "OBC - 1010 Leadership Practice",
        section: "C01",
        credits: "3.0"
    },
    {
        label: "OBC - 1010 Leadership Practice",
        section: "D02",
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
        label: "OBC - 505 Teaming And Organizing For Innovation",
        section: "S01",
        credits: "3.0"
    },
    {
        label: "OBC - 506 Leadership",
        section: "F01",
        credits: "3.0"
    },
    {
        label: "OBC - 506 Leadership",
        section: "S02",
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
        label: "OIE - 2081 Introduction To Prescriptive Analytics",
        section: "C01",
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
        label: "OIE - 2850 Engineering Economics",
        section: "D01",
        credits: "3.0"
    },
    {
        label: "OIE - 3020 Achieving Effective Operations",
        section: "BL01/BX01",
        credits: "3.0"
    },
    {
        label: "OIE - 3020 Achieving Effective Operations",
        section: "BL01/BX02",
        credits: "3.0"
    },
    {
        label: "OIE - 3020 Achieving Effective Operations",
        section: "CL01/CX01",
        credits: "3.0"
    },
    {
        label: "OIE - 3020 Achieving Effective Operations",
        section: "CL01/CX02",
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
        label: "OIE - 3420 Quality Planning, Design And Control",
        section: "C01",
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
        label: "OIE - 501 Operations Management",
        section: "S01",
        credits: "3.0"
    },
    {
        label: "OIE - 542 Risk Management And Decision Making",
        section: "F01",
        credits: "3.0"
    },
    {
        label: "OIE - 542 Risk Management And Decision Making",
        section: "S02",
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
        label: "OIE - 552 Modeling And Optimizing Processes",
        section: "B02",
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
        label: "OIE - 558 Designing And Managing Lean Six Sigma Processes",
        section: "A02",
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
        label: "OT - 4200 Senior Seminar",
        section: "B01",
        credits: "0.0"
    },
    {
        label: "OT - 4200 Senior Seminar",
        section: "C01",
        credits: "0.0"
    },
    {
        label: "OT - 4200 Senior Seminar",
        section: "D01",
        credits: "0.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "Interest List-A Term",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL01/AD01/AX01",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL01/AD01/AX03",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL01/AD01/AX04",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL01/AD01/AX05",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL01/AD01/AX07",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL01/AD01/AX08",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL01/AD01/AX09",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL01/AD01/AX11",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL01/AD01/AX12",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL01/AD01/AX13",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL01/AD01/AX15",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL01/AD01/AX16",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL01/AD01/AX17",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL01/AD01/AX19",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL01/AD01/AX20",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL01/AD01/AX21",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL01/AD01/AX23",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL01/AD01/AX24",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL01/AD01/AX26",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL01/AD01/AX27",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL01/AD01/AX28",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL01/AD01/AX30",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL01/AD01/AX31",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL01/AD01/AX32",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL01/AD01/AX34",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL01/AD01/AX35",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL01/AD01/AX38",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL01/AD02/AX02",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL01/AD02/AX03",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL01/AD02/AX04",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL01/AD02/AX05",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL01/AD02/AX07",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL01/AD02/AX08",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL01/AD02/AX10",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL01/AD02/AX11",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL01/AD02/AX12",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL01/AD02/AX13",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL01/AD02/AX15",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL01/AD02/AX16",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL01/AD02/AX18",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL01/AD02/AX19",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL01/AD02/AX20",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL01/AD02/AX21",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL01/AD02/AX23",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL01/AD02/AX25",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL01/AD02/AX26",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL01/AD02/AX27",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL01/AD02/AX28",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL01/AD02/AX30",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL01/AD02/AX31",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL01/AD02/AX33",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL01/AD02/AX34",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL01/AD02/AX35",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL01/AD02/AX38",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL01/AD03/AX02",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL01/AD03/AX03",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL01/AD03/AX04",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL01/AD03/AX05",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL01/AD03/AX07",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL01/AD03/AX08",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL01/AD03/AX10",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL01/AD03/AX11",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL01/AD03/AX12",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL01/AD03/AX13",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL01/AD03/AX15",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL01/AD03/AX16",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL01/AD03/AX18",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL01/AD03/AX19",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL01/AD03/AX20",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL01/AD03/AX21",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL01/AD03/AX23",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL01/AD03/AX25",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL01/AD03/AX26",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL01/AD03/AX27",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL01/AD03/AX28",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL01/AD03/AX30",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL01/AD03/AX31",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL01/AD03/AX33",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL01/AD03/AX34",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL01/AD03/AX35",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL01/AD03/AX38",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL01/AD04/AX01",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL01/AD04/AX03",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL01/AD04/AX04",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL01/AD04/AX05",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL01/AD04/AX07",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL01/AD04/AX08",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL01/AD04/AX09",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL01/AD04/AX11",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL01/AD04/AX12",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL01/AD04/AX13",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL01/AD04/AX15",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL01/AD04/AX16",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL01/AD04/AX17",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL01/AD04/AX19",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL01/AD04/AX20",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL01/AD04/AX21",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL01/AD04/AX23",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL01/AD04/AX24",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL01/AD04/AX26",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL01/AD04/AX27",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL01/AD04/AX28",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL01/AD04/AX30",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL01/AD04/AX31",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL01/AD04/AX32",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL01/AD04/AX34",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL01/AD04/AX35",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL01/AD04/AX38",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL02/AD05/AX02",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL02/AD05/AX03",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL02/AD05/AX04",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL02/AD05/AX06",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL02/AD05/AX07",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL02/AD05/AX08",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL02/AD05/AX10",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL02/AD05/AX11",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL02/AD05/AX12",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL02/AD05/AX14",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL02/AD05/AX15",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL02/AD05/AX16",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL02/AD05/AX18",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL02/AD05/AX19",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL02/AD05/AX20",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL02/AD05/AX22",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL02/AD05/AX23",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL02/AD05/AX25",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL02/AD05/AX26",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL02/AD05/AX27",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL02/AD05/AX29",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL02/AD05/AX30",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL02/AD05/AX31",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL02/AD05/AX33",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL02/AD05/AX34",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL02/AD05/AX35",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL02/AD05/AX38",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL02/AD06/AX02",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL02/AD06/AX03",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL02/AD06/AX04",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL02/AD06/AX06",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL02/AD06/AX07",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL02/AD06/AX08",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL02/AD06/AX10",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL02/AD06/AX11",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL02/AD06/AX12",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL02/AD06/AX14",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL02/AD06/AX15",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL02/AD06/AX16",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL02/AD06/AX18",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL02/AD06/AX19",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL02/AD06/AX20",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL02/AD06/AX22",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL02/AD06/AX23",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL02/AD06/AX25",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL02/AD06/AX26",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL02/AD06/AX27",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL02/AD06/AX29",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL02/AD06/AX30",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL02/AD06/AX31",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL02/AD06/AX33",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL02/AD06/AX34",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL02/AD06/AX35",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL02/AD06/AX38",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL02/AD07/AX01",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL02/AD07/AX03",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL02/AD07/AX04",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL02/AD07/AX06",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL02/AD07/AX07",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL02/AD07/AX08",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL02/AD07/AX09",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL02/AD07/AX11",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL02/AD07/AX12",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL02/AD07/AX14",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL02/AD07/AX15",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL02/AD07/AX16",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL02/AD07/AX17",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL02/AD07/AX19",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL02/AD07/AX20",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL02/AD07/AX22",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL02/AD07/AX23",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL02/AD07/AX24",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL02/AD07/AX26",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL02/AD07/AX27",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL02/AD07/AX29",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL02/AD07/AX30",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL02/AD07/AX31",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL02/AD07/AX32",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL02/AD07/AX34",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL02/AD07/AX35",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL02/AD07/AX38",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL02/AD08/AX01",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL02/AD08/AX03",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL02/AD08/AX04",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL02/AD08/AX06",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL02/AD08/AX07",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL02/AD08/AX08",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL02/AD08/AX09",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL02/AD08/AX11",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL02/AD08/AX12",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL02/AD08/AX14",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL02/AD08/AX15",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL02/AD08/AX16",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL02/AD08/AX17",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL02/AD08/AX19",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL02/AD08/AX20",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL02/AD08/AX22",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL02/AD08/AX23",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL02/AD08/AX24",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL02/AD08/AX26",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL02/AD08/AX27",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL02/AD08/AX29",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL02/AD08/AX30",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL02/AD08/AX31",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL02/AD08/AX32",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL02/AD08/AX34",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL02/AD08/AX35",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL02/AD08/AX38",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL10/AD10/AX01",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL10/AD10/AX02",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL10/AD10/AX04",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL10/AD10/AX05",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL10/AD10/AX06",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL10/AD10/AX08",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL10/AD10/AX09",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL10/AD10/AX10",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL10/AD10/AX12",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL10/AD10/AX13",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL10/AD10/AX14",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL10/AD10/AX16",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL10/AD10/AX17",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL10/AD10/AX18",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL10/AD10/AX20",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL10/AD10/AX21",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL10/AD10/AX22",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL10/AD10/AX24",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL10/AD10/AX25",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL10/AD10/AX27",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL10/AD10/AX28",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL10/AD10/AX29",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL10/AD10/AX31",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL10/AD10/AX32",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL10/AD10/AX33",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AL10/AD10/AX35",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AS01/AS01-Multipurpose/AX01",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AS01/AS01-Multipurpose/AX02",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AS01/AS01-Multipurpose/AX03",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AS01/AS01-Multipurpose/AX04",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AS01/AS01-Multipurpose/AX06",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AS01/AS01-Multipurpose/AX07",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AS01/AS01-Multipurpose/AX08",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AS01/AS01-Multipurpose/AX09",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AS01/AS01-Multipurpose/AX10",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AS01/AS01-Multipurpose/AX11",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AS01/AS01-Multipurpose/AX12",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AS01/AS01-Multipurpose/AX14",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AS01/AS01-Multipurpose/AX15",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AS01/AS01-Multipurpose/AX16",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AS01/AS01-Multipurpose/AX18",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AS01/AS01-Multipurpose/AX19",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AS01/AS01-Multipurpose/AX20",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AS01/AS01-Multipurpose/AX21",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AS01/AS01-Multipurpose/AX22",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AS01/AS01-Multipurpose/AX23",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AS01/AS01-Multipurpose/AX24",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AS01/AS01-Multipurpose/AX25",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AS01/AS01-Multipurpose/AX26",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AS01/AS01-Multipurpose/AX27",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AS01/AS01-Multipurpose/AX29",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AS01/AS01-Multipurpose/AX30",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AS01/AS01-Multipurpose/AX31",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AS01/AS01-Multipurpose/AX33",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AS01/AS01-Multipurpose/AX34",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AS01/AS01-Multipurpose/AX35",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AS01/AS01-Multipurpose/AX38",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AS02/AS02-Multipurpose/AX02",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AS02/AS02-Multipurpose/AX03",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AS02/AS02-Multipurpose/AX04",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AS02/AS02-Multipurpose/AX06",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AS02/AS02-Multipurpose/AX07",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AS02/AS02-Multipurpose/AX08",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AS02/AS02-Multipurpose/AX10",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AS02/AS02-Multipurpose/AX11",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AS02/AS02-Multipurpose/AX12",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AS02/AS02-Multipurpose/AX14",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AS02/AS02-Multipurpose/AX15",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AS02/AS02-Multipurpose/AX16",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AS02/AS02-Multipurpose/AX17",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AS02/AS02-Multipurpose/AX18",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AS02/AS02-Multipurpose/AX19",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AS02/AS02-Multipurpose/AX20",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AS02/AS02-Multipurpose/AX22",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AS02/AS02-Multipurpose/AX23",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AS02/AS02-Multipurpose/AX25",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AS02/AS02-Multipurpose/AX26",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AS02/AS02-Multipurpose/AX27",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AS02/AS02-Multipurpose/AX29",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AS02/AS02-Multipurpose/AX30",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AS02/AS02-Multipurpose/AX31",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AS02/AS02-Multipurpose/AX32",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AS02/AS02-Multipurpose/AX33",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AS02/AS02-Multipurpose/AX34",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AS02/AS02-Multipurpose/AX35",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "AS02/AS02-Multipurpose/AX38",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "Interest List-C Term",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "CL01/CD01/CX01",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "CL01/CD01/CX02",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "CL01/CD01/CX05",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "CL01/CD01/CX06",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "CL01/CD01/CX07",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "CL01/CD01/CX08",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "CL01/CD01/CX09",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "CL01/CD01/CX11",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "CL01/CD01/CX13",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "CL01/CD01/CX14",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "CL01/CD01/CX15",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "CL01/CD01/CX16",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "CL01/CD01/CX18",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "CL01/CD02/CX01",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "CL01/CD02/CX02",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "CL01/CD02/CX03",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "CL01/CD02/CX05",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "CL01/CD02/CX06",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "CL01/CD02/CX07",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "CL01/CD02/CX09",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "CL01/CD02/CX10",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "CL01/CD02/CX13",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "CL01/CD02/CX14",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "CL01/CD02/CX15",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "CL01/CD02/CX16",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "CL01/CD02/CX18",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "CL01/CD03/CX01",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "CL01/CD03/CX03",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "CL01/CD03/CX05",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "CL01/CD03/CX06",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "CL01/CD03/CX07",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "CL01/CD03/CX08",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "CL01/CD03/CX10",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "CL01/CD03/CX11",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "CL01/CD03/CX13",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "CL01/CD03/CX14",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "CL01/CD03/CX15",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "CL01/CD03/CX16",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "CL01/CD03/CX18",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "CL01/CD04/CX01",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "CL01/CD04/CX03",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "CL01/CD04/CX05",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "CL01/CD04/CX06",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "CL01/CD04/CX07",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "CL01/CD04/CX08",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "CL01/CD04/CX10",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "CL01/CD04/CX11",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "CL01/CD04/CX13",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "CL01/CD04/CX14",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "CL01/CD04/CX15",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "CL01/CD04/CX16",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "CL01/CD04/CX18",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "CL01/CD05/CX01",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "CL01/CD05/CX02",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "CL01/CD05/CX05",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "CL01/CD05/CX06",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "CL01/CD05/CX07",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "CL01/CD05/CX08",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "CL01/CD05/CX09",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "CL01/CD05/CX11",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "CL01/CD05/CX13",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "CL01/CD05/CX14",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "CL01/CD05/CX15",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "CL01/CD05/CX16",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "CL01/CD05/CX18",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "CL01/CD06/CX01",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "CL01/CD06/CX02",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "CL01/CD06/CX05",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "CL01/CD06/CX06",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "CL01/CD06/CX07",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "CL01/CD06/CX08",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "CL01/CD06/CX09",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "CL01/CD06/CX11",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "CL01/CD06/CX13",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "CL01/CD06/CX14",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "CL01/CD06/CX15",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "CL01/CD06/CX16",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "CL01/CD06/CX18",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "CS01/CS01-Multipurpose/CX01",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "CS01/CS01-Multipurpose/CX02",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "CS01/CS01-Multipurpose/CX03",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "CS01/CS01-Multipurpose/CX06",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "CS01/CS01-Multipurpose/CX07",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "CS01/CS01-Multipurpose/CX09",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "CS01/CS01-Multipurpose/CX10",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "CS01/CS01-Multipurpose/CX11",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "CS01/CS01-Multipurpose/CX13",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "CS01/CS01-Multipurpose/CX15",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "CS01/CS01-Multipurpose/CX16",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "CS01/CS01-Multipurpose/CX18",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "CS02/CS02-Multipurpose/CX01",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "CS02/CS02-Multipurpose/CX02",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "CS02/CS02-Multipurpose/CX03",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "CS02/CS02-Multipurpose/CX06",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "CS02/CS02-Multipurpose/CX07",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "CS02/CS02-Multipurpose/CX08",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "CS02/CS02-Multipurpose/CX09",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "CS02/CS02-Multipurpose/CX10",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "CS02/CS02-Multipurpose/CX13",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "CS02/CS02-Multipurpose/CX15",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "CS02/CS02-Multipurpose/CX16",
        credits: "3.0"
    },
    {
        label: "PH - 1110 General Physics-Mechanics",
        section: "CS02/CS02-Multipurpose/CX18",
        credits: "3.0"
    },
    {
        label: "PH - 1111 Principles Of Physics-Mechanics",
        section: "Interest List-A Term",
        credits: "3.0"
    },
    {
        label: "PH - 1111 Principles Of Physics-Mechanics",
        section: "AL01/AX01",
        credits: "3.0"
    },
    {
        label: "PH - 1111 Principles Of Physics-Mechanics",
        section: "AL01/AX03",
        credits: "3.0"
    },
    {
        label: "PH - 1111 Principles Of Physics-Mechanics",
        section: "AL01/AX04",
        credits: "3.0"
    },
    {
        label: "PH - 1111 Principles Of Physics-Mechanics",
        section: "AL01/AX05",
        credits: "3.0"
    },
    {
        label: "PH - 1111 Principles Of Physics-Mechanics",
        section: "AL01/AX07",
        credits: "3.0"
    },
    {
        label: "PH - 1111 Principles Of Physics-Mechanics",
        section: "AL01/AX08",
        credits: "3.0"
    },
    {
        label: "PH - 1111 Principles Of Physics-Mechanics",
        section: "AL01/AX09",
        credits: "3.0"
    },
    {
        label: "PH - 1111 Principles Of Physics-Mechanics",
        section: "AL01/AX11",
        credits: "3.0"
    },
    {
        label: "PH - 1111 Principles Of Physics-Mechanics",
        section: "AL01/AX12",
        credits: "3.0"
    },
    {
        label: "PH - 1111 Principles Of Physics-Mechanics",
        section: "AL01/AX13",
        credits: "3.0"
    },
    {
        label: "PH - 1111 Principles Of Physics-Mechanics",
        section: "AL01/AX15",
        credits: "3.0"
    },
    {
        label: "PH - 1111 Principles Of Physics-Mechanics",
        section: "AL01/AX16",
        credits: "3.0"
    },
    {
        label: "PH - 1111 Principles Of Physics-Mechanics",
        section: "AL01/AX17",
        credits: "3.0"
    },
    {
        label: "PH - 1111 Principles Of Physics-Mechanics",
        section: "AL01/AX19",
        credits: "3.0"
    },
    {
        label: "PH - 1111 Principles Of Physics-Mechanics",
        section: "AL01/AX20",
        credits: "3.0"
    },
    {
        label: "PH - 1111 Principles Of Physics-Mechanics",
        section: "AL01/AX21",
        credits: "3.0"
    },
    {
        label: "PH - 1111 Principles Of Physics-Mechanics",
        section: "AL01/AX23",
        credits: "3.0"
    },
    {
        label: "PH - 1111 Principles Of Physics-Mechanics",
        section: "AL01/AX24",
        credits: "3.0"
    },
    {
        label: "PH - 1111 Principles Of Physics-Mechanics",
        section: "AL01/AX26",
        credits: "3.0"
    },
    {
        label: "PH - 1111 Principles Of Physics-Mechanics",
        section: "AL01/AX27",
        credits: "3.0"
    },
    {
        label: "PH - 1111 Principles Of Physics-Mechanics",
        section: "AL01/AX28",
        credits: "3.0"
    },
    {
        label: "PH - 1111 Principles Of Physics-Mechanics",
        section: "AL01/AX30",
        credits: "3.0"
    },
    {
        label: "PH - 1111 Principles Of Physics-Mechanics",
        section: "AL01/AX31",
        credits: "3.0"
    },
    {
        label: "PH - 1111 Principles Of Physics-Mechanics",
        section: "AL01/AX32",
        credits: "3.0"
    },
    {
        label: "PH - 1111 Principles Of Physics-Mechanics",
        section: "AL01/AX34",
        credits: "3.0"
    },
    {
        label: "PH - 1111 Principles Of Physics-Mechanics",
        section: "AL01/AX35",
        credits: "3.0"
    },
    {
        label: "PH - 1111 Principles Of Physics-Mechanics",
        section: "AL01/AX36",
        credits: "3.0"
    },
    {
        label: "PH - 1111 Principles Of Physics-Mechanics",
        section: "AL01/AX38",
        credits: "3.0"
    },
    {
        label: "PH - 1111 Principles Of Physics-Mechanics",
        section: "AL02/AX01",
        credits: "3.0"
    },
    {
        label: "PH - 1111 Principles Of Physics-Mechanics",
        section: "AL02/AX02",
        credits: "3.0"
    },
    {
        label: "PH - 1111 Principles Of Physics-Mechanics",
        section: "AL02/AX03",
        credits: "3.0"
    },
    {
        label: "PH - 1111 Principles Of Physics-Mechanics",
        section: "AL02/AX05",
        credits: "3.0"
    },
    {
        label: "PH - 1111 Principles Of Physics-Mechanics",
        section: "AL02/AX06",
        credits: "3.0"
    },
    {
        label: "PH - 1111 Principles Of Physics-Mechanics",
        section: "AL02/AX07",
        credits: "3.0"
    },
    {
        label: "PH - 1111 Principles Of Physics-Mechanics",
        section: "AL02/AX09",
        credits: "3.0"
    },
    {
        label: "PH - 1111 Principles Of Physics-Mechanics",
        section: "AL02/AX10",
        credits: "3.0"
    },
    {
        label: "PH - 1111 Principles Of Physics-Mechanics",
        section: "AL02/AX11",
        credits: "3.0"
    },
    {
        label: "PH - 1111 Principles Of Physics-Mechanics",
        section: "AL02/AX13",
        credits: "3.0"
    },
    {
        label: "PH - 1111 Principles Of Physics-Mechanics",
        section: "AL02/AX14",
        credits: "3.0"
    },
    {
        label: "PH - 1111 Principles Of Physics-Mechanics",
        section: "AL02/AX15",
        credits: "3.0"
    },
    {
        label: "PH - 1111 Principles Of Physics-Mechanics",
        section: "AL02/AX17",
        credits: "3.0"
    },
    {
        label: "PH - 1111 Principles Of Physics-Mechanics",
        section: "AL02/AX18",
        credits: "3.0"
    },
    {
        label: "PH - 1111 Principles Of Physics-Mechanics",
        section: "AL02/AX19",
        credits: "3.0"
    },
    {
        label: "PH - 1111 Principles Of Physics-Mechanics",
        section: "AL02/AX21",
        credits: "3.0"
    },
    {
        label: "PH - 1111 Principles Of Physics-Mechanics",
        section: "AL02/AX22",
        credits: "3.0"
    },
    {
        label: "PH - 1111 Principles Of Physics-Mechanics",
        section: "AL02/AX23",
        credits: "3.0"
    },
    {
        label: "PH - 1111 Principles Of Physics-Mechanics",
        section: "AL02/AX24",
        credits: "3.0"
    },
    {
        label: "PH - 1111 Principles Of Physics-Mechanics",
        section: "AL02/AX25",
        credits: "3.0"
    },
    {
        label: "PH - 1111 Principles Of Physics-Mechanics",
        section: "AL02/AX26",
        credits: "3.0"
    },
    {
        label: "PH - 1111 Principles Of Physics-Mechanics",
        section: "AL02/AX28",
        credits: "3.0"
    },
    {
        label: "PH - 1111 Principles Of Physics-Mechanics",
        section: "AL02/AX29",
        credits: "3.0"
    },
    {
        label: "PH - 1111 Principles Of Physics-Mechanics",
        section: "AL02/AX30",
        credits: "3.0"
    },
    {
        label: "PH - 1111 Principles Of Physics-Mechanics",
        section: "AL02/AX32",
        credits: "3.0"
    },
    {
        label: "PH - 1111 Principles Of Physics-Mechanics",
        section: "AL02/AX33",
        credits: "3.0"
    },
    {
        label: "PH - 1111 Principles Of Physics-Mechanics",
        section: "AL02/AX34",
        credits: "3.0"
    },
    {
        label: "PH - 1111 Principles Of Physics-Mechanics",
        section: "AL02/AX36",
        credits: "3.0"
    },
    {
        label: "PH - 1111 Principles Of Physics-Mechanics",
        section: "AL02/AX37",
        credits: "3.0"
    },
    {
        label: "PH - 1111 Principles Of Physics-Mechanics",
        section: "AL02/AX38",
        credits: "3.0"
    },
    {
        label: "PH - 1111 Principles Of Physics-Mechanics",
        section: "C01",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "Interest List-B Term",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL01/BD01/BX01",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL01/BD01/BX03",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL01/BD01/BX04",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL01/BD01/BX05",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL01/BD01/BX07",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL01/BD01/BX08",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL01/BD01/BX09",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL01/BD01/BX11",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL01/BD01/BX12",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL01/BD01/BX13",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL01/BD01/BX15",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL01/BD01/BX16",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL01/BD01/BX17",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL01/BD01/BX19",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL01/BD01/BX20",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL01/BD01/BX21",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL01/BD01/BX23",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL01/BD01/BX26",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL01/BD01/BX27",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL01/BD01/BX28",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL01/BD01/BX30",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL01/BD01/BX31",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL01/BD01/BX34",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL01/BD01/BX35",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL01/BD01/BX36",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL01/BD01/BX38",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL01/BD02/BX02",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL01/BD02/BX03",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL01/BD02/BX04",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL01/BD02/BX05",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL01/BD02/BX07",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL01/BD02/BX08",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL01/BD02/BX10",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL01/BD02/BX11",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL01/BD02/BX12",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL01/BD02/BX13",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL01/BD02/BX15",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL01/BD02/BX16",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL01/BD02/BX18",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL01/BD02/BX19",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL01/BD02/BX20",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL01/BD02/BX21",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL01/BD02/BX23",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL01/BD02/BX25",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL01/BD02/BX26",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL01/BD02/BX27",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL01/BD02/BX28",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL01/BD02/BX30",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL01/BD02/BX31",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL01/BD02/BX33",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL01/BD02/BX34",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL01/BD02/BX35",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL01/BD02/BX36",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL01/BD02/BX38",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL01/BD03/BX02",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL01/BD03/BX03",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL01/BD03/BX04",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL01/BD03/BX05",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL01/BD03/BX07",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL01/BD03/BX08",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL01/BD03/BX10",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL01/BD03/BX11",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL01/BD03/BX12",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL01/BD03/BX13",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL01/BD03/BX15",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL01/BD03/BX16",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL01/BD03/BX18",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL01/BD03/BX19",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL01/BD03/BX20",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL01/BD03/BX21",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL01/BD03/BX23",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL01/BD03/BX25",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL01/BD03/BX26",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL01/BD03/BX27",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL01/BD03/BX28",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL01/BD03/BX30",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL01/BD03/BX31",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL01/BD03/BX33",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL01/BD03/BX34",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL01/BD03/BX35",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL01/BD03/BX36",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL01/BD03/BX38",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL01/BD04/BX01",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL01/BD04/BX03",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL01/BD04/BX04",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL01/BD04/BX05",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL01/BD04/BX07",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL01/BD04/BX08",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL01/BD04/BX09",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL01/BD04/BX11",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL01/BD04/BX12",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL01/BD04/BX13",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL01/BD04/BX15",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL01/BD04/BX16",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL01/BD04/BX17",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL01/BD04/BX19",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL01/BD04/BX20",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL01/BD04/BX21",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL01/BD04/BX23",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL01/BD04/BX26",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL01/BD04/BX27",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL01/BD04/BX28",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL01/BD04/BX30",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL01/BD04/BX31",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL01/BD04/BX34",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL01/BD04/BX35",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL01/BD04/BX36",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL01/BD04/BX38",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL02/BD05/BX02",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL02/BD05/BX03",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL02/BD05/BX04",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL02/BD05/BX06",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL02/BD05/BX07",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL02/BD05/BX08",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL02/BD05/BX10",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL02/BD05/BX11",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL02/BD05/BX12",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL02/BD05/BX14",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL02/BD05/BX15",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL02/BD05/BX16",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL02/BD05/BX18",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL02/BD05/BX19",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL02/BD05/BX20",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL02/BD05/BX22",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL02/BD05/BX23",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL02/BD05/BX25",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL02/BD05/BX26",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL02/BD05/BX27",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL02/BD05/BX29",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL02/BD05/BX30",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL02/BD05/BX31",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL02/BD05/BX33",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL02/BD05/BX34",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL02/BD05/BX35",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL02/BD05/BX37",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL02/BD05/BX38",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL02/BD06/BX02",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL02/BD06/BX03",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL02/BD06/BX04",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL02/BD06/BX06",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL02/BD06/BX07",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL02/BD06/BX08",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL02/BD06/BX10",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL02/BD06/BX11",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL02/BD06/BX12",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL02/BD06/BX14",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL02/BD06/BX15",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL02/BD06/BX16",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL02/BD06/BX18",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL02/BD06/BX19",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL02/BD06/BX20",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL02/BD06/BX22",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL02/BD06/BX23",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL02/BD06/BX25",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL02/BD06/BX26",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL02/BD06/BX27",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL02/BD06/BX29",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL02/BD06/BX30",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL02/BD06/BX31",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL02/BD06/BX33",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL02/BD06/BX34",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL02/BD06/BX35",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL02/BD06/BX37",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL02/BD06/BX38",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL02/BD07/BX01",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL02/BD07/BX03",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL02/BD07/BX04",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL02/BD07/BX06",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL02/BD07/BX07",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL02/BD07/BX08",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL02/BD07/BX09",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL02/BD07/BX11",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL02/BD07/BX12",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL02/BD07/BX14",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL02/BD07/BX15",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL02/BD07/BX16",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL02/BD07/BX17",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL02/BD07/BX19",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL02/BD07/BX20",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL02/BD07/BX22",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL02/BD07/BX23",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL02/BD07/BX26",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL02/BD07/BX27",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL02/BD07/BX29",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL02/BD07/BX30",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL02/BD07/BX31",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL02/BD07/BX34",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL02/BD07/BX35",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL02/BD07/BX37",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL02/BD07/BX38",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL02/BD08/BX01",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL02/BD08/BX03",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL02/BD08/BX04",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL02/BD08/BX06",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL02/BD08/BX07",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL02/BD08/BX08",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL02/BD08/BX09",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL02/BD08/BX11",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL02/BD08/BX12",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL02/BD08/BX14",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL02/BD08/BX15",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL02/BD08/BX16",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL02/BD08/BX17",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL02/BD08/BX19",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL02/BD08/BX20",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL02/BD08/BX22",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL02/BD08/BX23",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL02/BD08/BX26",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL02/BD08/BX27",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL02/BD08/BX29",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL02/BD08/BX30",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL02/BD08/BX31",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL02/BD08/BX34",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL02/BD08/BX35",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL02/BD08/BX37",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL02/BD08/BX38",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL10/BD10/BX01",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL10/BD10/BX02",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL10/BD10/BX04",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL10/BD10/BX05",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL10/BD10/BX06",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL10/BD10/BX08",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL10/BD10/BX09",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL10/BD10/BX10",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL10/BD10/BX12",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL10/BD10/BX13",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL10/BD10/BX14",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL10/BD10/BX16",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL10/BD10/BX17",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL10/BD10/BX18",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL10/BD10/BX20",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL10/BD10/BX21",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL10/BD10/BX22",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL10/BD10/BX25",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL10/BD10/BX27",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL10/BD10/BX28",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL10/BD10/BX29",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL10/BD10/BX31",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL10/BD10/BX33",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL10/BD10/BX35",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL10/BD10/BX36",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BL10/BD10/BX37",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BS01/BS01-Multipurpose/BX01",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BS01/BS01-Multipurpose/BX02",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BS01/BS01-Multipurpose/BX03",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BS01/BS01-Multipurpose/BX04",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BS01/BS01-Multipurpose/BX06",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BS01/BS01-Multipurpose/BX07",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BS01/BS01-Multipurpose/BX08",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BS01/BS01-Multipurpose/BX09",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BS01/BS01-Multipurpose/BX10",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BS01/BS01-Multipurpose/BX11",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BS01/BS01-Multipurpose/BX12",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BS01/BS01-Multipurpose/BX14",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BS01/BS01-Multipurpose/BX15",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BS01/BS01-Multipurpose/BX16",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BS01/BS01-Multipurpose/BX18",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BS01/BS01-Multipurpose/BX19",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BS01/BS01-Multipurpose/BX20",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BS01/BS01-Multipurpose/BX21",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BS01/BS01-Multipurpose/BX22",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BS01/BS01-Multipurpose/BX23",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BS01/BS01-Multipurpose/BX25",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BS01/BS01-Multipurpose/BX26",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BS01/BS01-Multipurpose/BX27",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BS01/BS01-Multipurpose/BX29",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BS01/BS01-Multipurpose/BX30",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BS01/BS01-Multipurpose/BX31",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BS01/BS01-Multipurpose/BX33",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BS01/BS01-Multipurpose/BX34",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BS01/BS01-Multipurpose/BX35",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BS01/BS01-Multipurpose/BX36",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BS01/BS01-Multipurpose/BX37",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BS01/BS01-Multipurpose/BX38",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BS02/BS02-Multipurpose/BX02",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BS02/BS02-Multipurpose/BX03",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BS02/BS02-Multipurpose/BX04",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BS02/BS02-Multipurpose/BX06",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BS02/BS02-Multipurpose/BX07",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BS02/BS02-Multipurpose/BX08",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BS02/BS02-Multipurpose/BX10",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BS02/BS02-Multipurpose/BX11",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BS02/BS02-Multipurpose/BX12",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BS02/BS02-Multipurpose/BX14",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BS02/BS02-Multipurpose/BX15",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BS02/BS02-Multipurpose/BX16",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BS02/BS02-Multipurpose/BX17",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BS02/BS02-Multipurpose/BX18",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BS02/BS02-Multipurpose/BX19",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BS02/BS02-Multipurpose/BX20",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BS02/BS02-Multipurpose/BX22",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BS02/BS02-Multipurpose/BX23",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BS02/BS02-Multipurpose/BX25",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BS02/BS02-Multipurpose/BX26",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BS02/BS02-Multipurpose/BX27",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BS02/BS02-Multipurpose/BX29",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BS02/BS02-Multipurpose/BX30",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BS02/BS02-Multipurpose/BX31",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BS02/BS02-Multipurpose/BX33",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BS02/BS02-Multipurpose/BX34",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BS02/BS02-Multipurpose/BX35",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BS02/BS02-Multipurpose/BX37",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "BS02/BS02-Multipurpose/BX38",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "Interest List-D Term",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "DL01/DD01/DX02",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "DL01/DD01/DX03",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "DL01/DD01/DX04",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "DL01/DD01/DX05",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "DL01/DD01/DX06",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "DL01/DD01/DX07",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "DL01/DD01/DX09",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "DL01/DD01/DX10",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "DL01/DD01/DX11",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "DL01/DD01/DX12",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "DL01/DD01/DX14",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "DL01/DD01/DX15",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "DL01/DD01/DX16",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "DL01/DD02/DX02",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "DL01/DD02/DX03",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "DL01/DD02/DX04",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "DL01/DD02/DX05",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "DL01/DD02/DX06",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "DL01/DD02/DX07",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "DL01/DD02/DX09",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "DL01/DD02/DX10",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "DL01/DD02/DX11",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "DL01/DD02/DX12",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "DL01/DD02/DX14",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "DL01/DD02/DX15",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "DL01/DD02/DX16",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "DL01/DD03/DX01",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "DL01/DD03/DX03",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "DL01/DD03/DX04",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "DL01/DD03/DX05",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "DL01/DD03/DX06",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "DL01/DD03/DX07",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "DL01/DD03/DX08",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "DL01/DD03/DX10",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "DL01/DD03/DX11",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "DL01/DD03/DX12",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "DL01/DD03/DX14",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "DL01/DD03/DX15",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "DL01/DD03/DX16",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "DL01/DD04/DX01",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "DL01/DD04/DX03",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "DL01/DD04/DX04",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "DL01/DD04/DX05",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "DL01/DD04/DX06",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "DL01/DD04/DX07",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "DL01/DD04/DX08",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "DL01/DD04/DX10",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "DL01/DD04/DX11",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "DL01/DD04/DX12",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "DL01/DD04/DX14",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "DL01/DD04/DX15",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "DL01/DD04/DX16",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "DL01/DD05/DX01",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "DL01/DD05/DX02",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "DL01/DD05/DX04",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "DL01/DD05/DX05",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "DL01/DD05/DX06",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "DL01/DD05/DX07",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "DL01/DD05/DX08",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "DL01/DD05/DX09",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "DL01/DD05/DX11",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "DL01/DD05/DX14",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "DL01/DD05/DX15",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "DL01/DD05/DX16",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "DL01/DD06/DX01",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "DL01/DD06/DX02",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "DL01/DD06/DX04",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "DL01/DD06/DX05",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "DL01/DD06/DX06",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "DL01/DD06/DX07",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "DL01/DD06/DX08",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "DL01/DD06/DX09",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "DL01/DD06/DX11",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "DL01/DD06/DX14",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "DL01/DD06/DX15",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "DL01/DD06/DX16",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "DS01/DS01-Multipurpose/DX01",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "DS01/DS01-Multipurpose/DX02",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "DS01/DS01-Multipurpose/DX03",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "DS01/DS01-Multipurpose/DX04",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "DS01/DS01-Multipurpose/DX06",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "DS01/DS01-Multipurpose/DX07",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "DS01/DS01-Multipurpose/DX09",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "DS01/DS01-Multipurpose/DX10",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "DS01/DS01-Multipurpose/DX11",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "DS01/DS01-Multipurpose/DX12",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "DS01/DS01-Multipurpose/DX15",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "DS01/DS01-Multipurpose/DX16",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "DS02/DS02-Multipurpose/DX02",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "DS02/DS02-Multipurpose/DX03",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "DS02/DS02-Multipurpose/DX04",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "DS02/DS02-Multipurpose/DX06",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "DS02/DS02-Multipurpose/DX07",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "DS02/DS02-Multipurpose/DX08",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "DS02/DS02-Multipurpose/DX09",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "DS02/DS02-Multipurpose/DX10",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "DS02/DS02-Multipurpose/DX11",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "DS02/DS02-Multipurpose/DX12",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "DS02/DS02-Multipurpose/DX15",
        credits: "3.0"
    },
    {
        label: "PH - 1120 General Physics-Electricity And Magnetism",
        section: "DS02/DS02-Multipurpose/DX16",
        credits: "3.0"
    },
    {
        label: "PH - 1121 Principles Of Physics-Electricity And Magnetism",
        section: "Interest List-B Term",
        credits: "0.0"
    },
    {
        label: "PH - 1121 Principles Of Physics-Electricity And Magnetism",
        section: "BL01/BX02",
        credits: "0.0"
    },
    {
        label: "PH - 1121 Principles Of Physics-Electricity And Magnetism",
        section: "BL01/BX03",
        credits: "0.0"
    },
    {
        label: "PH - 1121 Principles Of Physics-Electricity And Magnetism",
        section: "BL01/BX04",
        credits: "0.0"
    },
    {
        label: "PH - 1121 Principles Of Physics-Electricity And Magnetism",
        section: "BL01/BX06",
        credits: "0.0"
    },
    {
        label: "PH - 1121 Principles Of Physics-Electricity And Magnetism",
        section: "BL01/BX07",
        credits: "0.0"
    },
    {
        label: "PH - 1121 Principles Of Physics-Electricity And Magnetism",
        section: "BL01/BX08",
        credits: "0.0"
    },
    {
        label: "PH - 1121 Principles Of Physics-Electricity And Magnetism",
        section: "BL01/BX10",
        credits: "0.0"
    },
    {
        label: "PH - 1121 Principles Of Physics-Electricity And Magnetism",
        section: "BL01/BX11",
        credits: "0.0"
    },
    {
        label: "PH - 1121 Principles Of Physics-Electricity And Magnetism",
        section: "BL01/BX12",
        credits: "0.0"
    },
    {
        label: "PH - 1121 Principles Of Physics-Electricity And Magnetism",
        section: "BL01/BX14",
        credits: "0.0"
    },
    {
        label: "PH - 1121 Principles Of Physics-Electricity And Magnetism",
        section: "BL01/BX15",
        credits: "0.0"
    },
    {
        label: "PH - 1121 Principles Of Physics-Electricity And Magnetism",
        section: "BL01/BX16",
        credits: "0.0"
    },
    {
        label: "PH - 1121 Principles Of Physics-Electricity And Magnetism",
        section: "BL01/BX18",
        credits: "0.0"
    },
    {
        label: "PH - 1121 Principles Of Physics-Electricity And Magnetism",
        section: "BL01/BX19",
        credits: "0.0"
    },
    {
        label: "PH - 1121 Principles Of Physics-Electricity And Magnetism",
        section: "BL01/BX20",
        credits: "0.0"
    },
    {
        label: "PH - 1121 Principles Of Physics-Electricity And Magnetism",
        section: "BL01/BX22",
        credits: "0.0"
    },
    {
        label: "PH - 1121 Principles Of Physics-Electricity And Magnetism",
        section: "BL01/BX23",
        credits: "0.0"
    },
    {
        label: "PH - 1121 Principles Of Physics-Electricity And Magnetism",
        section: "BL01/BX25",
        credits: "0.0"
    },
    {
        label: "PH - 1121 Principles Of Physics-Electricity And Magnetism",
        section: "BL01/BX26",
        credits: "0.0"
    },
    {
        label: "PH - 1121 Principles Of Physics-Electricity And Magnetism",
        section: "BL01/BX27",
        credits: "0.0"
    },
    {
        label: "PH - 1121 Principles Of Physics-Electricity And Magnetism",
        section: "BL01/BX29",
        credits: "0.0"
    },
    {
        label: "PH - 1121 Principles Of Physics-Electricity And Magnetism",
        section: "BL01/BX30",
        credits: "0.0"
    },
    {
        label: "PH - 1121 Principles Of Physics-Electricity And Magnetism",
        section: "BL01/BX31",
        credits: "0.0"
    },
    {
        label: "PH - 1121 Principles Of Physics-Electricity And Magnetism",
        section: "BL01/BX33",
        credits: "0.0"
    },
    {
        label: "PH - 1121 Principles Of Physics-Electricity And Magnetism",
        section: "BL01/BX34",
        credits: "0.0"
    },
    {
        label: "PH - 1121 Principles Of Physics-Electricity And Magnetism",
        section: "BL01/BX35",
        credits: "0.0"
    },
    {
        label: "PH - 1121 Principles Of Physics-Electricity And Magnetism",
        section: "BL01/BX37",
        credits: "0.0"
    },
    {
        label: "PH - 1121 Principles Of Physics-Electricity And Magnetism",
        section: "BL01/BX38",
        credits: "0.0"
    },
    {
        label: "PH - 1121 Principles Of Physics-Electricity And Magnetism",
        section: "BL02/BX01",
        credits: "0.0"
    },
    {
        label: "PH - 1121 Principles Of Physics-Electricity And Magnetism",
        section: "BL02/BX02",
        credits: "0.0"
    },
    {
        label: "PH - 1121 Principles Of Physics-Electricity And Magnetism",
        section: "BL02/BX03",
        credits: "0.0"
    },
    {
        label: "PH - 1121 Principles Of Physics-Electricity And Magnetism",
        section: "BL02/BX05",
        credits: "0.0"
    },
    {
        label: "PH - 1121 Principles Of Physics-Electricity And Magnetism",
        section: "BL02/BX06",
        credits: "0.0"
    },
    {
        label: "PH - 1121 Principles Of Physics-Electricity And Magnetism",
        section: "BL02/BX07",
        credits: "0.0"
    },
    {
        label: "PH - 1121 Principles Of Physics-Electricity And Magnetism",
        section: "BL02/BX09",
        credits: "0.0"
    },
    {
        label: "PH - 1121 Principles Of Physics-Electricity And Magnetism",
        section: "BL02/BX10",
        credits: "0.0"
    },
    {
        label: "PH - 1121 Principles Of Physics-Electricity And Magnetism",
        section: "BL02/BX11",
        credits: "0.0"
    },
    {
        label: "PH - 1121 Principles Of Physics-Electricity And Magnetism",
        section: "BL02/BX13",
        credits: "0.0"
    },
    {
        label: "PH - 1121 Principles Of Physics-Electricity And Magnetism",
        section: "BL02/BX14",
        credits: "0.0"
    },
    {
        label: "PH - 1121 Principles Of Physics-Electricity And Magnetism",
        section: "BL02/BX15",
        credits: "0.0"
    },
    {
        label: "PH - 1121 Principles Of Physics-Electricity And Magnetism",
        section: "BL02/BX17",
        credits: "0.0"
    },
    {
        label: "PH - 1121 Principles Of Physics-Electricity And Magnetism",
        section: "BL02/BX18",
        credits: "0.0"
    },
    {
        label: "PH - 1121 Principles Of Physics-Electricity And Magnetism",
        section: "BL02/BX19",
        credits: "0.0"
    },
    {
        label: "PH - 1121 Principles Of Physics-Electricity And Magnetism",
        section: "BL02/BX21",
        credits: "0.0"
    },
    {
        label: "PH - 1121 Principles Of Physics-Electricity And Magnetism",
        section: "BL02/BX22",
        credits: "0.0"
    },
    {
        label: "PH - 1121 Principles Of Physics-Electricity And Magnetism",
        section: "BL02/BX23",
        credits: "0.0"
    },
    {
        label: "PH - 1121 Principles Of Physics-Electricity And Magnetism",
        section: "BL02/BX25",
        credits: "0.0"
    },
    {
        label: "PH - 1121 Principles Of Physics-Electricity And Magnetism",
        section: "BL02/BX26",
        credits: "0.0"
    },
    {
        label: "PH - 1121 Principles Of Physics-Electricity And Magnetism",
        section: "BL02/BX28",
        credits: "0.0"
    },
    {
        label: "PH - 1121 Principles Of Physics-Electricity And Magnetism",
        section: "BL02/BX29",
        credits: "0.0"
    },
    {
        label: "PH - 1121 Principles Of Physics-Electricity And Magnetism",
        section: "BL02/BX30",
        credits: "0.0"
    },
    {
        label: "PH - 1121 Principles Of Physics-Electricity And Magnetism",
        section: "BL02/BX33",
        credits: "0.0"
    },
    {
        label: "PH - 1121 Principles Of Physics-Electricity And Magnetism",
        section: "BL02/BX34",
        credits: "0.0"
    },
    {
        label: "PH - 1121 Principles Of Physics-Electricity And Magnetism",
        section: "BL02/BX36",
        credits: "0.0"
    },
    {
        label: "PH - 1121 Principles Of Physics-Electricity And Magnetism",
        section: "BL02/BX37",
        credits: "0.0"
    },
    {
        label: "PH - 1121 Principles Of Physics-Electricity And Magnetism",
        section: "BL02/BX38",
        credits: "0.0"
    },
    {
        label: "PH - 1121 Principles Of Physics-Electricity And Magnetism",
        section: "Interest List-D Term",
        credits: "0.0"
    },
    {
        label: "PH - 1121 Principles Of Physics-Electricity And Magnetism",
        section: "DL01/DD01/DX01",
        credits: "0.0"
    },
    {
        label: "PH - 1121 Principles Of Physics-Electricity And Magnetism",
        section: "DL01/DD01/DX02",
        credits: "0.0"
    },
    {
        label: "PH - 1130 Modern Physics",
        section: "Interest List-B Term",
        credits: "3.0"
    },
    {
        label: "PH - 1130 Modern Physics",
        section: "BL01/BD01/BX01",
        credits: "3.0"
    },
    {
        label: "PH - 1130 Modern Physics",
        section: "BL01/BD01/BX02",
        credits: "3.0"
    },
    {
        label: "PH - 1130 Modern Physics",
        section: "BL01/BD01/BX03",
        credits: "3.0"
    },
    {
        label: "PH - 1130 Modern Physics",
        section: "BL01/BD01/BX04",
        credits: "3.0"
    },
    {
        label: "PH - 1130 Modern Physics",
        section: "Interest List-D Term",
        credits: "3.0"
    },
    {
        label: "PH - 1130 Modern Physics",
        section: "DL01/DD01/DX01",
        credits: "3.0"
    },
    {
        label: "PH - 1130 Modern Physics",
        section: "DL01/DD01/DX02",
        credits: "3.0"
    },
    {
        label: "PH - 1130 Modern Physics",
        section: "DL01/DD01/DX03",
        credits: "3.0"
    },
    {
        label: "PH - 1130 Modern Physics",
        section: "DL01/DD01/DX04",
        credits: "3.0"
    },
    {
        label: "PH - 1140 Oscillations, And Waves",
        section: "AL01/AX01",
        credits: "3.0"
    },
    {
        label: "PH - 1140 Oscillations, And Waves",
        section: "AL01/AX02",
        credits: "3.0"
    },
    {
        label: "PH - 1140 Oscillations, And Waves",
        section: "AL01/AX03",
        credits: "3.0"
    },
    {
        label: "PH - 1140 Oscillations, And Waves",
        section: "Interest List-C Term",
        credits: "3.0"
    },
    {
        label: "PH - 1140 Oscillations, And Waves",
        section: "CL01/CD01/CX01",
        credits: "3.0"
    },
    {
        label: "PH - 1140 Oscillations, And Waves",
        section: "CL01/CD01/CX02",
        credits: "3.0"
    },
    {
        label: "PH - 1140 Oscillations, And Waves",
        section: "CL01/CD01/CX04",
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
        label: "PH - 2601 Photonics Laboratory",
        section: "C02",
        credits: "3.0"
    },
    {
        label: "PH - 2651 Intermediate Physics Laboratory",
        section: "Interest List-D Term",
        credits: "0.0"
    },
    {
        label: "PH - 2651 Intermediate Physics Laboratory",
        section: "DL01/DX01",
        credits: "0.0"
    },
    {
        label: "PH - 2651 Intermediate Physics Laboratory",
        section: "DL01/DX02",
        credits: "0.0"
    },
    {
        label: "PH - 2651 Intermediate Physics Laboratory",
        section: "DL01/DX03",
        credits: "0.0"
    },
    {
        label: "PH - 2651 Intermediate Physics Laboratory",
        section: "DL01/DX04",
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
        label: "PH - 444X Quantum Optics Laboratory",
        section: "BX04",
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
        label: "PH - 561 Atomic Force Microscopy",
        section: "SL01/SX02",
        credits: "3.0"
    },
    {
        label: "PH - 561 Atomic Force Microscopy",
        section: "SL01/SX03",
        credits: "3.0"
    },
    {
        label: "PH - 561 Atomic Force Microscopy",
        section: "SL01/SX04",
        credits: "3.0"
    },
    {
        label: "PH - 571 Biophysics Journal Club",
        section: "F01",
        credits: "1.0"
    },
    {
        label: "PH - 571 Biophysics Journal Club",
        section: "S01",
        credits: "1.0"
    },
    {
        label: "PH - 580 Graduate Seminar",
        section: "F01",
        credits: "0.0"
    },
    {
        label: "PH - 580 Graduate Seminar",
        section: "S01",
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
        label: "PH - 597 Special Topics",
        section: "F02 - ST: Group Theory",
        credits: "1.0"
    },
    {
        label: "PH - 597 Special Topics",
        section: "S01 - ST: Physics Education Research Journal Club",
        credits: "1.0"
    },
    {
        label: "PH - 597 Special Topics",
        section: "S02 - ST: Quantum Field Theory",
        credits: "1.0"
    },
    {
        label: "PSY - 1400 Introduction To Psychological Science",
        section: "B01",
        credits: "3.0"
    },
    {
        label: "PSY - 1400 Introduction To Psychological Science",
        section: "D01",
        credits: "3.0"
    },
    {
        label: "PSY - 1504 Strategies For Improving Cognitive Skills",
        section: "B01",
        credits: "3.0"
    },
    {
        label: "PSY - 1504 Strategies For Improving Cognitive Skills",
        section: "D01",
        credits: "3.0"
    },
    {
        label: "PSY - 1800 Special Topics In Psychological Science",
        section: "A01 - ST In Psychological Science: Psychology of Social Media Use",
        credits: "3.0"
    },
    {
        label: "PSY - 1800 Special Topics In Psychological Science",
        section: "D01 - ST In Psychological Science: Science and Practice of Well-Being: Pathways to Flourishing",
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
        label: "PSY - 2404 Developmental Psychology",
        section: "D01",
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
        label: "PSY - 2412 Mental Health",
        section: "C01",
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
        label: "PY - 1731 Introduction To Philosophy And Religion",
        section: "A02",
        credits: "3.0"
    },
    {
        label: "PY - 1731 Introduction To Philosophy And Religion",
        section: "A03",
        credits: "3.0"
    },
    {
        label: "PY - 1731 Introduction To Philosophy And Religion",
        section: "A04",
        credits: "3.0"
    },
    {
        label: "PY - 1731 Introduction To Philosophy And Religion",
        section: "B01",
        credits: "3.0"
    },
    {
        label: "PY - 1731 Introduction To Philosophy And Religion",
        section: "B02",
        credits: "3.0"
    },
    {
        label: "PY - 1731 Introduction To Philosophy And Religion",
        section: "B03",
        credits: "3.0"
    },
    {
        label: "PY - 1731 Introduction To Philosophy And Religion",
        section: "C01",
        credits: "3.0"
    },
    {
        label: "PY - 1731 Introduction To Philosophy And Religion",
        section: "C03",
        credits: "3.0"
    },
    {
        label: "PY - 1731 Introduction To Philosophy And Religion",
        section: "D01",
        credits: "3.0"
    },
    {
        label: "PY - 1731 Introduction To Philosophy And Religion",
        section: "D02",
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
        label: "PY - 2713 Bioethics",
        section: "C01",
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
        label: "PY - 2731 Ethics",
        section: "B01",
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
        label: "PY - 3711 Topics In Philosophy",
        section: "D01 - Topics In Philosophy: Marxism and Capitalism",
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
        label: "RBE - 1001 Introduction To Robotics",
        section: "AL01/AX02",
        credits: "3.0"
    },
    {
        label: "RBE - 1001 Introduction To Robotics",
        section: "BL01/BX01",
        credits: "3.0"
    },
    {
        label: "RBE - 1001 Introduction To Robotics",
        section: "BL01/BX02",
        credits: "3.0"
    },
    {
        label: "RBE - 1001 Introduction To Robotics",
        section: "Interest List-C Term",
        credits: "3.0"
    },
    {
        label: "RBE - 1001 Introduction To Robotics",
        section: "CL01/CX01",
        credits: "3.0"
    },
    {
        label: "RBE - 1001 Introduction To Robotics",
        section: "CL01/CX02",
        credits: "3.0"
    },
    {
        label: "RBE - 1001 Introduction To Robotics",
        section: "Interest List-D Term",
        credits: "3.0"
    },
    {
        label: "RBE - 1001 Introduction To Robotics",
        section: "DL01/DX01",
        credits: "3.0"
    },
    {
        label: "RBE - 1001 Introduction To Robotics",
        section: "DL01/DX02",
        credits: "3.0"
    },
    {
        label: "RBE - 100X Programming for Robotics",
        section: "AL01/AX01",
        credits: "3.0"
    },
    {
        label: "RBE - 100X Programming for Robotics",
        section: "AL01/AX02",
        credits: "3.0"
    },
    {
        label: "RBE - 100X Programming for Robotics",
        section: "BL01/BX01",
        credits: "3.0"
    },
    {
        label: "RBE - 100X Programming for Robotics",
        section: "BL01/BX02",
        credits: "3.0"
    },
    {
        label: "RBE - 2001 Unified Robotics I: Mechanical Applications in Robotics",
        section: "AL01/AX01",
        credits: "3.0"
    },
    {
        label: "RBE - 2001 Unified Robotics I: Mechanical Applications in Robotics",
        section: "AL01/AX02",
        credits: "3.0"
    },
    {
        label: "RBE - 2001 Unified Robotics I: Mechanical Applications in Robotics",
        section: "AL01/AX03",
        credits: "3.0"
    },
    {
        label: "RBE - 2001 Unified Robotics I: Mechanical Applications in Robotics",
        section: "CL01/CX01",
        credits: "3.0"
    },
    {
        label: "RBE - 2001 Unified Robotics I: Mechanical Applications in Robotics",
        section: "CL01/CX02",
        credits: "3.0"
    },
    {
        label: "RBE - 2001 Unified Robotics I: Mechanical Applications in Robotics",
        section: "CL01/CX03",
        credits: "3.0"
    },
    {
        label: "RBE - 2002 Unified Robotics II: Sensing and Perception in Robotics",
        section: "BL01/BX01",
        credits: "3.0"
    },
    {
        label: "RBE - 2002 Unified Robotics II: Sensing and Perception in Robotics",
        section: "BL01/BX02",
        credits: "3.0"
    },
    {
        label: "RBE - 2002 Unified Robotics II: Sensing and Perception in Robotics",
        section: "DL01/DX01",
        credits: "3.0"
    },
    {
        label: "RBE - 2002 Unified Robotics II: Sensing and Perception in Robotics",
        section: "DL01/DX02",
        credits: "3.0"
    },
    {
        label: "RBE - 2002 Unified Robotics II: Sensing and Perception in Robotics",
        section: "DL01/DX03",
        credits: "3.0"
    },
    {
        label: "RBE - 200X Embedded Systems for Robotics",
        section: "AL01/AX01",
        credits: "3.0"
    },
    {
        label: "RBE - 200X Embedded Systems for Robotics",
        section: "AL01/AX02",
        credits: "3.0"
    },
    {
        label: "RBE - 200X Embedded Systems for Robotics",
        section: "CL01/CX01",
        credits: "3.0"
    },
    {
        label: "RBE - 200X Embedded Systems for Robotics",
        section: "CL01/CX02",
        credits: "3.0"
    },
    {
        label: "RBE - 3001 Unified Robotics III",
        section: "AL01/AX01",
        credits: "3.0"
    },
    {
        label: "RBE - 3001 Unified Robotics III",
        section: "AL01/AX02",
        credits: "3.0"
    },
    {
        label: "RBE - 3001 Unified Robotics III",
        section: "CL01/CX01",
        credits: "3.0"
    },
    {
        label: "RBE - 3001 Unified Robotics III",
        section: "CL01/CX02",
        credits: "3.0"
    },
    {
        label: "RBE - 3002 Unified Robotics IV",
        section: "BL01/BX01",
        credits: "3.0"
    },
    {
        label: "RBE - 3002 Unified Robotics IV",
        section: "BL01/BX02",
        credits: "3.0"
    },
    {
        label: "RBE - 3002 Unified Robotics IV",
        section: "DL01/DX01",
        credits: "3.0"
    },
    {
        label: "RBE - 3002 Unified Robotics IV",
        section: "DL01/DX02",
        credits: "3.0"
    },
    {
        label: "RBE - 3100 Social Implications Of Robotics",
        section: "A01",
        credits: "3.0"
    },
    {
        label: "RBE - 3100 Social Implications Of Robotics",
        section: "C01",
        credits: "3.0"
    },
    {
        label: "RBE - 4322 Modeling And Analysis Of Mechatronic Systems.",
        section: "AL01/AX01",
        credits: "3.0"
    },
    {
        label: "RBE - 4322 Modeling And Analysis Of Mechatronic Systems.",
        section: "CL01/CX01",
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
        label: "RBE - 4815 Industrial Robotics",
        section: "DL01/DX01",
        credits: "3.0"
    },
    {
        label: "RBE - 500 Foundations Of Robotics",
        section: "F02",
        credits: "3.0"
    },
    {
        label: "RBE - 500 Foundations Of Robotics",
        section: "F03",
        credits: "3.0"
    },
    {
        label: "RBE - 500 Foundations Of Robotics",
        section: "S03",
        credits: "3.0"
    },
    {
        label: "RBE - 501 Robot Dynamics",
        section: "F02",
        credits: "3.0"
    },
    {
        label: "RBE - 501 Robot Dynamics",
        section: "S01",
        credits: "3.0"
    },
    {
        label: "RBE - 501 Robot Dynamics",
        section: "S02",
        credits: "3.0"
    },
    {
        label: "RBE - 502 Robot Control",
        section: "F02",
        credits: "3.0"
    },
    {
        label: "RBE - 502 Robot Control",
        section: "S01",
        credits: "3.0"
    },
    {
        label: "RBE - 502 Robot Control",
        section: "S02",
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
        label: "RBE - 511 Swarm Intelligence",
        section: "S01",
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
        label: "RBE - 549 Computer Vision",
        section: "S02",
        credits: "3.0"
    },
    {
        label: "RBE - 550 Motion Planning",
        section: "F01",
        credits: "3.0"
    },
    {
        label: "RBE - 550 Motion Planning",
        section: "F02",
        credits: "3.0"
    },
    {
        label: "RBE - 550 Motion Planning",
        section: "S01",
        credits: "3.0"
    },
    {
        label: "RBE - 550 Motion Planning",
        section: "S02",
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
        label: "RBE - 577 Machine Learning for Robotics",
        section: "S01",
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
        label: "RBE - 594 Capstone Project Experience In Robotics Engineering",
        section: "S01",
        credits: "3.0"
    },
    {
        label: "RBE - 594 Capstone Project Experience In Robotics Engineering",
        section: "S02",
        credits: "3.0"
    },
    {
        label: "RBE - 595 Special Topics",
        section: "A01",
        credits: "2.0"
    },
    {
        label: "RBE - 595 Special Topics",
        section: "BL01/BX01 - ST: Robots for Recycling",
        credits: "2.0"
    },
    {
        label: "RBE - 595 Special Topics",
        section: "C01 - ST: Medical Imaging and Instrumentation",
        credits: "2.0"
    },
    {
        label: "RBE - 595 Special Topics",
        section: "F03 - ST: Fundamentals of Artificial Intelligence and Robotics for Autonomous Vehicle Applications",
        credits: "2.0"
    },
    {
        label: "RBE - 595 Special Topics",
        section: "FL01/FX01 - ST: Vision-based Robotic Manipulation",
        credits: "2.0"
    },
    {
        label: "RBE - 595 Special Topics",
        section: "S01 - ST: Advanced Robot Navigation",
        credits: "2.0"
    },
    {
        label: "RBE - 595 Special Topics",
        section: "S02 - ST: Reinforcement Learning",
        credits: "2.0"
    },
    {
        label: "RE - 1731 Introduction To Philosophy And Religion",
        section: "A01",
        credits: "3.0"
    },
    {
        label: "RE - 1731 Introduction To Philosophy And Religion",
        section: "A02",
        credits: "3.0"
    },
    {
        label: "RE - 1731 Introduction To Philosophy And Religion",
        section: "A03",
        credits: "3.0"
    },
    {
        label: "RE - 1731 Introduction To Philosophy And Religion",
        section: "A04",
        credits: "3.0"
    },
    {
        label: "RE - 1731 Introduction To Philosophy And Religion",
        section: "B01",
        credits: "3.0"
    },
    {
        label: "RE - 1731 Introduction To Philosophy And Religion",
        section: "B02",
        credits: "3.0"
    },
    {
        label: "RE - 1731 Introduction To Philosophy And Religion",
        section: "B03",
        credits: "3.0"
    },
    {
        label: "RE - 1731 Introduction To Philosophy And Religion",
        section: "C01",
        credits: "3.0"
    },
    {
        label: "RE - 1731 Introduction To Philosophy And Religion",
        section: "C03",
        credits: "3.0"
    },
    {
        label: "RE - 1731 Introduction To Philosophy And Religion",
        section: "D01",
        credits: "3.0"
    },
    {
        label: "RE - 1731 Introduction To Philosophy And Religion",
        section: "D02",
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
        label: "RE - 2726 Global Religions",
        section: "C01",
        credits: "3.0"
    },
    {
        label: "RE - 2731 Ethics",
        section: "A01",
        credits: "3.0"
    },
    {
        label: "RE - 2731 Ethics",
        section: "B01",
        credits: "3.0"
    },
    {
        label: "RE - 3711 Topics In Philosophy",
        section: "C01 - Topics In Philosophy: Justice and Responsibility",
        credits: "3.0"
    },
    {
        label: "RE - 3711 Topics In Philosophy",
        section: "D01 - Topics In Philosophy: Marxism and Capitalism",
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
        label: "SP - 1524 Elementary Spanish II",
        section: "D02",
        credits: "3.0"
    },
    {
        label: "SP - 2521 Intermediate Spanish I",
        section: "A01",
        credits: "3.0"
    },
    {
        label: "SP - 2521 Intermediate Spanish I",
        section: "A02",
        credits: "3.0"
    },
    {
        label: "SP - 2521 Intermediate Spanish I",
        section: "A03",
        credits: "3.0"
    },
    {
        label: "SP - 2521 Intermediate Spanish I",
        section: "A04",
        credits: "3.0"
    },
    {
        label: "SP - 2521 Intermediate Spanish I",
        section: "A05",
        credits: "3.0"
    },
    {
        label: "SP - 2522 Intermediate Spanish II",
        section: "B01",
        credits: "3.0"
    },
    {
        label: "SP - 2522 Intermediate Spanish II",
        section: "B02",
        credits: "3.0"
    },
    {
        label: "SP - 2522 Intermediate Spanish II",
        section: "B03",
        credits: "3.0"
    },
    {
        label: "SP - 2522 Intermediate Spanish II",
        section: "B04",
        credits: "3.0"
    },
    {
        label: "SP - 2522 Intermediate Spanish II",
        section: "B05",
        credits: "3.0"
    },
    {
        label: "SP - 3521 Advanced Spanish I",
        section: "C01",
        credits: "3.0"
    },
    {
        label: "SP - 3521 Advanced Spanish I",
        section: "C02",
        credits: "3.0"
    },
    {
        label: "SP - 3521 Advanced Spanish I",
        section: "C03",
        credits: "3.0"
    },
    {
        label: "SP - 3521 Advanced Spanish I",
        section: "C04",
        credits: "3.0"
    },
    {
        label: "SP - 3521 Advanced Spanish I",
        section: "C05",
        credits: "3.0"
    },
    {
        label: "SP - 3522 Advanced Spanish II",
        section: "D01",
        credits: "3.0"
    },
    {
        label: "SP - 3522 Advanced Spanish II",
        section: "D02",
        credits: "3.0"
    },
    {
        label: "SP - 3522 Advanced Spanish II",
        section: "D03",
        credits: "3.0"
    },
    {
        label: "SP - 3522 Advanced Spanish II",
        section: "D04",
        credits: "3.0"
    },
    {
        label: "SP - 3522 Advanced Spanish II",
        section: "D05",
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
        label: "SYS - 501 Concepts Of Systems Engineering",
        section: "F02",
        credits: "3.0"
    },
    {
        label: "SYS - 501 Concepts Of Systems Engineering",
        section: "S01",
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
        label: "SYS - 579 Special Topics",
        section: "F03 - ST: Reliability Engineering",
        credits: "3.0"
    },
    {
        label: "SYS - 585 Systems Engineering Capstone Experience",
        section: "F01",
        credits: "3.0"
    },
    {
        label: "SYS - 585 Systems Engineering Capstone Experience",
        section: "S01",
        credits: "3.0"
    },
    {
        label: "TH - 1221 Introduction to Theatre on Page and Stage",
        section: "A01",
        credits: "3.0"
    },
    {
        label: "TH - 1221 Introduction to Theatre on Page and Stage",
        section: "C01",
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
        label: "TH - 2100 Fundamentals of Acting",
        section: "C01",
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
        label: "WR - 1010 Elements Of Writing",
        section: "A02",
        credits: "3.0"
    },
    {
        label: "WR - 1010 Elements Of Writing",
        section: "B01",
        credits: "3.0"
    },
    {
        label: "WR - 1010 Elements Of Writing",
        section: "B02",
        credits: "3.0"
    },
    {
        label: "WR - 1010 Elements Of Writing",
        section: "B03",
        credits: "3.0"
    },
    {
        label: "WR - 1010 Elements Of Writing",
        section: "C01",
        credits: "3.0"
    },
    {
        label: "WR - 1010 Elements Of Writing",
        section: "C02",
        credits: "3.0"
    },
    {
        label: "WR - 1010 Elements Of Writing",
        section: "C03",
        credits: "3.0"
    },
    {
        label: "WR - 1010 Elements Of Writing",
        section: "D01",
        credits: "3.0"
    },
    {
        label: "WR - 1011 Writing About Science And Technology",
        section: "A01",
        credits: "3.0"
    },
    {
        label: "WR - 1011 Writing About Science And Technology",
        section: "A02",
        credits: "3.0"
    },
    {
        label: "WR - 1011 Writing About Science And Technology",
        section: "B01",
        credits: "3.0"
    },
    {
        label: "WR - 1011 Writing About Science And Technology",
        section: "C01",
        credits: "3.0"
    },
    {
        label: "WR - 1011 Writing About Science And Technology",
        section: "D01",
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
        label: "WR - 2010 Elements Of Style",
        section: "B02",
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
        label: "WR - 2210 Business Writing And Communication",
        section: "B01",
        credits: "3.0"
    },
    {
        label: "WR - 2210 Business Writing And Communication",
        section: "D01",
        credits: "3.0"
    },
    {
        label: "WR - 2310 Visual Rhetoric",
        section: "B01",
        credits: "3.0"
    },
    {
        label: "WR - 2310 Visual Rhetoric",
        section: "C01",
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
        label: "WR - 2450 Narrative Design for Interactive Media and Games",
        section: "B01",
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
        label: "WR - 3214 Writing About Disease And Public Health",
        section: "C01",
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
        label: "WPE - 1008 Rowing For Fitness",
        section: "A02",
        credits: "0.75"
    },
    {
        label: "WPE - 1008 Rowing For Fitness",
        section: "B01",
        credits: "0.75"
    },
    {
        label: "WPE - 1008 Rowing For Fitness",
        section: "C01",
        credits: "0.75"
    },
    {
        label: "WPE - 1008 Rowing For Fitness",
        section: "D01",
        credits: "0.75"
    },
    {
        label: "WPE - 1008 Rowing For Fitness",
        section: "D02",
        credits: "0.75"
    },
    {
        label: "WPE - 1009 Walking For Fitness",
        section: "A01",
        credits: "0.75"
    },
    {
        label: "WPE - 1009 Walking For Fitness",
        section: "A02",
        credits: "0.75"
    },
    {
        label: "WPE - 1009 Walking For Fitness",
        section: "B01",
        credits: "0.75"
    },
    {
        label: "WPE - 1009 Walking For Fitness",
        section: "B02",
        credits: "0.75"
    },
    {
        label: "WPE - 1009 Walking For Fitness",
        section: "B03",
        credits: "0.75"
    },
    {
        label: "WPE - 1009 Walking For Fitness",
        section: "B04",
        credits: "0.75"
    },
    {
        label: "WPE - 1009 Walking For Fitness",
        section: "C01",
        credits: "0.75"
    },
    {
        label: "WPE - 1009 Walking For Fitness",
        section: "C02",
        credits: "0.75"
    },
    {
        label: "WPE - 1009 Walking For Fitness",
        section: "C03",
        credits: "0.75"
    },
    {
        label: "WPE - 1009 Walking For Fitness",
        section: "D03",
        credits: "0.75"
    },
    {
        label: "WPE - 1011 Touch Football",
        section: "A02",
        credits: "0.75"
    },
    {
        label: "WPE - 1011 Touch Football",
        section: "D01",
        credits: "0.75"
    },
    {
        label: "WPE - 1011 Touch Football",
        section: "D02",
        credits: "0.75"
    },
    {
        label: "WPE - 1012 Basketball",
        section: "A01",
        credits: "0.75"
    },
    {
        label: "WPE - 1012 Basketball",
        section: "A02",
        credits: "0.75"
    },
    {
        label: "WPE - 1012 Basketball",
        section: "B01",
        credits: "0.75"
    },
    {
        label: "WPE - 1012 Basketball",
        section: "B02",
        credits: "0.75"
    },
    {
        label: "WPE - 1012 Basketball",
        section: "C01",
        credits: "0.75"
    },
    {
        label: "WPE - 1012 Basketball",
        section: "C02",
        credits: "0.75"
    },
    {
        label: "WPE - 1012 Basketball",
        section: "C03",
        credits: "0.75"
    },
    {
        label: "WPE - 1012 Basketball",
        section: "D01",
        credits: "0.75"
    },
    {
        label: "WPE - 1012 Basketball",
        section: "D02",
        credits: "0.75"
    },
    {
        label: "WPE - 1013 Softball",
        section: "A01",
        credits: "0.75"
    },
    {
        label: "WPE - 1013 Softball",
        section: "A02",
        credits: "0.75"
    },
    {
        label: "WPE - 1013 Softball",
        section: "D01",
        credits: "0.75"
    },
    {
        label: "WPE - 1013 Softball",
        section: "D02",
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
        label: "WPE - 1018 Volleyball",
        section: "A02",
        credits: "0.75"
    },
    {
        label: "WPE - 1018 Volleyball",
        section: "B01",
        credits: "0.75"
    },
    {
        label: "WPE - 1018 Volleyball",
        section: "B02",
        credits: "0.75"
    },
    {
        label: "WPE - 1018 Volleyball",
        section: "C01",
        credits: "0.75"
    },
    {
        label: "WPE - 1018 Volleyball",
        section: "C02",
        credits: "0.75"
    },
    {
        label: "WPE - 1018 Volleyball",
        section: "D01",
        credits: "0.75"
    },
    {
        label: "WPE - 1018 Volleyball",
        section: "D02",
        credits: "0.75"
    },
    {
        label: "WPE - 1019 Soccer",
        section: "A01",
        credits: "0.75"
    },
    {
        label: "WPE - 1019 Soccer",
        section: "A02",
        credits: "0.75"
    },
    {
        label: "WPE - 1019 Soccer",
        section: "B02",
        credits: "0.75"
    },
    {
        label: "WPE - 1019 Soccer",
        section: "C01",
        credits: "0.75"
    },
    {
        label: "WPE - 1019 Soccer",
        section: "D01",
        credits: "0.75"
    },
    {
        label: "WPE - 1054 Plyometrics",
        section: "A01",
        credits: "0.75"
    },
    {
        label: "WPE - 1054 Plyometrics",
        section: "A02",
        credits: "0.75"
    },
    {
        label: "WPE - 1054 Plyometrics",
        section: "A04",
        credits: "0.75"
    },
    {
        label: "WPE - 1054 Plyometrics",
        section: "B01",
        credits: "0.75"
    },
    {
        label: "WPE - 1054 Plyometrics",
        section: "B02",
        credits: "0.75"
    },
    {
        label: "WPE - 1054 Plyometrics",
        section: "B03",
        credits: "0.75"
    },
    {
        label: "WPE - 1054 Plyometrics",
        section: "B04",
        credits: "0.75"
    },
    {
        label: "WPE - 1054 Plyometrics",
        section: "C01",
        credits: "0.75"
    },
    {
        label: "WPE - 1054 Plyometrics",
        section: "C03",
        credits: "0.75"
    },
    {
        label: "WPE - 1054 Plyometrics",
        section: "D01",
        credits: "0.75"
    },
    {
        label: "WPE - 1054 Plyometrics",
        section: "D02",
        credits: "0.75"
    },
    {
        label: "WPE - 1054 Plyometrics",
        section: "D03",
        credits: "0.75"
    },
    {
        label: "WPE - 1055 Physical Conditioning",
        section: "A01",
        credits: "0.75"
    },
    {
        label: "WPE - 1055 Physical Conditioning",
        section: "A02",
        credits: "0.75"
    },
    {
        label: "WPE - 1055 Physical Conditioning",
        section: "B02",
        credits: "0.75"
    },
    {
        label: "WPE - 1055 Physical Conditioning",
        section: "B03",
        credits: "0.75"
    },
    {
        label: "WPE - 1055 Physical Conditioning",
        section: "C01",
        credits: "0.75"
    },
    {
        label: "WPE - 1055 Physical Conditioning",
        section: "C02",
        credits: "0.75"
    },
    {
        label: "WPE - 1055 Physical Conditioning",
        section: "D01",
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
        label: "WPE - 1077 Swimming For Fitness",
        section: "C01",
        credits: "0.75"
    },
    {
        label: "WPE - 1077 Swimming For Fitness",
        section: "C02",
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
        label: "WPE - 1099 Healthy Alternative",
        section: "A04 - Healthy Alternative: Zumba",
        credits: "0.75"
    },
    {
        label: "WPE - 1099 Healthy Alternative",
        section: "A07 - Healthy Alternative: Self Defense for Women",
        credits: "0.75"
    },
    {
        label: "WPE - 1099 Healthy Alternative",
        section: "B01 - Healthy Alternative: Zumba",
        credits: "0.75"
    },
    {
        label: "WPE - 1099 Healthy Alternative",
        section: "B02 - Healthy Alternative:  Introduction to Mindfulness",
        credits: "0.75"
    },
    {
        label: "WPE - 1099 Healthy Alternative",
        section: "B03 - Healthy Alternative: Zumba",
        credits: "0.75"
    },
    {
        label: "WPE - 1099 Healthy Alternative",
        section: "B07 - Healthy Alternative: Self Defense for Women",
        credits: "0.75"
    },
    {
        label: "WPE - 1099 Healthy Alternative",
        section: "C02 - Healthy Alternative: Zumba",
        credits: "0.75"
    },
    {
        label: "WPE - 1099 Healthy Alternative",
        section: "D01 - Healthy Alternative - Zumba",
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
        label: "WPE - 1203 Club Sport - Ballroom Dancing",
        section: "S01",
        credits: "0.75"
    },
    {
        label: "WPE - 1204 Club Sport - Dance Team",
        section: "F01",
        credits: "0.75"
    },
    {
        label: "WPE - 1204 Club Sport - Dance Team",
        section: "S02",
        credits: "0.75"
    },
    {
        label: "WPE - 1204 Club Sport - Dance Team",
        section: "S03",
        credits: "0.75"
    },
    {
        label: "WPE - 1205 Club Sport - Fencing Team",
        section: "A01",
        credits: "0.75"
    },
    {
        label: "WPE - 1205 Club Sport - Fencing Team",
        section: "B01",
        credits: "0.75"
    },
    {
        label: "WPE - 1206 Club Sport - Men's Ice Hockey",
        section: "B01",
        credits: "0.75"
    },
    {
        label: "WPE - 1206 Club Sport - Men's Ice Hockey",
        section: "C01",
        credits: "0.75"
    },
    {
        label: "WPE - 1207 Club Sport - Karate",
        section: "A01",
        credits: "0.75"
    },
    {
        label: "WPE - 1207 Club Sport - Karate",
        section: "D01",
        credits: "0.75"
    },
    {
        label: "WPE - 1209 Club Sport- Women's Rugby Team",
        section: "F01",
        credits: "0.75"
    },
    {
        label: "WPE - 1209 Club Sport- Women's Rugby Team",
        section: "S04",
        credits: "0.75"
    },
    {
        label: "WPE - 1210 Club Sport - Men's Ultimate Frisbee Team",
        section: "F01",
        credits: "0.75"
    },
    {
        label: "WPE - 1210 Club Sport - Men's Ultimate Frisbee Team",
        section: "S05",
        credits: "0.75"
    },
    {
        label: "WPE - 1211 Club Sport - Women's Ultimate Frisbee Team",
        section: "F01",
        credits: "0.75"
    },
    {
        label: "WPE - 1211 Club Sport - Women's Ultimate Frisbee Team",
        section: "S06",
        credits: "0.75"
    },
    {
        label: "WPE - 1212 Club Sport - Men's Lacrosse Team",
        section: "C01",
        credits: "0.75"
    },
    {
        label: "WPE - 1212 Club Sport - Men's Lacrosse Team",
        section: "D01",
        credits: "0.75"
    },
    {
        label: "WPE - 1213 Club Sport - Women's Lacrosse Team",
        section: "C01",
        credits: "0.75"
    },
    {
        label: "WPE - 1213 Club Sport - Women's Lacrosse Team",
        section: "D01",
        credits: "0.75"
    },
    {
        label: "WPE - 1214 Club Sport - Men's Volleyball Team",
        section: "F01",
        credits: "0.75"
    },
    {
        label: "WPE - 1214 Club Sport - Men's Volleyball Team",
        section: "S01",
        credits: "0.75"
    },
    {
        label: "WPE - 1216 Club Sport - Pep Band",
        section: "C01",
        credits: "0.75"
    },
    {
        label: "WPE - 1216 Club Sport - Pep Band",
        section: "F01",
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
        label: "WPE - 1221 Club Sport - Running",
        section: "S07",
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
        label: "WPE - 1224 Club Sport - Cheerleading",
        section: "S01",
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
        label: "WPE - 1229 Club Sport - Men's Rugby",
        section: "S01",
        credits: "0.75"
    },
    {
        label: "WPE - 1230 Club Sport - Competitive Climbing Co-Ed",
        section: "B01",
        credits: "0.75"
    },
    {
        label: "WPE - 1230 Club Sport - Competitive Climbing Co-Ed",
        section: "S01",
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
        label: "WPE - 1235 Club Sport - Women\u2019s Volleyball",
        section: "S01",
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
        label: "WPE - 1238 Club Sport \u2013 Rangeela: Bollywood Bhangra Fusion",
        section: "S01",
        credits: "0.75"
    },
    {
        label: "WPE - 1239 Club Sport \u2013 Powerlifting",
        section: "F01",
        credits: "0.75"
    },
    {
        label: "WPE - 1239 Club Sport \u2013 Powerlifting",
        section: "S01",
        credits: "0.75"
    },
    {
        label: "WPE - 1601 Insight Program",
        section: "F01",
        credits: "0.75"
    },
    {
        label: "WPE - 1601 Insight Program",
        section: "F02",
        credits: "0.75"
    },
    {
        label: "WPE - 1601 Insight Program",
        section: "F03",
        credits: "0.75"
    },
    {
        label: "WPE - 1601 Insight Program",
        section: "F04",
        credits: "0.75"
    },
    {
        label: "WPE - 1601 Insight Program",
        section: "F05",
        credits: "0.75"
    },
    {
        label: "WPE - 1601 Insight Program",
        section: "F06",
        credits: "0.75"
    },
    {
        label: "WPE - 1601 Insight Program",
        section: "F07",
        credits: "0.75"
    },
    {
        label: "WPE - 1601 Insight Program",
        section: "F08",
        credits: "0.75"
    },
    {
        label: "WPE - 1601 Insight Program",
        section: "F09",
        credits: "0.75"
    },
    {
        label: "WPE - 1601 Insight Program",
        section: "F10",
        credits: "0.75"
    },
    {
        label: "WPE - 1601 Insight Program",
        section: "F11",
        credits: "0.75"
    },
    {
        label: "WPE - 1601 Insight Program",
        section: "F12",
        credits: "0.75"
    },
    {
        label: "WPE - 1601 Insight Program",
        section: "F13",
        credits: "0.75"
    },
    {
        label: "WPE - 1601 Insight Program",
        section: "F14",
        credits: "0.75"
    },
    {
        label: "WPE - 1601 Insight Program",
        section: "F15",
        credits: "0.75"
    },
    {
        label: "WPE - 1601 Insight Program",
        section: "F16",
        credits: "0.75"
    },
    {
        label: "WPE - 1601 Insight Program",
        section: "F17",
        credits: "0.75"
    },
    {
        label: "WPE - 1601 Insight Program",
        section: "F18",
        credits: "0.75"
    },
    {
        label: "WPE - 1601 Insight Program",
        section: "F19",
        credits: "0.75"
    },
    {
        label: "WPE - 1601 Insight Program",
        section: "F20",
        credits: "0.75"
    },
    {
        label: "WPE - 1601 Insight Program",
        section: "F21",
        credits: "0.75"
    },
    {
        label: "WPE - 1601 Insight Program",
        section: "F22",
        credits: "0.75"
    },
    {
        label: "WPE - 1601 Insight Program",
        section: "F23",
        credits: "0.75"
    },
    {
        label: "WPE - 1601 Insight Program",
        section: "F24",
        credits: "0.75"
    },
    {
        label: "WPE - 1601 Insight Program",
        section: "F25",
        credits: "0.75"
    },
    {
        label: "WPE - 1601 Insight Program",
        section: "F26",
        credits: "0.75"
    },
    {
        label: "WPE - 1601 Insight Program",
        section: "F27",
        credits: "0.75"
    },
    {
        label: "WPE - 1601 Insight Program",
        section: "F28",
        credits: "0.75"
    },
    {
        label: "WPE - 1601 Insight Program",
        section: "F29",
        credits: "0.75"
    },
    {
        label: "WPE - 1601 Insight Program",
        section: "F30",
        credits: "0.75"
    },
    {
        label: "WPE - 1601 Insight Program",
        section: "F31",
        credits: "0.75"
    },
    {
        label: "WPE - 1601 Insight Program",
        section: "F32",
        credits: "0.75"
    },
    {
        label: "WPE - 1601 Insight Program",
        section: "F33",
        credits: "0.75"
    },
    {
        label: "WPE - 1601 Insight Program",
        section: "F34",
        credits: "0.75"
    },
    {
        label: "WPE - 1601 Insight Program",
        section: "F35",
        credits: "0.75"
    },
    {
        label: "WPE - 1601 Insight Program",
        section: "F36",
        credits: "0.75"
    },
    {
        label: "WPE - 1601 Insight Program",
        section: "F37",
        credits: "0.75"
    },
    {
        label: "WPE - 1601 Insight Program",
        section: "F38",
        credits: "0.75"
    },
    {
        label: "WPE - 1601 Insight Program",
        section: "F39",
        credits: "0.75"
    },
    {
        label: "WPE - 1601 Insight Program",
        section: "F40",
        credits: "0.75"
    },
    {
        label: "WPE - 1601 Insight Program",
        section: "F41",
        credits: "0.75"
    },
    {
        label: "WPE - 1601 Insight Program",
        section: "F42",
        credits: "0.75"
    },
    {
        label: "WPE - 1601 Insight Program",
        section: "F43",
        credits: "0.75"
    },
    {
        label: "WPE - 1601 Insight Program",
        section: "F44",
        credits: "0.75"
    },
    {
        label: "WPE - 1601 Insight Program",
        section: "F45",
        credits: "0.75"
    },
    {
        label: "WPE - 1601 Insight Program",
        section: "F46",
        credits: "0.75"
    },
    {
        label: "WPE - 1601 Insight Program",
        section: "F47",
        credits: "0.75"
    },
    {
        label: "WPE - 1601 Insight Program",
        section: "F48",
        credits: "0.75"
    },
    {
        label: "WPE - 1601 Insight Program",
        section: "F49",
        credits: "0.75"
    },
    {
        label: "WPE - 1601 Insight Program",
        section: "F50",
        credits: "0.75"
    },
    {
        label: "WPE - 1601 Insight Program",
        section: "F51",
        credits: "0.75"
    },
    {
        label: "WPE - 1601 Insight Program",
        section: "F52",
        credits: "0.75"
    },
    {
        label: "WPE - 1601 Insight Program",
        section: "F53",
        credits: "0.75"
    },
    {
        label: "WPE - 1601 Insight Program",
        section: "F54",
        credits: "0.75"
    },
    {
        label: "WPE - 1601 Insight Program",
        section: "F55",
        credits: "0.75"
    },
    {
        label: "WPE - 1601 Insight Program",
        section: "F56",
        credits: "0.75"
    },
    {
        label: "WPE - 1601 Insight Program",
        section: "F57",
        credits: "0.75"
    },
    {
        label: "WPE - 1601 Insight Program",
        section: "F58",
        credits: "0.75"
    },
    {
        label: "WPE - 1601 Insight Program",
        section: "F59",
        credits: "0.75"
    },
    {
        label: "WPE - 1601 Insight Program",
        section: "F60",
        credits: "0.75"
    },
    {
        label: "WPE - 1601 Insight Program",
        section: "S01",
        credits: "0.75"
    },
    {
        label: "WPE - 1611 Introduction to Mindfulness",
        section: "A01",
        credits: "0.75"
    },
    {
        label: "WPE - 1611 Introduction to Mindfulness",
        section: "A02",
        credits: "0.75"
    },
    {
        label: "WPE - 1611 Introduction to Mindfulness",
        section: "A03",
        credits: "0.75"
    },
    {
        label: "WPE - 1611 Introduction to Mindfulness",
        section: "B01",
        credits: "0.75"
    },
    {
        label: "WPE - 1611 Introduction to Mindfulness",
        section: "B02",
        credits: "0.75"
    },
    {
        label: "WPE - 1611 Introduction to Mindfulness",
        section: "B03",
        credits: "0.75"
    },
    {
        label: "WPE - 1611 Introduction to Mindfulness",
        section: "C01",
        credits: "0.75"
    },
    {
        label: "WPE - 1611 Introduction to Mindfulness",
        section: "C02",
        credits: "0.75"
    },
    {
        label: "WPE - 1611 Introduction to Mindfulness",
        section: "D01",
        credits: "0.75"
    },
    {
        label: "WPE - 1611 Introduction to Mindfulness",
        section: "D02",
        credits: "0.75"
    },
    {
        label: "WPE - 1612 Introductory Yoga",
        section: "A01",
        credits: "0.75"
    },
    {
        label: "WPE - 1612 Introductory Yoga",
        section: "A02",
        credits: "0.75"
    },
    {
        label: "WPE - 1612 Introductory Yoga",
        section: "B01",
        credits: "0.75"
    },
    {
        label: "WPE - 1612 Introductory Yoga",
        section: "B02",
        credits: "0.75"
    },
    {
        label: "WPE - 1612 Introductory Yoga",
        section: "C01",
        credits: "0.75"
    },
    {
        label: "WPE - 1612 Introductory Yoga",
        section: "C02",
        credits: "0.75"
    },
    {
        label: "WPE - 1612 Introductory Yoga",
        section: "D01",
        credits: "0.75"
    },
    {
        label: "WPE - 1612 Introductory Yoga",
        section: "D02",
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
        label: "WPE - 1699 Special Topics in Holistic Well-Being",
        section: "A02",
        credits: "0.75"
    },
    {
        label: "WPE - 1699 Special Topics in Holistic Well-Being",
        section: "A03",
        credits: "0.75"
    },
    {
        label: "WPE - 1699 Special Topics in Holistic Well-Being",
        section: "B01",
        credits: "0.75"
    },
    {
        label: "WPE - 1699 Special Topics in Holistic Well-Being",
        section: "B02",
        credits: "0.75"
    },
    {
        label: "WPE - 1699 Special Topics in Holistic Well-Being",
        section: "C01",
        credits: "0.75"
    },
    {
        label: "WPE - 1699 Special Topics in Holistic Well-Being",
        section: "C02",
        credits: "0.75"
    },
    {
        label: "WPE - 1699 Special Topics in Holistic Well-Being",
        section: "D01",
        credits: "0.75"
    },
    {
        label: "WPE - 2001 Varsity Football Team",
        section: "A01",
        credits: "0.75"
    },
    {
        label: "WPE - 2001 Varsity Football Team",
        section: "B01",
        credits: "0.75"
    },
    {
        label: "WPE - 2002 Varsity Men's Soccer Team",
        section: "A01",
        credits: "0.75"
    },
    {
        label: "WPE - 2002 Varsity Men's Soccer Team",
        section: "B01",
        credits: "0.75"
    },
    {
        label: "WPE - 2003 Varsity Women's Soccer Team",
        section: "A01",
        credits: "0.75"
    },
    {
        label: "WPE - 2003 Varsity Women's Soccer Team",
        section: "B01",
        credits: "0.75"
    },
    {
        label: "WPE - 2004 Varsity Field Hockey Team",
        section: "A01",
        credits: "0.75"
    },
    {
        label: "WPE - 2004 Varsity Field Hockey Team",
        section: "B01",
        credits: "0.75"
    },
    {
        label: "WPE - 2005 Varsity Women's Volleyball Team",
        section: "A01",
        credits: "0.75"
    },
    {
        label: "WPE - 2005 Varsity Women's Volleyball Team",
        section: "B01",
        credits: "0.75"
    },
    {
        label: "WPE - 2006 Varsity Men's And Women's Cross Country Team",
        section: "A01",
        credits: "0.75"
    },
    {
        label: "WPE - 2006 Varsity Men's And Women's Cross Country Team",
        section: "B01",
        credits: "0.75"
    },
    {
        label: "WPE - 2007 Varsity Wrestling Team",
        section: "B01",
        credits: "0.75"
    },
    {
        label: "WPE - 2007 Varsity Wrestling Team",
        section: "C01",
        credits: "0.75"
    },
    {
        label: "WPE - 2008 Varsity Men's Basketball Team",
        section: "B01",
        credits: "0.75"
    },
    {
        label: "WPE - 2008 Varsity Men's Basketball Team",
        section: "C01",
        credits: "0.75"
    },
    {
        label: "WPE - 2009 Varsity Women's Basketball Team",
        section: "B01",
        credits: "0.75"
    },
    {
        label: "WPE - 2009 Varsity Women's Basketball Team",
        section: "C01",
        credits: "0.75"
    },
    {
        label: "WPE - 2010 Varsity Men's And Women's Swim Team",
        section: "BO1",
        credits: "0.75"
    },
    {
        label: "WPE - 2010 Varsity Men's And Women's Swim Team",
        section: "C01",
        credits: "0.75"
    },
    {
        label: "WPE - 2011 Varsity Men's And Women's Indoor Track Team",
        section: "BO1",
        credits: "0.75"
    },
    {
        label: "WPE - 2011 Varsity Men's And Women's Indoor Track Team",
        section: "C01",
        credits: "0.75"
    },
    {
        label: "WPE - 2012 Varsity Baseball Team",
        section: "C01",
        credits: "0.75"
    },
    {
        label: "WPE - 2012 Varsity Baseball Team",
        section: "D01",
        credits: "0.75"
    },
    {
        label: "WPE - 2013 Varsity Softball Team",
        section: "C01",
        credits: "0.75"
    },
    {
        label: "WPE - 2013 Varsity Softball Team",
        section: "D01",
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
        label: "WPE - 2015 Varsity Men's Crew Team",
        section: "D01",
        credits: "0.75"
    },
    {
        label: "WPE - 2016 Varsity Women's Crew Team",
        section: "A01",
        credits: "0.75"
    },
    {
        label: "WPE - 2016 Varsity Women's Crew Team",
        section: "D01",
        credits: "0.75"
    }
];

module.exports = allCourses;