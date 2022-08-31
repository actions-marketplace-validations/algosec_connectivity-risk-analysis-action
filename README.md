<img height="100" src="https://raw.githubusercontent.com/algosec/risk-analysis-action/develop/icons/header.svg" /> 

## Algosec IAC Connectivity Risk Analysis 

### Basic Configuration

```yaml
name: 'Your Repo CI/CD Yaml Workflow'
on:
  pull_request:
    branches:
      - 'main'
jobs:
  algosec-iac-connectivity-risk-analysis:
     name: 'Algosec IAC Connectivity Risk Analysis'
     runs-on: ubuntu-latest
     steps:
        - name: Connectivity Risk Analysis
          uses: algosec/connectivity-risk-analysis-action@v0.0.6
          env:
            # Optional: when using @actions/checkout@v3 to checkout the repo add "USE_CHECKOUT: true" under "env:"
            # USE_CHECKOUT: true
            
            # Optional: run checks on all folders with relevant file type
            # FIRST_RUN: true
            
            # Fail or Continue on error after action finish (fail or continue_on_error)
            # MODE: continue_on_error (defualt)
            
            # IaS Framework type (terraform, cloudformation, etc...)
            # FRAMEWORK: terraform (default)
            
            # Version Control type (github, gitlab, etc...)
            # VCS: github (default)
            
            # Needed Github information
            GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
  
            # Cloudflow credentials
            CF_TENANT_ID: ${{ secrets.CF_TENANT_ID }}
            CF_CLIENT_ID: ${{ secrets.CF_CLIENT_ID }}
            CF_CLIENT_SECRET: ${{ secrets.CF_CLIENT_SECRET }}
            
            # Add your provider's keys to environment variables as secrets or use an external action to preconfigure
            
```


## Cloud Providers configuration


### AWS

```yaml
name: 'Your Repo CI/CD Yaml Workflow'
on:
  pull_request:
    branches:
      - 'main'
jobs:
  algosec-iac-connectivity-risk-analysis:
     name: 'Algosec IAC Connectivity Risk Analysis'
     runs-on: ubuntu-latest
     steps:
          uses: algosec/connectivity-risk-analysis-action@v0.0.5
          env:            
            GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
            CF_TENANT_ID: ${{ secrets.CF_TENANT_ID }}
            CF_CLIENT_ID: ${{ secrets.CF_CLIENT_ID }}
            CF_CLIENT_SECRET: ${{ secrets.CF_CLIENT_SECRET }}  
            # AWS Environment Variables/ External Action https://github.com/marketplace/actions/configure-aws-credentials-action-for-github-actions
            AWS_SECRET_ACCESS_KEY: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
            AWS_ACCESS_KEY_ID: ${{ secrets.AWS_ACCESS_KEY_ID }}   
            
```

### Azure
```yaml
name: 'Your Repo CI/CD Yaml Workflow'
on:
  pull_request:
    branches:
      - 'main'
jobs:
  algosec-iac-connectivity-risk-analysis:
     name: 'Algosec IAC Connectivity Risk Analysis'
     runs-on: ubuntu-latest
     steps:
        - name: Connectivity Risk Analysis
          uses: algosec/connectivity-risk-analysis-action@v0.0.5
          env:
            GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
            CF_TENANT_ID: ${{ secrets.CF_TENANT_ID }}
            CF_CLIENT_ID: ${{ secrets.CF_CLIENT_ID }}
            CF_CLIENT_SECRET: ${{ secrets.CF_CLIENT_SECRET }}
            # AZURE Environment Variables/ External Action https://github.com/marketplace/actions/azure-login
            ARM_SUBSCRIPTION_ID: <azure_subscription_id>
            ARM_TENANT_ID: <azure_subscription_tenant_id>
            ARM_CLIENT_ID: <service_principal_appid>
            ARM_CLIENT_SECRET: <service_principal_password>
            
```

### Gcp
 ```yaml
name: 'Your Repo CI/CD Yaml Workflow'
on:
  pull_request:
    branches:
      - 'main'
jobs:
  algosec-iac-connectivity-risk-analysis:
     name: 'Algosec IAC Connectivity Risk Analysis'
     runs-on: ubuntu-latest
     steps:
          # use @actions/checkout@v3 to checkout the repo and add "USE_CHECKOUT: true" under "env:"
          
        - name: Checkout Repo
          uses: @actions/checkout@v3
          
          # must use @actions/checkout@v3 before Authenticate to Google Cloud action
          # How to create GCP_CREDENTIALS from GCP JSON file https://registry.terraform.io/providers/hashicorp/google/latest/docs/guides/provider_reference
          # Auth Gcp Action https://github.com/google-github-actions/auth
        - name: Authenticate to Google Cloud
          uses: google-github-actions/auth@v0.7.3
          with:
            credentials_json: '${{ secrets.GCP_CREDENTIALS }}'
        - name: Connectivity Risk Analysis
          uses: algosec/connectivity-risk-analysis-action@v0.0.5
          env:    
            GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
            CF_TENANT_ID: ${{ secrets.CF_TENANT_ID }}
            CF_CLIENT_ID: ${{ secrets.CF_CLIENT_ID }}
            CF_CLIENT_SECRET: ${{ secrets.CF_CLIENT_SECRET }}
            USE_CHECKOUT: true
            
```           
