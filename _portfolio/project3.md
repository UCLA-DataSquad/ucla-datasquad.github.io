---
title: Analyzing Ancient Chinese Buddhist Text with Python
# subtitle: Lorem ipsum dolor sit amet consectetur.
image: assets/img/portfolio/buddhisttext.jpg
alt: Keep Exploring

caption:
  title: Analyzing Ancient Chinese Buddhist Text with Python
  # subtitle: Graphic Design
  thumbnail: assets/img/portfolio/buddhisttext.jpg
---

By JESSICA CHUN on Fri, 2021-01-22 13:20

A graduate student from Asian Languages and Cultures sought help to analyze ancient Buddhist texts semantically, including extracting the meaning of the texts, and comparing the similarity between different texts quantitatively. The goal of this consultation was to document experience using Python and to work with an ancient Chinese Buddhist dialect. This required some basic analysis on several dozen text documents with a twist.

There is a standard set of popular Natural Language Processing (NLP) tools that is our center’s ‘go to’ toolbox including:

- Spacy

- Scikit-learn

- Data visualization tools like word clouds

While analyzing text is a pretty straight-forward process, there were many unique challenges in this consult. One challenge was that the documents were Buddhist texts from the Ming dynasty. Most of the text tools we use are designed for western languages, so we had to be creative with how we addressed common concerns such as Chinese character segmentation. The source text was originally unsegmented, meaning that it was just a contiguous block of text. Using the Python library however, we were able to divide text based on white space and vocabulary matching. While this segmented the text, there was a preexisting default choosing to use the modern Chinese dictionary, which did not match up perfectly with the older syntax. Since the analysis was done using a modern Chinese dictionary, we explored replacing it with an ancient Chinese corpus and dictionary. Several are maintained by the Georgetown Treebank project, a text and language analysis tool.

Once the source files were segmented, we were able to use some of the scikitlearn tools for basic statistical analysis (TF-IDF), following this article pretty closely. We also used several visualization tools, including the word cloud tool to provide some baseline visualizations.The goal was eventually to explore automating tagging content following an example at Stanford.

{:.list-inline}

- Date: January 2021
- Author: Jessica Chun
- Category: Data Science Center
