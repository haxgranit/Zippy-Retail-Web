# Zippy Consumer Site 

## Deployment

Deploy updates to https://zippyconsumer.z19.web.core.windows.net/ by running the following commands from the root of this repository:
1. `az login`
2. `az storage blob upload-batch -s ./dist -d '$web' --account-name zippyconsumer`