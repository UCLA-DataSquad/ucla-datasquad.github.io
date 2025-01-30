---
title: "Recent Projects at the DSC"
author: Madeline Kim
date: 2025-01-30
---


Here at the DSC, our DataSquad members work on some amazing projects! To give an idea of what we’re able to do, we’re spotlighting a few projects from this past year. 

<h3>LAPD Helicopter Surveillance</h3>


If you’re a resident in Los Angeles, you’ve probably heard the disturbing buzz of LAPD helicopters flying above you. While we often assume that those helicopters are involved in an active pursuit, Kate McErny, a researcher at UCLA, proves otherwise. Over the past few years, the DataSquad has been helping Kate with data to examine how LAPD helicopter surveillance is often racialized, and its negative impact on residents' daily lives. Kate’s code was pulling data from an API, which is a large, institutional data repository. While APIs are useful, it can take a while to pull data from an API and run analyses. Our DataSquad members helped improve the code’s efficiency by over 800%, giving her more time to interpret analyses instead of waiting for the code to run. 


<h3>Trying out Layout Parser</h3>


Along with Kate’s project on LAPD helicopters, DataSquad members were also working with a layout parser, which uses [OCR](https://aws.amazon.com/what-is/ocr/). If you’ve ever scanned a document or ran into a license plate scanner in a parking garage, chances are you’ve encountered optical character recognition, or OCR for short. OCR is used to convert images of text into editable digital text (think Google Doc) that can be analyzed, and at the DSC, we get a large amount of requests to use it! 

Typically, we use a software called [ABBYY FineReader](https://pdf.abbyy.com/) or libraries like [Tesseract](https://github.com/tesseract-ocr/tesseract) to perform OCR, but we wanted to test out [Layout Parser](https://layout-parser.github.io/), a relatively new software. Layout Parser is a collection of OCR packages, and it specifically specializes in boxing texts. Boxing texts is when text is organized by separating it into boxes. A real life example can be seen in restaurant menus, which typically have different boxes around the main dish and beverage sections.

DataSquad members tested out the software using a set of medieval texts called [Canon Law](https://digital.library.ucla.edu/canonlaw/), and found that while the software is good at separating sections of text, Layout Parser is hard to set up. They were eventually able to find a solution by creating a separate space called a container, which was set up with the specific computer system requirements needed to run the software, but concluded that installation difficulties and the lack of support for the software are major disadvantages.


 <h3>Sigmund Freud Memoirs</h3>


Another project that used OCR was with memoirs on Sigmund Freud. For Professor Waldinger in the sociology department, we took images of handwritten memoirs on Freud, and generated text that the Professor could use with different tools to translate and analyze the content. A challenge we had with this project was that the memoirs were all written in German, and the coloring of the paper was fairly yellow due to age, making it harder to separate the text from the background. However, we were able to successfully convert the images into complete, accurate text!


<h3>*Come visit us!*</h3>
The Data Science Center is an open resource for all UCLA students and researchers. If you need advice or assistance with any data science related tasks, you can find us on the first floor of YRL! You can also book a virtual consultation on Calendly. Our office is located behind the group collaboration pods, in the room with glass sliding doors, and our hours are on our [website](https://www.library.ucla.edu/visit/locations/data-science-center/). To book a zoom consultation, visit our [Calendly](https://calendly.com/d/drx-245-r63)!



