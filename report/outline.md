# Outline

- Motivation
    gamification
- Problem definition
(describe why we need this tool and which advantages we will have)
- Related work
(describe the different approaches which have some tutorials like we did in the article?, unity, (extend existing ones))
- Preliminaries
	- EmbeddedMontiArc language
	- EMA Tooling: Emam2Cpp (part which generate tests), Emam2Wasm, SVG generator, OnlineIDE
	- ThreeJS (lightweight cross-browser JavaScript library/API)(how to add new objects)
- Tutorials
(how we can divide this topic?(different tutorials, running example, summary, present some completely, trajectory why we need it))
- Toolchain implementation
	- 3D web-simulator
	- Client-side layer(process files(receive/send), tutorial management, trajectory comp.)
	- Server side (file processing, external modules execution)
	- CoCoChecker(general description what has been done, mention MontiCore)
- Evaluation(?)
	- performance(more math or more components what is working faster?)
- Future work(?)
	- compilation directly in a browser
	- using different tracks
	- standalone tutorial builder
- Conclusion
- References
- Appendix
	- controller for tutorial11


# Motivation
Self-driving vehicles are very important part of our future life. To design and develop this kind of Cyber-physical systems (CPS), Component and connector(C&C) models are widely used. Using C&C models, it is easier to represent different feature layers and their logical interactions. The most important feature of C&C modeling is a possibility to decompose complex models into sub-components and develop and manage, these less complex components, by domain experts.  
To inspire students to be involved in the future technology we invented a web-playground which allows creating controllers for a simulator and almost instantly see the result in 3D environment. We believe that visualization will motivate students and make the studying process more attractive due to gamification. This kind of education become more popular recent years due to good learning outcome(link).  
To teach students how to develop C&C models we should use a C&C modeling language which has all features and tools to satisfy our requirements. EmbeddedMontiArc(EMA)(link) language was picked for this purpose, to achieve the best results in short terms.  

Feature description of chapters(should be done later).

# Problem Definition
