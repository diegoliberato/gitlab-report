# Report generator based on mustache templates using GitLab issues data

## Goals
This application has the purpose of allowing the generation of customizable reports with information of the issues of a given project.  
The proposed initial version gets the GitLab issues data.

## How to run

1. Clone the project from the command line 
```bash
  $ git clone git@github.com:diegoliberato/gitlab-report.git
```

2. Access the cloned directory
3. Create the .env file at the root of the application, as in the template:
```
  TOKEN='<your_private_token>'
  URL='<gitlab_api_url>'
```
4. Download project dependencies
```bash
  yarn
```
5. Run the application
```bash
  yarn start
```