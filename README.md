**Overview**
This app visualizes 2 datasets: the dataset consisting of all DoD datasets and DoD IT Reform Cost dataset.
One dataset is visualized as a series of accordions. The accordions can be clicked on and expanded to view the data.
The other dataset is visualized as a table. 
Both datasets can be sorted via the Sort button in the top right.

To run this app, execute the dockerize.sh script. That will build and run a docker container hosting this app. The app is running on http://localhost:3000

To run in dev mode, run 'npm install' followed by 'npm run dev'

**Data sources used in this project**
- https://www.defense.gov/data.json
- https://www.defense.gov/digitalstrategy/costsavings.json

**Preamble**

The following instruction set is vague by design.

There are many ways to perform _The Exercise_. Limit your time to four hours. Commit your code often. When you're complete, or when you've reached the time limit, push your final commit. The final commit message must contain the following string "FINAL-COMMIT," to mark the end of _The Exercise_. Submit a link to the repo when you're complete.

Preferred languages
- Node/JavaScript
- Go
- Python

**The Exercise**

Write a program which
- [ ] Creates a http web server
- [ ] Consumes a API from two accessible data sources
- [ ] Renders the respective payloads in a view

Bonus
- [ ] Containerize the program
- [ ] Clean commit history
- [ ] Testing coverage
- [ ] Using the features of the chosen language in place of relying on third party dependencies
- [ ] Interactive UI features such as pagination or sorting



**Open Data Source Examples (not limited to)**

- [data.gov](https://catalog.data.gov/dataset)
- [defense.gov](https://www.defense.gov/data.json)
