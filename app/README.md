# Build and Push Docker Images to AWS ECR with GitHub Actions
This repository provides a streamlined solution for automating the process of building Docker images and pushing them to AWS Elastic Container Registry (ECR) using GitHub Actions. With these configurations and provided files, you can set up a seamless workflow to manage your containerised applications.

Prerequisites
Before getting started, ensure you have the following:

- An AWS account: [Sign up for Free Tier](https://aws.amazon.com/free/?gclid=CjwKCAjw34qzBhBmEiwAOUQcF0FfXS-1S1ephmxVFN2kEk12mhGDOdajO3VwBJkgBeWcnBqr-iTuCxoCnYYQAvD_BwE&trk=349e66be-cf8d-4106-ae2c-54262fc45524&sc_channel=ps&ef_id=CjwKCAjw34qzBhBmEiwAOUQcF0FfXS-1S1ephmxVFN2kEk12mhGDOdajO3VwBJkgBeWcnBqr-iTuCxoCnYYQAvD_BwE:G:s&s_kwcid=AL!4422!3!455709741582!e!!g!!aws%20free%20account!10817378576!108173614202)
- Docker installed on your local machine: [Docker Installation Guide](https://www.youtube.com/watch?v=snKOKWiiTok&t=668s)
- GitHub account: [Sign up for GitHub](https://github.com/signup)

## Running the Application locally
1. Fork this repository 

2. Once forked, go to your profile on GitHub, and clone the repository down to your local machine:

```bash
git clone https://github.com/headinthecloud5/youtube-docker-ci-aws-ecr.git
```

3. Navigate to the cloned repository:
```bash
cd youtube-docker-ci-aws-ecr
```

4. Build the Docker image:
```bash
docker build -t docker-manual-aws-ecr:1.0.0 .
```

5. Run the Docker container:
```bash
docker run -d --name docker-test-app -p 3000:3000 docker-manual-aws-ecr:1.0.0
```

6. Access the application in your web browser at http://localhost:3000.

## Automating with GitHub Actions
1. Configure AWS Credentials - To enable GitHub Actions to access AWS services such as ECR, we need to set up AWS credentials in GitHub as secrets. 

2. Commit and Push Your Changes:
```bash
git add .
git commit -m "Set up Docker build and push workflow"
git push origin main
```

3. Navigate to the "Actions" tab on GitHub to monitor the workflow's execution.

4. Once the workflow is triggered (e.g., on each push to the main branch), it will build the Docker image and push it to AWS ECR automatically.

7. Check your AWS account under ECR service, look for the newly created Docker image.

### Check out our YouTube Tutorial!
For a comprehensive step-by-step guide on setting up and using this automated workflow, watch our tutorial video on YouTube. In the video, we walk you through the entire process, from configuring the Dockerfile, nodejs + dependencies, and GitHub Actions workflow to pushing Docker images to AWS ECR.

## License
This project is licensed under the MIT License.

You are encouraged to tailor the workflow and Dockerfile to suit your specific needs. 
<br/> 
If you come across any challenges or have ideas for enhancements, don't hesitate to open an issue or send a pull request. Your contributions are greatly appreciated!
<br/> 
<br/> 
Thank you for your interest and support!
