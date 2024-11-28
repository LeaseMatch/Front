
<a name="readme-top"></a>

<div align="center">
  <!-- You are encouraged to replace this logo with your own! Otherwise you can also remove it. -->
  <img src="images/logo_leasematch.jpg" alt="logo" width="140"  height="auto" />
  <br/>

  <h3><b>Lease Match Cloud Architecture</b></h3>

</div>

<!-- TABLE OF CONTENTS -->

# 📗 Table of Contents

- [📖 About the Project](#about-project)
  - [🛠 Built With](#built-with)
    - [Tech Stack](#tech-stack)
    - [Key Features](#key-features)
  - [🚀 Live Demo](#live-demo)
- [💻 Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Setup](#setup)
  - [Install](#install)
  - [Usage](#usage)
  - [Run tests](#run-tests)
  - [Deployment](#deployment)
- [👥 Authors](#authors)
- [🔭 Future Features](#future-features)
- [🤝 Contributing](#contributing)
- [⭐️ Show your support](#support)
- [🙏 Acknowledgements](#acknowledgements)
- [❓ FAQ (OPTIONAL)](#faq)
- [📝 License](#license)

<!-- PROJECT DESCRIPTION -->

# 📖 [LeaseMatch] <a name="about-project"></a>

> LeaseMatch simplifies the rental process by offering a fair, transparent, and flexible marketplace for housing. Whether you're looking to rent an apartment or list your property, LeaseMatch puts the power of choice and negotiation in your hands.


**[LeaseMatch]** is a project to show up the concepts learned in the [Bootcamp Arquitectura en la Nube](https://talentotechbogota.co/#bootcamps) of [MinTIC Colombia](https://www.mintic.gov.co/portal/inicio/)

## 🛠 Built With <a name="built-with"></a>

### Tech Stack <a name="tech-stack"></a>

> This project is the deployment of the infrastructure required to create a complete website on AWS and following security guidelines and good practices. And it uses of [AWS CDK Infrastructure as a Code]( https://docs.aws.amazon.com/cdk/v2/guide/home.html).

 <div style="text-align: center"><img src="images/architecture.jpg" alt="logo" width=800px height="auto" /></div>
> Components
<details>
  <summary>Client</summary>
  <ul>
    <li><div>To deploy the frontend on Amplify, the [AWS Quickstart Deployment Template] was used, following AWS recommendations. This guide helps developers integrate AWS Amplify into a React application, providing step-by-step instructions to set up a React project, install Amplify, configure it to use AWS services (Cognito, Vite React TS,CI/CD, and APIs), and add cloud-powered features like authentication and hosting.</div><a href="https://docs.amplify.aws/react/start/quickstart/">AWS Quickstart Deployment Template V2</a></li>
  </ul>
</details>

<details>
  <summary>Server</summary>
  <ul><div>To deploy the backend, we used an AWS CDK stack that allows to integrate and deploy the following AWS services: apigateway, lambda, dynamodb (LeaseMatch/devops/infra/api_stack.py)</div>
    <li><a href="https://aws.amazon.com/api-gateway">API Gateway</a></li>
    <li><a href="https://aws.amazon.com/lambda">Lambda Function</a></li>
  </ul>
</details>

<details>
<summary>Database</summary>
  <ul>
     <li><a href="https://aws.amazon.com/dynamodb">Dynamo DB</a></li>
  </ul>
</details>

<!-- Features -->

### Key Features <a name="key-features"></a>

- **Use of Infrastructure as Code**
- **Use of API Gateway to expose services from Lambda functions and enable CORS.**
- **Creation and integration of Amplify, React Vite TS, Cognito, and CI/CD using the AWS template.**
- **WAF (Web Application Firewall) to allow and block traffic by region.**

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LIVE DEMO -->

## 🚀 Live Demo <a name="live-demo"></a>

- [Live Demo Link](https://development.1234567890qwertyuio.amplifyapp.com)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## 💻 Getting Started <a name="getting-started"></a>

To get a local copy up and running, follow these steps.
Step 1 (Backend) 
- Clone the repository using: git clone https://github.com/LeaseMatch/LeaseMatch.git

Step 2 (Frontend)
- Clone the repository https://github.com/LeaseMatch/Front in your GitHub Account
### Prerequisites

In order to run this project you need:

<!--
Example command:

```sh
 gem install rails
```
 -->

### Setup

Step 1 (CDK Api Services) 
- Open the LeaseMatch project on VS Code and execute the Reopen in Container button [Dev Containers](https://code.visualstudio.com/docs/devcontainers/containers)
- Set AWS Credentials: https://docs.aws.amazon.com/cli/v1/userguide/cli-configure-envvars.html
- Move to the location of app.py file (/devops)
- Run the command: cdk deploy api (api url is generated)
- Enter to your AWS Account and validate deployed REST services using Postman or other tool 

Step 2 (Deploy Amplify Frontend)
- Update required URLs in src/components folder 
- Run npm i to construct project dependencies
- Run npm run dev to validate if app is working
- Commit and Push changes to your repository 
- Enter to AWS Amplify and click "Deploy App" button
- Follow the instructions to authorize and select repository and branch
- Deploy the app
- Populate properties table with the required data
- Enter to generated URL, create a new user and validate functionality 

Step 3 (Execute WAF Stack)
- Open the LeaseMatch project on VS Code and execute the Reopen in Container button [Dev Containers](https://code.visualstudio.com/docs/devcontainers/containers)
- Set AWS Credentials: https://docs.aws.amazon.com/cli/v1/userguide/cli-configure-envvars.html
- update domain name with the URL app generated in previous step
- Move to the location of app.py file (/devops)
- Run the command: cdk deploy waf
- Enter to your AWS Account and validate deployed in AWS Firewall Manager
- Validate blocked and allowed access 
<!--
Example commands:

```sh
  cd my-folder
  git clone git@github.com:myaccount/my-project.git
```
--->

### Install

Install this project with:

<!--
Example command:

```sh
  cd my-project
  gem install
```
--->

### Usage

To run the project, execute the following command:

<!--
Example command:

```sh
  rails server
```
--->

### Run tests

To run tests, run the following command:

<!--
Example command:

```sh
  bin/rails test test/models/article_test.rb
```
--->

### Deployment

You can deploy this project using:

<!--
Example:

```sh

```
 -->

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- AUTHORS -->

## 👥 Authors <a name="authors"></a>

👤 **Elio Nelson Cortés**

- GitHub: [@NeckerFree](https://github.com/NeckerFree)
- LinkedIn: [Elio Cortés](https://www.linkedin.com/in/elionelsoncortes/)

👤 **Author2**

- GitHub: [@githubhandle](https://github.com/githubhandle)
- Twitter: [@twitterhandle](https://twitter.com/twitterhandle)
- LinkedIn: [LinkedIn](https://linkedin.com/in/linkedinhandle)

👤 **Author3**

- GitHub: [@githubhandle](https://github.com/githubhandle)
- Twitter: [@twitterhandle](https://twitter.com/twitterhandle)
- LinkedIn: [LinkedIn](https://linkedin.com/in/linkedinhandle)

👤 **Author4**

- GitHub: [@githubhandle](https://github.com/githubhandle)
- Twitter: [@twitterhandle](https://twitter.com/twitterhandle)
- LinkedIn: [LinkedIn](https://linkedin.com/in/linkedinhandle)

👤 **Author5**

- GitHub: [@githubhandle](https://github.com/githubhandle)
- Twitter: [@twitterhandle](https://twitter.com/twitterhandle)
- LinkedIn: [LinkedIn](https://linkedin.com/in/linkedinhandle)

👤 **Author6**

- GitHub: [@githubhandle](https://github.com/githubhandle)
- Twitter: [@twitterhandle](https://twitter.com/twitterhandle)
- LinkedIn: [LinkedIn](https://linkedin.com/in/linkedinhandle)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- FUTURE FEATURES -->

## 🔭 Future Features <a name="future-features"></a>

> Describe 1 - 3 features you will add to the project.

- [ ] **[new_feature_1]**
- [ ] **[new_feature_2]**
- [ ] **[new_feature_3]**

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## 🤝 Contributing <a name="contributing"></a>

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](../../issues/).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- SUPPORT -->

## ⭐️ Show your support <a name="support"></a>

> Write a message to encourage readers to support your project

If you like this project...

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGEMENTS -->

## 🙏 Acknowledgments <a name="acknowledgements"></a>

> Give credit to everyone who inspired your codebase.

I would like to thank...

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- FAQ (optional) -->

## ❓ FAQ (OPTIONAL) <a name="faq"></a>

> Add at least 2 questions new developers would ask when they decide to use your project.

- **[Question_1]**

  - [Answer_1]

- **[Question_2]**

  - [Answer_2]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## 📝 License <a name="license"></a>

This project is [MIT](./LICENSE) licensed.

_NOTE: we recommend using the [MIT license](https://choosealicense.com/licenses/mit/) - you can set it up quickly by [using templates available on GitHub](https://docs.github.com/en/communities/setting-up-your-project-for-healthy-contributions/adding-a-license-to-a-repository). You can also use [any other license](https://choosealicense.com/licenses/) if you wish._

<p align="right">(<a href="#readme-top">back to top</a>)</p>
