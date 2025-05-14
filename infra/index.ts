import * as pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";
import * as awsx from "@pulumi/awsx";

import { EcrComponent } from "./modules/ecr";

// ECR repository
const ecrRepo = new EcrComponent("app-101", {
  repositoryName: "app-101",
  tags: {
    Environment: "dev",
    Project: "app-101",
  },
});


