---
title: “Shedding Light on Injustice: Deaths in Custody Data”
image: assets/img/keel-coroners-silence.jpg
alt: “Cover of The Coroner’s Silence: Death Records and the Hidden Victims of Police Violence by Terence Keel”

caption:
  title: “Shedding Light on Injustice”
  subtitle: “R, Python, OpenRefine, Tableau”
  thumbnail: assets/img/keel-coroners-silence.jpg
---

Professor Terence Keel and the [Biocritical Studies Lab](https://www.terencekeel.com/research) have been building a comprehensive dataset of deaths in custody across the United States from 2000–2020 — integrating records from Fatal Encounters, The Guardian, Reuters, the LA Times Homicide Report, and the Bureau of Justice Statistics. The UCLA DataSquad supported this work continuously from 2021 through 2025, across four cohorts of consultants.

The core challenge: law enforcement and medical examiners routinely undercount and misclassify deaths at the hands of police. The dataset exists to recover those hidden names.

**2021 — First cohort (Julia Wood, Ethan Allavarpu)**

Julia and Ethan merged four datasets, cleaned the data, and built Tableau dashboards visualizing fatal encounters by weapon, location, race, and ethnicity — including LA-specific views. Ethan ran chi-square tests to identify localities with statistically anomalous undercounts, helping researchers pinpoint where to look for hidden cases.

<img src=”assets/img/portfolio/policedeath2.png” alt=”Tableau visualization of fatal encounters with police in Los Angeles by race and ethnicity” class=”img-fluid” style=”margin-bottom: 1rem;”>

See Julia’s full [Tableau visualizations](https://public.tableau.com/app/profile/julia2053) and the [animation of the hidden](https://public.tableau.com/app/profile/julia2053/viz/AnimationoftheHiddenFatalEncounters/HiddenAnimation).

**2023 — Second cohort (Tristan Dewing)**

Tristan continued the data integration work — tracing hidden names back through the original source data, updating summary statistics, and calculating rates of death against census population figures across six counties.

**2024–2025 — Third cohort (Lawrence Lee)**

Lawrence did the most extensive normalization work: standardizing names with OpenRefine, resolving duplicate records, flagging newly surfaced entries that appeared when source data was updated, and building a reproducible pipeline that subsequent analysts could maintain. The dataset shrank by roughly 30% after deduplication — and became far more reliable.

<img src=”assets/img/portfolio/policedeath.png” alt=”Animation of fatal encounters with police across the United States, highlighting previously hidden deaths” class=”img-fluid” style=”margin-bottom: 1rem;”>

The results of this multi-year collaboration are now part of Professor Keel’s published book:

<img src=”assets/img/keel-coroners-silence.jpg” alt=”Cover of The Coroner’s Silence by Terence Keel” width=”260” style=”margin-bottom: 1rem;”>

*[The Coroner’s Silence: Death Records and the Hidden Victims of Police Violence](https://www.terencekeel.com/research)* — which Keel has been presenting at talks and conferences. He was also one of six recipients of UCLA’s **2024 Public Impact Research Award**.

> “[The UCLA DataSquad] is one of the most impactful resources I’ve engaged with at UCLA.”
>
> — Grace Sosa, Biocritical Lab manager

{:.list-inline}

- Years: 2021–2025
- Team: Julia Wood, Ethan Allavarpu, Tristan Dewing, Lawrence Lee
- Tools: R, Python, OpenRefine, Tableau
- Category: Data Integration, Social Justice Research
