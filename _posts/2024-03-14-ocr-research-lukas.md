---
layout: blogs
title: Using Tools to Automate the Extraction of Metadata and Text for Research
author: Aimee Xu
---

Over the Summer and Fall quarter, Lukas Hager, a fourth-year Math of Computation student on the UCLA Datasquad, explored methodologies that could aid researchers in analyzing UCLA Library archives. One common method, [Optical Character Recognition (OCR)](https://en.wikipedia.org/wiki/Optical_character_recognition), encompasses a broad group of technologies that uses pattern-matching algorithms to directly scan a document into a PDF with searchable text. UCLA archives contain texts from many years, mediums, and languages, whether it be from a political campaign image or an ancient transcription.  This work is especially helpful for making the content of scanned documents or images accessible for further analysis by UCLA researchers and collaborators.

## Step 1: Google Tesseract Open-Source OCR
Lukas began his research with Tesseract software, an OCR engine developed in the 1980s by Hewlett-Packard and further developed and managed by Google. Tesseract is an open-source software that converts scanned documents or images into editable text. It supports over 100 languages, but quality can vary. Additional training may be necessary for some languages. The Tesseract community constantly develops the software for better quality and language support. Naturally, even with the benefits Tesseract provides, typos and errors arise. He recalls, “Certain languages [on Tesseract] may be more error-prone than others, specifically non-Latin-based scripts.” Working around this challenge was especially important for Hager’s project since many texts in UCLA collections contain non-Latin languages and languages like Arabic and Hebrew which are read by human eyes from right to left. Understanding issues with Teserract is essential since it undergirds many OCR engines. Being able to train and improve it is an important first step.


